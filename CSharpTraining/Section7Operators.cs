using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharpTraining
{
    public class Section7Operators
    {
        public static void Run()
        {
            Console.WriteLine(1 + 2);
            Console.WriteLine(1 * 2);
            Console.WriteLine(5 / 2);

            Console.WriteLine(1 < 2);
            Console.WriteLine(1 <= 2);
            Console.WriteLine(1 > 2); // false
            Console.WriteLine(1 + 1 == 2);

            Console.WriteLine(1 < 2 && 2 < 3); // works by short-circuiting - if LHS operand is false, RHS wont be evaluated
            Console.WriteLine(1 < 2 || 3 < 2); // works by short-circuiting - if LHS operand is true, RHS wont be evaluated

            Console.WriteLine(!false);

            var city = Console.ReadLine();

            if (city == "Mumbai")
            {
                Console.WriteLine("Gateway of India");
            }
            else if (city == "New Delhi")
            {
                Console.WriteLine("India gate");
            }
            else if (city == "Bengaluru")
            {
                Console.WriteLine("Vidhana Soudha");
            }
            else
            {
                Console.WriteLine("I don't know");
            }

            switch (city)
            {
                case "Bombay":
                    Console.WriteLine("Now called Mumbai");

                    // If you handle a case it will not automatically fall through to the next case in case of a missing break statement
                    // Use `break` to break out
                    // or,
                    // Use `goto case "case"` to fallthrough to a different case
                    goto case "Bangalore";
                case "Mumbai":
                    Console.WriteLine("Gateway of India");
                    break;
                case "New Delhi":
                    Console.WriteLine("India gate");
                    break;
                case "Bangalore": // no break and no statements handling this case - so falls through automatically
                case "Bengaluru":
                    Console.WriteLine("Vidhana Soudha");
                    break;
                default:
                    Console.WriteLine("I don't know");
                    break;
            }



        }
    }
}
