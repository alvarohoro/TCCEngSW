import { useRouteError } from "react-router-dom";

// interface IPaginaErro {
//     statusText:string,
//     message:string
// }

export default function PaginaErro(){
    const erro:unknown = useRouteError();

    return(
        <div className="grid place-content-center text-center gap-10 h-screen" id="paginaDeErro">
            <p className="text-6xl font-bold">Contato radar perdido 😕</p>
            <i>{((erro as {statusText?: string})?.statusText == "Not Found" && (<p className="text-4xl">Página não encontrada</p>))}</i>
            <i>{((erro as {statusText?: string})?.statusText != "Not Found" && (<p className="text-4xl">{(erro as {statusText?: string})?.statusText}</p>))}</i>
        </div>
    )
}