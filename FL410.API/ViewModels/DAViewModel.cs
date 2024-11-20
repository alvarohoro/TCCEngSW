
using FL410.Business.Models.Documentos;

public class DAViewModel
{
    public DAViewModel()
    {

    }
    public string? Id { get; set; }
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

    public DA ConvertToDA()
    {

        if (string.IsNullOrEmpty(Id))
        {
            Id = Guid.Empty.ToString();
        }
        
        return new DA(Guid.Parse(Id), NumeroEmenda, Situacao, Produto, Efetividade, Lingua, Revogou, Documentos, Sistema, Fabricante, Modelo, NumeroDiretriz);
    }
}
