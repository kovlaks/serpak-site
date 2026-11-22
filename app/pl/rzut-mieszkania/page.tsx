import type { Metadata } from "next";
import { Container } from "../../../components/layout/Container";
import { SiteFooterPl } from "../../../components/layout/SiteFooterPl";
import { SiteHeaderPl } from "../../../components/layout/SiteHeaderPl";
import { FaqAccordion } from "../landlord/FaqAccordion";

export const metadata: Metadata = {
  title: "Rzut mieszkania 2D do ogłoszenia | SERPAKOWSKI",
  description:
    "Czytelne rzuty mieszkań 2D do ogłoszeń sprzedaży i wynajmu nieruchomości. Samodzielna usługa dla właścicieli, agentów i biur nieruchomości.",
  alternates: {
    canonical: "https://www.serpakowski.pl/pl/rzut-mieszkania",
  },
  robots: { index: false, follow: false },
};

const heroBenefits = [
  "Czytelny układ pomieszczeń.",
  "Lepsza prezentacja nieruchomości.",
  "Materiał do ogłoszeń sprzedaży i wynajmu.",
  "Dostępność jako samodzielna usługa.",
];

const benefits = [
  {
    title: "Lepsze zrozumienie przestrzeni",
    description: "Potencjalny klient może zobaczyć rozmieszczenie pomieszczeń i ich wzajemne połączenia.",
  },
  {
    title: "Czytelniejsze ogłoszenie",
    description: "Rzut uzupełnia zdjęcia oraz opis nieruchomości.",
  },
  {
    title: "Łatwiejsza ocena mieszkania",
    description: "Najemca lub kupujący może wcześniej ocenić, czy układ odpowiada jego potrzebom.",
  },
  {
    title: "Profesjonalna prezentacja",
    description: "Spójne materiały wizualne pomagają przedstawić nieruchomość w przejrzysty sposób.",
  },
];

const planDetails = [
  "Rozmieszczenie pomieszczeń.",
  "Układ ścian.",
  "Lokalizacja drzwi i okien.",
  "Nazwy pomieszczeń.",
  "Orientacyjne rozmieszczenie wyposażenia.",
  "Dodatkowe informacje przestrzenne, jeśli dostępne są odpowiednie dane.",
];

const audiences = [
  {
    title: "Właściciele mieszkań na wynajem",
    description: "Chcesz przedstawić układ mieszkania potencjalnym najemcom jeszcze przed prezentacją.",
  },
  {
    title: "Właściciele sprzedający nieruchomość",
    description: "Chcesz uzupełnić ogłoszenie sprzedaży o czytelny plan mieszkania.",
  },
  {
    title: "Agenci nieruchomości",
    description: "Potrzebujesz dodatkowego materiału wizualnego do prezentacji obsługiwanych nieruchomości.",
  },
  {
    title: "Biura nieruchomości",
    description: "Chcesz uzupełnić swoje oferty o spójne i czytelne rzuty mieszkań.",
  },
];

const uses = [
  "Ogłoszenia na portalach nieruchomości.",
  "Strony internetowe.",
  "Materiały informacyjne dla klientów.",
  "Prezentacje ofert.",
  "Komunikacja z potencjalnymi najemcami i kupującymi.",
];

const steps = [
  {
    title: "Kontakt",
    description: "Przekazujesz podstawowe informacje dotyczące nieruchomości.",
  },
  {
    title: "Ustalenie zakresu",
    description: "Ustalamy dostępne materiały, potrzebne informacje oraz oczekiwany zakres opracowania.",
  },
  {
    title: "Przygotowanie rzutu",
    description: "Opracowujemy czytelną wizualizację układu mieszkania na podstawie uzgodnionych danych.",
  },
  {
    title: "Przekazanie materiału",
    description: "Otrzymujesz przygotowany rzut zgodnie z ustalonym zakresem współpracy.",
  },
];

