import { AeronaveViewModel } from "./AeronaveViewModel";

export type ProdutoViewModel = {
    id: string,
    aeronaveId: string,
    aeronave: AeronaveViewModel | null;
    categoria: 'Motor' | 'Hélice' | 'Equipamento';
    modelo: string,
    tipo: string,
    classificacao: string,
    numerosDeSerie: string,
    designacaoComercial: string,
    detentorCT: string,
    fabricante: string,
    produtoEstrangeiro: string,
    numeroTCDS: string,
    obsTCDS: string,
    baseCertificacao: string,
    observacoes: string,
    categoriaCertificacao: string,
    variantes: string
}