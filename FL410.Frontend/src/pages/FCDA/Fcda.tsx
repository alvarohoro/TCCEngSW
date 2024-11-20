import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import CampoForm, { ICampoForm } from "../../components/CampoForm";
import { useFCDA } from "../../api/hooks/useFCDA";


export default function Fcda() {
    const parametrosFCDA: ICampoForm = {
        campos: [
            { value: "", flexBasis: "basis-1/2", id: "Marcas", label: "1. Marcas de nacionalidade e matrícula:", text: { placeholder: "Ex.: PR-XXX" } },
            { value: "", flexBasis: "basis-1/2", id: "NumeroDA", label: "2. Nº da DA:", text: { placeholder: "75-08-01" } },
            { value: "", flexBasis: "basis-1/2", id: "Efetividade", label: "3. Efetiva a partir de:", text: { placeholder: "Ex.: 23/06/2021" } },
            { value: "", flexBasis: "basis-1/2", id: "Vencimento", label: "4. Vencimento (Data/h/ciclos):", text: { placeholder: "Ex.: 01/12/2026 ou 100h ou 10 ciclos" } },
            { value: "", flexBasis: "basis-1/2", id: "ProdutoAplicavel", label: "5. Produto:", select: { options: [{ valor: "", label: "Selecione uma opção..." }, { valor: "Aeronave", label: "Aeronave" }, { valor: "Motor", label: "Motor" }, { valor: "Hélice", label: "Hélice" }, { valor: "Equipamento", label: "Equipamento" }] } },
            { value: "", flexBasis: "basis-1/2", id: "TipoCumprimento", label: "6. Tipo de Cumprimento:", select: { options: [{ valor: "", label: "Selecione uma opção..." }, { valor: "AcaoFinal", label: "Ação Final" }, { valor: "Repetitiva", label: "Repetitiva" }, { valor: "Parcial", label: "Parcial" }] } },
            { value: "", flexBasis: "basis-1/2", id: "Aplicabilidade", label: "7. Aplicabilidade", radio: { options: [{ valor: "Aplicavel", label: "Aplicável" }, { valor: "NaoAplicavel", label: "Não aplicável" }] } },
            { value: "", flexBasis: "basis-1/2", id: "JustificativaNaoAplicabilidade", label: "8. Justificativa da não aplicabilidade:", text: { placeholder: "Ex.: Não aplicável ao S/N" } },
            { value: "", flexBasis: "basis-full", id: "InstrucaoReferencia", label: "9. Instrução de aeronavegabilidade de referência:", text: { placeholder: "Ex.: Manual XYZ." } },
            { value: "", flexBasis: "basis-full", id: "OutraReferencia", label: "10. Outro documento de referência:", text: { placeholder: "Ex.: Forma alternativa de cumprimento XYZ." } },
            { value: "", flexBasis: "basis-1/2", id: "Fabricante", label: "11.1. Fabricante", text: { placeholder: "Ex.: Textron" } },
            { value: "", flexBasis: "basis-1/2", id: "Modelo", label: "11.2. Modelo", text: { placeholder: "Ex.: Cessna 182" } },
            { value: "", flexBasis: "basis-1/3", id: "PartNumber", label: "11.3. Partnumber (P/N):", text: { placeholder: "Ex.: 1820000010246" } },
            { value: "", flexBasis: "basis-1/3", id: "SerialNumber", label: "11.4. Número de Série (S/N):", text: { placeholder: "Ex.: 460981234" } },
            { value: "", flexBasis: "basis-1/3", id: "VendorNumber", label: "11.5. Vendor Number (V/N):", text: { placeholder: "Ex.: C182A_532FNI" } },
            { value: "", flexBasis: "basis-1/3", id: "TimeSinceNew", label: "12.1 TSN:", text: { helper: "Time Since New", placeholder: "Ex.: 12345,6h" } },
            { value: "", flexBasis: "basis-1/3", id: "CyclesSinceNew", label: "12.2 CSN:", text: { helper: "Cycles Since New", placeholder: "Ex.: 187 ciclos" } },
            { value: "", flexBasis: "basis-1/3", id: "TimeSinceOverhaul", label: "12.3 TSO:", text: { helper: "Time Since Overhaul", placeholder: "Ex.: 145,3h" } },
            { value: "", flexBasis: "basis-1/3", id: "CyclesSinceOverhaul", label: "12.4 CSO:", text: { helper: "Cycles Since Overhaul", placeholder: "Ex.: 17 ciclos" } },
            { value: "", flexBasis: "basis-1/3", id: "TimeSinceLastInspection", label: "12.5 TSLI:", text: { helper: "Time Since Last Inspection", placeholder: "Ex.: 42,1h" } },
            { value: "", flexBasis: "basis-1/3", id: "CyclesSinceLastInspection", label: "12.6 CSLI:", text: { helper: "Cycles Since Last Inspection", placeholder: "Ex.: 7 ciclos" } },
            { value: "", flexBasis: "basis-1/2", id: "LocalCumprimento", label: "12.7 Local:", text: { placeholder: "Ex.: São Paulo, SP" } },
            { value: "", flexBasis: "basis-1/2", id: "DataCumprimento", label: "12.8 Data:", text: { placeholder: "Ex.: 23/06/2024" } },
            { value: "", flexBasis: "basis-full", id: "MetodoCumprimento", label: "13.1 Método de Cumprimento:", radio: { options: [{ valor: "Campo9", label: "Referência ao Campo 9" }, { valor: "MAC", label: "Método Alternativo de Cumprimento aprovado pela ANAC" }] } },
            { value: "", flexBasis: "basis-full", id: "DescricaoCumprimento", label: "13.2 Descrição de Cumprimento:", text: { placeholder: "Ex.: Descreva como foi cumprida a DA." } },
            { value: "", flexBasis: "basis-full", id: "Resultado", label: "14. Resultado:", text: { placeholder: "Ex.: Realizada a DA conforme previsto em XYZ..." } },
            { value: "", flexBasis: "basis-full", id: "Dificuldade", label: "15. Dificuldade a ser relatada:", text: { placeholder: "Ex.: Não foram encontradas dificuldades" } },
            { value: "", flexBasis: "basis-full", id: "NovoVencimento", label: "16. Novo vencimento (data/h/ciclos) em:", text: { placeholder: "Ex.: 01/12/2026 ou 100h ou 10 ciclos" } },
            { value: "", flexBasis: "basis-1/2", id: "Executante", label: "17. Executante:", text: { placeholder: "Ex.: Nome do executante" } },
            { value: "", flexBasis: "basis-1/2", id: "AssinaturaExecutante", label: "18. Assinatura:", text: { placeholder: "Ex.: Assinado por Fulano" } },
            { value: "", flexBasis: "basis-1/2", id: "Aprovador", label: "19. Aprovador para retorno ao serviço (APRS):", text: { placeholder: "Ex.: Nome do aprovador" } },
            { value: "", flexBasis: "basis-1/2", id: "AssinaturaAprovador", label: "20. Assinatura:", text: { placeholder: "Ex.: Assinado por Beltrano" } },
            { value: "", flexBasis: "basis-1/2", id: "Entidade", label: "21. Empresa, órgão ou entidade:", text: { placeholder: "Ex.: Empresa de Exemplo de Engenharia de Manutenção..." } },
            { value: "", flexBasis: "basis-1/2", id: "Local", label: "22. Local (cidade/estado):", text: { placeholder: "Ex.: São Paulo/SP" } }
        ]
    };


    const { handleSubmit, control, register } = useForm<ICampoForm>({
        defaultValues: {
            campos: parametrosFCDA.campos
        }
    });

    const FCDAMutation = useFCDA();

    const onSubmit: SubmitHandler<ICampoForm> = (data) => {
        const jsonParaEnvio: Record<string, string> = data.campos.reduce<Record<string, string>>((obj, item) => {
            obj[item.id] = item.value;
            return obj;
        }, {});

        FCDAMutation.mutate(jsonParaEnvio);

        console.log(jsonParaEnvio);
    }

    const { fields } = useFieldArray({
        name: "campos",
        control
    });


    return (
        <div className="m-6 p-4 rounded-lg container bg-slate-50 ">
            <h1 className="font-medium text-lg text-center">Nova Ficha de Controle de Diretriz de Aeronavegabilidade (FCDA)</h1>
            <div className="container mx-auto max-w-4xl">
                <form className="flex flex-row flex-wrap" onSubmit={handleSubmit(onSubmit)}>

                    {fields.map((field, index) => {
                        return (
                            <CampoForm id={field.id} label={field.label} flexBasis={field.flexBasis} text={field.text} select={field.select} radio={field.radio} key={field.id} value={field.value} register={register(`campos.${index}.value`)}></CampoForm>
                        )
                    })}

                    <button className="
                            border 
                            bg-blue-400 
                            text-white shadow 
                            hover:border-blue-300 
                            hover:bg-blue-600 
                            rounded-lg 
                            m-2 pt-2 pb-2 
                            basis-full"
                        type="submit">
                        Salvar
                    </button>

                </form>
            </div >

        </div >
    )
}