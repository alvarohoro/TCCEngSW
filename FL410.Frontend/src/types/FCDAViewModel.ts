import { AeronaveViewModel } from "./AeronaveViewModel";
import { DAViewModel } from "./DAViewModel";
import { ProdutoViewModel } from "./ProdutoViewModel";

export type FCDAViewModel = {
  id: string;
  marcas: string;
  aeronaveId: string;
  numeroDA: string;
  daId: string;
  efetividade: string;
  vencimento: string;
  produtoAplicavel:string;
  produtoId: string;
  tipoCumprimento: string;
  aplicabilidade: string;
  justificativaNaoAplicabilidade: string;
  instrucaoReferencia: string;
  outraReferencia: string;
  fabricante: string;
  modelo: string;
  partNumber: string;
  serialNumber: string;
  vendorNumber: string;
  timeSinceNew: string;
  cyclesSinceNew: string;
  timeSinceOverhaul: string;
  cyclesSinceOverhaul: string;
  timeSinceLastInspection: string;
  cyclesSinceLastInspection: string;
  localCumprimento: string;
  dataCumprimento: string;
  metodoCumprimento: string;
  descricaoCumprimento: string;
  resultado: string;
  dificuldade: string;
  novoVencimento: string;
  executante: string;
  assinaturaExecutante: string;
  aprovador: string;
  assinaturaAprovador: string;
  entidade: string;
  local: string;

  aeronave:AeronaveViewModel;
  produto:ProdutoViewModel;
  da:DAViewModel;
};