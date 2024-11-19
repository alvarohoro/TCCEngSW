using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FL410.API.Migrations
{
    /// <inheritdoc />
    public partial class CriacaoDeFCDA : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Efetividade",
                table: "DAs",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.CreateTable(
                name: "FCDAs",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Marcas = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NumeroDA = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Efetividade = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Vencimento = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProdutoAplicavel = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TipoCumprimento = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Aplicabilidade = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    JustificativaNaoAplicabilidade = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    InstrucaoReferencia = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OutraReferencia = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Fabricante = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Modelo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PartNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SerialNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VendorNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TimeSinceNew = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CyclesSinceNew = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TimeSinceOverhaul = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CyclesSinceOverhaul = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TimeSinceLastInspection = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CyclesSinceLastInspection = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LocalCumprimento = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DataCumprimento = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MetodoCumprimento = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DescricaoCumprimento = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Resultado = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Dificuldade = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NovoVencimento = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Executante = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AssinaturaExecutante = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Aprovador = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AssinaturaAprovador = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Entidade = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Local = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FCDAs", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FCDAs");

            migrationBuilder.AlterColumn<DateTime>(
                name: "Efetividade",
                table: "DAs",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);
        }
    }
}
