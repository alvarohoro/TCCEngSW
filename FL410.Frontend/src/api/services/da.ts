import { IDA } from "../../types/IDA";
import fl410api from "../clients/axiosClient";


export async function obterDAs (){
    return await fl410api.get<IDA[]>("api/DA", {withCredentials: true});
}

export async function postDA(data: Record<string,string>){
    return await fl410api.post("api/DA", data, {withCredentials: true});
}