const faqItems = [
  {
    question: "Czy mogę zamówić sam rzut mieszkania?",
    answer: ["Tak. Rzut mieszkania 2D jest dostępny jako samodzielna usługa."],
  },
  {
    question: "Czy rzut nadaje się do ogłoszenia sprzedaży mieszkania?",
    answer: ["Tak. Rzut może uzupełniać ogłoszenia sprzedaży oraz wynajmu nieruchomości."],
  },
  {
    question: "Czy muszę korzystać z usług pośrednictwa?",
    answer: ["Nie. Możesz zamówić przygotowanie rzutu niezależnie od naszych usług pośrednictwa."],
  },
  {
    question: "Jakie informacje są potrzebne do przygotowania rzutu?",
    answer: ["Zakres potrzebnych informacji zależy od dostępnych materiałów oraz charakteru nieruchomości. Ustalamy go indywidualnie."],
  },
  {
    question: "Ile kosztuje przygotowanie rzutu?",
    answer: ["Koszt ustalamy indywidualnie, uwzględniając wielkość nieruchomości i zakres opracowania."],
  },
  {
    question: "Jak długo trwa przygotowanie rzutu?",
    answer: ["Termin realizacji ustalamy indywidualnie przed rozpoczęciem współpracy."],
  },
  {
    question: "Czy rzut zastępuje dokumentację techniczną mieszkania?",
    answer: ["Nie. Jest to materiał przeznaczony przede wszystkim do prezentacji nieruchomości."],
  },
  {
    question: "Czy współpracujecie z innymi agentami i biurami nieruchomości?",
    answer: ["Usługa jest skierowana również do agentów i biur nieruchomości. Warunki współpracy ustalamy indywidualnie."],
  },
];

const headingClass = "font-serif text-3xl leading-tight text-white sm:text-4xl";
const bodyClass = "leading-relaxed text-neutral-200/90";
const panelClass = "rounded-3xl bg-[#123746] p-6 ring-1 ring-white/10 sm:p-8";
const cardClass = "rounded-2xl bg-[#0A2530] p-5 ring-1 ring-white/10";
const primaryCtaClass = "inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-center text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]";
const secondaryCtaClass = "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-center text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10";

function ExampleFloorPlan() {
  return (
    <figure className="mx-auto w-full max-w-lg min-w-0 rounded-2xl bg-[#0A2530] ring-1 ring-white/10 sm:p-4">
      <svg
        className="block h-auto w-full rounded-2xl bg-neutral-100"
        viewBox="0 0 420 342"
        role="img"
        aria-labelledby="rzut-mieszkania-svg-title"
        aria-describedby="rzut-mieszkania-svg-description"
      >
        <title id="rzut-mieszkania-svg-title">Przykładowy układ mieszkania z balkonem</title>
        <desc id="rzut-mieszkania-svg-description">
          Z przedpokoju prowadzą drzwi do salonu, sypialni, kuchni i łazienki. Na balkon wychodzi się z salonu.
        </desc>

        {/* Pomieszczenia */}
        <path className="fill-amber-50" d="M16 100h179v224H16z" />
        <path className="fill-neutral-200" d="M16 18h179v82H16z M306 210h98v114h-98z" />
        <path className="fill-amber-100" d="M195 18h209v124H195z M195 210h111v114H195z" />
        <path className="fill-neutral-50" d="M195 142h209v68H195z" />

        {/* Wyposażenie */}
        <g stroke="#123746" strokeWidth="1.5" strokeLinejoin="round">
          <g className="fill-neutral-50">
            <rect x="29" y="125" width="45" height="96" rx="7" />
            <rect x="39" y="135" width="27" height="76" rx="4" />
            <path d="M39 160h27m-27 26h27" fill="none" />
            <rect x="91" y="153" width="38" height="50" rx="12" />
            <rect x="173" y="213" width="10" height="35" rx="2" />
            <rect x="76" y="260" width="55" height="37" rx="10" />
            <path d="M83 260v-7h13v7m15 0v-7h13v7m-41 37v7h13v-7m15 0v7h13v-7" fill="none" />
            <circle cx="43" cy="39" r="10" />
            <circle cx="74" cy="39" r="10" />
            <rect x="52" y="56" width="14" height="12" rx="3" />
            <rect x="160" y="30" width="19" height="38" rx="3" />
            <circle cx="169.5" cy="40" r="3" />
            <circle cx="169.5" cy="57" r="3" />
            <rect x="255" y="29" width="88" height="63" rx="5" />
            <rect x="263" y="35" width="31" height="15" rx="4" />
            <rect x="304" y="35" width="31" height="15" rx="4" />
            <path d="M255 58h88m-88 25h88" fill="none" />
            <rect x="230" y="29" width="17" height="18" rx="3" />
            <rect x="351" y="29" width="17" height="18" rx="3" />
            <rect x="376" y="64" width="19" height="52" rx="2" />
            <path d="M376 90h19" fill="none" />
            <rect x="327" y="151" width="57" height="13" rx="2" />
            <path d="M346 151v13m19-13v13" fill="none" />
            <path d="M270 221h25v59h-89v-22h64z" />
            <rect x="274" y="228" width="17" height="22" rx="3" />
            <path d="M282.5 225v8" fill="none" />
            <circle cx="220" cy="265" r="2.5" />
            <circle cx="230" cy="265" r="2.5" />
            <circle cx="220" cy="273" r="2.5" />
            <circle cx="230" cy="273" r="2.5" />
            <rect x="375" y="221" width="20" height="55" rx="7" />
            <rect x="379" y="225" width="12" height="47" rx="5" />
            <rect x="315" y="257" width="14" height="20" rx="3" />
            <ellipse cx="340" cy="267" rx="9" ry="8" />
            <path d="M329 261h7m-7 12h7" fill="none" />
          </g>
        </g>

        {/* Ściany, okna i drzwi */}
        <path
          d="M16 100V18h179v82"
          fill="none"
          stroke="#123746"
          strokeWidth="3"
        />
        <path
          d="M195 18h40m129 0h40v145m0 36v125H16v-43m0-101v-80h94m38 0h47v58m0 38v128m0-182h133m38 0h38M195 210h26m37 0h73m36 0h37m-98 0v114"
          fill="none"
          stroke="#0C2D3A"
          strokeWidth="6"
        />
        <path d="M235 18h129M16 180v101" fill="none" stroke="#0F3A4D" strokeWidth="5" />
        <path d="M235 18h129M16 180v101" fill="none" stroke="#fafafa" strokeWidth="1.5" />
        <g fill="none" stroke="#0F3A4D" strokeWidth="1.8">
          <path d="M110 100v38a38 38 0 0 0 38-38" />
          <path d="M195 158h-38a38 38 0 0 0 38 38" />
          <path d="M366 142v-38a38 38 0 0 0-38 38" />
          <path d="M404 199h-36a36 36 0 0 1 36-36" />
          <path d="M221 210v37a37 37 0 0 0 37-37" />
          <path d="M367 210v36a36 36 0 0 1-36-36" />
        </g>

        <g className="fill-[#0C2D3A] font-sans font-semibold" textAnchor="middle" fontSize="23">
          <text x="105" y="80">Balkon</text>
          <text x="265" y="119">Sypialnia</text>
          <text x="108" y="237">Salon</text>
          <text x="281" y="185">Przedpokój</text>
          <text x="250" y="310">Kuchnia</text>
          <text x="355" y="310" fontSize="20">Łazienka</text>
        </g>
      </svg>
      <figcaption className="px-3 py-3 text-center text-sm text-amber-100 sm:px-0 sm:pb-0">
        Przykładowy rzut poglądowy mieszkania.
      </figcaption>
    </figure>
  );
}

