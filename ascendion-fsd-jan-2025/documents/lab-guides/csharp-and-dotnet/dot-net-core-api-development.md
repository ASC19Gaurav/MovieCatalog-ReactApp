# Building the Workshops API using ASP.NET Core 8.0 Web API
- Create a new project (with solution). Choose Web App (ASP.NET Core API)
- Run it. The default app exposes a WeatherForecastController that defines a `/api/WeatherForecast` API. We shall build a workshops API server that serves workshops on `/api/workshops`, and sessions on `/api/sessions`.
- Set up Connection string in `appsettings.json` / `appsettings.Development.json`. This step is __NOT__ required if you use SQLite instead.
```json
"ConnectionStrings": {
    "MySQLConnection": "Server=127.0.0.1;Database=WorkshopsDB;User=username;Password=password;Port=3306;"
},
```
- Right click on Project -> Manage NuGet packages
    - Microsoft.EntityFrameworkCore 8.0.2
    - Microsoft.EntityFrameworkCore.Tools 8.0.2
    - Pomelo.EntityFrameworkCore.MySQL 8.0.2
    - __Note__: Entries are added in the project file
- If using SQLite then install this instead of MySQL 8.0.2
    - Microsoft.EntityFrameworkCore.Sqlite 8.0.2
__Note__: The pre-installed `Swashbuckle.AspNetCore` package enables Swagger.
- Create a class under `Data/ApplicationDbContext.cs`
```cs
using Microsoft.EntityFrameworkCore;

namespace AscendionAPI.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options) {

    }
}
```
- Register `ApplicationDbContext` in `Program.cs` (choose the appropriate steps based on your choice of database - MySQL or SQLite)
```cs
using AscendionAPI.Data;
```
```cs
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add this -> Configure DB service
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("MySQLConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("MySQLConnection"))
    ));

var app = builder.Build();
```
- If using SQLite, set this instead
```cs
// Add services to the container.
builder.Services.AddControllersWithViews();

// Add this -> Configure DB service -> Add DbContext with SQLite
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlite("Data Source=app.db"));
```
- Create `Modes/Domain/Workshop.cs`. We start with a `Workshop` model that has just 4 properties, and shall add more properties later on. Note how we define an enumeration-based validation for `Category`.
```cs
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

using AscendionAPI.Models.DataAnnotations;

namespace AscendionAPI.Models.Domain;

public class Workshop
{
	[Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

	[Required(ErrorMessage = "Workshop name is required")]
	public string Name { get; set; }

	[Required]
	[EnumDataType(typeof(WorkshopCategory), ErrorMessage = "Workshop category must be one of the allowed types")]
	public string Category { get; set; }

	[Required]
	[MaxLength(2048)]
	[MinLength(20)]
	public string Description { get; set; }
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
```
- You can define custom validation attributes by implementing `ValidationAttribute`. Define a custom validation attribute called `AlphanumericWithSpacesAttribute` in `Models/DataAnnotations/AlphanumericWithSpacesAttribute.cs`.  

