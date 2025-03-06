namespace WorkshopAPI.Model.DTO
{
    public class WorkshopDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }

        public ICollection<WorkshopSessionDto>? Sessions { get; set; }
    }

    public class WorkshopSessionDto
    {
        public int Id { get; set; }
        public int WorkshopId { get; set; }
        public string Name { get; set; }
        public string Speaker { get; set; }
    }
}
