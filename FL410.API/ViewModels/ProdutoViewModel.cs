
public class ProdutoViewModel{
  
    public string? Id { get; set; }
    public string? AeronaveId { get; set; }
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

    public Produto ConverterParaProduto(ProdutoViewModel produtoVm){
        var produto = new Produto{
            Categoria = produtoVm.Categoria,
            Modelo = produtoVm.Modelo,
            Tipo = produtoVm.Tipo,
            Classificacao = produtoVm.Classificacao,
            NumerosDeSerie = produtoVm.NumerosDeSerie,
            DesignacaoComercial = produtoVm.DesignacaoComercial,
            DetentorCT = produtoVm.DetentorCT,
            Fabricante = produtoVm.Fabricante,
            ProdutoEstrangeiro = produtoVm.ProdutoEstrangeiro,
            NumeroTCDS = produtoVm.NumeroTCDS,
            ObsTCDS = produtoVm.ObsTCDS,
            BaseCertificacao = produtoVm.BaseCertificacao,
            Observacoes = produtoVm.Observacoes,
            CategoriaCertificacao = produtoVm.CategoriaCertificacao,
            Variantes = produtoVm.Variantes
        };
    
        if (produtoVm.Id != null){
                produto.Id = Guid.TryParse(produtoVm.Id, out Guid id) ? id : Guid.Empty;
        }

        return produto;
    }
}