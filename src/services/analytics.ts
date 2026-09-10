import { CONFIG } from '../config';

type AnalyticsEvent = 
  | 'quote_click'
  | 'quote_start'
  | 'quote_submit'
  | 'whatsapp_click'
  | 'member_area_click'
  | 'assistance_click'
  | 'form_submit'
  | 'page_view'
  | 'susep_click';

export function trackEvent(eventName: AnalyticsEvent, params?: Record<string, any>) {
  try {
    // In-app log for audit & preview
    console.log(`[Analytics Event] ${eventName}:`, params || {});

    // Google Analytics 4 integration
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, params);
    }

    // Google Tag Manager dataLayer
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: eventName,
        ...params,
        timestamp: new Date().toISOString()
      });
    }

    // Meta Pixel integration
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('trackCustom', eventName, params);
    }
  } catch (error) {
    console.warn('Error recording analytics event:', error);
  }
}

export function openWhatsApp(customMessage?: string) {
  trackEvent('whatsapp_click', { origin: window.location.pathname });
  const text = encodeURIComponent(customMessage || `Olá, gostaria de falar com a equipe de atendimento da Harmony Clube.`);
  const url = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${text}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
