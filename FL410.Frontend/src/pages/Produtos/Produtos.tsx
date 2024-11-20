import { useState } from "react";
import { useProduto } from "../../api/hooks/useProduto";
import { ProdutoViewModel } from "../../types/ProdutoViewModel";
import { useNotificacao } from "../../hooks/useNotificacao";
import { NotificacaoType } from "../../types/NotificacaoType";
import FormularioProduto from "./Components/FormulatorioProduto";
import ListaProdutos from "./Components/ListaProdutos";


export default function Produtos() {
    const { get } = useProduto();
    const produtos = get.data?.data as ProdutoViewModel[] || [];
    const [exibirFormularioProduto, setExibirFormularioProduto] = useState(false);
    const { criarNotificacaoEmTela } = useNotificacao(); // Usa o contexto de notificação
    const configurarNotificacao = (notificacao: NotificacaoType) => {
        criarNotificacaoEmTela(notificacao);
    }



    return (
        <div className="min-h-[calc(100vh-10rem)] m-5">
            <h1 className="bg-gray-200 rounded-t-3xl py-4 px-6 text-gray-700 font-semibold text-xl">Produtos</h1>
            <div className="bg-gray-100 min-h-[calc(100vh-10rem)] rounded-b-3xl">
                <br />

                <FormularioProduto
                    abrir={exibirFormularioProduto}
                    aoFechar={() => setExibirFormularioProduto(false)}
                />

                <div className="flex justify-center">
                    <div className="w-full max-w-5xl">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-xl font-semibold text-gray-700">Lista de Produtos</h2>
                            <button
                                onClick={() => setExibirFormularioProduto(true)}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded text-sm">
                                Adicionar
                            </button>
                        </div>
                        <ListaProdutos produtos={produtos} criarNotificacaoEmTela={configurarNotificacao} />
                    </div>
                </div>
            </div>
        </div>
    );
}