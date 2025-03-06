using MeetingApi.Model.Domain;

namespace MeetingApi.Repository
{
    public interface IMeetingRepository
    {
        Task<Meeting> AddMeetingAsync(Meeting meeting);
        Task<List<Meeting>> GetAllMeetingsAsync();
        Task<Meeting> GetMeetingByIdAsync(int id);

        bool AddAttendeesToMeeting(int meetingId, List<string> emails);
    }
}
