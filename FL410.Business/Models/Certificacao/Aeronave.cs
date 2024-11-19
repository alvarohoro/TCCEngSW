
public class Aeronave
{

    public Aeronave()
    {
        Id = Guid.NewGuid();
    }

    public Guid Id { get; set; }
    public string? Matricula { get; set; }
    public string? Fabricante { get; set; }
    public string? AnoFabricacao { get; set; }
    public string? Modelo { get; set; }
    public string? NumeroSerie { get; set; }
    public string? TipoICAO { get; set; }
    public string? CategoriaHomologacao { get; set; }
    public string? TipoHabilitacao { get; set; }
    public string? ClasseAeronave { get; set; }
    public string? PMD { get; set; }
    public string? MaxPAX { get; set; }
    public string? TipoVooAutorizado { get; set; }
    public string? TripMIN { get; set; }
    public string? NumeroAssentos { get; set; }
    public string? CategoriaRegistro { get; set; }
    public string? NumeroMatricula { get; set; }
    public string? StatusOperacao { get; set; }
    public string? Gravame { get; set; }
    public string? ValidadeCVA { get; set; }
    public string? SituacaoAeronavegabilidade {get;set;}


}