using System;
namespace movie_app.Services.MovieService
{
	public interface IMovieService
	{
		List<Movie> GetMovies();
		List<Movie> GetTrendingMovies();
	}
}

