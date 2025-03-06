

namespace Domain;

public class Section15AutoIncrementedProperty
{
    //public class Person
    //{
    //    public string? Name { get; set; } // Auto-implemented property for Name
    //    public int Age { get; private set; } // Auto-implemented property for Age
    //    public string City { get; set; } = "Bengaluru"; // Auto-implemented property with default value
    //}
    //public static void Run()
    //{
    //    var person = new Person
    //    {
    //        Name = "John Doe",
    //        // Age = 32, // cannot be set using the object initializer syntax as it has a private set accessor
    //        City = "Mumbai"
    //    };

    //    Console.WriteLine($"Name: {person.Name}, Age: {person.Age}, City: {person.City}");
    //}
    public class Person
    {
        public string? Name { get; init; } // Auto-implemented property with init accessor
        public int Age { get; init; }      // Auto-implemented property with init accessor
        public string City { get; init; } = "Bengaluru"; // Default value with init accessor
    }
    public static void Run()
    {
        var person = new Person
        {
            Name = "John Doe",
            Age = 32,
            City = "Mumbai"
        };

        Console.WriteLine($"Name: {person.Name}, Age: {person.Age}, City: {person.City}");
    }
    

    
}
