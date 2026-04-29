import { SiteFooterPl } from "../../../components/layout/SiteFooterPl";
import { SiteHeaderPl } from "../../../components/layout/SiteHeaderPl";

export const metadata = {
  title: "Najem mieszkania w Warszawie | SERPAKOWSKI Nieruchomości",
  description:
    "Pomagamy bezpiecznie znaleźć mieszkanie w Warszawie: wybór ofert, weryfikacja, umowa, najem okazjonalny i przekazanie lokalu.",
};

const worryCards = [
  {
    title: "W gąszczu ogłoszeń trudno znaleźć sensowną ofertę",
    description: "Filtrujemy rynek i przygotowujemy krótki wybór realnych, sprawdzonych mieszkań.",
  },
  {
    title: "Obawiasz się błędu w umowie i dodatkowych kosztów",
    description: "Analizujemy umowę punkt po punkcie, wskazujemy ryzyka i proponujemy poprawki.",
  },
  {
    title: "Nie wiesz, jak zweryfikować właściciela",
    description: "Sprawdzamy tytuł własności, uprawnienia i podstawowe ryzyka związane z lokalem.",
  },
  {
    title: "Nie chcesz negocjować samodzielnie",
    description: "Prowadzimy negocjacje w Twoim imieniu: cena, kaucja, warunki wejścia i wyjścia.",
  },
  {
    title: "Nie chcesz przeoczyć niczego przy odbiorze",
    description: "Robimy dokładny odbiór z protokołem, zdjęciami/wideo i stanami liczników.",
  },
  {
    title: "Co jeśli po wprowadzeniu pojawią się problemy?",
    description: "Przez 14 dni po przekazaniu lokalu jesteśmy dostępni w sprawach organizacyjnych i bieżących.",
  },
];

const serviceList = [
  { title: "Dobór mieszkania pod Twoje potrzeby", description: "Porządkujemy wymagania, tworzymy long-listę i short-listę z komentarzami." },
  { title: "Organizacja prezentacji i logistyki", description: "Planujemy trasę, ustalamy terminy i w razie potrzeby organizujemy dojazd." },
  { title: "Checklista techniczna mieszkania", description: "Sprawdzamy nie tylko estetykę: instalacje, okna, wilgoć, wentylację, sprzęt, hałas, klatkę i parking." },
  { title: "Weryfikacja właściciela i mieszkania", description: "Rejestry, dokumenty, uprawnienia, zgody współwłaścicieli — podstawowy filtr prawny." },
  { title: "Umowa i negocjacje", description: "Wyjaśniamy zapisy, ograniczamy ryzyka, proponujemy poprawki i prowadzimy rozmowy." },
  { title: "Najem okazjonalny pod klucz", description: "Wzory zgód, komunikacja stron, notariusz i pełne wsparcie procesu." },
  { title: "Podpisanie i przekazanie lokalu", description: "Protokół zdawczo-odbiorczy, zdjęcia/wideo, liczniki, klucze i opis usterek." },
  { title: "Wsparcie po wprowadzeniu", description: "Pomoc w sprawach mediów, internetu, administracji i zapisów umowy." },
  { title: "Pomoc przy wcześniejszym zakończeniu najmu", description: "Wsparcie przy wyjściu z umowy i znalezieniu zastępstwa po uzgodnieniu z właścicielem." },
];

const steps = [
  { title: "Zgłoszenie i brief", details: "Wypełniasz krótki formularz lub rozmawiasz z nami. Ustalamy budżet, dzielnice, potrzeby rodziny, status pobytu i kluczowe kryteria." },
  { title: "Selekcja i rekomendacje", details: "Analizujemy rynek, wysyłamy short-listę mieszkań z plusami i minusami oraz planujemy prezentacje." },
  { title: "Prezentacje, weryfikacja, umowa", details: "Oglądamy mieszkania, sprawdzamy lokal i właściciela, omawiamy umowę i prowadzimy negocjacje." },
  { title: "Podpisanie, przekazanie, wsparcie", details: "Jesteśmy przy odbiorze, dokumentujemy stan lokalu i wspieramy Cię w pierwszych tygodniach najmu." },
];

