import React from 'react';
import { PageRoute } from '../types';
import { CONFIG } from '../config';
import { openEmilyChat } from '../services/emily';
import { ShieldCheck, CheckCircle2, Users, FileCheck, Lock, Calculator, ArrowRight, ShieldAlert, Award } from 'lucide-react';

interface ProtecaoPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ProtecaoPage: React.FC<ProtecaoPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full space-y-12 py-10 bg-slate-50 dark:bg-slate-900 transition-colors">
      
      {/* Header Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl relative overflow-hidden space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            PROTEÇÃO PATRIMONIAL MUTUALISTA
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight leading-tight max-w-3xl">
            Proteção Veicular Transparente e Sem Burocracia
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Entenda como funciona o sistema de socorro mútuo da Harmony Clube de Benefícios e garanta a segurança do seu patrimônio com uma gestão séria e regulamentada.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => openEmilyChat("Quero fazer uma cotação")}
              className="px-6 py-3.5 rounded-xl font-extrabold text-xs tracking-wider uppercase text-white bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-500/30 transition-all flex items-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              SIMULAR COTAÇÃO AGORA
            </button>
            <button
              onClick={() => onNavigate('beneficios')}
              className="px-6 py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
            >
              VER BENEFÍCIOS
            </button>
          </div>
        </div>
      </section>

      {/* Main Legal & Mutualist Explanation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-orange-500 font-bold text-xs uppercase tracking-wider">MARCO LEGAL E REGRAS</span>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-display">
                O que é a Proteção Veicular Mutualista?
              </h2>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              A Proteção Veicular realizada por associações sem fins lucrativos fundamenta-se na Constituição Federal (Art. 5º, incisos XVII e XXI) e no Código Civil Brasileiro. Trata-se de um modelo cooperativo no qual proprietários de veículos se unem em prol do socorro mútuo.
            </p>

            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Diferente de seguradoras comerciais habituais que visam lucro corporativo em apólices individuais, a <strong>Harmony Clube</strong> promove o rateio proporcional de custos reais de colisões, roubos e assistências exclusivamente entre os próprios associados cadastrados.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <Users className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-900 dark:text-white block mb-0.5">Gestão Colaborativa</strong>
                  <span className="text-slate-500 dark:text-slate-400">Todos os recursos arrecadados pertencem ao fundo mutualista dos associados para a manutenção do patrimônio protegido.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <FileCheck className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-900 dark:text-white block mb-0.5">Transparência Cadastral SUSEP</strong>
                  <span className="text-slate-500 dark:text-slate-400">Cadastrada na SUSEP conforme as diretrizes do marco regulatório do setor associativo.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
                alt="Veículo moderno rodando em estrada com segurança"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-2xl border border-slate-700 shadow-xl hidden sm:block max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-6 h-6 text-emerald-400" />
                <span className="font-extrabold text-sm font-display">Sem Restrição de Perfil</span>
              </div>
              <p className="text-[11px] text-slate-300">
                Qualquer condutor habilitado pode dirigir o veículo protegido sem alterar as condições do plano.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* How Adhesion Works */}
      <section className="bg-slate-100 dark:bg-slate-950 py-16 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-display">
              Passo a Passo para a Sua Adesão
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Processo totalmente digital, sem necessidade de sair de casa e sem análise de crédito SPC/Serasa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "1. Cotação On-line", desc: "Informe os dados básicos do seu veículo (carro, moto ou caminhonete) e selecione a categoria de proteção." },
              { title: "2. Regulamento e Vistoria", desc: "Confira as regras claras do estatuto associativo e realize a vistoria prévia pelo celular." },
              { title: "3. Assinatura da Ficha", desc: "Formalize sua adesão ao grupo mutualista com assinatura digital segura." },
              { title: "4. Ativação Imediata", desc: "Seu veículo passa a contar imediatamente com assistência 24h e socorro mútuo." }
            ].map((step, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 font-black text-sm flex items-center justify-center font-display">
                  {index + 1}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base font-display">{step.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-center space-y-6 border border-slate-800 text-white">
          <h2 className="text-3xl font-extrabold font-display">Pronto para Solicitar sua Cotação?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Conheça as condições para a sua categoria e receba o atendimento humanizado da equipe Harmony.
          </p>
          <button
            onClick={() => openEmilyChat("Quero fazer uma cotação")}
            className="px-8 py-4 rounded-xl font-extrabold text-sm text-white bg-orange-500 hover:bg-orange-600 shadow-xl shadow-orange-500/30 transition-all inline-flex items-center gap-2"
          >
            FAZER MINHA COTAÇÃO AGORA
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

    </div>
  );
};
