import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getConfiguracao, postConfiguracao } from "../services/configuracao";

export const useConfiguracao = () => {
    const queryClient = useQueryClient();

    const useGet = () => {
        return useQuery(
            {
                queryKey: ['Configuracao'],
                queryFn: () => getConfiguracao(),
            }
        )
    };

    const usePost = () => {
        return useMutation({
            mutationKey: ["Configuracao"],
            mutationFn: (data: Record<string, string>) => postConfiguracao(data),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["Configuracao"] });
            },
            onError: (error: AxiosError) => {
                return error.response?.data;
            }
        }
        );
    };

   

    
    return { useGet, usePost }
}