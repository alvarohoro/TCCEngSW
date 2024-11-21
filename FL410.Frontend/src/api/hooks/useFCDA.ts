import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteFCDA, getFCDAs, postFCDA } from "../services/fcda";
import { AxiosError } from "axios";

export const useFCDA = () => {
    const queryClient = useQueryClient();

    const useFCDAs = () => {
        return useQuery(
            {
                queryKey: ['FCDAs'],
                queryFn: () => getFCDAs(),
            }
        )
    };

    const usePost = () => {
        return useMutation({
            mutationKey: ["FCDA"],
            mutationFn: (data: Record<string, string>) => postFCDA(data),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["FCDAs"] });
            },
            onError: (error: AxiosError) => {
                return error.response?.data;
            }
        }
        );
    };

    const useDelete = () => {
        return useMutation({
            mutationKey: ["FCDA"],
            mutationFn: (id: string) => deleteFCDA(id),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["FCDAs"] });
            },
            onError: (error: AxiosError) => {
                return error.response?.data;
            }
        }
        );
    }

    
    return { useFCDAs, usePost, useDelete }
}