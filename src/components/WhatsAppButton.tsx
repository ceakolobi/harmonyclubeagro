import React from 'react';
import { CONFIG } from '../config';
import { openWhatsApp } from '../services/analytics';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    openWhatsApp("Olá! Vim pelo site da Harmony Clube e gostaria de tirar dúvidas sobre a proteção veicular e benefícios.");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group select-none">
      {/* Tooltip Badge */}
      <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold border border-slate-700 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none transform translate-x-2 group-hover:translate-x-0">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Atendimento WhatsApp 24h</span>
      </div>

      {/* Floating Button */}
      <button
        onClick={handleClick}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 transform hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        aria-label="Falar pelo WhatsApp com a Harmony"
        title="Atendimento via WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </button>
    </div>
  );
};
