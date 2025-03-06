

using System.Net;
using System.Text.Json;

namespace Domain;

internal class FetchingdataFromBacked
{
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
    private static async Task<Todo[]> FetchTodos()
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
    public static async void Run()
    {
        try
        {
            var todos = await FetchTodos();

            Console.WriteLine("Number of todos = " + todos.Length);

            foreach (var todo in todos)
            {
                Console.WriteLine(todo);
            }
        }
        catch (HttpRequestException e) when (e.StatusCode == HttpStatusCode.BadRequest) // exception filter
        {
            Console.WriteLine("We must have sent some query parameter incorrectly etc.");
        }
        catch (HttpRequestException e) when (e.StatusCode == HttpStatusCode.Forbidden) // exception filter
        {
            Console.WriteLine("We don't have correct authorization");
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
    }
}