const faq = [
  { question: "Kto płaci prowizję?", answer: "Model rozliczenia ustalamy z góry i zapisujemy w umowie o współpracy. Bez niespodzianek na końcu procesu." },
  { question: "Czy cały proces może być zdalny?", answer: "Tak. Wideoprezentacje, uzgodnienia online i podpisanie przez pełnomocnika — dopasowujemy tryb do sytuacji." },
  { question: "Jaka jest Wasza rola w transakcji?", answer: "Profesjonalnie reprezentujemy interesy Najemcy i prowadzimy proces od początku do końca." },
  { question: "Co jeśli właściciel nie zaakceptuje poprawek do umowy?", answer: "Wcześniej ustalamy, gdzie można pójść na kompromis, a gdzie lepiej zrezygnować. Decyzja należy do Ciebie, ale z pełną informacją." },
];

const advantages = [
  { title: "Bez wizyt w biurze", description: "Poszukiwanie mieszkania i przygotowanie zapytania online.", icon: "🧭" },
  { title: "0 zł przedpłaty", description: "Wynagrodzenie po podpisaniu umowy najmu.", icon: "💵" },
  { title: "Pełne wsparcie", description: "Prezentacje, weryfikacja właściciela, analiza umowy i przekazanie lokalu — to nasza odpowiedzialność.", icon: "⚖️" },
  { title: "Wsparcie po wprowadzeniu", description: "Jesteśmy w kontakcie także po przekazaniu mieszkania.", icon: "🧡" },
];

const messengerLinks = [
  { label: "Telegram", href: "https://t.me/+48453053969", gradient: "from-[#229ED9] to-[#1c94cb]", icon: "✉️" },
  { label: "WhatsApp", href: "https://wa.me/48453053969", gradient: "from-[#25D366] to-[#1fb95a]", icon: "💬" },
  { label: "Viber", href: "viber://chat?number=%2B380679762988", gradient: "from-[#7360F2] to-[#5f47ec]", icon: "📞" },
];

