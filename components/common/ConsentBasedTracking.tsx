"use client";

import { useEffect } from "react";

type ConsentState = {
  necessary: boolean;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
};

const CONSENT_KEY = "serpakowski_cookie_consent";
const CONSENT_UPDATED_EVENT = "serpakowski_cookie_consent_updated";
const GA_SCRIPT_ID = "serpakowski-ga4-script";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    __serpakowskiGaInitialized?: boolean;
  }
}

function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    return {
      necessary: Boolean(parsed.necessary),
      preferences: Boolean(parsed.preferences),
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
    };
  } catch {
    return null;
  }
}

function injectGaScript(gaId: string) {
  if (document.getElementById(GA_SCRIPT_ID)) return;

  const script = document.createElement("script");
  script.id = GA_SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
  document.head.appendChild(script);
}

function initializeGtag(gaId: string) {
  if (window.__serpakowskiGaInitialized) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function (...args: unknown[]) {
    window.dataLayer.push(args);
  };

  window.gtag("js", new Date());
  window.gtag("config", gaId);
  window.__serpakowskiGaInitialized = true;
}

export function ConsentBasedTracking() {
  useEffect(() => {
    const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim();
    if (!gaId) return;

    const loadIfAllowed = () => {
      const consent = getStoredConsent();
      if (!consent?.analytics) return;

      injectGaScript(gaId);
      initializeGtag(gaId);
    };

    loadIfAllowed();
    window.addEventListener(CONSENT_UPDATED_EVENT, loadIfAllowed);

    return () => {
      window.removeEventListener(CONSENT_UPDATED_EVENT, loadIfAllowed);
    };
  }, []);

  return null;
}
