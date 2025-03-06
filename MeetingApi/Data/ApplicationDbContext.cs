using MeetingApi.Model.Domain;
using Microsoft.EntityFrameworkCore;

namespace MeetingApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<AdminUser> AdminUsers { get; set; }
        public DbSet<Meeting> Meetings { get; set; }
        public DbSet<MeetingAttendees> MeetingAttendees { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<MeetingAttendees>()
                .HasOne(ma => ma.Meeting)
                .WithMany(m => m.Attendees)
                .HasForeignKey(ma => ma.MeetingId);

            modelBuilder.Entity<MeetingAttendees>()
                .HasOne(ma => ma.AdminUser)
                .WithMany(a => a.Meetings)
                .HasForeignKey(ma => ma.AdminUserId);
        }
    }
}
