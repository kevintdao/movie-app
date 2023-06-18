namespace movie_app.Models
{
	public class Movie
	{
		public bool adult { get; set; }
		public string backdrop_path { get; set; }
		public int id { get; set; }
		public string title { get; set; }
		public string original_language { get; set; }
		public string original_title { get; set; }
		public string overview { get; set; }
        public string poster_path { get; set; }
        public string media_type { get; set; }
        public int[] genre_ids { get; set; }
        public double popularity { get; set; }
        public string release_date { get; set; }
        public bool video { get; set; }
        public double vote_average { get; set; }
        public double vote_count { get; set; }
    }

	public class MovieResponse
	{
		public int page { get; set; }
        public List<Movie> results { get; set; }
        public int total_page { get; set; }
        public int total_results { get; set; }
    }
}

