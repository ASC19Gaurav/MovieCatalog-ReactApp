
# Implementing Many-to-Many Relationship Between Meeting and ApplicationUser in ASP.NET Core

This guide walks you through implementing an M:N relationship between a custom domain model (`Meeting`) and the ASP.NET Core Identity `ApplicationUser` model.

---

## **Step 1: Use the same database for Identity and Domain Models**
Keeping all tables in the same database simplifies management and reduces complexity in applications that don’t need separate databases for Identity and domain models (like `Meeting`) . By inheriting from `IdentityDbContext`, you ensure consistency between Identity and your domain models. So you need only a single `ApplicationDbContext` (set up in step 3) and a single database (say, `app.db` if using SQLite).

---

## **Step 2: Define the `ApplicationUser` Class**
Create a custom user class by extending `IdentityUser`. This class will include a navigation property for the many-to-many relationship.

```csharp
public class ApplicationUser : IdentityUser
{
    public ICollection<Attendee> Meetings { get; set; }
}
```

---

## **Step 3: Use `IdentityDbContext<ApplicationUser>` as the Base DbContext**
Configure your `DbContext` to use `ApplicationUser` as the custom user class. This will allow both Identity and domain-specific models to share the same database.

```csharp
public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<Meeting> Meetings { get; set; }
}
```

---

## **Step 4: Define the `Meeting` Model**
The `Meeting` model represents your domain entity. Include a navigation property for the many-to-many relationship.

```csharp
public class Meeting
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    public string Name { get; set; }
    public ICollection<Attendee> Attendees { get; set; }
}
```

---

## **Step 5: Define the Junction Entity for the Many-to-Many Relationship**
To establish an M:N relationship between `Meeting` and `ApplicationUser`, create an `Attendee` entity. This acts as a junction table.

```csharp
public class Attendee
{
    public string UserId { get; set; }
    public ApplicationUser User { get; set; }

    public int MeetingId { get; set; }
    public Meeting Meeting { get; set; }
}
```

---

## **Step 6: Configure the Relationships in the `DbContext`**
Override the `OnModelCreating` method in your `DbContext` to configure the relationships. Define a composite key for the `Attendee` entity and set up foreign key relationships.

```csharp
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    base.OnModelCreating(modelBuilder);

    // Configure Many-to-Many relationship
    modelBuilder.Entity<Attendee>()
        .HasKey(a => new { a.UserId, a.MeetingId }); // Composite key

    modelBuilder.Entity<Attendee>()
        .HasOne(a => a.User)
        .WithMany(u => u.Attendees)
        .HasForeignKey(a => a.UserId);

    modelBuilder.Entity<Attendee>()
        .HasOne(a => a.Meeting)
        .WithMany(m => m.Attendees)
        .HasForeignKey(a => a.MeetingId);
}
```

---

## **Step 7: Apply Migrations and Update the Database**
Run the following commands to create and apply the migrations, which will set up the database schema:

```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

This will create the necessary tables for Identity (`AspNetUsers`, `AspNetRoles`, etc.) and your custom domain models (`Meetings`, `Attendees`).

---

## **Step 8: Verify and Test**
1. **Add Test Data:**
   Seed the database with test data for `Meetings` and associate them with `ApplicationUser` through the `Attendee` table.
   
2. **Test Queries:**
   Write queries to verify the relationships:
   ```csharp
   var meetingWithUsers = context.Meetings
       .Include(m => m.Attendees)
       .ThenInclude(um => um.User)
       .FirstOrDefault(m => m.Id == meetingId);
   ```

---

## **Key Points**
1. **Why Use a Custom `ApplicationUser`?**
   - Customizing `IdentityUser` with additional properties (e.g., `Attendees`) simplifies navigation and keeps the data model consistent.

2. **Shared Database for Identity and Domain Models:**
   - Using a single `DbContext` simplifies configuration and avoids database synchronization issues.

3. **Junction Table for M:N Relationship:**
   - The `Attendee` table represents the many-to-many relationship between `Meeting` and `ApplicationUser`.
