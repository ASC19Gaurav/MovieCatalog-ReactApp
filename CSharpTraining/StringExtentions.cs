

namespace Domain;

public static class StringExtentions
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
