import { useMutation } from "@tanstack/react-query";
import ILogin from "../../types/ILogin";
import { postLogin } from "../services/login";

export function useLogin () {
    return useMutation({
        mutationKey: ["login"],
        mutationFn: (login: ILogin) => postLogin(login),
        // onMutate: () => {
        //     // console.log("Tentando logar...")
        // },
        // onError: (error) => {
        //     // console.error(error)
        // },
        // onSuccess: (data) => {
        //     // console.log(data)
        // },
        // onSettled: (_,error) => {
        //     if(error){
        //         // console.log("Putz, deu erro.");
        //         // console.error(error);
        //     }
        //     // console.log("Finalizou!")
        // }
    })
}