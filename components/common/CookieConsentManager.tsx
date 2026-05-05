"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ConsentState = {
  necessary: true;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
};

type Lang = "pl" | "ru" | "en";

const CONSENT_KEY = "serpakowski_cookie_consent";
const CONSENT_UPDATED_AT_KEY = "serpakowski_cookie_consent_updated_at";
const OPEN_SETTINGS_EVENT = "serpakowski:open-cookie-settings";
const CONSENT_UPDATED_EVENT = "serpakowski_cookie_consent_updated";

const baseConsent: ConsentState = {
  necessary: true,
  preferences: false,
  analytics: false,
  marketing: false,
};

const translations = {
  pl: {
    bannerTitle: "Ta strona korzysta z plików cookies",
    bannerText:
      "Używamy niezbędnych plików cookies do prawidłowego działania strony oraz, za Twoją zgodą, cookies preferencyjnych, analitycznych i marketingowych.",
    acceptAll: "Akceptuję wszystkie",
    rejectOptional: "Odrzucam opcjonalne",
    settings: "Ustawienia",
    cookiePolicy: "Polityka cookies",
    privacyPolicy: "Polityka prywatności",
    cookiePolicyHref: "/pl/polityka-cookies",
    privacyPolicyHref: "/pl/polityka-prywatnosci",
    modalTitle: "Ustawienia cookies",
    modalIntro:
      "Możesz wybrać, na które kategorie cookies wyrażasz zgodę. Cookies niezbędne są zawsze aktywne, ponieważ są potrzebne do działania strony.",
    necessaryLabel: "Niezbędne cookies",
    necessaryDescription:
      "Wymagane do prawidłowego działania strony. Te cookies są zawsze aktywne.",
    preferencesLabel: "Preferencyjne cookies",
    preferencesDescription:
      "Pomagają zapamiętać ustawienia użytkownika, takie jak preferencje strony.",
    analyticsLabel: "Analityczne cookies",
    analyticsDescription:
      "Pomagają analizować sposób korzystania ze strony i poprawiać jej działanie.",
    marketingLabel: "Marketingowe cookies",
    marketingDescription:
      "Mogą być wykorzystywane do mierzenia skuteczności reklam i działań marketingowych.",
    saveSettings: "Zapisz ustawienia",
    close: "Zamknij",
  },
  ru: {
    bannerTitle: "Этот сайт использует cookies",
    bannerText:
      "Мы используем необходимые cookies для правильной работы сайта, а также, с вашего согласия, предпочтительные, аналитические и маркетинговые cookies.",
    acceptAll: "Принять все",
    rejectOptional: "Отклонить необязательные",
    settings: "Настройки",
    cookiePolicy: "Политика cookies",
    privacyPolicy: "Политика конфиденциальности",
    cookiePolicyHref: "/ru/cookies",
    privacyPolicyHref: "/ru/privacy",
    modalTitle: "Настройки cookies",
    modalIntro:
      "Вы можете выбрать, на какие категории cookies даёте согласие. Необходимые cookies всегда активны, потому что они нужны для работы сайта.",
    necessaryLabel: "Необходимые cookies",
    necessaryDescription:
      "Нужны для правильной работы сайта. Эти cookies всегда активны.",
    preferencesLabel: "Предпочтительные cookies",
    preferencesDescription:
      "Помогают запоминать настройки пользователя, например предпочтения сайта.",
    analyticsLabel: "Аналитические cookies",
    analyticsDescription:
      "Помогают анализировать использование сайта и улучшать его работу.",
    marketingLabel: "Маркетинговые cookies",
    marketingDescription:
      "Могут использоваться для оценки эффективности рекламы и маркетинговых действий.",
    saveSettings: "Сохранить настройки",
    close: "Закрыть",
  },
  en: {
    bannerTitle: "This website uses cookies",
    bannerText:
      "We use necessary cookies to make the website work properly and, with your consent, preference, analytics and marketing cookies.",
    acceptAll: "Accept all",
    rejectOptional: "Reject optional",
    settings: "Settings",
    cookiePolicy: "Cookie Policy",
    privacyPolicy: "Privacy Policy",
    cookiePolicyHref: "/en/cookies",
    privacyPolicyHref: "/en/privacy",
    modalTitle: "Cookie settings",
    modalIntro:
      "You can choose which cookie categories you consent to. Necessary cookies are always active because they are required for the website to work.",
    necessaryLabel: "Necessary cookies",
    necessaryDescription:
      "Required for the website to work properly. These cookies are always active.",
    preferencesLabel: "Preference cookies",
    preferencesDescription:
      "Help remember user settings, such as website preferences.",
    analyticsLabel: "Analytics cookies",
    analyticsDescription:
      "Help analyze how the website is used and improve its performance.",
    marketingLabel: "Marketing cookies",
    marketingDescription:
      "May be used to measure advertising effectiveness and marketing activities.",
    saveSettings: "Save settings",
    close: "Close",
  },
};

