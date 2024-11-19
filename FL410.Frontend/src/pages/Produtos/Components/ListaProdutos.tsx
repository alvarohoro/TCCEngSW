import { ProdutoViewModel } from "../../../types/ProdutoViewModel";
import { useEffect, useReducer, useState } from "react";
import { NotificacaoType } from "../../../types/NotificacaoType";
import FormularioProduto from "./FormulatorioProduto";
import { useProduto } from "../../../api/hooks/useProduto";
import { useQueryClient } from "@tanstack/react-query";


type EstadoAnterior = { abrir: boolean, modelo: string, produto: ProdutoViewModel | null };
type EstadoFuturo = Partial<EstadoAnterior>;

export default function ListaProdutos(
    {
        produtos,
        criarNotificacaoEmTela,
    }: {
        produtos: ProdutoViewModel[],
        criarNotificacaoEmTela: (notificacao: NotificacaoType) => void,
    }) {
    const queryClient = useQueryClient();

    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState({ estado: false, modelo: "" });
    const [formEdicao, setFormEdicao] = useReducer(
        (estadoAnterior: EstadoAnterior, estadoFuturo: EstadoFuturo) => (
            { ...estadoAnterior, ...estadoFuturo }), { abrir: false, modelo: "", produto: null }
        );

    const [modeloSelecionado, setModeloSelecionado] = useState("");

    const { exclude, useProdutoPorModelo } = useProduto();

    const excluirProduto = (modelo: string) => {
        exclude.mutate(modelo, {
            onSuccess: () => {
                criarNotificacaoEmTela({ mensagem: "Produto excluído com sucesso!", tipo: "sucesso", tempo: 5000 });
                toggleModalDelete("");
            }
        });
    }
    const toggleModalDelete = (modelo: string) => setIsModalDeleteOpen({ estado: !isModalDeleteOpen.estado, modelo: modelo });

    const { isSuccess: isProdutoPorModeloSuccess, data: produtoPorModeloData } = useProdutoPorModelo(modeloSelecionado);


    useEffect(()=>{
        if (modeloSelecionado != ""){
            if (isProdutoPorModeloSuccess && produtoPorModeloData?.data) {
                const produtoEmEdicao = produtoPorModeloData?.data as ProdutoViewModel;
                if (produtoEmEdicao !== formEdicao.produto) {
                    setFormEdicao({ produto: produtoEmEdicao });
                }
                if (formEdicao.abrir === false) {
                    setFormEdicao({ abrir: true });
                }
            }
        }
    },[formEdicao.abrir, formEdicao.produto, isProdutoPorModeloSuccess, modeloSelecionado, produtoPorModeloData?.data])

    const abrirModalEditar = (modelo: string) => {
        console.log('Clicou em Editar');
        setModeloSelecionado(modelo);
        setFormEdicao({ modelo: modelo });
        queryClient.invalidateQueries({ queryKey: ["Produto"] });
        
    }

    const fecharModalEditar = () => {
        console.log('Clicou em Fechar');
        setModeloSelecionado("");
        setFormEdicao({ abrir: false, produto: null, modelo: "" });
        
    }

    return (
        <div className="flex justify-center">
            {formEdicao.produto && (
                <FormularioProduto
                    abrir={formEdicao.abrir}
                    // aoFechar={() => { setFormEdicao({ abrir: false, produto: null, modelo: "" }) }}
                    aoFechar={() => { fecharModalEditar() }}
                    produto={{ ...formEdicao.produto }}
                />
            )}

            <div className="w-full max-w-5xl">
                <table className="w-full bg-white text-gray-600 rounded-lg shadow-xl overflow-hidden mb-5">
                    <thead>
                        <tr className="bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                            <th className="px-6 py-3 rounded-tl-lg">Categoria</th>
                            <th className="px-6 py-3">Aeronave</th>
                            <th className="px-6 py-3">Fabricante</th>
                            <th className="px-6 py-3">Modelo</th>
                            <th className="px-6 py-3">Produto estrangeiro</th>
                            <th className="px-6 py-3 rounded-tr-lg">Ação</th>
                        </tr>
                    </thead>
                    <tbody>

                        {produtos.map((produto: ProdutoViewModel) => (
                            <tr key={produto.id} className="border-b border-gray-200 hover:bg-gray-50 transition-all ease-in-out delay-150">
                                <td className="px-6 py-4">{produto.categoria}</td>
                                <td className="px-6 py-4">{(produto.aeronave?.matricula) ? produto.aeronave.matricula : 'Não instalado'} {(produto.aeronave?.modelo) ? `(${produto.aeronave.modelo})` : ''}</td>
                                <td className="px-6 py-4">{produto.fabricante}</td>
                                <td className="px-6 py-4">{produto.modelo}</td>
                                <td className="px-6 py-4">{produto.produtoEstrangeiro}</td>
                                <td className="px-6 py-4 flex space-x-2">
                                    <button
                                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded text-sm"
                                        onClick={() => abrirModalEditar(produto.modelo)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded text-sm"
                                        onClick={() => setIsModalDeleteOpen({ estado: true, modelo: produto.modelo })}
                                    >
                                        Excluir
                                    </button>
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
                            <h2 className="text-lg font-semibold text-gray-700 mb-4">Excluir Produto</h2>
                            <div className="flex flex-row flex-wrap">
                                <p>Tem certeza que deseja excluir a produto {isModalDeleteOpen.modelo}?</p>
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
                                    onClick={() => excluirProduto(isModalDeleteOpen.modelo)}
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

