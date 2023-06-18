using System;
using movie_app.Models;
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

        public MovieDetail GetMovie(int id)
        {
            // movie
            Uri endpoint = new Uri($"https://api.themoviedb.org/3/movie/{id}?{apiKey}");
            var response = client.GetAsync(endpoint).Result;
            var result = response.Content.ReadAsStringAsync().Result;

            Movie movie = JsonConvert.DeserializeObject<Movie>(value: result);

            // credit
            Uri endpoint2 = new Uri($"https://api.themoviedb.org/3/movie/{id}/credits?{apiKey}");
            var response2 = client.GetAsync(endpoint2).Result;
            var result2 = response2.Content.ReadAsStringAsync().Result;

            Credit credit = JsonConvert.DeserializeObject<Credit>(value: result2);

            // images
            Uri endpoint3 = new Uri($"https://api.themoviedb.org/3/movie/{id}/images?{apiKey}");
            var response3 = client.GetAsync(endpoint3).Result;
            var result3 = response3.Content.ReadAsStringAsync().Result;

            ImageResponse images = JsonConvert.DeserializeObject<ImageResponse>(value: result3);

            // videos
            Uri endpoint4 = new Uri($"https://api.themoviedb.org/3/movie/{id}/videos?{apiKey}");
            var response4 = client.GetAsync(endpoint4).Result;
            var result4 = response4.Content.ReadAsStringAsync().Result;

            List<Video> videos = JsonConvert.DeserializeObject<VideoResponse>(value: result4).results;

            // recommendations
            Uri endpoint5 = new Uri($"https://api.themoviedb.org/3/movie/{id}/recommendations?{apiKey}");
            var response5 = client.GetAsync(endpoint5).Result;
            var result5 = response5.Content.ReadAsStringAsync().Result;

            List<Movie> recommendations = JsonConvert.DeserializeObject<MovieResponse>(value: result5).results;

            MovieDetail movieDetail = new() {
                movie = movie,
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

