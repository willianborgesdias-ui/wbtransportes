import { ServiceItem, StatItem, CoverageItem } from "./types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "transporte-coleta",
    iconName: "truck",
    title: "Transporte & Coleta",
    description: "Entregas rápidas de mercadorias, coleta de documentos, retiradas em empresas e envios para aeroporto com roteiros otimizados para máxima agilidade em todo o litoral.",
    features: [
      "Retirar em Empresa",
      "Envios para Aeroporto",
      "Envio Aéreo & Rodoviário",
      "Entregas Dedicadas"
    ],
    colorTheme: "blue"
  },
  {
    id: "suporte-adm",
    iconName: "file-text",
    title: "Suporte Administrativo",
    description: "Serviços externos essenciais: cartórios, repartições públicas, liberações de BL e trâmites burocráticos especializados.",
    features: ["Protocolos & Assinaturas", "Fluxo Logístico BL", "Gestão de Documentos"],
    colorTheme: "pink"
  },
  {
    id: "parcerias",
    iconName: "zap",
    title: "Parcerias Estratégicas",
    description: "Integramos sua operação como braço logístico eficiente, garantindo que você foque no seu core business enquanto cuidamos do fluxo.",
    features: ["Terceirização Inteligente", "Disponibilidade Total", "Relatórios de Entrega"],
    colorTheme: "green"
  }
];

export const STATS_DATA: StatItem[] = [
  {
    value: "100%",
    label: "Comprometimento",
    colorTheme: "blue"
  },
  {
    value: "SC",
    label: "Foco Regional",
    colorTheme: "pink"
  },
  {
    value: "+ Agilidade",
    label: "Menor Tempo",
    colorTheme: "green"
  },
  {
    value: "Base",
    label: "Itajaí - SC",
    colorTheme: "gray"
  }
];

export const COVERAGE_DATA: CoverageItem[] = [
  {
    city: "Itajaí",
    suffix: "(Centro-Base)",
    theme: "blue"
  },
  {
    city: "Litoral Norte",
    theme: "pink"
  },
  {
    city: "Vale Itajaí",
    theme: "green"
  },
  {
    city: "Planalto",
    theme: "gray"
  }
];
