import { useDA } from "../api/hooks/useDA";

export default function DA() {
    const { useDAs } = useDA();
    const DAs = useDAs();
    
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">DAs</h1>

            {DAs.isLoading && (
                <p className="text-gray-600">Carregando...</p>
            )}
            {DAs.isError && (
                <p className="text-red-600">Ocorreu um erro ao carregar as DAs</p>
            )}
            {DAs.isSuccess && (
                <div className="overflow-x-auto">
                    <div className="mb-4">
                        <button
                            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-200"
                        >
                            Adicionar DA
                        </button>
                    </div>
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead>
                            <tr className="bg-gray-200 text-left">
                                <th className="px-4 py-2 font-medium text-gray-700">Número Emenda</th>
                                <th className="px-4 py-2 font-medium text-gray-700">Situação</th>
                                <th className="px-4 py-2 font-medium text-gray-700">Produto</th>
                                <th className="px-4 py-2 font-medium text-gray-700">Efetividade</th>
                                <th className="px-4 py-2 font-medium text-gray-700">Língua</th>
                                <th className="px-4 py-2 font-medium text-gray-700">Revogou</th>
                                <th className="px-4 py-2 font-medium text-gray-700">Documentos</th>
                                <th className="px-4 py-2 font-medium text-gray-700">Sistema</th>
                                <th className="px-4 py-2 font-medium text-gray-700">Fabricante</th>
                                <th className="px-4 py-2 font-medium text-gray-700">Modelo</th>
                                <th className="px-4 py-2 font-medium text-gray-700">Número Diretriz</th>
                                <th className="px-4 py-2 font-medium text-gray-700">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {DAs.data?.data.map((da, index) => (
                                <tr
                                    key={da.id}
                                    className={`${
                                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                                    } hover:bg-gray-50`}
                                >
                                    <td className="px-4 py-2 text-gray-800">{da.numeroEmenda}</td>
                                    <td className="px-4 py-2 text-gray-800">{da.situacao}</td>
                                    <td className="px-4 py-2 text-gray-800">{da.produto}</td>
                                    <td className="px-4 py-2 text-gray-800">{da.efetividade}</td>
                                    <td className="px-4 py-2 text-gray-800">{da.lingua}</td>
                                    <td className="px-4 py-2 text-gray-800">{da.revogou}</td>
                                    <td className="px-4 py-2 text-gray-800">{da.documentos}</td>
                                    <td className="px-4 py-2 text-gray-800">{da.sistema}</td>
                                    <td className="px-4 py-2 text-gray-800">{da.fabricante}</td>
                                    <td className="px-4 py-2 text-gray-800">{da.modelo}</td>
                                    <td className="px-4 py-2 text-gray-800">{da.numeroDiretriz}</td>
                                    <td className="px-4 py-2 text-gray-800">
                                        <button
                                            className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-200 mr-2"
                                        >
                                            Editar
                                        </button>
                                        <button
                                            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
                                        >
                                            Excluir
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
