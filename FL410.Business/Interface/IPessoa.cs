using System;
using FL410.Business.Models.Pessoas;

namespace FL410.Business.Interface;

public interface IPessoa
{
    Guid Id {get;set;}   
    public List<Documento>? Documentos {get;set;}
}
