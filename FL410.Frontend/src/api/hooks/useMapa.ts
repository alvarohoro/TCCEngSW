import { useQuery } from "@tanstack/react-query";
import { getMapa } from "../services/mapa";

export const useMapa = () => {
    const useGetMapa = (matricula: string, tipo: string) =>
        useQuery(
            {
                queryKey: ['Mapa'],
                queryFn: () => getMapa(matricula, tipo),
                enabled: !!matricula && !!tipo,
            });

    return {useGetMapa}
}