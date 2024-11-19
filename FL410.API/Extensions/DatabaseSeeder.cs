using FL410.API.Data;
using FL410.Business.Models.Documentos;
using FL410.Business.Models.Pessoas;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;

public static class DatabaseSeeder
{


    public static void SeedAdminUser(IServiceScope scope)
    {
        var services = scope.ServiceProvider;
        var userManager = services.GetRequiredService<UserManager<Usuario>>();

        // IdentityApiEndpointRouteBuilderExtensions.MapIdentityApi<Usuario>

    }

    public static async Task SeedAdminUserAsync(WebApplication app)
    {
        using (var scope = app.Services.CreateScope())
        {
            var services = scope.ServiceProvider;
            var userManager = services.GetRequiredService<UserManager<Usuario>>();

            // Verifica e cria o usuário admin se não existir
            var adminEmail = "admin@admin.com";
            var adminUser = await userManager.FindByEmailAsync(adminEmail);

            var result = IdentityResult.Success;
            if (adminUser == null)
            {
                adminUser = new Usuario
                {
                    UserName = "admin@admin.com",
                    Email = adminEmail,
                    EmailConfirmed = true
                };

                var password = "Admin#_123"; // Defina uma senha segura
                await userManager.CreateAsync(adminUser, password);
                adminUser = await userManager.FindByEmailAsync(adminEmail);



            }

            if (adminUser != null)
            {
                string[] roles = ["Admin", "RT", "Supervisor", "Mecanico"];
                foreach (var role in roles)
                {
                    await services.GetRequiredService<RoleManager<IdentityRole>>().CreateAsync(new IdentityRole(role));
                }

                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(adminUser, "Admin");
                    await userManager.AddToRoleAsync(adminUser, "RT");
                    await userManager.AddToRoleAsync(adminUser, "Supervisor");
                }
            }



        }
    }


    public static async Task SeedDAs(WebApplication app)
    {
        using (var scope = app.Services.CreateAsyncScope())
        {

            var context = scope.ServiceProvider.GetRequiredService<FL410Context>();
            var listaDA = new List<DA>
        {
            new DA(Guid.NewGuid(), 1, "Aprovado", "Produto A", new DateTime(2023, 5, 1).ToString(), "Português", null, "Documento A", "Sistema X", "Fabricante A", "Modelo A", "D001"),
            new DA(Guid.NewGuid(), 2, "Pendente", "Produto B", new DateTime(2024, 1, 15).ToString(), "Inglês", "D001", "Documento B", "Sistema Y", "Fabricante B", "Modelo B", "D002"),
            new DA(Guid.NewGuid(), 3, "Revogado", "Produto C", new DateTime(2022, 11, 30).ToString(), "Espanhol", null, "Documento C", "Sistema Z", "Fabricante C", "Modelo C", "D003"),
            new DA(Guid.NewGuid(), 4, "Em Análise", "Produto D", new DateTime(2023, 9, 20).ToString(), "Francês", null, "Documento D", "Sistema W", "Fabricante D", "Modelo D", "D004"),
            new DA(Guid.NewGuid(), 5, "Aprovado", "Produto E", new DateTime(2025, 6, 5).ToString(), "Português", "D003", "Documento E", "Sistema V", "Fabricante E", "Modelo E", "D005")
        };
            await context.AddRangeAsync(listaDA);
            await context.SaveChangesAsync();
        }

    }

}
