# Exercises in C#

## Basics

- Write a method `float ConvertToCelsius(float temperatureInFarenheit)` to accepts a temperature in Farenheit `temperatureInFarenheit` and convert to Celsius. Also round off the output value to 2 decimal digits before returning it.

- Modify the above as `float ConvertTemperature(float temperature, TemperatureUnit inputTemperatureUnit, TemperatureUnit outputTemperatureUnit)` in order to accept a second argument which is an enumeration of the temperature units (Celsius, Farenheit, Kelvin). The second argument `inputTemperatureUnit` is the unit of the temperature given in the first argument `temperature`. It also takes a third argument, the temperature unit in which the output is given - `outputTemperatureUnit`, again a value of the same enumeration.

- Write a method `decimal GenerateBill(double units)` that calculates and returns the monthly cost of electricity used by a household. The billing is done as per 
following rules. The range includes the lower limit but excludes the upper limit. 
| Units            | Cost per Unit (in cents) |
|------------------|--------------------------|
| 0 - 50           | 20                       |
| 50 - 100         | 25                       |
| 100 - 200        | 30                       |
| 200 and above    | 35                       |

If a household consumes 150 units of electricity, it will be billed at the rate of 20 cents for the 
first 50 units, 25 cents for the next 50 and 30 cents for the final 50 units. Thus the total cost 
would be 50 * 20 + 50 * 25 + 50 * 30 cents = $37.50   

**Note**: The output must be in decimal (as it is money). Do the conversion to decimal just before returning the output.
 
- Using switch..case implement a `DescribeDay` method, which given a day of the week as a number, should return
    - "Weekday" for numbers 1 to 5
    - "Weekend" for numbers 6 and 7
    - "Invalid day number" for any other number

**Aside**: Case expression can use relational operators in C#!

- Use `for` for the outer loop, and `while` for the inner loop to print the following 
```
1   
2 3   
4 5 6   
7 8 9 10   
11 12 13 14 15
```

- Write a method `Map` that creates and returns a new array with squares of integers in an array `arr` given as the argument.  
**Example**: Supplied array `arr` is { 1, 2, 3, 4 }. You should generate and return a new array { 1, 4, 9, 16 }.

- Write a method `IndexOf` that checks if an integer is present in an array of integers `arr` given as the argument. It returns the index of the item if present, and -1 otherwise.  
**Example**: Supplied array `arr` is { 1, 2, 3, 4 }. `IndexOf(3)` returns 2, and `IndexOf(5)` returns -1.

- Write a method `ConvertToCsv` that accepts a string (first argument) which has some value delmited by a string (second argument), and returns instead a string of comma-separated values (CSV).  
**Example**: If input string "John Doe; Jane Doe; Mark Smith; Mary Smith" and delimiter string is ";", the method returns "John Doe, Jane Doe, Mark Smith, Mary Smith".  
**Hint**: Explore use of `string.Join()` and the string method `Split`

- Implement the `FindMax` method, which given a two-dimensional array of positive integers, returns the maximum value from this array.  
**Important**: If any of the array's dimensions is zero, it means the array is empty, and the method should return -1.

- Using the `foreach` loop, implement the `InvalidNames` method, which given an array names, returns an array of invalid names. A name is invalid if
    - It has more than 20 characters
    - Has characters other than A-Za-z and spaces
    - Has more than 4 parts separated by one or more spaces ("John Doe" is valid, "Sir John Doe Montgomery Senior" is invalid)

- Strings are iterables and we can use them with `foreach`. Write a method to validate passwords (returns a boolean). A password is valid if
    - It has an uppercase letter
    - It has an lowercase letter
    - It has a digit
    - It has a special character (define your own set of allowed special characters).

- Modify the `FindMax` method, which given a two-dimensional array of integers. It now returns true if array has non-zero dimensions, and false otherwise. The index of the row and column having the maximum value is set on `out` parameters.  
**Example**: For the following input
```
{
    { 1, 2, 3 },
    { 7, 8, 9 },
    { 4, 5, 6 }
}
```
The return value is true (dimensions are 3 x 3, hence non-zero dimenions). The out parameters are set to 1 and 2.

- Modify the above to define a `struct FindMaxResult` that has the following fields
    - `boolean found`
    - `int row`
    - `int col`
    - `int max`
