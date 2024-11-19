using System;

namespace FL410.Business.Models.Documentos;

public class DA
{

    public DA()
    {
    }
    
    public DA(Guid id, int numeroEmenda, string? situacao, string? produto, string? efetividade, string? lingua, string? revogou, string? documentos, string? sistema, string? fabricante, string? modelo, string? numeroDiretriz)
    {
        Id = id;
        NumeroEmenda = numeroEmenda;
        Situacao = situacao;
        Produto = produto;
        Efetividade = efetividade;
        Lingua = lingua;
        Revogou = revogou;
        Documentos = documentos;
        Sistema = sistema;
        Fabricante = fabricante;
        Modelo = modelo;
        NumeroDiretriz = numeroDiretriz;

        
    }

    public Guid Id { get; set; }
    public int NumeroEmenda { get; set; }
    public string? Situacao { get; set; }
    public string? Produto { get; set; }
    public string? Efetividade { get; set; }
    public string? Lingua { get; set; }
    public string? Revogou { get; set; }
    public string? Documentos { get; set; }
    public string? Sistema { get; set; }
    public string? Fabricante { get; set; }
    public string? Modelo { get; set; }
    public string? NumeroDiretriz { get; set; }





}
