import { useEffect, useState } from "react";
import { useDA } from "../api/hooks/useDA";
import FormularioDA from "./DA/Components/FormulatorioDA";
import { IDA } from "../types/IDA";
import { useQueryClient } from "@tanstack/react-query";
import { useNotificacao } from "../hooks/useNotificacao";

export default function DA() {
    const { useDAs, useDelete } = useDA();
    const DAs = useDAs();
    const queryClient = useQueryClient();
    const {criarNotificacaoEmTela} = useNotificacao();

    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [exibirExcluir, setExibirExcluir] = useState(false);
    const [daEmEdicao, setDaEmEdicao] = useState<IDA | undefined>(undefined);

    const toogleExibirFormulario = (abrir: boolean) => {
        setDaEmEdicao({} as IDA);
        setExibirFormulario(abrir);
    }

    const toogleEditarFormulario = (idDa: string) => {
        if (idDa) {
            setExibirFormulario(true);
            const da = DAs.data?.data.find(da => da.id === idDa);
            setDaEmEdicao(da);
        } else {
            setExibirFormulario(false);
            setDaEmEdicao({} as IDA);
        }
    }

    const toogleExcluir = (idDa: string) => {
        if (idDa) {
            setExibirExcluir(true);
            const da = DAs.data?.data.find(da => da.id === idDa);
            setDaEmEdicao(da);
        } else {
            setExibirExcluir(false);
            setDaEmEdicao({} as IDA);
        }
    }



    const excluir = useDelete();
    const excluirAeronave = (id: string) => {
        excluir.mutate(id, {
            onSuccess: () => {
                criarNotificacaoEmTela({
                    tipo: "sucesso", mensagem: `DA ${DAs.data?.data.find(da => da.id === id)?.numeroDiretriz} excluída com sucesso`,
                    tempo: 3000
                });
                toogleExcluir("");
                
            }
        });
    }

    useEffect(()=>{
        queryClient.invalidateQueries({ queryKey: ["DAs"] });
    },[queryClient, daEmEdicao])


    return (


        <div className="min-h-[calc(100vh-10rem)] m-5">
            <h1 className="bg-gray-200 rounded-t-3xl py-4 px-6 text-gray-700 font-semibold text-xl">Diretrizes de Aeronavegabilidade</h1>
            <div className="bg-gray-100 min-h-[calc(100vh-10rem)] rounded-b-3xl">
                <br />

                <FormularioDA
                    abrir={exibirFormulario}
                    da={daEmEdicao}
                    aoFechar={() => toogleExibirFormulario(false)}
                />


            {/* Modal Excluir */}
            {exibirExcluir && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-4 w-full max-w-7xl">
                        <div className="overflow-y-auto max-h-[90vh]">
                            <h2 className="text-lg font-semibold text-gray-700 mb-4">Excluir Aeronave</h2>
                            <div className="flex flex-row flex-wrap">
                                <p>Tem certeza que deseja excluir a DA {daEmEdicao?.numeroDiretriz}?</p>
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
                                    onClick={() => excluirAeronave(daEmEdicao?.id || "")}
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
                            <h2 className="text-xl font-semibold text-gray-700">Lista de Diretrizes de Aeronavegabilidade (DA)</h2>
                            <button
                                onClick={() => toogleExibirFormulario(true)}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded text-sm">
                                Adicionar
                            </button>
                        </div>
                        {/* <ListaProduto produtos={produtos} criarNotificacaoEmTela={configurarNotificacao} /> */}
                        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                            {DAs.isLoading && (
                                <p className="text-gray-600">Carregando...</p>
                            )}
                            {DAs.isError && (
                                <p className="text-red-600">Ocorreu um erro ao carregar as DAs</p>
                            )}
                            {DAs.isSuccess && (
                                <div className="overflow-x-auto">

                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead>
                                            <tr className="bg-gray-200 text-left">
                                                <th className="px-4 py-2 font-medium text-gray-700">Fabricante</th>
                                                <th className="px-4 py-2 font-medium text-gray-700">Modelo</th>
                                                <th className="px-4 py-2 font-medium text-gray-700">Produto</th>

                                                {/* <th className="px-4 py-2 font-medium text-gray-700">Número Emenda</th> */}
                                                <th className="px-4 py-2 font-medium text-gray-700">Situação</th>
                                                <th className="px-4 py-2 font-medium text-gray-700">Efetividade</th>
                                                {/* <th className="px-4 py-2 font-medium text-gray-700">Língua</th> */}
                                                {/* <th className="px-4 py-2 font-medium text-gray-700">Revogou</th> */}
                                                {/* <th className="px-4 py-2 font-medium text-gray-700">Documentos</th> */}
                                                <th className="px-4 py-2 font-medium text-gray-700">Sistema</th>
                                                <th className="px-4 py-2 font-medium text-gray-700">Número Diretriz</th>
                                                <th className="px-4 py-2 font-medium text-gray-700">Ações</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {DAs.data?.data.map((da, index) => (
                                                <tr
                                                    key={da.id}
                                                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                                                        } hover:bg-gray-50`}
                                                >
                                                    <td className="px-4 py-2 text-gray-800">{da.fabricante}</td>
                                                    <td className="px-4 py-2 text-gray-800">{da.modelo}</td>
                                                    <td className="px-4 py-2 text-gray-800">{da.produto}</td>

                                                    {/* <td className="px-4 py-2 text-gray-800">{da.numeroEmenda}</td> */}
                                                    <td className="px-4 py-2 text-gray-800">{da.situacao}</td>
                                                    <td className="px-4 py-2 text-gray-800">{da.efetividade}</td>
                                                    {/* <td className="px-4 py-2 text-gray-800">{da.lingua}</td> */}
                                                    {/* <td className="px-4 py-2 text-gray-800">{da.revogou}</td> */}
                                                    {/* <td className="px-4 py-2 text-gray-800">{da.documentos}</td> */}
                                                    <td className="px-4 py-2 text-gray-800">{da.sistema}</td>
                                                    <td className="px-4 py-2 text-gray-800">{da.numeroDiretriz}</td>
                                                    <td className="px-4 py-2 text-gray-800">
                                                        <button
                                                            className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-200 mr-2"
                                                            onClick={() => toogleEditarFormulario(da.id)}
                                                        >
                                                            Editar
                                                        </button>
                                                        <button
                                                            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
                                                            onClick={()=> toogleExcluir(da.id)}
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

