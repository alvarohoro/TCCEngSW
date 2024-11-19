using System;
using System.Text.Json;

namespace FL410.Services.Utils;


public static class Pickle
{
    // Função para salvar qualquer objeto em JSON
    public static void Salvar<T>(T obj, string fileName)
    {
        // Obtém o caminho do diretório do projeto
        string projectDirectory = Directory.GetCurrentDirectory();
        string filePath = Path.Combine(projectDirectory, fileName);
        
        string directoryPath = Path.GetDirectoryName(filePath);
        if (!Directory.Exists(directoryPath))
        {
            Directory.CreateDirectory(directoryPath);
        }
        // Serializa o objeto em JSON e salva no arquivo
        string jsonString = JsonSerializer.Serialize(obj);
        File.WriteAllText(filePath, jsonString);

        Console.WriteLine($"Objeto salvo em: {filePath}");
    }

    // Função para ler o arquivo e desserializar para o objeto original
    public static T Ler<T>(string fileName)
    {
        // Obtém o caminho do diretório do projeto
        string projectDirectory = Directory.GetCurrentDirectory();
        string filePath = Path.Combine(projectDirectory, fileName);

        // Verifica se o arquivo existe antes de tentar ler
        if (File.Exists(filePath))
        {
            // Lê o conteúdo do arquivo e desserializa o objeto
            string jsonString = File.ReadAllText(filePath);
            T obj = JsonSerializer.Deserialize<T>(jsonString);
            return obj;
        }
        else
        {
            throw new FileNotFoundException("Arquivo não encontrado.");
        }
    }
}
