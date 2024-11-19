import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ILogin from "../../types/ILogin";
import useAuth from "../../hooks/useAuth";
import { useLogin } from "../../api/hooks/useLogin";
import { useRoles } from "../../api/hooks/useRoles";
import { useRedirect } from "../../hooks/useRedirect";


export default function Login() {

    const auth = useAuth();
    const {redirectTo} = useRedirect();
    const { register, handleSubmit } = useForm<ILogin>();
    const loginMutation = useLogin();

    const rolesQuery = useRoles();
    

    const handleLoginSubmit: SubmitHandler<ILogin> = async (login) => {
        await loginMutation.mutateAsync(login, {
            onSuccess: async () => {
                auth?.setAuth({
                    user: login.email,
                    roles: []
                });
            }
        });
    }

    useEffect(() => {
        if (rolesQuery.isSuccess && rolesQuery.data?.data) {
            auth?.setAuth({ user: auth?.authDetails.user || "", roles: rolesQuery.data?.data || [] });
        }
        if (auth?.authDetails.roles && auth?.authDetails.roles.length > 0) {
            redirectTo();
        }
    }, [auth, redirectTo, rolesQuery.data?.data, rolesQuery.isSuccess])

return (
    <div className="flex">

        <div className="bg-white content-center  text-gray-900 h-screen">
            <div className="flex flex-col gap-5">
                <h2 className="text-3xl font-bold text-center">Sistema FL410</h2>
                <br />
                <h6 className="text-md ms-6">Faça o seu login:</h6>
            </div>
            <form className="flex min-w-60 text-sm flex-col gap-2 m-4 text-center columns-4" onSubmit={handleSubmit(handleLoginSubmit)}>
                <input className="p-2  bg-gray-200 rounded-full"
                    placeholder="Email" {...register("email")}
                />
                <input className="p-2 bg-gray-200 rounded-full"
                    placeholder="Senha" {...register("password")} type="password"
                />
                <input
                    type="submit"
                    disabled={loginMutation.isPending}
                    value={loginMutation.isPending ? "Entrando..." : "Entrar"}
                    className={` border h-9 rounded-full text-white ${loginMutation.isPending ? "bg-gray-400" : "cursor-pointer bg-green-500 hover:bg-green-600"
                        }`}
                />
                {loginMutation.isError && <div className="text-red-500">Erro ao logar</div>}
                {loginMutation.isSuccess && <div className="text-green-500">Logado com sucesso</div>}
            </form>
        </div>
        <div className="bg-login bg-cover grow bg-red-400">
            <span className="text-white opacity-30 text-xs bg-black text-right bottom-0 right-0 absolute">
                Photo by <a href="https://unsplash.com/@luka_pilot?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Luka Slapnicar</a> on <a href="https://unsplash.com/photos/black-and-white-airliner-turbine-yqeXLR81Uj0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            </span>
        </div>
    </div>

)
}