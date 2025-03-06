
namespace Domain;

public class Section15VirtualMethod
{
    public class NumbersAdder
    {
        public int AddNumbers(int[] numbers)
        {
            int sum = 0;

            foreach (var num in numbers)
            {
                if (Filter(num))
                {
                    sum += num;
                }
            }

            return sum;
        }

        public virtual bool Filter(int num)
        {
            return true;
        }
    }

    public class EvenNumbersAdder : NumbersAdder
    {
        public override bool Filter(int num)
        {
            return num % 2 == 0;
        }
    }

    public class MultipleOfThreeAdder : NumbersAdder
    {
        public override bool Filter(int num)
        {
            return num % 3 == 0;
        }
    }

    public static void Run()
    {
        var numbers = new int[] { 1, 2, 3, 4, 5, 6, 7 };
        var numberAdder = new NumbersAdder();
        var evenNumberAdder= new EvenNumbersAdder();
        var result1=numberAdder.AddNumbers(numbers);
        Console.WriteLine(result1); 
        var result2 = evenNumberAdder.AddNumbers(numbers);
        Console.WriteLine(result2);
        Console.WriteLine("Hello World".CountWords());
}
}
