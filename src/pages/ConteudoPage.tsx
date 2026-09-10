import React, { useState } from 'react';
import { PageRoute, Article } from '../types';
import { EVENTS_ARTICLES } from '../data/harmonyData';
import { FileText, Search, Clock, ArrowRight, X, Share2 } from 'lucide-react';

interface ConteudoPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ConteudoPage: React.FC<ConteudoPageProps> = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = EVENTS_ARTICLES.filter(art => 
    art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    art.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full space-y-12 py-10 bg-slate-50 dark:bg-slate-900 transition-colors">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            CONTEÚDO & TRANS PA RÊNCIA
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight leading-tight">
            Notícias, Dicas e Informativos
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Fique por dentro das novidades da Harmony Clube, dicas de manutenção veicular e diretrizes sobre a regulação do setor associativo.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar notícias e artigos..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-medium focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map(article => (
            <div
              key={article.id}
              className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <span className="absolute top-3 left-3 bg-slate-900/90 text-orange-400 text-[10px] font-extrabold px-2.5 py-1 rounded-md border border-slate-700">
                    {article.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h2 className="text-base font-bold text-slate-900 dark:text-white font-display leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-orange-500 hover:text-white text-slate-800 dark:text-slate-200 font-bold text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <span>LER MATÉRIA COMPLETA</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md p-4 sm:p-6 overflow-y-auto flex items-center justify-center">
          <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 relative border border-slate-200 dark:border-slate-700 shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 hover:text-slate-900 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <span className="inline-block bg-orange-500/10 text-orange-500 text-xs font-bold px-3 py-1 rounded-md">
                {selectedArticle.category}
              </span>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white font-display leading-tight">
                {selectedArticle.title}
              </h2>
              <div className="text-xs text-slate-400">
                Publicado em {selectedArticle.date} por {selectedArticle.author}
              </div>
            </div>

            <div className="h-64 rounded-2xl overflow-hidden">
              <img src={selectedArticle.imageUrl} alt={selectedArticle.title} className="w-full h-full object-cover" />
            </div>

            <div className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed space-y-4">
              <p className="font-semibold text-slate-900 dark:text-white">{selectedArticle.summary}</p>
              <p>{selectedArticle.content}</p>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold"
              >
                FECHAR
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
