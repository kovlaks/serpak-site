import type { Metadata } from "next";
import { SiteFooterPl } from "../../../components/layout/SiteFooterPl";
import { SiteHeaderPl } from "../../../components/layout/SiteHeaderPl";

const title = "Najem Split";

export const metadata: Metadata = {
  title,
  alternates: {
    canonical: "https://www.serpakowski.pl/pl/najem-split",
  },
  robots: { index: false, follow: false },
};

export default function NajemSplitPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0C2D3A] text-neutral-100">
      <SiteHeaderPl />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#0F3A4D] to-[#0C2D3A] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-12">
          <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
            {title}
          </h1>
        </div>
      </main>
      <SiteFooterPl />
    </div>
  );
}
