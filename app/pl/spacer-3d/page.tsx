import type { Metadata } from "next";
import { Container } from "../../../components/layout/Container";
import { SiteFooterPl } from "../../../components/layout/SiteFooterPl";
import { SiteHeaderPl } from "../../../components/layout/SiteHeaderPl";
import { FaqAccordion } from "../landlord/FaqAccordion";

const title = "Wirtualny spacer 3D Warszawa - od 500 zł | SERPAKOWSKI";
const description =
  "Wirtualne spacery 3D mieszkań i domów w Warszawie. Interaktywna prezentacja nieruchomości na sprzedaż i wynajem. Cena od 500 zł brutto.";
const canonical = "https://www.serpakowski.pl/pl/spacer-3d";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: "SERPAKOWSKI Nieruchomości",
    locale: "pl_PL",
    type: "website",
  },
};

const heroBenefits = [
  "Interaktywna prezentacja nieruchomości.",
  "Możliwość zdalnego oglądania.",
  "Materiał do ogłoszeń sprzedaży i wynajmu.",
  "Dostępność jako samodzielna usługa.",
];

const benefits = [
  {
    title: "Zdalne oglądanie nieruchomości",
    description: "Potencjalny klient może zapoznać się z wnętrzem bez konieczności natychmiastowej wizyty na miejscu.",
  },
  {
    title: "Lepsze zrozumienie przestrzeni",
    description: "Wirtualny spacer pomaga zrozumieć układ pomieszczeń i ich wzajemne położenie.",
  },
  {
    title: "Nowoczesna prezentacja",
    description: "Interaktywna forma prezentacji uzupełnia standardowe zdjęcia nieruchomości.",
  },
  {
    title: "Wygoda dla zainteresowanych",
    description: "Klient może dokładniej zapoznać się z ofertą przed umówieniem prezentacji.",
  },
  {
    title: "Wsparcie sprzedaży i wynajmu",
    description: "Wirtualny spacer może wspierać prezentację mieszkań i domów oferowanych na sprzedaż lub wynajem.",
  },
  {
    title: "Profesjonalne materiały marketingowe",
    description: "Dodatkowy materiał wizualny pozwala przedstawić nieruchomość w bardziej kompleksowy sposób.",
  },
];

const presentationTools = [
  {
    title: "Zdjęcia nieruchomości",
    description: "Pokazują wygląd wnętrza, wyposażenie i najważniejsze detale.",
  },
  {
    title: "Rzut mieszkania 2D",
    description: "Przedstawia układ pomieszczeń oraz organizację przestrzeni.",
    link: { href: "/pl/rzut-mieszkania", label: "Poznaj rzut 2D" },
  },
  {
    title: "Wirtualny spacer 3D",
    description: "Pozwala poznawać nieruchomość w formie interaktywnej prezentacji jej wnętrza.",
  },
];

const audiences = [
  {
    title: "Właściciele mieszkań i domów na sprzedaż",
    description: "Zaprezentuj nieruchomość potencjalnym kupującym w nowoczesny i przejrzysty sposób.",
  },
  {
    title: "Właściciele nieruchomości na wynajem",
    description: "Pozwól potencjalnym najemcom lepiej poznać mieszkanie przed prezentacją.",
  },
  {
    title: "Agenci nieruchomości",
    description: "Uzupełnij swoje oferty o interaktywną prezentację nieruchomości.",
  },
  {
    title: "Biura nieruchomości",
    description: "Rozszerz materiały marketingowe wykorzystywane przy obsłudze nieruchomości.",
  },
];

const uses = [
  "Ogłoszenia sprzedaży.",
  "Ogłoszenia wynajmu.",
  "Strony internetowe.",
  "Materiały marketingowe.",
  "Prezentacje ofert dla klientów.",
  "Zdalna komunikacja z zainteresowanymi osobami.",
];

