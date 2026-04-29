"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import { Container } from "./Container";

export function SiteHeaderPlWspolpraca() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const header = headerRef.current;
      if (!header) return;
      if (window.scrollY > 10) header.classList.add("bg-[#0C2D3A]/70", "backdrop-blur", "ring-1", "ring-white/10");
      else header.classList.remove("bg-[#0C2D3A]/70", "backdrop-blur", "ring-1", "ring-white/10");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="header" ref={headerRef} className="fixed inset-x-0 top-0 z-50 transition">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="/pl" className="flex items-center gap-3">
            <img src="/logo.png" alt="SERPAKOWSKI Nieruchomości" className="h-12 w-12 rounded-full object-cover" />
            <span className="font-serif whitespace-nowrap text-base sm:text-lg md:text-xl tracking-wide text-white">SERPAKOWSKI Nieruchomości</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-200/80">
            <a href="/pl#services" className="hover:text-white">Usługi</a>
            <a href="/pl/wspolpraca" className="hover:text-white">Współpraca</a>
            <a href="#contact" className="hover:text-white">Kontakt</a>

            <div className="flex items-center gap-3">
              <a href="/pl/wspolpraca" className="text-xs uppercase tracking-widest text-white" aria-current="true" title="Aktualny język">PL</a>
              <span className="text-white/30">/</span>
              <a href="/wspolpraca" className="text-xs uppercase tracking-widest text-white/80 hover:text-white" title="Rosyjski">RU</a>
              <span className="text-white/30">/</span>
              <a href="/en/partnership" className="text-xs uppercase tracking-widest text-white/80 hover:text-white" title="English">EN</a>
            </div>

            <Button href="#contact">Zostaw zgłoszenie</Button>
          </nav>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">☰</button>
        </div>
      </Container>
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0C2D3A]/95 backdrop-blur border-t border-white/10">
          <Container>
            <div className="py-4 flex flex-col gap-4 text-neutral-200/90">
              <a href="/pl#services" className="hover:text-white">Usługi</a>
              <a href="/pl/wspolpraca" className="hover:text-white">Współpraca</a>
              <a href="#contact" className="hover:text-white">Kontakt</a>

              <div className="flex items-center gap-3 pt-2">
                <a href="/pl/wspolpraca" className="text-xs uppercase tracking-widest text-white" aria-current="true" title="Aktualny język">PL</a>
                <span className="text-white/30">/</span>
                <a href="/wspolpraca" className="text-xs uppercase tracking-widest text-white/80 hover:text-white" title="Rosyjski">RU</a>
                <span className="text-white/30">/</span>
                <a href="/en/partnership" className="text-xs uppercase tracking-widest text-white/80 hover:text-white" title="English">EN</a>
              </div>

              <Button href="#contact" className="justify-center">Zostaw zgłoszenie</Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
