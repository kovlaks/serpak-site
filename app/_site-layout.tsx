import "./globals.css";
import type { Metadata } from "next";
import { Suspense, type ReactNode } from "react";
import { CookieConsentManager } from "../components/common/CookieConsentManager";
import { ConsentBasedTracking } from "../components/common/ConsentBasedTracking";
import { StructuredData } from "../components/common/StructuredData";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://www.serpakowski.pl"),
  title: "SERPAKOWSKI Nieruchomości | Agencja nieruchomości w Warszawie",
  description:
    "SERPAKOWSKI Nieruchomości pomaga w wynajmie, zakupie, sprzedaży i obsłudze nieruchomości w Warszawie.",
  openGraph: {
    title: "SERPAKOWSKI Nieruchomości | Agencja nieruchomości w Warszawie",
    description:
      "SERPAKOWSKI Nieruchomości pomaga w wynajmie, zakupie, sprzedaży i obsłudze nieruchomości w Warszawie.",
    siteName: "SERPAKOWSKI Nieruchomości",
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export const bodyClassName = "bg-[#0C2D3A] text-neutral-100 antialiased";

export function SiteLayoutContent({ children }: { children: ReactNode }) {
  return (
    <>
      <StructuredData />
      {children}
      <Suspense fallback={null}>
        <ConsentBasedTracking />
      </Suspense>
      <CookieConsentManager />
    </>
  );
}
