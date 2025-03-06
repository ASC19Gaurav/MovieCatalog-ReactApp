# C# Lab Guide

## Types of Applications Built with C#

C# is a versatile and powerful programming language, and it’s used to develop a wide variety of applications across different domains. Here are some common types of applications built with C#:

### 1. Desktop Applications
   - **Frameworks**: Primarily developed with .NET Framework and .NET Core/5+.
   - **Examples**: Enterprise software, personal productivity tools, and utilities.
   - **Tools**: Windows Forms, WPF (Windows Presentation Foundation), and .NET MAUI for cross-platform desktop applications.

### 2. Web Applications and Web APIs
   - **Frameworks**: ASP.NET and ASP.NET Core.
   - **Examples**: E-commerce sites, content management systems (CMS), web services, and RESTful APIs.
   - **Tools**: C# with ASP.NET MVC or Razor Pages for dynamic web applications, Blazor for interactive web UIs, and ASP.NET Web API for backend services.

### 3. Mobile Applications
   - **Frameworks**: Xamarin and .NET MAUI (Multi-platform App UI).
   - **Examples**: Cross-platform apps that run on iOS and Android.
   - **Tools**: Xamarin Forms and .NET MAUI allow C# developers to create mobile applications with shared code across platforms.

### 4. Game Development
   - **Frameworks**: Unity (a popular game development engine).
   - **Examples**: 2D and 3D games for PC, consoles, mobile devices, and VR.
   - **Tools**: Unity uses C# as its primary language, allowing developers to write scripts for game behavior, physics, and UI.

### 5. Cloud-Based Applications and Microservices
   - **Frameworks**: ASP.NET Core, Azure SDKs, and other cloud libraries.
   - **Examples**: Cloud applications, microservices, and serverless functions.
   - **Tools**: Azure Functions and AWS Lambda with C#, enabling scalable, distributed applications on cloud platforms.

### 6. IoT (Internet of Things) Applications
   - **Frameworks**: .NET IoT libraries.
   - **Examples**: Embedded software for IoT devices, data collection, and smart device applications.
   - **Tools**: C# with .NET IoT libraries enables the development of applications that interact with hardware and sensors.

### 7. AI and Machine Learning Applications
   - **Frameworks**: ML.NET, TensorFlow.NET, and other .NET-compatible libraries.
   - **Examples**: Predictive analytics, data processing, image and text recognition, and recommendation engines.
   - **Tools**: ML.NET offers tools and APIs for integrating machine learning capabilities into C# applications.

### 8. Enterprise and Business Applications
   - **Frameworks**: .NET Framework, .NET Core, Entity Framework, and Windows Communication Foundation (WCF).
   - **Examples**: ERP systems, CRM systems, inventory management, and financial applications.
   - **Tools**: C# is well-suited for complex business logic and secure, scalable systems, often integrated with databases and REST APIs.

### 9. Cross-Platform Applications
   - **Frameworks**: .NET Core/5+ and .NET MAUI.
   - **Examples**: Applications that need to run on multiple platforms, including Windows, macOS, Linux, and mobile.
   - **Tools**: .NET Core and .NET 5+ allow C# code to be written once and deployed across different operating systems.

### Summary
C# is used to build everything from small utility programs to complex, distributed applications. Its integration with the .NET ecosystem, support for various libraries, and compatibility with cross-platform frameworks like .NET Core and .NET MAUI make it a solid choice for a wide range of applications.


## Differences and Applications of Various C# Frameworks

C# is supported by several frameworks within the .NET ecosystem, each tailored to specific types of applications and development needs. Here’s an overview of the key frameworks, their differences, and which are specifically suited for web development.

---

### 1. .NET Framework
   - **Description**: The original framework for building Windows-based applications. It includes a large library, runtime, and supports many libraries and tools.
   - **Platform Compatibility**: Windows-only.
   - **Applications**: Used for desktop applications (Windows Forms, WPF), enterprise applications, and ASP.NET Web Forms.
   - **Status**: It is in maintenance mode and is generally not recommended for new projects if cross-platform support is required.
   - **Web Development**: ASP.NET Web Forms and ASP.NET MVC (within .NET Framework) are older technologies used for building web applications.

### 2. .NET Core
   - **Description**: A cross-platform framework introduced as a modern, lightweight version of the .NET Framework.
   - **Platform Compatibility**: Cross-platform (Windows, macOS, Linux).
   - **Applications**: Web applications, console applications, microservices, and cloud-based applications.
   - **Status**: Actively used, but largely replaced by .NET 5+ for new projects.
   - **Web Development**: ASP.NET Core is used within .NET Core for creating high-performance, scalable web applications and REST APIs.

### 3. .NET 5, .NET 6, .NET 7+ (Current .NET Platform)
   - **Description**: The unified evolution of .NET Core, combining all .NET implementations into a single framework.
   - **Platform Compatibility**: Fully cross-platform.
   - **Applications**: All types of applications—web, desktop, mobile, microservices, cloud, and IoT.
   - **Status**: Actively developed and recommended for new projects.
   - **Web Development**: ASP.NET Core is part of the .NET 5+ ecosystem, offering robust capabilities for modern web application development.

### 4. ASP.NET Core
   - **Description**: A cross-platform, high-performance framework for building web applications, APIs, and real-time applications.
   - **Platform Compatibility**: Cross-platform, supported on Windows, macOS, and Linux.
   - **Applications**: Used for web applications (MVC and Razor Pages), REST APIs, real-time apps with SignalR, and Blazor Server.
   - **Key Features**: Fast, modular, supports dependency injection, integrated with modern front-end frameworks, and supports microservices architectures.
   - **Web Development**: Primarily for building scalable web applications and APIs.

### 5. Blazor (Within ASP.NET Core)
   - **Description**: A UI framework for building interactive web UIs using C# instead of JavaScript.
   - **Types**:
      - **Blazor Server**: Runs on the server and updates the UI over a SignalR connection.
      - **Blazor WebAssembly**: Runs entirely on the client-side via WebAssembly.
   - **Applications**: Rich, single-page applications (SPAs) with real-time interactivity.
   - **Platform Compatibility**: Cross-platform as part of ASP.NET Core.
   - **Web Development**: Ideal for interactive web UIs, often as an alternative to JavaScript frameworks like Angular or React.

### 6. Xamarin
   - **Description**: A framework for building mobile applications with a shared codebase in C#.
   - **Platform Compatibility**: Cross-platform (iOS, Android, and Windows).
   - **Applications**: Mobile apps with native-like performance.
   - **Status**: Actively used but being phased out by .NET MAUI for new development.
   - **Web Development**: Not used for web development; focused on mobile applications.

### 7. .NET MAUI (Multi-platform App UI)
   - **Description**: The successor to Xamarin, enabling cross-platform applications for desktop and mobile with a single codebase.
   - **Platform Compatibility**: Cross-platform (Windows, macOS, iOS, Android).
   - **Applications**: Desktop and mobile applications.
   - **Status**: Actively developed as the unified solution for cross-platform UI.
   - **Web Development**: Not directly for web, but Blazor Hybrid can allow Blazor components within .NET MAUI.

---

### Summary of Frameworks for Web Development
For web development, **ASP.NET Core** is the main framework within .NET Core and .NET 5+ for building web applications, with the following key components:
- **ASP.NET Core MVC**: For traditional MVC-style web applications.
- **Razor Pages**: For page-focused web applications, where each page is a self-contained unit.
- **Blazor**: For rich, interactive single-page applications (SPAs), allowing C# code to run in the browser.

**ASP.NET Core** and **Blazor** are the primary choices for modern web application development in C#. The unified .NET 5+ platform ensures cross-platform support, making it a future-proof choice for both new and cross-platform projects.

## Getting started
- Create project: Menu -> File -> New project -> Console Application -> CSharpFundamentals (name of project)
- Build project: Menu -> Build -> Build Solution, then execute it from project/bin/Debug/net8.0/ folder
```
.\CSharpFundamentals 100 200
```

__NOTE__: Autocompletion using __trigger + tab + tab__


## Understanding the `bin` and `obj` Folders in a C# Project

In a C# project, the `bin` and `obj` folders serve as directories for compiled files and intermediary build outputs, aiding in the build and execution processes. Here’s what each is used for:

### 1. `bin` Folder

- **Purpose**: Stores the final output of the project build.
- **Contents**: Contains the executable files (such as `.exe` or `.dll`) and all dependencies required to run the application.
- **Subfolders**: Often contains subfolders like `Debug` and `Release`, corresponding to different build configurations. Each configuration keeps its own compiled version in this directory.
- **When it's used**: When you build or run your project, the application binaries are placed here, making it the primary location for the runnable output of the project.

### 2. `obj` Folder

- **Purpose**: Stores temporary files and intermediate outputs that the build process needs.
- **Contents**: Includes intermediary files like partially compiled assemblies, generated source files, and metadata that help with incremental builds and linking.
- **How it helps**: Allows the compiler to avoid rebuilding unchanged parts of the project, speeding up the build process, especially in large projects.
- **When it’s used**: The `obj` folder is mainly used during compilation, and the files here are not intended for deployment or distribution. They are re-generated as needed during each build.

### Summary

- **`bin`**: Final, deployable output.
- **`obj`**: Intermediate, temporary files for the build process.

Both folders are often included in `.gitignore` files, as they are automatically generated and don’t contain source code.


## What is a DLL (.dll) File?

A **DLL** (Dynamic Link Library) file in Windows is a binary file that contains compiled code, data, and resources that can be used by multiple programs or processes. DLLs play a crucial role in software development on Windows, especially in languages like C# and C++. Here’s a breakdown of what DLL files are and their uses:

### 1. What a DLL Is

- A **DLL file** has a `.dll` extension and is essentially a library that provides reusable code and data.
- Unlike executable files (`.exe`), DLLs can’t be run directly. Instead, they’re loaded by applications when specific functionality is needed.

### 2. Benefits of DLLs

- **Code Reusability**: DLLs allow developers to separate code into reusable components. Different applications can share a single DLL, which avoids duplicating code across multiple applications.
- **Modularity**: Large applications can be divided into modules, each handled by separate DLLs, making development and maintenance easier.
- **Memory Efficiency**: Since DLLs are loaded only when needed and shared across applications, they reduce memory usage compared to embedding the same code within each program.
- **Easier Updates**: Since DLLs are separate files, they can be updated or replaced without modifying the applications that depend on them.

### 3. Common Uses of DLLs

- **Library of Functions**: DLLs often contain functions or methods that perform common tasks, such as handling file operations, string manipulation, or database access.
- **Plugin or Extension System**: Many applications use DLLs to support plugins, allowing new features to be added without changing the core application.
- **Third-Party Libraries**: Developers use third-party DLLs to integrate external features or APIs, like graphics libraries, without building them from scratch.

### 4. How DLLs Are Used in .NET

