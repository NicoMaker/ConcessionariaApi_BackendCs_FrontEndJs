using Newtonsoft.Json;
using ConcessionariaApi;
using System.Runtime.CompilerServices;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<JsonService>();

var app = builder.Build();

app.UseStaticFiles();

app.MapGet("/api/vehicle", (string type, JsonService jsonService) =>
{
    return Results.Ok(
        type == "auto"
            ? jsonService.GetJsonContent<Car>("Auto.json")
            : jsonService.GetJsonContent<Motorbike>("Moto.json")
    );
});

app.MapPost("/api/auto", (Car car, JsonService jsonService) =>
{
    jsonService.UpdateJsonContent<Car>("Auto.json", car);

    return Results.Ok();
});

app.MapPost("/api/moto", (Motorbike moto, JsonService jsonService) =>
{
    jsonService.UpdateJsonContent<Motorbike>("Moto.json", moto);

    return Results.Ok();
});
app.Run();