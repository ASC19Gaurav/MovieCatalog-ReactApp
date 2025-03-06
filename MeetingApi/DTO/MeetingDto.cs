namespace MeetingApi.DTO
{
    public class MeetingDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateOnly Date { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
        public string Description { get; set; }
        public List<string> AttendeesEmails { get; set; }
    }
}
