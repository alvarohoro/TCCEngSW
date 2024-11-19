using System;
using FL410.Business.Interface;

namespace FL410.Business.Models.Pessoas;

public class Pessoa : IPessoa
{
    public Guid Id { get; set; }
    public virtual List<Documento>? Documentos {get;set;}
}
