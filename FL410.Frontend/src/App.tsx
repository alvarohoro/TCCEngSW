import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Autenticacao/Login";
import Layout from "./pages/Layout/Layout";
import RotaNaoEncontrada from "./Routes/RotaNaoEncontrada";
// import AuthProvider from "./contexts/AuthProvider";
import { RequireAuth } from "./Routes/RequireAuth";
import NaoAutorizado from "./Routes/NaoAutorizado";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Aeronaves from "./pages/Aeronaves";
import DA from "./pages/DA";
import Inicio from "./pages/Inicio";
import Mapas from "./pages/Mapas";
import Fcda from "./pages/Fcda";
import { AuthProvider } from "./contexts/AuthProvider";
import { NotificacaoProvider } from "./contexts/NotificacaoContext";
import Configuracao from "./pages/Configuracao";
import Produtos from "./pages/Produtos";

const router = createBrowserRouter([
  { path: "/NaoAutorizado", element: <NaoAutorizado /> },
  {
    element: <RequireAuth allowedRoles={['Admin', 'Gerente']} />,
    children: [
    ]
  },
  {
    element: <RequireAuth allowedRoles={['Admin', 'Gerente']} />,
    children: [
      {
        element: <Layout />, children: [
          { path: "/", element: <Inicio /> },
          { path: "/aeronaves", element: <Aeronaves /> },
          { path: "/produtos", element: <Produtos /> },
          { path: "/da", element: <DA /> },
          { path: "/fcda", element: <Fcda /> },
          { path: "/mapas", element: <Mapas /> },
          { path: "/configuracao", element: <Configuracao /> },
        ]
      },
    ]
  },
  { path: "/Login", element: <Login /> },
  { path: "*", element: <RotaNaoEncontrada /> }
])

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 5,
      retryDelay: 1000,
    }
  }
});


export default function App() {
  return (
    <>
      <AuthProvider>
        <NotificacaoProvider>
          <QueryClientProvider client={queryClient} >
            <RouterProvider router={router} />
            <ReactQueryDevtools />
          </QueryClientProvider>
        </NotificacaoProvider>

      </AuthProvider>
    </>
  )
}

