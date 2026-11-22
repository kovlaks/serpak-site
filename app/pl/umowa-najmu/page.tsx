import type { Metadata } from "next";
import { Container } from "../../../components/layout/Container";
import { SiteFooterPl } from "../../../components/layout/SiteFooterPl";
import { SiteHeaderPl } from "../../../components/layout/SiteHeaderPl";
import { FaqAccordion } from "../landlord/FaqAccordion";

export const metadata: Metadata = {
  title: "Indywidualna umowa najmu mieszkania | SERPAKOWSKI",
  description:
    "Indywidualny projekt umowy najmu dopasowany do Twojego mieszkania i warunków wynajmu. Dostępny jako samodzielna usługa lub w ramach Najem Solo i Najem Split.",
  alternates: {
    canonical: "https://www.serpakowski.pl/pl/umowa-najmu",
  },
  robots: { index: false, follow: false },
};

const heroBenefits = [
  "Umowa dopasowana do Twojego mieszkania.",
  "Indywidualne warunki najmu.",
  "Jasno określone prawa i obowiązki stron.",
  "Możliwość zamówienia bez usługi pośrednictwa.",
];

const templateConsiderations = [
  {
    title: "Każde mieszkanie jest inne",
    description:
      "Wyposażenie, stan techniczny, sposób rozliczania mediów i zasady korzystania z nieruchomości mogą wymagać indywidualnych postanowień.",
  },
  {
    title: "Różne warunki finansowe",
    description:
      "Wysokość czynszu, terminy płatności, kaucja oraz dodatkowe opłaty powinny być jasno określone.",
  },
  {
    title: "Nieprzewidziane sytuacje",
    description:
      "Warto wcześniej ustalić zasady postępowania w przypadku awarii, uszkodzeń, zaległości czy zakończenia najmu.",
  },
  {
    title: "Jasne obowiązki stron",
    description:
      "Precyzyjne ustalenia pomagają ograniczyć ryzyko nieporozumień między właścicielem a najemcą.",
  },
];

const templatePoints = [
  "Uniwersalna treść.",
  "Standardowe postanowienia.",
  "Konieczność samodzielnego dostosowania.",
  "Ograniczone uwzględnienie indywidualnych ustaleń.",
];

const individualAgreementPoints = [
  "Treść dopasowana do konkretnej nieruchomości.",
  "Uwzględnienie uzgodnionych warunków.",
  "Spójne zasady płatności i korzystania z mieszkania.",
  "Jasne określenie obowiązków stron.",
];

const agreementTopics = [
  {
    title: "Warunki finansowe",
    points: [
      "Wysokość czynszu.",
      "Terminy i sposób płatności.",
      "Opłaty administracyjne.",
      "Rozliczanie mediów.",
      "Zasady rozliczania zaległości.",
    ],
  },
  {
    title: "Kaucja",
    points: [
      "Wysokość kaucji.",
      "Termin i sposób wpłaty.",
      "Zasady rozliczenia.",
      "Warunki zwrotu.",
    ],
  },
  {
    title: "Okres najmu",
    points: [
      "Czas obowiązywania umowy.",
      "Termin rozpoczęcia najmu.",
      "Zasady przedłużenia umowy.",
      "Warunki zakończenia współpracy zgodne z obowiązującymi przepisami.",
    ],
  },
  {
    title: "Korzystanie z mieszkania",
    points: [
      "Zasady korzystania z nieruchomości.",
      "Liczba osób zamieszkujących lokal.",
      "Zwierzęta domowe.",
      "Palenie tytoniu.",
      "Podnajem i udostępnianie mieszkania innym osobom.",
    ],
  },
  {
    title: "Odpowiedzialność i obowiązki stron",
    points: [
      "Obowiązki właściciela.",
      "Obowiązki najemcy.",
      "Zgłaszanie usterek.",
      "Zasady wykonywania napraw.",
      "Odpowiedzialność za uszkodzenia.",
    ],
  },
  {
    title: "Przekazanie i zwrot mieszkania",
    points: [
      "Stan nieruchomości.",
      "Wyposażenie mieszkania.",
      "Odczyty liczników.",
      "Liczba przekazanych kluczy.",
      "Zasady dokumentowania przekazania i zwrotu lokalu.",
    ],
  },
];

