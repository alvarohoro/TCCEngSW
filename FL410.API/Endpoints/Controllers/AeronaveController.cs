
using FL410.API.Data;
using FL410.API.ViewModels;
using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class AeronaveController : ControllerBase
{

    private readonly FL410Context _context;


    public AeronaveController(FL410Context context)
    {
        _context = context;
    }

    [HttpPost]
    public ActionResult Post(Aeronave aeronave)
    {

        if (aeronave == null)
        {
            return BadRequest("Aeronave inválida");
        }

        if (_context.Aeronaves.Where(x=>x.Id == aeronave.Id).Any())
        {
            _context.Update(aeronave);
            _context.SaveChanges();
            return Ok(aeronave.Id);
        }

        if (_context.Aeronaves.Any(x => x.Matricula == aeronave.Matricula))
        {
            return BadRequest("Aeronave já cadastrada");
        }
        
        
        _context.Add(aeronave);
        _context.SaveChanges();
        return Ok(aeronave.Id);
    }

    [HttpPost]
    [Route("/api/Aeronaves")]
    public ActionResult PostAeronaves(List<Aeronave> aeronaves){
        foreach(var aeronave in aeronaves){
            if (_context.Aeronaves.Where(x=>x.Matricula == aeronave.Matricula).Any())
            {
                _context.Update(aeronave);
                _context.SaveChanges();
            }
            else{
                _context.Add(aeronave);
                _context.SaveChanges();
            }
        }
        return Ok();
    }

    [HttpGet]
    public ActionResult Get(){
        var aeronaves =_context.Aeronaves.ToList();
        return Ok(aeronaves);
    }

        [HttpGet("{matricula}")]
    public ActionResult Get(string matricula){
        var aeronaves =_context.Aeronaves.Where(x=>x.Matricula==matricula).FirstOrDefault();
        return Ok(aeronaves);
    }

    [HttpGet("parciais")]
    public ActionResult GetAeronavesParciais(){
        var matriculas = _context.Aeronaves.Select(x=> new{x.Id, x.Fabricante, x.Modelo, x.Matricula}).OrderBy(x=>x.Matricula).ToList();
        return Ok(matriculas);
    }

    [HttpDelete]
    public ActionResult Delete(Aeronave aeronave)
    {
        var aeronaveEspecifica = _context.Aeronaves.FirstOrDefault(x => x.Matricula == aeronave.Matricula);
        if (aeronaveEspecifica == null)
        {
            return NotFound();
        }
        _context.Remove(aeronaveEspecifica);
        _context.SaveChanges();
        return Ok();

    }

}