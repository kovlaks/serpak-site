"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

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
    __serpakowskiGaLastPageView?: string;
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

function hasAnalyticsConsent() {
  return getStoredConsent()?.analytics === true;
}

function getCurrentPagePath() {
  return window.location.pathname + window.location.search;
}

function injectGaScript(gaId: string) {
  if (document.getElementById(GA_SCRIPT_ID)) return;

  const script = document.createElement("script");
  script.id = GA_SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
  document.head.appendChild(script);
}

function ensureGtagGlobals() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };
}

function sendPageView(gaId: string, pagePath: string) {
  if (window.__serpakowskiGaLastPageView === pagePath) return;

  window.gtag("config", gaId, {
    page_path: pagePath,
  });
  window.__serpakowskiGaLastPageView = pagePath;
}

function initializeGa(gaId: string) {
  injectGaScript(gaId);
  ensureGtagGlobals();

  if (!window.__serpakowskiGaInitialized) {
    window.gtag("js", new Date());
    window.__serpakowskiGaInitialized = true;
  }

  sendPageView(gaId, getCurrentPagePath());
}

export function ConsentBasedTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchParamsString = searchParams.toString();

  useEffect(() => {
    const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim();
    if (!gaId) return;

    const loadIfAllowed = () => {
      if (!hasAnalyticsConsent()) return;
      initializeGa(gaId);
    };

    loadIfAllowed();
    window.addEventListener(CONSENT_UPDATED_EVENT, loadIfAllowed);

    return () => {
      window.removeEventListener(CONSENT_UPDATED_EVENT, loadIfAllowed);
    };
  }, [pathname, searchParamsString]);

  return null;
}
