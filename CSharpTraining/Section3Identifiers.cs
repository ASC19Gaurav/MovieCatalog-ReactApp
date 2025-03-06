


using System;
using System.Diagnostics.Tracing;

namespace Domain;

public class Section3Identifiers
{
    public static void Run()
    {
        int _number = 100;
        int @int = 1000; // for variables with keyword as name prefix with @
        var x = 100;
        // var y; // error - implicitly-typed variables MUST be given an initial value
        Console.WriteLine($"x = {x}");
        Console.WriteLine($"Data type of x -> x.GetType() = {x.GetType()}");

        char exit = 'E';
        Console.WriteLine($"exit = {exit}");

        decimal cost = 2.50m;
        Console.WriteLine($"cost = ${cost}");

        // better precision
        Console.WriteLine(0.1 + 0.2);
        Console.WriteLine(0.1m + .2m);

        // implicit conversion (when conversion is lossless)
        int num = 10;
        decimal numDecimal = num;

        // explicit conversion (when conversion is lossy)
        num = (int)numDecimal;

        string str1 = "Hello";
        string str2 = "Hello";
        Console.WriteLine(str1 == str2); // true

        var message = "Hello, World!";
        int length = message.Length;
        char character = message[7]; // Index starts from 0

        Console.WriteLine($"The length of the string is: {length}");
        Console.WriteLine($"The character at index 7 is: {character}");
        Console.WriteLine(message.ToUpper());
        Console.WriteLine(message.Substring(3));

        foreach ( var word in message.Split(' ')) {
            Console.WriteLine(word);
        }

        string multiLineString = @"
                This is a multiline string.
                    It preserves formatting
                          including leading spaces and tabs.";
        Console.WriteLine(multiLineString);

        int value = 45;
        string report = $@"
Report Summary:
---------------
Value: {value}
Date: {DateTime.Now}
";
        Console.WriteLine(report);


        try
        {
            string quantityOfBooks = "150", priceOfBook = "2.50", taxPercentage = "0.05abc";

            int quantityOfBooksInt = int.Parse(quantityOfBooks);
            float priceOfBookFloat = float.Parse(priceOfBook);
            float taxPercentageFloat = float.Parse(taxPercentage);

            Console.WriteLine(quantityOfBooksInt);
            Console.WriteLine(priceOfBookFloat);
            Console.WriteLine($"Total price of books = {quantityOfBooksInt * priceOfBookFloat * (1 + taxPercentageFloat)}");
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }





    }
         

}
