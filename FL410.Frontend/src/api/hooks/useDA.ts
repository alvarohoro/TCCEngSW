import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteDA, obterDAs, postDA } from "../services/da";
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
                queryClient.invalidateQueries({ queryKey: ["DAs"] });
            },
            onError: (error: AxiosError) => {
                return error.response?.data;
            },
        }
        );
    }

    const useDelete = () => {
        return useMutation({
            mutationKey: ["DA"],
            mutationFn: (id: string) => deleteDA(id),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["DAs"] });
            },
            onError: (error: AxiosError) => {
                return error.response?.data;
            },
        }
        );
    }


    return { useDAs, usePost, useDelete }
}
