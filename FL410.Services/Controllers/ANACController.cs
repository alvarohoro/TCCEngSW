using System;
using FL410.Business.Models.Documentos;
using FL410.Services.ANAC;
using Microsoft.AspNetCore.Mvc;

namespace FL410.Services.Controllers;


[ApiController]
[Route("api/[controller]")]
public class ANACController : ControllerBase
{


[HttpGet("AtualizarFabricantes")]
    public async Task<IActionResult> AtualizarFabricantes()
    {
        var fabricantes = await ServicosDA.ObterFabricantes();

        var fl410API_URL = Environment.GetEnvironmentVariable("FL410_API_URL");

        var client = new HttpClient();
        
        var retorno = await client.PostAsJsonAsync($"{fl410API_URL}/api/ANAC/DA/Fabricante/Batch", fabricantes);

        if (retorno.IsSuccessStatusCode)
        {
            return Ok(retorno.Content.ReadFromJsonAsAsyncEnumerable<Fabricante>());
        }
        else
        {
            return BadRequest();
        }

        
    }


    [HttpGet("ObterESalvarProdutos")]
    public async Task<IActionResult> ObterESalvarProdutos()
    {
        var fabricantes = await ServicosDA.ObterESalvarProdutos();

        var fl410API_URL = Environment.GetEnvironmentVariable("FL410_API_URL");

        // var client = new HttpClient();
        
        // var retorno = await client.PostAsJsonAsync($"{fl410API_URL}/api/ANAC/DA/Fabricante/Batch", fabricantes);

        // if (retorno.IsSuccessStatusCode)
        // {
        //     return Ok(retorno.Content.ReadFromJsonAsAsyncEnumerable<Fabricante>());
        // }
        // else
        // {
        //     return BadRequest();
        // }

        return Ok(fabricantes);
        
    }

    [HttpGet("ProcessarProdutosSalvos")]
    public async Task<IActionResult> ProcessarProdutosSalvos()
    {
        var produtos = ServicosDA.ProcessarProdutosSalvos();

        return Ok(produtos);
               
    }

}
