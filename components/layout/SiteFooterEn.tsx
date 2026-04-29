import React from "react";
import { Container } from "./Container";

export function SiteFooterEn() {
  return (
    <footer className="py-12 bg-gradient-to-b from-transparent to-[#0A2530]">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm text-neutral-200/80">
          <div>
            <div className="flex items-center gap-3">
              <div aria-hidden="true" className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 ring-1 ring-white/15 shadow-[0_2px_8px_rgba(0,0,0,0.25)]" />
              <div className="font-serif text-white text-lg whitespace-nowrap">SERPAKOWSKI Nieruchomości</div>
            </div>
            <div className="mt-4 flex items-center gap-4 text-neutral-200/80">
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
              <a href="https://t.me/" target="_blank" rel="noreferrer" className="hover:text-white">Telegram</a>
            </div>
          </div>
          <div>
            <div className="text-white">Navigation</div>
            <ul className="mt-2 space-y-2">
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="/wspolpraca" className="hover:text-white">Partnership</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white">Contact</div>
            <ul className="mt-2 space-y-2">
              <li>Warsaw, Poland</li>
              <li><a href="mailto:kovlaks@gmail.com" className="hover:text-white">kovlaks@gmail.com</a></li>
              <li><a href="tel:+48453053969" className="hover:text-white">+48 453 053 969</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white">Legal information</div>
            <ul className="mt-2 space-y-2">
              <li><a href="/privacy" className="hover:text-white">Privacy policy</a></li>
              <li><a href="#" className="hover:text-white">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-[13px] leading-relaxed text-neutral-200/75">
          <div>NIP: 1133184502 • REGON: 543202915</div>
          <div>Mailing address: Złota 75A/7, 00-819 Warsaw</div>
        </div>
        <div className="mt-10 text-xs text-neutral-200/60">© {new Date().getFullYear()} SERPAKOWSKI Nieruchomości. All rights reserved.</div>
      </Container>
    </footer>
  );
}
