import useAuth from "../hooks/useContextAutenticacao";
import ItemNavbar from "./ItemNavbar";

export default function Navbar() {
    const auth = useAuth();
    return (
        <>

            <nav className="grid grid-cols-12 min-w-64 bg-blue-50 min-h-14">
                <h2 className="col-start-1 col-span-2 text-xl self-center font-bold pl-3 text-left">Sistema FL410</h2>
                <div className="col-start-3 col-span-6 flex ">
                    <ItemNavbar nome="Início" to=""></ItemNavbar>
                    <ItemNavbar nome="Aeronaves" to="aeronaves"></ItemNavbar>
                    <ItemNavbar nome="Produtos" to="produtos"></ItemNavbar>
                    <ItemNavbar nome="DAs" to="da"></ItemNavbar>
                    <ItemNavbar nome="FCDA" to="fcda"></ItemNavbar>
                    <ItemNavbar nome="Mapas" to="mapas"></ItemNavbar>
                    <ItemNavbar nome="Configuração" to="configuracao"></ItemNavbar>
                </div>
                <h2 className="col-end-12 col-span-2 text-r self-center font-bold pr-3 text-right">{auth?.authDetails.nome}</h2>
            </nav>

        </>
    )
}