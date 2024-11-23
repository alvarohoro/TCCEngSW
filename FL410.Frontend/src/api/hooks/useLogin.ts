import { useMutation, useQuery } from "@tanstack/react-query";
import ILogin from "../../types/ILogin";
import { getUserAndRoles, postLogin, postMudarNome } from "../services/login";

export const useAutenticacao = () => {
    const useLogin = () => {
        return useMutation({
            mutationKey: ["login"],
            mutationFn: (login: ILogin) => postLogin(login),
        })
    }

    const useObterRegras = () => {
        return useQuery(
            {
                queryKey: ['usuario'],
                queryFn: () => getUserAndRoles(),
            }
        )
    }

    const useMudarNome = () => {
        return useMutation({
            mutationKey: ["usuario"],
            mutationFn: (novoNome: string) => postMudarNome(novoNome),
        })
    }


    return { useLogin, useObterRegras, useMudarNome };
}