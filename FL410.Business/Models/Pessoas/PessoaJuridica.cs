using System;
using FL410.Business.Interface;

namespace FL410.Business.Models.Pessoas;

public class PessoaJuridica
{
    public Guid Id {get; set;}
    public string? CNPJ {get;set;}
    public string? Endereco { get; set; }
    public string? RazaoSocial { get; set; }
    public string? NomeFantasia { get; set; }
    
}
