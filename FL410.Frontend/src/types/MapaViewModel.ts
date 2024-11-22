import { AeronaveViewModel } from "./AeronaveViewModel";
import { FCDAViewModel } from "./FCDAViewModel";
import { ProdutoViewModel } from "./ProdutoViewModel";

  
  export type MapaViewModel = {
    aeronave: AeronaveViewModel;
    fcdas: FCDAViewModel[];
    produto: ProdutoViewModel;
  };
  