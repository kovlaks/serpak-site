import type { Metadata } from "next";
import { Container } from "../../../components/layout/Container";
import { SiteFooterPl } from "../../../components/layout/SiteFooterPl";
import { SiteHeaderPl } from "../../../components/layout/SiteHeaderPl";
import { FaqAccordion } from "../landlord/FaqAccordion";
import SubscriptionCalculator from "./SubscriptionCalculator";

export const metadata: Metadata = {
  title: "Asystent Najmu - abonament 5% | SERPAKOWSKI",
  description:
    "Asystent Najmu - dodatkowe wsparcie właścicieli mieszkań podczas trwania najmu. Miesięczny abonament w wysokości 5% bazowego czynszu najmu.",
  alternates: {
    canonical: "https://www.serpakowski.pl/pl/asystent-najmu",
  },
  robots: { index: false, follow: false },
};

const heroBenefits = [
  "Wsparcie podczas trwania najmu.",
  "Przejrzysty miesięczny abonament.",
  "Pomoc w bieżących sprawach.",
  "Indywidualnie ustalony zakres współpracy.",
];

const billingTerms = [
  "Abonament miesięczny wynosi 5%.",
  "Wynagrodzenie brutto obejmuje VAT.",
  "Opłaty administracyjne i media nie są uwzględniane w podstawie obliczenia abonamentu.",
  "Usługa jest rozliczana odrębnie od prowizji Najem Solo i Najem Split.",
];

const billingExamples = [
  ["2 000 zł", "100 zł"],
  ["3 000 zł", "150 zł"],
  ["4 000 zł", "200 zł"],
  ["5 000 zł", "250 zł"],
  ["6 000 zł", "300 zł"],
];

const supportAreas = [
  {
    title: "Komunikacja z najemcą",
    description: "Wsparcie w bieżącej komunikacji oraz ustalaniu spraw związanych z wynajmem mieszkania.",
  },
  {
    title: "Monitorowanie płatności",
    description: "Pomoc w monitorowaniu terminów płatności oraz informacji o rozliczeniach związanych z najmem.",
  },
  {
    title: "Koordynacja drobnych napraw",
    description: "Pomoc organizacyjna w przypadku usterek i potrzeby wykonania drobnych napraw.",
  },
  {
    title: "Kontrola stanu nieruchomości",
    description: "Możliwość uzgodnienia okresowych przeglądów mieszkania.",
  },
  {
    title: "Raporty dla właściciela",
    description: "Przekazywanie informacji dotyczących bieżącej sytuacji związanej z najmem.",
  },
  {
    title: "Ważne terminy",
    description: "Przypomnienia o istotnych terminach wynikających z umowy najmu.",
  },
  {
    title: "Bieżące sprawy",
    description: "Wsparcie organizacyjne w innych uzgodnionych sprawach dotyczących wynajmowanej nieruchomości.",
  },
];

const ownerProfiles = [
  {
    title: "Właściciele mieszkający za granicą",
    description: "Wsparcie w bieżących sprawach związanych z wynajmowaną nieruchomością.",
  },
  {
    title: "Właściciele mieszkający w innym mieście",
    description: "Pomoc organizacyjna, gdy nie możesz osobiście zajmować się sprawami najmu.",
  },
  {
    title: "Zapracowani właściciele",
    description: "Możliwość ograniczenia czasu poświęcanego na bieżącą obsługę najmu.",
  },
  {
    title: "Właściciele kilku mieszkań",
    description: "Dodatkowe wsparcie w organizacji spraw dotyczących wynajmowanych nieruchomości.",
  },
];

const brokerageServices = [
  {
    title: "Najem Solo",
    paragraphs: [
      "100% jednomiesięcznego bazowego czynszu najmu.",
      "Jednorazowa płatność za kompleksowe pośrednictwo.",
    ],
    href: "/pl/najem-solo",
  },
  {
    title: "Najem Split",
    paragraphs: ["Ta sama prowizja rozłożona na 12 miesięcznych rat bez odsetek."],
    href: "/pl/najem-split",
  },
];

const initialSupport = [
  "W ramach Najem Solo i Najem Split.",
  "Pomoc w pilnych sprawach związanych z rozpoczęciem najmu.",
  "Przez 14 dni od przekazania mieszkania.",
  "Bez odrębnej opłaty w ramach uzgodnionego zakresu pośrednictwa.",
];

