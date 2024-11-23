import { useQuery } from "@tanstack/react-query";
import { useLayoutEffect, useRef } from "react";
import { getUserAndRoles } from "../services/login";
import useAuth from "../../hooks/useContextAutenticacao";
import { IAuthDetails } from "../../types/IAuthDetails";

export function useUsuarioComPermissoes() {
    const auth = useAuth();
    const previousDataRef = useRef<IAuthDetails>();

    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ["usuario"],
        queryFn: getUserAndRoles,
        refetchOnWindowFocus: true,
        // staleTime: Infinity, // Cacheia a requisição
    });

    useLayoutEffect(() => {
        if (isSuccess && data) {
            const newUser = {
                user: data.data?.nome || "",
                email: data.data?.email || "",
                nome: data.data?.nome || "",
                roles: data.data?.roles || [],
            };

            if (JSON.stringify(previousDataRef.current) !== JSON.stringify(newUser)) {
                previousDataRef.current = newUser;
                auth?.setAuth(newUser);
            }
        }
    }, [isSuccess, data, auth]);

    return { isReady: isSuccess, isLoading: isLoading };
}
