using MeetingApi.Model.Domain;

namespace MeetingApi.Repository
{
    public interface IAdminUserRepository
    {
        Task<AdminUser> GetUserByEmailAsync(string email);
        Task<AdminUser> AddUserAsync(AdminUser user);
        Task<List<AdminUser>> GetAllUsersAsync();
    }
}