const subscriptionSupport = [
  "Odrębna usługa abonamentowa.",
  "5% bazowego czynszu najmu miesięcznie.",
  "Wsparcie podczas trwania najmu.",
  "Indywidualnie uzgodniony zakres współpracy.",
];

const cooperationSteps = [
  {
    title: "Kontakt",
    description: "Przekazujesz informacje dotyczące nieruchomości i aktualnej sytuacji najmu.",
  },
  {
    title: "Ustalenie potrzeb",
    description: "Omawiamy sprawy, w których potrzebujesz wsparcia.",
  },
  {
    title: "Umowa",
    description: "Ustalamy zakres współpracy oraz szczegółowe warunki miesięcznego abonamentu.",
  },
  {
    title: "Regularne wsparcie",
    description: "Realizujemy uzgodnione działania podczas trwania współpracy.",
  },
];

const faqItems = [
  {
    question: "Ile kosztuje Asystent Najmu?",
    answer: ["Miesięczny abonament wynosi 5% bazowego miesięcznego czynszu najmu brutto."],
  },
  {
    question: "Czy do abonamentu doliczany jest VAT?",
    answer: ["Nie. Podawana kwota abonamentu obejmuje VAT."],
  },
  {
    question: "Czy opłaty administracyjne i media są uwzględniane przy obliczaniu abonamentu?",
    answer: ["Nie. Podstawą obliczenia abonamentu jest wyłącznie bazowy czynsz najmu należny właścicielowi."],
  },
  {
    question: "Czy Asystent Najmu jest osobną usługą?",
    answer: ["Tak. Jest to odrębna usługa rozliczana w formie miesięcznego abonamentu."],
  },
  {
    question: "Czy mogę skorzystać z usługi, jeśli samodzielnie znalazłem najemcę?",
    answer: ["Tak. Możliwość współpracy oraz jej zakres ustalamy indywidualnie."],
  },
  {
    question: "Czym Asystent Najmu różni się od Najem Solo i Najem Split?",
    answer: [
      "Najem Solo i Najem Split dotyczą kompleksowego pośrednictwa w wynajmie mieszkania. Asystent Najmu zapewnia dodatkowe wsparcie podczas trwania najmu.",
    ],
  },
  {
    question: "Czy koszt napraw jest wliczony w abonament?",
    answer: [
      "Abonament dotyczy uzgodnionych działań Asystenta Najmu. Koszty materiałów, napraw i usług zewnętrznych wymagają odrębnych ustaleń.",
    ],
  },
  {
    question: "Czy Asystent Najmu gwarantuje terminowe płatności najemcy?",
    answer: ["Nie. Wsparcie nie stanowi gwarancji wykonywania zobowiązań przez najemcę."],
  },
  {
    question: "Czy zakres współpracy można dopasować indywidualnie?",
    answer: ["Tak. Szczegółowy zakres wsparcia określa odrębna umowa."],
  },
];

const headingClass = "font-serif text-3xl leading-tight text-white sm:text-4xl";
const cardHeadingClass = "font-serif text-2xl leading-snug text-white";
const bodyClass = "leading-relaxed text-neutral-200/90";
const panelClass = "rounded-3xl bg-[#123746] p-6 ring-1 ring-white/10 sm:p-8";
const cardClass = "rounded-2xl bg-[#0A2530] p-5 ring-1 ring-white/10";
const highlightedCardClass = "rounded-2xl bg-amber-300/10 p-5 ring-1 ring-amber-200/30";
const bulletListClass = `list-disc space-y-2 pl-5 marker:text-amber-300 ${bodyClass}`;
const primaryCtaClass = "inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-center text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]";
const secondaryCtaClass = "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-center text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10";

