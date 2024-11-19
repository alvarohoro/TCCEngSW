
export default function Configuracao(){
    return(
        <div className="p-8 bg-gray-50 min-h-screen">
  <h1 className="text-3xl font-bold text-gray-800 mb-6">Configurações</h1>

  {/* Seção: Dados da Oficina */}
  <section className="mb-8 bg-white p-6 rounded-lg shadow">
    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Dados da Oficina de Manutenção Aeronáutica</h2>
    <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-gray-600 font-medium mb-2">Nome da Oficina</label>
        <input
          type="text"
          placeholder="Insira o nome da oficina"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div>
        <label className="block text-gray-600 font-medium mb-2">CNPJ</label>
        <input
          type="text"
          placeholder="Insira o CNPJ"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div className="sm:col-span-2">
        <label className="block text-gray-600 font-medium mb-2">Endereço</label>
        <input
          type="text"
          placeholder="Insira o endereço"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
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
    <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-gray-600 font-medium mb-2">Nome</label>
        <input
          type="text"
          placeholder="Insira seu nome"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div>
        <label className="block text-gray-600 font-medium mb-2">E-mail</label>
        <input
          type="email"
          placeholder="Insira seu e-mail"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div className="sm:col-span-2">
        <label className="block text-gray-600 font-medium mb-2">Senha</label>
        <input
          type="password"
          placeholder="Insira sua senha"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <button className="sm:col-span-2 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
        Salvar Alterações
      </button>
    </form>
  </section>
</div>

    )
}