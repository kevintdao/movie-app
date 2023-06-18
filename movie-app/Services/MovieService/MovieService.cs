using System;
using Newtonsoft.Json;

namespace movie_app.Services.MovieService
{
	public class MovieService : IMovieService
	{
        private HttpClient client = new HttpClient();
        private string apiKey = $"api_key={Environment.GetEnvironmentVariable("API_KEY")}";


        public List<Movie> GetMovies()
        {

            List<Movie> movies = new List<Movie>();
            Uri endpoint = new Uri($"https://api.themoviedb.org/3/movie/popular?language=en-US&{apiKey}");
            var response = client.GetAsync(endpoint).Result;
            var result = response.Content.ReadAsStringAsync().Result;

            movies = JsonConvert.DeserializeObject<MovieResponse>(value: result).results;

            return movies;
        }

        public List<Movie> GetTrendingMovies()
        {
            List<Movie> movies = new List<Movie>();
            Uri endpoint = new Uri($"https://api.themoviedb.org/3/trending/movie/day?{apiKey}");
            var response = client.GetAsync(endpoint).Result;
            var result = response.Content.ReadAsStringAsync().Result;

            movies = JsonConvert.DeserializeObject<MovieResponse>(value: result).results;

            return movies;
        }
    }
}