function detectLanguage(pathname: string): Lang {
  if (pathname === "/ru" || pathname.startsWith("/ru/")) return "ru";
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/pl" || pathname.startsWith("/pl/")) return "pl";
  return "pl";
}

function parseStoredConsent(raw: string | null): ConsentState | null {
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    return {
      necessary: true,
      preferences: Boolean(parsed.preferences),
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
    };
  } catch {
    return null;
  }
}

export function CookieConsentManager() {
  const pathname = usePathname();
  const lang = useMemo(() => detectLanguage(pathname || "/"), [pathname]);
  const t = translations[lang];

  const [consent, setConsent] = useState<ConsentState>(baseConsent);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const stored = parseStoredConsent(localStorage.getItem(CONSENT_KEY));

    if (stored) {
      setConsent(stored);
      setShowBanner(false);
      return;
    }

    setConsent(baseConsent);
    setShowBanner(true);
  }, []);

  useEffect(() => {
    const onOpen = () => setShowSettings(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, onOpen);
  }, []);

  const saveConsent = (nextConsent: ConsentState) => {
    setConsent(nextConsent);
    localStorage.setItem(CONSENT_KEY, JSON.stringify(nextConsent));
    localStorage.setItem(CONSENT_UPDATED_AT_KEY, new Date().toISOString());
    setShowBanner(false);
    setShowSettings(false);
    window.dispatchEvent(new Event(CONSENT_UPDATED_EVENT));
  };

  const acceptAll = () => {
    saveConsent({ necessary: true, preferences: true, analytics: true, marketing: true });
  };

  const rejectOptional = () => {
    saveConsent(baseConsent);
  };

  return (
    <>
      {showBanner && (
        <div className="fixed inset-x-0 bottom-4 z-50 px-4">
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/20 bg-[#0E3442]/95 p-5 shadow-2xl backdrop-blur">
            <h2 className="text-lg font-semibold text-white">{t.bannerTitle}</h2>
            <p className="mt-2 text-sm text-neutral-200/90">{t.bannerText}</p>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
              <Link className="text-amber-300 hover:text-amber-200" href={t.cookiePolicyHref}>{t.cookiePolicy}</Link>
              <Link className="text-amber-300 hover:text-amber-200" href={t.privacyPolicyHref}>{t.privacyPolicy}</Link>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <button onClick={acceptAll} className="rounded-xl bg-amber-400 px-4 py-2 text-sm font-medium text-[#0A2530] hover:bg-amber-300">{t.acceptAll}</button>
              <button onClick={rejectOptional} className="rounded-xl border border-white/30 px-4 py-2 text-sm font-medium text-white hover:bg-white/10">{t.rejectOptional}</button>
              <button onClick={() => setShowSettings(true)} className="rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-neutral-200 hover:bg-white/10">{t.settings}</button>
            </div>
          </div>
        </div>
      )}

      {showSettings && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#04171f]/70 p-4">
          <div className="w-full max-w-2xl rounded-2xl border border-white/20 bg-[#0E3442] p-5 shadow-2xl">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold text-white">{t.modalTitle}</h3>
              <button onClick={() => setShowSettings(false)} className="rounded-lg border border-white/20 px-3 py-1.5 text-sm text-neutral-200 hover:bg-white/10">{t.close}</button>
            </div>
            <p className="mt-3 text-sm text-neutral-200/90">{t.modalIntro}</p>

            <div className="mt-5 space-y-4">
              {[
                { key: "necessary", label: t.necessaryLabel, description: t.necessaryDescription, disabled: true },
                { key: "preferences", label: t.preferencesLabel, description: t.preferencesDescription, disabled: false },
                { key: "analytics", label: t.analyticsLabel, description: t.analyticsDescription, disabled: false },
                { key: "marketing", label: t.marketingLabel, description: t.marketingDescription, disabled: false },
              ].map((item) => (
                <div key={item.key} className="rounded-xl border border-white/15 bg-white/5 p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-medium text-white">{item.label}</div>
                      <p className="mt-1 text-sm text-neutral-200/85">{item.description}</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={consent[item.key as keyof ConsentState]}
                      disabled={item.disabled}
                      onChange={(event) => {
                        const checked = event.target.checked;
                        setConsent((prev) => ({ ...prev, [item.key]: checked }));
                      }}
                      className="mt-1 h-5 w-5 accent-amber-400 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <button onClick={() => saveConsent(consent)} className="rounded-xl bg-amber-400 px-4 py-2 text-sm font-medium text-[#0A2530] hover:bg-amber-300">{t.saveSettings}</button>
              <button onClick={acceptAll} className="rounded-xl border border-white/30 px-4 py-2 text-sm font-medium text-white hover:bg-white/10">{t.acceptAll}</button>
              <button onClick={rejectOptional} className="rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-neutral-200 hover:bg-white/10">{t.rejectOptional}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function openCookieSettings() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
  }
}
