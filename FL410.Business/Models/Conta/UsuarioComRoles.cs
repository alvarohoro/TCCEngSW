
using System.Security.Claims;

public class UsuarioComRoles
{

    public UsuarioComRoles()
    {
        
    }
    
    public UsuarioComRoles(ClaimsPrincipal user)
    {
        Nome = user.Identity?.Name;
        Roles = user.Claims.Where(c => c.Type == ClaimTypes.Role).Select(c => c.Value).ToList();
    }

    public string? Nome { get; set; }
    // public string Email { get; set; }
    // public bool IsEmailConfirmed { get; set; }
    public List<string>? Roles { get; set; }
    public string Email { get; set; }
    public string Iniciais 
    {
        get
        {
            if (string.IsNullOrWhiteSpace(Nome))
            {
                return string.Empty;
            }

            var iniciais = Nome.Split(' ').Select(p => p[0]);
            return string.Join("", iniciais).ToUpper();
        }
     }
}