const tailoringFactors = [
  "Specyfika nieruchomości.",
  "Indywidualne warunki finansowe.",
  "Ustalenia dotyczące wyposażenia.",
  "Zasady korzystania z mieszkania.",
  "Oczekiwania właściciela.",
  "Uzgodnienia z najemcą.",
];

const ownerProfiles = [
  {
    title: "Właściciele wynajmujący samodzielnie",
    description: "Masz już najemcę i potrzebujesz odpowiednio przygotowanej umowy.",
  },
  {
    title: "Osoby wynajmujące po raz pierwszy",
    description: "Chcesz uporządkować zasady współpracy jeszcze przed przekazaniem mieszkania.",
  },
  {
    title: "Właściciele zmieniający najemcę",
    description: "Potrzebujesz nowej umowy uwzględniającej aktualne warunki najmu.",
  },
  {
    title: "Właściciele kilku nieruchomości",
    description: "Zależy Ci na spójnej dokumentacji dostosowanej do poszczególnych mieszkań.",
  },
];

const preparationSteps = [
  {
    title: "Kontakt",
    description: "Opisujesz swoją sytuację i przekazujesz podstawowe informacje dotyczące mieszkania.",
  },
  {
    title: "Ustalenie warunków",
    description: "Omawiamy warunki najmu oraz kwestie, które powinny zostać uwzględnione w umowie.",
  },
  {
    title: "Przygotowanie projektu",
    description: "Przygotowujemy indywidualny projekt umowy na podstawie przekazanych informacji i uzgodnień.",
  },
  {
    title: "Omówienie dokumentu",
    description: "Omawiamy przygotowany projekt oraz kwestie wymagające dodatkowych ustaleń przed podpisaniem.",
  },
];

const faqItems = [
  {
    question: "Czy mogę zamówić umowę bez usługi pośrednictwa?",
    answer: [
      "Tak. Przygotowanie indywidualnego projektu umowy najmu jest dostępne jako samodzielna usługa.",
    ],
  },
  {
    question: "Czy muszę mieć już wybranego najemcę?",
    answer: [
      "Nie. Możemy rozpocząć od ustalenia warunków najmu. Ostateczny projekt powinien uwzględniać dane stron oraz uzgodnione warunki współpracy.",
    ],
  },
  {
    question: "Czym indywidualna umowa różni się od gotowego wzoru?",
    answer: [
      "Projekt przygotowujemy z uwzględnieniem konkretnej nieruchomości, sytuacji właściciela i indywidualnych ustaleń dotyczących najmu.",
    ],
  },
  {
    question: "Czy umowa może uwzględniać moje indywidualne wymagania?",
    answer: ["Tak, w zakresie zgodnym z obowiązującymi przepisami i ustaleniami stron."],
  },
  {
    question: "Czy przygotowanie umowy jest wliczone w Najem Solo i Najem Split?",
    answer: ["Tak. Przygotowanie indywidualnego projektu umowy jest częścią obu modeli kompleksowego pośrednictwa."],
  },
  {
    question: "Ile kosztuje przygotowanie umowy?",
    answer: ["Koszt ustalamy indywidualnie po zapoznaniu się z sytuacją i zakresem potrzebnej usługi."],
  },
  {
    question: "Jak długo trwa przygotowanie umowy?",
    answer: ["Termin ustalamy indywidualnie, w zależności od zakresu dokumentu i dostępności niezbędnych informacji."],
  },
  {
    question: "Czy umowa może całkowicie wyeliminować ryzyko związane z najmem?",
    answer: [
      "Nie. Odpowiednio przygotowana umowa pomaga uporządkować zasady współpracy i ograniczyć ryzyko nieporozumień, ale nie gwarantuje braku sporów ani prawidłowego wykonywania zobowiązań.",
    ],
  },
];

