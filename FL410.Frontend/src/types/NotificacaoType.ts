
export type NotificacaoType = {
    mensagem: string;
    tipo: 'sucesso' | 'erro' | 'aviso';
    tempo: number;
}