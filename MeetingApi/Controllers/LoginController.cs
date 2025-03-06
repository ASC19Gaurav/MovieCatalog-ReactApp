using AutoMapper;
using MeetingApi.Data;
using MeetingApi.DTO;
using MeetingApi.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SQLitePCL;

namespace MeetingApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IAdminUserRepository _repo;
        private readonly ApplicationDbContext _context;

        public LoginController(IAdminUserRepository repository, IMapper mapper,ApplicationDbContext context)
        {
            _repo = repository;
            _context = context;
            
        }
        [HttpPost("Authencation")]
        public IActionResult Login([FromBody] LoginDto loginDto)
        {
            var user = _context.AdminUsers
                .FirstOrDefault(u => u.Email == loginDto.Email && u.Password == loginDto.Password);

            if (user != null)
            {
                return Ok(new { success = true, email = user.Email });
            }
            return Unauthorized(new { success = false, message = "Invalid email or password" });
        }

    }
}
