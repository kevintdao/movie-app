using Newtonsoft.Json;

namespace movie_app.Services.TVShowService
{
    public class TVShowService : ITVShowService
    {
        private HttpClient client = new HttpClient();
        private string apiKey = $"api_key={Environment.GetEnvironmentVariable("API_KEY")}";

        public List<TVShow> GetTrendingTVShows()
        {
            List<TVShow> shows = new List<TVShow>();
            Uri endpoint = new Uri($"https://api.themoviedb.org/3/trending/tv/day?language=en-US&{apiKey}");
            var response = client.GetAsync(endpoint).Result;
            var result = response.Content.ReadAsStringAsync().Result;

            shows = JsonConvert.DeserializeObject<TVShowResponse>(value: result).results;

            return shows;
        }
     
        public List<TVShow> GetTopRatedTVShows()
        {
            List<TVShow> shows = new List<TVShow>();
            Uri endpoint = new Uri($"https://api.themoviedb.org/3/tv/top_rated?language=en-US&{apiKey}");
            var response = client.GetAsync(endpoint).Result;
            var result = response.Content.ReadAsStringAsync().Result;

            shows = JsonConvert.DeserializeObject<TVShowResponse>(value: result).results;

            return shows;
        }

        public TVShowDetail GetTVShow(int id)
        {
            // movie
            Uri endpoint = new Uri($"https://api.themoviedb.org/3/tv/{id}?{apiKey}");
            var response = client.GetAsync(endpoint).Result;
            var result = response.Content.ReadAsStringAsync().Result;

            TVShow tvShow = JsonConvert.DeserializeObject<TVShow>(value: result);

            // credit
            Uri endpoint2 = new Uri($"https://api.themoviedb.org/3/tv/{id}/credits?{apiKey}");
            var response2 = client.GetAsync(endpoint2).Result;
            var result2 = response2.Content.ReadAsStringAsync().Result;

            Credit credit = JsonConvert.DeserializeObject<Credit>(value: result2);

            // images
            Uri endpoint3 = new Uri($"https://api.themoviedb.org/3/tv/{id}/images?{apiKey}");
            var response3 = client.GetAsync(endpoint3).Result;
            var result3 = response3.Content.ReadAsStringAsync().Result;

            ImageResponse images = JsonConvert.DeserializeObject<ImageResponse>(value: result3);

            // videos
            Uri endpoint4 = new Uri($"https://api.themoviedb.org/3/tv/{id}/videos?{apiKey}");
            var response4 = client.GetAsync(endpoint4).Result;
            var result4 = response4.Content.ReadAsStringAsync().Result;

            List<Video> videos = JsonConvert.DeserializeObject<VideoResponse>(value: result4).results;

            // recommendations
            Uri endpoint5 = new Uri($"https://api.themoviedb.org/3/tv/{id}/recommendations?{apiKey}");
            var response5 = client.GetAsync(endpoint5).Result;
            var result5 = response5.Content.ReadAsStringAsync().Result;

            List<TVShow> recommendations = JsonConvert.DeserializeObject<TVShowResponse>(value: result5).results;

            TVShowDetail movieDetail = new()
            {
                tv_show = tvShow,
                credit = credit,
                backdrops = images.backdrops ?? new List<Image>(),
                posters = images.posters ?? new List<Image>(),
                videos = videos,
                recommendations = recommendations
            };

            return movieDetail;
        }
    }
}
