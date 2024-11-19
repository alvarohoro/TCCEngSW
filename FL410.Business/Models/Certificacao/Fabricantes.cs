using System;

namespace FL410.Business.Models.Documentos;

public class Fabricante
{

    public Fabricante()
    {
        //Id = Guid.NewGuid();
        DataConsulta = DateTime.Now;

    }

    public Fabricante(string RazaoSocial, string Fantasia, string TipoFabricante, string OrgCodi, string Uri)
    {
        Id = Guid.NewGuid();
        this.RazaoSocial = RazaoSocial;
        this.Fantasia = Fantasia;
        this.TipoFabricante = TipoFabricante;
        this.OrgCodi = OrgCodi;
        this.Uri = Uri;
        this.DataConsulta = DateTime.Now;


    }

    public Guid Id { get; set; }
    public string? RazaoSocial { get; set; }
    public string? Fantasia { get; set; }
    public string? TipoFabricante { get; set; }
    public string? OrgCodi { get; set; }
    public string? Uri { get; set; }
    public DateTime DataConsulta { get; set; }

}
