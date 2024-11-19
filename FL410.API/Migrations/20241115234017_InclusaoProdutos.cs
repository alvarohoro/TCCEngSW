using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FL410.API.Migrations
{
    /// <inheritdoc />
    public partial class InclusaoProdutos : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Produtos",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Modelo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Tipo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Classificacao = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NumerosDeSerie = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DesignacaoComercial = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DetentorCT = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Fabricante = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProdutoEstrangeiro = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NumeroTCDS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ObsTCDS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BaseCertificacao = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Observacoes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CategoriaCertificacao = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Variantes = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Produtos", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Produtos");
        }
    }
}
