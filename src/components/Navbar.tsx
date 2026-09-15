import React, { useState, useEffect } from 'react';
import { HarmonyLogo } from './HarmonyLogo';
import { ThemeToggle } from './ThemeToggle';
import { PageRoute } from '../types';
import { CONFIG } from '../config';
import { openWhatsApp, trackEvent } from '../services/analytics';
import { Phone, PhoneCall, Menu, X, ShieldAlert, ArrowRight, Calculator, MessageSquare } from 'lucide-react';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { route: PageRoute; label: string }[] = [
    { route: 'home', label: 'INÍCIO' },
    { route: 'protecao', label: 'PROTEÇÃO' },
    { route: 'beneficios', label: 'BENEFÍCIOS' },
    { route: 'sinistro-eventos', label: 'SINISTRO & EVENTOS' },
    { route: 'area-associado', label: 'ÁREA DO ASSOCIADO' },
  ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Emergency / Info Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-xs">
            <span className="inline-flex items-center gap-1.5 text-rose-400 font-semibold bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
              <ShieldAlert className="w-3.5 h-3.5 animate-pulse" />
              ASSISTÊNCIA 24H:
              <a href={`tel:${CONFIG.PHONE_ASSISTANCE_24H.replace(/\D/g, '')}`} className="underline hover:text-white transition-colors ml-1">
                {CONFIG.PHONE_ASSISTANCE_24H}
              </a>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
              <Phone className="w-3 h-3 text-emerald-400" />
              Atendimento: <strong className="text-slate-200 ml-1">{CONFIG.PHONE}</strong>
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="hidden md:inline text-slate-400">
              CNPJ: {CONFIG.CNPJ}
            </span>
            <button
              onClick={() => {
                trackEvent('susep_click', { location: 'topbar' });
                window.open(CONFIG.SUSEP_OFFICIAL_URL, '_blank', 'noopener,noreferrer');
              }}
              className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors flex items-center gap-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
              Cadastrada na SUSEP
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-md shadow-xl border-b border-slate-800 py-3'
            : 'bg-slate-900 dark:bg-slate-950 py-4 border-b border-slate-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <div onClick={() => handleNavClick('home')} className="cursor-pointer">
            <HarmonyLogo size="md" isDark={false} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Navegação principal">
            {navItems.map((item) => {
              const isActive = currentPage === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-bold tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'text-orange-400 bg-orange-500/10 border border-orange-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />

            <button
              onClick={() => {
                trackEvent('whatsapp_click', { origin: 'navbar' });
                openWhatsApp("Olá! Gostaria de falar com o atendimento da Harmony Clube.");
              }}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              FALAR COM ATENDIMENTO
            </button>

            <button
              onClick={() => handleNavClick('cotacao')}
              className="px-4 py-2.5 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              FAÇA SUA COTAÇÃO
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[105px] bg-slate-900/98 border-b border-slate-800 shadow-2xl backdrop-blur-xl z-50 animate-in slide-in-from-top duration-200">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <div className="space-y-1 border-b border-slate-800 pb-4">
              {navItems.map((item) => {
                const isActive = currentPage === item.route;
                return (
                  <button
                    key={item.route}
                    onClick={() => handleNavClick(item.route)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold tracking-wider transition-all flex items-center justify-between ${
                      isActive
                        ? 'text-orange-400 bg-orange-500/10 border border-orange-500/20'
                        : 'text-slate-200 hover:bg-slate-800'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                  </button>
                );
              })}
            </div>

            <div className="pt-2 space-y-3">
              <button
                onClick={() => handleNavClick('cotacao')}
                className="w-full py-3.5 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2"
              >
                <Calculator className="w-5 h-5" />
                FAÇA SUA COTAÇÃO
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsApp("Olá! Gostaria de falar com o atendimento da Harmony.");
                }}
                className="w-full py-3.5 rounded-xl font-bold text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                FALAR COM ATENDIMENTO
              </button>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-400 px-1">
                <span>Assistência 24h: {CONFIG.PHONE_ASSISTANCE_24H}</span>
                <span className="text-emerald-400 font-medium">SUSEP Cadastrada</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
