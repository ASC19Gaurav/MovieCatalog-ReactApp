namespace MeetingApi.DTO
{
    public class AddAttendeesRequestDto
    {
        public int MeetingId { get; set; }
        public List<string> Emails { get; set; }
    }
}
