using System.Text;
using FL410.Business.Models.Documentos;
using FL410.Services.Utils;
using HtmlAgilityPack;
using Microsoft.AspNetCore.Mvc;

namespace FL410.Services.ANAC;

public static class ServicosDA
{

    public static async Task<List<Fabricante>> ObterFabricantes()
    {
        Encoding.RegisterProvider(CodePagesEncodingProvider.Instance); //Necessário para o charset Windows-1252 que é o padrão da ANAC

        using (var client = new HttpClient())
        {
            var fabricantes = new List<Fabricante>();

            for (char letra = 'A'; letra <= 'Z'; letra++)
            {
                Console.WriteLine($"Letra {letra}");

                var html = "";
                try
                {
                    html = Pickle.Ler<string>($"fabricantes_{letra}.html");
                }
                catch
                {
                    var url = $"https://sistemas.anac.gov.br/certificacao/DA/DA_Prod.asp?Letr={letra}";
                    Console.WriteLine($"Consutando {url}");

                    HttpResponseMessage response = await client.GetAsync(url);
                    response.EnsureSuccessStatusCode();

                    // Obter os bytes crus do conteúdo HTML
                    byte[] contentBytes = await response.Content.ReadAsByteArrayAsync();

                    // Forçar o encoding para Windows-1252
                    var encoding = Encoding.GetEncoding("Windows-1252");
                    var htmlString = encoding.GetString(contentBytes);

                    Pickle.Salvar(htmlString, $"fabricantes_{letra}.html");
                    continue;
                }

                var htmlDocument = new HtmlDocument();
                htmlDocument.LoadHtml(html);

                var tabelaFabricantes = htmlDocument.DocumentNode.Descendants("table")
                    .Where(node => node.GetAttributeValue("class", "")
                        .Equals("Tabela2"))
                    .ToList();

                if (tabelaFabricantes.Count() > 0)
                {
                    var linhas = tabelaFabricantes[0].Descendants("tr").ToList();
                    foreach (var linha in linhas)
                    {
                        var fabricante = new Fabricante();
                        var colunas = linha.Descendants("td").ToList();
                        if (colunas.Count > 0)
                        {
                            var link = colunas[0].Descendants("a").FirstOrDefault();

                            if (link != null)
                            {
                                var razaoSocial = link.InnerText;
                                var href = link.GetAttributeValue("href", string.Empty);
                                var tipoFabricante = href.Contains(".asp") ? href.Split(".asp")[0] : "";
                                var OrgCodi = href.Contains("OrgCodi=") ? href.Split("OrgCodi=")[1] : "";

                                fabricante.RazaoSocial = razaoSocial;
                                fabricante.TipoFabricante = tipoFabricante;
                                fabricante.OrgCodi = OrgCodi;
                                fabricante.Uri = href;

                            }
                            var fantasia = colunas[1].Descendants("font").FirstOrDefault();
                            if (fantasia != null)
                            {
                                var fantasiaText = fantasia.InnerText;
                                fantasiaText = fantasiaText.Replace("&nbsp;", "");
                                fabricante.Fantasia = fantasiaText;
                            }
                            fabricantes.Add(fabricante);
                        }
                    }
                }
            }
            return fabricantes;
        }
    }



    public static async Task<List<Produto>> ObterESalvarProdutos()
    {
        Encoding.RegisterProvider(CodePagesEncodingProvider.Instance); //Necessário para o charset Windows-1252 que é o padrão da ANAC

        using (var client = new HttpClient())
        {
            var fabricantes = new List<Fabricante>();

            for (int i = 0; i < 10000; i++)
            {
                var iString = i.ToString().PadLeft(7, '0');
                Console.WriteLine($"Produto {iString}");

                var html = "";
                var hoje = DateTime.Now.ToString("yyyy_MM_dd");

                try
                {
                    html = Pickle.Ler<string>($"./Execucoes/ObterProdutos/{hoje}/produto_{iString}.html");
                }
                catch
                {
                    var url = $"https://sistemas.anac.gov.br/certificacao/Produtos/ProdutoDetail.asp?ProdCodi={iString}";
                    Console.WriteLine($"Consutando {url}");
                    int maxAttemps = 5;
                    int currentAttempt = 1;
                    while (currentAttempt <= maxAttemps)
                    {
                        try
                        {
                            HttpResponseMessage response = await client.GetAsync(url);
                            response.EnsureSuccessStatusCode();

                            // Obter os bytes crus do conteúdo HTML
                            byte[] contentBytes = await response.Content.ReadAsByteArrayAsync();

                            // Forçar o encoding para Windows-1252
                            var encoding = Encoding.GetEncoding("Windows-1252");
                            // var encoding = Encoding.GetEncoding("UTF-8");
                            var htmlString = encoding.GetString(contentBytes);
                            Pickle.Salvar(htmlString, $"./Execucoes/ObterProdutos/{hoje}/produto_{iString}.html");
                            currentAttempt = 6;
                        }
                        catch
                        {
                            currentAttempt++;
                        }
                    }



                    continue;
                }

                var htmlDocument = new HtmlDocument();
                htmlDocument.LoadHtml(html);

                var tabelaFabricantes = htmlDocument.DocumentNode.Descendants("table")
                    .Where(node => node.GetAttributeValue("class", "")
                        .Equals("Tabela2"))
                    .ToList();

                if (tabelaFabricantes.Count() > 0)
                {
                    var linhas = tabelaFabricantes[0].Descendants("tr").ToList();
                    foreach (var linha in linhas)
                    {
                        var fabricante = new Fabricante();
                        var colunas = linha.Descendants("td").ToList();
                        if (colunas.Count > 0)
                        {
                            var link = colunas[0].Descendants("a").FirstOrDefault();

                            if (link != null)
                            {
                                var razaoSocial = link.InnerText;
                                var href = link.GetAttributeValue("href", string.Empty);
                                var tipoFabricante = href.Contains(".asp") ? href.Split(".asp")[0] : "";
                                var OrgCodi = href.Contains("OrgCodi=") ? href.Split("OrgCodi=")[1] : "";

                                fabricante.RazaoSocial = razaoSocial;
                                fabricante.TipoFabricante = tipoFabricante;
                                fabricante.OrgCodi = OrgCodi;
                                fabricante.Uri = href;

                            }
                            var fantasia = colunas[1].Descendants("font").FirstOrDefault();
                            if (fantasia != null)
                            {
                                var fantasiaText = fantasia.InnerText;
                                fantasiaText = fantasiaText.Replace("&nbsp;", "");
                                fabricante.Fantasia = fantasiaText;
                            }
                            fabricantes.Add(fabricante);
                        }
                    }
                }
            }
            return new List<Produto>();
        }
    }

