namespace movie_app.Models
{
	public class Movie
	{
		public string? backdrop_path { get; set; }
		public int? id { get; set; }
		public string? title { get; set; }
		public string? original_language { get; set; }
		public string? original_title { get; set; }
		public string? overview { get; set; }
        public string? poster_path { get; set; }
        public int[]? genre_ids { get; set; }
        public Genre[]? genres { get; set; }
        public double? popularity { get; set; }
        public string? release_date { get; set; }
        public double? vote_average { get; set; }
        public double? vote_count { get; set; }
        public int? runtime { get; set; }
    }

	public class MovieResponse
	{
		public int? page { get; set; }
        public List<Movie> results { get; set; } = new List<Movie>();
        public int? total_page { get; set; }
        public int? total_results { get; set; }
    }

    public class MovieDetail
    {
        public Movie movie { get; set; }
        public Credit credit { get; set; }
        public List<Image> backdrops { get; set; }
        public List<Image> posters { get; set; }
        public List<Video> videos { get; set; }
        public List<Movie> recommendations { get; set; }
    }
}

