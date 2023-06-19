global using movie_app.Models;global using movie_app.Services.MovieService;global using movie_app.Services.TVShowService;using movie_app.Controllers;// load env fileDotNetEnv.Env.Load();var builder = WebApplication.CreateBuilder(args);// Add services to the container.builder.Services.AddControllers();// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbucklebuilder.Services.AddEndpointsApiExplorer();builder.Services.AddSwaggerGen();builder.Services.AddScoped<IMovieService, MovieService>();builder.Services.AddScoped<ITVShowService, TVShowService>();

// allow calls from AngularUI
builder.Services.AddCors(options => options.AddPolicy(name: "FrontendUI",
    policy =>
        {
            policy.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader();
        }
    ));

var app = builder.Build();// Configure the HTTP request pipeline.if (app.Environment.IsDevelopment()){    app.UseSwagger();    app.UseSwaggerUI();}app.UseCors("FrontendUI");app.UseHttpsRedirection();app.UseAuthorization();app.MapControllers();app.Run();