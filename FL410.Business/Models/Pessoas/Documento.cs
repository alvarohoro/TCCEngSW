using System;
using FL410.Business.Interface;

namespace FL410.Business.Models.Pessoas;

public class Documento
{
    public Guid Id { get; set; }
    public string? Valor { get; set; }
    public string? Tipo { get; set; }
    public DateTime DataEmissao { get; set; }
    public DateTime DataValidade { get; set; }
    public string? OrgaoEmissor { get; set; }
    public string? LinkAnexo { get; set; }
    public Pessoa? Pessoa { get; set; }
    public Guid PessoaId { get; set; }
}
