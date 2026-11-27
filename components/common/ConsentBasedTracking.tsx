"use client";

import { useEffect } from "react";

const CONSENT_KEY = "serpakowski_cookie_consent";
const CONSENT_UPDATED_EVENT = "serpakowski_cookie_consent_updated";
const GA_SCRIPT_ID = "serpakowski-ga4-script";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID?.trim() ?? "";
const GA_DISABLED_KEY = `ga-disable-${GA_ID}` as const;

let gaScriptLoaded = false;

declare global {
  interface Window {
    [key: `ga-disable-${string}`]: boolean | undefined;
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    __serpakowskiGaInitialized?: boolean;
    __serpakowskiGaLastPageView?: string;
  }
}

function getStoredAnalyticsConsent(): boolean | undefined {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return;

    const consent = JSON.parse(raw) as { analytics?: unknown } | null;
    return typeof consent?.analytics === "boolean" ? consent.analytics : undefined;
  } catch {
    return undefined;
  }
}

function injectGaScript() {
  if (document.getElementById(GA_SCRIPT_ID)) return;

  ensureGtagGlobals();
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  // The stream already tracks browser-history navigation with Enhanced Measurement.
  window.gtag("config", GA_ID, { send_page_view: false });
  window.__serpakowskiGaInitialized = true;

  const script = document.createElement("script");
  script.id = GA_SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
  script.addEventListener("load", () => {
    gaScriptLoaded = true;
    syncAnalyticsConsent();
  }, { once: true });
  document.head.appendChild(script);
}

function ensureGtagGlobals() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };
}

function clearAnalyticsCookies() {
  const cookieNames = ["_ga", `_ga_${GA_ID.slice(2)}`];
  const hostnameParts = window.location.hostname.split(".");

  for (const name of cookieNames) {
    // GA uses the root path and can set the cookie on a parent domain by default.
    const expiredCookie = `${name}=; Max-Age=0; Path=/`;
    document.cookie = expiredCookie;
    for (let i = 0; i < hostnameParts.length - 1; i++) {
      document.cookie = `${expiredCookie}; Domain=${hostnameParts.slice(i).join(".")}`;
    }
  }
}

function sendPageView() {
  if (window[GA_DISABLED_KEY] !== false || !window.__serpakowskiGaInitialized) return;

  const pagePath = window.location.pathname + window.location.search;
  if (window.__serpakowskiGaLastPageView === pagePath) return;

  window.__serpakowskiGaLastPageView = pagePath;
  window.gtag("event", "page_view", {
    send_to: GA_ID,
    page_path: pagePath,
    page_location: window.location.origin + pagePath,
  });
}

function syncAnalyticsConsent() {
  const analyticsConsent = getStoredAnalyticsConsent();
  const previousDisabled = window[GA_DISABLED_KEY];
  if (analyticsConsent !== true) {
    // Disable the loaded tag before updating Consent Mode, which can send pings.
    window[GA_DISABLED_KEY] = true;
    window.__serpakowskiGaLastPageView = undefined;
    if (previousDisabled === false) {
      window.gtag("consent", "update", { analytics_storage: "denied" });
    }
    if (analyticsConsent === false || previousDisabled === false) {
      clearAnalyticsCookies();
    }
    return;
  }

  if (!gaScriptLoaded) {
    // Configure the destination at startup, but defer measurement until load.
    window[GA_DISABLED_KEY] = true;
    injectGaScript();
    return;
  }

  if (previousDisabled === false) return;

  window.gtag("consent", "update", { analytics_storage: "granted" });
  window[GA_DISABLED_KEY] = false;
  sendPageView();
}

export function ConsentBasedTracking() {
  useEffect(() => {
    if (!/^G-[A-Z0-9]+$/.test(GA_ID)) return;

    const onStorage = (event: StorageEvent) => {
      if (event.key === CONSENT_KEY || event.key === null) syncAnalyticsConsent();
    };

    syncAnalyticsConsent();
    window.addEventListener(CONSENT_UPDATED_EVENT, syncAnalyticsConsent);
    window.addEventListener("storage", onStorage);
    window.addEventListener("pageshow", syncAnalyticsConsent);

    return () => {
      window.removeEventListener(CONSENT_UPDATED_EVENT, syncAnalyticsConsent);
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("pageshow", syncAnalyticsConsent);
    };
  }, []);

  return null;
}
