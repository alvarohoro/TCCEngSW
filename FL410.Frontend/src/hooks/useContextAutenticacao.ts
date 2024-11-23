import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

export default function useContextAutenticacao(){
    const context = useContext(AuthContext);
    return context;
}