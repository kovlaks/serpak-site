"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./Button";
import { Container } from "./Container";
import { Locale, defaultLocale, locales, nav, pathFor, switchLocale } from "../../lib/i18n";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname() || "/ru";
  const locale = ((pathname.split('/')[1] || defaultLocale) as Locale);
  const t = nav[(locales as readonly string[]).includes(locale) ? locale : defaultLocale];

  useEffect(() => {
    const onScroll = () => { const h = headerRef.current; if (!h) return; if (window.scrollY > 10) h.classList.add("bg-[#0C2D3A]/70","backdrop-blur","ring-1","ring-white/10"); else h.classList.remove("bg-[#0C2D3A]/70","backdrop-blur","ring-1","ring-white/10"); };
    window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 transition"><Container><div className="flex h-16 items-center justify-between">
    <a href={pathFor(locale, 'home')} className="flex items-center gap-3"><img src="/logo.png" alt="SERPAKOWSKI Nieruchomości" className="h-12 w-12 rounded-full object-cover"/><span className="font-serif whitespace-nowrap text-base sm:text-lg md:text-xl tracking-wide text-white">SERPAKOWSKI Nieruchomości</span></a>
    <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-200/80">
      <a href={`${pathFor(locale,'home')}#services`} className="hover:text-white">{t.services}</a>
      <a href={pathFor(locale,'partnership')} className="hover:text-white">{t.partnership}</a>
      <a href={pathFor(locale,'contact')} className="hover:text-white">{t.contact}</a>
      <div className="flex items-center gap-3">{locales.map((l, i)=><React.Fragment key={l}><a href={switchLocale(pathname,l)} className={`text-xs uppercase tracking-widest ${l===locale?'text-white':'text-white/70 hover:text-white'}`}>{l}</a>{i<2&&<span className="text-white/30">/</span>}</React.Fragment>)}</div>
      <Button href={pathFor(locale,'contact')}>{t.submit}</Button>
    </nav>
    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">☰</button>
  </div></Container>
  {mobileMenuOpen && <div className="md:hidden bg-[#0C2D3A]/95 backdrop-blur border-t border-white/10"><Container><div className="py-4 flex flex-col gap-4 text-neutral-200/90">
    <a href={`${pathFor(locale,'home')}#services`} className="hover:text-white">{t.services}</a><a href={pathFor(locale,'partnership')} className="hover:text-white">{t.partnership}</a><a href={pathFor(locale,'contact')} className="hover:text-white">{t.contact}</a>
    <div className="flex items-center gap-3 pt-2">{locales.map((l,i)=><React.Fragment key={l}><a href={switchLocale(pathname,l)} className={`text-xs uppercase tracking-widest ${l===locale?'text-white':'text-white/70'}`}>{l}</a>{i<2&&<span className="text-white/30">/</span>}</React.Fragment>)}</div>
    <Button href={pathFor(locale,'contact')} className="justify-center">{t.submit}</Button>
  </div></Container></div>}</header>;
}
