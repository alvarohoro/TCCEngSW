using System;
using FL410.Business.Models.Documentos;
using FL410.Business.Models.Pessoas;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace FL410.API.Data;

public class FL410Context : IdentityDbContext<Usuario>
{
    public FL410Context(DbContextOptions<FL410Context> options) : base(options)
    {
    }

    public DbSet<Documento> Documentos { get; set; }
    public DbSet<Pessoa> Pessoas { get; set; }
    public DbSet<PessoaFisica> PessoasFisicas { get; set; }
    public DbSet<PessoaJuridica> PessoasJuridicas { get; set; }
    public DbSet<DA> DAs { get; set; }
    public DbSet<Fabricante> DA_Fabricantes { get; set; }
    public DbSet<FCDA> FCDAs {get;set;}
    public DbSet<Aeronave> Aeronaves {get;set;}
    public DbSet<Produto> Produtos {get;set;}
    public DbSet<OrganizacaoManutencao> OMs {get;set;} 

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Usuario>().Property(u => u.NomeCompleto).HasMaxLength(256);

        // var usuarioAdmin = new Usuario
        // {
        //     UserName = "admin@admin.com",
        //     NormalizedUserName = "ADMIN",
        //     Email = "admin@admin.com",
        //     PasswordHash = "AQAAAAIAAYagAAAAEJRciKUPTpBcaiXY7e1j0ilTL8RQ3SJw0Q4G5wv+A7RpPVbJEZzXqbuDVeS4abIl4w==",
        //     SecurityStamp = "YSVNECGFPLINQB6KIVWUKADTZZ2H6K6F"
        // };

        // modelBuilder.Entity<Usuario>().HasData(
        //         usuarioAdmin
        //     );

        // var regraAdmin = new IdentityRole("Admin");

        // modelBuilder.Entity<IdentityRole>().HasData(
        //         regraAdmin
        //     );

        // modelBuilder.Entity<IdentityUserRole<string>>().HasData(
        //         new IdentityUserRole<string>
        //         {
        //             RoleId = regraAdmin.Id,
        //             UserId = usuarioAdmin.Id
        //         }
        //     );
        // // modelBuilder.HasDefaultSchema("identity");
    }
}
