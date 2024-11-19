using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FL410.API.Migrations
{
    /// <inheritdoc />
    public partial class SimplificacaoDoModeloRelacionadosAosDocumentos : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Documentos_TiposDocumentos_TipoDocumentoId",
                table: "Documentos");

            migrationBuilder.DropTable(
                name: "TiposDocumentos");

            migrationBuilder.DropTable(
                name: "CategoriasDocumento");

            migrationBuilder.DropIndex(
                name: "IX_Documentos_TipoDocumentoId",
                table: "Documentos");

            migrationBuilder.DropColumn(
                name: "TipoDocumentoId",
                table: "Documentos");

            migrationBuilder.AddColumn<string>(
                name: "Tipo",
                table: "Documentos",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Tipo",
                table: "Documentos");

            migrationBuilder.AddColumn<Guid>(
                name: "TipoDocumentoId",
                table: "Documentos",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "CategoriasDocumento",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Valor = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoriasDocumento", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TiposDocumentos",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CategoriaDocumentoId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Tipo = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TiposDocumentos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TiposDocumentos_CategoriasDocumento_CategoriaDocumentoId",
                        column: x => x.CategoriaDocumentoId,
                        principalTable: "CategoriasDocumento",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Documentos_TipoDocumentoId",
                table: "Documentos",
                column: "TipoDocumentoId");

            migrationBuilder.CreateIndex(
                name: "IX_TiposDocumentos_CategoriaDocumentoId",
                table: "TiposDocumentos",
                column: "CategoriaDocumentoId");

            migrationBuilder.AddForeignKey(
                name: "FK_Documentos_TiposDocumentos_TipoDocumentoId",
                table: "Documentos",
                column: "TipoDocumentoId",
                principalTable: "TiposDocumentos",
                principalColumn: "Id");
        }
    }
}