export default function Page() {
  return <div className="min-h-screen bg-[#0C2D3A] text-neutral-100"><SiteHeaderPl /><main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 space-y-20">{/* Hero */}<section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0C2D3A] p-8 sm:p-12 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"><div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,193,7,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_35%)]" /><div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center"><div className="space-y-6"><p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Wsparcie najmu w Warszawie</p><h1 className="font-serif text-4xl sm:text-5xl text-white leading-tight">Wszystko, aby droga do nowego domu była spokojna.</h1><p className="text-lg text-neutral-200/90 max-w-2xl">Bezpieczny najem mieszkania w Warszawie pod klucz: od pierwszych ofert po przekazanie kluczy i wsparcie po wprowadzeniu.</p><div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-amber-200 ring-1 ring-amber-200/30">Indywidualne wsparcie Najemcy: bezpiecznie, przejrzyście i z dbałością o szczegóły.</div><div className="flex flex-wrap gap-3 pt-2"><a href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">Znaleźć mieszkanie z nami</a><a href="#contact" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10">Uzyskaj konsultację</a></div><div className="flex flex-wrap items-center gap-2 pt-3"><span className="text-xs uppercase tracking-[0.12em] text-neutral-200/75">Skontaktuj się w komunikatorze</span>{messengerLinks.map((link) => (<a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${link.gradient} px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] ring-1 ring-white/15 transition hover:-translate-y-0.5`}><span>{link.icon}</span>{link.label}</a>))}</div></div><div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10"><div className="space-y-4"><div className="flex items-center gap-3"><div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-amber-300 to-amber-500 text-[#0C2D3A] flex items-center justify-center text-xl font-bold">✓</div><div><div className="text-sm uppercase tracking-[0.12em] text-neutral-200/70">Wsparcie 14 dni</div><div className="text-lg font-semibold text-white">Po przekazaniu lokalu — jesteśmy obok</div></div></div><div className="rounded-2xl bg-[#0A2530] p-5 ring-1 ring-white/5"><div className="text-sm text-neutral-200/80">Krótko o procesie</div><p className="mt-2 text-base text-white/90 leading-relaxed">Od briefu i selekcji mieszkań po analizę umowy, negocjacje, protokół zdawczo-odbiorczy i kontakt po przeprowadzce.</p></div><div className="grid grid-cols-2 gap-3 text-sm text-neutral-200/90"><div className="rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">Short-lista w 24–48 godzin</div><div className="rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">Filtr prawny bez trudnego języka</div><div className="rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">Checklista techniczna lokalu</div><div className="rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">Wszystkie ustalenia na piśmie</div></div></div></div></div></section>

      {/* Zalety dla Najemcy */}
      <section className="rounded-3xl bg-[#0A2530] p-6 sm:p-8 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><div className="space-y-2"><p className="text-xs uppercase tracking-[0.16em] text-amber-200/80">Najważniejsze</p><h2 className="font-serif text-3xl text-white">Dlaczego warto wynajmować z nami</h2></div><span className="text-sm text-neutral-200/80"></span></div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{advantages.map((item) => (<div key={item.title} className="flex flex-col gap-3 rounded-2xl bg-white/5 px-4 py-5 text-left ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"><div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-300/20 text-base font-semibold text-amber-100 ring-1 ring-amber-200/30">{item.icon}</div><div className="space-y-1"><h3 className="text-lg font-semibold text-white">{item.title}</h3><p className="text-sm text-neutral-200/85 leading-relaxed">{item.description}</p></div></div>))}</div>
      </section>

      <section className="grid gap-8 rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 lg:grid-cols-[1.1fr_0.9fr]"><div className="space-y-3"><p className="text-xs uppercase tracking-[0.16em] text-amber-200/80">Dla kogo</p><h2 className="font-serif text-3xl text-white">Dla tych, którzy chcą wynająć spokojnie i bez ryzyka</h2><p className="text-neutral-200/90 max-w-2xl">Przejmujemy wyszukiwanie, weryfikację i negocjacje, abyś mógł zamieszkać bez stresu.</p></div><ul className="space-y-3 text-neutral-100/90">{["Przeprowadzasz się do Warszawy i nie wiesz, od czego zacząć.","Nie chcesz tracić czasu na setki ogłoszeń i zawiłości prawne.","Masz złe doświadczenia z najmem i chcesz ich uniknąć.","Potrzebujesz profesjonalnego wsparcia w negocjacjach."].map((item) => (<li key={item} className="flex gap-3 rounded-2xl bg-[#0A2530] px-4 py-3 text-base ring-1 ring-white/5"><span className="text-amber-300">•</span><span>{item}</span></li>))}</ul></section>

      <section className="space-y-6"><div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs uppercase tracking-[0.16em] text-amber-200/80">Odpowiedzi na obawy</p><h2 className="font-serif text-3xl text-white">Co przestanie Cię martwić</h2></div><a href="#contact" className="text-sm text-amber-200 hover:text-amber-100">Skontaktuj się →</a></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{worryCards.map((card) => (<div key={card.title} className="rounded-2xl bg-[#0A2530] p-5 ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-amber-200/30"><div className="flex items-start gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-amber-300">✦</span><div className="space-y-1"><h3 className="text-lg font-semibold text-white">{card.title}</h3><p className="text-neutral-200/80 text-sm leading-relaxed">{card.description}</p></div></div></div>))}</div></section>

      <section className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10"><div className="space-y-3"><p className="text-xs uppercase tracking-[0.16em] text-amber-200/80">Zakres wsparcia</p><h2 className="font-serif text-3xl text-white">Co dokładnie robimy dla Najemcy</h2></div><div className="mt-8 grid gap-4 md:grid-cols-2">{serviceList.map((item) => (<div key={item.title} className="flex items-start gap-4 rounded-2xl bg-[#0C2D3A] px-5 py-4 ring-1 ring-white/10"><span className="mt-1 text-amber-300">➜</span><div className="space-y-1"><h3 className="text-lg font-semibold text-white">{item.title}</h3><p className="text-sm text-neutral-200/85 leading-relaxed">{item.description}</p></div></div>))}</div></section>

      <section className="space-y-6"><div className="space-y-2"><p className="text-xs uppercase tracking-[0.16em] text-amber-200/80">FAQ</p><h2 className="font-serif text-3xl text-white">Najczęstsze pytania</h2></div><div className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10">{faq.map((item) => (<div key={item.question} className="bg-white/5 p-5"><h3 className="text-lg font-semibold text-white">{item.question}</h3><p className="mt-2 text-neutral-200/85 text-sm leading-relaxed">{item.answer}</p></div>))}</div></section>

      <section id="contact" className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0A2530] p-8 ring-1 ring-white/10"><div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(255,193,7,0.16),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.08),transparent_45%)]" /><div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]"><div className="space-y-4"><p className="text-xs uppercase tracking-[0.16em] text-amber-200/80">Zostaw swoje dane kontaktowe</p><h2 className="font-serif text-3xl text-white">Gotowi zacząć?</h2><p className="text-neutral-200/90 max-w-2xl">Skontaktujemy się z Tobą, zadamy kilka pytań i pokażemy najlepszy plan działania.</p></div></div></section>
</main><SiteFooterPl /></div>;
}
