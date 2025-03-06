using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace MeetingApi.Services
{
    public class JwtService
    {
        private readonly string _secretKey;
        private readonly int _tokenExpirationMinutes;

        public JwtService(IConfiguration configuration)
        {
            _secretKey = configuration["Jwt:Key"];
            _tokenExpirationMinutes = int.Parse(configuration["Jwt:ExpiresInMinutes"]);
        }

        public string GenerateToken(string userEmail, string role)
        {
            var claims = new[]
            {
            new Claim(ClaimTypes.Email, userEmail),
            new Claim(ClaimTypes.Role, role)
        };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_secretKey));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(_tokenExpirationMinutes),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
