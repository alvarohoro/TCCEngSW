import { useContext } from "react";
import { NotificacaoContext } from "../contexts/NotificacaoContext";

export const useNotificacao = () => {
    const context = useContext(NotificacaoContext);
    if (!context) {
        throw new Error("useNotificacao deve ser usado dentro de um NotificacaoProvider");
    }
    return context;
};