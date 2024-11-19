
public class HtmlKeyAttribute : Attribute
{
    public string Key { get; }

    public HtmlKeyAttribute(string key)
    {
        Key = key;
    }
}