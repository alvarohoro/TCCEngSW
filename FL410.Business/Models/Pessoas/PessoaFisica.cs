using System;
using FL410.Business.Interface;

namespace FL410.Business.Models.Pessoas;

public class PessoaFisica : IPessoa
{
    public Guid Id { get; set; }
    public virtual List<Documento>? Documentos { get; set; }
    public string? Nome { get; set; }
    public string? Sobrenome { get; set; }
}
