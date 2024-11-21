import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useNotificacao } from "../../hooks/useNotificacao";
import { useFCDA } from "../../api/hooks/useFCDA";
import { FCDAViewModel } from "../../types/FCDAViewModel";
import FormularioFCDA from "./Components/FormulatorioFCDA";

export default function FCDA() {
    const { useFCDAs, useDelete } = useFCDA();
    const FCDAs = useFCDAs();
    const queryClient = useQueryClient();
    const { criarNotificacaoEmTela } = useNotificacao();

    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [exibirExcluir, setExibirExcluir] = useState(false);
    const [fcdaEmEdicao, setFcdaEmEdicao] = useState<FCDAViewModel | undefined>(undefined);

    const toogleExibirFormulario = (abrir: boolean) => {
        setFcdaEmEdicao({} as FCDAViewModel);
        setExibirFormulario(abrir);
    }

    const toogleEditarFormulario = (idDa: string) => {
        if (idDa) {
            setExibirFormulario(true);
            const fcda = FCDAs.data?.data.find(fcda => fcda.id === idDa);
            setFcdaEmEdicao(fcda);
        } else {
            setExibirFormulario(false);
            setFcdaEmEdicao({} as FCDAViewModel);
        }
    }

    const toogleExcluir = (idFCDA: string) => {
        console.log('Clicou em excluir...')
        console.log(`idFCDA: ${idFCDA}`)
        if (idFCDA) {
            setExibirExcluir(true);
            const fcda = FCDAs.data?.data.find(fcda => fcda.id === idFCDA);
            setFcdaEmEdicao(fcda);
        } else {
            setExibirExcluir(false);
            setFcdaEmEdicao({} as FCDAViewModel);
        }
    }



    const excluir = useDelete();
    const excluirFcda = (id: string) => {
        excluir.mutate(id, {
            onSuccess: () => {
                criarNotificacaoEmTela({
                    tipo: "sucesso", mensagem: `FCDA excluída com sucesso`,
                    tempo: 3000
                });
                toogleExcluir("");

            }
        });
    }

    useEffect(() => {
        queryClient.invalidateQueries({ queryKey: ["FCDAs"] });
    }, [queryClient])

    

    return (
        <div className="min-h-[calc(100vh-10rem)] m-5">
            <h1 className="bg-gray-200 rounded-t-3xl py-4 px-6 text-gray-700 font-semibold text-xl">Fichas de Cumprimento de Diretrizes de Aeronavegabilidade</h1>
            <div className="bg-gray-100 min-h-[calc(100vh-10rem)] rounded-b-3xl">
                <br />

                <FormularioFCDA
                    abrir={exibirFormulario}
                    fcda={fcdaEmEdicao}
                    aoFechar={() => toogleExibirFormulario(false)}
                />


                {/* Modal Excluir */}
                {exibirExcluir && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg p-4 w-full max-w-7xl">
                            <div className="overflow-y-auto max-h-[90vh]">
                                <h2 className="text-lg font-semibold text-gray-700 mb-4">Excluir Aeronave</h2>
                                <div className="flex flex-row flex-wrap">
                                    <p>Tem certeza que deseja excluir a FCDA {fcdaEmEdicao?.id}?</p>
                                </div>
                                <div className="flex justify-end space-x-2 mt-4">
                                    <button
                                        type="button"
                                        onClick={() => toogleExcluir("")}
                                        className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded text-sm">
                                        Cancelar
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => excluirFcda(fcdaEmEdicao?.id || "")}
                                        disabled={excluir.isPending}
                                        className={`${excluir.isPending ? 'disabled bg-gray-500' : 'bg-red-500 hover:bg-red-600'} text-white font-semibold py-2 px-4 rounded text-sm`}>
                                        {excluir.isPending ? "Excluindo..." : "Excluir"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex justify-center">
                    <div className="w-full max-w-7xl">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-xl font-semibold text-gray-700">Lista de Fichas de Cumprimento de Diretrizes de Aeronavegabilidade (FCDA)</h2>
                            <button
                                onClick={() => toogleExibirFormulario(true)}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded text-sm">
                                Adicionar
                            </button>
                        </div>
                        {/* <ListaProduto produtos={produtos} criarNotificacaoEmTela={configurarNotificacao} /> */}
                        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                            {FCDAs.isLoading && (
                                <p className="text-gray-600">Carregando...</p>
                            )}
                            {FCDAs.isError && (
                                <p className="text-red-600">Ocorreu um erro ao carregar as DAs</p>
                            )}
                            {FCDAs.isSuccess && FCDAs.data?.data && (
                                <div className="overflow-x-auto">

                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead>
                                            <tr className="bg-gray-200 text-left">
                                                <th className="px-4 py-2 font-medium text-gray-700">Matrícula</th>
                                                <th className="px-4 py-2 font-medium text-gray-700">Fabricante</th>
                                                <th className="px-4 py-2 font-medium text-gray-700">Modelo</th>
                                                <th className="px-4 py-2 font-medium text-gray-700">DA</th>
                                                <th className="px-4 py-2 font-medium text-gray-700">Produto</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {FCDAs.data?.data.map((fcda, index) => (
                                                <tr
                                                    key={index}

                                                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                                                        } hover:bg-gray-50`}
                                                >
                                                    <td className="px-4 py-2 text-gray-800">{fcda.aeronave?.matricula}</td>
                                                    <td className="px-4 py-2 text-gray-800">{fcda.aeronave?.fabricante}</td>
                                                    <td className="px-4 py-2 text-gray-800">{fcda.aeronave?.modelo}</td>
                                                    <td className="px-4 py-2 text-gray-800">{fcda.da?.numeroDiretriz}</td>

                                                    <td className="px-4 py-2 text-gray-800">
                                                        <button
                                                            className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-200 mr-2"
                                                            onClick={() => toogleEditarFormulario(fcda.id)}
                                                        >
                                                            Editar
                                                        </button>
                                                        <button
                                                            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
                                                            onClick={() => toogleExcluir(fcda.id)}
                                                        >
                                                            Excluir
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>


                    </div>
                </div>
            </div>
        </div>




    );
}

