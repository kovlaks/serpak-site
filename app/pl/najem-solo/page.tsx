import type { Metadata } from "next";
import { Container } from "../../../components/layout/Container";
import { SiteFooterPl } from "../../../components/layout/SiteFooterPl";
import { SiteHeaderPl } from "../../../components/layout/SiteHeaderPl";
import { FaqAccordion } from "../landlord/FaqAccordion";

export const metadata: Metadata = {
  title: "Najem Solo - jednorazowa prowizja | SERPAKOWSKI",
  description:
    "Najem Solo - kompleksowe pośrednictwo w wynajmie mieszkania, jednorazowa prowizja, 0 zł prowizji dla najemcy i możliwość rabatu przy ponownym wynajmie.",
  alternates: {
    canonical: "https://www.serpakowski.pl/pl/najem-solo",
    languages: {
      pl: "https://www.serpakowski.pl/pl/najem-solo",
      en: "https://www.serpakowski.pl/en/najem-solo",
    },
  },
  robots: { index: true, follow: true },
};

const heroBenefits = [
  "Jednorazowa płatność.",
  "0 zł prowizji dla najemcy.",
  "Do 100% rabatu przy ponownym wynajmie.",
  "14 dni wsparcia po przekazaniu mieszkania.",
];

const benefits = [
  {
    title: "Kompleksowe pośrednictwo",
    description: "Od przygotowania ogłoszenia po indywidualny projekt umowy najmu i przekazanie kluczy.",
  },
  {
    title: "0 zł prowizji dla najemcy",
    description: "Prowizję agencji pokrywa wyłącznie właściciel mieszkania.",
  },
  {
    title: "Do 100% rabatu przy ponownym wynajmie",
    description: "Przy kolejnym wynajmie tego samego mieszkania możesz obniżyć nową prowizję na warunkach określonych w umowie.",
  },
  {
    title: "14 dni dodatkowego wsparcia",
    description: "Doraźna pomoc w pilnych sprawach związanych z rozpoczęciem najmu.",
  },
];

const paymentExample = [
  ["Bazowy czynsz najmu", "3 600 zł"],
  ["Prowizja Najem Solo", "3 600 zł brutto"],
  ["Liczba płatności", "1"],
];

const discountExample = [
  ["Nowa standardowa prowizja", "3 600 zł"],
  ["Rabat", "900 zł"],
  ["Nowa prowizja po rabacie", "2 700 zł"],
];

const discountConditions = [
  "Ponowny wynajem tego samego mieszkania.",
  "Zawarcie odrębnej umowy pośrednictwa.",
  "Brak zaległych zobowiązań wobec agencji w dniu ustalenia rabatu.",
  "Faktyczne przekazanie mieszkania nowemu najemcy.",
  "Spełnienie pozostałych warunków umowy pośrednictwa.",
];

const serviceScope: ({ title: string; points: string[] } | { title: string; paragraphs: string[] })[] = [
  {
    title: "Przygotowanie oferty",
    points: [
      "Analiza warunków wynajmu.",
      "Doradztwo dotyczące ceny.",
      "Przygotowanie opisu.",
      "Wykonanie zdjęć.",
      "Publikacja ogłoszeń.",
    ],
  },
  {
    title: "Poszukiwanie najemcy",
    points: [
      "Obsługa zapytań.",
      "Organizacja prezentacji.",
      "Wstępna weryfikacja kandydatów.",
      "Przedstawienie rekomendacji.",
      "Koordynacja negocjacji.",
    ],
  },
  {
    title: "Indywidualna umowa najmu",
    paragraphs: [
      "Przygotowujemy projekt umowy dostosowany do Twojego mieszkania, indywidualnych warunków wynajmu oraz interesów właściciela.",
      "Pomagamy uregulować zasady płatności, kaucji, korzystania z mieszkania i odpowiedzialności stron.",
    ],
  },
  {
    title: "Wsparcie formalno-prawne",
    paragraphs: [
      "Pomagamy zrozumieć kwestie formalne i prawne, przygotować odpowiednią dokumentację i zorganizować proces wynajmu.",
    ],
  },
  {
    title: "Przekazanie mieszkania",
    points: [
      "Protokół zdawczo-odbiorczy.",
      "Spis wyposażenia.",
      "Dokumentacja fotograficzna.",
      "Odczyty liczników.",
      "Przekazanie kluczy.",
    ],
  },
];