export default function RzutMieszkaniaPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0C2D3A] text-neutral-100">
      <SiteHeaderPl />
      <main className="mx-auto w-full max-w-6xl flex-1">
        <Container className="space-y-14 pb-20 pt-28 sm:space-y-20">
          <section className="grid items-center gap-8 rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0C2D3A] px-4 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-12 lg:grid-cols-2 lg:gap-10">
            <div className="min-w-0 space-y-5">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">SERPAKOWSKI NIERUCHOMOŚCI</p>
                <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl">Rzut mieszkania 2D</h1>
                <p className="font-serif text-2xl text-white sm:text-3xl">Pokaż przestrzeń. Nie tylko zdjęcia.</p>
              </div>
              <div className={`space-y-3 ${bodyClass}`}>
                <p>Czytelny rzut mieszkania pozwala potencjalnym najemcom i kupującym lepiej zrozumieć układ pomieszczeń jeszcze przed umówieniem prezentacji.</p>
                <p>Przygotowujemy rzuty nieruchomości do wykorzystania w ogłoszeniach sprzedaży i wynajmu.</p>
              </div>
              <ul className="space-y-2 text-sm font-semibold text-amber-100">
                {heroBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span aria-hidden="true" className="text-amber-300">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <a href="#kontakt" className={primaryCtaClass}>Zamów rzut mieszkania</a>
            </div>
            <ExampleFloorPlan />
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Zdjęcia pokazują wnętrze. Rzut pokazuje układ.</h2>
            <div className={`max-w-3xl space-y-3 ${bodyClass}`}>
              <p>Zdjęcia pozwalają zobaczyć wygląd mieszkania, ale nie zawsze pokazują, jak poszczególne pomieszczenia są ze sobą połączone.</p>
              <p>Rzut 2D uzupełnia ogłoszenie o informacje dotyczące funkcjonalności i organizacji przestrzeni.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map(({ title, description }) => (
                <article key={title} className={cardClass}>
                  <h3 className="font-serif text-xl text-white">{title}</h3>
                  <p className={`mt-2 ${bodyClass}`}>{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={panelClass}>
            <h2 className={headingClass}>Co może przedstawiać rzut mieszkania?</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {planDetails.map((detail) => (
                <li key={detail} className={`flex items-start gap-3 ${cardClass}`}>
                  <span aria-hidden="true" className="text-amber-300">✓</span>
                  <span className={bodyClass}>{detail}</span>
                </li>
              ))}
            </ul>
            <p className={`mt-5 ${bodyClass}`}>Zakres informacji na rzucie ustalamy indywidualnie.</p>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Dla kogo jest ta usługa?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {audiences.map(({ title, description }) => (
                <article key={title} className={panelClass}>
                  <h3 className="font-serif text-2xl text-white">{title}</h3>
                  <p className={`mt-3 ${bodyClass}`}>{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 rounded-3xl bg-[#0A2530] p-6 ring-1 ring-white/10 sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-10">
            <h2 className={headingClass}>Jeden rzut. Wiele możliwości wykorzystania.</h2>
            <ul className={`list-disc space-y-2 pl-5 marker:text-amber-300 ${bodyClass}`}>
              {uses.map((use) => <li key={use}>{use}</li>)}
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Jak powstaje rzut mieszkania?</h2>
            <ol role="list" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(({ title, description }, index) => (
                <li key={title} className={cardClass}>
                  <span aria-hidden="true" className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-300/20 text-sm font-semibold text-amber-100 ring-1 ring-amber-200/30">
                    0{index + 1}
                  </span>
                  <h3 className="font-serif text-xl text-white">{title}</h3>
                  <p className={`mt-2 ${bodyClass}`}>{description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className={panelClass}>
            <h2 className={headingClass}>Ile kosztuje rzut mieszkania 2D?</h2>
            <div className={`mt-4 max-w-3xl space-y-3 ${bodyClass}`}>
              <p>Koszt przygotowania rzutu zależy od wielkości nieruchomości, dostępnych materiałów oraz zakresu opracowania.</p>
              <p>Warunki współpracy ustalamy indywidualnie przed rozpoczęciem realizacji.</p>
            </div>
            <a href="#kontakt" className={`mt-6 ${primaryCtaClass}`}>Zapytaj o wycenę</a>
          </section>

          <section className="space-y-5">
            <h2 className={headingClass}>Nie musisz korzystać z pełnego pośrednictwa.</h2>
            <p className={`max-w-3xl ${bodyClass}`}>
              Rzut mieszkania 2D możesz zamówić jako samodzielną usługę, również wtedy, gdy samodzielnie sprzedajesz lub wynajmujesz nieruchomość.
            </p>
            <div className="rounded-3xl bg-[#0A2530] p-6 ring-1 ring-white/10 sm:p-8">
              <h3 className="font-serif text-2xl text-white">Potrzebujesz kompleksowej pomocy w wynajmie mieszkania?</h3>
              <p className={`mt-2 ${bodyClass}`}>Poznaj nasze dwa modele rozliczenia pośrednictwa.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="/pl/najem-solo" className={secondaryCtaClass}>Poznaj Najem Solo</a>
                <a href="/pl/najem-split" className={secondaryCtaClass}>Poznaj Najem Split</a>
              </div>
            </div>
          </section>

          <section className={panelClass}>
            <h2 className="font-serif text-2xl text-white">Charakter opracowania</h2>
            <div className={`mt-3 max-w-3xl space-y-2 ${bodyClass}`}>
              <p>Rzut mieszkania 2D służy przede wszystkim prezentacji układu nieruchomości w materiałach informacyjnych i marketingowych.</p>
              <p>Nie zastępuje dokumentacji architektonicznej, projektu budowlanego ani specjalistycznych pomiarów technicznych.</p>
              <p>Nie jest oficjalną dokumentacją techniczną.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Najczęstsze pytania</h2>
            <FaqAccordion items={faqItems} />
          </section>

          <section id="kontakt" className="scroll-mt-28 rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0A2530] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-10">
            <h2 className={headingClass}>Pokaż układ swojego mieszkania.</h2>
            <p className={`mt-4 max-w-2xl text-lg ${bodyClass}`}>
              Skontaktuj się z nami i opowiedz o swojej nieruchomości. Ustalimy zakres przygotowania rzutu oraz warunki współpracy.
            </p>
            <a href="/pl/landlord#contact" className={`mt-6 ${primaryCtaClass}`}>Chcę zamówić rzut mieszkania</a>
            <p className={`mt-3 text-sm ${bodyClass}`}>W wiadomości napisz „Rzut mieszkania 2D”.</p>
          </section>
        </Container>
      </main>
      <SiteFooterPl />
    </div>
  );
}