Instead of out parameters, now use this struct to capture the result and return it.

- Using the `foreach` loop with a list of strings (`List<string>`), implement the `InvalidNames` method, which given an array names, returns an list of invalid names. A name is invalid if
    - It has more than 20 characters
    - Has characters other than A-Za-z and spaces
    - Has more than 4 parts separated by one or more spaces ("John Doe" is valid, "Sir John Doe Montgomery Senior" is invalid)

- Implement the Todo App given in the assignments


## Object Oriented Programming

### Class fields
- Define a `public class HotelBooking`, which will contain the following fields that must be accessible outside of this class
    - GuestName (string)
    - StartDate and EndDate (DateTimes)

## Class constructors (overloading)
The constructor of this class should take the following parameters to initialize all the fields  
    - guestName  
    - startDate (DateTime)  
    - lengthOfStayInDays (int)  
The EndDate should be calculated in the constructor as the `StartDate` plus the `lengthOfStayInDays` .  
__Hint__: Use the `AddDays` method from the `DateTime`.

## Class methods
- Implement a `Triangle` class according to the requirements:
    - It should contain private fields of integer type representing base and height
    - They should be set via the constructor (`base` should be the first parameter, `height` should be the second)
        - __Note__: If you choose to call the argument `base`, then "base" is a reserved keyword in C#, so having a constructor parameter named "base" will not work. We can bypass this by using `@base`.
    - It should contain a public `CalculateArea` method, returning the area 
    - It should contain a public `ToString` method, which returns a string following this pattern: "Base is B, height is H".  
    __Aside__: Also set the `ToString` as an `override` for the `Object` base class method of the same name


- Create a `Person` class with `_name`, `_age`, `_nationality` and a static field `_defaultNationality` set to "Indian"
    - Add a constructor that accepts and sets all fields
    - Add another constructor that accepts only `name` and `age` and sets it to _name, _age. The `_nationality` is set to the `_defaultNationality`. All this is done by calling the first constructor.
    - Add a public `ToString()` that returns a string description of the person
    - In another class, create a static method which creates a list of persons, iterates and prints the person items.

### Class properties
-  Implement an `Order` class. It represents a simple order made in a store, and it needs to have two properties
    - Item (string), which should not be settable at all
    - Date (DateTime), which should be both gettable and settable. Its setter should validate if the given value has the same year as the current year. If not, it should not set it and throw an Exception saying "Only orders for the current year are accepted".
    - Define a constructor as well to set the fields
    - Demonstrate creation of `Order` objects using both constructor as well as object initializer

### Computed properties
- Modify class person to have `FirstName`, `MiddleName` and `LastName`.
    - Modify `Name` to be a computed property that displays "John Doe Montgomery" (FirstName MiddleName LastName)
    - Add `OfficialName` to be a computed property that displays "Montgomery, John Doe" (LastName, FirstName MiddleName)

### Static class
- Create a **static class** `DateHelpers` with the following helper methods
    - GetDay - Given the number of the day, it returns the name (0 -> "Monday", ..., 6 -> "Sunday")
    - GetMonth - Given the number of the month, it returns the name (1 -> "January", ..., 12 -> "December")
    - If input is invalid the methods throw appropriate exceptions

### Assignment on classes
- You need to maintain a list of names in a class, which has methods to add names to the list (the method accepts only valid names - choose you own validation criteria), and also write the list to a data source, and read from it. Let's say the data source is a file (say, `names.txt`). This list may be stored in some format in a data source. Let's say, the file will have names in CSV format (sample file contents below).
```
John Doe, Jane Doe, Mark Smith, Mary Smith
```
When the program loads, it checks if the file exists, and reads the contents, and populates the list of names in the class object. Names are then added to the list, and the utility to write to the data source (file) can be called to update the file contents.  
Implement an object-oriented solution for this requirement.
**Hints**:
- `File.Exists("file/path")` checks if a file exists on the given "file/path"
- `File.ReadAllText("file/path")` reads the contents of the text file at the given path
- `File.WriteAllText("file/path", "text content to go into the file")` writes the given content to the text file at the given path

## Object Oriented Programming - Polymorphism, Inheritance, Interfaces

