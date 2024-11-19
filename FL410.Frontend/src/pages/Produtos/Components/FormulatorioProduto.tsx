import { RegisterOptions, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import CampoForm, { ICampoForm } from "../../../components/CampoForm";
import { useProduto } from "../../../api/hooks/useProduto";
import { ProdutoViewModel } from "../../../types/ProdutoViewModel";
import { useEffect, useState } from "react";
import { AeronaveParcialViewModel } from "../../../types/AeronaveParcialViewModel";
import { useAeronave } from "../../../api/hooks/useAeronave";
import { useNotificacao } from "../../../hooks/useNotificacao";
// import { useAeronave } from "../../../api/hooks/useAeronave";
// import { useEffect, useMemo, useState } from "react";
// import { AeronaveParcialViewModel } from "../../../types/AeronaveParcialViewModel";

export default function FormularioProduto(
    {
        abrir,
        produto,
        aoFechar
    }: {
        abrir: boolean,
        produto?: ProdutoViewModel | null,
        aoFechar: () => void
    }) {

    const { aeronavesParciais } = useAeronave();


    const [camposProdutos, setCamposProdutos] = useState<ICampoForm | null>(null);

    useEffect(() => {

        setCamposProdutos({
            campos: [
                {
                    id: "id",
                    label: "",
                    flexBasis: "hidden",
                    text: { placeholder: "" },
                    value: "",
                    registerOptions: {}
                },
                {
                    id: "aeronaveId",
                    label: "Aeronave",
                    flexBasis: "basis-1/4",
                    select: { options: [{ valor: "", label: "Produto não instalado" }, { valor: "afede41f-ed5d-4fac-b39e-5800d0398f78", label: "PT-ABC" }, { valor: "PP-XYZ", label: "PP-XYZ" }, { valor: "PU-AAA", label: "PU-AAA" }] },
                    value: "",

                },
                {
                    id: "categoria",
                    label: "Categoria",
                    flexBasis: "basis-1/4",
                    select: { options: [{ valor: "", label: "Selecione uma categoria" }, { valor: "Motor", label: "Motor" }, { valor: "Hélice", label: "Hélice" }, { valor: "Equipamento", label: "Equipamento" }] },
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
                    id: "tipo",
                    label: "Tipo",
                    flexBasis: "basis-1/4",
                    text: { placeholder: "Insira o tipo" },
                    value: "",
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    id: "classificacao",
                    label: "Classificação",
                    flexBasis: "basis-1/4",
                    text: { placeholder: "Insira a classificação" },
                    value: "",
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    id: "numerosDeSerie",
                    label: "Números de Série",
                    flexBasis: "basis-1/4",
                    text: { placeholder: "Insira os números de série" },
                    value: "",
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    id: "designacaoComercial",
                    label: "Designação Comercial",
                    flexBasis: "basis-1/4",
                    text: { placeholder: "Insira a designação comercial" },
                    value: "",
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    id: "detentorCT",
                    label: "Detentor CT",
                    flexBasis: "basis-1/4",
                    text: { placeholder: "Insira o detentor CT" },
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
                    id: "produtoEstrangeiro",
                    label: "Produto Estrangeiro",
                    flexBasis: "basis-1/4",
                    text: { placeholder: "Insira se é produto estrangeiro" },
                    value: "",
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    id: "numeroTCDS",
                    label: "Número TCDS",
                    flexBasis: "basis-1/4",
                    text: { placeholder: "Insira o número TCDS" },
                    value: "",
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    id: "obsTCDS",
                    label: "Observações TCDS",
                    flexBasis: "basis-1/4",
                    text: { placeholder: "Insira as observações TCDS" },
                    value: "",
                    registerOptions: {}
                },
                {
                    id: "baseCertificacao",
                    label: "Base de Certificação",
                    flexBasis: "basis-1/4",
                    text: { placeholder: "Insira a base de certificação" },
                    value: "",
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    id: "observacoes",
                    label: "Observações",
                    flexBasis: "basis-1/4",
                    text: { placeholder: "Insira as observações" },
                    value: "",
                    registerOptions: {}
                },
                {
                    id: "categoriaCertificacao",
                    label: "Categoria de Certificação",
                    flexBasis: "basis-1/4",
                    text: { placeholder: "Insira a categoria de certificação" },
                    value: "",
                    registerOptions: {
                        required: { value: true, message: "Campo obrigatório" }
                    }
                },
                {
                    id: "variantes",
                    label: "Variantes",
                    flexBasis: "basis-1/4",
                    text: { placeholder: "Insira as variantes" },
                    value: "",
                    registerOptions: {}
                }
            ]
        });
    }, []);

    // Carrega as aeronaves parciais e adiciona a opção de "Produto não instalado" ao select
    const opcoesPadrao: AeronaveParcialViewModel[] = [{ id: "", matricula: "", fabricante: "Produto não instalado", modelo: "", defaultValue: true }];
    if (aeronavesParciais.isSuccess && camposProdutos) {
        const aeronaves = aeronavesParciais.data?.data as AeronaveParcialViewModel[];
        const aeronavesComOpcoesPadrao = ([...aeronaves, ...opcoesPadrao]);
        const aeronavesOptions = aeronavesComOpcoesPadrao.map((aeronave: AeronaveParcialViewModel) => ({
            label: `${aeronave.matricula ? `${aeronave.matricula} -` : ''} ${aeronave.fabricante ? `${aeronave.fabricante}` : ''} ${aeronave.modelo ? ` - ${aeronave.modelo}` : ''}`,
            valor: aeronave.matricula,
        }));

        // Atualiza o estado apenas se os valores realmente mudaram para evitar loops
        const novosCampos = camposProdutos.campos.map((campo, index) =>
            index === 1 ? { ...campo, select: { ...campo.select, options: aeronavesOptions } } : campo
        );


        // Verifica se os novos campos são diferentes dos antigos antes de atualizar
        if (JSON.stringify(novosCampos) !== JSON.stringify(camposProdutos.campos)) {
            setCamposProdutos({ ...camposProdutos, campos: novosCampos });
        }
    }

    // Carrega os dados do produto se o formulário é de edição
    if (produto && camposProdutos) {
        if (camposProdutos) {
            const camposComValoresParaEdicao = camposProdutos.campos.map(campo => {
                const valor = campo.id as keyof ProdutoViewModel;
                if (valor === "aeronaveId") {
                    return { ...campo, value: produto.aeronave?.matricula ? produto.aeronave.matricula : "" };
                }
                return valor ? { ...campo, value: produto[valor] as string } : campo;
            })
            if (JSON.stringify(camposComValoresParaEdicao) !== JSON.stringify(camposProdutos.campos)) {
                setCamposProdutos({ campos: camposComValoresParaEdicao });
            }
        }

    }

    const { post } = useProduto();
    const { handleSubmit, control, register, reset, formState: { errors }, } = useForm<ICampoForm>({
        defaultValues: {
            campos: camposProdutos?.campos
        },
    });

    useEffect(() => {
        if (camposProdutos) {
            reset({ campos: camposProdutos.campos });
        }
    }, [camposProdutos, reset]);

    const { fields } = useFieldArray({
        name: "campos",
        control
    });

    const { criarNotificacaoEmTela } = useNotificacao();
    const onSubmit: SubmitHandler<ICampoForm> = (data) => {
        const jsonParaEnvio: Record<string, string> = data.campos.reduce<Record<string, string>>((obj, item) => {
            obj[item.id] = item.value;
            return obj;
        }, {});
        post.mutate(jsonParaEnvio, {
            onSuccess: () => {
                criarNotificacaoEmTela({
                    tipo: "sucesso",
                    mensagem: `Produto ${jsonParaEnvio["modelo"]} ${produto ? 'editado' : 'cadastrado'} com sucesso!`,
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
            {abrir && produto?.modelo != "" && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-4 w-full max-w-7xl">
                        <div className="overflow-y-auto max-h-[90vh]">
                            <h2 className="text-lg font-semibold text-gray-700 mb-4"> {produto ? 'Editar' : 'Adicionar'} Produto</h2>
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

                                <div className="flex justify-end space-x-2 mt-4">
                                    <button
                                        type="button"
                                        onClick={()=>limparEstadosEDevolverFechar()}
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