const headingClass = "font-serif text-3xl leading-tight text-white sm:text-4xl";
const bodyClass = "leading-relaxed text-neutral-200/90";
const eyebrowClass = "text-xs uppercase tracking-[0.18em] text-amber-200/80";
const panelClass = "rounded-3xl bg-[#123746] p-6 ring-1 ring-white/10 sm:p-8";
const cardClass = "rounded-2xl bg-[#0A2530] p-5 ring-1 ring-white/10";
const bulletListClass = `mt-3 list-disc space-y-1 pl-5 marker:text-amber-300 ${bodyClass}`;
const primaryCtaClass = "inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-center text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]";
const secondaryCtaClass = "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-center text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10";

export default function UmowaNajmuPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0C2D3A] text-neutral-100">
      <SiteHeaderPl />
      <main className="mx-auto w-full max-w-6xl flex-1">
        <Container className="space-y-14 pb-20 pt-28 sm:space-y-20">
          <section className="rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0C2D3A] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-12">
            <div className="space-y-3">
              <p className={eyebrowClass}>SERPAKOWSKI NIERUCHOMOŚCI</p>
              <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
                Indywidualna umowa najmu
              </h1>
              <p className="font-serif text-2xl text-white sm:text-3xl">
                Twoje mieszkanie. Twoje warunki. Indywidualna umowa.
              </p>
            </div>
            <div className="mt-5 grid items-start gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
              <p className={`text-lg ${bodyClass}`}>
                Nie każde mieszkanie jest takie samo. Nie każdy najem przebiega na identycznych zasadach. Dlatego przygotowujemy indywidualne projekty umów najmu, dostosowane do konkretnej nieruchomości, sytuacji właściciela oraz uzgodnionych warunków współpracy z najemcą.
              </p>
              <ul role="list" className="space-y-2 rounded-2xl bg-[#0A2530] p-5 text-sm font-semibold text-amber-100 ring-1 ring-amber-200/25 sm:p-6">
                {heroBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span aria-hidden="true" className="text-amber-300">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <a href="#kontakt" className={`mt-6 ${primaryCtaClass}`}>Zamów indywidualną umowę</a>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Dlaczego gotowy wzór umowy może nie wystarczyć?</h2>
            <p className={`max-w-3xl ${bodyClass}`}>
              Gotowy wzór umowy znaleziony w internecie może być punktem wyjścia, ale nie zawsze uwzględnia indywidualne potrzeby właściciela, specyfikę mieszkania oraz ustalenia z najemcą.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {templateConsiderations.map(({ title, description }) => (
                <article key={title} className={panelClass}>
                  <h3 className="font-serif text-xl leading-tight text-white">{title}</h3>
                  <p className={`mt-3 text-sm ${bodyClass}`}>{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={panelClass}>
            <h2 className={headingClass}>Gotowy wzór czy indywidualna umowa?</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <article className={cardClass}>
                <h3 className="font-serif text-2xl text-white">Gotowy wzór</h3>
                <ul className={bulletListClass}>
                  {templatePoints.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
              <article className="rounded-2xl bg-amber-300/10 p-5 ring-1 ring-amber-200/30">
                <h3 className="font-serif text-2xl text-amber-200">Indywidualna umowa</h3>
                <ul className={bulletListClass}>
                  {individualAgreementPoints.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Co może obejmować Twoja umowa najmu?</h2>
            <p className={bodyClass}>Treść projektu ustalamy indywidualnie dla każdego mieszkania i warunków najmu.</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {agreementTopics.map(({ title, points }) => (
                <article key={title} className={panelClass}>
                  <h3 className="font-serif text-2xl leading-tight text-white">{title}</h3>
                  <ul className={bulletListClass}>
                    {points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 rounded-3xl bg-[#0A2530] p-6 ring-1 ring-white/10 sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-8">
            <div>
              <h2 className={headingClass}>Umowa przygotowana dla konkretnego mieszkania</h2>
              <div className={`mt-4 space-y-3 ${bodyClass}`}>
                <p>Przed przygotowaniem projektu poznajemy Twoją nieruchomość, ustalenia z najemcą oraz warunki, które mają obowiązywać podczas najmu.</p>
                <p>Nie ograniczamy się do wpisania danych do jednego uniwersalnego formularza.</p>
              </div>
            </div>
            <div className="rounded-2xl bg-[#123746] p-5 ring-1 ring-amber-200/20 sm:p-6">
              <p className="font-serif text-2xl leading-snug text-amber-100">
                Dobra umowa powinna odpowiadać rzeczywistym warunkom najmu.
              </p>
              <ul className={bulletListClass}>
                {tailoringFactors.map((factor) => <li key={factor}>{factor}</li>)}
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Dla kogo jest ta usługa?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {ownerProfiles.map(({ title, description }) => (
                <article key={title} className={panelClass}>
                  <h3 className="font-serif text-2xl leading-tight text-white">{title}</h3>
                  <p className={`mt-3 ${bodyClass}`}>{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Jak wygląda przygotowanie umowy?</h2>
            <ol role="list" className="grid list-none gap-4 sm:grid-cols-2">
              {preparationSteps.map(({ title, description }, index) => (
                <li key={title} className={`flex items-start gap-4 ${cardClass}`}>
                  <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-300/20 text-sm font-semibold text-amber-100 ring-1 ring-amber-200/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className={`mt-2 text-sm ${bodyClass}`}>{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className={panelClass}>
            <h2 className={headingClass}>Ile kosztuje indywidualna umowa najmu?</h2>
            <div className={`mt-4 max-w-3xl space-y-3 ${bodyClass}`}>
              <p>Zakres usługi i koszt przygotowania umowy ustalamy indywidualnie, w zależności od sytuacji oraz potrzeb właściciela.</p>
              <p>Skontaktuj się z nami, opisz swoje potrzeby i poznaj warunki współpracy.</p>
            </div>
            <a href="#kontakt" className={`mt-6 ${primaryCtaClass}`}>Zapytaj o wycenę</a>
          </section>

          <section className="rounded-3xl bg-[#0A2530] p-6 ring-1 ring-white/10 sm:p-8">
            <p className={eyebrowClass}>W ramach kompleksowego pośrednictwa</p>
            <h2 className={`mt-3 ${headingClass}`}>Indywidualna umowa najmu jest już w cenie</h2>
            <div className={`mt-4 max-w-3xl space-y-3 ${bodyClass}`}>
              <p>Jeżeli korzystasz z kompleksowego pośrednictwa SERPAKOWSKI Nieruchomości w modelu Najem Solo lub Najem Split, przygotowanie indywidualnego projektu umowy najmu jest częścią podstawowej usługi.</p>
              <p>Nie musisz zamawiać tej usługi osobno.</p>
              <p className="font-semibold text-amber-100">Oba modele obejmują ten sam zakres usług i różnią się wyłącznie sposobem płatności prowizji.</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/pl/najem-solo" className={secondaryCtaClass}>Poznaj Najem Solo</a>
              <a href="/pl/najem-split" className={secondaryCtaClass}>Poznaj Najem Split</a>
            </div>
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className={headingClass}>Zakres samodzielnej usługi</h2>
            <div className={`space-y-3 ${bodyClass}`}>
              <p>Przygotowujemy indywidualny projekt zwykłej umowy najmu lokalu mieszkalnego na podstawie przekazanych informacji i warunków uzgodnionych przez strony.</p>
              <p>Jeśli potrzebujesz specjalistycznej porady prawnej, możesz skonsultować projekt z adwokatem lub radcą prawnym.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Najczęstsze pytania</h2>
            <FaqAccordion items={faqItems} />
          </section>

          <section id="kontakt" className="scroll-mt-28 rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0A2530] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-10">
            <h2 className={headingClass}>Potrzebujesz umowy dopasowanej do Twojego mieszkania?</h2>
            <p className={`mt-4 max-w-3xl text-lg ${bodyClass}`}>
              Opowiedz nam o swojej nieruchomości i warunkach najmu. Przygotujemy indywidualną propozycję współpracy.
            </p>
            <a href="/pl/landlord#contact" className={`mt-6 ${primaryCtaClass}`}>Chcę zamówić indywidualną umowę</a>
            <p className={`mt-3 text-sm ${bodyClass}`}>W wiadomości napisz „Indywidualna umowa najmu”.</p>
          </section>
        </Container>
      </main>
      <SiteFooterPl />
    </div>
  );
}
