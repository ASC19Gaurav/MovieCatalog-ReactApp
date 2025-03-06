

using System.Text.RegularExpressions;

namespace Domain;

public class Section15OOPs
{

    public class Person
    {
        private string? _name;
        private int _age;
        private string _city = "Bengaluru";

        public string? getName()
        {
            return _name;
        }

        // Setter methods can validate data and ensure data integrity
        public void setName(string name)
        {
            if (name != null && Regex.IsMatch(name, @"^[A-Za-z][A-Za-z\s]+$"))
            {
                _name = name;
            }
            else
            {
                throw new ArgumentException("The name argument is not a valid Name");
            }
        }

        public int getAge()
        {
            return _age;
        }

        // Setter methods can validate data and ensure data integrity
        public void setAge(int age)
        {
            if (age >= 0 && age <= 120)
            {
                _age = age;
            }
            else
            {
                throw new ArgumentException("The age argument should be between 0 - 120");
            }
        }

        public string getCity()
        {
            return _city;
        }

        public void setCity(string city)
        {
            _city = city;
        }
    }
    
    public static void Run()
    {
        //var john = new Person();

        //Console.WriteLine($"john.Name = {john.Name}, john.Age = {john.Age}, john.City = {john.City}");

        //john.Name = "John Doe";
        //john.Age = 32;
        //john.City = "Mumbai";

        //Console.WriteLine($"john.Name = {john.Name}, john.Age = {john.Age}, john.City = {john.City}");

        //var jane = new Person
        //{
        //    Name = "Jane Doe",
        //    Age = 26,
        //    City = "Mumbai"
        //};

        //Console.WriteLine($"jane.Name = {jane.Name}, jane.Age = {jane.Age}, jane.City = {jane.City}");


        var john = new Person();

        // error - private data members canot be accessed outside of methods of the class
        // Console.WriteLine($"john._name = {john._name}, john._age = {john._age}");
        Console.WriteLine($"john.getName() = {john.getName()}, john.getAge() = {john.getAge()}, john.getCity() = {john.getCity()}");

        john.setName("John Doe");
        john.setAge(32);
        john.setCity("Mumbai");

        Console.WriteLine($"john.getName() = {john.getName()}, john.getAge() = {john.getAge()}, john.getCity() = {john.getCity()}");

        try
        {
            john.setName("John 123");
            john.setAge(-32);

            Console.WriteLine($"john.getName() = {john.getName()}, john.getAge() = {john.getAge()}, john.getCity() = {john.getCity()}");
        }
        catch (Exception e) // it is a bad idea in general to handle only the general Exception (more on Exception handling later)
        {
            Console.WriteLine(e.Message);
        }


    }
}
