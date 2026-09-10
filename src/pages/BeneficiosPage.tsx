import React, { useState } from 'react';
import { PageRoute } from '../types';
import { BENEFITS } from '../data/harmonyData';
import { openWhatsApp, trackEvent } from '../services/analytics';
import { Sparkles, ClockAlert, Truck, Wrench, Disc, Key, Fuel, Radio, Home, Calculator, CheckCircle2, Search, ArrowRight } from 'lucide-react';

interface BeneficiosPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const BeneficiosPage: React.FC<BeneficiosPageProps> = ({ onNavigate }) => {
  const [selectedCat, setSelectedCat] = useState<string>("todos");
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = BENEFITS.filter(b => {
    const matchCat = selectedCat === "todos" || b.category === selectedCat;
    const matchSearch = b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        b.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="w-full space-y-12 py-10 bg-slate-50 dark:bg-slate-900 transition-colors">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            BENEFÍCIOS E ASSISTÊNCIA 24H
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight leading-tight">
            Serviços e Benefícios para Você e Seu Veículo
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Conheça todos os serviços de suporte emergencial e comodidades inclusas no seu plano de proteção associativa.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md">
          
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {[
              { id: 'todos', label: 'Todos os Benefícios' },
              { id: 'assistencia', label: 'Assistência 24h & Reboque' },
              { id: 'rastreamento', label: 'Rastreamento & App' },
              { id: 'clube', label: 'Clube de Vantagens' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCat === cat.id
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                    : 'bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar serviço..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 border border-transparent"
            />
          </div>

        </div>
      </section>

      {/* Benefits Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image & Header */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <h2 className="text-lg font-bold text-white font-display">
                      {item.title}
                    </h2>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-4">
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {item.fullDesc}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/80 space-y-2 text-[11px]">
                    <div className="flex items-start gap-1.5 text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Condições:</strong> {item.conditions}</span>
                    </div>
                    {item.coverageLimits && (
                      <div className="flex items-start gap-1.5 text-slate-500 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Limites:</strong> {item.coverageLimits}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Action CTA */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onNavigate('cotacao')}
                  className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Calculator className="w-4 h-4" />
                  FAÇA SUA COTAÇÃO COM ESTE BENEFÍCIO
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-slate-900 rounded-3xl p-8 text-center space-y-4 border border-slate-800 text-white">
          <h2 className="text-2xl font-bold font-display">Precisa de um Plano Sob Medida?</h2>
          <p className="text-slate-300 text-xs max-w-lg mx-auto">
            Consulte nossos especialistas pelo WhatsApp para ver os limites de reboque e adicionais ideais para seu veículo.
          </p>
          <button
            onClick={() => openWhatsApp("Olá! Gostaria de entender mais sobre os benefícios e condições da Harmony.")}
            className="px-6 py-3 rounded-xl font-bold text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all inline-flex items-center gap-2"
          >
            FALAR COM ATENDIMENTO AGORA
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
