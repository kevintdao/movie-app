using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace movie_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TVShowController : ControllerBase
    {
        private readonly ITVShowService _tvShowService;

        public TVShowController(ITVShowService tvShowService)
        {
            this._tvShowService = tvShowService;
        }

        // GET: api/TVShow
        [HttpGet]
        public ActionResult<List<TVShow>> GetShows()
        {
            return Ok(_tvShowService.GetTVShows());
        }

        // GET: api/TVShow/Trending
        [HttpGet("Trending")]
        public ActionResult<List<TVShow>> GetTrendingTVShow()
        {
            return Ok(_tvShowService.GetTrendingTVShows());
        }

        // GET api/TVShow/5
        [HttpGet("{id}")]
        public ActionResult<List<TVShow>> Get(int id)
        {
            return Ok(_tvShowService.GetTVShow(id));
        }
    }
}
