
using System.Reflection;

public static class ModelFromDictionary
{
    public static void Populate<IType>(IType modelo, Dictionary<string, string> chaveValorDictionary)
    {
        var properties = typeof(IType).GetProperties();

        foreach (var property in properties)
        {
            var attribute = property.GetCustomAttribute<HtmlKeyAttribute>();
            if (attribute != null && chaveValorDictionary.TryGetValue(attribute.Key, out var value))
            {
                property.SetValue(modelo, value);
            }
        }
    }
}
