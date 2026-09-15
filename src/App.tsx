import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { EmilyChat } from './components/EmilyChat';
import { JsonLd } from './components/JsonLd';

import { HomePage } from './pages/HomePage';
import { ProtecaoPage } from './pages/ProtecaoPage';
import { BeneficiosPage } from './pages/BeneficiosPage';
import { SinistroEventosPage } from './pages/SinistroEventosPage';
import { AreaAssociadoPage } from './pages/AreaAssociadoPage';
import { CotacaoPage } from './pages/CotacaoPage';
import { ContatoPage } from './pages/ContatoPage';
import { ConteudoPage } from './pages/ConteudoPage';
import { PrivacidadePage } from './pages/PrivacidadePage';
import { TermosPage } from './pages/TermosPage';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.replace('/', '') as PageRoute;
      const validRoutes: PageRoute[] = [
        'home', 'protecao', 'beneficios', 'sinistro-eventos', 
        'area-associado', 'cotacao', 'contato', 'conteudo', 
        'privacidade', 'termos'
      ];
      if (validRoutes.includes(path)) return path;
    }
    return 'home';
  });

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', page === 'home' ? '/' : `/${page}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace('/', '') as PageRoute;
      const validRoutes: PageRoute[] = [
        'home', 'protecao', 'beneficios', 'sinistro-eventos', 
        'area-associado', 'cotacao', 'contato', 'conteudo', 
        'privacidade', 'termos'
      ];
      if (validRoutes.includes(path)) {
        setCurrentPage(path);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'protecao':
        return <ProtecaoPage onNavigate={handleNavigate} />;
      case 'beneficios':
        return <BeneficiosPage onNavigate={handleNavigate} />;
      case 'sinistro-eventos':
        return <SinistroEventosPage onNavigate={handleNavigate} />;
      case 'area-associado':
        return <AreaAssociadoPage onNavigate={handleNavigate} />;
      case 'cotacao':
        return <CotacaoPage onNavigate={handleNavigate} />;
      case 'contato':
        return <ContatoPage onNavigate={handleNavigate} />;
      case 'conteudo':
        return <ConteudoPage onNavigate={handleNavigate} />;
      case 'privacidade':
        return <PrivacidadePage onNavigate={handleNavigate} />;
      case 'termos':
        return <TermosPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-orange-500 selection:text-white transition-colors duration-200">
      
      {/* Dynamic JSON-LD Structured Data for SEO */}
      <JsonLd page={currentPage} />

      {/* Persistent Header Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Body */}
      <main className="flex-1 w-full">
        {renderPage()}
      </main>

      {/* Persistent Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Widget da Emily — assistente virtual da Harmony */}
      <EmilyChat />

    </div>
  );
};

export default App;
