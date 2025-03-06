using MeetingApi.Data;
using MeetingApi.Model.Domain;
using Microsoft.EntityFrameworkCore;

namespace MeetingApi.Repository
{
    public class SqlMeetingAttendeeRepository : IMeetingAttendeeRepository
    {
        private readonly ApplicationDbContext _context;

        public SqlMeetingAttendeeRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<MeetingAttendees>> GetAllAsync()
        {
            return await _context.MeetingAttendees.ToListAsync();
        }

        public async Task<MeetingAttendees> GetByIdAsync(int id)
        {
            return await _context.MeetingAttendees.FirstOrDefaultAsync(ma => ma.Id == id);
        }

        public async Task CreateAsync(MeetingAttendees meetingAttendees)
        {
            _context.MeetingAttendees.Add(meetingAttendees);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var attendee = await GetByIdAsync(id);
            if (attendee != null)
            {
                _context.MeetingAttendees.Remove(attendee);
                await _context.SaveChangesAsync();
            }
        }

        public Task<MeetingAttendees> AddAttendeesAsync(List<MeetingAttendees> attendees)
        {
            throw new NotImplementedException();
        }

        public Task<List<MeetingAttendees>> GetAttendeesByMeetingIdAsync(int meetingId)
        {
            throw new NotImplementedException();
        }
        public async Task<List<string>> GetAttendeesEmailsByMeetingIdAsync(int meetingId)
        {
            return await _context.MeetingAttendees
                .Where(ma => ma.MeetingId == meetingId)
                .Select(ma => ma.AdminUser.Email)  // Assuming AdminUser has an Email property
                .ToListAsync();
        }
        public async Task<List<Meeting>> GetMeetingsByAttendeeEmailAsync(string email)
        {
            return await _context.MeetingAttendees
                .Where(ma => ma.AdminUser.Email == email)
                .Include(ma => ma.Meeting)
                .Select(ma => ma.Meeting)
                .ToListAsync();
        }
        public async Task<MeetingAttendees> GetMeetingAttendeeAsync(int meetingId, int userId)
        {
            return await _context.MeetingAttendees
                .FirstOrDefaultAsync(a => a.MeetingId == meetingId && a.AdminUserId == userId);
        }

        public async Task RemoveAttendeeAsync(MeetingAttendees attendee)
        {
            _context.MeetingAttendees.Remove(attendee);
            await _context.SaveChangesAsync();
        }
         public IEnumerable<AdminUser> GetUsersNotInMeeting(int meetingId)
    {
        var allUsers = _context.Set<AdminUser>().ToList();
        var attendees = _context.Set<MeetingAttendees>()
                                .Where(ma => ma.MeetingId == meetingId)
                                .Select(ma => ma.AdminUser)
                                .ToList();

        return allUsers.Except(attendees).ToList();
    }
    }
}
