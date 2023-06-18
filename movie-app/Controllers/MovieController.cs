using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace movie_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private readonly IMovieService _movieService;

        public MovieController(IMovieService movieService)
        {
            this._movieService = movieService;
        }

        // GET: api/Movie
        [HttpGet]
        public ActionResult<List<Movie>> GetMovies()
        {
            return Ok(_movieService.GetMovies());
        }

        [HttpGet("Trending")]
        public ActionResult<List<Movie>> GetTrendingMovies()
        {
            return Ok(_movieService.GetTrendingMovies());
        }

        // GET: api/Movie/5
        [HttpGet("{id}", Name = "GetMovie")]
        public string GetMovie(int id)
        {
            return "value";
        }
    }
}
