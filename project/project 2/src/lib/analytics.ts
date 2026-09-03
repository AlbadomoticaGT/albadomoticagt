/**
 * Analytics + contact link layer for Alba Domótica GT.
 *
 * Contact CTAs open WhatsApp with pre-filled messages and also support tel: links.
 * Events are pushed to dataLayer for GTM/GA4/Google Ads conversion tracking.
 *
 * Conversion events (mapped to Google Ads conversions via GTM):
 *  - generate_lead        → form submission
 *  - schedule_visit       → "Agendar Visita Técnica" click
 *  - contact_whatsapp     → any WhatsApp link click
 *  - contact_phone_call   → any phone link click
 *  - form_start           → user begins filling the form
 *  - form_submit          → user submits the form
 */

import { SITE } from "@/lib/site.config";

type GtagEvent = {
  event: string;
  [key: string]: unknown;
};

declare global {
  interface Window {
    dataLayer?: GtagEvent[];
    gtag?: (...args: unknown[]) => void;
  }
}

function push(event: GtagEvent): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

export function trackEvent(event: string, params?: Record<string, unknown>): void {
  push({ event, ...params });
}

export function trackLead(source: string): void {
  trackEvent("generate_lead", { source, value: 1, currency: "GTQ" });
}

export function trackScheduleVisit(location: string): void {
  trackEvent("schedule_visit", { source: location });
}

export function trackPhoneCall(location: string): void {
  trackEvent("contact_phone_call", { location });
}

export function trackWhatsApp(location: string): void {
  trackEvent("contact_whatsapp", { location });
}

export function trackFormStart(): void {
  trackEvent("form_start", { form_id: "quote_request" });
}

export function trackFormSubmit(): void {
  trackEvent("form_submit", { form_id: "quote_request" });
}

/**
 * Returns the tel: link for the business phone number.
 */
export function phoneLink(): string {
  return SITE.phoneTel;
}

export function phoneDisplay(): string {
  return SITE.phoneDisplay;
}

/**
 * Builds a WhatsApp deep link with a pre-filled message.
 * @param message - The pre-filled text the user will see in WhatsApp.
 */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}

/**
 * Captures UTM parameters from the URL on first visit so they can be
 * attached to form submissions for Google Ads attribution.
 */
export function captureUTM(): Record<string, string | null> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
  const result: Record<string, string | null> = {};
  for (const key of utmKeys) {
    result[key] = params.get(key);
  }
  return result;
}

/**
 * Returns a human-readable lead source from UTM params or "organic" fallback.
 */
export function getLeadSource(): string {
  const utm = captureUTM();
  if (utm.utm_source) {
    return `${utm.utm_source}/${utm.utm_medium || "unknown"}/${utm.utm_campaign || "unknown"}`;
  }
  return "organic";
}