    public static List<Produto> ProcessarProdutosSalvos()
    {
        Encoding.RegisterProvider(CodePagesEncodingProvider.Instance); //Necessário para o charset Windows-1252 que é o padrão da ANAC

        using (var client = new HttpClient())
        {
            var produtos = new List<Produto>();

            for (int i = 1; i < 10000; i++)
            {
                var iString = i.ToString().PadLeft(7, '0');
                Console.WriteLine($"Produto {iString}");

                var html = "";
                //var hoje = DateTime.Now.ToString("yyyy_MM_dd");
                var hoje = "2024_11_03";
                try
                {
                    html = Pickle.Ler<string>($"./Execucoes/ObterProdutos/{hoje}/produto_{iString}.html");
                }
                catch
                {
                    Console.WriteLine($"Arquivo não encontrado");
                    continue;
                }


                // var htmlDocument = new HtmlDocument();
                // htmlDocument.LoadHtml(html);
                // var htmlProduto = htmlDocument.DocumentNode.SelectNodes("/html/body/center/table/tr[3]/td[2]/center");
                // var htmlTables = htmlProduto[0].SelectNodes("table");
                // // var modelo = htmlTables[0].SelectNodes("tr/td/font[2]").FirstOrDefault().InnerText;
                // // var classificacao = htmlTables[1].SelectNodes("tr/td/table/tr[2]/td[3]/font").FirstOrDefault().InnerText;
                // // De maneira geral o XPATH vem com tbody que não tem aqui. Remover os tbody...
                // var detentorCT = htmlTables[1].SelectNodes("tr/td/table[3]/tr[2]/td[4]/a/font/b").FirstOrDefault().InnerText;

                // var html2 = htmlProduto;

                var doc = new HtmlDocument();
                doc.LoadHtml(html);

                // Dicionário para armazenar as chaves e valores
                var chaveValorDictionary = new Dictionary<string, string>();

                // Seleciona todos os nós <tr> que contêm a estrutura chave: valor
                var nodes = doc.DocumentNode.SelectNodes("//tr[td/font/b[contains(text(), ':')]]");
                // var nodes = doc.DocumentNode.SelectNodes("//td[contains(., ':')]/following-sibling::td[1]");

                if (nodes != null)
                {
                    foreach (var node in nodes)
                    {
                        var nodeText = node.InnerText;
                        var nodeHtml = node.InnerHtml;

                        var contagemDoisPontos = nodeText.Count(l => l == ':');
                        if (contagemDoisPontos > 1)
                        {
                            var divisaoDoisPontos = nodeHtml.Split(":&nbsp;");
                            var abc = divisaoDoisPontos;

                        }

                        if (nodeText.Contains(":"))
                        {
                            var chave = nodeText.Split(":")[0].Trim().Replace("&nbsp;", "").Replace("\n", "").Replace("\r", "").Replace("\t", "").Replace("  ", "").Trim();
                            var valor = nodeText.Split(":")[1].Trim().Replace("&nbsp;", "").Replace("\n", "").Replace("\r", "").Replace("\t", "").Replace("  ", "").Trim();

                            chaveValorDictionary[chave] = valor;
                        }
                    }

                    // Exibe as chaves e valores extraídos
                    foreach (var item in chaveValorDictionary)
                    {
                        Console.WriteLine($"Chave: {item.Key}, Valor: {item.Value}");
                    }
                }
                else
                {
                    Console.WriteLine("Nenhum nó encontrado");
                }
                var modelo = new ModeloAeronautico();
                ModelFromDictionary.Populate(modelo, chaveValorDictionary);
                var modelo2 = modelo;

            }
            return produtos;

        }
    }
}