In the .NET ecosystem (including C#), DLLs are used to create **assemblies**, which are units of code deployment. A `.dll` file might represent a class library that contains types, methods, and other resources, and can be referenced by multiple projects. When a .NET project references a DLL, it can use the classes and methods defined in that library.

### Summary
DLL files allow code to be modular, shareable, and memory-efficient, enabling software to be built in a more manageable, maintainable way. They are fundamental for building applications on Windows and are extensively used in .NET projects.

## 1. Namespaces
- Namespaces are used for grouping logically related classes, types etc.
- File-level namespace - groups everything in the file - simple to use (no extra block and hence no nesting)
```cs
namespace FileLevelNamespace;

// your types...
```
- Namespace block allows grouping types under different namespaces even if they are in the same file.
```cs
namespace Namespace1
{
    // your types...
}

namespace Namespace2
{
    // your types...
}
```
- To use a type under a different namespace from the consumer's, first import the namespace using the `using` keyword. These statement must appear on top of the file.
```
using Namespace1;
```

## 2. Naming conventions for identifiers
- `normalVariable`
- `MethodName()`
- `SomeClass`
- `_privateField` // private data in classes
- `PublicField` // public data in classes

## 3. Identifiers, Variables and Primitive data types
- Write to the console
```cs
Console.WriteLine("Hello, World!");
```
- Command line arguments are available as `args` in top-level statements or in `Main(string[] args)` in the startup class.
```cs
if (args.Length == 2)
{
    int sum = int.Parse(args[0]) + int.Parse(args[1])
    Console.WriteLine(sum);
}
```
- Underscore can be used but generally not preferred (except as prefix for private fields of a class)
```cs
int _number = 100;
```
- `@` can be used to prefix keywords. The @ symbol MUST be the first character in an identifier (other uses are not allowed). Although allowed, it is discouraged to use `@` as a prefix unless what follows is a keyword.
```cs
int @int = 1000; // for variables with keyword as name prefix with @
```
- Create implicitly type variables using the `var` keyword. Implicit typing works only if we give an initial value for the variable.
```cs
var x = 100;
// var y; // error - implicitly-typed variables MUST be given an initial value
Console.WriteLine($"x = {x}");
Console.WriteLine($"Data type of x -> x.GetType() = {x.GetType()}");
```
- The `char` type - character
```cs
char exit = 'E';
Console.WriteLine($"exit = {exit}");
```
- The `decimal` type - useful for representing money and for financial transactions (has better precision than even `double`)
```cs
decimal cost = 2.50m; 
Console.WriteLine($"cost = ${cost}");

// better precision
Console.WriteLine(0.1 + 0.2);
Console.WriteLine(0.1m + .2m);
```
- Explicit and implicit type conversion. When conversion is lossless it will be done explicitly. When it is lossy (decimal to int, double to int, double to float etc.) is has to be done explicitly.
```cs
// implicit conversion (when conversion is lossless)
int num = 10;
decimal numDecimal = num;

// explicit conversion (when conversion is lossy)
num = (int) numDecimal;
```

## 4. String
- string is not a primitive type in C#. It is a reference type
- string is an alias for the System.String class
- Strings in C# are immutable, meaning once a string is created, its value cannot be changed. Any operation that appears to modify a string (e.g., concatenation) creates a new string in memory.
- The .NET runtime uses string interning, which means identical string literals are stored only once in memory for efficiency
- Strings can be compared using the == operator, and this checks the contents of the string, not just references
```cs
string str1 = "Hello";
string str2 = "Hello";
Console.WriteLine(str1 == str2); // true
```
- String length, character at index
```cs
string message = "Hello, World!";
int length = message.Length;
char character = message[7]; // Index starts from 0

Console.WriteLine($"The length of the string is: {length}");
Console.WriteLine($"The character at index 7 is: {character}");
```
- Important string methods (except `Join()`, the rest are string instance methods)
	- `Substring()`, `Replace()`, `ToUpper()`, `ToLower()`, etc., for manipulation
	- `Split()`, `Join()` (static method), `Contains()`, `IndexOf()`, and many more for searching and splitting strings
- String interpolation
```cs
string name = "Alice";
int age = 25;

string message = $"Hello, {name}! You are {age} years old.";
Console.WriteLine(message);
```
- Verbatim string literal - useful for formatted strings like HTML markup, SQL queries etc.
```cs
string multiLineString = @"
This is a multiline string.
It preserves formatting
    including leading spaces and tabs.";
```
```cs
string query = @"
SELECT *
FROM Users
WHERE Name = ""John"";
";
Console.WriteLine(query);
```
- String interpolation with verbatim
```cs
int value = 42;
string report = $@"
Report Summary:
---------------
Value: {value}
Date: {DateTime.Now}
";
Console.WriteLine(report);

## 5. Parsing strings 
```
- `int.Parse()`, `float.Parse()`, `try..catch`
```cs
// try + Tab + Tab
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
```

## 6. Nullable types
- Nullable types - value can be null (even for primitives!) - useful when reading values from a DB for example, and the column field value is null.
```cs
// nullable types (?)
string? x = Console.ReadLine();

// All() method of LINQ and char.IsDigit()
if (x == null || !x.All(char.IsDigit))
{
    Console.WriteLine("Invalid input");
    Environment.Exit(1);
}
else
{
    // string is an alias of System.String
    string thanks = "Thanks for the input!";
    Console.WriteLine(thanks);
}
```

## 7. Operators
- Arithmetic operators
```cs
Console.WriteLine(1 + 2);
Console.WriteLine(1 * 2);
Console.WriteLine(5 / 2); // quotient (int 2)
Console.WriteLine(5 % 2); // remainder (int 1)
```
- Relational operators, Conditional operator (ternary)
```cs
Console.WriteLine( 1 < 2 );
Console.WriteLine( 1 <= 2 );
Console.WriteLine( 1 > 2 ); // false
Console.WriteLine( 1 + 1 == 2 );
Console.WriteLine( 1 + 1 != 2 ); // false
Console.WriteLine( 1 < 2 ? "1 is less than 2" : "1 is not less than 2");
```
- Logical operators
```cs
Console.WriteLine( 1 < 2 && 2 < 3 ); // works by short-circuiting - if LHS operand is false, RHS wont be evaluated
Console.WriteLine( 1 < 2 || 3 < 2 ); // works by short-circuiting - if LHS operand is true, RHS wont be evaluated

Console.WriteLine( !false );
```
- Short-circuiting is especially useful when we need to test null values and then proceed with further checks in the same expression, if the value is not null.
```cs
string? x = Console.ReadLine();

// All() method of LINQ and char.IsDigit()
if (x == null || !x.All(char.IsDigit)) // if not for short-circuting, this line would throw and exception when x is null
{
    Console.WriteLine("Invalid input");
    Environment.Exit(1);
}
else
{
    // string is an alias of System.String
    string thanks = "Thanks for the input!";
    Console.WriteLine(thanks);
}
```

## 8. Conditional and looping
- `if..else if..else`
```cs
var city = "Bengaluru";

if( city == "Mumbai")
{
	Console.WriteLine("Gateway of India");
}
else if( city == "New Delhi")
{
	Console.WriteLine("India gate");
}
else if(city == "Bengaluru")
{
	Console.WriteLine("Vidhana Soudha");
}
else
{
	Console.WriteLine("I don't know");
}
```
- `switch..case`
```cs
switch(city)
{
	case "Bombay":
		Console.WriteLine("Now called Mumbai");

		// If you handle a case it will not automatically fall through to the next case in case of a missing break statement
        // Use `break` to break out
        // or,
        // Use `goto case "case"` to fallthrough to a different case
		goto case "Mumbai";
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
```
- You can use relational operators in case expression! Eg. `case <= 5`
- `for` loop
```cs
for( int j = 0; j < 10; ++j )
{
	Console.Write(j + ", ");
}
```
- `while` loop
```cs
int i = 0;

while (i < 10)
{
	Console.Write(i + ", ");
	++i;
}
```
- __EXERCISE__: Explore `do..while`

## 9. Methods
- For methods all code paths MUST return a value of the specified type
- Defining and using methods
- Defining as a top-level statement
```cs
int Sum(int a, int b)
{
    return a + b;
}

PrintSum(2, 3);
Console.WriteLine($"Sum(2,3) = {Sum(2, 3)}");
```

### Exercises on methods (solutions)
- Write a method to convert temperature from Farenheit to Celsius.
```cs
float ConvertTemperature(float temperatureInFarenheit)
{
    return (5.0f / 9.0f) * (temperatureInFarenheit - 32);
}
```
- Using it
```cs
Console.WriteLine( ConvertTemperature(180) );
```
- Defining as a static method of a class
```cs
namespace MethodDemo;

class TemperatureUtils {
    public static float ConvertTemperature(float temperatureInFarenheit)
    {
        return (5.0f / 9.0f) * (temperatureInFarenheit - 32);
    }
}
```
- Using it
```cs
using MethodDemo;

Console.WriteLine( MethodDemo.TemperatureUtils.ConvertTemperature(180) );
```
- Generate electricity bill based on slabs
```cs
decimal GenerateBill(double units)
{
	double result = 0;

	if (units > 200)
	{
		result += (units - 200) * 0.35;
		units = 200;
	}

	if (units > 100)
	{
		result += (units - 100) * 0.3;
		units = 100;
	}

	if (units > 50)
	{
		result += (units - 50) * 0.25;
		units = 50;
	}

	if (units > 0)
	{
		result += units * 0.20;
		units = 0;
	}

	return (decimal) result;
}
```
```cs
Console.WriteLine(GenerateBill(250));
Console.WriteLine(GenerateBill(150));
Console.WriteLine(GenerateBill(75));
Console.WriteLine(GenerateBill(25));
Console.WriteLine(GenerateBill(0));
```
```cs
string DescribeDay(int dayOfWeek)
{
	switch (dayOfWeek)
	{
		case <= 0:
			goto default;
		case <= 5:
			return "Weekday";
		case <= 7:
			return "Weekend";
		default:
			return "Invalid day number";
	}
}
```
```cs
Console.WriteLine(DescribeDay(-1));
Console.WriteLine(DescribeDay(0));
Console.WriteLine(DescribeDay(4));
Console.WriteLine(DescribeDay(5));
Console.WriteLine(DescribeDay(6));
Console.WriteLine(DescribeDay(7));
Console.WriteLine(DescribeDay(8));
```

## 10. Arrays
```cs
// array of given size
int[] primes = new int[10];

primes[0] = 2;
primes[1] = 3;
primes[2] = 5;

// Length of array
Console.WriteLine(primes.Length);

// with initializer
string[] names = new string[]
{
	"John",
	"Jane",
	"Mark",
	"Mary"
};

names[0] = "John Doe";

// we can omit data type on one of the sides
string[] students1 = { "John", "Jane", "Mark", "Mary" };
var students2 = new[] { "John", "Jane", "Mark", "Mary" };

// iteration using for loop
for(int i = 0; i < names.Length; ++i)
{
	Console.WriteLine(names[i]);
}

// foreach works with "iterables"
// array is an iterable
foreach (var prime in primes)
{
	Console.WriteLine(prime);
}

// Aside: string is an iterable as well (we get characters in the string)
foreach (var letter in "Hello")
{
	Console.WriteLine(letter);
}

// nice way to display the items in an iterable (eg. items in an array, letters in a string etc.)
// string.Join(delimiter, iterable)
Console.WriteLine(string.Join(", ", names)); // "John Doe, Jane, Mark, Mary"

// access from the end
Console.WriteLine(names[^1]); // 1-based index for accessing from the end

// get range of array items - includes start index item, excludes end index item
var someNames = names[1..3]; // { "Jane", "Mark" }
Console.WriteLine(string.Join(", ", someNames));
```
### Exercises on Arrays (solutions)
- Write a function `Map()` that accepts an array of integers and returns an array of squares of those integers.
```cs
int[] Map(int[] input )
{
	int[] output = new int[input.Length];
    for (int i = 0; i < input.Length; i++)
	{
		output[i] = input[i] * input[i];
    }
	return output;
}

var primes = new[] { 2, 3, 5, 7, 11 };
var primeSquares = Map(primes);
Console.WriteLine(string.Join(", ", primeSquares));
```

## 11. Multi-dimensional arrays
```cs
// using Multi-dimensional (here 2D) arrays
// Note how dimensions are specified and how array is initialized
var scores = new int[3, 4]
{
	{ 50, 60, 70, 80  },
	{ 60, 70, 80, 90  },
	{ 70, 80, 90, 100 },
};

// When initializer is provided, we can alternatively define the 2D array these ways as well
var marks1 = new int[,]
{
    { 50, 60, 70, 80  },
    { 60, 70, 80, 90  },
    { 70, 80, 90, 100 },
};

int[,] marks2 = 
{
    { 50, 60, 70, 80  },
    { 60, 70, 80, 90  },
    { 70, 80, 90, 100 },
};

int m = scores.GetLength(0);
int n = scores.GetLength(1);

for (int i = 0; i < m; ++i)
{
    for (int j = 0; j < n; ++j)
    {
        Console.Write(scores[i, j] + "  "); // Note how 2D array is accessed
    }

    Console.WriteLine();
}

// foreach loop goes row-by-row - foreach can be be used on implementations of the IEnumerable / IEnumerable<T> interface - like arrays, strings, collections etc.
foreach (var score in scores)
{
    Console.Write(score + "  ");
}
```

## 12. `out` parameters
- We can return only 1 value from a method. If we want to get multiple outputs from a function
	- We can enclose multiple values in an object
	- We can use built-in C# objects like `Tuple` (which are built for this very purpose)
	- We can use `ref` or `out`
```cs
// Do make sure to set all out parameters before the function exits
int FindMax(int[,] input, out int row, out int col)
{
	int rows = input.GetLength(0);
    int cols = input.GetLength(1);

	row = -1;
	col = -1;

	if( rows == 0 || cols == 0 )
	{
		return -1;
	}

	// there is at least 1 row and 1 column, so we assume max is input[0, 0] to begin with
	int max = input[0, 0];

	// iterate through the items of the 2D array and update `max` when you find something that is larger than the current value of `max`
	// foreach (int item in input) // iterates in row-major order
	// {
	//	   if( item > max )
	//	   {
	//	       max = item;
	//	   }
	// }

	for (int i = 0; i < rows; i++)
	{
		for (int j = 0; j < cols; j++)
		{
			if (input[i, j] > max )
			{
				row = i;
				col = j;
				max = input[i, j];
			}
		}
	}

	return max;
}

int[,] matrix = {
    { 1, 2, 3 },
    { 4, 5, 6 }
};

int row, col;

var max = FindMax(matrix, out row, out col);

Console.WriteLine(max);
Console.WriteLine($"row = {row} | col = {col}");
```
- Alternatively, we could return an object with required details
```cs
struct FindMaxResult
{
	public int row { get; set; }
    public int col { get; set; }
    public int max { get; set; }
}
```
- We would need to modify the return type of `FindMax` to `FindMaxResult`, and return an object with all details
```cs
var result = new FindMaxResult
{
	col = col,
	row = row,
	max = max
};

return max; // return result;
```

## 13. List
- Unlike array, there is no need to worry about the size when dealing with lists. They internally use arrays that will be reallocated with larger size when the current arrays used under-the-hood runs out of space.
```cs
var names = new List<string>();

names.Add("John");
names.Add("Jane");
names.Add("Mark");
names.Add("Mary");

// List is enumerable - foreach can be used
foreach (var item in names)
{
    Console.WriteLine(item);
}

// alternative way to display items
Console.WriteLine(string.Join(", ", names));

// list initializer
var primes = new List<int>() { 2, 3, 5 };
var morePrimes = new List<int>() { 7, 11, 13 };

// size can be queried using the `Count` property
Console.WriteLine(names.Count);

Console.WriteLine("names.Contains(\"Jane\") - " + names.Contains("Jane"));
Console.WriteLine("names.Contains(\"David\") - " + names.Contains("David"));

// you can find the index of an item (return -1 if item does not exist in the list)
Console.WriteLine("names.IndexOf(\"Jane\") - " + names.IndexOf("Jane") );
Console.WriteLine("names.IndexOf(\"David\") - " + names.IndexOf("David") );

names.Remove("Jane");
Console.WriteLine("names.Contains(\"Jane\") - " + names.Contains("Jane"));

names.RemoveAt(0);
Console.WriteLine("names.Contains(\"John\") - " + names.Contains("John"));

// you can index into a list (just like array)
Console.WriteLine("names[0] = " + names[0]);
Console.WriteLine("names[1] = " + names[1]);

names[0] = "John Doe";
names[1] = "Mark Smith";

Console.WriteLine("names[0] = " + names[0]);
Console.WriteLine("names[1] = " + names[1]);

primes.AddRange(morePrimes);
Console.WriteLine("After adding more primes - " + string.Join(", ", primes));
```

### Exercises on List and `out` parameters (solutions)
- Return a list of invalid names
- Accept an `out` parameter to be set to the list of valid names
```cs
List<string> InvalidNames(List<string> names, out List<string> validNames)
{
	List<string> invalidNames = new List<string>();

	// initialize the out parameter
	validNames = new List<string>();

	foreach (var name in names)
	{
		bool valid = true;

		// test if name has less than 20 characters
        if( name.Length > 20 )
		{
			valid = false;
		}

		// test if name has A-Za-z and space only
		foreach (var ch in name)
		{
			if( !( char.IsLetter( ch ) || char.IsWhiteSpace( ch ) ) )
			{
				valid = false;
            }
		}

		// test if name has maximum 4 words

		// stringVariable.Split() is an instance method (Called on string variable
        // string.Join() is a static method (Called on string) -> returns an array of string
		var words = name.Split(new char[] { ' ', '\t', '\n' } ); // { "Sir", "J", "D",  "Doe" "Sr" }

		if (words.Length > 4)
		{
			valid = false;
		}

		if(!valid)
		{
			invalidNames.Add(name);
		}
		else
		{
			validNames.Add(name);
		}
    }

    return invalidNames;
}

List<string> validNames;
var names = new List<string>
{
    "John Doe",
    "Sir J D Doe Sr",
    "Jane Doe123",
    "MarkSmith MarkSmith MarkSmith",
    "Mary Smith"
};

var invalidNames = InvalidNames( names, out validNames );

Console.WriteLine(string.Join(", ", invalidNames));
Console.WriteLine(string.Join(", ", validNames));
```
- Rewriting the solution without using the `out` parameter. We instead define a type to hold both valid and inalid names lists (here a struct, but we could define a class as well, or use a `Tuple`).
- __Note__: `struct`s are vaue type whereas `class`es are reference types (more on this later)
```cs
// IMPORTANT: You may need to move the Names struct type to the end of the file using top-level statements
public struct Names
{
	// initialized in constructor
	public List<string> validList;

    // initialized here itself
	public List<string> invalidList = new List<string>();

	public Names() {
		validList = new List<string>()
	}
}

Names ClassifyNames(List<string> names)
{
	Names namesLists = new Names();

    foreach (var name in names)
    {
        bool valid = true;

        // test if name has less than 20 characters
        if (name.Length > 20)
        {
            valid = false;
        }

		// test if name has A-Za-z and space only
        foreach (var ch in name)
        {
            if (!(char.IsLetter(ch) || char.IsWhiteSpace(ch)))
            {
                valid = false;
            }
        }

		// test if name has maximum 4 words
        // stringVariable.Split() is an instance method (Called on string variable
        // string.Join() is a static method (Called on string) -> returns an array of string
        var words = name.Split(new char[] { ' ', '\t', '\n' }); // { "Sir", "J", "D",  "Doe" "Sr" }

		if (words.Length > 4)
        {
            valid = false;
        }

		if (!valid)
        {
            namesLists.invalidList.Add(name);
        }
        else
        {
            namesLists.validList.Add(name);
        }
    }

    return namesLists;
}

Names namesLists = ClassifyNames(names);

Console.WriteLine(string.Join(", ", namesLists.validList));
Console.WriteLine(string.Join(", ", namesLists.invalidList));
```

## 14. `DateTime` - Working with dates
```cs
// working with DateTime
var today = DateTime.Now;
var independenceDay = new DateTime(1947, 8, 15, 0, 0, 0, DateTimeKind.Local);

// Add*() returns a new DateTime object with the required changes
var independenceDay77YearsLater = independenceDay.AddYears(77);

Console.WriteLine(today);
Console.WriteLine(independenceDay);
Console.WriteLine(independenceDay77YearsLater);
Console.WriteLine(today.DayOfWeek);
```

## 15. Fundamentals of Object Oriented Programming (OOP) in C#

- Class helps encapsulate state (data members) and behavior (methods).

### 15.1. Public fields (not preferred)
```cs
public class Person
{
    // public fields are not preferred
    public string Name; // defaults to null (in fact for any object)
    public int Age; // defaults to 0
    public string City = "Bengaluru"; // initial value may be assigned (but this is usually done in the constructor as value is usually different for different objects)
}
```
```cs
var john = new Person();

Console.WriteLine($"john.Name = {john.Name}, john.Age = {john.Age}, john.City = {john.City}");

john.Name = "John Doe";
john.Age = 32;
john.City = "Mumbai";

Console.WriteLine($"john.Name = {john.Name}, john.Age = {john.Age}, john.City = {john.City}");
```

### 15.2. Object initializer syntax
- With public fields (and properties with public set or init, as we shall see later), the object initializer syntax can be used as well to create objects.
```cs
var person = new Person
{
    Name = "John Doe",
    Age = 32,
    City = "Mumbai"
};

Console.WriteLine($"john.Name = {john.Name}, john.Age = {john.Age}, john.City = {john.City}");
```

### 15.3. Private fields (preferred)
```cs
public class Person
{
    // private fields are preferred for data hiding. Data hiding enables data integrity.
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
        if ( value != null && Regex.IsMatch(name, @"^[A-Za-z][A-Za-z\s]+$") )
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
		if ( age >= 0 && age <= 120 )
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
```
```cs
var john = new Person();

// error - private data members canot be accessed outside of methods of the class
// Console.WriteLine($"john._name = {john._name}, john._age = {john._age}");
Console.WriteLine($"john.getName() = {john.getName()}, john.getAge() = {john.getAge()}, john.getCity() = {john.getCity()}");

john.setName( "John Doe" );
john.setAge( 32 );
john.setCity( "Mumbai" );

Console.WriteLine($"john.getName() = {john.getName()}, john.getAge() = {john.getAge()}, john.getCity() = {john.getCity()}");

try
{
	john.setName( "John 123" );
	john.setAge( -32 );

	Console.WriteLine($"john.getName() = {john.getName()}, john.getAge() = {john.getAge()}, john.getCity() = {john.getCity()}");
}
catch(Exception e) // it is a bad idea in general to handle only the general Exception (more on Exception handling later)
{
	Console.WriteLine(e.Message);
}
```
- Private fields cannot be initialized via object initializer syntax, as they are inaccessible outside the class

### 15.4. Properties
- Properties are defined using get and set accessor methods. But they are used by consumers like properties (and not methods).
- Every property is backed up by a private field, and can have a get accessor, and a set accessor
```cs
public class Person
{
    // properties - A public property is backed up by a private field
    private string? _name; // a secret variable used by Name's getter and setter

    public string? Name
    {
        get
        {
            Console.WriteLine("get is called when accessing the property");

            return _name;
        }
        set
        {
            Console.WriteLine("set is called when we assign a value to the property");

            if (value != null && Regex.IsMatch(value, @"^[A-Za-z][A-Za-z\s]+$"))
            {
                _name = value; // The assigned value is accessed using the special variable `value`
            }
            else
            {
                throw new ArgumentException("The name argument is not a valid Name");
            }
        }
    }

    private int _age; // a secret variable used by Age's getter and setter

    public int Age
    {
        get
        {
            return _age;
        }
        set
        {
            _age = (value >= 0 && value <= 120) ? value : throw new ArgumentException("The age argument should be between 0 - 120");
        }
    }

    private string _city = "Bengaluru"; // normal private field. This would need getter and setter methods.

    public string getCity()
    {
        return _city;
    }

    public void setCity(string city)
    {
        _city = city;
    }
}
```
```cs
var john = new Person();

// Note that when we access the properties, the get accessor methods are executed. Yet the access syntax is like for normal fields.
// Only Name and Age are public properties (backed up by private _name and _age fields). City is a private field and is accessed using the usual getter method.
Console.WriteLine($"john.Name = {john.Name}, john.Age = {john.Age}, john.getCity() = {john.getCity()}");

// set accessor methods are invoked on assignment to properties
john.Name = "John Doe";
john.Age = 32;

// normal setter method
john.setCity( "Mumbai" );

Console.WriteLine($"john.Name = {john.Name}, john.Age = {john.Age}, john.getCity() = {john.getCity()}");

try
{
	john.Name = "John 123";
	john.Age = -32;

	Console.WriteLine($"john.Name = {john.Name}, john.Age = {john.Age}, john.getCity() = {john.getCity()}");
}
catch(Exception e) // it is a bad idea in general to handle only the general Exception (more on Exception handling later)
{
	Console.WriteLine(e.Message);
}
```
- With public properties (with public set or init), the object initializer syntax can be used
```cs
var person = new Person
{
    Name = "John Doe",
    Age = 32,
    // _city = "Mumbai" // _city is private and cannot be set
};

Console.WriteLine($"john.Name = {john.Name}, john.Age = {john.Age}, john.getCity() = {john.getCity()}");
```
- If `set` is omitted, the property will not be settable - it cannot be modified directly after initialization. It can only be assigned
    - Through a constructor,
    - Using an `init` accessor during object initialization (covered later)
    - Using a default value
      ```cs
      public string Name { get; } = "Default Name"; // Default value
      ```

### 15.5. Access modifiers for `get`, `set`, (and later `init`) accessor methods
- The get and set accessor methods can have individual access modifiers as well, but these should be same as or more restrictive than the one set on the property. In the example below the `set` accessor for `Age` is marked `private` and hence it can be set only through methods of the class. The object initializer syntax can set `Name` but not `Age`.
```cs
public class Person
{
    // properties - A public property is backed up by a private field
    private string? _name; // a secret variable used by Name's getter and setter

    public string? Name
    {
        get
        {
            Console.WriteLine("get is called when accessing the property");

            return _name;
        }
        set
        {
            Console.WriteLine("set is called when we assign a value to the property");

            if (value != null && Regex.IsMatch(value, @"^[A-Za-z][A-Za-z\s]+$"))
            {
                _name = value; // The assigned value is accessed using the special variable `value`
            }
            else
            {
                throw new ArgumentException("The name argument is not a valid Name");
            }
        }
    }

    private int _age; // a secret variable used by Age's getter and setter

    public int Age
    {
        get
        {
            return _age;
        }
        private set
        {
            _age = (value >= 0 && value <= 120) ? value : throw new ArgumentException("The age argument should be between 0 - 120");
        }
    }

    private string _city = "Bengaluru"; // normal private field. This would need getter and setter methods.

    public string getCity()
    {
        return _city;
    }

    public void setCity(string city)
    {
        _city = city;
    }
}
```
- With public properties (with `public set` or `init`), the object initializer syntax can be used
```cs
var person = new Person
{
    Name = "John Doe",
    // Age = 32, // Age cannot be set through outside the class - specifically, it cannot be used in the object initializer syntax
    // _city = "Mumbai" // _city is private and cannot be set
};

Console.WriteLine($"john.Name = {john.Name}, john.Age = {john.Age}, john.getCity() = {john.getCity()}");
```

### 15.6. Expression-bodied methods
- Introduced in C# 6.0 and extended in later versions, expression-bodied members allow you to define a method, property, or indexer with a single expression using the `=>` syntax.
```cs
public class Person
{
    private string? _name;

    public string? Name
    {
        get => _name;
        set => _name = value != null && Regex.IsMatch(value, @"^[A-Za-z][A-Za-z\s]+$") ? value : throw new ArgumentException("The name argument is not a valid Name");
    }

    private int _age; // a secret variable used by Age's getter and setter

    public int Age
    {
        get => _age;
        set => _age = (value >= 0 && value <= 120) ? value : throw new ArgumentException("The age argument should be between 0 - 120");
    }

    private string _city = "Bengaluru"; // normal private field. This would need getter and setter methods.

    public string getCity() => _city;

    public void setCity(string city) => _city = city;
}
```

### 15.7. Auto-implemented property
- If you need a simple property with no validations on the set accessor method, then you can use auto-implemented properties, where the backing private field is automatically generated.
```cs
public class Person
{
    public string? Name { get; set; } // Auto-implemented property for Name
    public int Age { get; private set; } // Auto-implemented property for Age
    public string City { get; set; } = "Bengaluru"; // Auto-implemented property with default value
}
```
- The object initializer
```cs
var person = new Person
{
    Name = "John Doe",
    // Age = 32, // cannot be set using the object initializer syntax as it has a private set accessor
    City = "Mumbai"
};

Console.WriteLine($"Name: {person.Name}, Age: {person.Age}, City: {person.City}");
```
- Introduced in C# 9.0, the `init` accessor allows properties to be assigned a value only during object initialization.
    - Once the object is initialized, the properties become __immutable (cannot be modified further)__.
    - It removes the need to explicitly create constructors when only initialization is needed (and no further modification), making the code more concise.
```cs
public class Person
{
    public string? Name { get; init; } // Auto-implemented property with init accessor
    public int Age { get; init; }      // Auto-implemented property with init accessor
    public string City { get; init; } = "Bengaluru"; // Default value with init accessor
}
```
- The object initializer (when using `init`). This strikes a balance between immutability and internal flexibility, enabling controlled initialization of properties.
```cs
var person = new Person
{
    Name = "John Doe",
    Age = 32,
    City = "Mumbai"
};

Console.WriteLine($"Name: {person.Name}, Age: {person.Age}, City: {person.City}");
```
- The `init` method is generally `public`. It can make sense to use a `private init` in certain scenarios, though its use case is more specific than a `public init`.
    - A `private init` limits initialization of the property to within the declaring class or its nested types, while still allowing external code to read the property
    - Useful when you want to control the property's initialization logic within the class while still allowing the object to be externally readable
    - When you use a factory or builder method to create objects, a `private init` ensures that properties can only be initialized internally by the factory logic

- __Property vs public field__: A property with a public get and a public/private set is preferred over a public field in C# because properties provide additional flexibility, maintainability, and encapsulation, even when they initially seem to behave like public fields.
    - Encapsulation allows you to introduce validation, logging, or other logic later without breaking existing code that uses the property. If you used a public field, adding validation later would require refactoring all code that directly accesses the field.
    - Properties can return values computed from other data, which is not possible with fields (more on this later)
    - Properties are often required for frameworks like WPF, ASP.NET, or JSON serializers that depend on reflection to interact with class members. Public fields are often ignored by such frameworks.
    - Properties allow adding logic to log, validate, or preprocess values.
    - Properties can have different access levels for get and set. This allows read-only access to external code while allowing the class to modify the value.
    ```cs
    public string Name { get; private set; }
    ```
    
- __Property and private field__: The decision between using private fields and public properties depends on the specific needs of your application and the principles of encapsulation and object-oriented design. In most cases, private fields and public properties are used together to strike a balance between data protection and controlled access.
    - Private fields are typically used to store internal data that is not directly exposed to external code (hide implementation details)
    - Public properties are used to expose data to external code in a controlled and safe manner. They allow you to implement additional logic (like validation, formatting, or lazy loading) while still keeping the internal field encapsulated.
    - Different access level required for get and set
    - Allow computed values
    - Required by many frameworks
    
### 15.8. Constructors
- Constructors can be overloaded. One constructor can call another using this syntax
```cs
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
```
```cs
// Constructor 1
var person1 = new Person("John Doe", 32, "Mumbai");
Console.WriteLine($"Name: {person1.Name}, Age: {person1.Age}, City: {person1.City}");

// Constructor 2
var person2 = new Person("Jane Doe", 28, "Bengaluru");
Console.WriteLine($"Name: {person2.Name}, Age: {person2.Age}, City: {person2.City}");

// Constructor 3
var person3 = new Person();
Console.WriteLine($"Name: {person3.Name}, Age: {person3.Age}, City: {person3.City}");
```
- Even when constructor sets values to the property (and NOT the backing private field), the set accessor methods are executed!
```cs
public class Person
{
    private string _name;
    private int _age;
    private string _city = "Bengaluru";

    public string? Name
    {
        get => _name;
        set
        {
            Console.WriteLine($"Name setter called with value: {value}");
            _name = value;
        }
    }

    public int Age
    {
        get => _age;
        set
        {
            Console.WriteLine($"Age setter called with value: {value}");
            _age = value;
        }
    }

    public string City
    {
        get => _city;
        set
        {
            Console.WriteLine($"City setter called with value: {value}");
            _city = value;
        }
    }

    public Person(string name, int age, string? city)
    {
        Name = name; // Setter executed
        Age = age;   // Setter executed
        if (city != null)
        {
            City = city; // Setter executed
        }
    }
}
```
```cs
// This is logged...
// Name setter called with value: Alice
// Age setter called with value: 30
// City setter called with value: New York
var person = new Person("Alice", 30, "New York");
```
- When both an object initializer and a constructor are used in C#, the default property/field initializers execute first (the ones the field or property is initialized at the time of declaration), the constructor executes next, followed by the object initializer.
- The constructor is always invoked when an object is created in C#, even when you use an object initializer
    - The object initializer syntax does not replace the need for a constructor. It is only a way to assign values to properties or fields after the constructor has been called. If there is no default constructor (a constructor without parameters), the compiler will require you to explicitly call one of the available constructors.
```cs
public class Person
{
    public string Name { get; set; } = "Default Name";
    public int Age { get; set; } = 0;

    public Person()
    {
        Console.WriteLine("Constructor executed");
        Name = "Constructor Name";
        Age = 32;
    }
}
```
```cs
// Log: Constructor executed
var person = new Person
{
    Name = "Initializer Name"
};

// Log: Name: Initializer Name, Age: 32
Console.WriteLine($"Name: {person.Name}, Age: {person.Age}");
```

### 15.9. Static classes, fields, properties and methods
- Static fields, properties and methods belong to the class rather than instance of the class (i.e. object)
- A static class can have ONLY static fields, properties and methods
- A static method can access only static fields, properties and methods (and not instance fields, properties and methods)
    - instance methods can access static fields, properties and methods
- Access as `ClassName.StaticMember`
- In this example, we create a `Calculator` class in C# that includes static methods for basic arithmetic operations: addition, subtraction, multiplication, and division. Using static methods allows these operations to be called without creating an instance of the class.
```cs
public class Calculator
{
    // Static method for addition
    public static double Add(double a, double b)
    {
        return a + b;
    }

    // Static method for subtraction
    public static double Subtract(double a, double b)
    {
        return a - b;
    }

    // Static method for multiplication
    public static double Multiply(double a, double b)
    {
        return a * b;
    }

    // Static method for division
    public static double Divide(double a, double b)
    {
        if (b == 0)
        {
            throw new DivideByZeroException("Division by zero is not allowed.");
        }
        return a / b;
    }
}
```
- The static methods can be called directly using the class name
```cs
double result1 = Calculator.Add(5, 3);           // Output: 8
double result2 = Calculator.Subtract(10, 4);     // Output: 6
double result3 = Calculator.Multiply(3, 4);      // Output: 12
double result4 = Calculator.Divide(10, 2);       // Output: 5
```
- **Add**, **Subtract**, **Multiply**, and **Divide**: Each method performs a specific arithmetic operation on two `double` parameters and returns the result.
- **Divide Method**: This method includes error handling for division by zero by throwing a `DivideByZeroException` if the second argument is zero.
- This design is efficient because it allows you to call these methods directly from the class without needing to create an instance of `Calculator`, making it convenient for quick calculations.

### 15.10. Exercises on static classes, fields, properties and methods (solutions)
- Create a static class `DateHelpers` with the following helper methods
    - `GetDay` - Given the number of the day, it returns the name (0 -> "Monday", ..., 6 -> "Sunday")
    - `GetMonth` - Given the number of the month, it returns the name (1 -> "January", ..., 12 -> "December")
    - If input is invalid the methods throw appropriate exceptions
```cs
public static class DateHelpers
{
    public static List<DateTime> holidays = new List<DateTime>
    {
        new DateTime(2025, 1, 1),
        new DateTime(2025, 1, 26),
    };

    public static string GetDay(int dayNumber)
    {
        if (dayNumber < 0 || dayNumber >= 7)
        {
            throw new ArgumentException("Day number must be between 0 - 6");
        }

        string[] days = {
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        };

        return days[dayNumber];
    }

    public static string GetMonth(int monthNumber)
    {
        if (monthNumber < 1 || monthNumber > 12)
        {
            throw new ArgumentException("Month number must be between 1 - 12");
        }

        string[] months = {
            "",
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        };

        return months[monthNumber];
    }
}
```
```cs
var d = DateTime.Now.DayOfWeek;

Console.WriteLine("Day of week = " + DateHelpers.GetDay((int) d));
Console.WriteLine("First day of week = " + DateHelpers.GetDay(0));
Console.WriteLine("Last day of week = " + DateHelpers.GetDay(6));
```

### 15.11. `struct` vs `class` (Value type vs Reference type)
- Quick overview of pass by value which is applicable for value types like primitives (here, int)
```cs
// A separate copy of the value passed is made in the stack as x
void ChangeInt(int x)
{
	++x;
}
```
```cs
int x = 10;
ChangeInt(10);
Console.WriteLine($"x = {x}");
```
- `struct` is a value type - when we pass it as an argument it is passed by value
```cs
public class Point
{
	public int x;
	public int y;
}

public struct PointStruct
{
    public int x;
    public int y;
}
```
```cs
// A separate copy of the value is made in the stack
// The object pointed by p is the same as in the Run() function's p
void ChangePoint(Point p)
{
	++p.x;
}

// A separate copy of the value is made in the stack
// The object pointed by p is different from the q in the Run() function
void ChangePointStruct(PointStruct p)
{
    ++p.x;
}
```
```cs
// p is a reference variable created on the stack - it has the address of the new point object created on the heap
Point p = new Point();
p.x = 10;
p.y = 20;
ChangePoint(p); // p (the reference) is copied by value -> the object pointed by this p and the p in ChangePoint()
Console.WriteLine(p.x); // this is 11

// q is a reference variable created on the stack - it has the address of the new point object created on the stack
PointStruct q = new PointStruct();
q.x = 10;
q.y = 20;
ChangePointStruct(q); // p (the reference) is copied by value -> the object pointed by q is also copied when calling ChangePointStruct
Console.WriteLine(q.x); // this is 10
```
- Primitive fields within a `struct` are values, and objects stored within it are references. This makes copies a shallow copy.
```cs
public struct Wrapper
{
    public int[] Numbers;
}

var w1 = new Wrapper { Numbers = new[] { 1, 2, 3 } };
var w2 = w1; // Reference to the array is copied

w2.Numbers[0] = 42; // Modifies the same array referenced by both structs

Console.WriteLine($"w1.Numbers[0]: {w1.Numbers[0]}"); // Output: w1.Numbers[0]: 42
Console.WriteLine($"w2.Numbers[0]: {w2.Numbers[0]}"); // Output: w2.Numbers[0]: 42
```

### 15.12. Exercises on OOP (solutions)
- Rectangle
```cs
class Rectangle
{
    // static field / properties belong to the class
    public static int CountInstances { get; private set; } = 0;

    // static constructor - this is called when class is first accessed / first object is created
    static Rectangle()
    {
        Console.WriteLine("*** static constuctor called ***");
        CountInstances = 0;
    }

    private static void SomeOtherStaticMethod()
    {
        Console.WriteLine("SomeOtherStaticMethod");
    }

    // static methods as helper utilities
    public static string GetLargerRectangle( Rectangle r1, Rectangle r2 )
    {
        // static methods cannot use instance field/properties/methods
        // Width = 100; // error
        // Area(); // error

        // static method can only call other static methods
        SomeOtherStaticMethod();

        if ( r1.Area() > r2.Area())
        {
            return "First rectangle is larger";
        } else
        {
            return "Second rectangle is larger";
        }
    }

    private int _width;

    public int Width
    {
        get => _width;
        set
        {
            if( value <= 0 )
            {
                throw new ArgumentException("Width must be a positive integer. You tried to set " + value + ".");
            }
            else
            {
                _width = value;
            }
        }
    }

    public int Height { get; private set; }
    
    public Rectangle() : this(1, 1)
    {
    }

    public Rectangle( int width, int height )
    {
        Width = width; // public setter is called
        Height = height; // setter is private -> but can be called through constructor
    }

    public void IncreaseHeight(int by) => Height += by;
    public int Area() => Width * Height;
    public int Perimeter() => 2 * (Width + Height);
}
```
```cs
try
{
    var rect1 = new Rectangle(); // 1, 1
    
    rect1.Width = 10;
    Console.WriteLine($"rect1.Width = {rect1.Width}");

    // invalid assignment - fails validation
    // rect1.Width = -10; // throws exception

    // var rect2 = new Rectangle(-100, 200); // throws exception - set accessor is called internally in constructor and fails validation

    var rect2 = new Rectangle(100, 200);

    rect2.Width = 300;

    // rect2.Height = 400; // assignment is not possible with private set accessor for Height
    rect.IncreaseHeight(200); // ok -> IncreaseHeight() can internally access the height

    Console.WriteLine(rect2.Height);
    Console.WriteLine(rect2.Area());
    Console.WriteLine(rect2.Perimeter());

    // using both constructor and object initializer - in case of conflict, the ones from the provided initializer applies
    // 100, 200
    var rect3 = new Rectangle()
    {
        Width = 100, // has public set
        Height = 200 // no public set, but has init
    };

    // default constructor is still invoked
    var rect4 = new Rectangle
    {
        Width = 150,
        Height = 150
    };

    Console.WriteLine(Rectangle.CountInstances);
    Console.WriteLine(Rectangle.GetLargerRectangle(rect3, rect4));
}
catch (Exception ex)
{
    Console.WriteLine(ex.Message);
}
```
- HotelBooking
```cs
public class HotelBooking
{
    // Q1. Add fields, default constructor
    // fields
    public string GuestName;
    public DateTime StartDate;
    public DateTime EndDate;

    public HotelBooking(string guestName, DateTime startDate, DateTime endDate)
    {
        GuestName = guestName;
        StartDate = startDate;
        EndDate = endDate;
    }

    // Q.2 Add an overloaded constructor
    public HotelBooking(string guestName, DateTime startDate, int lengthOfStay)
        : this(guestName, startDate, startDate)
    {
        EndDate = startDate.AddDays(lengthOfStay);
    }
}
```
```cs
HotelBooking booking = new HotelBooking("John Doe", DateTime.Now, new DateTime(2024, 12, 6));

Console.WriteLine( $"GuestName = {booking.GuestName} | StartDate = {booking.StartDate} | EndDate = {booking.EndDate}");
Console.WriteLine();
```
- Triangle
```cs
public class Triangle
{
    // Q. 3.1
    private float _base;
    private float _height;

    // Q. 3.2
    public Triangle( float @base, float height )
    {
        _base = @base;
        _height = height;
    }

    // Q. 3.3 - methods CalculateArea() and ToString()
    public float CalculateArea() => 0.5f * _base * _height;
    public string ToString() => $"Base is {_base}, Height is {_height}";
}
```
```cs
Triangle t = new Triangle(10, 5);

Console.WriteLine(t.CalculateArea());
Console.WriteLine(t.ToString());
```
- Order
```cs
public class Order
{
    // Item (string) should not be settable at all
    public string Item { get; }

    // Date should be both gettable and settable.
    private DateTime _date;
    public DateTime Date {
        get => _date;
        set
        {
            if( DateTime.Now.Year != value.Year)
            {
                throw new ArgumentException($"date must be current year i.e. {DateTime.Now.Year}");
            }
            _date = value;
        }
    }

    // Define a constructor as well to set the fields
    public Order(string item, DateTime date)
    {
        Item = item;
        Date = date;
    }

    public string ToString() => $"Item = {Item} | Date = {Date}";
}
```
```cs
try
{
    Order christmasShopping = new Order("Christmas Tree", new DateTime(2024, 12, 25));
    Console.WriteLine(christmasShopping.ToString());

    // throws exception since it is for another year
    Order newYearShopping = new Order("New Year Cake", new DateTime(2025, 1, 1));
    Console.WriteLine(newYearShopping.ToString());
}
catch (Exception ex)
{
    Console.WriteLine(ex.Message);
}
```
- Create a `Person` class with `_name`, `_age`, `_nationality` and a static field `_defaultNationality` set to "Indian"
    - Add a constructor that accepts and sets all fields
    - Add another constructor that accepts only `name` and `age` and sets it to `_name`, `_age`. The `_nationality` is set to the `_defaultNationality`. All this is done by calling the first constructor.
    - Add a public `ToString()` that returns a string description of the person
    - In another class, create a list of persons, iterate and prints the items
```cs
public class Person
{
    private static string _defaultNationality = "Indian";

    private string _name;
    private int _age;
    private string _nationality;

    // 3-argument constructor
    public Person(string name, int age, string nationality)
    {
        _name = name;
        _age = age;
        _nationality = nationality;
    }

    // 2-argument constructor
    public Person(string name, int age)
        : this(name, age, Person._defaultNationality)
    {
    }

    public string ToString() => $"Name = {_name} | Age = {_age} | Nationality = {_nationality}";
}
```
```cs
List<Person> persons = new List<Person>
{
    new Person( "John", 32, "Amercian" ),
    new Person( "Jane", 28, "Indian" ), // need not pass nationality if Indian
    new Person( "Mark", 40 ), // defaults to Indian
    new Person( "Mary", 44 ),
};

foreach (var person in persons)
{
    Console.WriteLine(person.ToString());
}
```

### 15.13. Inheritance, abstract class, virtual and abstract properties and methods, property and method hiding and overriding
- System.Object / object are one and the same - This is the base class for all classes in C#
    - It is the base class for Pizza, Ingredient.
- Abstract class
    - Ingredient is an abstract concept and is well-suited to be defined as an `abstract` class. Tomato is a _real Ingredient_, thus a class implementing `Ingredient`.
    - abstract class has asbtract properties or methods (a class may be declared abstract even without one, but that is generally not the case)
    - abstract properties and methods do not have an implementation in the class where they are declared
        - If you attempt to provide an implementation for an abstract method or property in the abstract base class, the compiler will throw an error
    - abstract methods are implicitly virtual (See below for what is virtual)
    - abstract class cannot be instantiated
- ToString() is a `virtual` method in `System.Object`
    - `virtual` method has a default implementation in the base class
        - If you do not provide an implementation for a virtual method or property in the base class, the C# compiler will generate an error. This is because a virtual member must have a default implementation in the base class, even if derived classes are allowed to override it.
    - it may optionally be hidden/overriden in the derived class
        - method hiding vs method overriding
            - `override` keyword
                - method overriding
                - run-time polymorphism (the method called is decided by .NET CLR)
                - the method that is called is based on the actual object type
            - no `override` keyword
                - method hiding
                - compile-time polymorphism (the method called is decided by the C# compiler)
                - the method that is called is based on the reference type
                - although omitting `override` is sufficient, it is best practice to use the `new` keyword instead
- If a class is abstract and we inherit from it, we must implement the abstract methods (override them, and not simply hide them), or declare the derived class also abstract
- `base.MethodName()` is used to invoke base class methods from derived classes
- `public Derived(w, x, y, z) : base(w, x)` is used to invoke base class constructor from derived classes
    - __NOTE__: you can invoke either `this( ... )` or `base( ... )`, but not both
```cs
public class Pizza
{
	private List<Ingredient> ingredients = new List<Ingredient>();

    public void AddIngredient( Ingredient ingredient )
    {
        ingredients.Add(ingredient);
    }

    // runtime polymorphism
    public override string ToString()
    {
        return "Number of ingredients in this pizza is " + ingredients.Count;
    }
}

public abstract class Ingredient
{
    // virtual method has a default implementation in the base class declaring it
    // abstract method does not have an implementation in the base class declaring it

    // virtual method
    // public virtual string Prepare()
    // {
    //    return "I am an ingredient";
    // }

    // abstract method
    public abstract string Prepare();

    // Virtual properties (fields cannot be virtual - properties and methods can be virtual)
    public virtual string Name { get; set; }  = "Some ingredient";

    public override string ToString() => "Name of ingredient : " + Name;
}

// Tomato is a concrete implementation of `Ingredient`
// If we did not override `Prepare()`, `Tomato` would be abstract as well
public /*abstract*/ class Tomato : Ingredient
{
    // Since `Tomato` is a concrete `Ingredient`, we must tell how it is prepared
    public override string Prepare()
    {
        return "Chop whole tomato in 1 inch squares";
    }

    public override string Name { get; set; } = "Tomato";

    public override string ToString() => base.ToString() + ". I am a cherry tomato.";
}

public class Cheese : Ingredient
{
    public override string Prepare()
    {
        return "Shred into thin slices";
    }

    public override string Name { get; set; } = "Cheese";
}
```
```cs
public static class PizzaDemo
{
	public static void Run()
	{
		Pizza margherita = new Pizza();

		margherita.AddIngredient(new Tomato());
        margherita.AddIngredient(new Cheese());

        Console.WriteLine(margherita.ToString());

        // Note that we are storing a reference to a `Pizza` object in a `System.Object` type
        // The below is same as `object doubleCheese = new Pizza();` as `object` is an alias for `System.Object`
        System.Object doubleCheese = new Pizza();
		doubleCheese.AddIngredient(new Tomato());
		doubleCheese.AddIngredient(new Cheese());

        // Which ToString() is called???
		// - System.Object (OOPFundamentals.Pizza)
		// - Pizza (Number of ingredients in this pizza is 2) 
		Console.WriteLine(doubleCheese);

        // When using "method hiding", the method called is decided at compile-time
		// So the method called depends on the type of reference used
		// here, whether we use the Pizza reference type of "System.Object" reference type

        Console.WriteLine("Ingredients of Pizza");

        // Note how ToString() methods works with virtual properties and overrides used
        foreach (var ingredient in ingredients)
        {
            Console.WriteLine(ingredient);
        }
    }
}
```

### 15.14. Virtual methods
- Here is an example demonstrating the benefit of using virual methods with overrides in derived classes. Note how code duplication is avoided.
```cs
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
```
```cs
Console.Clear();

var adder1 = new NumbersAdder();
var adder2 = new EvenNumbersAdder();
var adder3 = new OddNumbersAdder();

var numbers = new int[] { 1, 2, 3, 4, 5, 6 };

int sum1 = adder1.AddNumbers(numbers);
int sum2 = adder2.AddNumbers(numbers);
int sum3 = adder3.AddNumbers(numbers);

Console.WriteLine(sum1);
Console.WriteLine(sum2);
Console.WriteLine(sum3);

Console.ReadKey();
```

### 15.15. Exercises on virtual methods (solutions)
```cs
public class AnimalLegsTotaller
{
    public int GetCountsOfAnimalsLegs()
    {
        var animals = new List<Animal>
        {
            new Lion(),
            new Tiger(),
            new Duck(),
            new Spider()
        };

        var result = 0;

        foreach (var animal in animals)
        {
            result += animal.NumberOfLegs;
        }

        return result;
    }
}

public class Animal
{
    public virtual int NumberOfLegs { get; } = 0;
}

public class Lion : Animal
{
    public override int NumberOfLegs { get; } = 4;
}

public class Tiger : Animal
{
    public override int NumberOfLegs { get; } = 4;
}

public class Duck : Animal
{
    public override int NumberOfLegs { get; } = 2;
}

public class Spider : Animal
{
    public override int NumberOfLegs { get; } = 8;
}
```
```cs
var animalLegsTotaller = new AnimalLegsTotaller();
var total = animalLegsTotaller.GetCountsOfAnimalsLegs();
Console.WriteLine("total legs = " + total);
```
```cs
public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }

    public virtual void CelebrateBirthday()
    {
        ++Age;
    }

    public override string ToString()
    {
        return $"[Person Name : {Name} | Age = {Age}]";
    }
}

public class Employee : Person
{
    public string Role { get; set; }
    public string Dept { get; set; }

    public override void CelebrateBirthday()
    {
        base.CelebrateBirthday();
        Console.WriteLine($"Happy birthday {Name}!");
    }

    public override string ToString()
    {
        return $"[Employee Role : {Role} | Dept = {Dept} | {base.ToString()}]";
    }
}
```
```cs
Console.Clear();

var johnDoe = new Person
{
    Name = "John Doe",
    Age = 32,
};

var janeDoe = new Employee
{
    Name = "Jane Doe",
    Age = 28,
    Role = "Web Developer",
    Dept = "IT"
};

var list = new List<Person>
{
    johnDoe,
    janeDoe
};

foreach (var person in list)
{
    person.CelebrateBirthday();
    Console.WriteLine( person );
}

Console.ReadKey();
```
- `StringsProcessor`
```cs
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

public class StringsProcessor
{
    // v1
    // processes a list of strings, and returned a list of processed strings
    public List<string> Process(List<string> list)
    {
        List<string> result = new List<string>();

        foreach (var str in list)
        {
            result.Add(Process(str)); // this calls v2
        }

        return result;
    }

    // v2
    // processes the given string and returns the processed string
    // in this class implementation there is no processing (returns string as given)
    // ...but in derived class we will override and process as per requirements given
    public virtual string Process(string str)
    {
        return str;
    }
}

public class StringsTrimmingProcessor : StringsProcessor
{
    public override string Process(string str)
    {
        return str.Substring(0, str.Length / 2);
    }
}

public class StringsUppercaseProcessor : StringsProcessor
{
    public override string Process(string str)
    {
        return str.ToUpper();
    }
}
```
```cs
Console.Clear();

var listOfNames = new List<string>
{
    "John Doe",
    "Jane Doe"
};

var processedListOfNames = (new StringProcessorDemo()).ProcessAll(listOfNames);

Console.WriteLine(string.Join(",", processedListOfNames));

Console.ReadKey();
```
- Shape abstract class exercise
```cs
public static class ShapesDemo
{
    public static List<double> GetShapesAreas(List<Shape> shapes)
    {
        var result = new List<double>();

        foreach (var shape in shapes)
        {
            result.Add(shape.CalculateArea());
        }

        return result;
    }
}

public abstract class Shape
{
    public abstract double CalculateArea();
}

public class Rectangle : Shape
{
    public double Height { get; set; }
    public double Width { get; set; }

    public override double CalculateArea()
    {
        return Height * Width;
    }
}

public class Square : Shape
{
    public double Side { get; set; }

    public override double CalculateArea()
    {
        return Side * Side;
    }
}

public class Circle : Shape
{
    public double Radius { get; set; }

    public override double CalculateArea()
    {
        return Math.PI * Radius * Radius;
    }
}
```
```cs
Console.Clear();

var listOfShapes = new List<Shape>
{
    new Rectangle
    {
        Height = 10,
        Width = 20
    },
    new Square
    {
        Side = 15
    },
    new Circle
    {
        Radius = 10,
    },
};

List<double> areasOfShapes = ShapesDemo.GetShapesAreas(listOfShapes);
Console.WriteLine(string.Join(",", areasOfShapes));

Console.ReadKey();
```

### 15.16. Class Extensions
```cs
public static class StringExtensions
{
	public static int CountLines(this string str)
	{
		return str.Split('\n').Length;
	}
    public static int CountWords(this string str)
    {
        return str.Split(new char[] { ' ', '\n', '\t' }).Length;
    }
}
```
```cs
Console.Clear();

var str = "Hello world\nHow are you?";

// We have built-in methods like Split for string. Can we create our own extension methods?
// str.Split(","); // { "hello", "world" }

Console.WriteLine( "Number of lines = " + str.CountLines() );
Console.WriteLine( "Number of words = " + str.CountWords() );

Console.ReadKey();
```

### 15.17. Class Extensions exercises (solutions)
```cs
public static class ListExtensions
{
    // returns a list with items at index 0, 2, 4, 6, ... etc
    public static List<int> TakeEverySecond(this List<int> input)
    {
        var output = new List<int>();

        for( int i = 0; i < input.Count(); i += 2 )
        {
            output.Add(input[i]);
        }

        return output;
    }
}

public static class DateExtensions
{
    public static bool IsWeekend(DateTime date)
    {
        // DayOfWeek is a built-in enumeration with Sunday being 0,
        // and Saturday being 6
        return date.DayOfWeek == DayOfWeek.Sunday || date.DayOfWeek == DayOfWeek.Saturday;
    }
}
```

### 15.18. Interfaces
```cs
public class InterfaceDemo
{
	public InterfaceDemo()
	{
	}
}

// interface defines the public properties and methods that a class implemeting the interface should have
interface ICanWalk
{
	void Walk(); // method
}

interface ICanBePromoted
{
	string role { get; set; } // property
	string Promote(); // method
}

// interface can inherit from another interface (just like class can inherit from another class)
// interface ICanWork : ICanBePromoted
// {
// }
interface ICanWork
{
    void Work();
}

class Person : ICanWalk
{
    // public Person()
    // {
    // }

    public void Walk()
    {
		Console.WriteLine("Move one leg forward, then next");
    }
}

// base class should be first (only 1 base class), followed by multiple interfaces
class Employee : Person, ICanBePromoted, ICanWork
{
    public string role { get; set; }

    public string Promote()
    {
        role = $"Senior {this.role}";
        return role;
    }

    public void Work()
    {
        Console.WriteLine("Code code code");
    }
}
```

### 15.19. Interfaces exercises (solutions)
```cs
public static class NumericTransformationsDemo
{
    public static int Transform( int number )
    {
        var transformations = new List<INumericTransformation>
        {
            new By1Incrementer(),
            new By2Multiplier(),
            new ToPowerOf2Raiser()
        };

        var result = number;

        foreach (var transformation in transformations)
        {
            result = transformation.Transform(result);
        }

        return result;
    }
}

interface INumericTransformation
{
    int Transform(int input);
}

class By1Incrementer : INumericTransformation
{
    public int Transform(int input)
    {
        return input + 1;
    }
}

class By2Multiplier : INumericTransformation
{
    public int Transform(int input)
    {
        return input * 2;
    }
}

class ToPowerOf2Raiser: INumericTransformation
{
    public int Transform(int input)
    {
        return input * input;
    }
}
```
```cs
Console.Clear();

Console.WriteLine( NumericTransformationsDemo.Transform(3) );

Console.ReadKey();
```

## 16 Exception Handling

### 16.1 Exception Handling Fundamentals
- Create custom exception by inheriting from the `Exception` class.
```cs
class InvalidNameException : Exception
{
    public InvalidNameException(string Message) : base(Message) { }
}

class InvalidAgeException : Exception
{
    public InvalidAgeException(string Message) : base(Message) { }
}

class Person
{
    private string _name;

    public string Name
    {
        get => _name;
        init
        {
            if( value.Length < 8 || value.Length > 20 )
            {
                throw new InvalidNameException("Name should be between 8 and 20 characters");
            }

            if( !value.All( char.IsLetter ) )
            {
                throw new InvalidNameException("Name should have only letters");
            }
            
            _name = value;
        }
    }
    private int _age;

    public int Age {
        get => _age;
        init
        {
            if( value < 0 || value > 120 )
            {
                throw new InvalidAgeException("Age should be between 0 - 120");
            }
            
            _age = value;
        }
    }

    public override string ToString()
    {
        return $"Name = {Name}, Age = {Age}";
    }
}
```
- Use multiple `catch` blocks to handle various kinds of exceptions based on their type
- The generic `Exception` is handled in the last `catch` block.
- The `finally` block is used to execute code irrespective of whether `try` block executed completely, or an exception occcured and the `catch` block executed. This is true even if a `return` statement executes in `try`/`catch` block.
    - The `finally` block is used to carry out clean up tasks (like closing file handles).
```cs
try
{
    var john = new Person
    {
        Name = "JonathanDoe",
        Age = 32
    };

    Console.WriteLine(john);

    var hanuman = new Person
    {
        Name = "PawanPutraHanuman",
        Age = 32000
    };

    Console.WriteLine(hanuman);
}
catch (InvalidNameException e)
{
    Console.WriteLine("Name was incorrect");
    Console.WriteLine(e.Message);
}
catch (InvalidAgeException e)
{
    Console.WriteLine("Age was incorrect");
    Console.WriteLine(e.Message);
    Console.Write(e.StackTrace); // very useful (shows functions that are called and the line number of exception
}
catch (Exception e) // we should have he base 
{
    Console.WriteLine("Some unknown exception");
    Console.WriteLine(e.Message);
}
finally // caled even if a return statement is called in try / catch block that executed
{
    // any cleanup is done here
    Console.WriteLine();
    Console.WriteLine("Finally block");
}
```

### 16.2. Exception Handling exercises
- Modify `DivideNumbers` in such a way that
    * When the b argument is zero, the result returned from this method is zero.Also, "Division by zero." is printed to the console.
    * No matter if b is zero or not, after the calculation has been performed, this method should also print "The DivideNumbers method ends."
- Define `ReadAndDivide`
    * Read 2 number inputs from the Console.
    * Convert to integers and divide one by the other.
    * Handle different exceptions individually and handle them by taking inputs again where invalid, or print an appropriate message and exit.
```cs
public static class Divider
{
    public static int DivideNumbers(int a, int b)
    {
        try
        {
            return a / b;
        }
        catch( DivideByZeroException ex )
        {
            Console.WriteLine("Division by zero.");

            return 0;
        }
        finally
        {
            Console.WriteLine("The DivideNumbers method ends.");
        }
    }

    public static void ReadAndDivide()
    {
        string strX, strY;
        int intX, intY;

        try
        {
            // Read inputs x, y
            Console.Write("Enter x : ");
            strX = Console.ReadLine();
            intX = int.Parse(strX);

            Console.Write("Enter y : ");
            strY = Console.ReadLine();
            intY = int.Parse(strY);

            int result = intX / intY;

            Console.WriteLine("x/y = " + result );
        }
        catch (ArgumentOutOfRangeException ex)
        {
            Console.WriteLine("The input is too large to be processed");
            Console.WriteLine(ex.Message);
        }
        catch (OverflowException ex)
        {
            Console.WriteLine("The number is too large to be processed");
            Console.WriteLine(ex.Message);
        }
        catch (FormatException ex)
        {
            Console.WriteLine("The input does not seem to be a number");
            Console.WriteLine(ex.Message);
        }
        catch(DivideByZeroException ex)
        {
            Console.WriteLine("The second number y is 0. Cannot proceed with division.");
            Console.WriteLine(ex.Message); ;
        }
        catch(Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
    }
}
```
```cs
Console.Clear();

Divider.DivideNumbers(2, 0);
Divider.ReadAndDivide();

Console.ReadKey();
```

## 17. Fetching data from the backend
- async methods release the thread when the response is `await`ed
- Exception filters help handle the exception based on exception parameters (like `StatusCode` property in case of `HttpRequestException`)
```cs
using System.Text.Json;
using System.Net;
using System.Net.Http;

public struct Todo
{
    public int userId { get; set; }
    public int id { get; set; }
    public string title { get; set; }
    public bool completed { get; set; }

    public override string ToString()
    {
        var symbol = completed ? '✅' : '❌';
        return $"{symbol} userId = {userId} | id = {id} | title = {title}";
    }
}

async Task<Todo[]> FetchTodos()
{
    var httpClient = new HttpClient();

    HttpResponseMessage response = await httpClient.GetAsync("https://jsonplaceholder.typicode.com/todos");

    // throws an error is response is 404, 500 etc
    // System.Net.Http.HttpRequestException
    response.EnsureSuccessStatusCode();

    string responseBody = await response.Content.ReadAsStringAsync();
    Todo[] todos = JsonSerializer.Deserialize<Todo[]>(responseBody); // Deserialize converts from JSON-formatted string to C# array / object etc.
    return todos;
}
```
```cs
Console.Clear();

try
{
    var todos = await FetchTodos();

    Console.WriteLine("Number of todos = " + todos.Length);

    foreach(var todo in todos)
    {
        Console.WriteLine(todo);
    }
}
catch(HttpRequestException e) when (e.StatusCode == HttpStatusCode.BadRequest) // exception filter
{
    Console.WriteLine("We must have sent some query parameter incorrectly etc.");
}
catch (HttpRequestException e) when (e.StatusCode == HttpStatusCode.Forbidden) // exception filter
{
    Console.WriteLine("We don't have correct authorization");
}
catch(Exception e)
{
    Console.WriteLine(e.Message);
}

Console.ReadKey();
```

## 18. Generics

### 18.1. Motivation for using generics
- Let us create a custom list that tries to mimic the way the built-in `List` works
    - We create this for a list of integers.
- __Aside__: Because resizing takes time, it is better to create a list of the approximate size (in the built-in `List`) so that resizing does not need to happen often.
    - `List<int> list = new List<int>(100);` - it is better to specify an initial capacity - array of size 100 will be created in this case
```cs
// When we add the first item, a new array will be created of size 2 
// Add one more item
// Add 3rd item - no we have run out of space - it will create an array of size 4 (copy all the items)
// Add 4th item
// Add 5th item - create a new array of size 8 - copy over items from size 4 array to size 8 array
class CustomList
{
    private int[] arr;
    private int size = 0; // maintains how many actual items are present in the list

    public int Size
    {
        get => size;
    }

    public CustomList()
    {
        arr = new int[2];
    }

    public CustomList(int initialCapacity)
    {
        arr = new int[initialCapacity];
    }


    public void Add(int x)
    {
        if (size >= arr.Length)
        {
            Console.WriteLine($"Trying to add {x}");
            Console.WriteLine($"Resizing the list from {arr.Length} to {arr.Length * 2}");

            // create a new array of double the size
            var temp = new int[arr.Length * 2];

            // copy over the items
            for( int i = 0; i < size; ++i)
            {
                temp[i] = arr[i];
            }

            // since we are reassigning arr which was pointing earlier to the old array, eventually the old array is removed from memory
            arr = temp;
        }
            
        arr[size] = x;
        ++size;
    }

    public int RemoveAt(int idx)
    {
        if (idx < 0 || idx >= size)
        {
            throw new ArgumentException($"index {idx} is not a valid value");
        }

        // shift the items in the array one position to the left starting from index idx
        for (int i = idx; i < size - 1; ++i)
        {
            arr[i] = arr[i + 1];
        }

        var result = arr[size - 1];
        arr[size - 1] = 0;
        --size;

        return result;
    }

    public int Get(int idx)
    {
        if (idx < 0 || idx >= size)
        {
            throw new ArgumentException($"index {idx} is not a valid value");
        }

        return arr[idx];
    }
}
```
```cs
var list = new CustomList();

list.Add(1);
list.Add(2);
list.Add(3);
list.Add(4);
list.Add(5);

for (int i = 0; i < list.Size; ++i )
{
    Console.WriteLine(list.Get(i));
}
list.RemoveAt(2); // int 3 should be removed

for (int i = 0; i < list.Size; ++i)
{
    Console.WriteLine(list.Get(i));
}
```

### 18.2. Introduction to Generics
- A generic version of the above custom list
- Generics is applicable for class, struct, methods, interface etc. The example here is of a class.
- We need to mention generic parameter list along with class - `class CustomList<T>`. There can be multiple generic parameters in general (eg. `class SomeClass<T, U>` etc.)
- Note how we have substituted array item type `int` with the generic parameter `T`.
- Note how the default value for a generic type is specified using the `default` keyword.
```cs
class CustomList<T>
{
    private T[] arr;
    private int size = 0; // how many items present in the list

    public int Size
    {
        get => size;
    }

    public CustomList()
    {
        arr = new T[2];
    }

    public CustomList(int initialCapacity)
    {
        arr = new T[initialCapacity];
    }

    public void Add(T x)
    {
        if (size >= arr.Length)
        {
            Console.WriteLine($"Trying to add {x}");
            Console.WriteLine($"Resizing the list from {arr.Length} to {arr.Length * 2}");
            
            // create a new array of double the size
            var temp = new T[arr.Length * 2];

            // copy over the items
            for (int i = 0; i < size; ++i)
            {
                temp[i] = arr[i];
            }

            // since we are reassigning arr which was pointing earlier to the old array, eventually the old array is removed from memory
            arr = temp;
        }

        arr[size] = x;
        ++size;
    }

    public T RemoveAt(int idx)
    {
        if (idx < 0 || idx >= size)
        {
            throw new ArgumentException($"index {idx} is not a valid value");
        }

        // shift the items in the array one position to the left starting from index idx
        for (int i = idx; i < size - 1; ++i)
        {
            arr[i] = arr[i + 1];
        }

        var result = arr[size - 1];
        arr[size - 1] = default;
        --size;

        return result;
    }

    public T Get(int idx)
    {
        if (idx < 0 || idx >= size)
        {
            throw new ArgumentException($"index {idx} is not a valid value");
        }

        return arr[idx];
    }
}
```
```cs
var list = new CustomList<int>();

list.Add(1);
list.Add(2);
list.Add(3);
list.Add(4);
list.Add(5);

for (int i = 0; i < list.Size; ++i )
{
    Console.WriteLine(list.Get(i));
}

list.RemoveAt(2); // int 3 should be removed

for (int i = 0; i < list.Size; ++i)
{
    Console.WriteLine(list.Get(i));
}

var words = new CustomList<string>();

words.Add("John");
words.Add("Jane");
words.Add("Mark");
words.Add("Mary");
words.Add("David");

for (int i = 0; i < words.Size; ++i)
{
    Console.WriteLine(words.Get(i));
}
```
- Example of a generic function (applies to method of a class as well)
    - This function works with any IEnumerable<T> like array, string, list, set etc.
    - Since we only expect that the `items` argument can be iterated using `foreach` and make no other assumptions, this function accepts an `IEnumerable<T>`
    - We need to mention the generic type parameters with the name of the function / method - `printList<T>`
```cs
void printList<T>( IEnumerable<T> items )
{
    foreach (T item in items )
    {
        Console.WriteLine( item );
    }
}
```

### Generic constraints
- We can put restrictions on the generic type parameters.
    - Use `where` to do this
    - `INumber<T>` constraint is satisfied by number types like `int`, `float`, `double`, `decimal`
```cs
Tuple<T2, T1> SwapTupleItems<T1, T2>(Tuple<T1, T2> item)
    where T1 : INumber<T1>
    where T2 : INumber<T1>
{
    // even though T1 and T2 are constrained to INumber, the + operator cannot be directly applied between different generic types (T1 and T2).
    // In C#, generic constraints do not allow cross-type arithmetic operations unless explicitly handled.
    Console.WriteLine(Convert.ToDouble(item.Item1) + Convert.ToDouble(item.Item2));

    return new Tuple<T2, T1>(item.Item2, item.Item1);
}
```
```cs
SwapTupleItems<int, int>(new Tuple<int, int>(10, 20));
```

### 18.4. Generics exercises (solutions)
- Note how we are using the built-in Tuple for cities list
    - The built-in `Tuple` has generic variant which support upto 14 items!
    - The individual items within the Tuple are named `Item`, `Item2` etc.
```cs
public class CustomTuple<T, U>
{
	public T X;
	public U Y;

	public CustomTuple(T x, U y)
	{
		X = x;
		Y = y;
	}
}
```
```cs
CustomTuple<string, string> john = new CustomTuple<string, string>("John Doe", "Bengaluru");

var employees = new List<CustomTuple<string, string>>()
{
    john,
    new CustomTuple<string, string>("Jane Doe", "Bengaluru"),
    new CustomTuple<string, string>("Mark Smith", "Mumbai"),
};

// This example uses the built-in Tuple of C#
var cities = new List<(string, string, int)>
{
    ("Jaipur", "Rajasthan", 302001),
    ("Kolkata", "West Bengal", 700001),
    ("Lucknow", "Uttar Pradesh", 226001)
};

Console.WriteLine(cities.Item1);
Console.WriteLine(cities.Item2);
Console.WriteLine(cities.Item3);
```

## Sorting, Default sorting and custom sorting, Equality comparison, Hash code

### 19.1. `Sort()`, `IComparable<T>`, `IComparer<T>`
- `Sort()` works with List<T>. Sort mutates the list. It __DOES NOT__ work with `IEnumerable<T>` as simple iteration does not provide a means to mutate the enumerable.
- To sort a general `IEnumerable<T>` we can use LINQ's `OrderBy()` which does not mutate, but provides a sorted enumerable.
- int and string are comparable using general sorting order, and hence can be sorted
```cs
List<int> primes = new List<int> { 2, 7, 11, 17, 13, 5 };
primes.Sort(); // int has CompareTo() method
Console.WriteLine(string.Join(", ", primes));

List<string> names = new List<string> { "John", "Jane", "Mark", "Mary" };
names.Sort(); // string has CompareTo() method
Console.WriteLine(string.Join(", ", names));
```
- Implementing the interface `IComparable<T>` (by defining `int CompareTo(T)`) helps define the sorting order for class T
- This way helps set up the default sorting order for the type T
- `int CompareTo(T other)` should return
    - negative number if caller comes before `other` in sorted order
    - positive number if caller comes after `other` in sorted order
    - 0 if caller and other are to be treated as equal in sorted order (we do not care about the ordering of caller and `other`)
```cs
class Person : IComparable<Person>
{
    public string Name { get; init; }
    public int Age { get; init; }

    public int CompareTo(Person other)
    {
        // 32 < 28
        if( Age < other.Age )
        {
            return -1;
        }

        // 32 > 28
        if (Age > other.Age)
        {
            return 1;
        }

        return 0; // we do not care about the order of the 2 objects
    }

    public override string ToString()
    {
        return $"Name = {Name} | Age = {Age}";
    }
}
```
```cs
var john = new Person
{
    Name = "John",
    Age = 32
};

var jane = new Person
{
    Name = "Jane",
    Age = 28
};

// returns 1 (positive integer) to indicate that caller john comes after the argument jane
Console.WriteLine( john.CompareTo(jane) );

var persons = new List<Person>
{
    new Person
    {
        Name = "Mark",
        Age = 40
    },
    john,
    jane,
    new Person
    {
        Name = "Mary",
        Age = 38
    }
};
persons.Sort();
Console.WriteLine(string.Join(" ****** ", persons));
```
- `IComparer<Person>` is used to specify custom sorting order that overrides the default sorting order
- The `int Compare(T x, T y)` method of `IComparer<Person>` works similar to `int CompareTo(T other)` of `IComparable<T>`
    - you can imagine that `x` takes the place of the caller, and `y` takes the place of `other`
```cs
class PersonNameComparer : IComparer<Person>
{
    public int Compare(Person x, Person y)
    {
        return x.Name.CompareTo(y.Name);
    }
}
```
```cs
// returns 1
var comparer = new PersonNameComparer();
Console.WriteLine( comparer.Compare(john, jane) );

// custom sorting
persons.Sort(comparer);
Console.WriteLine(string.Join(" ****** ", persons));
```

### 19.2. Sorting exercises
- Modify the `CompareTo()` implementation so that if age is same, the person whose Name appears before in alphabetical order, comes first in sorted order of persons.
```cs
class Person : IComparable<Person>
{
    public string Name { get; init; }
    public int Age { get; init; }

    public int CompareTo(Person other)
    {
        // 32 < 28
        if( Age < other.Age )
        {
            return -1;
        }

        // 32 > 28
        if (Age > other.Age)
        {
            return 1;
        }

        return 0; // we do not care about the order of the 2 objects
    }

    public override string ToString()
    {
        return $"Name = {Name} | Age = {Age}";
    }
}
```
- Sort a list of names ("Firstname LastName") by the last name (alphabetical order)
```cs
// result should be { "John Doe", "Mary Evens", "Jane Smith", "Mark Taylor" };
List<string> names = new List<string> { "John Doe", "Jane Smith", "Mark Taylor", "Mary Evens" };
```
- Solution
```cs
class LastNameComparer : IComparer<string>
{
    public int Compare(string x, string y)
    {
        var partsX = x.Split(" "); // array of words { "John" "Doe" "Senior" }
        var lastNameX = partsX[^1]; // "Senior"

        var partsY = y.Split(" ");
        var lastNameY = partsY[^1];

        return lastNameX.CompareTo(lastNameY);
    }
}
```
```cs
List<string> names = new List<string> { "John Doe", "Jane Smith", "Mark Taylor", "Mary Evens" };

names.Sort(new LastNameComparer());

Console.WriteLine(string.Join(", ", names));
```

### 19.3. Equality comparison using `IEqualityComparer<T>`
- The `PersonComparer` class implements the `IEqualityComparer<Person>` interface, which defines two methods:  
    1. **`Equals`**: Compares two `Person` objects based on their `Name`, `Age`, and `State` properties.  
    2. **`GetHashCode`**: Returns a hash code for a `Person` object based on their `Age`.  

Let''s illustrate how equality checking works using `PersonComparer`:

---

#### Complete Code Example

```cs
using System;
using System.Collections.Generic;

public class PersonComparer : IEqualityComparer<Person>
{
    bool IEqualityComparer<Person>.Equals(Person x, Person y)
    {
        // Check if both objects are null or if one is null
        if (x == null && y == null) return true;
        if (x == null || y == null) return false;

        // Compare Name, Age, and State
        return x.Name == y.Name && x.Age == y.Age && x.State == y.State;
    }

    int IEqualityComparer<Person>.GetHashCode(Person obj)
    {
        // Return hash code based on Age (simplified for illustration)
        return HashCode.Combine(obj.Name, obj.Age, obj.State);
    }
}

public class Person
{
    public string Name { get; init; }
    public int Age { get; init; }
    public string State { get; init; }

    public override string ToString()
    {
        return $"Name = {Name} | Age = {Age} | State = {State}";
    }
}

class Program
{
    static void Main()
    {
        var person1 = new Person { Name = "Alice", Age = 30, State = "NY" };
        var person2 = new Person { Name = "Alice", Age = 30, State = "NY" };
        var person3 = new Person { Name = "Bob", Age = 25, State = "CA" };

        var comparer = new PersonComparer();

        Console.WriteLine(comparer.Equals(person1, person2)); // True (same Name, Age, and State)
        Console.WriteLine(comparer.Equals(person1, person3)); // False (different Name, Age, or State)

        var people = new HashSet<Person>(comparer);
        people.Add(person1);
        people.Add(person2); // Will not be added because it's considered equal to person1
        people.Add(person3);

        Console.WriteLine($"Total unique people: {people.Count}"); // Output: 2
    }
}
```

---

#### Output of the Program

```
True
False
Total unique people: 2
```

---

#### Explanation

1. **Equality Comparison**:
   - `comparer.Equals(person1, person2)` returns `true` because `person1` and `person2` have the same values for `Name`, `Age`, and `State`.
   - `comparer.Equals(person1, person3)` returns `false` because `person3` has different values for `Name`, `Age`, or `State`.

2. **Hash Code Calculation**:
   - The `GetHashCode` method uses generate a hash code for a `Person`.
   - It does so such that 2 `Person` objects that are equal (`Name`, `Age`, and `State`) will also have the same hash code. This is a requirement for the `GetHashCode` method.

3. **HashSet Behavior**:
   - A `HashSet` uses both `Equals` and `GetHashCode` to determine uniqueness.
   - Since `person1` and `person2` are considered equal by `comparer`, only one of them is added to the `HashSet`.

## 20. Delegates, Funcs, Actions and Lambda Expressions
- A `delegate` in C# is a type-safe function pointer. It represents a method signature and can hold a reference to any method with a compatible signature.
- Delegate helps us create a convenient type (eg. `FilterFunction`) for functions that have similar signature (similar argument and return type)
- `Func` is a generic delegate type representing functions that return a value
    - The last generic parameter type in a `Func` is the type of the returned value
- `Action` is a generic delegate type representing functions that do not return a value
- A __lambda expression__ is a concise way to represent an anonymous function (a function without a name).
- The syntax for a lambda expression is:
```cs
(input parameters) => expression or { statement block }
```
- Delegate types (Func, Action) and Lambda expressions are used in functional style of programming (where functions are passed as arguments to other functions and also returned from other functions), and often when working with LINQ queries.
```cs
bool IsEven(int x) => x % 2 == 0;
bool IsOdd(int x) => x % 2 == 1;
bool IsDivisibleBy3(int x) => x % 3 == 0;

void PrintSum( int x, int y)
{
    Console.WriteLine( x + y );
}

// returns a filtered list (in this case even numbers)
List<int> Filter( List<int> input, Func<int, bool> filteringFunction)
{
    List<int> output = new List<int>();

    foreach (var item in input)
    {
        //if( item % 2 == 0 )
        if(filteringFunction( item ))
        {
            output.Add(item);
        }
    }

    return output;
}
```
```cs
Func<int, bool> ev = IsEven;
Console.WriteLine(ev( 2 ));

// Action is for function that return void
Action<int, int> print = PrintSum;
print(12, 13);

List<int> inputList = new List<int> { 2, 5, 9, 16, 8 };

var outputList = Filter(inputList, ev);
Console.WriteLine(string.Join(", ", outputList));

var outputListOddNumbers = Filter(inputList, IsOdd);
Console.WriteLine(string.Join(", ", outputListOddNumbers));

// Use of lambda expressions
var outputListMultiplesOf3 = Filter(inputList, x => x % 3 == 0);
Console.WriteLine(string.Join(", ", outputListMultiplesOf3));
```
- Rewriting using `delegate` instead of `Func`. We do not need to mention the argument and return types each time when assigning filtering functions. This is similar to using type alias for a function type in TypeScript.
```cs
delegate bool FilterFunction(int x); // inside classes you can specify access modifier

// returns a filtered list (in this case even numbers)
List<int> Filter( List<int> input, FilterFunction filteringFunction)
{
    List<int> output = new List<int>();

    foreach (var item in input)
    {
        //if( item % 2 == 0 )
        if(filteringFunction( item ))
        {
            output.Add(item);
        }
    }

    return output;
}
```
```cs
FilterFunction ev = IsEven; // assigning to a delegate type
var outputList = Filter(inputList, ev); // implicitly assigned to the argument of delegate type
Console.WriteLine(string.Join(", ", outputList));

var outputListOddNumbers = Filter(inputList, IsOdd); // impilcitly assigned to the argument of delegate type
Console.WriteLine(string.Join(", ", outputListOddNumbers));

var outputListMultiplesOf3 = Filter(inputList, x => x % 3 == 0); // lambda expression implicitly assigned to the argument of delegate type
Console.WriteLine(string.Join(", ", outputListMultiplesOf3));
```
- __Aside__: Wherever list iteration is the only assumption, we can use an `IEnumerable<T>` in place of `List<T>`. This makes the code more general.
```cs
List<int> Filter( IEnumerable<int> input, FilterFunction filteringFunction)
{
    List<int> output = new List<int>();

    foreach (var item in input)
    {
        //if( item % 2 == 0 )
        if(filteringFunction( item ))
        {
            output.Add(item);
        }
    }

    return output;
}
```
```cs
// we can now pass any eneumerable like List, array etc.
var divisibleBy9 = Filter(new int[] { 2, 5, 9, 16, 8, 17, 18 }, x => x % 9 == 0);
Console.WriteLine(string.Join(", ", divisibleBy9));
```
- __EXERCISE__: Make `filteringFunction` a generic that accepts item of type `T`, and the `Filter` function as well. You can thus filter an IEnumerable<T> instead.

## 21. LINQ
- Language INtegrated Query (LINQ)
- LINQ methods work with any enumerables - string, array, list, set etc.
- When we work with database tables (using EntityFramework Core for example), we will be using LINQ methods
- LINQ methods simplify complex tasks by helping us solve them using small subtasks (each subtask solved using one of the LINQ methods)
    - eg. filtering a set of records, followed by sorting, followed by taking the top 10 results etc.

### 21.1. Motivation
- We have an enumerable (say a `List`) of words. We would like to find out if there is a word with all uppercase letters.
```cs
List<string> words = new List<string>
{
    "Hello",
    "World",
    "ABC"
};
```
- __Without using LINQ we could do this__
```cs
bool IsAnyWordAllUppercase( IEnumerable<string> words )
{
    foreach(var word in words)
    {
        bool isUpper = true;
        foreach(var letter in word)
        {
            if( !char.IsUpper(letter) )
            {
                isUpper = false;
                break;
            }
        }
        // we went through the letters, and the isUpper is still true, so the letters are all uppercase in this word
        if( isUpper )
        {
            return true;
        }
    }
    return false;
}
```
```cs
Console.WriteLine(IsAnyWordAllUppercase(words));
```
- __The same logic using LINQ's methods__
```cs
bool IsAnyWordAllUppercaseLinq(IEnumerable<string> words)
{
    return words.Any(
        word => word.All(
            letter => char.IsUpper(letter) == true
        )
    );
}
```
```cs
Console.WriteLine(IsAnyWordAllUppercaseLinq(words));
```

### 21.2. LINQ method calls return a query ("live list")
- Many LINQ methods (like `Where` return a query). When the underlying enumerable changes, the query results automatically change.
- __Aside__: The `Where` method is used for filtering - we will see many more LINQ methods.
- Notice how the `evenNumbers` enumerable gets updated automatically when the underlying enumerable (`List`) is updated.
- __Deferred execution__: The actual filtering happens when you enumerate the result, not when you call `Where`
```cs
List<int> numbers = new List<int> { 3, 6, 9, 7, 8, 4 };

// evenNumbers IEnumerable<int> that is returned, it is like a "live list".
// It will update when the underlying number list changes
// Think of the evenNumbers like an SQL query statement
var evenNumbers = numbers.Where(x => x % 2 == 0);

Console.WriteLine(string.Join(",", evenNumbers)); // { 6, 8, 4 }

numbers.Add(10);
numbers.Add(13);
numbers.Add(15);
numbers.Add(12);

Console.WriteLine(string.Join(",", evenNumbers)); // { 6, 8, 4, 10, 12 }
```

### 21.3. Chaining
- The chaining syntax (also called fluent syntax in some frameworks), helps simplify how we use the result of one method call as the input for the next, thus simplifying the way we solve a tasks using multiple subtasks in sequence.
- Here we filter using `Where`, followed by sort using `OrderBy`
```cs
var sortedListOfEvenNumbers = numbers.Where(x => x % 2 == 0).OrderBy(x => x);
Console.WriteLine(string.Join(", ", sortedListOfEvenNumbers));
```

### 21.4. Materializing the query result - `ToList()`, `ToArray()` etc.
- You can materialize the result into a concrete collection using methods like `ToList()` or `ToArray()` etc.
- Once materialized, the collection is not live!
```cs
// listEvenNumbers is not a query, but an actual list
var listEvenNumbers = evenNumbers.ToList();
Console.WriteLine(string.Join(", ", listEvenNumbers)); // { 6, 8, 4, 10, 12 }

numbers.Add(-16);
numbers.Add(17);
numbers.Add(19);
numbers.Add(-22);

Console.WriteLine(string.Join(", ", listEvenNumbers)); // { 6, 8, 4, 10, 12 }
```

### 21.5. LINQ Methods
- We use the `Person` and `PersonComparer` classes from section `19.3` here
```cs
var david = new Person
{
    Name = "David",
    Age = 60,
    State = "Telangana"
};

List<Person> persons = new List<Person>
{
    new Person
    {
        Name = "John",
        Age = 32,
        State = "Karnataka"
    },
    new Person
    {
        Name = "Jane",
        Age = 28,
        State = "Telangana"
    },
    new Person
    {
        Name = "Mark",
        Age = 40,
        State = "Madhya Pradesh"
    },
    new Person
    {
        Name = "Mary",
        Age = 20,
        State = "Karnataka"
    },
    david
};
```
```cs
// All
Console.WriteLine("All are voting age? " + persons.All(p => p.Age >= 18));

// Any
Console.WriteLine("Is there any senior citizen? " + persons.Any(p => p.Age >= 60));
Console.WriteLine("Is there any person at all (list is not empty)? " + persons.Any()); // without argument -> gives true is not empty
Console.WriteLine("Is there any person at all (list is not empty)? " + (new List<Person>()).Any()); // false -> empty list
Console.WriteLine(persons.Any( p => {
    Console.WriteLine(p.Name);
    return p.Age > 30 && p.State == "Telangana";
}));

// Contains
var numbers = new int[] { 2, 5, 7, 8 };
Console.WriteLine("Is number 7 in array? " + numbers.Contains(7));
Console.WriteLine("Is number 9 in array? " + numbers.Contains(9));
var maryInPersonsList = persons.Contains(new Person
{
    Name = "Mary",
    Age = 20,
    State = "Karnataka"
}, new PersonComparer());
Console.WriteLine("Is Mary in persons list ?" + maryInPersonsList); // no - different objects in list and passed to Contains
var davidInPersonsList = persons.Contains(david);
Console.WriteLine("Is David in persons list ?" + davidInPersonsList); // yes - same object in list and passed to Contains

// First and Last
var firstPersonFromTelangana = persons.First(x => x.State == "Telangana");
Console.WriteLine(firstPersonFromTelangana);
Console.WriteLine(persons.First());

// Explore Last()..

// Count()
Console.WriteLine(persons.Count());
Console.WriteLine(persons.Count(p => p.State == "Karnataka"));

// Distinct()
var distinctPersons = persons.Distinct();
Console.WriteLine(string.Join("   ---   ", distinctPersons));
var distinctPersons2 = persons.Distinct(new PersonComparer());
Console.WriteLine(string.Join("   ---   ", distinctPersons2));
var numbers2 = new int[] { 2, 3, 5, 2, 6, 7, 3, 2 };
Console.WriteLine(string.Join(", ", numbers2.Distinct()));

// OrderBy(), ThenBy()
var personsSortedByAge = persons.OrderBy(p => p.Age).ThenBy(p => p.Name);
Console.WriteLine(string.Join("    ---   ", personsSortedByAge));
Console.WriteLine();
Console.WriteLine(string.Join("    ---   ", persons));

// Where (Filter)
// left as exerise

// Average (eg. average age of persons)
// left as exercise
```

### 21.6. LINQ Exercises (solutions)
```cs
string FindShortestWord(List<string> words)
{
    if( words.Any(x => string.IsNullOrWhiteSpace(x)))
    {
        throw new Exception("some string was null or was empty or had only whitespaces");
    }

    return words.OrderBy(word => word.Length).First();
}
```
```cs
var words = new List<string> { "quick", /*null, "  ",*/ "brown", "fox", "jumped", "over", "the", "lazy", "dog" };

var firstShortestWord = FindShortestWord(words);

Console.WriteLine(firstShortestWord);
```
```cs
IEnumerable<DateTime> GetFridaysOfYear(int year, IEnumerable<DateTime> dates)
{
    // your code
    return dates.Where(d => d.Year == year && d.DayOfWeek == DayOfWeek.Friday);
}
```
```cs
var holidays = new List<DateTime>
{
    new DateTime(2025, 1, 14), // Sankranthi Tuesday
    new DateTime(2025, 1, 26), // Republic Day Sunday
    new DateTime(2025, 2, 26), // Maha Shivaratri February 26 Wednesday
    new DateTime(2025, 3, 14), // Holi    March 14    Friday
    new DateTime(2025, 3, 31), // Id-ul-Fitr  March 31    Monday
    new DateTime(2025, 4, 10), // Mahavir Jayanti April 10    Thursday
    new DateTime(2025, 4, 18), // Good Friday April 18    Friday
    new DateTime(2025, 5, 12), // Budha Purnima   May 12  Monday
    new DateTime(2025, 6, 7), // Id-ul-Zuha (Bakrid) June 7  Saturday
    new DateTime(2025, 7, 6), // Muharram    July 6  Sunday
    new DateTime(2025, 8, 15), // Independence Day    August 15   Friday
    new DateTime(2025,8, 16), // Janmashtami August 16   Saturday
    new DateTime(2025, 9, 5), // Milad-un-Nabi (Id-e-Milad)  September 5 Friday
    new DateTime(2025, 10, 2), // Mahatma Gandhi’s Birthday   October 2   Thursday
    new DateTime(2025, 10, 2), // Dussehra    October 2   Thursday
    new DateTime(2025, 10, 28), // Diwali (Deepavali)  October 20  Monday
    new DateTime(2025, 11, 5), // Guru Nanak’s Birthday   November 5  Wednesday
    new DateTime(2025, 12, 25) // Christmas Day   December 25 Thursday
};

var holidaysOnFridays2025 = GetFridaysOfYear(2025, holidays);

Console.WriteLine(string.Join(", ", holidaysOnFridays2025));
```

## 22. Collections

### 22.1. Inheritance hierarchy and overview of Collection in C#
In C#, the **`System.Collections`** namespace (and its generic counterpart **`System.Collections.Generic`**) provides a wide variety of collection types. These types are organized into an inheritance hierarchy where common functionality is shared through interfaces and base classes.

---

#### Main Interfaces

The inheritance hierarchy of collections revolves around the following key interfaces:

1. **`IEnumerable` (Non-generic)**:
   - The root interface for all non-generic collections.
   - Provides the ability to enumerate the elements in a collection using an enumerator (`IEnumerator`).

2. **`IEnumerable<T>` (Generic)**:
   - A generic version of `IEnumerable`, introduced in .NET 2.0.
   - Provides a strongly-typed enumerator (`IEnumerator<T>`) for iterating over a collection of type `T`.

3. **`ICollection` (Non-generic)**:
   - Extends `IEnumerable`.
   - Represents a collection of objects, providing basic operations like `Count` and `SyncRoot`.
   - Example: `ArrayList`, `Queue`, `Stack`.

4. **`ICollection<T>` (Generic)**:
   - Extends `IEnumerable<T>`.
   - Represents a strongly-typed collection of objects that can be enumerated, with additional operations like `Count` and `Add`.
   - Example: `List<T>`, `HashSet<T>`, `Queue<T>`.

5. **`IList` (Non-generic)**:
   - Extends `ICollection`.
   - Represents an ordered collection of objects that can be accessed by index.
   - Example: `ArrayList`.

6. **`IList<T>` (Generic)**:
   - Extends `ICollection<T>`.
   - Represents a strongly-typed list of objects with index-based access.
   - Example: `List<T>`.

7. **`IDictionary` (Non-generic)**:
   - Extends `ICollection`.
   - Represents a collection of key-value pairs.
   - Example: `Hashtable`.

8. **`IDictionary<TKey, TValue>` (Generic)**:
   - Extends `ICollection<KeyValuePair<TKey, TValue>>`.
   - Represents a strongly-typed collection of key-value pairs.
   - Example: `Dictionary<TKey, TValue>`.

---

#### Hierarchy Diagram

```
              IEnumerable                IEnumerable<T>
                    ↑                           ↑
              ICollection                ICollection<T>
                    ↑                           ↑
       ┌────────────┴────────────┐       ┌──────┴───────┐
      IList                   IDictionary       IList<T>      IDictionary<TKey, TValue>
       ↑                          ↑                 ↑                 ↑
  ArrayList                  Hashtable          List<T>         Dictionary<TKey, TValue>
```

---

#### Explanation with Examples

##### **1. `IEnumerable` and `IEnumerable<T>`**
These interfaces provide the base for all collections. They allow iteration over a collection using `foreach`.

```csharp
var numbers = new List<int> { 1, 2, 3, 4, 5 };

foreach (int number in numbers) // IEnumerable<T> allows iteration
{
    Console.WriteLine(number);
}
```

##### **2. `ICollection` and `ICollection<T>`**
These interfaces extend `IEnumerable` by adding methods like `Add`, `Remove`, and properties like `Count`.

```csharp
ICollection<int> collection = new List<int>();
collection.Add(10);
collection.Add(20);
Console.WriteLine(collection.Count); // Output: 2
```

##### **3. `IList` and `IList<T>`**
These interfaces add index-based access to the collection.

```csharp
IList<int> list = new List<int> { 1, 2, 3 };
list[1] = 5; // Modify element at index 1
Console.WriteLine(list[1]); // Output: 5
```

##### **4. `IDictionary` and `IDictionary<TKey, TValue>`**
These interfaces represent key-value pairs and allow retrieval by key.

```csharp
IDictionary<string, int> dictionary = new Dictionary<string, int>
{
    { "Alice", 30 },
    { "Bob", 25 }
};

Console.WriteLine(dictionary["Alice"]); // Output: 30
```

---

#### Concrete Collection Classes

1. **Non-Generic Collections (`System.Collections`)**:
   - `ArrayList`: A dynamically resizable array (non-generic).
   - `Queue`: A first-in, first-out (FIFO) collection.
   - `Stack`: A last-in, first-out (LIFO) collection.
   - `Hashtable`: A key-value pair collection using hash keys (non-generic).

2. **Generic Collections (`System.Collections.Generic`)**:
   - `List<T>`: A dynamically resizable, strongly-typed list.
   - `Dictionary<TKey, TValue>`: A key-value pair collection.
   - `Queue<T>`: A strongly-typed FIFO collection.
   - `Stack<T>`: A strongly-typed LIFO collection.
   - `HashSet<T>`: A collection of unique elements.

---

#### Summary of Key Differences

| **Feature**                | **Non-Generic Collections**         | **Generic Collections**                |
|----------------------------|-------------------------------------|---------------------------------------|
| **Type Safety**             | No                                 | Yes                                   |
| **Performance**             | Slower due to boxing/unboxing       | Faster due to type safety             |
| **Introduced In**           | .NET 1.0                           | .NET 2.0                              |
| **Common Types**            | `ArrayList`, `Hashtable`, `Queue`   | `List<T>`, `Dictionary<TKey, TValue>` |

---

#### Summary

1. The **root interface** for all collections in C# is **`IEnumerable`** (non-generic) or **`IEnumerable<T>`** (generic).
2. **`ICollection`** and **`ICollection<T>`** add methods for counting and basic collection operations.
3. **`IList`/`IList<T>`** add index-based access, while **`IDictionary`/`IDictionary<TKey, TValue>`** add key-value pair handling.
4. Generic collections provide **type safety** and **better performance**, while non-generic collections were primarily used in earlier versions of .NET.

Understanding the inheritance hierarchy of collections helps in selecting the appropriate collection type based on requirements such as ordering, indexing, or key-value storage.

## 22.2. How iterables work under-the-hood
- This is how `foreach()` works internally
- IEnumerable implementations implement the iterator design pattern
```cs
class List<T>: IEnumerable<T>, {}
```
```cs
interface IEnumerable<T> {
    IEnumerator<T> GetEnumerator(); // returns an enumerator object that enables iterating through the iterable
}

interface IEnumerator<T> {
    Current, // provides a reference to the current item in the iteration
    MoveNext(), // enables moving to the next item during the iteration process
    Reset() // move back to the first item to start iteration from the beginning
}
```
```cs
// using foreach
List<string> words = new List<string> { "quick", "brown", "fox" };
foreach (var item in words)
{
    Console.WriteLine(item);
}

// this is what happend under-the-hood
var enumerator = words.GetEnumerator();
while(enumerator.MoveNext())
{
    Console.WriteLine(enumerator.Current);
}
```

## 22.3. HashSet - Methods and use
- HashSet - used to store a collection of values without duplicates
    - If the `GetHashCode` method for the item returns the same code as an existing item in the set, it utilizes the `Equals()` method to confirm it is exists (or not).
- Hash code for used in storage and retrieval makes it efficient in terms of performance
```cs
using System;
using System.Collections.Generic;

public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }

    public override bool Equals(object obj)
    {
        if (obj is Person other)
        {
            return Name == other.Name && Age == other.Age;
        }
        return false;
    }

    public override int GetHashCode()
    {
        return HashCode.Combine(Name, Age);
    }
}

class Program
{
    static void Main()
    {
        var person1 = new Person { Name = "Alice", Age = 30 };
        var person2 = new Person { Name = "Alice", Age = 30 };
        var person3 = new Person { Name = "Bob", Age = 25 };

        var hashSet = new HashSet<Person>();
        hashSet.Add(person1);
        hashSet.Add(person2); // Duplicate, should not be added
        hashSet.Add(person3);

        Console.WriteLine($"HashSet count: {hashSet.Count}"); // Output: 2
    }
}
```
```cs
HashSet<string> shoppingSet = new HashSet<string>
{
    "apples",
    "milk",
    "eggs",
    "milk"
};

Console.WriteLine("Number of shoppingSet items = " + shoppingSet.Count());

shoppingSet.Add("bread");

Console.WriteLine("Number of shoppingSet items = " + shoppingSet.Count());

foreach (var item in shoppingSet)
{
    Console.WriteLine(item);
}

// alternative way to show all items - use `string.Join()` that accepts any enumerable
Console.WriteLine(string.Join(", ", shoppingSet));

shoppingSet.Remove("milk");

Console.WriteLine(string.Join(", ", shoppingSet));
```

## 22.4. Dictionary - Methods and use
- `Dictionary<TKey, TValue>` is used to store key-value pairs and look up the value based on the key
- Keys cannot have duplicates (values can have duplicates)
- If you attempt to add (using `Add()`) a key that already exists in the dictionary, an exception will be thrown
    - Before adding a key, you can check if it exists using the `ContainsKey()` method
- You can, however, update the value associated with an existing key without causing an error
```cs
Dictionary<string, string> dns = new Dictionary<string, string>
{
    ["www.google.com"] = "204.22.123.45",
    ["www.facebook.com"] = "188.22.123.45",
    ["www.medium.com"] = "224.22.123.45",
};

Console.WriteLine("IP Address of google is = " + dns["www.google.com"] );

// if key already exists, Add() fails 
// dns.Add("www.google.com", "205.22.123.45"); // exception

// updating vaue for an existing key
dns["www.google.com"] = "205.22.123.45"; // passes - no exception
Console.WriteLine("IP Address of google is = " + dns["www.google.com"]);

// iteration - Note the use of `item.Key` and `item.Value`
foreach (var item in dns)
{
    Console.WriteLine($"{item.Key} = {item.Value}" );
}
```
- __EXERCISE__: Explore Keys(), Values(), ContainsKey()