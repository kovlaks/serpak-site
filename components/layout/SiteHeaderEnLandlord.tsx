"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import { Container } from "./Container";

export function SiteHeaderEnLandlord() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

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
    <header
      id="header"
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 transition"
      onKeyDown={(event) => {
        if (event.key === "Escape" && mobileMenuOpen) {
          event.preventDefault();
          setMobileMenuOpen(false);
          mobileMenuButtonRef.current?.focus();
        }
      }}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-2">
          <a href="/en" aria-label="SERPAKOWSKI Nieruchomości" className="flex min-w-0 items-center gap-2 min-[375px]:gap-3">
            <img src="/logo.png" alt="SERPAKOWSKI Nieruchomości" className="h-10 w-10 shrink-0 rounded-full object-cover min-[375px]:h-12 min-[375px]:w-12" />
            <span className="font-serif text-base leading-tight tracking-wide text-white sm:text-lg md:text-xl xl:whitespace-nowrap">SERPAKOWSKI Nieruchomości</span>
          </a>

          <nav aria-label="Primary navigation" className="hidden xl:flex shrink-0 items-center gap-8 whitespace-nowrap text-sm text-neutral-200/80">
            <a href="/en#services" className="hover:text-white">Services</a>
            <a href="/en/partnership" className="hover:text-white">Partnership</a>
            <a href="/en#contact" className="hover:text-white">Contact</a>

            <div className="flex items-center gap-3">
              <a href="/pl/landlord" className="text-xs uppercase tracking-widest text-white/80 hover:text-white" title="Polish">PL</a>
              <span className="text-white/30">/</span>
              <a href="/ru/landlord" className="text-xs uppercase tracking-widest text-white/80 hover:text-white" title="Russian">RU</a>
              <span className="text-white/30">/</span>
              <a href="/en/landlord" className="text-xs uppercase tracking-widest text-white" aria-current="true" title="Current language">EN</a>
            </div>

            <Button href="/en#contact">Submit request</Button>
          </nav>

          <button
            ref={mobileMenuButtonRef}
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="english-mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-md text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300 xl:hidden"
          >
            ☰
          </button>
        </div>
      </Container>
      <nav
        id="english-mobile-navigation"
        aria-label="Primary navigation"
        hidden={!mobileMenuOpen}
        onClick={(event) => {
          if (event.target instanceof Element && event.target.closest("a[href]")) {
            setMobileMenuOpen(false);
          }
        }}
        className="max-h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain border-t border-white/10 bg-[#0C2D3A]/95 backdrop-blur supports-[height:100dvh]:max-h-[calc(100dvh-4rem)] xl:hidden"
      >
        <Container>
          <div className="flex flex-col gap-1 py-4 text-neutral-200/90 [&_a:focus-visible]:outline [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-2 [&_a:focus-visible]:outline-amber-300">
            <a href="/en#services" className="flex min-h-11 items-center hover:text-white">Services</a>
            <a href="/en/partnership" className="flex min-h-11 items-center hover:text-white">Partnership</a>
            <a href="/en#contact" className="flex min-h-11 items-center hover:text-white">Contact</a>

            <div className="flex items-center gap-2">
              <a href="/pl/landlord" className="inline-flex min-h-11 min-w-11 items-center justify-center text-xs uppercase tracking-widest text-white/80 hover:text-white" title="Polish">PL</a>
              <span className="text-white/30">/</span>
              <a href="/ru/landlord" className="inline-flex min-h-11 min-w-11 items-center justify-center text-xs uppercase tracking-widest text-white/80 hover:text-white" title="Russian">RU</a>
              <span className="text-white/30">/</span>
              <a href="/en/landlord" className="inline-flex min-h-11 min-w-11 items-center justify-center text-xs uppercase tracking-widest text-white" aria-current="true" title="Current language">EN</a>
            </div>

            <Button href="/en#contact" className="justify-center">Submit request</Button>
          </div>
        </Container>
      </nav>
    </header>
  );
}
