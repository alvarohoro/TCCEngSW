using System;
using FL410.Business.Interface;

namespace FL410.Business.Models.Pessoas;

public class PessoaJuridica : IPessoa
{
    public Guid Id {get; set;}
    public virtual List<Documento>? Documentos {get; set;}
    public string? RazaoSocial { get; set; }
    public string? NomeFantasia { get; set; }
}
