using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FL410.API.Migrations
{
    /// <inheritdoc />
    public partial class InclusaoAeronaveEmProduto : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "AeronaveId",
                table: "Produtos",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Produtos_AeronaveId",
                table: "Produtos",
                column: "AeronaveId");

            migrationBuilder.AddForeignKey(
                name: "FK_Produtos_Aeronaves_AeronaveId",
                table: "Produtos",
                column: "AeronaveId",
                principalTable: "Aeronaves",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Produtos_Aeronaves_AeronaveId",
                table: "Produtos");

            migrationBuilder.DropIndex(
                name: "IX_Produtos_AeronaveId",
                table: "Produtos");

            migrationBuilder.DropColumn(
                name: "AeronaveId",
                table: "Produtos");
        }
    }
}
