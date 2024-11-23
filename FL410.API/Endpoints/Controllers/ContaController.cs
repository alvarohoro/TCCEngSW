
using System.ComponentModel.DataAnnotations;
using System.Security.Claims;
using FL410.API.Data;
using FL410.Business.Models.Pessoas;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FL410.API.Endpoints.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ContaController : ControllerBase
{

    private readonly IHttpContextAccessor _httpContextAccessor;


    private readonly FL410Context _context;
    public ContaController(FL410Context context, IHttpContextAccessor httpContextAccessor)
    {
        _context = context;
        _httpContextAccessor = httpContextAccessor;

    }

    // [HttpGet("TestandoBanco")]
    // public async Task<ActionResult> TestandoBanco()
    // {
    //     var dados = await _context.Users.ToListAsync();
    //     return Ok(dados);
    // }


    [HttpPost("Login")]
    public async Task<ActionResult> Login([FromServices] IServiceProvider sp, [FromBody] LoginRequest login, [FromQuery] bool? useCookies, [FromQuery] bool? useSessionCookies)
    {
        var signInManager = sp.GetRequiredService<SignInManager<Usuario>>();

        var useCookieScheme = (useCookies == true) || (useSessionCookies == true);
        var isPersistent = (useCookies == true) && (useSessionCookies != true);
        signInManager.AuthenticationScheme = useCookieScheme ? IdentityConstants.ApplicationScheme : IdentityConstants.BearerScheme;

        var result = await signInManager.PasswordSignInAsync(login.Email, login.Password, isPersistent, lockoutOnFailure: false);

        if (result.RequiresTwoFactor)
        {
            if (!string.IsNullOrEmpty(login.TwoFactorCode))
            {
                result = await signInManager.TwoFactorAuthenticatorSignInAsync(login.TwoFactorCode, isPersistent, rememberClient: isPersistent);
            }
            else if (!string.IsNullOrEmpty(login.TwoFactorRecoveryCode))
            {
                result = await signInManager.TwoFactorRecoveryCodeSignInAsync(login.TwoFactorRecoveryCode);
            }
        }

        if (!result.Succeeded)
        {
            return Unauthorized(result);
        }

        // The signInManager already produced the needed response in the form of a cookie or bearer token.
        return Ok();
    }

    // [HttpGet("TestarBanco")]
    // public ActionResult TestarBanco()
    // {
    //     var documentos = _context.DAs.AsNoTracking().Take(2).ToList();
    //     return Ok(documentos);
    // }


    [HttpGet("ObterRoles")]
    public ActionResult ObterRoles([FromServices] IServiceProvider sp)
    {

        var usuario = _httpContextAccessor.HttpContext?.User;

        if (usuario is null)
        {
            return Unauthorized();
        }

        return Ok(usuario.Claims.Where(c => c.Type == ClaimTypes.Role).Select(c => c.Value).ToList());
    }


    [HttpGet("ObterUsuarioComRoles")]
    public ActionResult ObterUsuarioComRoles([FromServices] IServiceProvider sp)
    {
        var usuario = _httpContextAccessor.HttpContext?.User;

        if (usuario is null)
        {
            return Unauthorized();
        }

        return Ok(new UsuarioComRoles(usuario));
    }

    [HttpGet("MudarNome/{novoNome}")]
    public async Task<ActionResult> MudarNomeAsync([FromServices] IServiceProvider sp, string novoNome)
    {
        var usuario = _httpContextAccessor.HttpContext?.User;

        if (usuario is null)
        {
            return Unauthorized();
        }

        var userManager = sp.GetRequiredService<UserManager<Usuario>>();
        var signInManager = sp.GetRequiredService<SignInManager<Usuario>>(); // Adicione o SignInManager

        var userId = usuario.FindFirstValue(ClaimTypes.NameIdentifier);
        if (userId == null)
        {
            return Unauthorized();
        }
        var user = userManager.FindByIdAsync(userId).Result;

        if (user == null)
        {
            return NotFound("User not found.");
        }

        user.UserName = novoNome;
        await userManager.UpdateAsync(user);

        await signInManager.RefreshSignInAsync(user);

        return Ok();
    }
    private static async Task<InfoResponse> CreateInfoResponseAsync<TUser>(TUser user, UserManager<TUser> userManager)
            where TUser : class
    {
        return new()
        {
            Email = await userManager.GetEmailAsync(user) ?? throw new NotSupportedException("Users must have an email."),
            IsEmailConfirmed = await userManager.IsEmailConfirmedAsync(user),
        };
    }



    private static readonly EmailAddressAttribute _emailAddressAttribute = new();


    [HttpPost("Registrar")]
    public async Task<ActionResult> RegistrarAsync([FromBody] RegisterRequest registration, [FromServices] IServiceProvider sp)
    {
        var userManager = sp.GetRequiredService<UserManager<Usuario>>();

        var userStore = sp.GetRequiredService<IUserStore<Usuario>>();
        var emailStore = (IUserEmailStore<Usuario>)userStore;
        var email = registration.Email;

        var context = ControllerContext.HttpContext;

        if (string.IsNullOrEmpty(email) || !_emailAddressAttribute.IsValid(email))
        {
            var problemDetails = new ValidationProblemDetails
            {
                Detail = "The email address is invalid.",
                Status = StatusCodes.Status400BadRequest,
                Title = "Invalid email address",
                Instance = context.Request.Path,
            };
            return ValidationProblem(problemDetails);
            //return CreateValidationProblem(IdentityResult.Failed(userManager.ErrorDescriber.InvalidEmail(email)));
        }

        var user = new Usuario();
        await userStore.SetUserNameAsync(user, email, CancellationToken.None);
        await emailStore.SetEmailAsync(user, email, CancellationToken.None);
        var result = await userManager.CreateAsync(user, registration.Password);

        if (!result.Succeeded)
        {
            var problemDetails = new ValidationProblemDetails
            {
                Title = "Validation Error",
                Status = StatusCodes.Status400BadRequest
            };

            foreach (var error in result.Errors)
            {
                problemDetails.Errors.Add(error.Code, new[] { error.Description });
            }

            return ValidationProblem(problemDetails);
        }

        // await SendConfirmationEmailAsync(user, userManager, context, email);
        return Ok();
    }


    // public async Task<ActionResult<IEnumerable<Usuario>>> GetUsuario()
    // {

    //     return await _context.
    // }

}