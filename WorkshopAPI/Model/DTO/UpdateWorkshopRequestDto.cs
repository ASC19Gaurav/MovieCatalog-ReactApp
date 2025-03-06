using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using WorkshopAPI.Model.DataAnnotations;
using WorkshopAPI.Model.Domain;

namespace WorkshopAPI.Model.DTO
{
    public class UpdateWorkshopRequestDto
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required(ErrorMessage = "Workshop name is required")]
        [AlphanumericWithSpaces(ErrorMessage = "Name can have only alphanumeric characters and spaces")]
        public string Name { get; set; }

        [Required]
        [EnumDataType(typeof(WorkshopCategory), ErrorMessage = "Workshop category must be one of the allowed types")]
        public string Category { get; set; }

        [Required]
        [MaxLength(2048)]
        [MinLength(20)]
        public string Description { get; set; }

        // navigation property - not a real database property
        public ICollection<Session> Sessions { get; set; }
    }
}
