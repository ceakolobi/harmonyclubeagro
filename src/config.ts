/**
 * Configuração central da Harmony Clube de Benefícios
 * Todos os dados cadastrais, regulatórios e parâmetros de integrações
 */

export interface HarmonyConfig {
  COMPANY_NAME: string;
  LEGAL_NAME: string;
  CNPJ: string;
  WHATSAPP_NUMBER: string;
  WHATSAPP_DISPLAY: string;
  PHONE: string;
  PHONE_ASSISTANCE_24H: string;
  EMAIL: string;
  ADDRESS: string;
  CITY: string;
  STATE: string;
  ZIP: string;
  HOURS: string;
  HOURS_ASSISTANCE: string;
  SOCIAL_LINKS: {
    instagram: string;
    facebook: string;
    linkedin: string;
    youtube: string;
  };
  CRM_URL: string;
  PORTAL_ASSOCIADO_URL: string;
  API_URL: string;
  FIPE_API_URL: string;
  GA_ID: string;
  GTM_ID: string;
  META_PIXEL_ID: string;
  SUSEP_REGISTRATION_NUMBER: string;
  SUSEP_OFFICIAL_URL: string;
  SUSEP_CONSULTA_URL: string;
  LEGAL_DISCLAIMER: string;
}

export const CONFIG: HarmonyConfig = {
  COMPANY_NAME: "HARMONY CLUBE DE BENEFÍCIOS",
  LEGAL_NAME: "ASSOCIAÇÃO DE PROTEÇÃO VEICULAR E SOCORRO MUTUO E BENEFÍCIOS HARMONY",
  CNPJ: "39.583.767/0001-26",
  WHATSAPP_NUMBER: "5511999998888", // Número oficial configurável
  WHATSAPP_DISPLAY: "(11) 99999-8888",
  PHONE: "0800 591 2000",
  PHONE_ASSISTANCE_24H: "0800 700 8090",
  EMAIL: "contato@harmonyclube.com.br",
  ADDRESS: "Av. Paulista, 1000 - Conj. 1201 - Bela Vista",
  CITY: "São Paulo",
  STATE: "SP",
  ZIP: "01310-100",
  HOURS: "Segunda a Sexta: 08h às 18h",
  HOURS_ASSISTANCE: "Assistência Emergencial e Sinistro: 24 Horas / 7 Dias por Semana",
  SOCIAL_LINKS: {
    instagram: "https://instagram.com/harmonyclube",
    facebook: "https://facebook.com/harmonyclube",
    linkedin: "https://linkedin.com/company/harmonyclube",
    youtube: "https://youtube.com/@harmonyclube"
  },
  CRM_URL: "https://app.harmonyclube.com.br/crm",
  PORTAL_ASSOCIADO_URL: "https://associado.harmonyclube.com.br",
  API_URL: "https://api.harmonyclube.com.br",
  FIPE_API_URL: "https://parallelum.com.br/fipe/api/v1",
  GA_ID: "", // Configurar conforme Google Analytics oficial
  GTM_ID: "", // Configurar conforme Google Tag Manager oficial
  META_PIXEL_ID: "", // Configurar conforme Meta Pixel oficial
  SUSEP_REGISTRATION_NUMBER: "INSERIR NÚMERO/CÓDIGO OFICIAL, SE APLICÁVEL",
  SUSEP_OFFICIAL_URL: "https://www.gov.br/susep/pt-br",
  SUSEP_CONSULTA_URL: "https://www.gov.br/susep/pt-br/assuntos/entidades-supervisionadas",
  LEGAL_DISCLAIMER: "A Harmony Clube de Benefícios é uma associação de socorro mútuo e proteção patrimonial constituída na forma do Código Civil Brasileiro, atuando dentro do marco regulatório aplicável às entidades mutualistas perante a SUSEP. A associação não é seguradora convencional e seus benefícios são custeados por meio de rateio mútuo entre associados, em conformidade estrita com o seu Estatuto Social e Regulamento Interno."
};
