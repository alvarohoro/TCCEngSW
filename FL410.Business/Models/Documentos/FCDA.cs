using FL410.Business.Models.Documentos;

public class FCDA
{

    public FCDA()
    {

    }
    public Guid Id { get; set; }
    public Guid? AeronaveId { get; set; }
    public Guid? DAId { get; set; }
    public Guid? ProdutoId { get; set; }
    public virtual Aeronave? Aeronave { get; set; }
    public virtual DA? DA { get; set; }
    public virtual Produto? Produto { get; set; }

    public string? Efetividade { get; set; }
    public string? Vencimento { get; set; }
    public string? ProdutoAplicavel { get; set; }
    public string? TipoCumprimento { get; set; }
    public string? Aplicabilidade { get; set; }
    public string? JustificativaNaoAplicabilidade { get; set; }
    public string? InstrucaoReferencia { get; set; }
    public string? OutraReferencia { get; set; }
    // public string? Fabricante { get; set; }
    // public string? Modelo { get; set; }
    // public string? PartNumber { get; set; }
    // public string? SerialNumber { get; set; }
    // public string? VendorNumber { get; set; }
    public string? TimeSinceNew { get; set; }
    public string? CyclesSinceNew { get; set; }
    public string? TimeSinceOverhaul { get; set; }
    public string? CyclesSinceOverhaul { get; set; }
    public string? TimeSinceLastInspection { get; set; }
    public string? CyclesSinceLastInspection { get; set; }
    public string? LocalCumprimento { get; set; }
    public string? DataCumprimento { get; set; }
    public string? MetodoCumprimento { get; set; }
    public string? DescricaoCumprimento { get; set; }
    public string? Resultado { get; set; }
    public string? Dificuldade { get; set; }
    public string? NovoVencimento { get; set; }
    public string? Executante { get; set; }
    public string? AssinaturaExecutante { get; set; }
    public string? Aprovador { get; set; }
    public string? AssinaturaAprovador { get; set; }
    public string? Entidade { get; set; }
    public string? Local { get; set; }
}