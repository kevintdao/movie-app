using Newtonsoft.Json;

namespace movie_app.Services.TVShowService
{
    public class TVShowService : ITVShowService
    {
        private HttpClient client = new HttpClient();
        private string apiKey = $"api_key={Environment.GetEnvironmentVariable("API_KEY")}";

        public List<TVShow> GetTVShows()
        {
            List<TVShow> shows = new List<TVShow>();
            Uri endpoint = new Uri($"https://api.themoviedb.org/3/tv/popular?language=en-US&{apiKey}");
            var response = client.GetAsync(endpoint).Result;
            var result = response.Content.ReadAsStringAsync().Result;

            shows = JsonConvert.DeserializeObject<TVShowResponse>(value: result).results;

            return shows;
        }
     
        public List<TVShow> GetTrendingTVShows()
        {
            List<TVShow> shows = new List<TVShow>();
            Uri endpoint = new Uri($"https://api.themoviedb.org/3/trending/tv/day?{apiKey}");
            var response = client.GetAsync(endpoint).Result;
            var result = response.Content.ReadAsStringAsync().Result;

            shows = JsonConvert.DeserializeObject<TVShowResponse>(value: result).results;

            return shows;
        }
    }
}
