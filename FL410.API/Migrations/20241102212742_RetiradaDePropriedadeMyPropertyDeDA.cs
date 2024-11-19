using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FL410.API.Migrations
{
    /// <inheritdoc />
    public partial class RetiradaDePropriedadeMyPropertyDeDA : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MyProperty",
                table: "DAs");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "MyProperty",
                table: "DAs",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
