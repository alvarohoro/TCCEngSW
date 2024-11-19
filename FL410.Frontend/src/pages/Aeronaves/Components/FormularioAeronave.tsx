import { RegisterOptions, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import CampoForm, { ICampoForm } from "../../../components/CampoForm";
import { useAeronave } from "../../../api/hooks/useAeronave";
import { NotificacaoType } from "../../../types/NotificacaoType";
import { AeronaveViewModel } from "../../../types/AeronaveViewModel";

export default function FormularioAeronave(
    {
        configurarNotificacao,
        abrir,
        aeronave,
        aoFechar
    }: {
        configurarNotificacao: (notificacao: NotificacaoType) => void,
        abrir: boolean,
        aeronave?: AeronaveViewModel | null,
        aoFechar: () => void
    }) {

    const camposAeronaves: ICampoForm = {
        campos: [
            {
                id: "id",
                label: "",
                flexBasis: "hidden",
                text: { placeholder: "" },
                value: "",
                registerOptions: {
                }
            },
            {
                id: "matricula",
                label: "Matrícula",
                flexBasis: "basis-1/4",
                text: { placeholder: "Insira a matrícula" },
                value: "",
                registerOptions: {
                    required: { value: true, message: "Campo obrigatório" },
                    pattern: { value: /^[A-Z]{2}-[A-Z]{3}$/, message: "Formato inválido" },
                    maxLength: { value: 6, message: "Máximo de 6 caracteres" }
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
                id: "anoFabricacao",
                label: "Ano de Fabricação",
                flexBasis: "basis-1/4",
                text: { placeholder: "Insira o ano de fabricação" },
                value: "",
                registerOptions: {
                    required: { value: true, message: "Campo obrigatório" },
                    pattern: { value: /^[0-9]{4}$/, message: "Formato inválido" },
                    maxLength: { value: 4, message: "Máximo de 4 caracteres" }
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
                id: "numeroSerie",
                label: "Número de Série",
                flexBasis: "basis-1/4",
                text: { placeholder: "Insira o número de série" },
                value: "",
                registerOptions: {
                    required: { value: true, message: "Campo obrigatório" }
                }
            },
            {
                id: "tipoICAO",
                label: "Tipo ICAO",
                flexBasis: "basis-1/4",
                text: { placeholder: "Insira o tipo ICAO" },
                value: "",
                registerOptions: {
                    required: { value: true, message: "Campo obrigatório" }
                }
            },
            {
                id: "categoriaHomologacao",
                label: "Categoria de Homologação",
                flexBasis: "basis-1/4",
                text: { placeholder: "Insira a categoria de homologação" },
                value: "",
                registerOptions: {
                    required: { value: true, message: "Campo obrigatório" }
                }
            },
            {
                id: "tipoHabilitacao",
                label: "Tipo de Habilitação",
                flexBasis: "basis-1/4",
                text: { placeholder: "Insira o tipo de habilitação" },
                value: "",
                registerOptions: {
                    required: { value: true, message: "Campo obrigatório" }
                }
            },
            {
                id: "classeAeronave",
                label: "Classe da Aeronave",
                flexBasis: "basis-1/4",
                text: { placeholder: "Insira a classe da aeronave" },
                value: "",
                registerOptions: {
                    required: { value: true, message: "Campo obrigatório" }
                }
            },
            {
                id: "pmd",
                label: "PMD",
                flexBasis: "basis-1/4",
                text: { placeholder: "Insira o PMD" },
                value: "",
                registerOptions: {
                    required: { value: true, message: "Campo obrigatório" }
                }
            },
            {
                id: "maxPAX",
                label: "Máximo de PAX",
                flexBasis: "basis-1/4",
                text: { placeholder: "Insira o máximo de PAX" },
                value: "",
                registerOptions: {
                    required: { value: true, message: "Campo obrigatório" }
                }
            },
            {
                id: "tipoVooAutorizado",
                label: "Tipo de Voo Autorizado",
                flexBasis: "basis-1/4",
                text: { placeholder: "Insira o tipo de voo autorizado" },
                value: "",
                registerOptions: {
                    required: { value: true, message: "Campo obrigatório" }
                }
            },
            {
                id: "tripMIN",
                label: "Tripulação Mínima",
                flexBasis: "basis-1/4",
                text: { placeholder: "Insira a tripulação mínima" },
                value: "",
                registerOptions: {
                    required: { value: true, message: "Campo obrigatório" }
                }
            },
            {
                id: "numeroAssentos",
                label: "Número de Assentos",
                flexBasis: "basis-1/4",
                text: { placeholder: "Insira o número de assentos" },
                value: "",
                registerOptions: {
                    required: { value: true, message: "Campo obrigatório" }
                }
            },
            {
                id: "categoriaRegistro",
                label: "Categoria de Registro",
                flexBasis: "basis-1/4",
                text: { placeholder: "Insira a categoria de registro" },
                value: "",
                registerOptions: {
                    required: { value: true, message: "Campo obrigatório" }
                }
            },
            {
                id: "numeroMatricula",
                label: "Número de Matrícula",
                flexBasis: "basis-1/4",
                text: { placeholder: "Insira o número de matrícula" },
                value: "",
                registerOptions: {
                    required: { value: true, message: "Campo obrigatório" }
                }
            },
            {
                id: "statusOperacao",
                label: "Status de Operação",
                flexBasis: "basis-1/4",
                text: { placeholder: "Insira o status de operação" },
                value: "",
                registerOptions: {
                    required: { value: true, message: "Campo obrigatório" }
                }
            },
            {
                id: "gravame",
                label: "Gravame",
                flexBasis: "basis-1/4",
                text: { placeholder: "Insira o gravame" },
                value: "",
                registerOptions: {
                    required: { value: true, message: "Campo obrigatório" }
                }
            },
            {
                id: "validadeCVA",
                label: "Validade do CVA",
                flexBasis: "basis-1/4",
                text: { placeholder: "Insira a validade do CVA" },
                value: "",
                registerOptions: {
                    required: { value: true, message: "Campo obrigatório" }
                }
            },
            {
                id: "situacaoAeronavegabilidade",
                label: "Situação de Aeronavegabilidade",
                flexBasis: "basis-1/4",
                text: { placeholder: "Insira a situação de aeronavegabilidade" },
                value: "",
                registerOptions: {
                    required: { value: true, message: "Campo obrigatório" }
                }
            }
        ]
    };

    camposAeronaves.campos.forEach(campo => {
        if (aeronave) {
            if (campo.id in aeronave) {
                campo.value = aeronave[campo.id as keyof typeof aeronave];
            }
        }
    });

    const camposFiltrados:ICampoForm = { ...camposAeronaves, campos: camposAeronaves.campos.filter(campo => !(campo.id === "id" && campo.value === "")) };
    // const camposFiltrados: ICampoForm = {
    //     ...camposAeronaves,
    //     campos: camposAeronaves.campos.filter(campo => campo.id !== "id" || campo.value !== "")
    // };
    console.log(camposFiltrados);


    const { post } = useAeronave();
    const { handleSubmit, control, register, formState: { errors }, } = useForm<ICampoForm>({
        defaultValues: {
            campos: camposFiltrados.campos
        },
    });
    const { fields } = useFieldArray({
        name: "campos",
        control
    });

    const onSubmit: SubmitHandler<ICampoForm> = (data) => {
        const jsonParaEnvio: Record<string, string> = data.campos.reduce<Record<string, string>>((obj, item) => {
            obj[item.id] = item.value;
            return obj;
        }, {});
        post.mutate(jsonParaEnvio, {
            onSuccess: () => {
                configurarNotificacao({
                    tipo: "sucesso",
                    mensagem: `Aeronave ${jsonParaEnvio["matricula"]} cadastrada com sucesso!`,
                    tempo: 3000
                });
                aoFechar();
            },
        });

        console.log(jsonParaEnvio);
    }

    return (
        <div>
            {abrir && aeronave?.matricula != "" && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-4 w-full max-w-7xl">
                        <div className="overflow-y-auto max-h-[90vh]">
                            <h2 className="text-lg font-semibold text-gray-700 mb-4">Adicionar Aeronave</h2>
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
                                        onClick={aoFechar}
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
