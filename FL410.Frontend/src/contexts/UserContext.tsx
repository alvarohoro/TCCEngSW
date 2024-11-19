import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"
import IUsuario from "../types/IUsuario"

export interface IUserContext {
    usuario: IUsuario
    setUsuario: Dispatch<SetStateAction<IUsuario>>
}

const defaultState = {
    usuario: {
        nome: "",
        email: ""
    },
    setUsuario: () => { }
} as IUserContext

export const UserContext = createContext(defaultState)

type UserProviderProps = {
    children: ReactNode
}

export default function UserProvider({children}: UserProviderProps)
{
    const [usuario, setUsuario] = useState<IUsuario>(defaultState.usuario)

    return (
        <UserContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </UserContext.Provider>
    )
}