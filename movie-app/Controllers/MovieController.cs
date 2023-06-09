using System;using System.Collections.Generic;using System.Linq;using System.Threading.Tasks;using Microsoft.AspNetCore.Http;using Microsoft.AspNetCore.Mvc;namespace movie_app.Controllers{    [Route("api/[controller]")]    [ApiController]    public class MovieController : ControllerBase    {        private readonly IMovieService _movieService;        public MovieController(IMovieService movieService)        {            this._movieService = movieService;        }

        // GET: api/Movie
        [HttpGet("trending")]        public ActionResult<List<Movie>> GetTrendingMovies()        {            return Ok(_movieService.GetTrendingMovies());        }

        // GET: api/Movie/top_rated
        [HttpGet("top_rated")]        public ActionResult<List<Movie>> GetTopRatedMovies()        {            return Ok(_movieService.GetTopRatedMovies());        }        // GET: api/Movie/5        [HttpGet("{id}", Name = "GetMovie")]        public ActionResult<MovieDetail> GetMovie(int id)        {            return Ok(_movieService.GetMovie(id));        }    }}