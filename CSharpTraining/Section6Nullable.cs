using Domain;
using System;
using System.Linq;

namespace CSharpTraining
{
    public class Section6Nullable
    {
        public static void Run()
        {
            try
            {
                Console.WriteLine("Type a number");
                string? x = Console.ReadLine();

                if (string.IsNullOrWhiteSpace(x))
                {
                    Console.WriteLine("Invalid input");
                }
                else
                {
                    // Attempt to parse the input directly
                    int number = int.Parse(x);  // This can throw FormatException
                    string thanks = $"Thanks for the input! Your input is {number}";
                    Console.WriteLine(thanks);
                }
            }
            catch (FormatException ex)
            {
                Console.WriteLine("Invalid input: Not a valid number.");
                Console.WriteLine(ex.Message);
            }
        }
    }
}
