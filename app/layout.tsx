import './globals.css';
import type { Metadata } from "next";
import { Suspense } from "react";
import { CookieConsentManager } from "../components/common/CookieConsentManager";
import { ConsentBasedTracking } from "../components/common/ConsentBasedTracking";

export const metadata: Metadata = {
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="bg-[#0C2D3A] text-neutral-100 antialiased">
        {children}
        <Suspense fallback={null}>
          <ConsentBasedTracking />
        </Suspense>
        <CookieConsentManager />
      </body>
    </html>
  );
}
