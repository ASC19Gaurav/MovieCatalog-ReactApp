using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using WorkshopAPI.Model.DataAnnotations;
namespace WorkshopAPI.Model.Domain
{

    public class Workshop
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] //For Sql it is different
        public int Id { get; set; }

        [Required(ErrorMessage = "Workshop name is required")]
        public string Name { get; set; }

        [Required]
        [EnumDataType(typeof(WorkshopCategory), ErrorMessage = "Workshop category must be one of the allowed types")]
        public string Category { get; set; }

        [Required]
        [MaxLength(2048)]
        [MinLength(20)]
        [AlphanumericWithSpaces]
        public string Description { get; set; }

        public ICollection<Session> Sessions { get; set; }
    }
    public enum WorkshopCategory
    {
        frontend,
        backend,
        mobile,
        database,
        language,
        devops
    }
}
