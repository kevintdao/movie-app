﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using movie_app.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace movie_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        public static User user = new();

        [HttpPost("register")]
        public ActionResult<User> Register(UserDto request)
        {
            string passwordHash = BCrypt.Net.BCrypt.HashPassword(request.password);

            user.first_name = request.first_name;
            user.last_name = request.last_name;
            user.email = request.email;
            user.password_hash = passwordHash;

            return Ok(user);
        }

        [HttpPost("login")]
        public ActionResult<Login> Login(UserDto request)
        {
            if (user.email!= request.email)
            {
                return BadRequest("Invalid email/password");
            }

            if (!BCrypt.Net.BCrypt.Verify(request.password, user.password_hash))
            {
                return BadRequest("Invalid email/password");
            }

            string token = CreateToken(user);

            return Ok(new Login()
            {
                name = $"{user.first_name} {user.last_name}",
                token = token
            });
        }

        private string CreateToken(User user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.email)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Environment.GetEnvironmentVariable("SECRET_TOKEN")));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims, 
                expires: DateTime.Now.AddDays(1), 
                signingCredentials: creds
                );

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }
    }
}
