import { AeronaveViewModel } from "../../types/AeronaveViewModel";
import fl410api from "../clients/axiosClient";

export async function postAeronave(data: Record<string,string>) {
    return await fl410api.post('/api/Aeronave', data);
}

export async function getAeronaves(){
    return await fl410api.get<AeronaveViewModel[]>('/api/Aeronave');
}

export async function getAeronave(matricula:string){
    return await fl410api.get<AeronaveViewModel[]>(`/api/Aeronave/${matricula}`);
}

export async function deleteAeronave(matricula: string){
    return await fl410api.delete('/api/Aeronave', {data: {matricula: matricula}});
}

export async function getAeronavesParciais(){
    return await fl410api.get<AeronaveViewModel[]>('/api/Aeronave/parciais');
}