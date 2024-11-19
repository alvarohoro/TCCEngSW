
using FL410.API.Data;
using FL410.API.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("api/[controller]")]
[ApiController]
public class ProdutoController : ControllerBase
{

    private readonly FL410Context _context;


    public ProdutoController(FL410Context context)
    {
        _context = context;
    }

    [HttpPost]
    public ActionResult Post(ProdutoViewModel produtoVm)
    {
        if (produtoVm == null)
        {
            return BadRequest("Produto inválida");
        }

        var produto = produtoVm.ConverterParaProduto(produtoVm);

        if (_context.Produtos.Where(x => x.Id == produto.Id).Any())
        {
            var aeronave = _context.Aeronaves.FirstOrDefault(x => x.Matricula == produtoVm.AeronaveId);
            if (aeronave != null)
            {
                produto.AeronaveId = aeronave.Id;
            }

            _context.Update(produto);
            _context.SaveChanges();
            return Ok(produto.Id);
        }

        if (_context.Produtos.Any(x => x.Modelo == produtoVm.Modelo))
        {
            return BadRequest("Produto já cadastrada");
        }


        _context.Add(produto);
        _context.SaveChanges();
        return Ok(produto.Id);
    }

    [HttpGet]
    public ActionResult Get()
    {
        var produtos = _context.Produtos.Include(x => x.Aeronave).ToList();
        return Ok(produtos);
    }

    [HttpGet("matricula={matricula}&dados=parciais")]
    public ActionResult GetProdutosParciaisPorMatricula(string matricula)
    {
        var produtos = _context.Produtos.Where(x => x.Aeronave != null && x.Aeronave.Matricula == matricula).Select(x => new { x.Id, x.Categoria, x.Fabricante, x.Modelo }).ToList();
        return Ok(produtos);
    }

    [HttpGet("matricula={matricula}&dados=completos")]
    public ActionResult GetProdutosCompletosPorMatricula(string matricula)
    {
        var produtos = _context.Produtos.Where(x => x.Aeronave != null && x.Aeronave.Matricula == matricula).ToList();
        return Ok(produtos);
    }

    [HttpGet("modelo={modelo}")]
    public ActionResult Get(string modelo)
    {
        var produtos = _context.Produtos.Include(x => x.Aeronave).Where(x => x.Modelo == modelo).FirstOrDefault();
        return Ok(produtos);
    }

    [HttpDelete]
    public ActionResult Delete(Produto produto)
    {
        var produtoEspecifica = _context.Produtos.FirstOrDefault(x => x.Modelo == produto.Modelo);
        if (produtoEspecifica == null)
        {
            return NotFound();
        }
        _context.Remove(produtoEspecifica);
        _context.SaveChanges();
        return Ok();

    }



}