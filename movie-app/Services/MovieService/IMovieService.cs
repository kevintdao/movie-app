using System;
namespace movie_app.Services.MovieService
{
	public interface IMovieService
	{
		List<Movie> GetTopRatedMovies();
		List<Movie> GetTrendingMovies();
		MovieDetail GetMovie(int id);
	}
}

