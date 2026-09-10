import React from 'react';
import { HeroCarousel } from '../components/HeroCarousel';
import { FAQAccordion } from '../components/FAQAccordion';
import { BENEFITS, EVENTS_ARTICLES } from '../data/harmonyData';
import { PageRoute } from '../types';
import { CONFIG } from '../config';
import { openWhatsApp, trackEvent } from '../services/analytics';
import { 
  ShieldCheck, 
  ClockAlert, 
  Radio, 
  Headphones, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  Car, 
  Bike, 
  Truck, 
  Calculator, 
  UserCheck, 
  AlertTriangle, 
  ArrowRight,
  Shield,
  PhoneCall,
  FileText
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const whyChooseCards = [
    {
      icon: ClockAlert,
      title: "Assistência 24 Horas",
      text: "Central própria operacional 24/7 para socorro em qualquer lugar do Brasil, com guincho, chaveiro e mecânico.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20"
    },
    {
      icon: Shield,
      title: "Proteção Sem Restrição",
      text: "Sem consulta ao SPC/Serasa e sem alteração de valor por perfil de condutor. Proteção justa para seu veículo.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20"
    },
    {
      icon: Radio,
      title: "Tecnologia de Rastreamento",
      text: "Monitoramento com aplicativo próprio em tempo real, cercas virtuais e relatórios de velocidade.",
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20"
    },
    {
      icon: Headphones,
      title: "Atendimento Humanizado",
      text: "Equipe especializada e empática pronta para resolver com agilidade no momento de maior necessidade.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20"
    },
    {
      icon: Sparkles,
      title: "Clube de Benefícios",
      text: "Descontos exclusivos em redes de farmácias, oficinas credenciadas, lojas parceiras e postos de combustível.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20"
    },
    {
      icon: Zap,
      title: "Facilidade e Agilidade",
      text: "Adesão 100% digital, vistoria via celular rápida e sem burocracias desnecessárias.",
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20"
    }
  ];

  const howItWorksSteps = [
    {
      number: "01",
      title: "Faça sua Cotação",
      text: "Preencha a placa ou dados do seu veículo em menos de 1 minuto."
    },
    {
      number: "02",
      title: "Escolha seu Plano",
      text: "Selecione as assistências e coberturas ideais para a sua rotina."
    },
    {
      number: "03",
      title: "Vistoria Digital",
      text: "Realize a vistoria prévia pelo próprio celular sem sair de casa."
    },
    {
      number: "04",
      title: "Proteção Ativa",
      text: "Pronto! Seu veículo protegido com assistência 24h em todo o país."
    }
  ];

  return (
    <div className="w-full space-y-0">
      
      {/* 1. HERO ROTATING BANNER */}
      <HeroCarousel onNavigate={onNavigate} />

      {/* 3. POR QUE ESCOLHER A HARMONY */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              Por Que Escolher a Harmony
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
              Proteção pensada para você e seu veículo
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
              A combinação perfeita entre tecnologia moderna, assistência qualificada e gestão transparente.
            </p>
          </div>

          {/* 6 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-white dark:bg-slate-800 border ${card.borderColor} shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group`}
                >
                  <div className={`w-12 h-12 rounded-xl ${card.bgColor} ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-display">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {card.text}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. BENEFÍCIOS HIGHLIGHTS */}
      <section className="py-20 bg-slate-100 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                Vantagens Exclusivas
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
                Principais Serviços e Benefícios
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
                Conheça a estrutura completa que acompanha seu veículo em qualquer situação.
              </p>
            </div>

            <button
              onClick={() => onNavigate('beneficios')}
              className="px-5 py-3 rounded-xl font-bold text-xs text-orange-600 dark:text-orange-400 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 transition-all flex items-center gap-2 self-start md:self-auto"
            >
              <span>VER TODOS OS BENEFÍCIOS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Benefits Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.slice(0, 4).map((b) => (
              <div
                key={b.id}
                className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group"
              >
                {/* Image */}
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <span className="absolute bottom-3 left-3 text-xs font-extrabold text-white bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700 backdrop-blur-sm">
                    {b.title}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {b.shortDesc}
                  </p>
                  
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                    <strong className="text-emerald-600 dark:text-emerald-400">Condições:</strong> {b.conditions}
                  </div>

                  <button
                    onClick={() => onNavigate('beneficios')}
                    className="w-full py-2 px-3 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-orange-500 hover:text-white transition-all text-center"
                  >
                    SAIBA MAIS
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. COMO FUNCIONA */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-4 h-4" />
              Simplicidade e Agilidade
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-display tracking-tight">
              Como Funciona a Adesão
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Sem papelada excessiva ou complicações. Seu veículo protegido em 4 passos simples.
            </p>
          </div>

          {/* Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 relative space-y-4 hover:border-orange-500/50 transition-colors"
              >
                <div className="text-4xl font-black text-orange-500 font-display">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-white font-display">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('cotacao')}
              className="px-8 py-4 rounded-xl text-sm font-extrabold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-xl shadow-orange-500/25 transition-all transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Calculator className="w-5 h-5" />
              QUERO PROTEGER MEU VEÍCULO AGORA
            </button>
          </div>

        </div>
      </section>

      {/* 6. SERVIÇOS / TIPOS DE VEÍCULOS */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
              Proteção para Diferentes Categorias
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
              Planos customizados para a necessidade específica de cada tipo de condutor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1: Carros */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg text-center space-y-4 hover:border-orange-500 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mx-auto">
                <Car className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                Automóveis de Passeio & App
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Proteção abrangente para carros particulares e veículos de motoristas por aplicativo, táxis e frotas leves.
              </p>
              <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-2 text-left pt-2 border-t border-slate-100 dark:border-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Colisão, furto, roubo e incêndio</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Reboque 24 horas</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Proteção contra terceiros</li>
              </ul>
              <button
                onClick={() => onNavigate('cotacao')}
                className="w-full py-3 rounded-xl bg-orange-500 text-white font-bold text-xs hover:bg-orange-600 transition-colors"
              >
                COTAR CARRO
              </button>
            </div>

            {/* Category 2: Motos */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg text-center space-y-4 hover:border-emerald-500 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                <Bike className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                Motocicletas
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Proteção eficiente para quem utiliza a moto para trabalho ou lazer diário no trânsito urbano ou estrada.
              </p>
              <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-2 text-left pt-2 border-t border-slate-100 dark:border-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Socorro na estrada e guincho</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Rastreamento via app inclusos</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Cobertura para furto e roubo</li>
              </ul>
              <button
                onClick={() => onNavigate('cotacao')}
                className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors"
              >
                COTAR MOTO
              </button>
            </div>

            {/* Category 3: Caminhonetes */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg text-center space-y-4 hover:border-indigo-500 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mx-auto">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                Caminhonetes & Utilitários
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Estrutura sob medida para veículos de carga leve, picape e utilitários comerciais de maior porte.
              </p>
              <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-2 text-left pt-2 border-t border-slate-100 dark:border-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Guincho pesado reforçado</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Atendimento em rodovias</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Cobertura em todo país</li>
              </ul>
              <button
                onClick={() => onNavigate('cotacao')}
                className="w-full py-3 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition-colors"
              >
                COTAR CAMINHONETE
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 7. ÁREA DO ASSOCIADO & SINISTRO HIGHLIGHTS */}
      <section className="py-16 bg-slate-900 border-t border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Área do Associado */}
          <div className="bg-slate-800/90 rounded-2xl p-8 border border-slate-700 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                Já é Associado Harmony?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Acesse o Portal do Associado para emitir 2ª via de boletos, consultar o status do seu veículo, verificar regulamentos ou solicitar atendimento.
              </p>
            </div>
            <button
              onClick={() => onNavigate('area-associado')}
              className="w-full py-3.5 px-6 rounded-xl font-extrabold text-xs text-white bg-orange-500 hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
            >
              <span>ACESSAR ÁREA DO ASSOCIADO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Precisa Comunicar Sinistro? */}
          <div className="bg-slate-800/90 rounded-2xl p-8 border border-slate-700 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                Precisa Comunicar um Evento ou Sinistro?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Em casos de colisão, furto, roubo ou pane na estrada, siga as orientações de segurança e acione nossa assistência emergencial 24 horas.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onNavigate('sinistro-eventos')}
                className="flex-1 py-3.5 px-4 rounded-xl font-bold text-xs text-white bg-rose-600 hover:bg-rose-700 transition-colors flex items-center justify-center gap-2"
              >
                <span>ORIENTAÇÕES DE SINISTRO</span>
              </button>
              <a
                href={`tel:${CONFIG.PHONE_ASSISTANCE_24H.replace(/\D/g, '')}`}
                className="flex-1 py-3.5 px-4 rounded-xl font-bold text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>LIGAR 0800 24H</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 8. EVENTOS E COMUNICADOS RECENTES */}
      <section className="py-20 bg-slate-100 dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                Informativos & Transparência
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
                Eventos, Notícias e Comunicados
              </h2>
            </div>

            <button
              onClick={() => onNavigate('conteudo')}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center gap-2 self-start md:self-auto"
            >
              <span>VER TODAS AS NOTÍCIAS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EVENTS_ARTICLES.slice(0, 2).map((art) => (
              <div
                key={art.id}
                className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row"
              >
                <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden relative">
                  <img src={art.imageUrl} alt={art.title} className="w-full h-full object-cover" loading="lazy" />
                  <span className="absolute top-3 left-3 bg-slate-900/90 text-orange-400 text-[10px] font-extrabold px-2.5 py-1 rounded-md border border-slate-700">
                    {art.category}
                  </span>
                </div>
                <div className="sm:w-3/5 p-6 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <span className="text-[11px] font-medium text-slate-400">{art.date}</span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug font-display line-clamp-2">
                      {art.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                      {art.summary}
                    </p>
                  </div>
                  <button
                    onClick={() => onNavigate('conteudo')}
                    className="text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline inline-flex items-center gap-1 self-start pt-2"
                  >
                    Ler matéria completa <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. FAQ ACCORDION */}
      <FAQAccordion />

      {/* 10. CTA FINAL DE CONVERSÃO */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-orange-400" />
            Proteção Inteligente e Justa
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight leading-tight">
            Pronto para Dirigir com Mais Tranquilidade?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Faça sua cotação sem compromisso em menos de 1 minuto ou fale diretamente com nossos atendentes pelo WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('cotacao')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-xl shadow-orange-500/30 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Calculator className="w-5 h-5" />
              SIMULAR MINHA COTAÇÃO AGORA
            </button>

            <button
              onClick={() => openWhatsApp("Olá! Quero cotar a proteção veicular da Harmony.")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all flex items-center justify-center gap-2"
            >
              FALAR NO WHATSAPP
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
