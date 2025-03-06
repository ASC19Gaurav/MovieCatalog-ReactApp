using Microsoft.EntityFrameworkCore;
using WorkshopAPI.Model.Domain;

namespace WorkshopAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Workshop> Workshops { get; set; }
        public DbSet<Session> Sessions { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Workshop>()
       .HasMany(w => w.Sessions)             // Workshop has many Sessions
       .WithOne(s => s.Workshop)    
       .OnDelete(DeleteBehavior.Cascade)// Session belongs to one Workshop
                                             //.HasForeignKey(s => s.WorkshopId)     // Foreign Key has been configured in Session model - it can be done here instead like so
       .OnDelete(DeleteBehavior.Cascade);
            var workshops = new List<Workshop>
        {
            new Workshop
            {
                Id = 1,
                Name = "Angular JS Bootcamp",
                Category = "frontend",
                Description = "<p><strong>AngularJS</strong> (also written as <strong>Angular.js</strong>) is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.</p><p>It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM) architectures, along with components commonly used in rich Internet applications. (This flexibility has led to the acronym MVW, which stands for \"model-view-whatever\" and may also encompass model–view–presenter and model–view–adapter.)</p>",
            },
            new Workshop
            {
                Id = 2,
                Name = "React JS Masterclass",
                Category = "frontend",
                Description = "<p><strong>React</strong> (also known as <strong>React.js</strong> or <strong>ReactJS</strong>) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.</p><p>React can be used as a base in the development of single-page or mobile applications. Complex React applications usually require the use of additional libraries for state management, routing, and interaction with an API.</p>",
            },
            new Workshop
            {
                Id = 3,
                Name = "Crash course in MongoDB",
                Category = "database",
                Description = "<p><strong>MongoDB</strong> is a cross-platform document-oriented database program. It is issued under the Server Side Public License (SSPL) version 1, which was submitted for certification to the Open Source Initiative but later withdrawn in lieu of SSPL version 2. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemata. MongoDB is developed by MongoDB Inc.</p><p>MongoDB supports field, range query, and regular expression searches. Queries can return specific fields of documents and also include user-defined JavaScript functions. Queries can also be configured to return a random sample of results of a given size.</p>",
            },
            new Workshop
            {
                Id = 4,
                Category = "backend",
                Name = "Mastering Node JS and Express",
                Description = "<p><strong>Node.js</strong> is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser. Typically, JavaScript is used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML and run client-side by a JavaScript engine in the user's web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting - running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a \"JavaScript everywhere\" paradigm, unifying web application development around a single programming language, rather than different languages for server side and client side scripts.</p><p>The Node.js distributed development project, governed by the Node.js Foundation, is facilitated by the Linux Foundation's Collaborative Projects program.</p>",
            },
        };

            modelBuilder.Entity<Workshop>().HasData(workshops);

            var sessions = new List<Session>
    {
        new Session
        {
            Id = 1,
            WorkshopId = 1,
            Name = "Introduction to Angular JS",
            Speaker = "John Doe"
        },
        new Session
        {
            Id = 2,
            WorkshopId = 1,
            Name = "Scopes in Angular JS",
            Speaker = "John Doe"
        },
        new Session
        {
            Id = 3,
            WorkshopId = 2,
            Name = "Introduction to React JS",
            Speaker = "Paul Smith"
        },
        new Session
        {
            Id = 4,
            WorkshopId = 2,
            Name = "JSX",
            Speaker = "Paul Smith"
        },
    };

            modelBuilder.Entity<Session>().HasData(sessions);
        }
    }
}
