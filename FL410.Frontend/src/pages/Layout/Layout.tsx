import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function Layout() {

    return (
        <>
            <div className="bg-login bg-cover fixed w-screen h-screen grow bg-red-400 opacity-20 -z-10">
            </div>

            <div className="flex flex-col min-h-screen">

                <Navbar />

                <Outlet />
            </div>

        </>
    )
}