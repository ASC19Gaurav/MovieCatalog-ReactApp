//Implement the FindShortestWord method, which finds the shortest words in a collection of strings.
//If more than one word has the same minimal length, the first one on order should be returned.
//For example: For words {"aaa", "b", "c", "dd"},the result shall be "b" because
//it is the shortest (only 1 letter) and is before another word with the same length ("c").
//For an empty collection, an exception should be thrown.



//using System.Linq;


namespace Domain
{
    public  class LinqExcercise
    {
        public static int FindShortestWord(List<string> words)
        {
            if (words == null || words.Count == 0)
            {
                throw new ArgumentException("The collection cannot be empty.");
            }

            
           
            //var res = words.OrderBy(word => word.Length).First();
            var resp =words.Min(word => word.Length);
            // var res = (from word in words orderby word.Length select word).First();
            return resp;
        }
        public static void Run()
        {
            List<string> words = new List<string> { "aaa", "b", "c", "dd" };
            int shortestWord = FindShortestWord(words);
            Console.WriteLine($"Shortest word: {shortestWord}");  // Output: "b"

        }
    }
   
}