### Virtual Properties
- In the code, you will see the GetCountsOfAnimalsLegs method. It iterates a List of Animals containing a Lion, a Tiger, a Duck, and a Spider.
```cs
using System;

namespace VirtualPropertyExercise;

public class AnimalLegsTotaller
{
    public List<int> GetCountsOfAnimalsLegs()
    {
        var animals = new List<Animal>
        {
            new Lion(),
            new Tiger(),
            new Duck(),
            new Spider()
        };
        
        var result = new List<int>();
        foreach(var animal in animals)
        {
            result.Add(animal.NumberOfLegs);
        }
        return result;
    }
}
```
This List is iterated, and the `NumberOfLegs` of each animal is added to the result List, which is then returned from this method.  

Your job is to define the following classes:
    - Animal (base class)
    - Lion (derived from Animal)
    - Tiger (derived from Animal)
    - Duck (derived from Animal)
    - Spider (derived from Animal)  

...in such a way that the result List will contain the following numbers:
    - 4 (Lion)
    - 4 (Tiger)
    - 2 (Duck)
    - 8 (Spider)  

Since we have two animals that have 4 legs, consider setting the NumberOfLegs in the base class to 4 and only override it in classes representing Animals with different numbers of legs.  

### Virtual Methods
- Create a `Person` base class (`Name`, `Age` properties) with a `CelebrateBirthday` method.
    - The base class implementation increments `Age`, and is virtual.
    - The derived class `Employee` calls the base class implementation and also prints a birthday message.
    - Create a list of type List<Person> with both `Person` and `Employee` objects being part of it. Iterate and call the `CelebrateBirthday` in order to test out that the appropriate methods are called.

- The aim of this exercise is to make this code work

```cs
using System;

namespace VirtualMethodExercise;

public class StringProcessorDemo
{
    public List<string> ProcessAll(List<string> words)
    {
        var stringsProcessors = new List<StringsProcessor>
            {
                new StringsTrimmingProcessor(),
                new StringsUppercaseProcessor()
            };

        List<string> result = words;
        foreach (var stringsProcessor in stringsProcessors)
        {
            result = stringsProcessor.Process(result);
        }
        return result;
    }
}
```
Currently, `StringsProcessor` (base class), `StringsTrimmingProcessor`, and `StringsUppercaseProcessor` (derived classes) are not implemented - you need to do this.   
    1. The `StringsTrimmingProcessor` class has a method that takes a collection of strings and, as a result, returns an identical collection, but with each word trimmed by half.  
        - So, for example, for the following input: "bobcat", "wolverine", "grizzly", it shall return: "bob", "wolv", gri".  
    __Hint__: To cut a string in half, you can use the `Substring` method.  
    2. The `StringsUppercaseProcessor` class has a method that takes a collection of strings and, as a result, returns an identical collection, but with each word made uppercase.  
        - So, for example, for the following input: "bobcat", "wolverine", "grizzly", it shall return: "BOBCAT", "WOLVERINE", "GRIZZLY".  
    3. The `StringsProcessor` class has a `Process` method that is overloaded.  
        - One implementation accepts a list of strings and returns the a new list of strings with each word processed by calling `Process` (this is the other overloaded method).  
        - Another implementation is virtual (and thus overridden by drived classes), and has a default implementation that returns the word without any change.    

The end result of `StringProcessorDemo.ProcessAll` woud be so - For the input: "bobcat", "wolverine", "grizzly", the result would be: "BOB", "WOLV", "GRI".

### Abstract Classes
- The purpose of the exercise is to make the `GetShapesAreas` method work.
```cs
namespace AbstractMethodExercise;

public static class ShapesDemo
{
    public static List<double> GetShapesAreas(List<Shape> shapes)
    {
        var result = new List<double>();
        
        foreach(var shape in shapes)
        {
            result.Add(shape.CalculateArea());
        }
        
        return result;
    }
}
```  
This method takes a collection of Shapes, and returns a collection of their areas as doubles.  

Your task is to:  
- Add the abstract `Shape` class with the abstract with an abstract `CalculateArea` method.
- Implement of the `Square`, `Rectangle`, and `Circle` classes so that each has the `CalculateArea` method that can be used in `GetShapesAreas` method.  

__Note__: To calculate the area of a circle use the `Math.PI` constant.

