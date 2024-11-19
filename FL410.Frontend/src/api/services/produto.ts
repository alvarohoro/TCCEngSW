import { ProdutoViewModel } from "../../types/ProdutoViewModel";
import fl410api from "../clients/axiosClient";

export async function postProduto(data: Record<string,string>) {
    if (data['aeronaveId']===''){
        delete data['aeronaveId'];
    }
    return await fl410api.post('/api/Produto', data);
}

export async function getProdutos(){
    return await fl410api.get<ProdutoViewModel[]>('/api/Produto');
}

export async function getProduto(modelo:string){
    return await fl410api.get<ProdutoViewModel>(`/api/Produto/modelo=${modelo}`);
}

export async function deleteProduto(modelo: string){
    return await fl410api.delete('/api/Produto', {data: {modelo: modelo}});
}

export async function getProdutosParciaisPorMatricula(matricula: string){
    return await fl410api.get<ProdutoViewModel[]>(`/api/Produto/matricula=${matricula}&dados=parciais`);
}

export async function getProdutosPorMatricula(matricula: string){
    return await fl410api.get<ProdutoViewModel[]>(`/api/Produto/matricula=${matricula}&dados=completos`);
}