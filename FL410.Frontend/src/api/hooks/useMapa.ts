import { useQuery } from "@tanstack/react-query";
import { getMapa } from "../services/mapa";

export const useMapa = () => {
    const useGetMapa = (matricula: string, tipo: string, enabled: boolean) =>
        useQuery(
            {
                queryKey: ['Mapa'],
                queryFn: () => getMapa(matricula, tipo),
                enabled: enabled
            });

    return {useGetMapa}
}