### Class extensions
- Create an extension method for the List<int> type called `TakeEverySecond`. This method should return a new List of ints with every second element from the input list.  

For example
    - for input  { 1, 5, 10, 8, 12, 4, 5 }, the result shall be { 1, 10, 12, 5 }
    - for input  { 1 } , the result shall be { 1 }
    - for empty input, the result shall be empty
    - don't handle the null input in any way (let it throw an exception)  

It must be possible to call this method like this:
```cs
var list = new List<int> { 1, 5, 10, 8, 12, 4, 5, 6 };
var result = list.TakeEverySecond();
```

- Create an extension method for strings called WordCount() that works like so
```cs
"Hello World".WordCount() // 2
``` 

- Create a DateTime extension method called IsWeekend() that works like so
```cs
new DateTime.Now.IsWeekend() // true if current day is a Saturday or Sunday, and false otherwise
```

### Interfaces
- Implement all types necessary to make this code work
```cs
using System;

namespace InterfaceExercise;

public static class NumericTransformationsDemo
{
    public static int Transform(
        int number)
    {
        var transformations = new List<INumericTransformation>
        {
            new By1Incrementer(),
            new By2Multiplier(),
            new ToPowerOf2Raiser()
        };
        
        var result = number;
        foreach(var transformation in transformations)
        {
            result = transformation.Transform(result);
        }
        return result;
    }
}
```
You will need to define the `INumericTransformation` interface which enforces implementers to define a `Transform` method, and the following classes implementing it:  
    - `By1Incrementer`, whose `Transform` method adds 1 to the input  
    - `By2Multiplier`, whose `Transform` method multiplies input by 2  
    - `ToPowerOf2Raiser`, whose `Transform` method raises input to the power of 2  

## JSONSerializer
- Demonstrate the use of `JSONSerializer.Serialize` and `JSONSerializer.Deserialize` on a list of objects os the `Order` class defined earlier.

## Exception Handling

### try..catch..finally
Currently, this method throws an exception when the b argument is zero.
```cs
using System;

namespace TryCatchFinallyExercise;

public static class Divider
{
    public static int DivideNumbers(int a, int b)
    {
        return a / b;
    }
}
```
Modify this method in such a way that
- When the b argument is zero, the result returned from this method is zero. Also, "Division by zero." is printed to the console.  
- No matter if b is zero or not, after the calculation has been performed, this method should also print "The DivideNumbers method ends."  

### Handling multiple exceptions individually
- Read 2 number inputs from the Console. Convert to integers and divide one by the other. Handle different exceptions individually and handle them by taking inputs again where invalid, or print an appropriate message and exit.

### Custom exceptions
- Create an `Address` class. It has properties `Location`, `City`, `PinCode`. It throws a custom exception when invalid pin code is set, and another if City is set to a string with digits anywhere in the string.

### Exception Filters
- Make a call to `http://workshops-server.onrender.com/workshops` and print out the result. Use exception filters to handle eception based on StatusCode of the reponse.

## Generics

### Simple Generic type
- Implement the generic `Pair` type as follows  
    - It should be a container for two items of the same type.  
    - It should have two properties called `First` and `Second` of the type that parameterized this class. Both those properties should be publically gettable but should not be publically settable.  
    - It should have a constructor taking two parameters that sets `First` and `Second` properties  
    - This class should expose public `ResetFirst` and `ResetSecond` methods that set the `First` or the `Second` property to the `default` values for their type.
Use this type to create a few objects. Also define a method `Pair<int, int> GetMinAndMax( IEnumerable<int> list )` that accepts a collection (actually enumerable) of numbers and finds the min and max (you can only assume that list can be iterated using foreach as it is an IEnumerable). The min and max should be returned as a Pair (`First` set to min, and `Second` to max).

- Now change the above generic type to accept 2 different generic type, one for `First` and another for `Second`. Use this type to create a list of pairs with string and int, the string holding the name of a person, and he int holding the age.

- What if we wanted a Tuple of 3 values instead of 2? We could create more generic types that accept more parameters. But there is a generic `System.Tuple` in C#. Explore and use it instead in `GetMinAndMax`.