const cooperationSteps = [
  {
    title: "Kontakt i wycena",
    description: "Przekazujesz podstawowe informacje dotyczące nieruchomości. Ustalamy zakres realizacji oraz indywidualną wycenę.",
  },
  {
    title: "Ustalenie terminu",
    description: "Uzgadniamy termin przygotowania materiałów oraz szczegóły związane z nieruchomością.",
  },
  {
    title: "Realizacja",
    description: "Przygotowujemy materiały potrzebne do opracowania wirtualnego spaceru.",
  },
  {
    title: "Udostępnienie prezentacji",
    description: "Otrzymujesz gotową prezentację zgodnie z uzgodnionymi warunkami współpracy.",
  },
];

const priceFactors = [
  "Powierzchnia nieruchomości.",
  "Liczba pomieszczeń.",
  "Liczba kondygnacji.",
  "Złożoność układu nieruchomości.",
  "Zakres realizacji.",
  "Uzgodnione warunki udostępnienia prezentacji.",
];

const faqItems = [
  {
    question: "Czym jest wirtualny spacer 3D?",
    answer: ["To interaktywna forma prezentacji nieruchomości, umożliwiająca zdalne poznawanie jej wnętrza i układu pomieszczeń."],
  },
  {
    question: "Ile kosztuje wirtualny spacer 3D?",
    answer: ["Cena zaczyna się od 500 zł brutto. Ostateczna wycena zależy od powierzchni nieruchomości, liczby pomieszczeń oraz zakresu realizacji."],
  },
  {
    question: "Czy wykonujecie spacery po mieszkaniach i domach?",
    answer: ["Tak. Zakres realizacji i wycenę ustalamy indywidualnie dla każdej nieruchomości."],
  },
  {
    question: "Czy mogę zamówić wirtualny spacer bez pośrednictwa?",
    answer: ["Tak. Wirtualny spacer 3D jest dostępny jako samodzielna usługa."],
  },
  {
    question: "Czy spacer można wykorzystać w ogłoszeniu sprzedaży lub wynajmu?",
    answer: ["Tak, zależnie od możliwości technicznych platformy, na której publikowane jest ogłoszenie."],
  },
  {
    question: "Jak długo trwa przygotowanie wirtualnego spaceru?",
    answer: ["Termin realizacji ustalamy indywidualnie przed rozpoczęciem współpracy."],
  },
  {
    question: "Jak długo spacer będzie dostępny w internecie?",
    answer: ["Okres dostępności oraz warunki udostępnienia prezentacji ustalamy indywidualnie."],
  },
  {
    question: "Czy wirtualny spacer zastępuje tradycyjną prezentację?",
    answer: ["Nie. Stanowi dodatkowe narzędzie umożliwiające wcześniejsze zapoznanie się z nieruchomością."],
  },
  {
    question: "Czy mogę dodatkowo zamówić rzut mieszkania 2D?",
    answer: ["Tak. Rzut mieszkania 2D jest dostępny jako samodzielna usługa, która może uzupełniać wirtualny spacer."],
  },
  {
    question: "Czy współpracujecie z innymi agencjami nieruchomości?",
    answer: ["Tak. Usługa jest skierowana również do agentów i biur nieruchomości. Warunki współpracy ustalamy indywidualnie."],
  },
];

const headingClass = "font-serif text-3xl leading-tight text-white sm:text-4xl";
const bodyClass = "leading-relaxed text-neutral-200/90";
const cardClass = "rounded-2xl bg-[#0A2530] p-5 ring-1 ring-white/10";
const panelClass = "rounded-3xl bg-[#123746] p-6 ring-1 ring-white/10 sm:p-8";
const primaryCtaClass = "inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-center text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]";
const secondaryCtaClass = "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-center text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10";

