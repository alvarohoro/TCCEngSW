
using FL410.API.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Controller;

[Route("api/[controller]")]
[ApiController]
public class FCDAController : ControllerBase
{

    public FCDAController()
    {

    }

    [HttpPost("Fcda")]
    public ActionResult Post(FcdaViewModel fcdaJson){
        var fcda2 = fcdaJson;
        var fcda3 = fcda2;

//  TODO: Fazer o CRUD de Aeronaves, Motores, Hélices e Equipamentos
// TODO2: Transformar campos de text na FCDA para obter esses dados

        return Ok();
    }

}