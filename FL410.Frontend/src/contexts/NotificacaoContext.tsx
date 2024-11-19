import { createContext, useState, ReactNode, useCallback } from "react";
import { NotificacaoType } from "../types/NotificacaoType";

interface NotificacaoContextProps {
    criarNotificacaoEmTela: (notificacao: NotificacaoType) => void;
}

export const NotificacaoContext = createContext<NotificacaoContextProps | undefined>(undefined);

export const NotificacaoProvider = ({ children }: { children: ReactNode }) => {
    const [notificacao, setNotificacao] = useState<NotificacaoType | null>(null);

    const criarNotificacaoEmTela = useCallback((novaNotificacao: NotificacaoType) => {
        setNotificacao(novaNotificacao);
        setTimeout(() => setNotificacao(null), novaNotificacao.tempo || 5000); // Exibe a notificação por um tempo definido
    }, []);
    const estilosNotificacao = {
        'sucesso': 'bg-green-600',
        'erro': 'bg-red-600',
        'aviso': 'bg-yellow-600',
    }
    return (
        <NotificacaoContext.Provider value={{ criarNotificacaoEmTela }}>
            {children}
            {notificacao && (
                <div className={`fixed top-5 right-5 ${estilosNotificacao[notificacao!.tipo]} text-white py-2 px-4 rounded-lg shadow-lg z-50`}>
                    <span className="mr-4">
                        {notificacao?.mensagem}
                    </span>
                    <button
                        // onClick={() => { exibirNotificacao(false); }}
                        className="absolute bottom-4 right-2  text-white font-bold">
                        &times;
                    </button>
                </div>
            )}
        </NotificacaoContext.Provider>
    );
};

// Hook para usar o contexto de notificação
