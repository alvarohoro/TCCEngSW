import { MapaViewModel } from "../../types/MapaViewModel";
import fl410api from "../clients/axiosClient";

export async function getMapa(matricula:string, tipo: string){
    return await fl410api.get<MapaViewModel[]>(`/api/MAPA/${matricula}/${tipo}`);
}