const cooperationSteps = [
  {
    title: "Zgłaszasz mieszkanie.",
    description: "Podajesz podstawowe informacje o mieszkaniu, które chcesz wynająć.",
  },
  {
    title: "Ustalamy zasady współpracy.",
    description: "Omawiamy warunki wynajmu oraz zasady pośrednictwa i rozliczenia prowizji.",
  },
  {
    title: "Przygotowujemy ofertę i szukamy najemcy.",
    description: "Przygotowujemy ogłoszenie, obsługujemy zapytania i organizujemy prezentacje.",
  },
  {
    title: "Wybierasz najemcę.",
    description: "Przedstawiamy rekomendacje, a Ty podejmujesz ostateczną decyzję.",
  },
  {
    title: "Przygotowujemy dokumenty i przekazujemy mieszkanie.",
    description: "Przygotowujemy indywidualny projekt umowy i protokół zdawczo-odbiorczy oraz koordynujemy przekazanie kluczy.",
  },
  {
    title: "Rozliczasz prowizję jednorazowo.",
    description: "Płacisz całą prowizję w jednej płatności, na warunkach określonych w umowie pośrednictwa.",
  },
];

const standaloneServices = [
  {
    title: "Indywidualna umowa najmu",
    description: "Projekt umowy dostosowany do Twojej nieruchomości, sytuacji i warunków wynajmu.",
  },
  {
    title: "Wsparcie formalno-prawne",
    description: "Pomoc w przygotowaniu dokumentacji i zrozumieniu formalności związanych z najmem.",
  },
  {
    title: "Rzut mieszkania 2D",
    description: "Czytelny plan nieruchomości do wykorzystania w ogłoszeniach wynajmu lub sprzedaży.",
  },
];

const faqItems = [
  {
    question: "Ile wynosi prowizja Najem Solo?",
    answer: [
      "Standardowa prowizja to 100% miesięcznego bazowego czynszu najmu, płatne jednorazowo. Podstawa rozliczenia obejmuje wyłącznie bazowy czynsz najmu, bez opłat administracyjnych, mediów i innych opłat dodatkowych. Przy zmiennym czynszu podstawę obliczamy według średniej określonej w umowie.",
    ],
  },
  {
    question: "Czy prowizja obejmuje VAT?",
    answer: ["Tak. Prowizję podajemy w kwocie brutto, z VAT."],
  },
  {
    question: "Kto płaci prowizję?",
    answer: ["Prowizję agencji pokrywa wyłącznie właściciel mieszkania."],
  },
  {
    question: "Czy najemca płaci prowizję?",
    answer: ["Prowizja agencyjna dla najemcy wynosi 0 zł."],
  },
  {
    question: "Co obejmuje usługa Najem Solo?",
    answer: [
      "Przygotowanie i publikację oferty, poszukiwanie i wstępną weryfikację najemców, indywidualny projekt umowy najmu, wsparcie formalno-prawne, koordynację przekazania mieszkania i 14 dni dodatkowego wsparcia po przekazaniu.",
    ],
  },
  {
    question: "Czy przygotowujecie indywidualną umowę najmu?",
    answer: [
      "Tak. Przygotowujemy projekt umowy dopasowany do mieszkania, warunków najmu i interesów właściciela.",
    ],
  },
  {
    question: "Czy sam wybieram najemcę?",
    answer: ["Tak. Przedstawiamy rekomendacje, a Ty podejmujesz ostateczną decyzję o wyborze najemcy i warunkach umowy."],
  },
  {
    question: "Czy mogę otrzymać rabat przy ponownym wynajmie?",
    answer: [
      "Tak. Rabat dotyczy ponownego wynajmu tego samego mieszkania na podstawie odrębnej umowy pośrednictwa. W dniu faktycznego przekazania mieszkania nowemu najemcy weryfikujemy brak zaległych zobowiązań wobec agencji i ustalamy wysokość rabatu zgodnie z umową.",
    ],
  },
  {
    question: "Jak obliczany jest rabat w Najem Solo?",
    answer: [
      "Jednorazowo opłaconą prowizję dzielimy na 12 miesięcznych części wyłącznie na potrzeby obliczenia rabatu. Na dzień faktycznego przekazania mieszkania nowemu najemcy sumujemy wartość przyszłych części ze wszystkich mających zastosowanie wcześniejszych harmonogramów tego mieszkania.",
    ],
  },
  {
    question: "Czy okres poszukiwania nowego najemcy wpływa na wysokość rabatu?",
    answer: [
      "Tak. Okres rozliczeniowy biegnie również podczas poszukiwań, więc w dniu przekazania mieszkania do obliczenia rabatu może pozostać mniej przyszłych części.",
    ],
  },
  {
    question: "Czy rabat może wynieść 100%?",
    answer: [
      "Tak. Jeżeli obliczony rabat jest równy lub wyższy od kwoty nowej prowizji, nowa prowizja wynosi 0 zł. Niewykorzystany rabat nie podlega zwrotowi ani przeniesieniu jako odrębne saldo na kolejne usługi.",
    ],
  },
  {
    question: "Czy mogę wybrać płatność w ratach?",
    answer: ["Tak. W modelu Najem Split rozkładasz prowizję na 12 miesięcznych rat bez odsetek."],
  },
  {
    question: "Czym różni się Najem Solo od Najem Split?",
    answer: [
      "Wyłącznie sposobem płatności. Zakres usług, standard obsługi, łączna standardowa prowizja i dodatkowe korzyści są takie same w obu modelach.",
    ],
  },
  {
    question: "Czy współpraca odbywa się na wyłączność?",
    answer: [
      "Tak. Początkowy okres wyłączności wynosi 30 dni kalendarzowych, z zachowaniem ustawowych uprawnień klienta. Następnie umowa przedłuża się na czas nieoznaczony i może zostać wypowiedziana bez okresu wypowiedzenia.",
      "Po zakończeniu współpracy umowa przewiduje 60-dniowy okres dotyczący kandydatów obsługiwanych wcześniej przez agencję. Szczegółowe warunki określa umowa.",
    ],
  },
  {
    question: "Czy otrzymam wsparcie po przekazaniu mieszkania?",
    answer: [
      "Tak. Przez 14 dni od przekazania mieszkania pomagamy doraźnie w pilnych sprawach związanych z rozpoczęciem najmu, przekazaniem nieruchomości i przygotowaną dokumentacją.",
    ],
  },
  {
    question: "Czy zarządzanie najmem jest wliczone w prowizję?",
    answer: [
      "Prowizja obejmuje pośrednictwo oraz 14 dni doraźnego wsparcia po przekazaniu mieszkania. Dodatkową pomoc podczas najmu można uzgodnić i rozliczyć odrębnie.",
    ],
  },
  {
    question: "Czy są dodatkowe koszty?",
    answer: [
      "Koszty usług zewnętrznych, płatnych promocji, tłumaczeń, notariusza lub specjalistycznej dokumentacji wymagają wcześniejszego uzgodnienia. W przypadku opóźnień mogą być naliczane odsetki ustawowe za opóźnienie.",
    ],
  },
  {
    question: "Czy gwarantujecie znalezienie najemcy?",
    answer: ["Nie gwarantujemy wynajęcia mieszkania w określonym terminie ani przyszłego wykonywania zobowiązań przez najemcę."],
  },
];

