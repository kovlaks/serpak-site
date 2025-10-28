"use client";

import React, { useEffect, useState } from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

function Button({ children, href = "#", onClick }: { children: React.ReactNode; href?: string; onClick?: () => void }) {
  const Comp: any = href ? "a" : "button";
  return (
    <Comp
      href={href}
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold tracking-wide shadow-sm ring-1 ring-white/15 hover:ring-white/25 transition bg-white/10 backdrop-blur-md text-white hover:bg-white/15"
    >
      {children}
    </Comp>
  );
}

function PropertyCard({ title, location, price, imageUrl }: { title: string; location: string; price: string; imageUrl: string }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10 hover:ring-white/20 transition">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={imageUrl} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="p-5">
        <div className="text-neutral-200 text-lg font-medium">{title}</div>
        <div className="text-neutral-400 text-sm mt-1">{location}</div>
        <div className="mt-3 text-amber-300 font-semibold">{price}</div>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-semibold text-white">{value}</div>
      <div className="mt-1 text-sm text-neutral-400">{label}</div>
    </div>
  );
}

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Temporary Warsaw hero image (can be watermarked). Replace with your URL:
  const heroImageUrl = "https://st2.depositphotos.com/35126858/45569/i/1600/depositphotos_455695662-stock-photo-warsaw-poland-01-12-2020.jpg";

  useEffect(() => {
    const onScroll = () => {
      const header = document.getElementById("header");
      if (!header) return;
      if (window.scrollY > 10) header.classList.add("bg-neutral-950/70", "backdrop-blur", "ring-1", "ring-white/10");
      else header.classList.remove("bg-neutral-950/70", "backdrop-blur", "ring-1", "ring-white/10");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header */}
      <header id="header" className="fixed inset-x-0 top-0 z-50 transition">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-300 to-amber-500"></div>
              <span className="font-serif text-xl tracking-wide text-white">SERPAK Nieruchomości</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
              <a href="#communities" className="hover:text-white">Объекты</a>
              <a href="#about" className="hover:text-white">О нас</a>
              <a href="#services" className="hover:text-white">Услуги</a>
              <a href="#contact" className="hover:text-white">Контакты</a>
              <div className="flex items-center gap-3">
                <a href="#" className="text-xs uppercase tracking-widest text-white">PL</a>
                <span className="text-neutral-600">/</span>
                <a href="#" className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white">RU</a>
                <span className="text-neutral-600">/</span>
                <a href="#" className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white">EN</a>
              </div>
              <Button href="#contact">Оставить заявку</Button>
            </nav>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">☰</button>
          </div>
        </Container>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-neutral-950/95 backdrop-blur">
            <Container>
              <div className="py-4 flex flex-col gap-4 text-neutral-300">
                <a href="#communities" className="hover:text-white">Объекты</a>
                <a href="#about" className="hover:text-white">О нас</a>
                <a href="#services" className="hover:text-white">Услуги</a>
                <a href="#contact" className="hover:text-white">Контакты</a>
                <Button href="#contact">Оставить заявку</Button>
              </div>
            </Container>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative isolate pt-24">
        <div className="absolute inset-0 -z-10">
          {heroImageUrl ? (
            <img
              src={heroImageUrl}
              alt="Warsaw skyline"
              className="h-full w-full object-cover"
            />
          ) : (
            <video className="h-full w-full object-cover" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2070&auto=format&fit=crop">
              <source src="" type="video/mp4" />
            </video>
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0C2D3A]/40 to-[#0C2D3A]" />
        </div>
        <Container>
          <div className="py-28 sm:py-36 md:py-44">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white max-w-3xl leading-tight">
              Искусство находить<strong className="text-amber-300"> лучшее жильё</strong> в Варшаве
            </h1>
            <p className="mt-6 max-w-xl text-base text-neutral-300">
              Премиальный и комфортный сегменты аренды — без компромиссов. Мы соединяем клиентов с тщательной подборкой квартир и домов.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Button href="#communities">Смотреть объекты</Button>
              <a href="#contact" className="text-sm text-neutral-300 hover:text-white">Связаться с нами →</a>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust / Stats */}
      <section className="py-16 border-t border-white/10 bg-gradient-to-b from-neutral-950 to-neutral-950">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat value="150+" label="активных объявлений" />
            <Stat value="24ч" label="срок подбора под клиента" />
            <Stat value="9.6/10" label="оценка сервиса" />
            <Stat value="3 языка" label="PL / RU / EN" />
          </div>
        </Container>
      </section>

      {/* Featured Properties */}
      <section id="communities" className="py-20">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-serif text-3xl text-white">Избранные объекты</h2>
              <p className="mt-2 text-neutral-400">Подборка свежих предложений от собственников и проверенных партнёров.</p>
            </div>
            <a href="#" className="text-sm text-neutral-300 hover:text-white">Смотреть все</a>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <PropertyCard title="Скансен в Мокотове" location="Мокотов, Варшава" price="6 500 PLN / мес" imageUrl="https://images.unsplash.com/photo-1505691723518-36a5ac3b2b8f?q=80&w=2069&auto=format&fit=crop" />
            <PropertyCard title="Видовая на Вислу" location="Повисяле, Варшава" price="8 900 PLN / мес" imageUrl="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2069&auto=format&fit=crop" />
            <PropertyCard title="Лофт у метро Рондо ONZ" location="Śródmieście, Варшава" price="7 400 PLN / мес" imageUrl="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2069&auto=format&fit=crop" />
          </div>
        </Container>
      </section>

      {/* Values / About */}
      <section id="about" className="py-20 border-t border-white/10">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl text-white">Качество. Честность. Детали.</h2>
              <p className="text-neutral-300">Мы работаем на уровне международных стандартов сервиса: тщательная проверка объявлений, прозрачные условия, сопровождаем каждый шаг сделки.</p>
              <ul className="space-y-3 text-neutral-300">
                <li>• Отдельные подходы для премиального и комфорт-класса</li>
                <li>• Фото и видео 4K, планы квартир, 3D‑тур</li>
                <li>• Юридическое сопровождение и безопасные депозиты</li>
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden ring-1 ring-white/10">
              <img src="https://images.unsplash.com/photo-1501183007986-d0d080b147f9?q=80&w=2069&auto=format&fit=crop" alt="Warsaw skyline" className="w-full h-full object-cover" />
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <Container>
          <h2 className="font-serif text-3xl text-white">Услуги</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[{
              t: "Аренда для арендаторов",
              d: "Подбор за 24 часа, переговоры, проверка договора, подключение коммунальных услуг.",
            }, {
              t: "Аренда для собственников",
              d: "Фотосъёмка, подготовка объявления, маркетинг, отбор надёжных арендаторов.",
            }, {
              t: "Премиум сопровождение",
              d: "Консьерж‑подход, приватные показы, подбор по закрытым базам.",
            }].map((it, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6">
                <div className="text-lg text-white font-medium">{it.t}</div>
                <p className="mt-2 text-sm text-neutral-400">{it.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="relative isolate py-20 border-t border-white/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,200,100,0.08),transparent_60%)]" />
        <Container>
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="font-serif text-3xl text-white">Расскажите, что ищете</h2>
              <p className="mt-2 text-neutral-300 max-w-md">Оставьте контакты — менеджер свяжется в течение рабочего часа (пн–пт 10:00–18:00).</p>
              <div className="mt-6 flex gap-3">
                <Button href="#">Заполнить форму</Button>
                <a className="text-sm text-neutral-300 hover:text-white" href="https://wa.me/" target="_blank" rel="noreferrer">Написать в WhatsApp →</a>
              </div>
              <p className="mt-3 text-xs text-neutral-500">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.</p>
            </div>
            <div className="rounded-2xl p-6 ring-1 ring-white/10 bg-neutral-900/60">
              {/* Replace the form below with your Google Form iframe if you want */}
              <form className="grid gap-4">
                <input placeholder="Имя" className="w-full rounded-xl bg-neutral-800/80 px-4 py-3 text-sm text-white placeholder-neutral-400 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300" />
                <input placeholder="Телеграм или телефон" className="w-full rounded-xl bg-neutral-800/80 px-4 py-3 text-sm text-white placeholder-neutral-400 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300" />
                <textarea placeholder="Какая квартира нужна? Район, бюджет, сроки" rows={4} className="w-full rounded-xl bg-neutral-800/80 px-4 py-3 text-sm text-white placeholder-neutral-400 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300" />
                <Button>Отправить</Button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm text-neutral-400">
            <div>
              <div className="font-serif text-white text-lg">SERPAK Nieruchomości</div>
              <p className="mt-2 max-w-xs">Agencja nieruchomości w Warszawie. Wynajem premium i komfort-klasa.</p>
            </div>
            <div>
              <div className="text-white">Навигация</div>
              <ul className="mt-2 space-y-2">
                <li><a href="#communities" className="hover:text-white">Объекты</a></li>
                <li><a href="#services" className="hover:text-white">Услуги</a></li>
                <li><a href="#about" className="hover:text-white">О нас</a></li>
                <li><a href="#contact" className="hover:text-white">Контакты</a></li>
              </ul>
            </div>
            <div>
              <div className="text-white">Контакты</div>
              <ul className="mt-2 space-y-2">
                <li>Warszawa, Polska</li>
                <li><a href="mailto:hello@example.com" className="hover:text-white">hello@example.com</a></li>
                <li><a href="tel:+48453053969" className="hover:text-white">+48 453 053 969</a></li>
              </ul>
            </div>
            <div>
              <div className="text-white">Юридическое</div>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="hover:text-white">Polityka prywatności</a></li>
                <li><a href="#" className="hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 text-xs text-neutral-500">© {new Date().getFullYear()} SERPAK Nieruchomości. Wszystkie prawa zastrzeżone.</div>
        </Container>
      </footer>
    </div>
  );
}
