using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using WorkshopAPI.Model.DataAnnotations;

namespace WorkshopAPI.Model.Domain
{
    public class Session
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [ForeignKey("Workshop")]
        public int WorkshopId { get; set; }

        [Required]
        [AlphanumericWithSpaces]
        public string Name { get; set; }

        [Required]
        [AlphanumericWithSpaces]
        public string Speaker { get; set; }

        // navigation property
        public Workshop Workshop { get; set; }
    }
}
