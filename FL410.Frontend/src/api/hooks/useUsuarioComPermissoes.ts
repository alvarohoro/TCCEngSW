import { useQuery } from "@tanstack/react-query";
import { useLayoutEffect } from "react";
import { getUserAndRoles } from "../services/login";
import useAuth from "../../hooks/useAuth";

export function useUsuarioComPermissoes() {
    const auth = useAuth();

    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ["usuario"],
        queryFn: getUserAndRoles,
        refetchOnWindowFocus: true,
        // staleTime: Infinity, // Cacheia a requisição
    });

    useLayoutEffect(() => {
        if (
            isSuccess &&
            data
        ) {
            auth?.setAuth({
                nome: data.data?.nome || "",
                roles: data.data?.roles || [],
            });
        }
    }, [isSuccess, data]);

    return { isReady: isSuccess, isLoading: isLoading };
}
