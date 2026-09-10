import React from 'react';
import { PageRoute } from '../types';
import { CONFIG } from '../config';
import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

interface PrivacidadePageProps {
  onNavigate: (page: PageRoute) => void;
}

export const PrivacidadePage: React.FC<PrivacidadePageProps> = () => {
  return (
    <div className="w-full py-12 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Lock className="w-4 h-4" />
            CONFORMIDADE LGPD (LEI Nº 13.709/2018)
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-display">
            Política de Privacidade
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Última atualização: Setembro de 2026 | {CONFIG.LEGAL_NAME} (CNPJ: {CONFIG.CNPJ})
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-md text-slate-700 dark:text-slate-300 text-sm leading-relaxed space-y-6">
          
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">1. Compromisso com a Privacidade</h2>
            <p>
              A <strong>HARMONY CLUBE DE BENEFÍCIOS</strong> ("Harmony Clube"), pessoa jurídica de direito privado inscrita no CNPJ sob o nº <strong>{CONFIG.CNPJ}</strong>, está comprometida com a proteção dos dados pessoais dos seus associados, visitantes e usuários do site, em estrito cumprimento à Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">2. Dados Pessoais Coletados</h2>
            <p>Para a prestação dos serviços de cotação, filiação associativa e acionamento de assistência 24h, coletamos os seguintes dados:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li><strong>Dados de Identificação:</strong> Nome completo, CPF, data de nascimento.</li>
              <li><strong>Dados de Contato:</strong> E-mail, telefone/WhatsApp, endereço residencial.</li>
              <li><strong>Dados do Veículo:</strong> Placa, marca, modelo, ano de fabricação, chassis e dados da vistoria prévia.</li>
              <li><strong>Dados de Navegação:</strong> Endereço IP, cookies e dados de utilização do portal.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">3. Finalidade do Tratamento de Dados</h2>
            <p>Os dados coletados destinam-se exclusivamente para:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>Elaboração de cotações personalizadas de proteção veicular.</li>
              <li>Gestão do cadastro de associados e emissão do rateio mensal de custos.</li>
              <li>Acionamento e prestação de serviços de assistência 24 horas, guincho e socorro na estrada.</li>
              <li>Cumprimento de obrigações legais, regulatórias e fiscais.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">4. Direitos do Titular de Dados</h2>
            <p>Conforme previsto no Art. 18 da LGPD, você possui o direito de solicitar a confirmação da existência de tratamento, acesso, correção, anonimização ou eliminação de seus dados pessoais através do nosso e-mail oficial: <strong>{CONFIG.EMAIL}</strong>.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">5. Encarregado pelo Tratamento de Dados (DPO)</h2>
            <p>Para qualquer solicitação referente à LGPD, entre em contato com nosso encarregado pelo e-mail: <strong>{CONFIG.EMAIL}</strong> ou telefone <strong>{CONFIG.PHONE}</strong>.</p>
          </section>

        </div>

      </div>
    </div>
  );
};
