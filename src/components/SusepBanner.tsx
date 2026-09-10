import React from 'react';
import { SusepLogo } from './SusepLogo';
import { CONFIG } from '../config';
import { trackEvent } from '../services/analytics';
import { ShieldCheck, ExternalLink, Info, CheckCircle2 } from 'lucide-react';

export const SusepBanner: React.FC = () => {
  const handleSusepClick = () => {
    trackEvent('susep_click', { location: 'susep_institutional_block' });
    window.open(CONFIG.SUSEP_OFFICIAL_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="w-full py-12 bg-slate-900 border-y border-slate-800 text-white relative overflow-hidden">
      {/* Background Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none"></div>

      {/* Marca d'Água SUSEP Oficial Background Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-15 dark:opacity-20 flex items-center justify-center mix-blend-screen overflow-hidden"
        style={{
          backgroundImage: `url('/susep-watermark.svg')`,
          backgroundPosition: 'right 5% center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-800/85 rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl backdrop-blur-md relative overflow-hidden">
          
          {/* Subtle Watermark Stamp inside card */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 opacity-10 pointer-events-none select-none hidden md:block">
            <img 
              src="/susep-watermark.svg" 
              alt="Marca d'água SUSEP" 
              className="w-full h-full object-contain filter drop-shadow-xl"
            />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            
            {/* Left Content */}
            <div className="flex-1 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                REGULAÇÃO E TRANSPARÊNCIA OFICIAL
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight font-display leading-snug">
                Cadastro e Conformidade perante a SUSEP
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
                A Harmony Clube atua dentro do marco regulatório aplicável às associações de proteção patrimonial mutualista, mantendo total transparência sobre seu cadastro e informações institucionais perante a Superintendência de Seguros Privados — SUSEP.
              </p>

              {/* Entity Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-300 pt-2">
                <span className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <strong>Razão Social:</strong> {CONFIG.LEGAL_NAME}
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <strong>CNPJ:</strong> {CONFIG.CNPJ}
                </span>
              </div>
            </div>

            {/* Right Action Box with Official SUSEP Graphic */}
            <div className="flex flex-col items-center justify-center bg-slate-900/95 rounded-2xl p-6 border border-slate-700/90 w-full lg:w-auto min-w-[320px] text-center space-y-4 shadow-xl relative overflow-hidden group">
              
              {/* Background Watermark inside logo box */}
              <div 
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"
                style={{
                  backgroundImage: `url('/susep-watermark.svg')`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'
                }}
              />

              <div className="relative z-10 space-y-3 w-full flex flex-col items-center">
                <div className="bg-white/95 p-3 rounded-xl shadow-md w-full max-w-[240px] flex items-center justify-center">
                  <img 
                    src="/assets/susep-cadastrada.png" 
                    alt="Selo Oficial SUSEP - Associação Cadastrada" 
                    className="h-full w-auto object-contain"
                  />
                </div>

                <p className="text-[11px] text-slate-400 max-w-xs leading-normal">
                  Atuação em estrito cumprimento às normas e marcos regulatórios vigentes aplicáveis às associações mutualistas.
                </p>

                <button
                  onClick={handleSusepClick}
                  className="w-full py-3 px-5 rounded-xl font-extrabold text-xs text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 group"
                >
                  <span>CONSULTAR REGISTRO NA SUSEP</span>
                  <ExternalLink className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>

          </div>

          {/* Legal Notice Bar */}
          <div className="mt-8 pt-4 border-t border-slate-700/60 flex items-start gap-2.5 text-[11px] text-slate-400 relative z-10">
            <Info className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            <p className="leading-normal">
              <strong>Nota Institucional:</strong> A Harmony Clube é uma associação de socorro mútuo e proteção patrimonial privada regida pelo Código Civil. Não é uma seguradora convencional e a SUSEP não garante pagamentos de benefícios da associação.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
