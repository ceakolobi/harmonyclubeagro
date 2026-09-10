import React, { useState } from 'react';
import { FAQS } from '../data/harmonyData';
import { ChevronDown, Search, HelpCircle, ShieldCheck } from 'lucide-react';

export const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("susep-regula");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");

  const toggleFAQ = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  const filteredFaqs = FAQS.filter(item => {
    const matchesCategory = selectedCategory === "todos" || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="w-full py-16 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            Tire Suas Dúvidas
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            Respostas claras e transparentes sobre a proteção patrimonial mutualista, assistência 24h e regulamentação SUSEP.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar pergunta..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto justify-start sm:justify-end">
            {[
              { id: 'todos', label: 'Todas' },
              { id: 'susep', label: 'SUSEP & Regulação' },
              { id: 'protecao', label: 'Proteção' },
              { id: 'assistencia', label: 'Assistência' },
              { id: 'associado', label: 'Associado' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center text-slate-500 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
              Nenhuma pergunta encontrada para sua busca.
            </div>
          ) : (
            filteredFaqs.map(faq => {
              const isOpen = openId === faq.id;
              const isSusepQuestion = faq.category === 'susep';
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-200 overflow-hidden border ${
                    isOpen
                      ? 'bg-white dark:bg-slate-800/90 border-orange-500/40 shadow-lg shadow-orange-500/5'
                      : 'bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/70 hover:border-slate-300 dark:hover:border-slate-600'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-2.5 font-bold text-slate-900 dark:text-white text-sm md:text-base">
                      {isSusepQuestion && (
                        <ShieldCheck className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      )}
                      {faq.question}
                    </span>
                    <div className={`p-1.5 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180 bg-orange-500/10 text-orange-500' : 'bg-slate-100 dark:bg-slate-700 text-slate-500'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-700/50 mt-1 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
