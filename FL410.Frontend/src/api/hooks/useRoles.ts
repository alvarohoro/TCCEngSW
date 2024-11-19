import { useQuery } from "@tanstack/react-query";
import { getRoles } from "../services/login";
import useAuth from "../../hooks/useAuth";



export function useRoles(){
    const auth = useAuth();
    return useQuery({
        queryKey: ["roles"],
        queryFn: getRoles,
        enabled:  !!auth?.authDetails.nome,
    })
}