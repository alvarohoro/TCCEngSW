import { RegisterOptions, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import CampoForm, { ICampoForm } from "../../../components/CampoForm";
import { useEffect, useState } from "react";
// import { AeronaveParcialViewModel } from "../../../types/AeronaveParcialViewModel";
// import { useAeronave } from "../../../api/hooks/useAeronave";
import { useNotificacao } from "../../../hooks/useNotificacao";
// import { DAViewModel } from "../../../types/DAViewModel";
import { FCDAViewModel } from "../../../types/FCDAViewModel";
import { useFCDA } from "../../../api/hooks/useFCDA";
import { AeronaveParcialViewModel } from "../../../types/AeronaveParcialViewModel";
import { useAeronave } from "../../../api/hooks/useAeronave";
// import { useAeronave } from "../../../api/hooks/useAeronave";
// import { useEffect, useMemo, useState } from "react";
// import { AeronaveParcialViewModel } from "../../../types/AeronaveParcialViewModel";

export default function FormularioFCDA(
    {
        abrir,
        fcda,
        aoFechar
    }: {
        abrir: boolean,
        fcda?: FCDAViewModel | undefined,
        aoFechar: () => void
    }) {

    const { aeronavesParciais } = useAeronave();


    const [camposFCDAs, setCamposFCDAs] = useState<ICampoForm | null>(null);

    useEffect(() => {
        setCamposFCDAs({
            campos: [
                {
                    value: "",
                    flexBasis: "hidden",
                    id: "id",
                    label: "",
                    text: { placeholder: "" },
                    registerOptions: {
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-1/2",
                    id: "marcas",
                    label: "1. Marcas de nacionalidade e matrícula:",
                    select: { options:[{ valor: "", label: "Aguarde, carregando aeronaves..." }] },
                    // text: { placeholder: "Ex.: PR-XXX" },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-1/2",
                    id: "numeroDA",
                    label: "2. Nº da DA:",
                    text: { placeholder: "75-08-01" },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-1/2",
                    id: "efetividade",
                    label: "3. Efetiva a partir de:",
                    text: { placeholder: "Ex.: 23/06/2021" },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-1/2",
                    id: "vencimento",
                    label: "4. Vencimento (Data/h/ciclos):",
                    text: { placeholder: "Ex.: 01/12/2026 ou 100h ou 10 ciclos" },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-1/2",
                    id: "produtoAplicavel",
                    label: "5. Produto:",
                    select: {
                        options: [
                            { valor: "", label: "Selecione uma opção..." },
                            { valor: "Aeronave", label: "Aeronave" },
                            { valor: "Motor", label: "Motor" },
                            { valor: "Hélice", label: "Hélice" },
                            { valor: "Equipamento", label: "Equipamento" }
                        ]
                    },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-1/2",
                    id: "tipoCumprimento",
                    label: "6. Tipo de Cumprimento:",
                    select: {
                        options: [
                            { valor: "", label: "Selecione uma opção..." },
                            { valor: "AcaoFinal", label: "Ação Final" },
                            { valor: "Repetitiva", label: "Repetitiva" },
                            { valor: "Parcial", label: "Parcial" }
                        ]
                    },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-1/2",
                    id: "aplicabilidade",
                    label: "7. Aplicabilidade",
                    radio: {
                        options: [
                            { valor: "Aplicavel", label: "Aplicável" },
                            { valor: "NaoAplicavel", label: "Não aplicável" }
                        ]
                    },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-1/2",
                    id: "justificativaNaoAplicabilidade",
                    label: "8. Justificativa da não aplicabilidade:",
                    text: { placeholder: "Ex.: Não aplicável ao S/N" },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-full",
                    id: "instrucaoReferencia",
                    label: "9. Instrução de aeronavegabilidade de referência:",
                    text: { placeholder: "Ex.: Manual XYZ." },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-full",
                    id: "outraReferencia",
                    label: "10. Outro documento de referência:",
                    text: { placeholder: "Ex.: Forma alternativa de cumprimento XYZ." },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-1/2",
                    id: "fabricante",
                    label: "11.1. Fabricante",
                    text: { placeholder: "Ex.: Textron" },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-1/2",
                    id: "modelo",
                    label: "11.2. Modelo",
                    text: { placeholder: "Ex.: Cessna 182" },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-1/3",
                    id: "partNumber",
                    label: "11.3. Partnumber (P/N):",
                    text: { placeholder: "Ex.: 1820000010246" },
                    registerOptions: {
                        // required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-1/3",
                    id: "serialNumber",
                    label: "11.4. Número de Série (S/N):",
                    text: { placeholder: "Ex.: 460981234" },
                    registerOptions: {
                        // required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-1/3",
                    id: "vendorNumber",
                    label: "11.5. Vendor Number (V/N):",
                    text: { placeholder: "Ex.: C182A_532FNI" },
                    registerOptions: {
                        // required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-1/3",
                    id: "timeSinceNew",
                    label: "12.1 TSN:",
                    text: { helper: "Time Since New", placeholder: "Ex.: 12345,6h" },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-1/3",
                    id: "cyclesSinceNew",
                    label: "12.2 CSN:",
                    text: { helper: "Cycles Since New", placeholder: "Ex.: 187 ciclos" },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-1/3",
                    id: "timeSinceOverhaul",
                    label: "12.3 TSO:",
                    text: { helper: "Time Since Overhaul", placeholder: "Ex.: 145,3h" },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-1/3",
                    id: "cyclesSinceOverhaul",
                    label: "12.4 CSO:",
                    text: { helper: "Cycles Since Overhaul", placeholder: "Ex.: 17 ciclos" },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-1/3",
                    id: "timeSinceLastInspection",
                    label: "12.5 TSLI:",
                    text: { helper: "Time Since Last Inspection", placeholder: "Ex.: 42,1h" },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-1/3",
                    id: "cyclesSinceLastInspection",
                    label: "12.6 CSLI:",
                    text: { helper: "Cycles Since Last Inspection", placeholder: "Ex.: 7 ciclos" },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-1/2",
                    id: "localCumprimento",
                    label: "12.7 Local:",
                    text: { placeholder: "Ex.: São Paulo, SP" },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-1/2",
                    id: "dataCumprimento",
                    label: "12.8 Data:",
                    text: { placeholder: "Ex.: 23/06/2024" },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-full",
                    id: "metodoCumprimento",
                    label: "13.1 Método de Cumprimento:",
                    radio: {
                        options: [
                            { valor: "Campo9", label: "Referência ao Campo 9" },
                            { valor: "MAC", label: "Método Alternativo de Cumprimento aprovado pela ANAC" }
                        ]
                    },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-full",
                    id: "descricaoCumprimento",
                    label: "13.2 Descrição de Cumprimento:",
                    text: { placeholder: "Ex.: Descreva como foi cumprida a DA." },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-full",
                    id: "resultado",
                    label: "14. Resultado:",
                    text: { placeholder: "Ex.: Realizada a DA conforme previsto em XYZ..." },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-full",
                    id: "dificuldade",
                    label: "15. Dificuldade a ser relatada:",
                    text: { placeholder: "Ex.: Não foram encontradas dificuldades" },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-full",
                    id: "novoVencimento",
                    label: "16. Novo vencimento (data/h/ciclos) em:",
                    text: { placeholder: "Ex.: 01/12/2026 ou 100h ou 10 ciclos" },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-1/2",
                    id: "executante",
                    label: "17. Executante:",
                    text: { placeholder: "Ex.: Nome do executante" },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-1/2",
                    id: "assinaturaExecutante",
                    label: "18. Assinatura:",
                    text: { placeholder: "Ex.: Assinado por Fulano" },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-1/2",
                    id: "aprovador",
                    label: "19. Aprovador para retorno ao serviço (APRS):",
                    text: { placeholder: "Ex.: Nome do aprovador" },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-1/2",
                    id: "assinaturaAprovador",
                    label: "20. Assinatura:",
                    text: { placeholder: "Ex.: Assinado por Beltrano" },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-1/2",
                    id: "entidade",
                    label: "21. Empresa, órgão ou entidade:",
                    text: { placeholder: "Ex.: Empresa de Exemplo de Engenharia de Manutenção..." },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    value: "",
                    flexBasis: "basis-1/2",
                    id: "local",
                    label: "22. Local (cidade/estado):",
                    text: { placeholder: "Ex.: São Paulo/SP" },
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                }
            ]
        });
    }, []);

    // Carrega as aeronaves parciais e adiciona a opção de "DA não instalado" ao select
    const opcoesPadrao: AeronaveParcialViewModel[] = [{ id: "", matricula: "", fabricante: "Produto não instalado", modelo: "", defaultValue: true }];
    if (aeronavesParciais.isSuccess && camposFCDAs) {
        const aeronaves = aeronavesParciais.data?.data as AeronaveParcialViewModel[];
        const aeronavesComOpcoesPadrao = ([...aeronaves, ...opcoesPadrao]);
        const aeronavesOptions = aeronavesComOpcoesPadrao.map((aeronave: AeronaveParcialViewModel) => ({
            label: `${aeronave.matricula ? `${aeronave.matricula} -` : ''} ${aeronave.fabricante ? `${aeronave.fabricante}` : ''} ${aeronave.modelo ? ` - ${aeronave.modelo}` : ''}`,
            valor: aeronave.matricula,
        }));

        // Atualiza o estado apenas se os valores realmente mudaram para evitar loops
        const novosCampos = camposFCDAs.campos.map((campo, index) =>
            index === 1 ? { ...campo, select: { ...campo.select, options: aeronavesOptions } } : campo
        );

        // Verifica se os novos campos são diferentes dos antigos antes de atualizar
        if (JSON.stringify(novosCampos) !== JSON.stringify(camposFCDAs.campos)) {
            setCamposFCDAs({ ...camposFCDAs, campos: novosCampos });
        }
    }

    // Carrega os dados da DA se o formulário é de edição
    if (fcda && camposFCDAs) {
        if (camposFCDAs) {
            console.log('fcda:')
            console.log(fcda);
            const camposComValoresParaEdicao = camposFCDAs.campos.map(campo => {
                const valor = campo.id as keyof FCDAViewModel;
                // console.log(`Valor ${valor}`)
                if (valor === "marcas") return { ...campo, value: fcda.aeronave?.matricula ? fcda.aeronave.matricula : "" };
                if (valor === "numeroDA") return { ...campo, value: fcda.da?.numeroDiretriz ? fcda.da.numeroDiretriz : "" };
                if (valor === "fabricante") return { ...campo, value: fcda.aeronave?.fabricante ? fcda.aeronave.fabricante : "" };
                if (valor === "modelo") return { ...campo, value: fcda.aeronave?.modelo ? fcda.aeronave.modelo : "" };
                if (valor === "partNumber") return { ...campo, value: fcda.produto?.numerosDeSerie ? fcda.produto.numerosDeSerie : "" };
                if (valor === "serialNumber") return { ...campo, value: fcda.aeronave?.numeroSerie ? fcda.aeronave.numeroSerie : "" };

                console.log('FCDA');
                console.log(fcda[valor]);
                return valor ? { ...campo, value: fcda[valor] as string } : campo;
            })
            if (JSON.stringify(camposComValoresParaEdicao) !== JSON.stringify(camposFCDAs.campos)) {
                setCamposFCDAs({ campos: camposComValoresParaEdicao });
            }
        }

    }

    const { usePost } = useFCDA();
    const post = usePost();
    const { handleSubmit, control, register, reset, formState: { errors }, } = useForm<ICampoForm>({
        defaultValues: {
            campos: camposFCDAs?.campos
        },
    });

    useEffect(() => {
        if (camposFCDAs) {
            reset({ campos: camposFCDAs.campos });
        }
    }, [camposFCDAs, reset]);

    const { fields } = useFieldArray({
        name: "campos",
        control
    });

    const { criarNotificacaoEmTela } = useNotificacao();
    const onSubmit: SubmitHandler<ICampoForm> = (data) => {
        console.log("OnSubmit...");
        const jsonParaEnvio: Record<string, string> = data.campos.reduce<Record<string, string>>((obj, item) => {
            obj[item.id] = item.value;
            return obj;
        }, {});
        console.log(jsonParaEnvio);
        post.mutate(jsonParaEnvio, {
            onSuccess: () => {
                criarNotificacaoEmTela({
                    tipo: "sucesso",
                    mensagem: `DA ${jsonParaEnvio["modelo"]} ${fcda?.id ? 'editada' : 'cadastrada'} com sucesso!`,
                    tempo: 3000
                });
                aoFechar();
            },
        });

        console.log(jsonParaEnvio);
    }

    const limparEstadosEDevolverFechar = () => {
        reset();
        aoFechar();
    }


    return (
        <div>
            {abrir && fcda && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-4 w-full max-w-7xl">
                        <div className="overflow-y-auto max-h-[90vh]">
                            <h2 className="text-lg font-semibold text-gray-700 mb-4"> {fcda.id ? 'Editar' : 'Adicionar'} FCDA</h2>
                            <form className="flex flex-row flex-wrap" onSubmit={handleSubmit(onSubmit)} >
                                {fields.map((field, index) => {
                                    return (
                                        <CampoForm key={index + "_" + field.id}
                                            id={field.id}
                                            label={field.label}
                                            flexBasis={field.flexBasis}
                                            text={field.text}
                                            select={field.select}
                                            radio={field.radio}
                                            value={field.value}
                                            register={register(`campos.${index}.value`, field.registerOptions as RegisterOptions<ICampoForm, `campos.${number}.value`>)}
                                            erros={errors.campos && errors.campos[index] && errors.campos[index].value?.message}
                                        />
                                    );
                                })}

                                <div className="flex basis-full justify-end space-x-2 mt-4">
                                    <button
                                        type="button"
                                        onClick={() => limparEstadosEDevolverFechar()}
                                        className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded text-sm">
                                        Cancelar
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={post.isPending}
                                        className={` ${post.isPending ? 'disabled bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'}  text-white font-semibold py-2 px-4 rounded text-sm`}>
                                        {post.isPending ? "Salvando..." : "Salvar"}
                                    </button>
                                    {post.isError && (
                                        <p className="text-red-600 font-bold self-center">Erro: {String(post.error.response?.data)}</p>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}