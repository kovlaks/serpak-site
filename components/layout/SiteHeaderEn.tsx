"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./Button";
import { Container } from "./Container";

type LanguageLinks = { pl: string; ru: string | null; en: string };

const homeLanguageLinks = { pl: "/pl", ru: "/ru", en: "/en" };
const languageSwitcherMap: Record<string, LanguageLinks | undefined> = {
  "/en": homeLanguageLinks,
  "/en/landlord": { pl: "/pl/landlord", ru: "/ru/landlord", en: "/en/landlord" },
  "/en/rent": { pl: "/pl/rent", ru: "/ru/rent", en: "/en/rent" },
  "/en/partnership": { pl: "/pl/wspolpraca", ru: "/ru/wspolpraca", en: "/en/partnership" },
  "/en/privacy": { pl: "/pl/polityka-prywatnosci", ru: "/ru/privacy", en: "/en/privacy" },
  "/en/cookies": { pl: "/pl/polityka-cookies", ru: "/ru/cookies", en: "/en/cookies" },
  "/en/najem-solo": { pl: "/pl/najem-solo", ru: null, en: "/en/najem-solo" },
  "/en/najem-split": { pl: "/pl/najem-split", ru: null, en: "/en/najem-split" },
  "/en/umowa-najmu": { pl: "/pl/umowa-najmu", ru: null, en: "/en/umowa-najmu" },
  "/en/rzut-mieszkania": { pl: "/pl/rzut-mieszkania", ru: null, en: "/en/rzut-mieszkania" },
  "/en/spacer-3d": { pl: "/pl/spacer-3d", ru: null, en: "/en/spacer-3d" },
  "/en/asystent-najmu": { pl: "/pl/asystent-najmu", ru: null, en: "/en/asystent-najmu" },
};

export function SiteHeaderEn() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const languageLinks = languageSwitcherMap[pathname.replace(/\/$/, "")] ?? homeLanguageLinks;
  const russianHref = languageLinks.ru ?? homeLanguageLinks.ru;
  const russianFallbackLabel = languageLinks.ru === null
    ? "Russian homepage - this service page is not yet available in Russian."
    : undefined;
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const header = headerRef.current;
      if (!header) return;
      if (window.scrollY > 10)
        header.classList.add("bg-[#0C2D3A]/70", "backdrop-blur", "ring-1", "ring-white/10");
      else header.classList.remove("bg-[#0C2D3A]/70", "backdrop-blur", "ring-1", "ring-white/10");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="header" ref={headerRef} className="fixed inset-x-0 top-0 z-50 transition">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="/en" className="flex items-center gap-3">
            <img src="/logo.png" alt="SERPAKOWSKI Nieruchomości" className="h-12 w-12 rounded-full object-cover" />
            <span className="font-serif whitespace-nowrap text-base sm:text-lg md:text-xl tracking-wide text-white">SERPAKOWSKI Nieruchomości</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-200/80">
            <a href="/en#services" className="hover:text-white">Services</a>
            <a href="/en/partnership" className="hover:text-white">Partnership</a>
            <a href="/en#contact" className="hover:text-white">Contact</a>

            <div className="flex items-center gap-3">
              <a href={languageLinks.pl} className="text-xs uppercase tracking-widest text-white/80 hover:text-white" title="Polish">PL</a>
              <span className="text-white/30">/</span>
              <a href={russianHref} className="text-xs uppercase tracking-widest text-white/80 hover:text-white" aria-label={russianFallbackLabel} title={russianFallbackLabel ?? "Russian"}>RU</a>
              <span className="text-white/30">/</span>
              <a href={languageLinks.en} className="text-xs uppercase tracking-widest text-white" aria-current="true" title="Current language">EN</a>
            </div>

            <Button href="/en#contact">Submit request</Button>
          </nav>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">☰</button>
        </div>
      </Container>
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0C2D3A]/95 backdrop-blur border-t border-white/10">
          <Container>
            <div className="py-4 flex flex-col gap-4 text-neutral-200/90">
              <a href="/en#services" className="hover:text-white">Services</a>
              <a href="/en/partnership" className="hover:text-white">Partnership</a>
              <a href="/en#contact" className="hover:text-white">Contact</a>

              <div className="flex items-center gap-3 pt-2">
                <a href={languageLinks.pl} className="text-xs uppercase tracking-widest text-white/80 hover:text-white" title="Polish">PL</a>
                <span className="text-white/30">/</span>
                <a href={russianHref} className="text-xs uppercase tracking-widest text-white/80 hover:text-white" aria-label={russianFallbackLabel} title={russianFallbackLabel ?? "Russian"}>RU</a>
                <span className="text-white/30">/</span>
                <a href={languageLinks.en} className="text-xs uppercase tracking-widest text-white" aria-current="true" title="Current language">EN</a>
              </div>

              <Button href="/en#contact" className="justify-center">Submit request</Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