function TourIllustration() {
  return (
    <figure className="min-w-0 rounded-3xl bg-gradient-to-br from-[#123746] to-[#0A2530] p-3 ring-1 ring-white/10 sm:p-5">
      <svg
        viewBox="0 0 680 378"
        role="img"
        aria-labelledby="tour-illustration-title tour-illustration-description"
        className="block h-auto w-full"
      >
        <title id="tour-illustration-title">Przejścia między pomieszczeniami</title>
        <desc id="tour-illustration-description">
          Schemat wnętrza z zaznaczoną trasą prowadzącą z salonu przez korytarz do sypialni.
        </desc>
        <path d="M250 63 646 198 412 365 16 230Z" fill="#0A2530" />
        <g transform="matrix(.88 .30 -.65 .43 250 50)">
          <path d="M0 0H450V360H0Z" fill="#0F3A4D" stroke="white" strokeOpacity=".28" strokeWidth="2" />
          <path d="M0 0H165V360H0ZM280 0H450V360H280Z" fill="#123746" />
          <path d="M0 90H450M0 180H450M0 270H450M82 0V360M355 0V360" stroke="white" strokeOpacity=".14" strokeWidth="2" />
          <rect x="26" y="134" width="116" height="180" rx="14" fill="#0A2530" stroke="white" strokeOpacity=".28" strokeWidth="2" />
        </g>
        <path d="M16 205 250 50 646 185V150L250 15 16 170Z" fill="#123746" />
        <path d="M250 15 16 170V205L250 50Z" fill="#0F3A4D" />
        <path d="M16 170 250 15 646 150M250 15V50" fill="none" stroke="white" strokeOpacity=".35" strokeWidth="2" />
        <path d="M276 41 365 71M497 116 601 151" stroke="white" strokeOpacity=".45" strokeWidth="4" strokeLinecap="round" />
        <g transform="matrix(.88 .30 -.65 .43 250 50)">
          <g transform="translate(0 10)" fill="#0A2530">
            <rect x="23" y="147" width="45" height="151" rx="10" />
            <rect x="87" y="152" width="45" height="57" rx="12" />
            <rect x="320" y="153" width="105" height="160" rx="10" />
          </g>
          <rect x="23" y="147" width="45" height="151" rx="10" fill="white" fillOpacity=".43" />
          <path d="M34 160V284M35 204H63M35 244H63" fill="none" stroke="#123746" strokeWidth="3" />
          <rect x="87" y="152" width="45" height="57" rx="12" fill="#0F3A4D" />
          <rect x="320" y="153" width="105" height="160" rx="10" fill="white" fillOpacity=".43" />
          <path d="M323 210H422V302Q422 310 414 310H331Q323 310 323 302Z" fill="#0F3A4D" />
          <rect x="329" y="163" width="38" height="35" rx="6" fill="white" fillOpacity=".58" />
          <rect x="378" y="163" width="38" height="35" rx="6" fill="white" fillOpacity=".58" />
        </g>
        <g fill="#0F3A4D" stroke="white" strokeOpacity=".35" strokeWidth="1.5" strokeLinejoin="round">
          <path d="M395.2 99.5 266.5 184.6V163.6L395.2 78.5ZM215.8 218.1 161.2 254.3V233.3L215.8 197.1Z" />
          <path d="M496.4 134 451.6 163.7V142.7L496.4 113ZM405.4 194.2 262.4 288.8V267.8L405.4 173.2Z" />
        </g>
        <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-amber-300">
          <path d="M167 185 280.5 224 372 163 500 207" strokeDasharray="4 8" />
          <path d="m226 200 10 9-13 1m197-32 10 9-13 1" />
        </g>
        <g fill="#0A2530" stroke="currentColor" strokeWidth="3" className="text-amber-300">
          <circle cx="167" cy="185" r="9" />
          <circle cx="329" cy="192" r="9" />
          <circle cx="500" cy="207" r="9" />
        </g>
        <g fill="currentColor" className="text-amber-300">
          <circle cx="167" cy="185" r="3" />
          <circle cx="329" cy="192" r="3" />
          <circle cx="500" cy="207" r="3" />
        </g>
      </svg>
      <figcaption className="px-2 pb-2 text-center text-sm text-neutral-200/90">Wizualizacja poglądowa.</figcaption>
    </figure>
  );
}

