using MeetingApi.Model.Domain;

namespace MeetingApi.Repository
{
    public interface IMeetingAttendeeRepository
    {
        Task<MeetingAttendees> AddAttendeesAsync(List<MeetingAttendees> attendees);
        Task<List<MeetingAttendees>> GetAttendeesByMeetingIdAsync(int meetingId);
        Task<List<string>> GetAttendeesEmailsByMeetingIdAsync(int meetingId);
        Task<List<Meeting>> GetMeetingsByAttendeeEmailAsync(string email);
        Task<MeetingAttendees> GetMeetingAttendeeAsync(int meetingId, int userId);
        Task RemoveAttendeeAsync(MeetingAttendees attendee);
        IEnumerable<AdminUser> GetUsersNotInMeeting(int meetingId);


    }
}