export default function AsystentNajmuPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0C2D3A] text-neutral-100">
      <SiteHeaderPl />
      <main className="mx-auto w-full max-w-6xl flex-1">
        <Container className="space-y-14 pb-20 pt-28 sm:space-y-20">
          <section className="grid items-start gap-6 rounded-3xl bg-gradient-to-r from-[#0F3A4D] to-[#0C2D3A] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-x-10">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">SERPAKOWSKI NIERUCHOMOŚCI</p>
              <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl">Asystent Najmu</h1>
              <p className="font-serif text-2xl text-white sm:text-3xl">Twoje mieszkanie. Nasze wsparcie. Twój spokój.</p>
            </div>
            <div className="self-center rounded-3xl bg-[#0A2530] p-5 ring-1 ring-amber-200/25 sm:p-8 lg:row-span-2">
              <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-serif text-2xl text-white sm:text-3xl">
                <strong className="text-6xl font-normal leading-none text-amber-300 sm:text-8xl">5%</strong>{" "}
                miesięcznie
              </p>
              <p className="mt-4 font-semibold text-white">Miesięczny abonament od bazowego czynszu najmu.</p>
              <p className={`mt-4 border-t border-white/10 pt-4 text-sm ${bodyClass}`}>
                Przy czynszu najmu wynoszącym 3 000 zł miesięczny abonament wynosi 150 zł brutto.
              </p>
            </div>
            <div className="space-y-5">
              <p className={`text-lg ${bodyClass}`}>
                Wynajęcie mieszkania to dopiero początek współpracy z najemcą. Asystent Najmu zapewnia dodatkowe wsparcie właściciela w bieżących sprawach związanych z wynajmowaną nieruchomością.
              </p>
              <ul className="space-y-2 text-sm font-semibold text-amber-100">
                {heroBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="text-amber-300" aria-hidden="true">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <a href="#kalkulator" className={primaryCtaClass}>Oblicz swój abonament</a>
                <a href="#zakres" className={secondaryCtaClass}>Poznaj zakres wsparcia</a>
              </div>
            </div>
          </section>

          <section className={`grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-8 ${panelClass}`}>
            <div className="space-y-4">
              <h2 className={headingClass}>Stałe wsparcie. Proste rozliczenie.</h2>
              <p className={bodyClass}>
                Asystent Najmu działa w modelu miesięcznego abonamentu. Wynagrodzenie wynosi 5% bazowego miesięcznego czynszu najmu należnego właścicielowi.
              </p>
              <ul className={bulletListClass}>
                {billingTerms.map((term) => <li key={term}>{term}</li>)}
              </ul>
            </div>
            <div className="min-w-0 rounded-2xl bg-[#0A2530] ring-1 ring-white/10">
              <table className="w-full table-fixed text-left text-sm">
                <thead className="border-b border-white/10 text-amber-100">
                  <tr>
                    <th scope="col" className="px-3 py-3 align-bottom sm:px-5">Bazowy czynsz najmu</th>
                    <th scope="col" className="px-3 py-3 align-bottom sm:px-5">Miesięczny abonament</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 tabular-nums">
                  {billingExamples.map(([rent, subscription]) => (
                    <tr key={rent}>
                      <td className="px-3 py-2 text-neutral-200 sm:px-5">{rent}</td>
                      <td className="px-3 py-2 font-semibold text-white sm:px-5">{subscription}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="kalkulator" className="scroll-mt-28 space-y-5">
            <h2 className={headingClass}>Oblicz swój miesięczny abonament</h2>
            <SubscriptionCalculator />
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className={headingClass}>Najemca już mieszka. Co dalej?</h2>
            <div className={`space-y-3 ${bodyClass}`}>
              <p>Po przekazaniu mieszkania właściciel nadal odpowiada za wiele spraw związanych z najmem. Nie zawsze ma jednak czas lub możliwość, aby samodzielnie zajmować się każdą sytuacją.</p>
              <p>Asystent Najmu pomaga w organizacji bieżących spraw dotyczących wynajmowanej nieruchomości.</p>
              <p>Dzięki regularnemu wsparciu możesz powierzyć nam uzgodnione zadania i poświęcać mniej czasu na organizację najmu.</p>
            </div>
          </section>

          <section id="zakres" className="scroll-mt-28 space-y-6">
            <h2 className={headingClass}>W czym pomaga Asystent Najmu?</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {supportAreas.map(({ title, description }) => (
                <article key={title} className={panelClass}>
                  <h3 className={cardHeadingClass}>{title}</h3>
                  <p className={`mt-3 ${bodyClass}`}>{description}</p>
                </article>
              ))}
              <p className={`flex items-center lg:col-span-2 ${cardClass} font-semibold leading-relaxed text-amber-100`}>
                Szczegółowy zakres wsparcia, częstotliwość działań oraz zasady odpowiedzialności określamy w odrębnej umowie.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Dla kogo jest Asystent Najmu?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {ownerProfiles.map(({ title, description }) => (
                <article key={title} className={cardClass}>
                  <h3 className={cardHeadingClass}>{title}</h3>
                  <p className={`mt-3 ${bodyClass}`}>{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className={`max-w-3xl ${headingClass}`}>Znalezienie najemcy to jedno. Wsparcie podczas najmu to drugie.</h2>
            <p className={`max-w-3xl ${bodyClass}`}>
              Asystent Najmu jest samodzielną usługą wsparcia podczas trwającego najmu. Jeżeli dopiero szukasz najemcy i potrzebujesz kompleksowego pośrednictwa, wybierz Najem Solo lub Najem Split.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {brokerageServices.map(({ title, paragraphs, href }) => (
                <article key={title} className={`flex flex-col ${cardClass}`}>
                  <h3 className={cardHeadingClass}>{title}</h3>
                  <div className={`mt-3 flex-1 space-y-2 ${bodyClass}`}>
                    {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  <a href={href} className={`mt-5 self-start ${secondaryCtaClass}`}>Poznaj {title}</a>
                </article>
              ))}
              <article className={`flex flex-col ${highlightedCardClass}`}>
                <h3 className={cardHeadingClass}>Asystent Najmu</h3>
                <div className={`mt-3 flex-1 space-y-2 ${bodyClass}`}>
                  <p className="font-semibold text-amber-200">5% bazowego czynszu najmu miesięcznie.</p>
                  <p>Regularne wsparcie podczas trwania najmu.</p>
                </div>
                <a href="#kontakt" className={`mt-5 self-start ${primaryCtaClass}`}>Zapytaj o Asystenta Najmu</a>
              </article>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>14 dni wsparcia czy stały Asystent Najmu?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <article className={panelClass}>
                <h3 className={cardHeadingClass}>14 dni dodatkowego wsparcia</h3>
                <ul className={`mt-4 ${bulletListClass}`}>
                  {initialSupport.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
              <article className={panelClass}>
                <h3 className={cardHeadingClass}>Asystent Najmu</h3>
                <ul className={`mt-4 ${bulletListClass}`}>
                  {subscriptionSupport.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </div>
            <p className={bodyClass}>Abonament uruchamiamy po indywidualnym uzgodnieniu współpracy i zawarciu odrębnej umowy.</p>
          </section>

          <section className={panelClass}>
            <h2 className={headingClass}>Masz już najemcę? Możesz zamówić samo wsparcie.</h2>
            <div className={`mt-4 max-w-3xl space-y-3 ${bodyClass}`}>
              <p>Asystent Najmu nie wymaga wcześniejszego korzystania z usług Najem Solo lub Najem Split. Jeżeli samodzielnie znalazłeś najemcę, również możesz skontaktować się z nami w sprawie współpracy.</p>
              <p>Możliwość rozpoczęcia współpracy oraz jej szczegółowy zakres ustalamy indywidualnie.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Jak działa Asystent Najmu?</h2>
            <ol role="list" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cooperationSteps.map(({ title, description }, index) => (
                <li key={title} className={cardClass}>
                  <span aria-hidden="true" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-300/20 text-sm font-semibold text-amber-100 ring-1 ring-amber-200/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-semibold text-white">{title}</h3>
                  <p className={`mt-2 text-sm ${bodyClass}`}>{description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className={headingClass}>Jasne zasady współpracy</h2>
            <p className={bodyClass}>
              Konkretne obowiązki, uprawnienia, częstotliwość działań oraz zasady odpowiedzialności określa odrębna umowa. Zakres wsparcia ustalamy wspólnie przed rozpoczęciem współpracy.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Najczęstsze pytania</h2>
            <FaqAccordion items={faqItems} />
          </section>

          <section id="kontakt" className="scroll-mt-28 rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0A2530] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-10">
            <h2 className={headingClass}>Zyskaj dodatkowe wsparcie podczas najmu</h2>
            <p className="mt-4 font-serif text-3xl leading-snug text-amber-100">
              <strong className="font-normal text-amber-300">5%</strong> miesięcznego czynszu najmu
            </p>
            <p className={`mt-4 max-w-2xl ${bodyClass}`}>
              Skontaktuj się z nami, opowiedz o swojej nieruchomości i poznaj możliwości współpracy w ramach Asystenta Najmu.
            </p>
            <a href="/pl/landlord#contact" className={`mt-6 ${primaryCtaClass}`}>Chcę skorzystać z Asystenta Najmu</a>
            <p className={`mt-3 text-sm ${bodyClass}`}>W wiadomości napisz „Asystent Najmu”.</p>
          </section>
        </Container>
      </main>
      <SiteFooterPl />
    </div>
  );
}
