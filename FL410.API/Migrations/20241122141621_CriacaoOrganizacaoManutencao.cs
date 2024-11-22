using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FL410.API.Migrations
{
    /// <inheritdoc />
    public partial class CriacaoOrganizacaoManutencao : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Documentos_PessoasJuridicas_PessoaJuridicaId",
                table: "Documentos");

            migrationBuilder.DropIndex(
                name: "IX_Documentos_PessoaJuridicaId",
                table: "Documentos");

            migrationBuilder.DropColumn(
                name: "PessoaJuridicaId",
                table: "Documentos");

            migrationBuilder.AddColumn<string>(
                name: "CNPJ",
                table: "PessoasJuridicas",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Endereco",
                table: "PessoasJuridicas",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "OMs",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    NomeFantasia = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RazaoSocial = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CNPJ = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CertificadoOM = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Endereco = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OMs", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OMs");

            migrationBuilder.DropColumn(
                name: "CNPJ",
                table: "PessoasJuridicas");

            migrationBuilder.DropColumn(
                name: "Endereco",
                table: "PessoasJuridicas");

            migrationBuilder.AddColumn<Guid>(
                name: "PessoaJuridicaId",
                table: "Documentos",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Documentos_PessoaJuridicaId",
                table: "Documentos",
                column: "PessoaJuridicaId");

            migrationBuilder.AddForeignKey(
                name: "FK_Documentos_PessoasJuridicas_PessoaJuridicaId",
                table: "Documentos",
                column: "PessoaJuridicaId",
                principalTable: "PessoasJuridicas",
                principalColumn: "Id");
        }
    }
}
