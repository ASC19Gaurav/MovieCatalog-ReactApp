

namespace Domain
{
    public  class Section15Constructor
    {
        public class Person
        {
            public string? Name { get; set; } // Auto-implemented property for Name
            public int Age { get; set; }      // Auto-implemented property for Age
            public string City { get; set; } = "Bengaluru"; // Auto-implemented property with default value

            // Constructor 1: Takes Name, Age, and City
            public Person(string name, int age, string? city)
            {
                Name = name;
                Age = age;

                if (city != null)
                {
                    City = city;
                }
            }

            // Constructor 2: Takes Name and Age, calls Constructor 1 with null for City
            public Person(string name, int age) : this(name, age, null)
            {
            }

            // Constructor 3: Takes no arguments, calls Constructor 1 with default values
            public Person() : this("Unknown", 0, null)
            {
            }
        }
    }
}
