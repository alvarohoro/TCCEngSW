import fl410api from "../clients/axiosClient";

export async function postFCDA(data: Record<string,string>) {
    await fl410api.post('/api/FCDA/Fcda', data);
}