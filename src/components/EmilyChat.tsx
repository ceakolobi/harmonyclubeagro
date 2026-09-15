import React, { useEffect, useRef, useState } from 'react';
import { CONFIG } from '../config';
import { trackEvent, openWhatsApp } from '../services/analytics';
import { EMILY_OPEN_EVENT, EmilyOpenDetail } from '../services/emily';
import { MessageCircle, X, Send, Car, Bike, Truck, Loader2 } from 'lucide-react';

interface ChatMsg {
  role: 'user' | 'assistant';
  content: string;
  isError?: boolean;
}

const GREETING: ChatMsg = {
  role: 'assistant',
  content:
    'Oi! Sou a Emily, consultora de proteção veicular da Harmony 😊\nPosso te ajudar a entender nossos planos ou já começar sua cotação. Qual é o tipo do seu veículo?',
};

const QUICK_TYPES: { label: string; icon: typeof Car; msg: string }[] = [
  { label: 'Carro', icon: Car, msg: 'Quero cotar um carro' },
  { label: 'Moto', icon: Bike, msg: 'Quero cotar uma moto' },
  { label: 'Caminhonete', icon: Truck, msg: 'Quero cotar uma caminhonete' },
];

const FALLBACK_MSG =
  'Desculpa, estou com instabilidade no momento 🙏 Tenta de novo em instantes, ou se preferir, fala direto com nosso time:';

export const EmilyChat: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<ChatMsg[]>([GREETING]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showQuickTypes, setShowQuickTypes] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Ref sempre com a versão mais recente de sendMessage, para o listener global
  // (montado 1x) nunca disparar uma cópia velha da conversa (closure stale).
  const sendMessageRef = useRef<(text: string) => Promise<void>>(async () => {});

  // Escuta o evento global disparado por qualquer botão do site
  // (Navbar, HomePage, ProtecaoPage, etc.) via openEmilyChat().
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<EmilyOpenDetail>).detail;
      setOpen(true);
      if (detail?.prefill) {
        setShowQuickTypes(false);
        void sendMessageRef.current(detail.prefill);
      }
    };
    window.addEventListener(EMILY_OPEN_EVENT, handler);
    return () => window.removeEventListener(EMILY_OPEN_EVENT, handler);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [msgs, loading]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setShowQuickTypes(false);
    const userMsg: ChatMsg = { role: 'user', content: trimmed };
    const history = [...msgs, userMsg];
    setMsgs(history);
    setInput('');
    setLoading(true);
    trackEvent('emily_message', { length: trimmed.length });

    try {
      const resp = await fetch(CONFIG.EMILY_CHAT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: CONFIG.EMILY_ANON_KEY,
          Authorization: `Bearer ${CONFIG.EMILY_ANON_KEY}`,
        },
        body: JSON.stringify({
          messages: history
            .filter((m) => !m.isError)
            .map(({ role, content }) => ({ role, content })),
          context: 'public',
        }),
      });

      if (!resp.ok) throw new Error(`status ${resp.status}`);
      const data = (await resp.json()) as { reply?: string; error?: string };
      if (!data.reply) throw new Error(data.error || 'sem resposta');

      setMsgs((prev) => [...prev, { role: 'assistant', content: data.reply! }]);
    } catch (err) {
      trackEvent('emily_error', { message: String(err) });
      setMsgs((prev) => [...prev, { role: 'assistant', content: FALLBACK_MSG, isError: true }]);
    } finally {
      setLoading(false);
    }
  };

  sendMessageRef.current = sendMessage;

  const handleQuickType = (msg: string) => void sendMessage(msg);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void sendMessage(input);
  };

  const handleToggle = () => {
    const next = !open;
    setOpen(next);
    if (next) trackEvent('emily_open');
  };

  return (
    <>
      {/* Painel de conversa */}
      {open && (
        <div
          className="fixed z-50 bottom-0 right-0 sm:bottom-24 sm:right-6 w-full sm:w-[380px] h-[85vh] sm:h-[560px] max-h-[calc(100vh-2rem)] bg-white dark:bg-slate-900 sm:rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden transition-all duration-200"
          role="dialog"
          aria-label="Chat com a Emily, consultora Harmony"
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-3 px-4 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-black text-lg shrink-0">
                E
              </div>
              <div className="min-w-0">
                <p className="font-extrabold text-sm leading-tight truncate">Emily</p>
                <p className="text-[11px] text-white/85 flex items-center gap-1.5 leading-tight">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse shrink-0" />
                  Consultora Harmony
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/15 transition-colors shrink-0"
              aria-label="Fechar conversa"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mensagens */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-slate-50 dark:bg-slate-950">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed whitespace-pre-wrap ${
                    m.role === 'user'
                      ? 'bg-orange-500 text-white rounded-br-sm'
                      : m.isError
                      ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900 rounded-bl-sm'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-bl-sm'
                  }`}
                >
                  {m.content}
                  {m.isError && (
                    <button
                      onClick={() =>
                        openWhatsApp('Olá! Vim do chat da Emily no site e gostaria de continuar por aqui.')
                      }
                      className="mt-2 flex items-center gap-1.5 text-[11px] font-extrabold text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      FALAR NO WHATSAPP →
                    </button>
                  )}
                </div>
              </div>
            ))}

            {showQuickTypes && !loading && (
              <div className="flex flex-wrap gap-2 pt-1">
                {QUICK_TYPES.map((t) => {
                  const Icon = t.icon;
                  return (
                    <button
                      key={t.label}
                      onClick={() => handleQuickType(t.msg)}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-orange-200 dark:border-orange-900 text-orange-600 dark:text-orange-400 text-[11px] font-bold hover:bg-orange-50 dark:hover:bg-orange-950/30 transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {t.label}
                    </button>
                  );
                })}
              </div>
            )}

            {loading && (
              <div className="flex justify-start">
                <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
                </div>
              </div>
            )}
          </div>

          {/* Composer */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shrink-0 space-y-1.5">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite sua mensagem..."
                disabled={loading}
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-orange-400 focus:bg-white dark:focus:bg-slate-900 text-xs outline-none transition-colors disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="w-10 h-10 rounded-xl bg-orange-500 hover:bg-orange-600 disabled:opacity-40 disabled:hover:bg-orange-500 text-white flex items-center justify-center transition-colors shrink-0"
                aria-label="Enviar mensagem"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-center text-[10px] text-slate-400 dark:text-slate-500">
              Emily pode cometer erros. Confirme informações importantes.
            </p>
          </form>
        </div>
      )}

      {/* Botão flutuante */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group select-none">
        {!open && (
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold border border-slate-700 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none transform translate-x-2 group-hover:translate-x-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Fale com a Emily</span>
          </div>
        )}

        <button
          onClick={handleToggle}
          className="w-14 h-14 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center shadow-2xl shadow-orange-500/40 transform hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-400/40"
          aria-label={open ? 'Fechar chat da Emily' : 'Falar com a Emily, consultora Harmony'}
          title="Falar com a Emily"
        >
          {open ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7 fill-current" />}
        </button>
      </div>
    </>
  );
};
