import { FCDAViewModel } from "../../types/FCDAViewModel";
import fl410api from "../clients/axiosClient";

export async function getFCDAs(){
    return await fl410api.get<FCDAViewModel[]>('/api/FCDA');
}

export async function postFCDA(data: Record<string,string>) {
   return await fl410api.post('/api/FCDA/', data);
}

export async function deleteFCDA(id: string){
    return await fl410api.delete(`/api/FCDA/${id}`);
}