using AutoMapper;
using MeetingApi.DTO;
using MeetingApi.Model.Domain;
using MeetingApi.Repository;

using Microsoft.AspNetCore.Mvc;

namespace MeetingApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminUsersController : ControllerBase
    {
        private readonly IAdminUserRepository _repo;
        private readonly IMapper _mapper;

        public AdminUsersController(IAdminUserRepository repository, IMapper mapper)
        {
            _repo = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var adminUsers = await _repo.GetAllUsersAsync();
            var adminUserDtos = _mapper.Map<List<AdminUserDto>>(adminUsers);
            return Ok(adminUserDtos);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var adminUser = await _repo.GetUserByEmailAsync(id.ToString());
            if (adminUser == null)
                return NotFound();

            var adminUserDto = _mapper.Map<AdminUserDto>(adminUser);
            return Ok(adminUserDto);
        }

        [HttpPost]
        public async Task<IActionResult> AddUser(AddAdminUserRequestDto userDto)
        {
            if (userDto == null)
            {
                return BadRequest("User data is required.");
            }

            var adminUser = new AdminUser
            {
                Name = userDto.Name,
                Age = userDto.Age,
                Phone = userDto.Phone,
                Email = userDto.Email,
                Password = userDto.Password
            };

            var addedUser = await _repo.AddUserAsync(adminUser);
            var userResponseDto = _mapper.Map<AdminUserDto>(addedUser);

            return CreatedAtAction(nameof(GetById), new { id = userResponseDto.Id }, userResponseDto);
        }
        //[HttpPost("login")]
        //public IActionResult Login([FromBody] Logger  model)
        //{
        //    var user = _userService.Authenticate(model.Email, model.Password); // Implement this method
        //    if (user == null) return Unauthorized("Invalid credentials");

        //    var token = _jwtService.GenerateToken(user.Email, user.Role);
        //    return Ok(new { Token = token });
        //}
    }
}
