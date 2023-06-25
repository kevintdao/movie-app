namespace movie_app.Models
{
	public class User
	{
		public int id { get; set; }
		public string username { get; set; } = string.Empty;
		public string password_hash { get; set; } = string.Empty;
    }

	public class UserDto
	{
        public string username { get; set; } = string.Empty;
        public string password { get; set; } = string.Empty;
    }

	public class Login
	{
		public string name { get; set; } = string.Empty;
		public string token { get; set; } = string.Empty;
	}
}

