

using FL410.API.Data;
using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class ConfiguracaoController : ControllerBase
{

    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly FL410Context _context;

    public ConfiguracaoController(IHttpContextAccessor httpContextAccessor, FL410Context context)
    {
        _httpContextAccessor = httpContextAccessor;
        _context = context;
    }

    [HttpGet]
    public ActionResult Get()
    {
        var om = _context.OMs?.FirstOrDefault();
        return Ok(om);
    }

    [HttpPost]
    public ActionResult Post(OrganizacaoManutencao om){

        if(om.Id != Guid.Empty){
            var omExistente = _context.OMs?.FirstOrDefault(o => o.Id == om.Id);
            if(omExistente != null){
                omExistente.NomeFantasia = om.NomeFantasia;
                omExistente.RazaoSocial = om.RazaoSocial;
                omExistente.CNPJ = om.CNPJ;
                omExistente.CertificadoOM = om.CertificadoOM;
                omExistente.Endereco = om.Endereco;
                _context.SaveChanges();
                return Ok();
            }
        }

        _context.Add(om);
        _context.SaveChanges();
        return Ok();
    }

}