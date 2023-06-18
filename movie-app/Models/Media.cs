using System;
namespace movie_app.Models
{
	public class Person
	{
		public int gender { get; set; }
		public int id { get; set; }
		public string known_for_department { get; set; }
		public string name { get; set; }
		public string original_name { get; set; }
		public double popularity { get; set; }
		public string profile_path { get; set; }
	}

	public class Cast : Person
	{
		public int cast_id { get; set; }
		public string character { get; set; }
		public string credit_id { get; set; }
		public int order { get; set; }
	}

	public class Crew : Person
	{
		public string credit_id { get; set; }
		public string department { get; set; }
		public string job { get; set; }
	}

	public class Credit
	{
		public int id { get; set; }
		public Cast[] cast { get; set; }
		public Crew[] crew { get; set; }
	}

	public class Image
	{
        public double aspect_ratio { get; set; }
		public int height { get; set; }
		public string file_path { get; set; }
		public int width { get; set; }
	}

	public class ImageResponse
	{
		public int id { get; set; }
		public List<Image> backdrops { get; set; }
		public List<Image> posters { get; set; }
	}

	public class Video
	{
        public string iso_639_1 { get; set; }
		public string iso_3166_1 { get; set; }
		public string name { get; set; }
        public string key { get; set; }
        public string type { get; set; }
        public string id { get; set; }
    }

	public class VideoResponse
	{
        public int id { get; set; }
        public List<Video> results { get; set; }
    }
}

