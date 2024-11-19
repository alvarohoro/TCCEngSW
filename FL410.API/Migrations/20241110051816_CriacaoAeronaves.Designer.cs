﻿// <auto-generated />
using System;
using FL410.API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace FL410.API.Migrations
{
    [DbContext(typeof(FL410Context))]
    [Migration("20241110051816_CriacaoAeronaves")]
    partial class CriacaoAeronaves
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Aeronave", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("AnoFabricacao")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CategoriaHomologacao")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CategoriaRegistro")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClasseAeronave")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Fabricante")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Gravame")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Matricula")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MaxPAX")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Modelo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NumeroAssentos")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NumeroMatricula")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NumeroSerie")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PMD")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("StatusOperacao")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TipoHabilitacao")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TipoICAO")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TipoVooAutorizado")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TripMIN")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Aeronaves");
                });

            modelBuilder.Entity("FCDA", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Aplicabilidade")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Aprovador")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AssinaturaAprovador")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AssinaturaExecutante")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CyclesSinceLastInspection")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CyclesSinceNew")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CyclesSinceOverhaul")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DataCumprimento")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DescricaoCumprimento")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Dificuldade")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Efetividade")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Entidade")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Executante")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Fabricante")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("InstrucaoReferencia")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("JustificativaNaoAplicabilidade")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Local")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LocalCumprimento")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Marcas")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MetodoCumprimento")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Modelo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NovoVencimento")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NumeroDA")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("OutraReferencia")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PartNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ProdutoAplicavel")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Resultado")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SerialNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TimeSinceLastInspection")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TimeSinceNew")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TimeSinceOverhaul")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TipoCumprimento")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Vencimento")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VendorNumber")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("FCDAs");
                });

            modelBuilder.Entity("FL410.Business.Models.Documentos.DA", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Documentos")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Efetividade")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Fabricante")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Lingua")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Modelo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NumeroDiretriz")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("NumeroEmenda")
                        .HasColumnType("int");

                    b.Property<string>("Produto")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Revogou")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Sistema")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Situacao")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("DAs");
                });

            modelBuilder.Entity("FL410.Business.Models.Documentos.Fabricante", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("DataConsulta")
                        .HasColumnType("datetime2");

                    b.Property<string>("Fantasia")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("OrgCodi")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RazaoSocial")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TipoFabricante")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Uri")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("DA_Fabricantes");
                });

            modelBuilder.Entity("FL410.Business.Models.Pessoas.Documento", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("DataEmissao")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DataValidade")
                        .HasColumnType("datetime2");

                    b.Property<string>("LinkAnexo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("OrgaoEmissor")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid?>("PessoaFisicaId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("PessoaId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("PessoaJuridicaId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Tipo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Valor")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("PessoaFisicaId");

                    b.HasIndex("PessoaId");

                    b.HasIndex("PessoaJuridicaId");

                    b.ToTable("Documentos");
                });

            modelBuilder.Entity("FL410.Business.Models.Pessoas.Pessoa", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.ToTable("Pessoas");
                });

            modelBuilder.Entity("FL410.Business.Models.Pessoas.PessoaFisica", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Nome")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Sobrenome")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("PessoasFisicas");
                });

            modelBuilder.Entity("FL410.Business.Models.Pessoas.PessoaJuridica", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("NomeFantasia")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RazaoSocial")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("PessoasJuridicas");
                });

            modelBuilder.Entity("FL410.Business.Models.Pessoas.Usuario", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("NomeCompleto")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("RoleId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens", (string)null);
                });

            modelBuilder.Entity("FL410.Business.Models.Pessoas.Documento", b =>
                {
                    b.HasOne("FL410.Business.Models.Pessoas.PessoaFisica", null)
                        .WithMany("Documentos")
                        .HasForeignKey("PessoaFisicaId");

                    b.HasOne("FL410.Business.Models.Pessoas.Pessoa", "Pessoa")
                        .WithMany("Documentos")
                        .HasForeignKey("PessoaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("FL410.Business.Models.Pessoas.PessoaJuridica", null)
                        .WithMany("Documentos")
                        .HasForeignKey("PessoaJuridicaId");

                    b.Navigation("Pessoa");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("FL410.Business.Models.Pessoas.Usuario", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("FL410.Business.Models.Pessoas.Usuario", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("FL410.Business.Models.Pessoas.Usuario", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("FL410.Business.Models.Pessoas.Usuario", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("FL410.Business.Models.Pessoas.Pessoa", b =>
                {
                    b.Navigation("Documentos");
                });

            modelBuilder.Entity("FL410.Business.Models.Pessoas.PessoaFisica", b =>
                {
                    b.Navigation("Documentos");
                });

            modelBuilder.Entity("FL410.Business.Models.Pessoas.PessoaJuridica", b =>
                {
                    b.Navigation("Documentos");
                });
#pragma warning restore 612, 618
        }
    }
}
