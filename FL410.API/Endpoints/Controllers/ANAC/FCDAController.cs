
using FL410.API.Data;
using FL410.API.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Controller;

[Route("api/[controller]")]
[ApiController]
public class FCDAController : ControllerBase
{

    private readonly FL410Context _context;

    public FCDAController(FL410Context context)
    {
        _context = context;
    }


    [HttpPost]
    public ActionResult Post(FcdaViewModel fcdaVm)
    {
        var fcda = fcdaVm.ConverterParaFCDA();

        var aeronave = _context.Aeronaves.FirstOrDefault(a => a.Matricula == fcdaVm.Marcas);
        var da = _context.DAs.FirstOrDefault(d => d.NumeroDiretriz == fcdaVm.NumeroDa);
        var produto = _context.Produtos.FirstOrDefault(p => p.Id == fcdaVm.ProdutoId);

        fcda.AeronaveId = aeronave != null ? aeronave.Id : (Guid?)null;
        fcda.ProdutoId = produto != null ? produto.Id : (Guid?)null;

        if (da == null)
        {
            return NotFound("DA não encontrada");
        }
        fcda.DAId = da.Id;

        if (fcda.Id != Guid.Empty)
        {
            _context.FCDAs.Update(fcda);
            _context.SaveChanges();
            return Ok();
        }

        _context.FCDAs.Add(fcda);
        _context.SaveChanges();

        //  TODO: Fazer o CRUD de Aeronaves, Motores, Hélices e Equipamentos
        // TODO2: Transformar campos de text na FCDA para obter esses dados

        return Ok();
    }

    [HttpGet]
    public async Task<ActionResult<List<FCDA>>> Get()
    {
        return await _context.FCDAs.Include(x => x.Aeronave).Include(x => x.DA).Include(x => x.Produto).ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<FCDA>> Get(Guid id)
    {
        var fcda = await _context.FCDAs.FindAsync(id);

        if (fcda == null)
        {
            return NotFound();
        }

        return fcda;
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> Delete(Guid id)
    {
        var fcda = await _context.FCDAs.FindAsync(id);

        if (fcda == null)
        {
            return NotFound();
        }

        _context.FCDAs.Remove(fcda);
        await _context.SaveChangesAsync();

        return NoContent();
    }

}