import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useUsuarioComPermissoes } from "../api/hooks/useUsuarioComPermissoes";
// import { useUsuarioComPermissoes } from "../hooks/useUsuarioComPermissoes";

interface IAllowedRoles {
    allowedRoles: string[];
}

export function RequireAuth({ allowedRoles }: IAllowedRoles): React.ReactElement {
    const auth = useAuth();
    const location = useLocation();
     const {isReady} = useUsuarioComPermissoes();
    // useUsuarioComPermissoes();

    if (!isReady) {
         return <div>Carregando...</div>
    }



    return (
            auth?.authDetails?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.authDetails?.nome
                ? <Navigate to="/NaoAutorizado" state={{ from: location }} replace />
                : <Navigate to="/Login" state={{ from: location }} replace />
    )
}