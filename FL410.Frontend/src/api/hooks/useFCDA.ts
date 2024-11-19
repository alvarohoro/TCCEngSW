import { useMutation } from "@tanstack/react-query";
import { postFCDA } from "../services/fcda";

export function useFCDA(){
    return useMutation({

        mutationKey: ["FCDA"],
        mutationFn: (data: Record<string,string>) => postFCDA(data),
    })
}