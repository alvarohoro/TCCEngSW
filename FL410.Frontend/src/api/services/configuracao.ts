
import { ConfiguracaoViewModel } from "../../types/ConfiguracaoViewModel";
import fl410api from "../clients/axiosClient";

export async function getConfiguracao(){
    return await fl410api.get<ConfiguracaoViewModel>('/api/configuracao');
}

export async function postConfiguracao(data: Record<string,string>) {
   return await fl410api.post('/api/configuracao/', data);
}
