using System.Globalization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace FL410.API.ViewModels;
public partial class FcdaViewModel
{
    [JsonProperty("Marcas")]
    public required string Marcas { get; set; }

    [JsonProperty("NumeroDA")]
    public required string NumeroDa { get; set; }

    [JsonProperty("Efetividade")]
    public required string Efetividade { get; set; }

    [JsonProperty("Vencimento")]
    public required string Vencimento { get; set; }

    [JsonProperty("ProdutoAplicavel")]
    public required string ProdutoAplicavel { get; set; }

    [JsonProperty("TipoCumprimento")]
    public required string TipoCumprimento { get; set; }

    [JsonProperty("Aplicabilidade")]
    public required string Aplicabilidade { get; set; }

    [JsonProperty("JustificativaNaoAplicabilidade")]
    public required string JustificativaNaoAplicabilidade { get; set; }

    [JsonProperty("InstrucaoReferencia")]
    public required string InstrucaoReferencia { get; set; }

    [JsonProperty("OutraReferencia")]
    public required string OutraReferencia { get; set; }

    [JsonProperty("Fabricante")]
    public required string Fabricante { get; set; }

    [JsonProperty("Modelo")]
    public required string Modelo { get; set; }

    [JsonProperty("PartNumber")]
    public required string PartNumber { get; set; }

    [JsonProperty("SerialNumber")]
    public required string SerialNumber { get; set; }

    [JsonProperty("VendorNumber")]
    public required string VendorNumber { get; set; }

    [JsonProperty("TimeSinceNew")]
    public required string TimeSinceNew { get; set; }

    [JsonProperty("CyclesSinceNew")]
    public required string CyclesSinceNew { get; set; }

    [JsonProperty("TimeSinceOverhaul")]
    public required string TimeSinceOverhaul { get; set; }

    [JsonProperty("CyclesSinceOverhaul")]
    public required string CyclesSinceOverhaul { get; set; }

    [JsonProperty("TimeSinceLastInspection")]
    public required string TimeSinceLastInspection { get; set; }

    [JsonProperty("CyclesSinceLastInspection")]
    public required string CyclesSinceLastInspection { get; set; }

    [JsonProperty("LocalCumprimento")]
    public required string LocalCumprimento { get; set; }

    [JsonProperty("DataCumprimento")]
    public required string DataCumprimento { get; set; }

    [JsonProperty("MetodoCumprimento")]
    public required string MetodoCumprimento { get; set; }

    [JsonProperty("DescricaoCumprimento")]
    public required string DescricaoCumprimento { get; set; }

    [JsonProperty("Resultado")]
    public required string Resultado { get; set; }

    [JsonProperty("Dificuldade")]
    public required string Dificuldade { get; set; }

    [JsonProperty("NovoVencimento")]
    public required string NovoVencimento { get; set; }

    [JsonProperty("Executante")]
    public required string Executante { get; set; }

    [JsonProperty("AssinaturaExecutante")]
    public required string AssinaturaExecutante { get; set; }

    [JsonProperty("Aprovador")]
    public required string Aprovador { get; set; }

    [JsonProperty("AssinaturaAprovador")]
    public required string AssinaturaAprovador { get; set; }

    [JsonProperty("Entidade")]
    public required string Entidade { get; set; }

    [JsonProperty("Local")]
    public required string Local { get; set; }
}

public partial class FcdaViewModel
{
    public static FcdaViewModel FromJson(string json)
    {
        return JsonConvert.DeserializeObject<FcdaViewModel>(json, Converter.Settings)!;
    }
}

public static class Serialize
{
    public static string ToJson(this FcdaViewModel self) => JsonConvert.SerializeObject(self, Converter.Settings);
}

internal static class Converter
{
    public static readonly JsonSerializerSettings Settings = new JsonSerializerSettings
    {
        MetadataPropertyHandling = MetadataPropertyHandling.Ignore,
        DateParseHandling = DateParseHandling.None,
        Converters =
            {
                new IsoDateTimeConverter { DateTimeStyles = DateTimeStyles.AssumeUniversal }
            },
    };
}
