import { useState } from "react";
import { useAeronave } from "../../api/hooks/useAeronave";
import { AeronaveViewModel } from "../../types/AeronaveViewModel";
import { useNotificacao } from "../../hooks/useNotificacao";
import { NotificacaoType } from "../../types/NotificacaoType";
import FormularioAeronave from "./Components/FormularioAeronave";
import ListaAeronave from "./Components/ListaAeronaves";


export default function Aeronaves() {
    // const [exibirNotificacao, setExibirNotificacao] = useState(false);
    // const [notificacao, setNotificacao] = useState<NotificacaoType | null>(null);
    const { get } = useAeronave();
    const aeronaves = get.data?.data as AeronaveViewModel[] || [];
    const [exibirFormularioAeronave, setExibirFormularioAeronave] = useState(false);

    // const configurarNotificacao = (notificacao: NotificacaoType) => {
        // setNotificacao(notificacao);
        // setExibirNotificacao(true);
    // }
    const { criarNotificacaoEmTela } = useNotificacao(); // Usa o contexto de notificação

    const configurarNotificacao = (notificacao: NotificacaoType) => {
        criarNotificacaoEmTela(notificacao);
    }


    // const toogleNotificacao = (status: boolean) => {
    //     // setExibirNotificacao(status);
    // }

    return (
        <div className="min-h-[calc(100vh-10rem)] m-5">
            <h1 className="bg-gray-200 rounded-t-3xl py-4 px-6 text-gray-700 font-semibold text-xl">Aeronaves</h1>
            <div className="bg-gray-100 min-h-[calc(100vh-10rem)] rounded-b-3xl">
                <br />
                {/* {exibirNotificacao && (<Notificacao notificacao={notificacao} exibirNotificacao={toogleNotificacao} />)} */}

                <FormularioAeronave
                    configurarNotificacao={configurarNotificacao}
                    abrir={exibirFormularioAeronave}
                    aoFechar={() => setExibirFormularioAeronave(false)}
                />


                <div className="flex justify-center">
                    <div className="w-full max-w-5xl">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-xl font-semibold text-gray-700">Lista de Aeronaves</h2>
                            <button
                                onClick={() => setExibirFormularioAeronave(true)}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded text-sm">
                                Adicionar
                            </button>
                        </div>
                        <ListaAeronave aeronaves={aeronaves} criarNotificacaoEmTela={configurarNotificacao} />
                    </div>
                </div>
            </div>
        </div>
    );
}