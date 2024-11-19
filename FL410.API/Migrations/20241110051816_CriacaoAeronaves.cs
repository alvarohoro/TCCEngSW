using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FL410.API.Migrations
{
    /// <inheritdoc />
    public partial class CriacaoAeronaves : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Aeronaves",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Matricula = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Fabricante = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AnoFabricacao = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Modelo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NumeroSerie = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TipoICAO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CategoriaHomologacao = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TipoHabilitacao = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClasseAeronave = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PMD = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MaxPAX = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TipoVooAutorizado = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TripMIN = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NumeroAssentos = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CategoriaRegistro = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NumeroMatricula = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StatusOperacao = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Gravame = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Aeronaves", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Aeronaves");
        }
    }
}
