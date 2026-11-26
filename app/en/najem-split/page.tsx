import type { Metadata } from "next";
import { Container } from "../../../components/layout/Container";
import { SiteFooterEn } from "../../../components/layout/SiteFooterEn";
import { SiteHeaderEn } from "../../../components/layout/SiteHeaderEn";

const serviceName = "Najem Split";
const title = `${serviceName} | SERPAKOWSKI Nieruchomości`;
const description =
  "Comprehensive apartment letting services with the commission divided into 12 interest-free monthly instalments.";
const canonical = "https://www.serpakowski.pl/en/najem-split";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: "SERPAKOWSKI Nieruchomości",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary", title, description },
};

export default function NajemSplitPage() {
  return (
    <div lang="en" className="flex min-h-screen flex-col bg-[#0C2D3A] text-white">
      <SiteHeaderEn />
      <main className="w-full flex-1">
        <Container className="pb-12 pt-28 sm:pb-20 sm:pt-32">
          <div className="mx-auto max-w-3xl space-y-5 rounded-3xl bg-gradient-to-br from-[#123746] to-[#0A2530] p-6 shadow-lg ring-1 ring-white/10 sm:p-12">
            <h1 className="font-serif text-4xl leading-tight sm:text-5xl">{serviceName}</h1>
            <p className="max-w-prose text-lg leading-relaxed">{description}</p>
            <p className="text-sm leading-relaxed text-neutral-200">
              Detailed information about this service is being prepared in English.
            </p>
            <a
              href="/en#contact"
              className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold tracking-wide text-[#0C2D3A] shadow-md transition hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
            >
              Contact us
            </a>
          </div>
        </Container>
      </main>
      <SiteFooterEn />
    </div>
  );
}
