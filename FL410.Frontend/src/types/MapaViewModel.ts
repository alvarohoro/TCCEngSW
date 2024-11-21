type Aeronave = {
    marcas: string;
    fabricante: string;
    modelo: string;
    numeroDeSerie: string;
    dataInstalacao: string;
    posicao: string;
  };
  
  type Helice = {
    fabricante: string;
    modelo: string;
    numeroDeSerie: string;
    tsn: string; // Tempo Desde Novo
    tso: string; // Tempo Desde Overhaul
  };
  
  type ADRegistro = {
    numero: string;
    bsOutros: string | null;
    categoria: string | null;
    frequencia: string | null;
    data: string | null;
    horas: string | null;
    registroPrimario: string | null;
    vencimento: string | null;
    observacoes: string | null;
  };
  
  type Empresa = {
    nome: string;
    cidadeEstado: string;
    com: string;
    data: string;
    inspetor: {
      nome: string;
      canac: string;
      crea: string;
    };
  };
  
  export type MapaViewModel = {
    aeronave: Aeronave;
    helice: Helice;
    adRegistros: ADRegistro[];
    empresa: Empresa;
  };
  