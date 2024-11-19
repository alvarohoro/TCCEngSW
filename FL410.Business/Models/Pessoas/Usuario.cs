using System;
using Microsoft.AspNetCore.Identity;

namespace FL410.Business.Models.Pessoas;

public class Usuario : IdentityUser
{
        public string? NomeCompleto { get; set; }
}
