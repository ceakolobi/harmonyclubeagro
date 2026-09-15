// Bus de eventos simples para abrir o chat da Emily a partir de qualquer
// componente (Navbar, HomePage, ProtecaoPage, etc.) sem precisar passar
// callback por prop em toda a árvore. O widget <EmilyChat /> (montado uma
// vez em App.tsx) escuta esse evento.
import { trackEvent } from './analytics';

export const EMILY_OPEN_EVENT = 'harmony:emily-open';

export interface EmilyOpenDetail {
  /** Mensagem inicial que a Emily já envia sozinha como se o usuário tivesse digitado. */
  prefill?: string;
}

/**
 * Abre o widget da Emily. Se `prefill` for informado, a mensagem é enviada
 * automaticamente assim que o chat abre — usado nos botões de "cotação" pra
 * já entrar direto no fluxo, sem o usuário precisar digitar de novo o que
 * acabou de clicar.
 */
export function openEmilyChat(prefill?: string) {
  if (typeof window === 'undefined') return;
  trackEvent('emily_open', prefill ? { prefill } : undefined);
  window.dispatchEvent(
    new CustomEvent<EmilyOpenDetail>(EMILY_OPEN_EVENT, { detail: { prefill } })
  );
}
