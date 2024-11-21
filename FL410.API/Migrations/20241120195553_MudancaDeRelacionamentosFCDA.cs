using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FL410.API.Migrations
{
    /// <inheritdoc />
    public partial class MudancaDeRelacionamentosFCDA : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Fabricante",
                table: "FCDAs");

            migrationBuilder.DropColumn(
                name: "Marcas",
                table: "FCDAs");

            migrationBuilder.DropColumn(
                name: "Modelo",
                table: "FCDAs");

            migrationBuilder.DropColumn(
                name: "NumeroDA",
                table: "FCDAs");

            migrationBuilder.DropColumn(
                name: "PartNumber",
                table: "FCDAs");

            migrationBuilder.DropColumn(
                name: "SerialNumber",
                table: "FCDAs");

            migrationBuilder.DropColumn(
                name: "VendorNumber",
                table: "FCDAs");

            migrationBuilder.AddColumn<Guid>(
                name: "AeronaveId",
                table: "FCDAs",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "DAId",
                table: "FCDAs",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "ProdutoId",
                table: "FCDAs",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_FCDAs_AeronaveId",
                table: "FCDAs",
                column: "AeronaveId");

            migrationBuilder.CreateIndex(
                name: "IX_FCDAs_DAId",
                table: "FCDAs",
                column: "DAId");

            migrationBuilder.CreateIndex(
                name: "IX_FCDAs_ProdutoId",
                table: "FCDAs",
                column: "ProdutoId");

            migrationBuilder.AddForeignKey(
                name: "FK_FCDAs_Aeronaves_AeronaveId",
                table: "FCDAs",
                column: "AeronaveId",
                principalTable: "Aeronaves",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_FCDAs_DAs_DAId",
                table: "FCDAs",
                column: "DAId",
                principalTable: "DAs",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_FCDAs_Produtos_ProdutoId",
                table: "FCDAs",
                column: "ProdutoId",
                principalTable: "Produtos",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FCDAs_Aeronaves_AeronaveId",
                table: "FCDAs");

            migrationBuilder.DropForeignKey(
                name: "FK_FCDAs_DAs_DAId",
                table: "FCDAs");

            migrationBuilder.DropForeignKey(
                name: "FK_FCDAs_Produtos_ProdutoId",
                table: "FCDAs");

            migrationBuilder.DropIndex(
                name: "IX_FCDAs_AeronaveId",
                table: "FCDAs");

            migrationBuilder.DropIndex(
                name: "IX_FCDAs_DAId",
                table: "FCDAs");

            migrationBuilder.DropIndex(
                name: "IX_FCDAs_ProdutoId",
                table: "FCDAs");

            migrationBuilder.DropColumn(
                name: "AeronaveId",
                table: "FCDAs");

            migrationBuilder.DropColumn(
                name: "DAId",
                table: "FCDAs");

            migrationBuilder.DropColumn(
                name: "ProdutoId",
                table: "FCDAs");

            migrationBuilder.AddColumn<string>(
                name: "Fabricante",
                table: "FCDAs",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Marcas",
                table: "FCDAs",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Modelo",
                table: "FCDAs",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NumeroDA",
                table: "FCDAs",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PartNumber",
                table: "FCDAs",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SerialNumber",
                table: "FCDAs",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "VendorNumber",
                table: "FCDAs",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
