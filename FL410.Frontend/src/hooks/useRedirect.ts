import { useLocation, useNavigate } from "react-router-dom";

export function useRedirect(){
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const redirectTo = (path: string = from) => {navigate(path, { replace: true });}
    return {redirectTo}
}