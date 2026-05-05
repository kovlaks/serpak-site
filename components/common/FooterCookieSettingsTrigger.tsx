"use client";

import { openCookieSettings } from "./CookieConsentManager";

export function FooterCookieSettingsTrigger({ label }: { label: string }) {
  return (
    <button type="button" onClick={openCookieSettings} className="hover:text-white">
      {label}
    </button>
  );
}
