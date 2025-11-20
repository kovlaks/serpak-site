"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import { Container } from "./Container";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <header
      id="header"
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 transition"
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="SERPAKOWSKI Nieruchomości"
              className="h-12 w-12 rounded-full object-cover"
            />
            <span className="font-serif whitespace-nowrap text-base sm:text-lg md:text-xl tracking-wide text-white">
              SERPAKOWSKI Nieruchomości
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-200/80">
            <a href="#services" className="hover:text-white">
              Услуги
            </a>
            <a href="#contact" className="hover:text-white">
              Контакты
            </a>

            <div className="flex items-center gap-3">
              <button
                type="button"
                title="PL — скоро"
                className="text-xs uppercase tracking-widest text-white/50 cursor-not-allowed"
                aria-disabled="true"
              >
                PL
              </button>
              <span className="text-white/30">/</span>
              <span className="text-xs uppercase tracking-widest text-white" aria-current="true" title="Текущий язык">
                RU
              </span>
              <span className="text-white/30">/</span>
              <button
                type="button"
                title="EN — soon"
                className="text-xs uppercase tracking-widest text-white/50 cursor-not-allowed"
                aria-disabled="true"
              >
                EN
              </button>
            </div>

            <Button href="#contact">Оставить заявку</Button>
          </nav>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
            ☰
          </button>
        </div>
      </Container>
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0C2D3A]/95 backdrop-blur border-t border-white/10">
          <Container>
            <div className="py-4 flex flex-col gap-4 text-neutral-200/90">
              <a href="#services" className="hover:text-white">
                Услуги
              </a>
              <a href="#contact" className="hover:text-white">
                Контакты
              </a>

              <div className="flex items-center gap-3 pt-2">
                <button type="button" title="PL — скоро" className="text-xs uppercase tracking-widest text-white/50 cursor-not-allowed">
                  PL
                </button>
                <span className="text-white/30">/</span>
                <span className="text-xs uppercase tracking-widest text-white" aria-current="true" title="Текущий язык">
                  RU
                </span>
                <span className="text-white/30">/</span>
                <button type="button" title="EN — soon" className="text-xs uppercase tracking-widest text-white/50 cursor-not-allowed">
                  EN
                </button>
              </div>

              <Button href="#contact" className="justify-center">
                Оставить заявку
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
