// AuthContext.tsx

import { createContext, useState, ReactNode } from "react";

// Defina seus tipos
interface IAuthDetails {
  user: null | string;
  nome: string | null;
  roles: string[];
}

interface IAuthContext {
  authDetails: IAuthDetails;
  setAuth: React.Dispatch<React.SetStateAction<IAuthDetails>>;
}

interface AuthContextProps {
  children: ReactNode;
}

// Crie o contexto
const AuthContext = createContext<IAuthContext | undefined>(undefined);

// Defina o Provider
export const AuthProvider = ({ children }: AuthContextProps) => {
  const [authDetails, setAuth] = useState<IAuthDetails>({ user: null, roles: [], nome: null });

  console.log("Dentro de AuthProvider.tsx");

  return (
    <AuthContext.Provider value={{ authDetails, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

// Exporte o contexto e o provider
export { AuthContext };