### Generic methods
- Implement the static `SwapTupleItems` method. Its purpose is to take a Tuple of two items as a parameter and, as a result, returns a tuple in which those items are swapped.  

For example: For an input equal to `Tuple<int, string>(1, "hello")`, the result should be `Tuple<string, int>("hello", 1)`

for an input equal to Tuple<int, int>(1, 2), the result should be Tuple<int, int>(2, 1)
- Define a List extension generic method, that accepts a `List<TSource> src` argument, and returns a `List<TTarget>` (let's call it `dest`). It type casts every element in the `src` list and stores in the `dest` list. Finally `dest` is returned.  
__Hint__: For type conversion of value of unknown type, explore `Convert.ChangeType()`. You will also need to use `typeof` operator to specify the type of the target item (Explore `Type` class as well)

### IComparable, IComparer and Sort()
- While `IComparable` is implemented by the class whose objects are to be sorted, an `IComparer` is used as an input argument by `Sort()`. Explore `IComparer` and sort strings by the second letter.

### Funcs, Actions, Lambda expressions
- Create a `Map` that works with any List<int> 
```cs
List<int> squares = Map( List<int> { 1, 2, 3 }, x => x * x ); // squares will be a new List<int> { 1, 4, 9 }
List<string> days = Map( List<int> { 1, 2, 3, 1, 2, 3 }, ConvertToDay ); // days will be a new List<string> { "Monday", "Tuesday", "Wednesday", "Monday", "Tuesday", "Wednesday" } - you need to define `string ConvertToDay(int dayNumber)` as well
```
- Create a `ForEach` that works like Map, except that it accepts an Action instead of a Func as the second argument
```cs
ForEach( List<int> { 1, 2, 3 }, x => Console.Write( x * x ) ); // Logs 1 4 9 to the console
```
- Give this code
```cs
bool IsEven(int x)
{
    return x % 2 == 0;
}

bool IsOdd(int x)
{
    return x % 2 == 1;
}

bool isAny(IEnumerable<int> list, Func<int, bool> predicate)
{
    foreach (var item in list)
    {
        if (predicate(item))
        {
            return true;
        }
    }

    return false;
}
```
Rewrite these using Lambda expressions (i.e. define the predicate functions `isEven`, `IsOdd`, inline in these lines)
```cs
Console.WriteLine(isAny(new int[] { 1, 2, 3, 4, 5, 6 }, IsEven));
Console.WriteLine(isAny(new int[] { 1, 2, 3, 4, 5, 6 }, IsOdd));
```
- The class has two fields of `Func` type. To each of them, assign a lambda expression so that:
    - `GetLength` stores a function taking a string and returning its length.
    - `GetRandomNumberBetween1And10` stores a parameterless function generating a random number between 1 and 10.
```cs
using System;

namespace LambdaExpressions;

public class ClassWithLambdaExpressionMethods
{
    public Func<string, int> GetLength;
    public Func<int> GetRandomNumberBetween1And10;
}
```

## LINQ (Language Integrated Query)
- Implement the `FindShortestWord` method, which finds the shortest words in a collection of strings. If more than one word has the same minimal length, the first one on order should be returned.  
For example: For words {"aaa", "b", "c", "dd"}, the result shall be "b" because it is the shortest (only 1 letter) and is before another word with the same length ("c"). For an empty collection, an exception should be thrown.
- Implement the `GetFridaysOfYear` method, which given a collection of dates and a number representing the year, returns a collection of all dates from this collection that are Fridays (without duplicates).  
For example, for the following dates and year 2023:
    - 24.03.2023 (Friday)  
    - 24.03.2023 (Friday) -> will be excluded as duplicate  
    - 25.03.2023 (Saturday) -> will be excluded as not a Friday  
    - 31.03.2023 (Friday)
    - 08.03.2024 (Friday) -> will be excluded because it's not from the given year  
__Hint__: The `DateTime` object has a `DayOfWeek` property of the `DayOfWeek` enum type.

```cs
namespace LinqWorkout;
{
    public class LinqExercises
    {
        public static string FindShortestWord(List<string> words)
        {
            // your code
            // ...
        }

        public static IEnumerable<DateTime> GetFridaysOfYear(int year, IEnumerable<DateTime> dates) 
        {
            // your code
            // ...
        }
    }
}
```

## Collections
