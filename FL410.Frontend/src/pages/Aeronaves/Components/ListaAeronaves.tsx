import { AeronaveViewModel } from "../../../types/AeronaveViewModel";
import { useReducer, useState } from "react";
import { NotificacaoType } from "../../../types/NotificacaoType";
import FormularioAeronave from "./FormularioAeronave";
import { useAeronave } from "../../../api/hooks/useAeronave";
import { useQueryClient } from "@tanstack/react-query";


type EstadoAnterior = { abrir: boolean, matricula: string, aeronave: AeronaveViewModel | null };
type EstadoFuturo = Partial<EstadoAnterior>;

export default function ListaAeronave(
    {
        aeronaves,
        criarNotificacaoEmTela,
    }: {
        aeronaves: AeronaveViewModel[],
        criarNotificacaoEmTela: (notificacao: NotificacaoType) => void,
    }) {
    const queryClient = useQueryClient();

    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState({ estado: false, matricula: "" });
    const [formEdicao, setFormEdicao] = useReducer((estadoAnterior: EstadoAnterior, estadoFuturo: EstadoFuturo) => ({ ...estadoAnterior, ...estadoFuturo }), { abrir: false, matricula: "", aeronave: null });


    const { exclude, getAeronavePorMatricula } = useAeronave(formEdicao.matricula);

    const excluirAeronave = (matricula: string) => {
        exclude.mutate(matricula, {
            onSuccess: () => {
                criarNotificacaoEmTela({ mensagem: "Aeronave excluída com sucesso!", tipo: "sucesso", tempo: 5000 });
                toggleModalDelete("");
            }
        });
    }
    const toggleModalDelete = (matricula: string) => setIsModalDeleteOpen({ estado: !isModalDeleteOpen.estado, matricula: matricula });

    const toogleModalEditar = async (matricula: string) => {
        setFormEdicao({ matricula: matricula });
        await queryClient.invalidateQueries({ queryKey: ["Aeronave"] });

        const { isSuccess, data } = await getAeronavePorMatricula.refetch();

        if (isSuccess && data?.data) {
            const aeronaveEmEdicao = data?.data as AeronaveViewModel;
            setFormEdicao({ aeronave: aeronaveEmEdicao });
            setFormEdicao({ abrir: true });
        }
    }

    return (
        <div className="flex justify-center">
            {formEdicao.aeronave && (
                <FormularioAeronave
                    configurarNotificacao={criarNotificacaoEmTela}
                    abrir={formEdicao.abrir}
                    aoFechar={() => { setFormEdicao({ abrir: false, aeronave: null, matricula:""  }) }}
                    aeronave={{...formEdicao.aeronave}}
                />
            )}
           
            <div className="w-full max-w-5xl">
                <table className="w-full bg-white text-gray-600 rounded-lg shadow-xl overflow-hidden mb-5">
                    <thead>
                        <tr className="bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                            <th className="px-6 py-3 rounded-tl-lg">Matrícula</th>
                            <th className="px-6 py-3">Fabricante</th>
                            <th className="px-6 py-3">Modelo</th>
                            <th className="px-6 py-3">Número de Série</th>
                            <th className="px-6 py-3 rounded-tr-lg">Ação</th>
                        </tr>
                    </thead>
                    <tbody>

                        {aeronaves.map((aeronave: AeronaveViewModel) => (
                            <tr key={aeronave.id} className="border-b border-gray-200 hover:bg-gray-50 transition-all ease-in-out delay-150">
                                <td className="px-6 py-4">{aeronave.matricula}</td>
                                <td className="px-6 py-4">{aeronave.fabricante}</td>
                                <td className="px-6 py-4">{aeronave.modelo}</td>
                                <td className="px-6 py-4">{aeronave.numeroSerie}</td>
                                <td className="px-6 py-4 space-x-2">
                                    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded text-sm" onClick={() => toogleModalEditar(aeronave.matricula)}>Editar</button>
                                    <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded text-sm" onClick={() => setIsModalDeleteOpen({ estado: true, matricula: aeronave.matricula })} >Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            {/* Modal Excluir */}
            {isModalDeleteOpen.estado && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-4 w-full max-w-7xl">
                        <div className="overflow-y-auto max-h-[90vh]">
                            <h2 className="text-lg font-semibold text-gray-700 mb-4">Excluir Aeronave</h2>
                            <div className="flex flex-row flex-wrap">
                                <p>Tem certeza que deseja excluir a aeronave {isModalDeleteOpen.matricula}?</p>
                            </div>
                            <div className="flex justify-end space-x-2 mt-4">
                                <button
                                    type="button"
                                    onClick={() => toggleModalDelete("")}
                                    className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded text-sm">
                                    Cancelar
                                </button>
                                <button
                                    type="button"
                                    onClick={() => excluirAeronave(isModalDeleteOpen.matricula)}
                                    disabled={exclude.isPending}
                                    className={`${exclude.isPending ? 'disabled bg-gray-500' : 'bg-red-500 hover:bg-red-600'} text-white font-semibold py-2 px-4 rounded text-sm`}>
                                    {exclude.isPending ? "Excluindo..." : "Excluir"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

