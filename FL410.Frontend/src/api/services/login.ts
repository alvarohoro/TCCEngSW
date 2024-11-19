import { IAuthDetails } from "../../types/IAuthDetails";
import ILogin from "../../types/ILogin";
import fl410api from "../clients/axiosClient";


export const postLogin = async (login:ILogin) => {
    return await fl410api.post("api/login?userCookies=true&useSessionCookies=true", login, {withCredentials: true});
}

export async function getRoles(){
    return await fl410api.get<string[]>("api/Conta/ObterRoles", {withCredentials: true});
}

export async function getUserAndRoles(){
    return await fl410api.get<IAuthDetails>("api/Conta/ObterUsuarioComRoles", {withCredentials: true});
}