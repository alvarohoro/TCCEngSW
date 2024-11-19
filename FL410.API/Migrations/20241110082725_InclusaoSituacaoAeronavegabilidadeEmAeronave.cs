using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FL410.API.Migrations
{
    /// <inheritdoc />
    public partial class InclusaoSituacaoAeronavegabilidadeEmAeronave : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "SituacaoAeronavegabilidade",
                table: "Aeronaves",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ValidadeCVA",
                table: "Aeronaves",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SituacaoAeronavegabilidade",
                table: "Aeronaves");

            migrationBuilder.DropColumn(
                name: "ValidadeCVA",
                table: "Aeronaves");
        }
    }
}
