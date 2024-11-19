
public class Produto{
    public Produto()
    {
        
    }

    public Guid Id { get; set; }
    public Aeronave? Aeronave { get; set; }
    public Guid? AeronaveId { get; set; }
    public string? Categoria { get; set; }
    public string? Modelo { get; set; }
    public string? Tipo { get; set; }
    public string? Classificacao { get; set; }
    public string? NumerosDeSerie { get; set; }
    public string? DesignacaoComercial { get; set; }
    public string? DetentorCT { get; set; }
    public string? Fabricante { get; set; }
    public string? ProdutoEstrangeiro { get; set; }
    public string? NumeroTCDS { get; set; }
    public string? ObsTCDS { get; set; }
    public string? BaseCertificacao { get; set; }
    public string? Observacoes { get; set; }
    public string? CategoriaCertificacao { get; set; }
    public string? Variantes { get; set; }
}