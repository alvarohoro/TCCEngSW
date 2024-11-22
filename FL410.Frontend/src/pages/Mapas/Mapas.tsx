import { useEffect, useState } from "react";
import { useAeronave } from "../../api/hooks/useAeronave";
import { AeronaveParcialViewModel } from "../../types/AeronaveParcialViewModel";
import { useMapa } from "../../api/hooks/useMapa";

export default function Mapas() {

    const { aeronavesParciais } = useAeronave();
    const [aeronavesOptions, setAeronavesOptions] = useState<{ label: string; valor: string; }[]>([]);

    // Carrega as aeronaves parciais e adiciona a opção de "DA não instalado" ao select
    const opcaoPadraoAeronave: AeronaveParcialViewModel[] = [
        { id: "", matricula: "", fabricante: "Selecione uma aeronave", modelo: "", defaultValue: true },
    ];
    if (aeronavesParciais.isSuccess) {
        const aeronavesRetornadas = aeronavesParciais.data?.data as AeronaveParcialViewModel[];
        const aeronavesComOpcoesPadrao = ([...opcaoPadraoAeronave, ...aeronavesRetornadas]);
        const aeronavesOptionsLocal = aeronavesComOpcoesPadrao.map((aeronave: AeronaveParcialViewModel) => ({
            label: `${aeronave.matricula ? `${aeronave.matricula} -` : ''} ${aeronave.fabricante ? `${aeronave.fabricante}` : ''} ${aeronave.modelo ? ` - ${aeronave.modelo}` : ''}`,
            valor: aeronave.matricula,
        }));
        // Verifica se os novos campos são diferentes dos antigos antes de atualizar
        if (JSON.stringify(aeronavesOptionsLocal) !== JSON.stringify(aeronavesOptions)) {
            setAeronavesOptions(aeronavesOptionsLocal)
        }
    }



    // const [aeronaveSelecionada,setAeronaveSelecionada] = useState<string>("");

    // const selecionarAeronave = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //     setAeronaveSelecionada(e.target.value);
    // }

    // useEffect(()=>{
    //     console.log(`Aeronave selecioanda: ${aeronaveSelecionada}`);
    // },[aeronaveSelecionada])

    const [aeronaveSelecionada, setAeronaveSelecionada] = useState<string>("");
    const [mapaSelecionado, setMapaSelecionado] = useState<string>("");
    const [obterMapa, setObterMapa] = useState<boolean>(false);

    const { useGetMapa } = useMapa();
    const mapa = useGetMapa(aeronaveSelecionada, mapaSelecionado, obterMapa);


    useEffect(() => {
        console.log(`Mapa:`);
        console.log(mapa.data?.data);
        if (mapa.isFetched) {
            setObterMapa(false);
        }
    }, [mapa]);



    const triggerExibirMapa = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setObterMapa(true);
    }

    // const adData = [
    //     {
    //         ad: "64-20-01",
    //         bsOutros: "SB-86",
    //         cat: "N/A",
    //         freq: "N/A",
    //         data: "N/A",
    //         horas: "N/A",
    //         regPrim: "FCDA",
    //         vencim: "N/A",
    //         observ: "N/A ao número de série da hélice",
    //     },
    //     {
    //         ad: "2001-07-03",
    //         bsOutros: "N/A",
    //         cat: "N/A",
    //         freq: "N/A",
    //         data: "N/A",
    //         horas: "N/A",
    //         regPrim: "FCDA",
    //         vencim: "N/A",
    //         observ: "Hélice não revisada pela empresa Basco",
    //     },
    //     {
    //         ad: "2003-03-28",
    //         bsOutros: "HC-SB/61-227",
    //         cat: "N/A",
    //         freq: "N/A",
    //         data: "N/A",
    //         horas: "N/A",
    //         regPrim: "FCDA",
    //         vencim: "N/A",
    //         observ: "N/A ao modelo do motor",
    //     },
    //     // Adicione os demais dados aqui
    // ];
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-4">
                {/* Seletor de Filtros */}
                <form className="mb-6 w-full max-w-4xl bg-white p-4 rounded-lg shadow-md" onSubmit={triggerExibirMapa}>
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">
                        Selecione abaixo a aeronave e o tipo de mapa que deseja visualizar
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="aeronaves"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Selecionar Aeronave
                            </label>
                            <select
                                id="aeronaves"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={aeronaveSelecionada}
                                onChange={e => setAeronaveSelecionada(e.target.value)}
                            >
                                {aeronavesOptions.map((option, index) => (
                                    <option key={index} value={option.valor}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="mapas"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Selecionar Tipo de Mapa
                            </label>
                            <select
                                id="mapas"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={mapaSelecionado}
                                onChange={e => setMapaSelecionado(e.target.value)}
                            >
                                <option value="">Selecione um tipo de mapa</option>
                                <option value="aeronave">Aeronave</option>
                                <option value="helice">Hélice</option>
                                <option value="motor">Motor</option>
                                <option value="outros">Outros</option>
                            </select>
                        </div>
                    </div>
                    <button className={` ${mapa.isFetching ? 'bg-gray-500 disabled' : 'bg-blue-600'} mt-4 w-full  text-white py-2 rounded-md hover:bg-blue-700`}>
                        {mapa.isFetching ? 'Carregando' : 'Exibir'}
                    </button>
                </form>

                {/* Conteúdo Principal */}
                {mapa.isSuccess && (
                    <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                            MAPA DE SITUAÇÃO DE CUMPRIMENTO DE AD/DA {mapaSelecionado.toUpperCase()}
                        </h1>

                        {/* Informações Gerais */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div>
                                <p>
                                    <span className="font-semibold">Marcas:</span> {mapa.data?.data.aeronave.matricula}
                                </p>
                                <p>
                                    <span className="font-semibold">Fabricante:</span> {mapa.data?.data.aeronave.fabricante}
                                </p>
                                <p>
                                    <span className="font-semibold">Modelo:</span> {mapa.data?.data.aeronave.modelo}
                                </p>
                                <p>
                                    <span className="font-semibold">Nº de série:</span> {mapa.data?.data.aeronave.numeroSerie}
                                </p>
                            </div>
                            <div>
                                <p>
                                    <span className="font-semibold">Data da Instalação:</span> De fábrica
                                </p>
                                <p>
                                    <span className="font-semibold">Posição:</span> CENTRAL
                                </p>
                            </div>
                        </div>

                        {/* Dados Técnicos */}
                        {mapa.data?.data.produto && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div>
                                    <p>
                                        <span className="font-semibold">Fabricante:</span> ${mapa.data?.data.produto.fabricante}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Modelo:</span> ${mapa.data?.data.produto.modelo}
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <span className="font-semibold">Nº de Série:</span> ${mapa.data?.data.produto.numerosDeSerie}
                                    </p>
                                    <p>
                                        {/* <span className="font-semibold">TSN:</span> ${mapa.data?.data.produto.tsn} */}
                                    </p>
                                    <p>
                                        {/* <span className="font-semibold">TSO:</span> ${mapa.data?.data.produto.tso} */}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Tabela Cumprimento */}
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-gray-800 font-medium">AD nº</th>
                                        <th className="px-4 py-2 text-left text-gray-800 font-medium">BS/Outros</th>
                                        <th className="px-4 py-2 text-left text-gray-800 font-medium">CAT.</th>
                                        <th className="px-4 py-2 text-left text-gray-800 font-medium">FREQ.</th>
                                        <th className="px-4 py-2 text-left text-gray-800 font-medium">DATA</th>
                                        <th className="px-4 py-2 text-left text-gray-800 font-medium">HORAS</th>
                                        <th className="px-4 py-2 text-left text-gray-800 font-medium">REG. PRIM.</th>
                                        <th className="px-4 py-2 text-left text-gray-800 font-medium">VENCIM.</th>
                                        <th className="px-4 py-2 text-left text-gray-800 font-medium">OBSERV.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mapa.data?.data.fcdas.map((item, index) => (
                                        <tr
                                            key={index}
                                            className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                                        >
                                            <td className="px-4 py-2">{item.numeroDA}</td>
                                            <td className="px-4 py-2">{item.instrucaoReferencia}</td>
                                            <td className="px-4 py-2">{item.tipoCumprimento}</td>
                                            <td className="px-4 py-2">{item.efetividade}</td>
                                            <td className="px-4 py-2">{item.dataCumprimento}</td>
                                            <td className="px-4 py-2">{item.timeSinceLastInspection}</td>
                                            <td className="px-4 py-2">FCDA</td>
                                            <td className="px-4 py-2">{item.vencimento}</td>
                                            <td className="px-4 py-2">{item.descricaoCumprimento}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>


                        {/* Informações da Empresa */}
                        <div className="mt-6">
                            <p>
                                <span className="font-semibold">Nome da Empresa:</span> EMPRESA FICTÍCIA DE AVIAÇÃO E MANUTENÇÃO DE AERONAVES LTDA
                            </p>
                            <p>
                                <span className="font-semibold">Cidade/Estado:</span> SÃO JOSÉ DOS CAMPOS - SP
                            </p>
                            <p>
                                <span className="font-semibold">COM:</span> XXXX-01/ANAC
                            </p>
                            <p>
                                <span className="font-semibold">Data:</span> 15.11.2024
                            </p>
                            <p>
                                <span className="font-semibold">Nome do Inspetor:</span> FULANO BELTRANO DA SILVA - CANAC 123455 - CREA 0XXXXX-X
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}