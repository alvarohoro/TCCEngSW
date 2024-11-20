import { IDA } from "../../types/IDA";
import fl410api from "../clients/axiosClient";


export async function obterDAs (){
    return await fl410api.get<IDA[]>("api/DA", {withCredentials: true});
}

export async function postDA(data: Record<string,string>){
    if (data['id'] === '') delete data['id'];
    if (data['produtoId'] === '') delete data['produtoId'];
    return await fl410api.post("api/DA", data, {withCredentials: true});
}

export async function deleteDA(id:string){
    return await fl410api.delete(`api/DA/${id}`, {withCredentials: true});
}