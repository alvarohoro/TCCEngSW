import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { obterDAs, postDA } from "../services/da";
import { AxiosError } from "axios";

export const useDA = () => {
    const queryClient = useQueryClient();

    const useDAs = () => {
        return useQuery(
            {
                queryKey: ['DAs'],
                queryFn: () => obterDAs(),
            }
        )
    };

    const usePost = () => {
        return useMutation({
            mutationKey: ["DA"],
            mutationFn: (data: Record<string, string>) => postDA(data),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["Produtos"] });
            },
            onError: (error: AxiosError) => {
                return error.response?.data;
            },
        }
        );
    }

    return {useDAs, usePost}
}
