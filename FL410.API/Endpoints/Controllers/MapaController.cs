
using FL410.API.Data;
using Microsoft.AspNetCore.Mvc;


[Route("api/[controller]")]
[ApiController]
public class MapaController : ControllerBase
{

    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly FL410Context _context;

    public MapaController(IHttpContextAccessor httpContextAccessor, FL410Context context)
    {
        _httpContextAccessor = httpContextAccessor;
        _context = context;

    }

    [HttpGet("{matricula}/{tipo}")]
    public ActionResult ObterMapa(string matricula, string tipo)
    {
        var aeronave = _context.Aeronaves?.FirstOrDefault(a => a.Matricula == matricula);
        // var produto = _context.Produtos?.FirstOrDefault(p => p.Nome == tipo);
        var fcdas = _context.FCDAs?.Where(f => f.Aeronave != null && f.Aeronave.Matricula == matricula).ToList();

        return Ok(new{ fcdas, aeronave});
    }
    


}