namespace movie_app.Models
{
	public class User
	{
		public int id { get; set; }
		public string first_name { get; set; } = string.Empty;
		public string last_name { get; set; } = string.Empty;
        public string email { get; set; } = string.Empty;
		public string password_hash { get; set; } = string.Empty;
    }

	public class UserDto
	{
        public string first_name { get; set; } = string.Empty;
        public string last_name { get; set; } = string.Empty;
        public string email { get; set; } = string.Empty;
        public string password { get; set; } = string.Empty;
    }

	public class Login
	{
		public string name { get; set; } = string.Empty;
		public string email { get; set; } = string.Empty;
		public string token { get; set; } = string.Empty;
	}
}

