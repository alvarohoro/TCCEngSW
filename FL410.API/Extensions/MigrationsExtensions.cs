using System;
using FL410.API.Data;
using Microsoft.EntityFrameworkCore;

namespace FL410.API.Extensions;

public static class MigrationsExtensions
{
    public static void ApplyMigrations(this WebApplication app)
    {
        using var scope = app.Services.CreateScope();
        using var context = scope.ServiceProvider.GetRequiredService<FL410Context>();
        context.Database.Migrate();
    }
}
