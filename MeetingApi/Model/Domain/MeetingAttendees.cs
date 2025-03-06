using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MeetingApi.Model.Domain
{
    public class MeetingAttendees
    {

        [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    
    [ForeignKey("Meeting")]
    public int MeetingId { get; set; }
    public Meeting Meeting { get; set; }

    
    [ForeignKey("AdminUser")]
    public int AdminUserId { get; set; }
    public AdminUser AdminUser { get; set; }
}
}
