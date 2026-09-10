import React from 'react';
import { HarmonyLogo } from './HarmonyLogo';
import { SusepLogo } from './SusepLogo';
import { PageRoute } from '../types';
import { CONFIG } from '../config';
import { trackEvent, openWhatsApp } from '../services/analytics';
import { Phone, Mail, MapPin, ExternalLink, ShieldAlert, Heart, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSusepClick = () => {
    trackEvent('susep_click', { location: 'footer' });
    window.open(CONFIG.SUSEP_OFFICIAL_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Harmony Overview */}
          <div className="space-y-4">
            <HarmonyLogo size="md" isDark={true} />
            <p className="text-xs text-slate-400 leading-relaxed">
              Associação de proteção veicular, socorro mútuo e benefícios. Estrutura de atendimento com assistência 24 horas, guincho e serviços de proteção patrimonial mutualista em todo o Brasil.
            </p>
            <div className="pt-2 space-y-1 text-xs text-slate-400">
              <p><strong>Razão Social:</strong> {CONFIG.LEGAL_NAME}</p>
              <p><strong>CNPJ:</strong> {CONFIG.CNPJ}</p>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href={CONFIG.SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-orange-500 text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={CONFIG.SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-orange-500 text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={CONFIG.SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-orange-500 text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={CONFIG.SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-orange-500 text-slate-400 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider font-display border-b border-slate-800 pb-2">
              Navegação Institucional
            </h3>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-orange-400 transition-colors">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('protecao')} className="hover:text-orange-400 transition-colors">
                  Proteção Veicular & Mutualismo
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('beneficios')} className="hover:text-orange-400 transition-colors">
                  Benefícios & Assistência 24h
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('sinistro-eventos')} className="hover:text-orange-400 transition-colors">
                  Sinistro & Comunicados
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('area-associado')} className="hover:text-orange-400 transition-colors">
                  Área do Associado
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('cotacao')} className="text-orange-400 font-bold hover:underline transition-colors">
                  Simular Cotação On-line
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contato')} className="hover:text-orange-400 transition-colors">
                  Canais de Atendimento
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('conteudo')} className="hover:text-orange-400 transition-colors">
                  Conteúdo & Notícias
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: SUSEP Regulation */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider font-display border-b border-slate-800 pb-2 flex items-center justify-between">
              <span>Regulação SUSEP</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            </h3>
            <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 space-y-3">
              <SusepLogo variant="full" lightText={true} className="h-8" />
              <p className="text-[11px] text-slate-400 leading-normal">
                Entidade cadastrada perante a Superintendência de Seguros Privados (SUSEP) no âmbito do marco regulatório aplicável às associações de proteção patrimonial mutualista.
              </p>
              <button
                onClick={handleSusepClick}
                className="w-full py-2 px-3 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
              >
                <span>Informações regulatórias</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 4: Contact & Emergency */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider font-display border-b border-slate-800 pb-2">
              Atendimento & Emergência
            </h3>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300">
                <p className="font-extrabold text-rose-400 flex items-center gap-1.5 mb-1">
                  <ShieldAlert className="w-4 h-4 text-rose-400 animate-pulse" />
                  EMERGÊNCIA & ASSISTÊNCIA 24H:
                </p>
                <a href={`tel:${CONFIG.PHONE_ASSISTANCE_24H.replace(/\D/g, '')}`} className="text-base font-black text-white hover:underline">
                  {CONFIG.PHONE_ASSISTANCE_24H}
                </a>
              </div>

              <div className="space-y-2 text-slate-400">
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Central Comercial: {CONFIG.PHONE}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>{CONFIG.EMAIL}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>{CONFIG.ADDRESS} — {CONFIG.CITY}/{CONFIG.STATE}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openWhatsApp("Olá! Preciso de suporte da Harmony Clube.")}
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs transition-all shadow-md shadow-emerald-600/20"
                >
                  FALAR VIA WHATSAPP
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 leading-relaxed text-center sm:text-left">
          <p>{CONFIG.LEGAL_DISCLAIMER}</p>
        </div>

        {/* Sub-footer / Copyright */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {CONFIG.COMPANY_NAME}. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => handleNavClick('privacidade')} className="hover:text-slate-300 transition-colors">
              Política de Privacidade
            </button>
            <span>•</span>
            <button onClick={() => handleNavClick('termos')} className="hover:text-slate-300 transition-colors">
              Termos de Uso
            </button>
            <span>•</span>
            <button onClick={() => handleNavClick('contato')} className="hover:text-slate-300 transition-colors">
              Contato
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
