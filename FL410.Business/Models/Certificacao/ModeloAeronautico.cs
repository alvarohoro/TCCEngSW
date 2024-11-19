
public class ModeloAeronautico
{
    [HtmlKey("Modelo Básico (Tipo)")]
    public string? ModeloBasico { get; set; }
    [HtmlKey("Designações Militares")]
    public string? DesignacoesMilitares { get; set; }
    [HtmlKey("Números de Série")]
    public string? NumerosDeSerie { get; set; }
    [HtmlKey("Designação Comercial")]
    public string? DesignacaoComercial { get; set; }
    [HtmlKey("Detentor do TC / CT")]
    public string? DetentorTCCT { get; set; }
    [HtmlKey("Fabricante")]
    public string? Fabricante { get; set; }
    [HtmlKey("Nº do TCDS")]
    public string? NumeroTCDS { get; set; }
    [HtmlKey("Obs do TCDS")]
    public string? ObsTCDS { get; set; }
    [HtmlKey("Base de Certificação")]
    public string? BaseCertificacao { get; set; }
    [HtmlKey("Categoria de Certificação")]
    public string? CategoriaCertificacao { get; set; }

    public List<Variante>? Variantes { get; set; }

}