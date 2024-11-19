import { useQuery, useMutation, UseMutationResult, UseQueryResult, useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { deleteAeronave, getAeronave, getAeronaves, postAeronave, getAeronavesParciais } from '../services/aeronave';

interface UseAeronaveResult {
    get: UseQueryResult<AxiosResponse<unknown, unknown>, Error>;
    post: UseMutationResult<AxiosResponse, AxiosError, Record<string, string>, unknown>;
    exclude: UseMutationResult<AxiosResponse, AxiosError, string, unknown>;
    getAeronavePorMatricula: UseQueryResult<AxiosResponse<unknown, unknown>, Error>;
    aeronavesParciais: UseQueryResult<AxiosResponse<unknown, unknown>, Error>;
}

export function useAeronave(matricula?:string): UseAeronaveResult {
    const queryClient = useQueryClient();
    const post = useMutation({
        mutationKey: ["Aeronave"],
        mutationFn: (data: Record<string, string>) => postAeronave(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["Aeronaves"]});
        },
        onError: (error: AxiosError) => {
            return error.response?.data;
        },
    });

    const get = useQuery({
        queryKey: ["Aeronaves"],
        queryFn: async () => {
            try {
                return await getAeronaves();
            } catch (error) {
                if (error instanceof AxiosError) {
                    console.log("Erro dentro do useQuery: " + error.response?.data);
                }
                throw error;
            }
        },
    });



    const getAeronavePorMatricula = useQuery({
        queryKey: ["Aeronave"],
        queryFn: async () => {
            try {
                return await getAeronave(matricula ? matricula : "");
            } catch (error) {
                if (error instanceof AxiosError) {
                    console.log("Erro dentro do useQuery: " + error.response?.data);
                }
                throw error;
            }
        },
        enabled: !!matricula,
    });

    const aeronavesParciais = useQuery({
        queryKey: ["AeronavesParciais"],
        queryFn: async () => {
            try {
                return await getAeronavesParciais();
            } catch (error) {
                if (error instanceof AxiosError) {
                    console.log("Erro dentro do useQuery: " + error.response?.data);
                }
                throw error;
            }
        },
    });
    
    const exclude = useMutation({
        mutationKey: ["Aeronave"],
        mutationFn: (data: string) => deleteAeronave(data),
        onSuccess: () => {
            queryClient.refetchQueries({ queryKey: ["Aeronaves"]});
        },
        onError: (error: AxiosError) => {
            console.log("Erro dentro do useMutation: " + error.response?.data);
            return error.response?.data;
        },
    });

    
    return { get, post, exclude, getAeronavePorMatricula, aeronavesParciais };
}
