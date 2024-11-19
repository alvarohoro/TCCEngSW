using FL410.API.Data;
using FL410.API.Extensions;
using FL410.Business.Models.Pessoas;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.Configure<PasswordHasherOptions>(options =>
{
    options.IterationCount = 10000; // Reduzindo iterações do hashing, ajuste para um valor seguro e rápido
});
builder.Services.AddMemoryCache(); // Adiciona o cache no builder
builder.Services.Configure<IdentityOptions>(options =>
{
    options.Lockout.AllowedForNewUsers = false; // Desativa o lockout para novos usuários
});

builder.Services.AddDbContext<FL410Context>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("FL410Context"), sqlOptions => 
        sqlOptions.EnableRetryOnFailure())
);

builder.Services.AddIdentityCore<Usuario>()
    .AddRoles<IdentityRole>()
    .AddEntityFrameworkStores<FL410Context>()
    .AddApiEndpoints();

// builder.Services.AddIdentity<Usuario, IdentityRole>()
//     .AddEntityFrameworkStores<FL410Context>()  // Use seu DbContext aqui
//     .AddDefaultTokenProviders();


builder.Services.AddAuthentication(IdentityConstants.ApplicationScheme)
    .AddCookie(IdentityConstants.ApplicationScheme, options =>
    {
        options.LoginPath = "/login";
        options.LogoutPath = "/logout";
    });
// builder.Services.AddAuthentication();
builder.Services.AddAuthorizationBuilder();

builder.Logging.ClearProviders();

builder.WebHost.ConfigureKestrel(options =>
{
    options.ListenAnyIP(5247);
    // options.ListenAnyIP(5012, listenOptions =>
    // {
    //     listenOptions.UseHttps("/Users/alvaro/Projetos/backcert.pem", "/Users/alvaro/Projetos/backkey.pem");
    // });
    options.ListenAnyIP(5012);
});

builder.Services.ConfigureApplicationCookie(options =>
{
    options.Cookie.Domain = "backend.test"; // Substitua pelo domínio desejado
    options.Cookie.Name = "AuthCookie";
    options.Cookie.HttpOnly = true;
    options.Cookie.SecurePolicy = CookieSecurePolicy.Always; // Defina como necessário
    options.Cookie.SameSite = SameSiteMode.None; // Defina o SameSite de acordo com o que precisar
    // options.Cookie.MaxAge = TimeSpan.FromDays(1); // Defina o tempo de expiração do cookie
});

// builder.Logging.AddConsole();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    // app.ApplyMigrations();
}

app.UseCors(options =>
{
    options.WithOrigins("https://frontend.test", "https://backend.test");
    options.AllowAnyMethod();
    options.AllowAnyHeader();
    options.AllowCredentials();
});

// app.UseHttpsRedirection();

app.UseAuthentication();


app.UseAuthorization();


app.MapGroup("api").MapIdentityApi<Usuario>();

app.MapControllers();

await DatabaseSeeder.SeedAdminUserAsync(app);
await DatabaseSeeder.SeedDAs(app);
app.Run();
