using MeetingApi.Data;
using MeetingApi.Model.Domain;
using Microsoft.EntityFrameworkCore;

namespace MeetingApi.Repository
{
    public class SqlMeetingRepository : IMeetingRepository
    {
        private readonly ApplicationDbContext _context;

        public SqlMeetingRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Meeting> AddMeetingAsync(Meeting meeting)
        {
            await _context.Meetings.AddAsync(meeting);
            await _context.SaveChangesAsync();
            return meeting;
        }

        public async Task<List<Meeting>> GetAllMeetingsAsync()
        {
            return await _context.Meetings.Include(m => m.Attendees).ToListAsync();
        }

        public async Task<Meeting> GetMeetingByIdAsync(int id)
        {
            return await _context.Meetings
                .Include(m => m.Attendees)
                .ThenInclude(ma => ma.AdminUser)
                .FirstOrDefaultAsync(m => m.Id == id);
        }
        public bool AddAttendeesToMeeting(int meetingId, List<string> emails)
        {
            var meeting = _context.Meetings.Include(m => m.Attendees).FirstOrDefault(m => m.Id == meetingId);
            if (meeting == null)
            {
                return false;
            }

            var usersToAdd = _context.AdminUsers.Where(u => emails.Contains(u.Email)).ToList();
            if (!usersToAdd.Any())
            {
                throw new ArgumentException("No matching users found for the provided emails.");
            }

            foreach (var user in usersToAdd)
            {
                if (!meeting.Attendees.Any(a => a.AdminUserId == user.Id))
                {
                    meeting.Attendees.Add(new MeetingAttendees
                    {
                        MeetingId = meeting.Id,
                        AdminUserId = user.Id
                    });
                }
            }

            _context.SaveChanges();
            return true;
        }
    }
}
