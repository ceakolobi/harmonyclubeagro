import React, { useState } from 'react';
import { PageRoute } from '../types';
import { EVENTS_ARTICLES } from '../data/harmonyData';
import { CONFIG } from '../config';
import { openWhatsApp, trackEvent } from '../services/analytics';
import { ShieldAlert, AlertTriangle, PhoneCall, CheckCircle2, FileText, ArrowRight, ShieldCheck, Car, Radio, Shield, HelpCircle } from 'lucide-react';

interface SinistroEventosPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const SinistroEventosPage: React.FC<SinistroEventosPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'sinistro' | 'eventos'>('sinistro');

  const steps = [
    { num: "1", title: "Priorize a Segurança", desc: "Verifique se há feridos, sinalize o local com o triângulo e permaneça em local seguro." },
    { num: "2", title: "Entre em Contato com a Assistência", desc: "Ligue gratuitamente para nosso 0800 700 8090 ou acione a central emergencial via WhatsApp." },
    { num: "3", title: "Informe os Dados Solicitados", desc: "Tenha em mãos a placa do veículo, localização exata e dados da CNH/CRLV do motorista." },
    { num: "4", title: "Siga as Orientações", desc: "Em casos de furto/roubo ou acidentes com terceiros, elabore o Boletim de Ocorrência (B.O.)." },
    { num: "5", title: "Aguarde o Atendimento", desc: "Acompanhe a chegada do prestador de socorro ou guincho enviado pela nossa central." }
  ];

  const categories = [
    { title: "Colisão / Acidente", desc: "Envio de guincho e orientação para registro de fotos e B.O." },
    { title: "Furto ou Roubo", desc: "Registro imediato na central e acionamento do rastreamento." },
    { title: "Pane Mecânica / Elétrica", desc: "Envio de socorro no local ou guincho até oficina." },
    { title: "Pneu Furado / Chaveiro", desc: "Substituição pelo estepe ou abertura das portas do veículo." },
    { title: "Pane Seca (Combustível)", desc: "Reboque emergencial até o posto de abastecimento mais próximo." },
    { title: "Outros Eventos", desc: "Orientação individualizada para demais situações cobertas pelo plano." }
  ];

  return (
    <div className="w-full space-y-12 py-10 bg-slate-50 dark:bg-slate-900 transition-colors">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-rose-950 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4 animate-pulse" />
            ATENDIMENTO EMERGENCIAL 24H & INFORMATIVOS
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight leading-tight">
            Sinistro & Eventos
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Orientações imediatas para situações de emergência e comunicados oficiais sobre a atuação da Harmony Clube.
          </p>

          {/* Emergency Direct Call Button */}
          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href={`tel:${CONFIG.PHONE_ASSISTANCE_24H.replace(/\D/g, '')}`}
              className="px-6 py-3.5 rounded-xl font-black text-xs tracking-wider uppercase text-white bg-rose-600 hover:bg-rose-700 shadow-xl shadow-rose-600/30 transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              LIGAR ASSISTÊNCIA 24H: {CONFIG.PHONE_ASSISTANCE_24H}
            </a>
            
            <button
              onClick={() => openWhatsApp("EMERGÊNCIA: Preciso de auxílio urgente para meu veículo.")}
              className="px-6 py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all"
            >
              ACIONAR VIA WHATSAPP
            </button>
          </div>
        </div>
      </section>

      {/* Tab Switcher */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex border-b border-slate-200 dark:border-slate-800">
          <button
            onClick={() => setActiveTab('sinistro')}
            className={`py-4 px-6 font-extrabold text-sm border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'sinistro'
                ? 'border-rose-500 text-rose-600 dark:text-rose-400 bg-rose-500/5'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            PROCEDIMENTOS DE SINISTRO
          </button>
          <button
            onClick={() => setActiveTab('eventos')}
            className={`py-4 px-6 font-extrabold text-sm border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'eventos'
                ? 'border-orange-500 text-orange-600 dark:text-orange-400 bg-orange-500/5'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            EVENTOS E COMUNICADOS OFICIAIS
          </button>
        </div>
      </section>

      {/* Tab Content 1: Sinistro */}
      {activeTab === 'sinistro' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* 5 Mandatory Steps */}
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              5 Passos Imediatos em Caso de Evento ou Sinistro
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {steps.map((step) => (
                <div key={step.num} className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-500 font-extrabold text-sm flex items-center justify-center font-display">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm font-display">{step.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Event Categories */}
          <div className="space-y-6 pt-6">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Categorias de Ocorrência Atendidas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md space-y-2">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base font-display flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Callout */}
          <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-2xl font-bold font-display">Precisa de Suporte neste Momento?</h2>
              <p className="text-slate-300 text-xs">Nossa central de emergência opera 24 horas por dia, 7 dias por semana em todo o Brasil.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => openWhatsApp("Olá! Preciso acionar a assistência emergencial para meu veículo.")}
                className="px-6 py-3 rounded-xl font-extrabold text-xs text-white bg-rose-600 hover:bg-rose-700 transition-colors"
              >
                ACIONAR ASSISTÊNCIA
              </button>
              <button
                onClick={() => openWhatsApp("Olá! Gostaria de falar com o atendimento da Harmony.")}
                className="px-6 py-3 rounded-xl font-bold text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors"
              >
                FALAR COM ATENDIMENTO
              </button>
            </div>
          </div>

        </section>
      )}

      {/* Tab Content 2: Eventos e Comunicados */}
      {activeTab === 'eventos' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EVENTS_ARTICLES.map((art) => (
              <div
                key={art.id}
                className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-52 overflow-hidden relative">
                  <img src={art.imageUrl} alt={art.title} className="w-full h-full object-cover" loading="lazy" />
                  <span className="absolute top-4 left-4 bg-slate-900/90 text-orange-400 text-xs font-extrabold px-3 py-1 rounded-md border border-slate-700">
                    {art.category}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>{art.date}</span>
                      <span>{art.readTime}</span>
                    </div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display leading-snug">
                      {art.title}
                    </h2>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {art.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-slate-400">Por: {art.author}</span>
                    <button
                      onClick={() => onNavigate('conteudo')}
                      className="text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-1"
                    >
                      Ler matéria completa <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
};