export default function Spacer3DPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0C2D3A] text-neutral-100">
      <SiteHeaderPl />
      <main className="mx-auto w-full max-w-6xl flex-1">
        <Container className="space-y-14 pb-20 pt-28 sm:space-y-20">
          <section className="rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0C2D3A] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-12">
            <div className="grid items-start gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-x-12">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">SERPAKOWSKI NIERUCHOMOŚCI</p>
                <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl">Wirtualny spacer 3D</h1>
                <p className="font-serif text-2xl text-white sm:text-3xl">Pokaż nieruchomość tak, jakby klient był na miejscu.</p>
              </div>
              <div className={`space-y-3 ${bodyClass}`}>
                <p>Wirtualny spacer pozwala potencjalnym kupującym i najemcom poznawać nieruchomość zdalnie, oglądać poszczególne pomieszczenia i lepiej rozumieć ich układ.</p>
                <p>To nowoczesny sposób prezentacji mieszkań i domów, który uzupełnia tradycyjne zdjęcia oraz opisy ofert nieruchomości.</p>
              </div>
              <div className="rounded-3xl bg-[#0A2530] p-5 ring-1 ring-amber-200/25 sm:p-6 lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:self-center">
                <p className="font-serif text-4xl leading-tight text-amber-300 sm:text-5xl">Od 500 zł</p>
                <p className={`mt-3 text-sm ${bodyClass}`}>
                  Cena brutto. Indywidualna wycena w zależności od wielkości nieruchomości i zakresu realizacji.
                </p>
                <ul className="mt-5 space-y-2 border-t border-white/10 pt-5 text-sm font-semibold text-amber-100">
                  {heroBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span aria-hidden="true" className="text-amber-300">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a href="#kontakt" className={primaryCtaClass}>Zamów wirtualny spacer</a>
                <a href="#szczegoly" className={secondaryCtaClass}>Poznaj szczegóły</a>
              </div>
            </div>
          </section>

          <section className="grid items-center gap-6 lg:grid-cols-[2fr_3fr] lg:gap-10">
            <div className="space-y-4">
              <h2 className={headingClass}>Zobacz więcej niż na tradycyjnych zdjęciach</h2>
              <p className={bodyClass}>
                Wirtualny spacer po mieszkaniu lub po domu pozwala przejść z jednego pomieszczenia do drugiego. Na schemacie trasa z salonu prowadzi przez korytarz do sypialni i pokazuje, jak te przestrzenie się łączą.
              </p>
            </div>
            <TourIllustration />
          </section>

          <section id="szczegoly" className="scroll-mt-28 space-y-6">
            <h2 className={`max-w-3xl ${headingClass}`}>Pozwól klientom odkrywać nieruchomość z dowolnego miejsca</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map(({ title, description }) => (
                <article key={title} className={cardClass}>
                  <h3 className="font-serif text-xl text-white">{title}</h3>
                  <p className={`mt-2 ${bodyClass}`}>{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={`space-y-6 ${panelClass}`}>
            <h2 className={headingClass}>Zdjęcia, rzut 2D czy wirtualny spacer?</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {presentationTools.map(({ title, description, link }) => (
                <article key={title} className={`flex flex-col items-start gap-3 ${cardClass}`}>
                  <h3 className="font-serif text-xl text-white">{title}</h3>
                  <p className={`grow ${bodyClass}`}>{description}</p>
                  {link ? <a href={link.href} className={secondaryCtaClass}>{link.label}</a> : null}
                </article>
              ))}
            </div>
            <p className="max-w-3xl font-semibold leading-relaxed text-amber-100">
              Każde z tych narzędzi pełni inną funkcję. Razem mogą tworzyć bardziej kompleksową prezentację nieruchomości.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Dla kogo jest wirtualny spacer 3D?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {audiences.map(({ title, description }) => (
                <article key={title} className={cardClass}>
                  <h3 className="font-serif text-xl text-white">{title}</h3>
                  <p className={`mt-2 ${bodyClass}`}>{description}</p>
                </article>
              ))}
            </div>
            <p className="font-semibold leading-relaxed text-amber-100">
              W Warszawie przygotowujemy wirtualne spacery po mieszkaniach i domach. Wirtualny spacer 3D możesz zamówić jako samodzielną usługę, bez kompleksowego pośrednictwa.
            </p>
          </section>

          <section className={`space-y-5 ${panelClass}`}>
            <h2 className={headingClass}>Jedna prezentacja. Wiele możliwości.</h2>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {uses.map((use) => (
                <li key={use} className={`flex items-start gap-3 ${cardClass}`}>
                  <span aria-hidden="true" className="text-amber-300">✓</span>
                  {use}
                </li>
              ))}
            </ul>
            <p className={`max-w-3xl ${bodyClass}`}>
              Możliwość dodania wirtualnego spaceru do ogłoszenia na zewnętrznym portalu zależy od wymagań technicznych danej platformy.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Jak powstaje wirtualny spacer?</h2>
            <ol role="list" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cooperationSteps.map(({ title, description }, index) => (
                <li key={title} className={cardClass}>
                  <span aria-hidden="true" className="font-serif text-2xl text-amber-300">0{index + 1}.</span>
                  <h3 className="mt-2 font-serif text-xl text-white">{title}</h3>
                  <p className={`mt-2 ${bodyClass}`}>{description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="grid items-center gap-6 rounded-3xl bg-gradient-to-r from-[#123746] to-[#0A2530] p-6 ring-1 ring-amber-200/25 sm:p-10 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h2 className={headingClass}>Ile kosztuje wirtualny spacer 3D?</h2>
              <p className="font-serif text-4xl leading-tight text-amber-300 sm:text-5xl">Od 500 zł brutto</p>
              <p className={bodyClass}>Cena wirtualnego spaceru zależy od charakterystyki nieruchomości oraz zakresu realizacji.</p>
              <p className="font-semibold leading-relaxed text-white">Ostateczną cenę ustalamy indywidualnie przed rozpoczęciem realizacji.</p>
              <a href="#kontakt" className={primaryCtaClass}>Zapytaj o wycenę</a>
            </div>
            <div className={cardClass}>
              <h3 className="font-serif text-xl text-white">Co wpływa na wycenę?</h3>
              <ul className={`mt-3 list-disc space-y-2 pl-5 marker:text-amber-300 ${bodyClass}`}>
                {priceFactors.map((factor) => <li key={factor}>{factor}</li>)}
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Kompleksowa prezentacja Twojej nieruchomości</h2>
            <div className="grid gap-4 lg:grid-cols-2">
              <article className={panelClass}>
                <h3 className="font-serif text-2xl text-white">Rzut mieszkania 2D</h3>
                <p className={`mt-3 ${bodyClass}`}>Czytelny plan nieruchomości stanowiący uzupełnienie zdjęć i wirtualnego spaceru.</p>
                <a href="/pl/rzut-mieszkania" className={`mt-5 ${secondaryCtaClass}`}>Poznaj usługę</a>
              </article>
              <article className={panelClass}>
                <h3 className="font-serif text-2xl text-white">Potrzebujesz pomocy w wynajmie mieszkania?</h3>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a href="/pl/najem-solo" className={secondaryCtaClass}>Poznaj Najem Solo</a>
                  <a href="/pl/najem-split" className={secondaryCtaClass}>Poznaj Najem Split</a>
                </div>
              </article>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Najczęstsze pytania</h2>
            <FaqAccordion items={faqItems} />
          </section>

          <section id="kontakt" className="scroll-mt-28 rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0A2530] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-10">
            <h2 className={headingClass}>Pokaż swoją nieruchomość w nowoczesny sposób</h2>
            <p className={`mt-4 max-w-2xl text-lg ${bodyClass}`}>
              Opowiedz nam o swojej nieruchomości. Przygotujemy indywidualną wycenę wirtualnego spaceru i ustalimy szczegóły realizacji.
            </p>
            <a href="/pl/landlord#contact" className={`mt-6 ${primaryCtaClass}`}>Chcę zamówić wirtualny spacer 3D</a>
            <p className={`mt-3 text-sm ${bodyClass}`}>W wiadomości napisz „Wirtualny spacer 3D” oraz podaj przybliżoną powierzchnię nieruchomości.</p>
          </section>
        </Container>
      </main>
      <SiteFooterPl />
    </div>
  );
}
