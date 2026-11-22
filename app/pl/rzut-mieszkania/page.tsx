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
    <figure className="-mx-2 min-w-0 rounded-2xl bg-[#0A2530] ring-1 ring-white/10 sm:mx-auto sm:w-full sm:max-w-lg sm:p-4">
      <svg
        className="block h-auto w-full rounded-2xl bg-neutral-100"
        viewBox="8 8 424 336"
        role="img"
        aria-labelledby="rzut-mieszkania-svg-title"
        aria-describedby="rzut-mieszkania-svg-description"
      >
        <title id="rzut-mieszkania-svg-title">Przykładowy układ mieszkania z balkonem</title>
        <desc id="rzut-mieszkania-svg-description">
          Wejście do mieszkania prowadzi do przedpokoju, który łączy salon, sypialnię, kuchnię i łazienkę.
          Drzwi przesuwne w salonie prowadzą na balkon.
        </desc>

        {/* Pomieszczenia */}
        <path className="fill-neutral-200" d="M18 18h195v60H18z M298 227h124v107H298z" />
        <path className="fill-amber-50" d="M18 78h195v149H18z" />
        <path className="fill-amber-100" d="M213 78h209v149H213z M18 227h129v107H18z" />
        <path className="fill-neutral-50" d="M147 227h151v107H147z" />

        <g className="fill-neutral-50" stroke="#123746" strokeWidth="1.5" strokeLinejoin="round">
          {/* Balkon */}
          <circle cx="174" cy="46" r="9" />
          <rect x="169" y="59" width="10" height="9" rx="2" />
          <rect x="189" y="40" width="10" height="12" rx="2" />

          {/* Salon */}
          <rect x="76" y="102" width="54" height="57" rx="5" className="fill-amber-100" stroke="none" />
          <rect x="31" y="108" width="35" height="72" rx="5" />
          <path d="M40 109v70m0-47h25m-25 22h25" fill="none" />
          <rect x="87" y="117" width="27" height="27" rx="5" />
          <rect x="177" y="102" width="21" height="57" rx="2" />
          <path d="M189 113v35" fill="none" strokeWidth="2.5" />
          <rect x="108" y="194" width="26" height="8" rx="3" />
          <rect x="108" y="215" width="26" height="8" rx="3" />
          <rect x="99" y="200" width="44" height="17" rx="4" />

          {/* Sypialnia */}
          <rect x="222" y="90" width="50" height="22" rx="2" />
          <path d="M247 90v22" fill="none" />
          <rect x="284" y="97" width="15" height="18" rx="2" />
          <rect x="380" y="97" width="15" height="18" rx="2" />
          <rect x="306" y="94" width="67" height="79" rx="4" />
          <rect x="311" y="100" width="26" height="17" rx="3" />
          <rect x="342" y="100" width="26" height="17" rx="3" />
          <rect x="306" y="123" width="67" height="50" rx="3" className="fill-amber-50" />

          {/* Kuchnia */}
          <path d="M28 236h109v22H49v34H28z" />
          <rect x="34" y="241" width="25" height="12" rx="3" fill="none" />
          <path d="M46 240v6m28-10v22m49-22v22" fill="none" />
          <circle cx="98" cy="243" r="2.3" />
          <circle cx="110" cy="243" r="2.3" />
          <circle cx="98" cy="251" r="2.3" />
          <circle cx="110" cy="251" r="2.3" />

          {/* Przedpokój */}
          <rect x="157" y="237" width="22" height="14" rx="2" />
          <rect x="267" y="303" width="20" height="23" rx="2" />
          <path d="M277 303v23" fill="none" />

          {/* Łazienka */}
          <rect x="340" y="235" width="72" height="22" rx="5" />
          <rect x="346" y="239" width="60" height="14" rx="6" fill="none" />
          <rect x="305" y="235" width="25" height="17" rx="3" />
          <ellipse cx="317.5" cy="244" rx="7" ry="4" fill="none" />
          <rect x="386" y="264" width="22" height="7" rx="2" />
          <path d="M389 271h16v7a8 8 0 0 1-16 0z" />
        </g>

        {/* Ściany i balustrada */}
        <path
          d="M18 78V18h195v60m-189-5V24h183v49"
          fill="none"
          stroke="#123746"
          strokeWidth="1.5"
        />
        <g fill="none" stroke="#0C2D3A" strokeLinecap="square" strokeWidth="5.5">
          <path d="M18 103V78h42m78 0h139m83 0h62v256H247m-40 0H18v-35m0-26V158" />
          <path d="M18 227h145m42 0h40m42 0h135M213 78v149" />
          <path d="M147 227v31m0 33v43M298 227v34m0 33v40" />
        </g>

        {/* Okna, drzwi balkonowe i kierunki otwierania drzwi */}
        <g fill="none" stroke="#0F3A4D" strokeWidth="1.5">
          <path d="M277 75h83v6h-83zm0 3h83" />
          <path d="M15 103h6v55h-6zm3 0v55M15 273h6v26h-6zm3 0v26" />
          <path d="M60 75h78m-78 2h43v3H60zm35 3h43v3H95z" />
          <path d="M205 227v-42a42 42 0 0 0-42 42m82 0v-42a42 42 0 0 1 42 42" />
          <path d="M147 291h-33a33 33 0 0 1 33-33M298 261h33a33 33 0 0 1-33 33" />
          <path d="M247 334v-40a40 40 0 0 0-40 40" />
        </g>

        <g className="fill-[#0C2D3A] font-sans font-semibold" textAnchor="middle" fontSize="25">
          <text x="102" y="56">Balkon</text>
          <text x="117" y="182">Salon</text>
          <text x="346" y="207">Sypialnia</text>
          <text x="82.5" y="321">Kuchnia</text>
          <text x="222.5" y="280">Przedpokój</text>
          <text x="360" y="321">Łazienka</text>
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
