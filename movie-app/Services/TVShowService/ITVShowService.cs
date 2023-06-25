namespace movie_app.Services.TVShowService
{
    public interface ITVShowService
    {
        List<TVShow> GetTopRatedTVShows();
        List<TVShow> GetTrendingTVShows();
        TVShowDetail GetTVShow(int id);
    }
}
