import React, { useState } from 'react';
import { PageRoute } from '../types';
import { CONFIG } from '../config';
import { openWhatsApp, trackEvent } from '../services/analytics';
import { Phone, Mail, MapPin, MessageSquare, ShieldAlert, Clock, Send, CheckCircle2 } from 'lucide-react';

interface ContatoPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ContatoPage: React.FC<ContatoPageProps> = () => {
  const [formSent, setFormSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'duvida',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('contact_form_submit', { subject: form.subject });
    setFormSent(true);
  };

  return (
    <div className="w-full space-y-12 py-10 bg-slate-50 dark:bg-slate-900 transition-colors">
      
      {/* Header Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Phone className="w-4 h-4" />
            CANAIS DE ATENDIMENTO
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight leading-tight">
            Fale com a Harmony Clube
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Estamos prontos para atender você com agilidade. Escolha o canal desejado ou envie uma mensagem diretamente para nossa equipe.
          </p>
        </div>
      </section>

      {/* Main Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Assistência 24h */}
          <div className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-6 space-y-3">
            <ShieldAlert className="w-8 h-8 text-rose-500" />
            <h2 className="text-base font-bold text-slate-900 dark:text-white font-display">Assistência 24 Horas</h2>
            <p className="text-xs text-slate-600 dark:text-slate-300">Socorro emergencial, guincho e chaveiro em todo o Brasil.</p>
            <a
              href={`tel:${CONFIG.PHONE_ASSISTANCE_24H.replace(/\D/g, '')}`}
              className="text-lg font-black text-rose-600 dark:text-rose-400 block hover:underline"
            >
              {CONFIG.PHONE_ASSISTANCE_24H}
            </a>
          </div>

          {/* Card 2: Comercial / WhatsApp */}
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 space-y-3">
            <MessageSquare className="w-8 h-8 text-emerald-500" />
            <h2 className="text-base font-bold text-slate-900 dark:text-white font-display">WhatsApp Comercial</h2>
            <p className="text-xs text-slate-600 dark:text-slate-300">Cotações, dúvidas sobre planos e atendimento geral.</p>
            <button
              onClick={() => openWhatsApp("Olá! Gostaria de falar com o atendimento comercial da Harmony.")}
              className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 block hover:underline"
            >
              FALAR NO WHATSAPP AGORA →
            </button>
          </div>

          {/* Card 3: E-mail */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 space-y-3">
            <Mail className="w-8 h-8 text-orange-500" />
            <h2 className="text-base font-bold text-slate-900 dark:text-white font-display">E-mail Institucional</h2>
            <p className="text-xs text-slate-600 dark:text-slate-300">Para envio de documentos e solicitações oficiais.</p>
            <a href={`mailto:${CONFIG.EMAIL}`} className="text-xs font-bold text-orange-600 dark:text-orange-400 block hover:underline">
              {CONFIG.EMAIL}
            </a>
          </div>

          {/* Card 4: Sede */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 space-y-3">
            <MapPin className="w-8 h-8 text-indigo-500" />
            <h2 className="text-base font-bold text-slate-900 dark:text-white font-display">Sede Principal</h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {CONFIG.ADDRESS} — {CONFIG.CITY}/{CONFIG.STATE}
            </p>
          </div>

        </div>
      </section>

      {/* Form and Map Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                Envie uma Mensagem
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Preencha o formulário abaixo que nossa equipe responderá em breve.
              </p>
            </div>

            {formSent ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Mensagem Enviada!</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Agradecemos seu contato. Entraremos em resposta pelo e-mail ou telefone informado.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Nome *</label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">E-mail *</label>
                    <input
                      type="email"
                      required
                      placeholder="seuemail@exemplo.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Telefone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(00) 00000-0000"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Assunto</label>
                  <select
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="duvida">Dúvida Geral</option>
                    <option value="cotacao">Nova Cotação</option>
                    <option value="sinistro">Comunicado de Evento / Sinistro</option>
                    <option value="associado">Suporte ao Associado</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Mensagem *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Escreva sua mensagem aqui..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-xs font-extrabold text-white bg-orange-500 hover:bg-orange-600 shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  ENVIAR MENSAGEM
                </button>
              </form>
            )}
          </div>

          {/* Location & Hours Box */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 text-white space-y-4">
              <h2 className="text-xl font-bold font-display">Horário de Atendimento</h2>
              
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <div>
                    <strong className="block text-white">Central Comercial:</strong>
                    <span>Segunda a Sexta-feira: 08h00 às 18h00</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <ShieldAlert className="w-4 h-4 text-rose-400 animate-pulse" />
                  <div>
                    <strong className="block text-white">Assistência 24h & Reboque:</strong>
                    <span>Ininterrupto — 24 horas por dia, 365 dias por ano.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 space-y-3">
              <h3 className="font-bold text-slate-900 dark:text-white text-base font-display">Atendimento Nacional</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                A Harmony Clube atende proprietários de veículos em todo o território nacional através de sua rede de guinchos e prestadores credenciados.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
