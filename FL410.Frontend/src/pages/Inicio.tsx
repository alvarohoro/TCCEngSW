export default function Inicio() {

    const ProgressBar = ({ percentage }: { percentage: number }) => {
        return (
            <svg width="100%" height="25">
                <rect width="100%" height="100%" fill="#e5e7eb" />
                <rect width={`${percentage}%`} height="100%" fill="#34d399" />
                <text x="50%" y="50%" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" dy=".3em">
                    {percentage}%
                </text>
            </svg>
        );
    };


    return (
        <>

            <div className="p-8 bg-gray-100 min-h-screen">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {/* Card de número - Aeronaves em Operação */}
                    <div className="bg-white shadow-xl rounded-lg p-6 border-l-4 border-blue-500">
                        <h3 className="text-2xl font-semibold text-gray-800">Aeronaves controladas</h3>
                        <p className="text-gray-600 mt-2">Cadastradas no sistema</p>
                        <div className="mt-4">
                            <h2 className="text-5xl font-bold text-gray-800">42</h2>
                            <p className="text-gray-500 text-lg mt-2">Aeronaves cadastradas no momento</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-xl rounded-lg p-6 border-l-4 border-yellow-500">
                        <h3 className="text-2xl font-semibold text-gray-800">Diretrizes analisadas</h3>
                        <p className="text-gray-600 mt-2">Quantidade de diretrizes analisadas</p>
                        <div className="mt-4">
                            <ProgressBar percentage={92} />
                        </div>
                        <p className="text-gray-500 text-lg mt-2">Existem 8% de diretrizes pendentes de análise</p>
                    </div>


                    {/* Card de número - Aeronaves em Operação */}
                    <div className="bg-white shadow-xl rounded-lg p-6 border-l-4 border-orange-400">
                        <h3 className="text-2xl font-semibold text-gray-800">Novas diretrizes (90 dias)</h3>
                        <p className="text-gray-600 mt-2">Número de novas DAs emitidas nos últimos 90 dias </p>
                        <div className="mt-4">
                            <h2 className="text-5xl font-bold text-gray-800">11</h2>
                            <p className="text-gray-500 text-lg mt-2">DAs emitidas nos últimos 90 dias</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-xl rounded-lg p-6 border-l-4 border-purple-500">
                        <h3 className="text-2xl font-semibold text-gray-800">Autoridades e Diretrizes de Aeronavegabilidade</h3>
                        <p><a target="_blank" href="https://sistemas.anac.gov.br/certificacao/DA/DA.asp" className="text-gray-600 mt-1 hover:border-b-green-500 hover:border-b-2 hover:bg-gray-100">ANAC (Brasil) </a></p>
                        <p><a target="_blank" href="https://www.faa.gov/regulations_policies/airworthiness_directives" className="text-gray-600 mt-1 hover:border-b-green-500 hover:border-b-2 hover:bg-gray-100">FAA (EUA)</a></p>
                        <p><a target="_blank" href="https://wwwapps.tc.gc.ca/Saf-Sec-Sur/2/cawis-swimn/AD_as.aspx" className="text-gray-600 mt-1 hover:border-b-green-500 hover:border-b-2 hover:bg-gray-100">TCCA (Canadá)</a></p>
                        <p><a target="_blank" href="https://www.caa.co.uk/commercial-industry/aircraft/airworthiness/continuing-airworthiness/airworthiness-directives/" className="text-gray-600 mt-1 hover:border-b-green-500 hover:border-b-2 hover:bg-gray-100">CAA (Inglaterra)</a></p>
                        <p><a target="_blank" href="https://ad.easa.europa.eu/" className="text-gray-600 mt-1 hover:border-b-green-500 hover:border-b-2 hover:bg-gray-100">EASA (União Européia)</a></p>
                    </div>

                    {/* Card 1 - Aeronave */}
                    <div className="bg-white shadow-xl rounded-lg p-6 border-l-4 border-gray-500">
                        <h3 className="text-2xl font-semibold text-gray-800">Aeronave Cessna 172</h3>
                        <p className="text-gray-600 mt-2">Classe: Monomotor</p>
                        <p className="text-gray-600 mt-1">Capacidade de passageiros: 4</p>
                        <p className="text-gray-600 mt-1">Essa é a aeronave que mais se atende na oficina</p>
                    </div>

                    {/* Card 2 - Diretrizes de Aeronavegabilidade */}


                    {/* Card 3 - Motor */}
                    <div className="bg-white shadow-xl rounded-lg p-6 border-l-4 border-gray-500">
                        <h3 className="text-2xl font-semibold text-gray-800">Motor Lycoming O-360</h3>
                        <p className="text-gray-600 mt-2">Tipo: Piston</p>
                        <p className="text-gray-600 mt-1">Potência: 180 HP</p>
                        <p className="text-gray-600 mt-1">Esse é o motor que mais se atende na oficina</p>
                    </div>

                    {/* Card 4 - Hélice */}
                    <div className="bg-white shadow-xl rounded-lg p-6 border-l-4 border-gray-500">
                        <h3 className="text-2xl font-semibold text-gray-800">Hélice McCauley 2-Blades</h3>
                        <p className="text-gray-600 mt-2">Material: Alumínio</p>
                        <p className="text-gray-600 mt-1">Diâmetro: 76 polegadas</p>
                        <p className="text-gray-600 mt-1">Essa é a hélice que mais se atende na oficina</p>
                    </div>

                    {/* Card 5 - Equipamento de Navegação */}
                    <div className="bg-white shadow-xl rounded-lg p-6 border-l-4 border-gray-500">
                        <h3 className="text-2xl font-semibold text-gray-800">Sistema de Navegação Garmin G1000</h3>
                        <p className="text-gray-600 mt-2">Tipo: Glass Cockpit</p>
                        <p className="text-gray-600 mt-1">Função: Navegação por GPS e Radar Meteorológico</p>
                        <p className="text-gray-600 mt-1">Esse é o componente que mais se atende na oficina</p>
                    </div>

                


                </div>


            </div>


        </>
    )
}