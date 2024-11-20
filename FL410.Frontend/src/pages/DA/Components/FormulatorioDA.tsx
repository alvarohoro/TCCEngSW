import { RegisterOptions, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import CampoForm, { ICampoForm } from "../../../components/CampoForm";
import { useEffect, useState } from "react";
// import { AeronaveParcialViewModel } from "../../../types/AeronaveParcialViewModel";
// import { useAeronave } from "../../../api/hooks/useAeronave";
import { useNotificacao } from "../../../hooks/useNotificacao";
// import { DAViewModel } from "../../../types/DAViewModel";
import { useDA } from "../../../api/hooks/useDA";
import { IDA } from "../../../types/IDA";
// import { useAeronave } from "../../../api/hooks/useAeronave";
// import { useEffect, useMemo, useState } from "react";
// import { AeronaveParcialViewModel } from "../../../types/AeronaveParcialViewModel";

export default function FormularioDA(
    {
        abrir,
        da,
        aoFechar
    }: {
        abrir: boolean,
        da?: IDA | undefined,
        aoFechar: () => void
    }) {

    // const { aeronavesParciais } = useAeronave();


    const [camposDAs, setCamposDAs] = useState<ICampoForm | null>(null);

    useEffect(() => {
        setCamposDAs({
            campos: [
                {
                    id: "id",
                    label: "ID",
                    flexBasis: "hidden",
                    text: { placeholder: "Insira o ID" },
                    value: ""
                },
                {
                    id: "numeroEmenda",
                    label: "Número da Emenda",
                    flexBasis: "basis-1/4",
                    text: { placeholder: "Insira o número da emenda" },
                    value: "",
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" },
                        pattern: {
                            value: /^[0-9]+$/,
                            message: 'Insirna um número',
                        },
                    }
                },
                {
                    id: "situacao",
                    label: "Situação",
                    flexBasis: "basis-1/4",
                    text: { placeholder: "Insira a situação" },
                    value: "",
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    id: "produto",
                    label: "Produto",
                    flexBasis: "basis-1/4",
                    text: { placeholder: "Insira o produto" },
                    value: "",
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    id: "efetividade",
                    label: "Efetividade",
                    flexBasis: "basis-1/4",
                    text: { placeholder: "Insira a efetividade" },
                    value: "",
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    id: "lingua",
                    label: "Língua",
                    flexBasis: "basis-1/4",
                    text: { placeholder: "Insira a língua" },
                    value: "",
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    id: "revogou",
                    label: "Revogou",
                    flexBasis: "basis-1/4",
                    text: { placeholder: "Revogou (Sim ou Não)" },
                    value: "",
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    id: "documentos",
                    label: "Documentos",
                    flexBasis: "basis-1/4",
                    text: { placeholder: "Insira os documentos" },
                    value: "",
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    id: "sistema",
                    label: "Sistema",
                    flexBasis: "basis-1/4",
                    text: { placeholder: "Insira o sistema" },
                    value: "",
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    id: "fabricante",
                    label: "Fabricante",
                    flexBasis: "basis-1/4",
                    text: { placeholder: "Insira o fabricante" },
                    value: "",
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    id: "modelo",
                    label: "Modelo",
                    flexBasis: "basis-1/4",
                    text: { placeholder: "Insira o modelo" },
                    value: "",
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    id: "numeroDiretriz",
                    label: "Número da Diretriz",
                    flexBasis: "basis-1/4",
                    text: { placeholder: "Insira o número da diretriz" },
                    value: "",
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    id: "produtoId",
                    label: "ID do Produto",
                    flexBasis: "hidden",
                    text: { placeholder: "Insira o ID do produto" },
                    value: ""
                }
            ]
        });
    }, []);

    // Carrega as aeronaves parciais e adiciona a opção de "DA não instalado" ao select
    // const opcoesPadrao: AeronaveParcialViewModel[] = [{ id: "", matricula: "", fabricante: "DA não instalado", modelo: "", defaultValue: true }];
    // if (aeronavesParciais.isSuccess && camposDAs) {
    //     const aeronaves = aeronavesParciais.data?.data as AeronaveParcialViewModel[];
    //     const aeronavesComOpcoesPadrao = ([...aeronaves, ...opcoesPadrao]);
    //     const aeronavesOptions = aeronavesComOpcoesPadrao.map((aeronave: AeronaveParcialViewModel) => ({
    //         label: `${aeronave.matricula ? `${aeronave.matricula} -` : ''} ${aeronave.fabricante ? `${aeronave.fabricante}` : ''} ${aeronave.modelo ? ` - ${aeronave.modelo}` : ''}`,
    //         valor: aeronave.matricula,
    //     }));

    //     // Atualiza o estado apenas se os valores realmente mudaram para evitar loops
    //     const novosCampos = camposDAs.campos.map((campo, index) =>
    //         index === 1 ? { ...campo, select: { ...campo.select, options: aeronavesOptions } } : campo
    //     );


    //     // Verifica se os novos campos são diferentes dos antigos antes de atualizar
    //     if (JSON.stringify(novosCampos) !== JSON.stringify(camposDAs.campos)) {
    //         setCamposDAs({ ...camposDAs, campos: novosCampos });
    //     }
    // }

    // Carrega os dados da DA se o formulário é de edição
    if (da && camposDAs) {
        if (camposDAs) {
            const camposComValoresParaEdicao = camposDAs.campos.map(campo => {
                const valor = campo.id as keyof IDA;
                // if (valor === "aeronaveId") {
                //     return { ...campo, value: da.aeronave?.matricula ? da.aeronave.matricula : "" };
                // }
                return valor ? { ...campo, value: da[valor] as string } : campo;
            })
            if (JSON.stringify(camposComValoresParaEdicao) !== JSON.stringify(camposDAs.campos)) {
                setCamposDAs({ campos: camposComValoresParaEdicao });
            }
        }

    }

    const { usePost } = useDA();
    const post = usePost();
    const { handleSubmit, control, register, reset, formState: { errors }, } = useForm<ICampoForm>({
        defaultValues: {
            campos: camposDAs?.campos
        },
    });

    useEffect(() => {
        if (camposDAs) {
            reset({ campos: camposDAs.campos });
        }
    }, [camposDAs, reset]);

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
                    mensagem: `DA ${jsonParaEnvio["modelo"]} ${da?.id ? 'editada' : 'cadastrada'} com sucesso!`,
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
            {abrir && da?.modelo != "" && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-4 w-full max-w-7xl">
                        <div className="overflow-y-auto max-h-[90vh]">
                            <h2 className="text-lg font-semibold text-gray-700 mb-4"> {da ? 'Editar' : 'Adicionar'} DA</h2>
                            <form className="flex flex-row flex-wrap" onSubmit={handleSubmit(onSubmit)} >
                                {fields.map((field, index) => {
                                    // console.log(field);
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