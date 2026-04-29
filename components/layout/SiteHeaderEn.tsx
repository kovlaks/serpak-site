"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./Button";
import { Container } from "./Container";

const languageSwitcherMap = {
  home: { ru: "/", pl: "/pl", en: "/en" },
  rent: { ru: "/rent", pl: "/pl/rent", en: "/en/rent" },
  landlord: { ru: "/landlord", pl: "/pl/landlord", en: "/en/landlord" },
  partnership: { ru: "/wspolpraca", pl: "/pl/wspolpraca", en: "/en/partnership" },
} as const;

function getLanguageLinks(pathname: string) {
  if (pathname === "/rent" || pathname === "/pl/rent" || pathname === "/en/rent") return languageSwitcherMap.rent;
  if (pathname === "/landlord" || pathname === "/pl/landlord" || pathname === "/en/landlord") return languageSwitcherMap.landlord;
  if (pathname === "/wspolpraca" || pathname === "/pl/wspolpraca" || pathname === "/en/partnership") return languageSwitcherMap.partnership;
  return languageSwitcherMap.home;
}


export function SiteHeaderEn() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const languageLinks = getLanguageLinks(pathname);
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
            <a href="#services" className="hover:text-white">Services</a>
            <a href="/en/partnership" className="hover:text-white">Partnership</a>
            <a href="#contact" className="hover:text-white">Contact</a>

            <div className="flex items-center gap-3">
              <a href={languageLinks.pl} className="text-xs uppercase tracking-widest text-white/80 hover:text-white" title="Polish">PL</a>
              <span className="text-white/30">/</span>
              <a href={languageLinks.ru} className="text-xs uppercase tracking-widest text-white/80 hover:text-white" title="Russian">RU</a>
              <span className="text-white/30">/</span>
              <a href={languageLinks.en} className="text-xs uppercase tracking-widest text-white" aria-current="true" title="Current language">EN</a>
            </div>

            <Button href="#contact">Submit request</Button>
          </nav>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">☰</button>
        </div>
      </Container>
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0C2D3A]/95 backdrop-blur border-t border-white/10">
          <Container>
            <div className="py-4 flex flex-col gap-4 text-neutral-200/90">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="/en/partnership" className="hover:text-white">Partnership</a>
              <a href="#contact" className="hover:text-white">Contact</a>

              <div className="flex items-center gap-3 pt-2">
                <a href={languageLinks.pl} className="text-xs uppercase tracking-widest text-white/80 hover:text-white" title="Polish">PL</a>
                <span className="text-white/30">/</span>
                <a href={languageLinks.ru} className="text-xs uppercase tracking-widest text-white/80 hover:text-white" title="Russian">RU</a>
                <span className="text-white/30">/</span>
                <a href={languageLinks.en} className="text-xs uppercase tracking-widest text-white" aria-current="true" title="Current language">EN</a>
              </div>

              <Button href="#contact" className="justify-center">Submit request</Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
