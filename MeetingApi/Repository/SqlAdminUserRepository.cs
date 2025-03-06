using MeetingApi.Data;
using MeetingApi.DTO;
using MeetingApi.Model.Domain;
using Microsoft.EntityFrameworkCore;

namespace MeetingApi.Repository
{
    public class SqlAdminUserRepository : IAdminUserRepository
    {
        private readonly ApplicationDbContext _context;

        public SqlAdminUserRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<AdminUser> GetUserByEmailAsync(string email)
        {
            return await _context.AdminUsers.FirstOrDefaultAsync(u => u.Email == email);
        }

        public async Task<AdminUser> AddUserAsync(AdminUser user)
        {
            await _context.AdminUsers.AddAsync(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<List<AdminUser>> GetAllUsersAsync()
        {
            return await _context.AdminUsers.ToListAsync();
        }


    }
}
