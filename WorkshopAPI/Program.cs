using Microsoft.EntityFrameworkCore;
using WorkshopAPI.Data;
using WorkshopAPI.Mappings;
using WorkshopAPI.Repository; // Add this for the repository
    

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure DB service
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlite("Data Source=app.db"));

// Register the repository interface with its implementation
builder.Services.AddScoped<IWorkshopRepository,SqlWorkshopRepository>();

builder.Services.AddAutoMapper(typeof(AutomapperProfiles));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
