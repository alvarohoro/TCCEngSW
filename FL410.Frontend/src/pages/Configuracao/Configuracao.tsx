import { useForm } from "react-hook-form";
import { useConfiguracao } from "../../api/hooks/useConfiguracao"
import { ConfiguracaoViewModel } from "../../types/ConfiguracaoViewModel";
import { useEffect, useRef } from "react";
import useContextAutenticacao from "../../hooks/useContextAutenticacao";
import { IAuthDetails } from "../../types/IAuthDetails";
import { useAutenticacao } from "../../api/hooks/useLogin";
import { useNotificacao } from "../../hooks/useNotificacao";

export default function Configuracao() {


  const { register: registerFormOficina, handleSubmit: handleSubmitFormOficina, reset: resetFormOficina } = useForm<ConfiguracaoViewModel>();

  const { register: registerFormUsuarios, handleSubmit: handleSubmitFormUsuario, reset: resetFormUsuario } = useForm<IAuthDetails>();

  const { useGet, usePost } = useConfiguracao();
  const configuracao = useGet();
  const post = usePost();

  const { useMudarNome } = useAutenticacao();
  const mudarNome = useMudarNome();

  const usuarioAutenticado = useContextAutenticacao();

  const isFormOficinaInitialized = useRef(false);
  const isFormUsuarioInitialized = useRef(false);


  useEffect(() => {
    console.log('Usuário autenticado em configuração...')
    console.log(usuarioAutenticado?.authDetails)
    if (!isFormUsuarioInitialized.current && usuarioAutenticado?.authDetails) {
      resetFormUsuario(usuarioAutenticado.authDetails);
      isFormUsuarioInitialized.current = true;
    }
  }, [resetFormUsuario, usuarioAutenticado])

  useEffect(() => {
    if (!isFormOficinaInitialized.current && configuracao.data?.data) {
      resetFormOficina(configuracao.data.data);
      isFormOficinaInitialized.current = true; // Impede chamadas subsequentes

    }
  }, [configuracao, resetFormOficina]);

  const onSubmit = async (data: ConfiguracaoViewModel) => {
    try {
      await post.mutateAsync(data);
    }
    catch (error) {
      console.log(error);
    }
  }
  const contextAuth = useContextAutenticacao();

  const onSubmitMudarNome = async (data: IAuthDetails) => {
    try {
      if (data.nome) {
        await mudarNome.mutateAsync(data.nome);
        contextAuth?.setAuth({ ...contextAuth.authDetails, nome: data.nome });
      } else {
        console.error("Nome is null");
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  const { criarNotificacaoEmTela: notificacao } = useNotificacao();

  useEffect(() => {
    if (mudarNome.isSuccess) {
      notificacao({
        mensagem: "Usuário alterado com sucesso!",
        tipo: "sucesso",
        tempo: 3000
      });
    }
  }, [mudarNome.isSuccess, notificacao]);

  useEffect(() => {
    if (post.isSuccess) {
      notificacao({
        mensagem: "Dados da oficina alterados com sucesso!",
        tipo: "sucesso",
        tempo: 3000
      });
    }
  }, [post.isSuccess, notificacao]);


  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Configurações</h1>

      {/* Seção: Dados da Oficina */}
      <section className="mb-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Dados da Oficina de Manutenção Aeronáutica</h2>
        <form onSubmit={handleSubmitFormOficina(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            {...registerFormOficina("id")}
            className="w-full hidden p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          <div>
            <label className="block text-gray-600 font-medium mb-2">Nome Fantasia da Oficina</label>
            <input
              type="text"
              {...registerFormOficina("nomeFantasia", { required: "Campo obrigatório" })}
              placeholder="Insira o nome da oficina"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-2">Razão Social da Oficina</label>
            <input
              type="text"
              {...registerFormOficina("razaoSocial", { required: "Campo obrigatório" })}
              placeholder="Insira o nome da oficina"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-2">CNPJ</label>
            <input
              type="text"
              {...registerFormOficina("cnpj", { required: "Campo obrigatório" })}
              placeholder="Insira o CNPJ"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-2">Certificado de Organização de Manutenção (COM/ANAC)</label>
            <input
              type="text"
              {...registerFormOficina("certificadoOM", { required: "Campo obrigatório" })}
              placeholder="Insira o COM/ANAC"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-gray-600 font-medium mb-2">Endereço</label>
            <input
              type="text"
              {...registerFormOficina("endereco", { required: "Campo obrigatório" })}
              placeholder="Insira o endereço"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>

            <button type="submit" disabled={post.isPending} className={` ${post.isPending ? 'bg-gray-500 ' : 'bg-blue-500 hover:bg-blue-600'} sm:col-span-2 mt-4 px-4 py-2  text-white rounded-lg shadow `}>
              {post.isPending ? 'Salvando...' : 'Salvar Alterações'}
            </button>
          </div>
        </form>
      </section>

      {/* Seção: Dados dos Colaboradores */}
      <section className="mb-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Dados dos Colaboradores</h2>
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-2 font-medium text-gray-700">Nome</th>
              <th className="px-4 py-2 font-medium text-gray-700">Cargo</th>
              <th className="px-4 py-2 font-medium text-gray-700">Permissões</th>
              <th className="px-4 py-2 font-medium text-gray-700">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2 text-gray-800">João da Silva</td>
              <td className="px-4 py-2 text-gray-800">Mecânico</td>
              <td className="px-4 py-2 text-gray-800">Visualizar, Editar</td>
              <td className="px-4 py-2 text-blue-500 hover:underline cursor-pointer">Editar</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 text-gray-800">Maria Oliveira</td>
              <td className="px-4 py-2 text-gray-800">Supervisor</td>
              <td className="px-4 py-2 text-gray-800">Visualizar, Gerenciar</td>
              <td className="px-4 py-2 text-blue-500 hover:underline cursor-pointer">Editar</td>
            </tr>
            {/* Adicione mais colaboradores conforme necessário */}
          </tbody>
        </table>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
          Adicionar Colaborador
        </button>
      </section>

      {/* Seção: Dados do Usuário */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Dados do Usuário</h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleSubmitFormUsuario(onSubmitMudarNome)}>
          <div>
            <label className="block text-gray-600 font-medium mb-2">Nome</label>
            <input
              type="text"
              // {...regi}
              placeholder="Insira seu nome"
              {...registerFormUsuarios("nome")}

              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-2">E-mail</label>
            <input
              type="email"
              placeholder="Insira seu e-mail"
              {...registerFormUsuarios("email")}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-2">Permissões</label>
            {usuarioAutenticado?.authDetails?.roles?.map((role, index) => (
              <label key={index} className="p-2 m-2 text-gray-600 font-medium mb-2">

                <input type="checkbox" className="mr-2" value={role} checked />
                <span>{role}</span>
              </label>))}

          </div>
          <div className="sm:col-span-2">
            <label className="block text-gray-600 font-medium mb-2">Senha</label>
            <input
              type="password"
              placeholder="Insira sua senha"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <button type="submit" disabled={mudarNome.isPending} className={` ${mudarNome.isPending ? 'bg-gray-500 ' : 'bg-blue-500 hover:bg-blue-600'} sm:col-span-2 mt-4 px-4 py-2  text-white rounded-lg shadow `}>
            {mudarNome.isPending ? 'Salvando...' : 'Salvar Alterações'}
          </button>
        </form>
      </section>
    </div>

  )
}