You need to override the `IsValid` method that gets the `value` of the property being validated. It also gets the `ValidationContext` that provides critical metadata and allows you to validate properties in the context of the entire object or using external services. It can help when you for example wahnt to get the value of the other properties on the object with the property being validated (eg. to check if "ConfirmPassword" field matches the "Password" field, or "StartDate" is on or before "EndDate" property). The `IsValid`  method return `ValidationResult.Success` if the vaue is valid, and a `ValidationResult` object with the error message if the value is invalid.
```cs
using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace AscendionAPI.Models.DataAnnotations;

// a validation that is to be applied on string type properties on models
public class AlphanumericWithSpacesAttribute : ValidationAttribute
{
	private const string Pattern = @"^[A-Za-z0-9 ]*$";
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
        if( value != null && string.IsNullOrEmpty( value.ToString() ))
        {
            return ValidationResult.Success;
        }
        if( Regex.IsMatch( value.ToString(), Pattern ))
        {
            return ValidationResult.Success;
        }

        // How the "null coalescing" operator "??"" behaves...
        // string result = ErrorMessage != null ? ErrorMessage : $"{validationContext.DisplayName} can only have letters, digitsd and spaces"
        return new ValidationResult(ErrorMessage ?? $"{validationContext.DisplayName} can only have letters, digits and spaces");
    }
}
```
- We can now apply the new validation on any model properties that need to have only alphanumeric or spaces in their value. In `Models/Domain/Workshop.cs`,
```cs
[Required]
[EnumDataType(typeof(WorkshopCategory), ErrorMessage = "Workshop category must be one of the allowed types")]
public string Category { get; set; }
```
- Every table in the application is defined by adding a `DbSet<>` property in the `ApplicationDbContext` class. The table is seeded by overriding the `OnModelCreating()` method.
```cs
using Microsoft.EntityFrameworkCore;
using AscendionAPI.Models.Domain;

namespace AscendionAPI.Data;

public class ApplicationDbContext : DbContext
{
	// entities (tables)
	public DbSet<Workshop> Workshops { get; set; }

	public ApplicationDbContext(DbContextOptions options) : base(options)
	{
	}
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
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
    }
}
```
- Now perform the initial migration that creates the database (`app.db` file in the project folder), and the Workshops tables within with the seeded data.
- On Windows run from the NuGet console
```
Add-Migration "Initial migration""
```
- On Mac run this instead
```
dotnet ef migrations add "Initial migration"
```
- You will find a `Migrations` folder created with some files. This helps set up the DB on a another environment when the app is deployed.
- Now update the database
- On Windows
```
update-database
```
- On Mac
```
dotnet ef database update --verbose
```
- The migration will be applied on the database (`app.db` file) and Workshops table shall be created and seeded with data.
- You can view the table using `sqlite3` CLI client, or an online SQLite database viewer like https://inloop.github.io/sqlite-viewer/ (drag and drop the `app.db` and execute SQL queries to view the tables etc.)
- We shall now create the `WorkshopsController` that serves the Workshop resource on `/api/workshops`. The first action method we will implement is `GetAll()` that gets the list of all workshops. When serving data back in the response to `GET /api/workshops` through the `GetAll()` method, we convert the list of Workshop domain model objects to what we call `DTO` model objects. DTO stands for __Domain Transfer Object__. This is a good practice as having a separate a model just for transfering data in the request / reponse (response in this case) allows us to accept / send (send in this case) data that is required by the client. We can this way avoid sending sensitive / unnecessary back data to the client.
- Create `Models/DTO/WorkshopDto.cs`. No validation is required in the response DTO (`WorkshopDto`) as it is data we are sending to the client, not receiving from it (as we shall see, __we will do validations on DTOs used to receive data from the client__)
```cs
namespace AscendionAPI.Models.DTO;

public class WorkshopDto
{
	public int Id { get; set; }
	public string Name { get; set; }
	public string Category { get; set; }
	public string Description { get; set; }
}
```
- Create the `WorkshopsController`, inject the `ApplicationDbContext`, and implement the `GetAll()` method that queries the Workshops table (using the `ApplicationDbContext` property `Workshops`). In `Controllers/WorkshopsController.cs`
```cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using AscendionAPI.Data;
using AscendionAPI.Models.Domain;
using AscendionAPI.Models.DTO;;

namespace AscendionAPI.Controllers;

[Route("/api/[controller]")]
[ApiController]
public class WorkshopsController : ControllerBase
{
	private ApplicationDbContext _db;
	
    public WorkshopsController(ApplicationDbContext db)
	{
		_db = db;
	}

	//public List<Workshop> GetAll()
	[HttpGet]
	public IActionResult GetAll()
	{
		// Query the Workshops table to get a list of Workshop domain models
        var workshopsDomain = _db.Workshops.ToList();

        // convert the Domain model to DTO
		var workshopsDto = new List<WorkshopDto>();
        
        foreach (var workshopDomain in workshopsDomain)
		{
			var workshopDto = new WorkshopDto
			{
				Id = workshopDomain.Id,
				Name = workshopDomain.Name,
				Category = workshopDomain.Category,
				Description = workshopDomain.Description
			};

			workshopsDto.Add(workshopDto);
		}

        // always return DTO objects / list of DTO objects. Ok() send the data with an HTTP Success code of 200
		return Ok(workshopsDto);
	}
}
```
- __Notes__:
1. We inherit the controller from `ControllerBase` in ASP.NET Core Web API projects unlike ASP.NET Core MVC projects where the controller inherits from `Controller`.
2. We return IActionResult (or Task<IActionResult> in case `async..await` is used) just as in MVC apps here, but the API controller can also return data directly (like `List<Workshop>`). When returning `IActionResult` we do so by wrapping the data returned in a call to a method like `Ok()`, `CreatedAtAction()` etc. (or an error response using `BadRequest()`, `NotFound()` etc.).
3. `ApiController` attribute is additionally set on ASP.NET Core Web API controllers.
- It would be tedious to convert the Domain objects to DTO objects since this is a routine task we need to perform in many action methods. We can use the `AutoMapper` package that automates this process by copying over property values from the domain objects to DTO objects (using the default behavior of matching the fields with the same names in domain and DTO objects). To do so, first install `AutoMapper` using NuGet
```
AutoMapper 13.0.1
```
- Create AutoMapper profiles that defines which models need to be mapped using `CreateMap<TSource, TDestination>()`. `ReverseMap()`, is a convenience method, that defines the mapping between in the reverse direction, i.e. from `TDestination` to `TSource` types. In `Mappings/AutoMapperProfiles.cs` define `AutoMapperProfiles` that inherits from `AutoMapper.Profile`
```cs
using AutoMapper;

using AscendionAPI.Models.Domain;
using AscendionAPI.Models.DTO;

namespace AscendionAPI.Mappings;

public class AutoMapperProfiles : Profile
{
	public AutoMapperProfiles()
	{
		CreateMap<Workshop, WorkshopDto>().ReverseMap();
	}
}
```
- __Note__: Strictly speaking, we do not need the conversion from `WorkshopDto` to `Workshop` in this case, and hence the call to `ReverseMap()` is unnecessary.
- Configure `AutoMapper` as a service in `Program.cs`.
```cs
using AscendionAPI.Mappings;
```
```cs
// Add this - Make automapper service available throughout the app (defined through the profile file we created for mappings)
builder.Services.AddAutoMapper(typeof(AutoMapperProfiles));

var app = builder.Build();
```
- Use `Automapper` instead to convert the list of `Workshop` objects to a list of `WorkshopDto` objects in `Controllers/WorkshopsController.cs`. The mapper's `Map()` method takes the source object (can be a list of objects as well) as the argument (the list of workshop domain objects), the destination type as a generic parameter (`List<WorkshopDto>` here), and returns the converted object (`List<WorkshopDto>` here).  No more manual conversions!
```cs
using AscendionAPI.Models.DTO;
using AutoMapper;
```
```cs
public class WorkshopsController : ControllerBase
{
	private ApplicationDbContext _db;
	private IMapper _mapper;

	public WorkshopsController(ApplicationDbContext db, IMapper mapper)
	{
		_db = db;
		_mapper = mapper;
	}

	[HttpGet]
	async public Task<IActionResult> GetAll()
	{
		var workshopsDomain = await _db.Workshops.ToListAsync();
		
		// this does the work of creating a list of WorkshopDto objects, adding it to a new list, and returning the list
		var workshopsDto = _mapper.Map<List<WorkshopDto>>(workshopsDomain);

		return Ok(workshopsDto);
	}
}
```
- Now we define the `Session` model (sessions represent topics in the workshop, and every workshop will have multiple sessions). In `Models/Domain/Session.cs`, define a `Session`. Correspnding to the foreign key property `WorkshopId`, we have a "navigation property" called `Workshop`. Navigation properties do not create actual columns in the table for the model. But they are helpful as they enable auomatic population of related table record(s) when DB queries are made. Example, when we fetch a session, the related workshop will be populated into the `Workshop` property. A cool feature!
```cs
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

using AscendionAPI.Models.DataAnnotations;

namespace AscendionAPI.Models.Domain;

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
```
- Add a navigation property called `Sessions` in the `Workshop` model (`Models/Domain/Workshop.cs`)
```cs
class Workshop {
    // existing properties remain as such
    // ...

    // Add this - navigation property to include sessions when fetching a workshop
	public ICollection<Session> Sessions { get; set; }
}
```
- In `Data/ApplicationDbContext.cs`, add a `DbSet<>` for the new `Session` model 
```cs
public DbSet<Session> Sessions { get; set; }
```
- The cardinality of the relationship (__1:1__, __1:N__, __M:N__) decides how we configure it in `Data/ApplicationDbContext.cs`. For the __1:N__ relationship, it is configured like so in `OnModelCreating()`. This API is called __Fluent Validation__ API. We also seed data for the Sessions table.
```cs
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    base.OnModelCreating(modelBuilder);
    
    // Configure one-to-many relationship
    modelBuilder.Entity<Workshop>()
        .HasMany(w => w.Sessions)             // Workshop has many Sessions
        .WithOne(s => s.Workshop)             // Session belongs to one Workshop
        //.HasForeignKey(s => s.WorkshopId)     // Foreign Key has been configured in Session model - it can be done here instead like so
        .OnDelete(DeleteBehavior.Cascade); // when workshop is deleted, all its sessions are deleted from the database

    // rest of existing code...
    // ...

    // Seed data for sessions
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
```
- We will soon serve sessions on `/api/sessions`. Before doing so we need to set up `SessionDto` in `Models/DTO/SessionDto.cs`.
```cs
namespace AscendionAPI.Models.DTO;

public class SessionDto
{
    public int Id { get; set; }
	public int WorkshopId { get; set; }
	public string Name { get; set; }
    public string Speaker { get; set; }

    public Workshop? Workshop { get; set; }
}
```
- Also define the mapping from `Session` to `SessionDto` (again the reverse mapping is unnecessary, but no harm doing so).
```cs
CreateMap<Session, SessionDto>().ReverseMap();
```
- Create the sessions controller (`Controllers/SessionsController.cs`)
```cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using AutoMapper;

using AscendionAPI.Data;
using AscendionAPI.Models.Domain;
using AscendionAPI.Models.DTO;

namespace AscendionAPI.Controllers;

[Route("/api/[controller]")]
[ApiController]
public class SessionsController : ControllerBase
{
	private ApplicationDbContext _db;
	private IMapper _mapper;

	public SessionsController(ApplicationDbContext db, IMapper mapper)
	{
		_db = db;
		_mapper = mapper;
	}
	
	[HttpGet]
	async public Task<IActionResult> GetAll()
	{
		var sessionsDomain = await _db.Sessions.ToListAsync();
		var sessionsDto = _mapper.Map<List<SessionDto>>(sessionsDomain);
		
        return Ok(sessionsDto);
	}
}
```
- Update `Models/DTO/WorkshopDto.cs` to serve sessions if needed (without running into circular reference when serializing to JSON)
```cs
namespace AscendionAPI.Models.DTO;

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
```
- Also define the mapping in`Mappings/AutoMapperProfiles.cs`
- __NOTE__: Explore an alternative ``
```cs
CreateMap<Session, WorkshopSessionDto>().ReverseMap();
```
- __Repository pattern__: The repository pattern is used to abstract away the data layer from the controller. This pattern makes it possible for the controller to function withut any changes even if we decide to move to a different database (for eg. from SQLite/MySQL to MongoDB). The data access is done through a new layer called the __repository__. We define an interface for a repository-based access to a table that is independent of the underlying data source(MySQL/SQLite accessed though EF Core, MongoDB accessed using the MongoDB .NET driver etc.). This interface can be implemented by any class that provides access to a data source - we would thus have a SQL-based (EF Core) implementation of the repository, a MongoDB-based implementation etc. (depending on our needs).
- Let's implement the repository pattern to access the Workshops table.
- Define `Repositories/IWorkshopRepository.cs`
```cs
using System;
using AscendionAPI.Models.Domain;

namespace AscendionAPI.Repositories;

public interface IWorkshopRepository
{
	Task<List<Workshop>> GetAllAsync(string? filterOn = null, string? filterQuery = null,
            string? sortBy = null, bool isAscending = true, int pageNumber = 1, int pageSize = 1000, string _embed = "");
    Task<Workshop?> GetByIdAsync(int id);
    Task<Workshop> CreateAsync(Workshop workshop);
    Task<Workshop?> UpdateAsync(int id, Workshop workshop);
    Task<Workshop?> DeleteAsync(int id);
}
```
- Inject `ApplicationDbContext` in `Repositories/SqlWorkshopRepository.cs`
```cs
private ApplicationDbContext _db;

public SqlWorkshopRepository(ApplicationDbContext db)
{
    _db = db;
}
```
- Implement the methods in `Repositories/SqlWorkshopRepository.cs`
```cs
public async Task<List<Workshop>> GetAllAsyncTask<List<Workshop>> GetAllAsync(string? filterOn = null, string? filterQuery = null,
            string? sortBy = null, bool isAscending = true, int pageNumber = 1, int pageSize = 1000, string _embed = "")
{
    var query = _db.Workshops.AsQueryable();

    // Filtering
    if (!string.IsNullOrWhiteSpace(filterOn) && !string.IsNullOrWhiteSpace(filterQuery))
    {
        if (filterOn.Equals("Name", StringComparison.OrdinalIgnoreCase))
        {
            //query = query.Where(x => x.Name.Contains(filterQuery, StringComparison.OrdinalIgnoreCase));
            query = query.Where(x => x.Name.Contains(filterQuery));
        }
    }

    // Sorting 
    if (!string.IsNullOrWhiteSpace(sortBy))
    {
        if (sortBy.Equals("Name", StringComparison.OrdinalIgnoreCase))
        {
            query = isAscending ? query.OrderBy(x => x.Name) : query.OrderByDescending(x => x.Name);
        }
        else if (sortBy.Equals("StartDate", StringComparison.OrdinalIgnoreCase))
        {
            query = isAscending ? query.OrderBy(x => x.StartDate) : query.OrderByDescending(x => x.StartDate);
        }
    }

    // Include Sessions
    if (_embed.Equals("sessions", StringComparison.OrdinalIgnoreCase))
    {
        query = query.Include("Sessions");
    }

    // Pagination
    var skipResults = (pageNumber - 1) * pageSize;

    return await query.Skip(skipResults).Take(pageSize).ToListAsync();
}

public async Task<Workshop?> GetByIdAsync(int id)
{
    return await _db.Workshops.Include("Sessions").FirstOrDefaultAsync(w => w.Id == id);
}


public async Task<Workshop> CreateAsync(Workshop workshop)
{
    await _db.Workshops.AddAsync(workshop);
    // on save, the new Walk is added to the DB, and the model's Id filed is also populated with the auto-generated id
    await _db.SaveChangesAsync();

    return workshop;
}

public async Task<Workshop?> UpdateAsync(int id, Workshop workshop)
{
    var existingWorkshop = await _db.Workshops.FirstOrDefaultAsync(w => w.Id == id);

    if (existingWorkshop == null)
    {
        return null;
    }

    //existingWorkshop.Update(workshop);

    existingWorkshop.Name = workshop.Name;
    existingWorkshop.Category = workshop.Category;
    existingWorkshop.Description = workshop.Description;
    existingWorkshop.StartDate = workshop.StartDate;
    existingWorkshop.EndDate = workshop.EndDate;
    existingWorkshop.StartTime = workshop.StartTime;
    existingWorkshop.EndTime= workshop.EndTime;
    existingWorkshop.ImageUrl = workshop.ImageUrl;
    existingWorkshop.Location = workshop.Location;
    existingWorkshop.Modes = workshop.Modes;

    await _db.SaveChangesAsync();

    return existingWorkshop;
}

public async Task<Workshop?> DeleteAsync(int id)
{
    var workshopDomainModel = await _db.Workshops.FirstOrDefaultAsync(w => w.Id == id);

    if (workshopDomainModel == null)
    {
        return null;
    }

    _db.Workshops.Remove(workshopDomainModel);
    await _db.SaveChangesAsync();

    return workshopDomainModel;
}

```
- Implement the methods in any other IWorkshopRepository implementations you may have (like `Repositories/InMemoryWorkshopRepository.cs`). Sample implementation is below. __This step is simply to understand the motivation behind using the repository pattern more clearly. You can skip this step if you like.__
```cs
using System;
using AscendionAPI.Models.Domain;
namespace AscendionAPI.Repositories;
public class InMemoryWorkshopRepository : IWorkshopRepository
{
    private List<Workshop> workshops = new List<Workshop>
    {
        new Workshop
        {
            Id = 1,
            Name = "Angular",
            Category = "frontend",
            Description = "<p><strong>AngularJS</strong> (also written as <strong>Angular.js</strong>) is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.</p><p>It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM) architectures, along with components commonly used in rich Internet applications. (This flexibility has led to the acronym MVW, which stands for \"model-view-whatever\" and may also encompass model–view–presenter and model–view–adapter.)</p>",
        },
        new Workshop
        {
            Id = 2,
            Name = "React v18",
            Category = "frontend",
            Description = "<p><strong>React</strong> (also known as <strong>React.js</strong> or <strong>ReactJS</strong>) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.</p><p>React can be used as a base in the development of single-page or mobile applications. Complex React applications usually require the use of additional libraries for state management, routing, and interaction with an API.</p>",
        },
        new Workshop
        {
            Id = 3,
            Name = "MongoDB administration",
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
    public async Task<List<Workshop>> GetAllAsync(string? filterOn = null, string? filterQuery = null,
            string? sortBy = null, bool isAscending = true, int pageNumber = 1, int pageSize = 1000, string _embed = "");
    {
        return workshops;
    }
    public Task<Workshop> CreateAsync(Workshop workshop)
    {
        throw new NotImplementedException();
    }
    public Task<Workshop?> DeleteAsync(int id)
    {
        throw new NotImplementedException();
    }
    public Task<Workshop?> GetByIdAsync(int id)
    {
        throw new NotImplementedException();
    }
    public Task<Workshop?> UpdateAsync(int id, Workshop workshop)
    {
        throw new NotImplementedException();
    }
}
```
- Make available the `IWorkshopRepository` service as a request-scoped object in the app
```cs
builder.Services.AddScoped<IWorkshopRepository, SqlWorkshopRepository>();
```
- Inject `IWorkshopRepository` service into `Controllers/WorkshopsController.cs`
```cs
private readonly IWorkshopRepository _repo;
private readonly IMapper _mapper;

public WorkshopsController(IWorkshopRepository repo, IMapper mapper)
{
    _repo_ = repo
    _mapper = mapper;
}
```
- Implement the methods in `Controllers/WorkshopsController.cs`
```cs
// GET: /api/workshops?filterOn=Name&filterQuery=Angular&sortBy=Name&isAscending=true&pageNumber=1&pageSize=10&_embed=sessions
[HttpGet]
public async Task<IActionResult> GetAll([FromQuery] string? filterOn, [FromQuery] string? filterQuery,
            [FromQuery] string? sortBy, [FromQuery] bool? isAscending,
            [FromQuery] int pageNumber = 1, [FromQuery] int pageSize = 1000, [FromQuery] string _embed = "")
{
    var workshopsDomain = await _repo.GetAllAsync(filterOn, filterQuery, sortBy, isAscending ?? true, pageNumber, pageSize, _embed);

    var workshopsDto = _mapper.Map<List<WorkshopDto>>(workshopsDomain);

    return Ok(workshopsDto);
}

[HttpGet]
[Route("{id:int}")]
public async Task<IActionResult> GetById([FromRoute] int id)
{
    var workshopDomain = await _repo.GetByIdAsync(id);

    if (workshopDomain == null)
    {
        return NotFound();
    }

    var workshopDto = _mapper.Map<WorkshopDto>(workshopDomain);

    return Ok(workshopDto);
}

[HttpPost]
public async Task<IActionResult> Create([FromBody] AddWorkshopRequestDto addWorkshopRequestDto)
{
    if (!ModelState.IsValid)
    {
       return BadRequest(ModelState);
    }

    var workshopDomainModel = _mapper.Map<Workshop>(addWorkshopRequestDto);

    workshopDomainModel = await _repo.CreateAsync(workshopDomainModel);

    var workshopDto = _mapper.Map<WorkshopDto>(workshopDomainModel);

    return CreatedAtAction(nameof(GetById), new { id = workshopDto.Id }, workshopDto);
}

[HttpPut]
[Route("{id:int}")]
public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateWorkshopRequestDto updateWorkshopRequestDto)
{
    if (!ModelState.IsValid)
    {
       return BadRequest(ModelState);
    }

    var workshopDomainModel = _mapper.Map<Workshop>(updateWorkshopRequestDto);
    workshopDomainModel = await _repo.UpdateAsync(id, workshopDomainModel);

    if (workshopDomainModel == null)
    {
        return NotFound();
    }

    var workshopDto = _mapper.Map<WorkshopDto>(workshopDomainModel);

    return Ok(workshopDto);
}

[HttpDelete]
[Route("{id:int}")]
public async Task<IActionResult> Delete([FromRoute] int id)
{
    var workshopDomainModel = await _repo.DeleteAsync(id);

    if (workshopDomainModel == null)
    {
        return NotFound();
    }

    // If you'd like, return the deleted Workshop model
    // var workshopDto = new WorkshopDto(workshopDomainModel);
    // return Ok(workshopDto);

    return Ok();
}
```
- Add `Models/DTO/AddWorkshopRequestDto.cs` and `Models/DTO/UpdateWorkshopRequestDto.cs` by copying `Models/Domain/Workshop.cs`. Ensure these new DTOs have validations set up. There is no need to redefine WorkshopCategory - you can reuse the one form the `Workshop` Domain model. Make sure to set their namespace to `AscendionAPI.Models.DTO`
- `Models/DTO/AddWorkshopRequestDto.cs`
```cs
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using AscendionAPI.Models.DataAnnotations;
using AscendionAPI.Models.Domain;

namespace AscendionAPI.Models.DTO;

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
```
- `Models/DTO/UpdateWorkshopRequestDto.cs`
```cs
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using AscendionAPI.Models.DataAnnotations;
using AscendionAPI.Models.Domain;

namespace AscendionAPI.Models.DTO;

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
```
- Set up the appropriate mappings in `Mappings/AutoMapperProfiles.cs`.
```cs
CreateMap<Workshop, WorkshopDto>().ReverseMap();
CreateMap<Session, SessionDto>().ReverseMap();

// Add these...
CreateMap<AddWorkshopRequestDto, Workshop>().ReverseMap();
CreateMap<UpdateWorkshopRequestDto, Workshop>().ReverseMap();
```
- You should now be able to perform CRUD operations on the Workshops resource.
- Instead of repeating the logic for BadRequest validation, you can get it done through a custom action filter attribute. Create `CustomActionFilters/ValidateModelAttribute.cs`.
```cs
using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace AscendionAPI.CustomActionFilters;

public class ValidateModelAttribute : ActionFilterAttribute
{
    public override void OnActionExecuting(ActionExecutingContext context)
    {
        if( !context.ModelState.IsValid )
        {
            context.Result = new BadRequestResult();
        }
    }
}
```
- Apply this on the Post and Put request actions (`Create()` and `Update()`)
```cs
using AscendionAPI.CustomActionFilters;
```
```cs
[HttpPost]
[ValidateModel]
public async Task<IActionResult> Create([FromBody] AddWorkshopRequestDto addWorkshopRequestDto)
{
    // Not needed anymore...
    // if (!ModelState.IsValid)
    // {
    //     return BadRequest(ModelState);
    // }

    var workshopDomainModel = mapper.Map<Workshop>(addWorkshopRequestDto);
    // rest of code...
    // ...
}
```
```cs
[HttpPut]
[ValidateModel]
public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateWorkshopRequestDto updateWorkshopRequestDto)
{
    // Not needed anymore...
    // if (!ModelState.IsValid)
    // {
    //     return BadRequest(ModelState);
    // }

    var workshopDomainModel = _mapper.Map<Workshop>(updateWorkshopRequestDto);
}
```
- __EXERCISE__: Do similar changes for the Sessions resource.
- Modify `Models/Domain/Workshop.cs` to include the remaining fields of a workshop
```cs
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using AscendionAPI.Models.DataAnnotations;

namespace AscendionAPI.Models.Domain;

public class Workshop
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)] // Auto-generate the key
    public int Id { get; set; }

    [Required(ErrorMessage = "Name is required")]
    [AlphanumericWithSpaces(ErrorMessage = "Name can only contain letters, digits, and spaces")]
    public string Name { get; set; }

    [Required]
    [EnumDataType(typeof(WorkshopCategory), ErrorMessage = "Invalid category for workshop")]
    public string Category { get; set; }

    [Required]
    [MaxLength(2048)]
    [MinLength(20)]
    public string Description { get; set; }

    [Required]
    public DateTime StartDate { get; set; }

    [Required]
    public DateTime EndDate { get; set; }

    [Required]
    public TimeOnly StartTime { get; set; }

    [Required]
    public TimeOnly EndTime { get; set; }

    public string? ImageUrl { get; set; }

    [Required]
    public Location Location { get; set; }

    [Required]
    public Modes Modes { get; set; }

    // Navigation properties
    public ICollection<Session> Sessions { get; set; }
}

public class Location
{
    [Required]
    public string Address { get; set; }

    [Required]
    public string City { get; set; }

    [Required]
    public string State { get; set; }
}

public class Modes
{
    public bool InPerson { get; set; }
    public bool Online { get; set; }
}

public enum WorkshopCategory
{
    frontend,
    backend,
    mobile,
    database,
    devops,
    language
}
```
- __NOTE__: Since we use DTOs to transfer data from the client to server, only DTOs need validation. Domain models do not need validation and you can remove the validation attributes form them.
- Update the DTOs as well. The DTOs that transfer data from client to server are `AddWorkshopRequestDto` and `UpdateWorkshopRequest.cs`, and only these 2 models require validations.
- `Models/DTO/WorkshopDto.cs`
```cs
namespace AscendionAPI.Models.DTO;

public class WorkshopDto
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Category { get; set; }
    public string Description { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public TimeOnly StartTime { get; set; }
    public TimeOnly EndTime { get; set; }
    public string? ImageUrl { get; set; }

    public LocationDto Location { get; set; }
    public ModesDto Modes { get; set; }

    // Navigation properties
    public ICollection<SessionDto>? Sessions { get; set; }
}

public class LocationDto
{
    public string Address { get; set; }
    public string City { get; set; }
    public string State { get; set; }
}

public class ModesDto
{
    public bool InPerson { get; set; }
    public bool Online { get; set; }
}
```
- `Models/DTO/AddWorkshopRequestDto.cs`
```cs
using System.ComponentModel.DataAnnotations;
using AscendionAPI.Models.DataAnnotations;
using AscendionAPI.Models.Domain;

namespace AscendionAPI.Models.DTO;

public class AddWorkshopRequestDto
{
    [Required(ErrorMessage = "Name is required")]
    [AlphanumericWithSpaces(ErrorMessage = "Name can only contain letters, digits, and spaces")]
    public string Name { get; set; }

    [Required]
    [EnumDataType(typeof(WorkshopCategory), ErrorMessage = "Invalid category for workshop")]
    public string Category { get; set; }

    [Required]
    [MaxLength(2048)]
    [MinLength(20)]
    public string Description { get; set; }

    [Required]
    public DateTime StartDate { get; set; }

    [Required]
    public DateTime EndDate { get; set; }

    [Required]
    public TimeOnly StartTime { get; set; }

    [Required]
    public TimeOnly EndTime { get; set; }

    public string? ImageUrl { get; set; }

    [Required]
    public AddWorkshopRequestLocationDto Location { get; set; }

    [Required]
    public AddWorkshopRequestModesDto Modes { get; set; }
}

public class AddWorkshopRequestLocationDto
{
    [Required]
    public string Address { get; set; }

    [Required]
    public string City { get; set; }

    [Required]
    public string State { get; set; }
}

public class AddWorkshopRequestModesDto
{
    public bool InPerson { get; set; }
    public bool Online { get; set; }
}
```
- `Models/DTO/UpdateWorkshopRequestDto.cs`
```cs
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using AscendionAPI.Models.DataAnnotations;
using AscendionAPI.Models.Domain;

namespace AscendionAPI.Models.DTO;

public class UpdateWorkshopRequestDto
{
    [Required(ErrorMessage = "Name is required")]
    [AlphanumericWithSpaces(ErrorMessage = "Name can only contain letters, digits, and spaces")]
    public string Name { get; set; }

    [Required]
    [EnumDataType(typeof(WorkshopCategory), ErrorMessage = "Invalid category for workshop")]
    public string Category { get; set; }

    [Required]
    [MaxLength(2048)]
    [MinLength(20)]
    public string Description { get; set; }

    [Required]
    public DateTime StartDate { get; set; }

    [Required]
    public DateTime EndDate { get; set; }

    [Required]
    public TimeOnly StartTime { get; set; }

    [Required]
    public TimeOnly EndTime { get; set; }

    public string? ImageUrl { get; set; }

    [Required]
    public UpdateWorkshopRequestLocationDto Location { get; set; }

    [Required]
    public UpdateWorkshopRequestModesDto Modes { get; set; }
}

public class UpdateWorkshopRequestLocationDto
{
    [Required]
    public string Address { get; set; }

    [Required]
    public string City { get; set; }

    [Required]
    public string State { get; set; }
}

public class UpdateWorkshopRequestModesDto
{
    public bool InPerson { get; set; }
    public bool Online { get; set; }
}
```
- Set up the appropriate mappings in `Mappings/AutoMapperProfiles.cs`.
```cs
CreateMap<Location, LocationDto>().ReverseMap();
CreateMap<Modes, ModesDto>().ReverseMap();

CreateMap<AddWorkshopRequestLocationDto, Location>().ReverseMap();
CreateMap<AddWorkshopRequestModesDto, Modes>().ReverseMap();

CreateMap<UpdateWorkshopRequestLocationDto, Location>().ReverseMap();
CreateMap<UpdateWorkshopRequestModesDto, Modes>().ReverseMap();
```
- We added fields for `Workshop` model, and we have already been seeded the database with workshops without those field. If we seed new data, then the values for new columns would need to be set to null in these records (which will cause seeding to fail as many of these fields are required). So we will drop the database completely, and start migrations afresh.
- Delete the `Migrations` folder, and drop the database. If using MySQL, drop it by connecting to it using a client like MySQLWorkbench (or something like the MySQL CLI client). If using SQLite, simply delete the `app.db` file in this project.
- Now add/update the following in `Data/ApplicationDbContext.cs`. Within `OnModelCreating()` keep this as is.
```cs
// Define one-to-many relationship between Workshop and Session
modelBuilder.Entity<Workshop>()
    .HasMany(w => w.Sessions)
    .WithOne(s => s.Workshop)
    // .HasForeignKey(s => s.WorkshopId)
    .OnDelete(DeleteBehavior.Cascade); // Cascade delete

```
- We configure `Location` and `Modes` as owned entities so that separate tables are not created for these. Rather the fields of `Location` and `Modes` become columns of the `Workshop` table as configure below.
```cs
// Configure 'Location' as an owned by 'Workshop'
modelBuilder.Entity<Workshop>()
    .OwnsOne(w => w.Location, l =>
    {
        l.Property(loc => loc.Address).HasColumnName("Address");
        l.Property(loc => loc.City).HasColumnName("City");
        l.Property(loc => loc.State).HasColumnName("State");
    });

// Configure 'Modes' as an owned by 'Workshop'
modelBuilder.Entity<Workshop>()
    .OwnsOne(w => w.Modes, l =>
    {
        l.Property(loc => loc.InPerson).HasColumnName("InPerson");
        l.Property(loc => loc.Online).HasColumnName("Online");
    });
```
- Seed data for `Workshops` table. Not how the data for the owned entities are seeded.
```cs
//  Seed data for workshops
var workshops = new List<Workshop>
{
    new Workshop
    {
        Name = "Angular JS Bootcamp",
        Category = "frontend",
        Id = 1,
        Description = "<p><strong>AngularJS</strong> (also written as <strong>Angular.js</strong>) is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.</p><p>It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM) architectures, along with components commonly used in rich Internet applications. (This flexibility has led to the acronym MVW, which stands for \"model-view-whatever\" and may also encompass model–view–presenter and model–view–adapter.)</p>",
        StartDate = new DateTime(2019, 1, 1),
        EndDate = new DateTime(2019, 1, 3),
        StartTime = new TimeOnly(9, 30),
        EndTime = new TimeOnly(13, 30),
        ImageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/2000px-AngularJS_logo.svg.png"
    },
    new Workshop
    {
        Name = "React JS Masterclass",
        Category = "frontend",
        Id = 2,
        Description = "<p><strong>React</strong> (also known as <strong>React.js</strong> or <strong>ReactJS</strong>) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.</p><p>React can be used as a base in the development of single-page or mobile applications. Complex React applications usually require the use of additional libraries for state management, routing, and interaction with an API.</p>",
        StartDate = new DateTime(2019, 1, 14),
        EndDate = new DateTime(2019, 1, 16),
        StartTime = new TimeOnly(10, 0),
        EndTime = new TimeOnly(17, 30),
        ImageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
    },
    new Workshop
    {
        Name = "Crash course in MongoDB",
        Category = "database",
        Id = 3,
        Description = "<p><strong>MongoDB</strong> is a cross-platform document-oriented database program. It is issued under the Server Side Public License (SSPL) version 1, which was submitted for certification to the Open Source Initiative but later withdrawn in lieu of SSPL version 2. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemata. MongoDB is developed by MongoDB Inc.</p><p>MongoDB supports field, range query, and regular expression searches. Queries can return specific fields of documents and also include user-defined JavaScript functions. Queries can also be configured to return a random sample of results of a given size.</p>",
        StartDate = new DateTime(2019, 1, 20),
        EndDate = new DateTime(2019, 1, 22),
        StartTime = new TimeOnly(12, 30),
        EndTime = new TimeOnly(16, 30),
        ImageUrl = "https://upload.wikimedia.org/wikipedia/commons/3/32/Mongo-db-logo.png"
    },
};

modelBuilder.Entity<Workshop>().HasData(workshops);

// Seed data for Location (Owned Type)
modelBuilder.Entity<Workshop>()
    .OwnsOne(w => w.Location)
    .HasData(
        new
        {
            WorkshopId = 1,
            Address = "Tata Elxsi, Prestige Shantiniketan",
            City = "Bangalore",
            State = "Karnataka"
        },
        new
        {
            WorkshopId = 2,
            Address = "Tata Elxsi, IT Park",
            City = "Trivandrum",
            State = "Kerala"
        },
        new
        {
            WorkshopId = 3,
            Address = "HCL, Electronic City Phase 1",
            City = "Bangalore",
            State = "Karnataka"
        }
    );

// Seed data for Modes (Owned Type)
modelBuilder.Entity<Workshop>()
    .OwnsOne(w => w.Modes)
    .HasData(
        new
        {
            WorkshopId = 1,
            InPerson = true,
            Online = false
        },
        new
        {
            WorkshopId = 2,
            InPerson = true,
            Online = true
        },
        new
        {
            WorkshopId = 3,
            InPerson = false,
            Online = true
        }
    );
```
- Now perform migration
```
Add-Migration "Initial migration"
update-database
```
- __EXERCISE__: Do similar changes for the Sessions resource by adding the missing fields. Here is data that can help seed the sessions.
```cs
var sessions = new List<Session>
{
    new Session
    {
        Id = 1,
        WorkshopId = 1,
        SequenceId = 1,
        Name = "Introduction to Angular JS",
        Speaker = "John Doe",
        Duration = 1,
        Level = "Basic",
        Abstract = "In this session you will learn about the basics of Angular JS"
    },
    new Session
    {
        Id = 2,
        WorkshopId = 1,
        SequenceId = 2,
        Name = "Scopes in Angular JS",
        Speaker = "John Doe",
        Duration = 0.5,
        Level = "Basic",
        Abstract = "This session will take a closer look at scopes.  Learn what they do, how they do it, and how to get them to do it for you."
    },
    new Session
    {
        Id = 3,
        WorkshopId = 2,
        SequenceId = 1,
        Name = "Introduction to React JS",
        Speaker = "Paul Smith",
        Duration = 0.5,
        Level = "Basic",
        Abstract = "In this session you will learn about the basics of React JS",
    },
    new Session
    {
        Id = 4,
        WorkshopId = 2,
        SequenceId = 2,
        Name = "JSX",
        Speaker = "Paul Smith",
        Duration = 2,
        Level = "Basic",
        Abstract = "Learn how to use JSX to create view and bind data to it",
    },
};
```
- __NOTE__: Add this as a service in `Program.cs` if your JSON object fields are PascalCased and not converted to camelCased automatically. The resultant casing behavior can be overriden at the field lievel using the `[JsonPropertyName]` attribute.
```
// This is a global-setting alternative to using the [JsonPropertyName] on individual properties
builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
    });
```