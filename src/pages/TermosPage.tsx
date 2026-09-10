import React from 'react';
import { PageRoute } from '../types';
import { CONFIG } from '../config';
import { FileText, ShieldCheck } from 'lucide-react';

interface TermosPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const TermosPage: React.FC<TermosPageProps> = () => {
  return (
    <div className="w-full py-12 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            TERMOS E CONDIÇÕES INSTITUCIONAIS
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-display">
            Termos de Uso do Site e Regulamento
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Última atualização: Setembro de 2026 | {CONFIG.LEGAL_NAME} (CNPJ: {CONFIG.CNPJ})
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-md text-slate-700 dark:text-slate-300 text-sm leading-relaxed space-y-6">
          
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">1. Natureza Jurídica da Associação</h2>
            <p>
              A <strong>HARMONY CLUBE DE BENEFÍCIOS</strong> é uma associação civil sem fins lucrativos regida pelo Código Civil Brasileiro (Art. 53 e seguintes) e pela Constituição Federal (Art. 5º, incisos XVII e XXI).
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              <strong>Importante:</strong> A Harmony Clube não é uma empresa seguradora convencional e não comercializa apólices de seguro. Suas atividades baseiam-se estritamente no mutualismo e no rateio proporcional de despesas entre os associados.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">2. Cadastro e Regulação SUSEP</h2>
            <p>
              A Harmony Clube encontra-se cadastrada junto à Superintendência de Seguros Privados (SUSEP), no escopo do marco regulatório aplicável às entidades associativas de proteção patrimonial mutualista. O cadastro junto à SUSEP tem por objetivo conferir transparência às operações associativas perante os órgãos de controle.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">3. Condições do Rateio e Mensalidades</h2>
            <p>
              O associado contribui mensalmente para a manutenção do fundo comum mutualista através da taxa de administração e do rateio de eventos (colisões, roubos, furtos e assistências) apurados no período anterior.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">4. Uso do Portal On-line</h2>
            <p>
              O acesso às funcionalidades do site, simulações de cotação e Portal do Associado implica na aceitação integral dos presentes termos de uso e da nossa Política de Privacidade.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">5. Foro e Legislação Aplicável</h2>
            <p>
              Estes termos são regidos pelas leis da República Federativa do Brasil, ficando eleito o foro da comarca da sede da associação para dirimir quaisquer dúvidas decorrentes do presente documento.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
