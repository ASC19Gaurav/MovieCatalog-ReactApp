using System.ComponentModel.DataAnnotations;
using WorkshopAPI.Model.DataAnnotations;
using WorkshopAPI.Model.Domain;

namespace WorkshopAPI.Model.DTO
{
    public class AddWorkshopRequestDto
    {
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
    }
}
