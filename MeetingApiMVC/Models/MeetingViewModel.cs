namespace MeetingApiMVC.Models
{
    public class MeetingViewModel
    {
        public string Name { get; set; }
        public string Date { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
        public string Description { get; set; }
        public List<string> AttendeeEmailIds { get; set; } = new List<string>();
    }

}
