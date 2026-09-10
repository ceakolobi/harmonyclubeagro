import React from 'react';
import { PageRoute } from '../types';
import { CONFIG } from '../config';
import { trackEvent, openWhatsApp } from '../services/analytics';
import { UserCheck, Car, Shield, CreditCard, FileText, PhoneCall, HelpCircle, Folder, ExternalLink, Lock } from 'lucide-react';

interface AreaAssociadoPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const AreaAssociadoPage: React.FC<AreaAssociadoPageProps> = () => {
  const portalCards = [
    { title: "Meu Veículo", desc: "Consulte os dados do seu veículo cadastrado, placa e vistoria prévia.", icon: Car },
    { title: "Meu Plano", desc: "Confira a categoria do seu plano, limites de guincho e serviços inclusos.", icon: Shield },
    { title: "Financeiro", desc: "Histórico de pagamentos do rateio associativo e situação cadastral.", icon: CreditCard },
    { title: "Emitir Boletos / Pix", desc: "Emissão de 2ª via de mensalidade para pagamento rápido via Pix ou código de barras.", icon: FileText },
    { title: "Assistência 24h", desc: "Acionamento de socorro de emergência, guincho ou chaveiro em tempo real.", icon: PhoneCall },
    { title: "Solicitações", desc: "Acompanhamento de pedidos de alteração de dados, inclusões e vistorias.", icon: HelpCircle },
    { title: "Documentos", desc: "Acesso ao Regulamento do Associado, Ficha de Filiação e manuais de assistência.", icon: Folder },
    { title: "Atendimento", desc: "Canal direto de suporte da equipe de relacionamento Harmony.", icon: UserCheck }
  ];

  const handlePortalAccess = () => {
    trackEvent('member_area_click', { destination: CONFIG.PORTAL_ASSOCIADO_URL });
    window.open(CONFIG.PORTAL_ASSOCIADO_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full space-y-12 py-10 bg-slate-50 dark:bg-slate-900 transition-colors">
      
      {/* Header Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <UserCheck className="w-4 h-4" />
            PORTAL DO ASSOCIADO
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight leading-tight">
            Área do Associado
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Sua central completa de serviços on-line. Emita 2ª via de boletos, solicite assistências e consulte as informações da sua proteção veicular.
          </p>

          {/* Main Portal Access CTA */}
          <div className="pt-2">
            <button
              onClick={handlePortalAccess}
              className="px-8 py-4 rounded-xl font-extrabold text-sm tracking-wider uppercase text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-xl shadow-orange-500/30 transition-all flex items-center gap-3 transform hover:-translate-y-0.5"
            >
              <Lock className="w-4 h-4 text-white" />
              <span>ACESSAR MINHA CONTA NO PORTAL</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portalCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div
                key={idx}
                onClick={handlePortalAccess}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-orange-500/50 transition-all duration-300 cursor-pointer group space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <IconComp className="w-6 h-6" />
                </div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                  {card.title}
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {card.desc}
                </p>
                <div className="pt-2 text-xs font-bold text-orange-600 dark:text-orange-400 group-hover:underline flex items-center gap-1">
                  <span>Acessar no Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick WhatsApp Support Box */}
      <section className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 text-white text-center space-y-4">
          <h2 className="text-2xl font-bold font-display">Precisa de Ajuda para Acessar o Portal?</h2>
          <p className="text-slate-300 text-xs max-w-lg mx-auto">
            Se você é associado e precisa de ajuda para recuperar seu login ou emitir a 2ª via de cobrança, converse com nosso suporte pelo WhatsApp.
          </p>
          <button
            onClick={() => openWhatsApp("Olá! Sou associado Harmony e preciso de auxílio para acessar meu boleto ou portal.")}
            className="px-6 py-3 rounded-xl font-bold text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all inline-flex items-center gap-2"
          >
            FALAR COM ATENDIMENTO DO ASSOCIADO
          </button>
        </div>
      </section>

    </div>
  );
};
