import { NavLink } from "react-router-dom";
import IItemNavbar from "../types/IItemNavbar";

export default function ItemNavbar(item: IItemNavbar) {
    return (
        <NavLink
            to={`/${item.to}`}
            className={({ isActive }) =>
                `${isActive ? 'bg-blue-300' : ''} font-bold text-center h-full w-full flex items-center justify-center`
            }
        >
            {item.nome}
        </NavLink>
    );
}
