using Microsoft.AspNetCore.OpenApi;
using Microsoft.AspNetCore.Http.HttpResults;
namespace movie_app.Models
{
    public class TVShow
    {
        public bool adult { get; set; }
        public string backdrop_path { get; set; }
        public int id { get; set; }
        public string name { get; set; }
        public string original_language { get; set; }
        public string original_name { get; set; }
        public string overview { get; set; }
        public string poster_path { get; set; }
        public string media_type { get; set; }
        public int[] genre_ids { get; set; }
        public int popularity { get; set; }
        public string first_air_date { get; set; }
        public bool video { get; set; }
        public double vote_average { get; set; }
        public double vote_count { get; set; }
        public string[] origin_country { get; set; }
        public int? number_of_episodes { get; set; }
        public int? number_of_seasons { get; set; }
        public int? episode_run_time { get; set; }
    }

    public class TVShowResponse
    {
        public int page { get; set; }
        public List<TVShow> results { get; set; }
        public int total_page { get; set; }
        public int total_results { get; set; }
    }


public static class TVShowEndpoints
{
	public static void MapTVShowEndpoints (this IEndpointRouteBuilder routes)
    {
        var group = routes.MapGroup("/api/TVShow").WithTags(nameof(TVShow));

        group.MapGet("/", () =>
        {
            return new [] { new TVShow() };
        })
        .WithName("GetAllTVShows")
        .WithOpenApi();

        group.MapGet("/{id}", (int id) =>
        {
            //return new TVShow { ID = id };
        })
        .WithName("GetTVShowById")
        .WithOpenApi();

        group.MapPut("/{id}", (int id, TVShow input) =>
        {
            return TypedResults.NoContent();
        })
        .WithName("UpdateTVShow")
        .WithOpenApi();

        group.MapPost("/", (TVShow model) =>
        {
            //return TypedResults.Created($"/api/TVShows/{model.ID}", model);
        })
        .WithName("CreateTVShow")
        .WithOpenApi();

        group.MapDelete("/{id}", (int id) =>
        {
            //return TypedResults.Ok(new TVShow { ID = id });
        })
        .WithName("DeleteTVShow")
        .WithOpenApi();
    }
}}
