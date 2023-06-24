using Microsoft.AspNetCore.OpenApi;
using Microsoft.AspNetCore.Http.HttpResults;
namespace movie_app.Models
{
    public class TVShow
    {
        public string? backdrop_path { get; set; }
        public int? id { get; set; }
        public string? name { get; set; }
        public string? original_language { get; set; }
        public string? original_name { get; set; }
        public string? overview { get; set; }
        public string? poster_path { get; set; }
        public string? media_type { get; set; }
        public int[]? genre_ids { get; set; }
        public Genre[]? genres { get; set; }
        public double? popularity { get; set; }
        public string? first_air_date { get; set; }
        public bool? video { get; set; }
        public double? vote_average { get; set; }
        public double? vote_count { get; set; }
        public string[]? origin_country { get; set; }
        public int? number_of_episodes { get; set; }
        public int? number_of_seasons { get; set; }
        public int[]? episode_run_time { get; set; }
    }

    public class TVShowResponse
    {
        public int? page { get; set; }
        public List<TVShow> results { get; set; } = new List<TVShow>();
        public int? total_page { get; set; }
        public int? total_results { get; set; }
    }

    public class TVShowDetail
    {
        public TVShow tv_show { get; set; } = new TVShow();
        public Credit credit { get; set; } = new Credit();
        public List<Image> backdrops { get; set; } = new List<Image>();
        public List<Image> posters { get; set; } = new List<Image>();
        public List<Video> videos { get; set; } = new List<Video>();
        public List<TVShow> recommendations { get; set; } = new List<TVShow>();
    }
}