const headingClass = "font-serif text-3xl leading-tight text-white sm:text-4xl";
const bodyClass = "leading-relaxed text-neutral-200/90";
const eyebrowClass = "text-xs uppercase tracking-[0.18em] text-amber-200/80";
const panelClass = "rounded-3xl bg-[#123746] p-6 ring-1 ring-white/10 sm:p-8";
const cardClass = "rounded-2xl bg-[#0A2530] p-5 ring-1 ring-white/10";
const primaryCtaClass = "inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-center text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]";
const secondaryCtaClass = "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-center text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10";

export default function NajemSoloPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0C2D3A] text-neutral-100">
      <SiteHeaderPl />
      <main className="mx-auto w-full max-w-6xl flex-1">
        <Container className="space-y-14 pb-20 pt-28 sm:space-y-20">
          <section className="rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0C2D3A] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-12">
            <div className="grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
              <div className="space-y-3">
                <p className={eyebrowClass}>SERPAKOWSKI NIERUCHOMOŚCI</p>
                <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl">Najem Solo</h1>
                <p className="font-serif text-2xl text-white sm:text-3xl">Jedna prowizja. Jedna płatność.</p>
              </div>
              <p className="self-center rounded-3xl bg-[#0A2530] p-5 text-lg font-semibold text-white ring-1 ring-amber-200/25 sm:p-6 lg:row-span-2">
                <strong className="block font-serif text-5xl font-normal leading-none text-amber-300 sm:text-7xl">100%</strong>
                <span className="mt-3 block">miesięcznego czynszu najmu</span>
              </p>
              <div className="space-y-5">
                <p className={`text-lg ${bodyClass}`}>
                  Kompleksowe pośrednictwo w wynajmie mieszkania z jednorazowym rozliczeniem prowizji. Pełny zakres usług, indywidualna obsługa i dodatkowe korzyści przy ponownym wynajmie.
                </p>
                <ul className="space-y-2 text-sm font-semibold text-amber-100">
                  {heroBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="text-amber-300" aria-hidden="true">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <a href="#kontakt" className={primaryCtaClass}>Zgłoś mieszkanie</a>
              </div>
            </div>
            <p className="mt-6 border-t border-white/10 pt-4 text-sm leading-relaxed text-neutral-200/90">
              Standardowa prowizja brutto odpowiada jednomiesięcznemu bazowemu czynszowi najmu, bez opłat administracyjnych, mediów i innych opłat dodatkowych.
            </p>
          </section>

          <section className={panelClass}>
            <h2 className={headingClass}>Proste i przejrzyste rozliczenie</h2>
            <div className={`mt-5 max-w-3xl space-y-3 ${bodyClass}`}>
              <p>Standardowa prowizja to 100% bazowego miesięcznego czynszu najmu. Kwota jest podana brutto i obejmuje VAT.</p>
              <p>Właściciel pokrywa całą prowizję w jednej płatności. Prowizja dla najemcy wynosi 0 zł.</p>
              <p>Podstawą obliczenia prowizji jest wyłącznie czynsz należny właścicielowi, bez opłat administracyjnych, mediów i innych opłat dodatkowych.</p>
              <p>Wynagrodzenie za skuteczne pośrednictwo powstaje po zawarciu umowy najmu i faktycznym przekazaniu mieszkania, na warunkach określonych w umowie pośrednictwa.</p>
            </div>
            <dl className="mt-6 grid gap-3 sm:grid-cols-3">
              {paymentExample.map(([label, amount]) => (
                <div key={label} className={cardClass}>
                  <dt className="text-sm text-neutral-200/90">{label}</dt>
                  <dd className="mt-2 font-serif text-2xl text-white">{amount}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Wszystko, czego potrzebujesz, aby wynająć mieszkanie</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map(({ title, description }) => (
                <article key={title} className={panelClass}>
                  <h3 className="font-serif text-2xl leading-tight text-amber-300">{title}</h3>
                  <p className={`mt-3 text-sm ${bodyClass}`}>{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-[#0A2530] p-6 ring-1 ring-white/10 sm:p-8">
            <h2 className={headingClass}><span className="text-amber-300">0 zł</span> prowizji dla najemcy</h2>
            <div className={`mt-4 max-w-3xl space-y-3 ${bodyClass}`}>
              <p>Wynagrodzenie agencji w całości pokrywa właściciel. Najemca nie ponosi dodatkowego kosztu prowizji agencyjnej.</p>
              <p>Brak tej opłaty może sprawić, że mieszkanie będzie bardziej atrakcyjne dla osób porównujących oferty najmu.</p>
            </div>
          </section>

          <section className="space-y-6">
            <div className="max-w-3xl">
              <h2 className={headingClass}>Najemca wyprowadził się wcześniej? Nie musisz płacić kolejnej pełnej prowizji.</h2>
              <div className={`mt-4 space-y-3 ${bodyClass}`}>
                <p>Jednorazowo opłaconą prowizję w Najem Solo dzielimy umownie na 12 miesięcznych części wyłącznie po to, aby obliczyć rabat przy ponownym wynajmie. Ten podział nie rozkłada płatności na raty i nie powoduje nowych zobowiązań ani ponownej zapłaty prowizji. W Najem Split podstawą są rzeczywiste harmonogramy rat.</p>
                <p>Rabat obliczamy na dzień faktycznego przekazania mieszkania nowemu najemcy, także wtedy, gdy umowa najmu została podpisana wcześniej. Okres rozliczeniowy biegnie bez przerw mimo wcześniejszej wyprowadzki, rozwiązania umowy najmu lub pustostanu. Obejmuje także czas poszukiwania kolejnego najemcy i przygotowania nowej umowy.</p>
                <p>Wartość pozostałych przyszłych części obniża nową prowizję za pośrednictwo. Wcześniejsze zobowiązania nadal obowiązują, a opłacona prowizja nie podlega zwrotowi. Rabat nie zmienia czynszu najmu.</p>
              </div>
            </div>

            <div className={panelClass}>
              <h3 className="font-serif text-2xl text-white">Przykład</h3>
              <div className={`mt-3 space-y-2 ${bodyClass}`}>
                <p>Bazowy czynsz najmu wynosi <strong className="text-white">3 600 zł</strong>, a standardowa prowizja <strong className="text-white">3 600 zł brutto</strong>. Każda z 12 części rozliczeniowych ma wartość <strong className="text-white">300 zł</strong>.</p>
                <p>Najemca wyprowadza się po 8 miesiącach. Poszukiwania trwają kolejny miesiąc. W dniu przekazania mieszkania nowemu najemcy pozostają 3 przyszłe części.</p>
              </div>
              <figure className={`my-6 ${cardClass}`}>
                <div aria-hidden="true" className="grid grid-cols-6 gap-1 sm:grid-cols-12 sm:gap-2">
                  {Array.from({ length: 12 }, (_, index) => (
                    <span
                      key={index}
                      className={`flex h-9 items-center justify-center rounded text-xs font-semibold sm:h-11 sm:rounded-lg sm:text-sm ${
                        index < 8
                          ? "bg-white/10 text-white ring-1 ring-inset ring-white/15"
                          : index === 8
                            ? "bg-amber-300/20 text-amber-100 ring-1 ring-inset ring-amber-200/30"
                            : "bg-amber-300 text-[#0C2D3A]"
                      }`}
                    >
                      {index + 1}
                    </span>
                  ))}
                </div>
                <figcaption className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
                  <span className="text-neutral-100">Miesiące 1–8 · Poprzedni najem</span>
                  <span className="text-amber-100">Miesiąc 9 · Poszukiwanie najemcy</span>
                  <span className="text-amber-300">Miesiące 10–12 · Części uwzględnione w rabacie</span>
                </figcaption>
              </figure>
              <dl className="grid gap-3 sm:grid-cols-3">
                {discountExample.map(([label, amount], index) => (
                  <div key={label} className={cardClass}>
                    <dt className="text-sm text-neutral-200/90">{label}</dt>
                    <dd className={`mt-2 font-serif text-2xl ${index === 0 ? "text-white" : "text-amber-300"}`}>{amount}</dd>
                  </div>
                ))}
              </dl>
              <p className={`mt-4 ${bodyClass}`}>Trzy przyszłe części po 300 zł dają <strong className="text-amber-300">900 zł rabatu</strong>. Nowa prowizja wynosi <strong className="text-amber-300">2 700 zł zamiast 3 600 zł</strong>.</p>
              <p className="mt-3 font-serif text-xl text-white">Najem Solo · Jednorazowa płatność 2 700 zł.</p>
              <p className="mt-1 font-serif text-xl text-white">Najem Split · 12 rat po 225 zł, zgodnie z harmonogramem określonym w umowie.</p>
              <p className={`mt-4 text-sm ${bodyClass}`}>
                Przykład zakłada niezmieniony bazowy czynsz najmu, brak zaległych płatności i spełnienie warunków umowy pośrednictwa.
              </p>
            </div>
          </section>

          <section className={panelClass}>
            <h2 className={headingClass}>Nawet <span className="text-amber-300">100% rabatu</span> na kolejną usługę pośrednictwa</h2>
            <div className={`mt-4 max-w-3xl space-y-3 ${bodyClass}`}>
              <p>Na dzień faktycznego przekazania mieszkania nowemu najemcy sumujemy wartość przyszłych części ze wszystkich wcześniejszych harmonogramów mających zastosowanie do tego mieszkania, niezależnie od modelu płatności. Wliczamy części opłacone przed terminem oraz części uwzględnione w poprzednim rabacie, których termin według pierwotnego harmonogramu wciąż przypada w przyszłości.</p>
              <p>Rabat może pokryć maksymalnie 100% nowej prowizji. Jeśli suma przyszłych części jest równa lub wyższa od nowej prowizji, nowa prowizja wynosi 0 zł. Niewykorzystana kwota rabatu nie podlega zwrotowi w gotówce ani przeniesieniu jako odrębne saldo na kolejne usługi.</p>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {discountConditions.map((condition) => (
                <li key={condition} className={`flex items-start gap-3 ${cardClass} ${bodyClass}`}>
                  <span aria-hidden="true" className="text-amber-300">✓</span>
                  {condition}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Kompleksowe pośrednictwo w wynajmie mieszkania</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {serviceScope.map((service) => (
                <article key={service.title} className={panelClass}>
                  <h3 className="font-serif text-2xl text-white">{service.title}</h3>
                  {"points" in service ? (
                    <ul className={`mt-3 list-disc space-y-1 pl-5 marker:text-amber-300 ${bodyClass}`}>
                      {service.points.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                  ) : (
                    <div className={`mt-3 space-y-2 ${bodyClass}`}>
                      {service.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                  )}
                </article>
              ))}
              <p className="self-center rounded-2xl bg-[#0A2530] p-6 font-semibold leading-relaxed text-amber-100 ring-1 ring-white/10 sm:p-8">
                Ostateczna decyzja dotycząca wyboru najemcy i warunków umowy zawsze należy do właściciela.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Jak działa Najem Solo?</h2>
            <ol role="list" className="grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cooperationSteps.map(({ title, description }, index) => (
                <li key={title} className={`flex items-start gap-4 ${cardClass}`}>
                  <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-300/20 text-sm font-semibold text-amber-100 ring-1 ring-amber-200/30">{index + 1}</span>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className={`mt-2 text-sm ${bodyClass}`}>{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <div className="grid gap-6 lg:grid-cols-2">
            <section className={panelClass}>
              <h2 className="font-serif text-3xl leading-tight text-white">Nasza pomoc nie kończy się na przekazaniu kluczy.</h2>
              <p className="mt-4 font-serif text-2xl text-white"><strong className="font-normal text-amber-300">14 dni</strong> dodatkowego wsparcia</p>
              <div className={`mt-4 space-y-3 ${bodyClass}`}>
                <p>Przez 14 dni od przekazania mieszkania zapewniamy doraźną pomoc w pilnych sprawach związanych z rozpoczęciem najmu, przekazaniem nieruchomości i przygotowaną dokumentacją.</p>
                <p>Wsparcie jest częścią usługi pośrednictwa.</p>
                <p>Nie jest to stałe zarządzanie najmem ani całodobowy serwis awaryjny.</p>
              </div>
            </section>
            <section className="self-start rounded-3xl bg-[#0A2530] p-6 ring-1 ring-white/10 sm:p-8">
              <p className={eyebrowClass}>Usługa dodatkowa</p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-white">Twój osobisty Asystent Najmu</h2>
              <div className={`mt-4 space-y-3 ${bodyClass}`}>
                <p className="font-semibold text-white">Potrzebujesz wsparcia również podczas trwania najmu?</p>
                <p>Skorzystaj z możliwości dodatkowej pomocy w bieżących sprawach związanych z wynajmowaniem mieszkania.</p>
                <p>Zakres współpracy ustalamy indywidualnie.</p>
                <p>Usługa jest rozliczana odrębnie.</p>
              </div>
            </section>
          </div>

          <section className="space-y-5">
            <h2 className={headingClass}>Wynajmujesz samodzielnie?</h2>
            <p className={bodyClass}>Każdą z tych usług możesz zamówić oddzielnie od kompleksowego pośrednictwa.</p>
            <div className="grid gap-4 md:grid-cols-3">
              {standaloneServices.map(({ title, description }) => (
                <article key={title} className={cardClass}>
                  <h3 className="font-serif text-xl text-white">{title}</h3>
                  <p className={`mt-2 text-sm ${bodyClass}`}>{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={panelClass}>
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className={eyebrowClass}>Alternatywny sposób płatności</p>
                <h2 className={`mt-3 ${headingClass}`}>Wolisz rozłożyć prowizję na raty?</h2>
                <p className={`mt-3 ${bodyClass}`}>Wybierz Najem Split i skorzystaj z tego samego zakresu usług, rozkładając prowizję na 12 miesięcznych rat bez odsetek.</p>
                <p className="mt-3 font-semibold text-amber-100">Ta sama usługa. Ta sama cena. Inny sposób płatności.</p>
              </div>
              <a href="/pl/najem-split" className={`self-start lg:shrink-0 lg:self-center ${secondaryCtaClass}`}>Poznaj Najem Split</a>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Najczęstsze pytania</h2>
            <FaqAccordion items={faqItems} />
          </section>

          <section id="kontakt" className="scroll-mt-28 rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0A2530] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-10">
            <h2 className={headingClass}>Masz mieszkanie do wynajęcia?</h2>
            <p className={`mt-4 text-lg ${bodyClass}`}>Wybierz profesjonalne pośrednictwo z jednorazowym rozliczeniem i pełnym zakresem usług.</p>
            <a href="/pl/landlord#contact" className={`mt-6 ${primaryCtaClass}`}>Chcę poznać Najem Solo</a>
            <p className={`mt-3 text-sm ${bodyClass}`}>W wiadomości napisz „Najem Solo”.</p>
          </section>
        </Container>
      </main>
      <SiteFooterPl />
    </div>
  );
}
