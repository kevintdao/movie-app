namespace movie_app.Services.TVShowService
{
    public interface ITVShowService
    {
        List<TVShow> GetTVShows();
        List<TVShow> GetTrendingTVShows();
        TVShowDetail GetTVShow(int id);
    }
}
