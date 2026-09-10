export type PageRoute = 
  | 'home'
  | 'protecao'
  | 'beneficios'
  | 'sinistro-eventos'
  | 'area-associado'
  | 'cotacao'
  | 'contato'
  | 'conteudo'
  | 'privacidade'
  | 'termos';

export interface BannerSlide {
  id: number;
  image: string;
  imageAlt: string;
  tag?: string;
  title: string;
  subtitle: string;
  complement: string;
  ctaText: string;
  ctaTarget: PageRoute | string;
  isExternalLink?: boolean;
  isSusepSlide?: boolean;
}

export interface BenefitItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image?: string;
  category: 'assistencia' | 'protecao' | 'rastreamento' | 'clube';
  conditions: string;
  coverageLimits?: string;
}

export interface EventArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  date: string;
  imageUrl: string;
  author: string;
  readTime: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'geral' | 'protecao' | 'susep' | 'assistencia' | 'associado';
}

export interface QuoteFormData {
  vehicleType: 'carro' | 'moto' | 'caminhonete';
  licensePlate: string;
  brand: string;
  model: string;
  manufactureYear: string;
  modelYear: string;
  fuelType: string;
  estimatedFipeValue: string;
  usageType: 'particular' | 'aplicativo' | 'comercial';
  ownerName: string;
  ownerCpf: string;
  birthDate: string;
  zipCode: string;
  city: string;
  state: string;
  phoneWhatsapp: string;
  email: string;
  acceptedTerms: boolean;
}
