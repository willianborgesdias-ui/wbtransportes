import { ServiceItem, StatItem, CoverageItem, PaymentPlanItem, SecurityFeatureItem } from "./types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "transporte-coleta",
    iconName: "truck",
    title: "Coletas & Entregas Express",
    description: "Entregas ultrarrápidas de mercadorias, coleta de malotes e envelopes, retiradas urgentes em empresas, portos e despachos aeroportuários com rotas inteligentes.",
    features: [
      "Retirada Rápida em Empresas",
      "Envios & Retiradas em Aeroporto",
      "Despacho Portuário & Aduaneiro",
      "Entregas Dedicadas com Motoboy"
    ],
    colorTheme: "blue"
  },
  {
    id: "suporte-adm",
    iconName: "file-text",
    title: "Suporte Administrativo & Cartórios",
    description: "Serviços externos estratégicos: reconhecimento de firma, trâmites em cartórios, protocolos em órgãos públicos, liberação de BL e trâmites portuários.",
    features: ["Protocolos & Assinaturas", "Fluxo Logístico de BL", "Gestão de Documentos Confidenciais"],
    colorTheme: "pink"
  },
  {
    id: "parcerias",
    iconName: "zap",
    title: "Parcerias Corporativas",
    description: "Integramos a WB Coletas & Entregas Express como o braço logístico da sua empresa, garantindo tranquilidade enquanto sua equipe foca no negócio principal.",
    features: ["Terceirização de Motoboys", "Disponibilidade de Pronta Resposta", "Relatórios e Protocolos Digitais"],
    colorTheme: "green"
  }
];

export const PAYMENT_PLANS: PaymentPlanItem[] = [
  {
    id: "contrato",
    title: "Clientes com Contrato",
    badge: "Plano Empresarial",
    tagline: "Ideal para empresas, tradings, despachantes, indústrias e escritórios com demandas recorrentes.",
    paymentMethod: "Boleto Bancário ou PIX Empresarial",
    billingPeriod: "Faturamento Quinzenal (Fechamento a cada 15 dias)",
    features: [
      "Faturamento quinzenal com Nota Fiscal consolidada",
      "Pagamento facilitado via Boleto Bancário ou PIX",
      "Tarifas diferenciadas e descontos progressivos por volume",
      "Relatório quinzenal completo com comprovantes e protocolos assinados",
      "Prioridade VIP no acionamento de motoboys e coletas expressas",
      "Atendimento direto com gestor de conta via WhatsApp"
    ],
    popular: true,
    colorTheme: "blue"
  },
  {
    id: "avulso",
    title: "Clientes Avulsos",
    badge: "Sem Mensalidade",
    tagline: "Perfeito para demandas pontuais, entregas esporádicas e emergências sem compromisso fixo.",
    paymentMethod: "Cartão de Crédito ou PIX Instantâneo",
    billingPeriod: "Pagamento por Corrida Executada",
    features: [
      "Sem carência, mensalidade ou contrato de fidelidade",
      "Pagamento flexível no Cartão de Crédito (à vista ou parcelado)",
      "Pagamento instantâneo via PIX com chave e QR Code",
      "Acionamento imediato em minutos direto pelo WhatsApp",
      "Comprovante fotográfico e assinatura digital da entrega na hora",
      "Atendimento rápido e transparente com orçamento prévio"
    ],
    popular: false,
    colorTheme: "green"
  }
];

export const SECURITY_FEATURES: SecurityFeatureItem[] = [
  {
    title: "Portas de Rede Ocultas",
    description: "Servidores com portas públicas fechadas e ocultadas contra rastreamento, varreduras automatizadas e escaneamento de portas por hackers.",
    badge: "Stealth Ports"
  },
  {
    title: "Criptografia SSL 256-Bit",
    description: "Toda a transmissão de dados e solicitações de coletas é protegida por túnel seguro TLS/SSL de ponta a ponta.",
    badge: "End-to-End SSL"
  },
  {
    title: "Proteção Anti-DDoS & Firewall Ativo",
    description: "Filtros de tráfego avançados que bloqueiam requisições maliciosas, ataques de força bruta e tentativas de invasão.",
    badge: "WAF & Anti-DDoS"
  },
  {
    title: "Conformidade LGPD & Sigilo",
    description: "Total privacidade e proteção aos dados corporativos, envelopes lacrados e documentos sigilosos de sua empresa.",
    badge: "LGPD 100%"
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

