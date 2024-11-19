import { useQuery, useMutation, UseMutationResult, UseQueryResult, useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { deleteProduto, getProduto, getProdutos, getProdutosParciaisPorMatricula, getProdutosPorMatricula, postProduto } from '../services/produto';

export interface UseProdutoResult {
    get: UseQueryResult<AxiosResponse<unknown, unknown>, Error>;
    post: UseMutationResult<AxiosResponse, AxiosError, Record<string, string>, unknown>;
    exclude: UseMutationResult<AxiosResponse, AxiosError, string, unknown>;
    useProdutoPorModelo: UseQueryResult<AxiosResponse<unknown, unknown>, Error>;
    useProdutosPorMatricula: UseQueryResult<AxiosResponse<unknown, unknown>, Error>;
    useProdutosParciaisPorMatricula: UseQueryResult<AxiosResponse<unknown, unknown>, Error>;
}

// export function useProduto(modelo?:string): UseProdutoResult {
export const useProduto = () => {
    const queryClient = useQueryClient();
    const post = useMutation({
        mutationKey: ["Produto"],
        mutationFn: (data: Record<string, string>) => postProduto(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["Produtos"] });
        },
        onError: (error: AxiosError) => {
            return error.response?.data;
        },
    });

    const get = useQuery({
        queryKey: ["Produtos"],
        queryFn: async () => {
            try {
                return await getProdutos();
            } catch (error) {
                if (error instanceof AxiosError) {
                    console.log("Erro dentro do useQuery: " + error.response?.data);
                }
                throw error;
            }
        },
    });

    const useProdutoPorModelo = (modelo: string) => {
        return useQuery(
            {
                queryKey: ['produto', modelo],
                queryFn: () => getProduto(modelo),
                enabled: !!modelo,
            });
        }

    const exclude = useMutation({
        mutationKey: ["Produto"],
        mutationFn: (data: string) => deleteProduto(data),
        onSuccess: () => {
            queryClient.refetchQueries({ queryKey: ["Produtos"] });
        },
        onError: (error: AxiosError) => {
            console.log("Erro dentro do useMutation: " + error.response?.data);
            return error.response?.data;
        },
    });

    const useProdutosParciaisPorMatricula = (matricula: string) =>
        useQuery(
            {
                queryKey: ['produtos', 'parciais', matricula],
                queryFn: () => getProdutosParciaisPorMatricula(matricula),
                enabled: !!matricula,
            });


    const useProdutosPorMatricula = (matricula: string) =>
        useQuery(
            {
                queryKey: ['produtos', matricula],
                queryFn: () => getProdutosPorMatricula(matricula),
                enabled: !!matricula,
            });

    return { get, post, exclude, useProdutoPorModelo, useProdutosParciaisPorMatricula, useProdutosPorMatricula };
}
