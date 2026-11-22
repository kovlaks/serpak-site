import type { Metadata } from "next";
import { Container } from "../../../components/layout/Container";
import { SiteFooterPl } from "../../../components/layout/SiteFooterPl";
import { SiteHeaderPl } from "../../../components/layout/SiteHeaderPl";
import { FaqAccordion } from "../landlord/FaqAccordion";
import CommissionCalculator from "./CommissionCalculator";

export const metadata: Metadata = {
  title: "Najem Split - prowizja w 12 ratach | SERPAKOWSKI",
  description:
    "Najem Split: prowizja w 12 ratach bez odsetek, 0 zł prowizji dla najemcy i możliwość rabatu przy ponownym wynajmie mieszkania.",
  alternates: {
    canonical: "https://www.serpakowski.pl/pl/najem-split",
  },
  robots: { index: false, follow: false },
};

const benefits = [
  {
    figure: "12 rat",
    title: "bez odsetek",
    description: "Jedna prowizja rozłożona na 12 miesięcznych płatności.",
  },
  {
    figure: "0 zł",
    title: "dla najemcy",
    description: "Nie pobieramy prowizji od najemcy za wynajęcie Twojego mieszkania.",
  },
  {
    figure: "Do 100%",
    title: "rabatu",
    description: "Możliwość uzyskania rabatu na nową prowizję przy ponownym wynajmie, na warunkach określonych w umowie.",
  },
  {
    figure: "14 dni",
    title: "wsparcia",
    description: "Doraźna pomoc w pilnych sprawach związanych z rozpoczęciem najmu.",
  },
];

const heroBenefits = [
  "0 zł prowizji dla najemcy",
  "Rabat przy ponownym wynajmie",
  "14 dni wsparcia po przekazaniu mieszkania",
];

const exampleAmounts = [
  ["Nowa standardowa prowizja", "3 600 zł"],
  ["Rabat", "900 zł"],
  ["Nowa prowizja po rabacie", "2 700 zł"],
];

const discountConditions = [
  "Rabat dotyczy tego samego mieszkania.",
  "Każde kolejne zlecenie wymaga odrębnej umowy pośrednictwa.",
  "Rabat obliczamy na dzień faktycznego przekazania mieszkania nowemu najemcy.",
  "Uwzględniamy przyszłe części wszystkich mających zastosowanie wcześniejszych harmonogramów dla tego mieszkania, w tym raty opłacone przed terminem.",
  "Warunkiem jest brak zaległych zobowiązań wobec agencji w dniu faktycznego przekazania mieszkania nowemu najemcy.",
  "Rabat może wynieść maksymalnie 100% nowej prowizji.",
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
      "Pomagamy zrozumieć kwestie formalne i prawne związane z wynajmem oraz przygotować odpowiednią dokumentację.",
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
    title: "Rozliczasz prowizję w 12 miesięcznych ratach.",
    description: "Płacisz raty bez odsetek według harmonogramu określonego w umowie.",
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
    question: "Ile wynosi prowizja?",
    answer: [
      "Standardowa łączna prowizja brutto odpowiada jednomiesięcznemu bazowemu czynszowi najmu i jest rozłożona na 12 nieoprocentowanych rat.",
    ],
  },
  {
    question: "Czy 8,33% to cała prowizja?",
    answer: ["Nie. Około 8,33% miesięcznego bazowego czynszu stanowi jedną z 12 rat."],
  },
  {
    question: "Czy do prowizji doliczany jest VAT?",
    answer: ["Nie. Podawane wynagrodzenie jest kwotą brutto i obejmuje VAT."],
  },
  {
    question: "Czy prowizja obejmuje opłaty administracyjne i media?",
    answer: [
      "Nie. Podstawą jest wyłącznie bazowy czynsz najmu. Przy zmiennym czynszu podstawę obliczamy według średniej określonej w umowie.",
    ],
  },
  {
    question: "Kiedy płacę pierwszą ratę?",
    answer: ["Przy pierwszym pośrednictwie w terminie 7 dni od faktycznego przekazania mieszkania najemcy."],
  },
  {
    question: "Czy płacę prowizję, jeśli mieszkanie nie zostanie wynajęte?",
    answer: [
      "Wynagrodzenie za skuteczne pośrednictwo powstaje po zawarciu umowy najmu na warunkach określonych w umowie pośrednictwa i faktycznym przekazaniu mieszkania. Odrębnemu rozliczeniu mogą podlegać wcześniej uzgodnione koszty dodatkowe oraz świadczenia podlegające rozliczeniu zgodnie z przepisami prawa.",
    ],
  },
  {
    question: "Czy najemca płaci prowizję?",
    answer: ["Nie. Wynagrodzenie agencji pokrywa właściciel."],
  },
  {
    question: "Co się stanie, jeśli najemca wyprowadzi się wcześniej?",
    answer: [
      "Wcześniejsze zakończenie najmu nie anuluje poprzedniej prowizji ani nie wstrzymuje harmonogramu. Rabat na kolejną prowizję obliczamy na dzień faktycznego przekazania mieszkania nowemu najemcy. Czas poszukiwania nowego najemcy wlicza się do okresu rozliczeniowego.",
    ],
  },
  {
    question: "Czy rabat może wynieść 100%?",
    answer: [
      "Tak. Jeżeli obliczony rabat jest równy lub wyższy od nowej prowizji, wynagrodzenie za nową usługę wynosi 0 zł. Niewykorzystana kwota rabatu nie podlega zwrotowi ani przeniesieniu na kolejne usługi jako odrębne saldo. Wcześniejsze zobowiązania pozostają bez zmian, a opłacona prowizja nie podlega zwrotowi.",
    ],
  },
  {
    question: "Czy mogę wcześniej spłacić prowizję?",
    answer: [
      "Tak. Przyszłe raty opłacone wcześniej mogą nadal zostać uwzględnione przy obliczaniu rabatu. Wcześniejsza spłata nie przyspiesza nowego harmonogramu.",
    ],
  },
  {
    question: "Czy współpraca odbywa się na wyłączność?",
    answer: [
      "Tak. Początkowy okres wyłączności wynosi 30 dni kalendarzowych, z zachowaniem ustawowych uprawnień klienta. Następnie umowa przedłuża się na czas nieoznaczony i może zostać wypowiedziana bez okresu wypowiedzenia.",
    ],
  },
  {
    question: "Czy po zakończeniu współpracy mogą nadal obowiązywać zasady dotyczące prowizji?",
    answer: [
      "Tak. Umowa przewiduje 60-dniowy okres dotyczący kandydatów obsługiwanych wcześniej przez agencję. Szczegółowe warunki określa umowa.",
    ],
  },
  {
    question: "Czy sam wybieram najemcę?",
    answer: ["Tak. Ostateczna decyzja należy do właściciela."],
  },
  {
    question: "Czy przygotowujecie indywidualną umowę najmu?",
    answer: ["Tak. Przygotowanie indywidualnego projektu umowy jest częścią usługi pośrednictwa."],
  },
  {
    question: "Czy zarządzacie mieszkaniem przez całe 12 miesięcy?",
    answer: [
      "Nie. Najem Split jest usługą pośrednictwa rozliczaną w 12 ratach. Dłuższe wsparcie można uzgodnić odrębnie.",
    ],
  },
  {
    question: "Czy występują dodatkowe koszty?",
    answer: [
      "Rozłożenie prowizji na raty nie zwiększa jej ceny. Koszty usług zewnętrznych, płatnych promocji, tłumaczeń, notariusza lub specjalistycznej dokumentacji wymagają wcześniejszego uzgodnienia. W przypadku opóźnień mogą być naliczane odsetki ustawowe za opóźnienie.",
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

export default function NajemSplitPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0C2D3A] text-neutral-100">
      <SiteHeaderPl />
      <main className="mx-auto w-full max-w-6xl flex-1">
        <Container className="space-y-14 pb-20 pt-28 sm:space-y-20">
          <section className="rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0C2D3A] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-12">
            <div className="grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
              <div className="space-y-3">
                <p className={eyebrowClass}>SERPAKOWSKI NIERUCHOMOŚCI</p>
                <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl">Najem Split</h1>
                <p className="font-serif text-2xl text-white sm:text-3xl">Dzielimy prowizję. Nie jakość.</p>
              </div>
              <p className="self-center rounded-3xl bg-[#0A2530] p-5 text-lg font-semibold text-white ring-1 ring-amber-200/25 sm:p-6 lg:row-span-2">
                <strong className="block font-serif text-5xl font-normal leading-none text-amber-300 sm:text-7xl">8,33%</strong>
                <span className="mt-3 block">czynszu najmu miesięcznie*</span>
              </p>
              <div className="space-y-5">
                <p className={`text-lg ${bodyClass}`}>
                  Wynajmij mieszkanie z profesjonalnym pośrednikiem. Zamiast płacić całą prowizję jednorazowo, rozłóż ją na 12 miesięcznych rat bez odsetek.
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
                  <a href="#kalkulator" className={primaryCtaClass}>Oblicz swoją ratę</a>
                  <a href="#kontakt" className={secondaryCtaClass}>Zgłoś mieszkanie</a>
                </div>
              </div>
            </div>
            <p className="mt-6 border-t border-white/10 pt-4 text-sm leading-relaxed text-neutral-200/90">
              * Około 8,33% miesięcznego bazowego czynszu najmu stanowi jedną z 12 rat. Łączna standardowa prowizja brutto odpowiada jednomiesięcznemu bazowemu czynszowi najmu. Raty pozostają należne również w przypadku wcześniejszego zakończenia najmu.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Wynajem na nowych zasadach</h2>
            <p className={`max-w-3xl ${bodyClass}`}>
              Najem Solo i Najem Split obejmują ten sam zakres usług, tę samą łączną prowizję oraz te same dodatkowe korzyści. Różnią się wyłącznie sposobem płatności.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map(({ figure, title, description }) => (
                <article key={figure} className={panelClass}>
                  <h3 className="font-semibold text-white">
                    <span className="mb-2 block font-serif text-3xl font-normal leading-tight text-amber-300">{figure}</span>{" "}
                    {title}
                  </h3>
                  <p className={`mt-3 text-sm ${bodyClass}`}>{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={panelClass}>
            <h2 className={headingClass}>Jedna prowizja. <span className="text-amber-300">12 rat.</span> 0% odsetek.</h2>
            <div className={`mt-5 max-w-3xl space-y-3 ${bodyClass}`}>
              <p>W tradycyjnym modelu rozliczenia prowizja agencji jest często płatna jednorazowo.</p>
              <p>Najem Split pozwala rozłożyć ten wydatek na 12 miesięcy bez zwiększania wynagrodzenia za rozłożenie płatności na raty.</p>
              <p>Podstawą prowizji jest wyłącznie bazowy czynsz najmu należny właścicielowi, bez opłat administracyjnych, mediów i innych opłat dodatkowych.</p>
              <p>Wszystkie podawane kwoty prowizji są kwotami brutto, obejmującymi VAT.</p>
              <p>Pierwsza rata przy pierwszym pośrednictwie jest płatna w terminie 7 dni od faktycznego przekazania mieszkania najemcy.</p>
            </div>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className={cardClass}>
                <dt className="text-sm text-neutral-200/90">Płatność jednorazowa</dt>
                <dd className="mt-2 font-serif text-2xl text-white sm:text-3xl">3 600 zł</dd>
              </div>
              <div className="rounded-2xl bg-amber-300/10 p-5 ring-1 ring-amber-200/30">
                <dt className="text-sm font-semibold text-amber-100">Najem Split</dt>
                <dd className="mt-2 font-serif text-2xl text-amber-300 sm:text-3xl">12 rat po 300 zł</dd>
              </div>
            </dl>
            <p className={`mt-4 text-sm ${bodyClass}`}>Ta sama przykładowa kwota prowizji. Inny sposób rozliczenia.</p>
          </section>

          <section id="kalkulator" className="scroll-mt-28 space-y-5">
            <h2 className={headingClass}>Oblicz swoją miesięczną ratę</h2>
            <p className={bodyClass}>Sprawdź, ile wyniesie standardowa prowizja w modelu Najem Split przy Twoim czynszu najmu.</p>
            <CommissionCalculator />
          </section>

          <section className="grid gap-5 rounded-3xl bg-[#0A2530] p-6 ring-1 ring-white/10 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-8">
            <div>
              <h2 className={headingClass}><span className="text-amber-300">0 zł</span> prowizji dla najemcy</h2>
              <div className={`mt-4 space-y-3 ${bodyClass}`}>
                <p>Pierwszy czynsz, kaucja i koszty przeprowadzki to już duże wydatki dla osoby poszukującej mieszkania.</p>
                <p>W Najem Split najemca nie płaci naszemu biuru dodatkowej prowizji za wynajęcie Twojego mieszkania.</p>
                <p>Dzięki temu Twoja oferta może być bardziej atrakcyjna dla potencjalnych najemców.</p>
                <p>Prowizję za pośrednictwo pokrywa wyłącznie właściciel w 12 miesięcznych ratach.</p>
              </div>
            </div>
            <p className="rounded-2xl bg-[#123746] p-5 font-serif text-2xl leading-snug text-amber-100 ring-1 ring-amber-200/20 sm:p-6">
              Mniej kosztów dla najemcy. Więcej możliwości dla właściciela.
            </p>
          </section>

          <section className="space-y-6">
            <div className="max-w-3xl">
              <h2 className={headingClass}>Najemca wyprowadził się wcześniej?</h2>
              <p className="mt-4 text-lg font-semibold text-amber-100">Kolejny wynajem nie musi oznaczać kolejnej pełnej prowizji.</p>
              <div className={`mt-4 space-y-3 ${bodyClass}`}>
                <p>Życie potrafi zmienić plany. Najemca może zmienić pracę, wyjechać do innego miasta lub zakończyć najem wcześniej, niż przewidywano.</p>
                <p>W obu modelach możesz uzyskać rabat na nową prowizję za ponowne wynajęcie tego samego mieszkania. Jego wartość odpowiada sumie przyszłych części wcześniejszych harmonogramów na dzień faktycznego przekazania mieszkania nowemu najemcy. Data przekazania jest również decydująca, gdy umowa najmu została podpisana wcześniej.</p>
                <p>Podstawą obliczenia rabatu jest 12-miesięczny harmonogram każdej prowizji. W Najem Split stosujemy harmonogram rat, a jednorazowo opłaconą prowizję w Najem Solo dzielimy na 12 części wyłącznie na potrzeby obliczenia rabatu.</p>
                <p>Wcześniejsze zakończenie najmu, pustostan, poszukiwanie najemcy i przygotowanie nowej umowy nie wstrzymują okresu rozliczeniowego ani harmonogramów płatności. Czas poszukiwania nowego najemcy wlicza się do okresu rozliczeniowego.</p>
                <p>Rabat obniża wyłącznie nową prowizję. Wcześniejsze zobowiązania pozostają w mocy, a opłacona prowizja nie podlega zwrotowi.</p>
              </div>
            </div>
            <div className={panelClass}>
              <h3 className="font-serif text-2xl text-white">Przykład</h3>
              <div className={`mt-3 space-y-2 ${bodyClass}`}>
                <p>Bazowy czynsz najmu: <strong className="text-white">3 600 zł</strong>.</p>
                <p>Pierwsza prowizja: <strong className="text-white">12 rat po 300 zł</strong>.</p>
                <p>Najemca wyprowadza się po 8 miesiącach. Poszukiwanie nowego najemcy trwa kolejny miesiąc. W dniu faktycznego przekazania mieszkania nowemu najemcy pozostają 3 przyszłe raty po 300 zł, co daje 900 zł rabatu.</p>
              </div>
              <figure className={`my-6 ${cardClass}`}>
                <div aria-hidden="true" className="grid grid-cols-6 gap-1 sm:grid-cols-12 sm:gap-2">
                  {Array.from({ length: 12 }, (_, index) => (
                    <span
                      key={index}
                      className={`flex h-9 items-center justify-center rounded text-[10px] font-semibold sm:h-11 sm:rounded-lg sm:text-sm ${
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
                  <span className="text-neutral-100">Miesiące 1–8 · poprzedni najem</span>
                  <span className="text-amber-100">Miesiąc 9 · poszukiwanie najemcy</span>
                  <span className="text-amber-300">Miesiące 10–12 · 3 przyszłe raty</span>
                </figcaption>
              </figure>
              <dl className="grid gap-3 sm:grid-cols-3">
                {exampleAmounts.map(([label, amount]) => (
                  <div key={label} className={cardClass}>
                    <dt className="text-sm text-neutral-200/90">{label}</dt>
                    <dd className="mt-2 font-serif text-2xl text-white">{amount}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 font-serif text-2xl text-amber-300">Najem Split · 12 nowych rat po 225 zł</p>
              <p className="mt-2 font-serif text-xl text-white">Najem Solo · jednorazowa płatność 2 700 zł</p>
              <p className={`mt-3 text-sm ${bodyClass}`}>
                Przykład zakłada niezmieniony bazowy czynsz najmu, brak zaległości w płatnościach oraz zawarcie odrębnej umowy pośrednictwa i spełnienie jej warunków. Wcześniejsze raty pozostają należne zgodnie z harmonogramem, a terminy nowych rat wynikają z umowy.
              </p>
            </div>
          </section>

          <section className={panelClass}>
            <h2 className={headingClass}>Nawet <span className="text-amber-300">100%</span> rabatu na nową prowizję</h2>
            <p className={`mt-4 max-w-3xl ${bodyClass}`}>Suma przyszłych części z kilku wcześniejszych harmonogramów może pokryć całą nową prowizję. Przy kolejnym obliczeniu uwzględniamy też części użyte wcześniej do ustalenia rabatu, jeśli według pierwotnych harmonogramów nadal są przyszłe.</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {discountConditions.map((condition) => (
                <li key={condition} className={`flex items-start gap-3 ${cardClass} ${bodyClass}`}>
                  <span aria-hidden="true" className="text-amber-300">✓</span>
                  {condition}
                </li>
              ))}
            </ul>
            <p className={`mt-5 max-w-3xl ${bodyClass}`}>
              Gdy obliczony rabat jest co najmniej równy nowej prowizji, po rabacie wynosi ona 0 zł. Niewykorzystanej kwoty rabatu nie wypłacamy ani nie zapisujemy jako odrębnego salda na przyszłe usługi. Przyjęcie kolejnego zlecenia wymaga uzgodnienia z agencją, a przyznanie rabatu wymaga spełnienia pozostałych warunków umowy pośrednictwa.
            </p>
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className={headingClass}>Kolejne prowizje bez nakładania się harmonogramów</h2>
            <div className={`space-y-3 ${bodyClass}`}>
              <p>Harmonogramy płatności kolejnych prowizji dotyczących tego samego mieszkania nie nakładają się na siebie.</p>
              <p>Spłatę nowego wynagrodzenia rozpoczynasz zgodnie z zasadami umowy po zakończeniu wcześniejszych harmonogramów mających zastosowanie.</p>
              <p>Wcześniejsza spłata poprzedniej prowizji nie przyspiesza terminów kolejnych rat.</p>
              <p>Wyprowadzka najemcy i pustostan nie wstrzymują wcześniejszych harmonogramów.</p>
              <p>Jeżeli wcześniejsze harmonogramy zakończyły się przed przekazaniem mieszkania nowemu najemcy, pierwsza nowa rata jest płatna w terminie 7 dni od przekazania.</p>
            </div>
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
            <h2 className={headingClass}>Jak działa Najem Split?</h2>
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
              <h2 className="font-serif text-3xl leading-tight text-white">Nasza pomoc nie kończy się na przekazaniu kluczy</h2>
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
                <p>Usługa rozliczana odrębnie i nieobjęta prowizją Najem Split.</p>
              </div>
            </section>
          </div>

          <section className="space-y-5">
            <h2 className={headingClass}>Wynajmujesz samodzielnie?</h2>
            <p className={bodyClass}>Nie musisz korzystać z pełnej usługi pośrednictwa. Możesz zamówić wybrane usługi osobno.</p>
            <div className="grid gap-4 md:grid-cols-3">
              {standaloneServices.map(({ title, description }) => (
                <article key={title} className={cardClass}>
                  <h3 className="font-serif text-xl text-white">{title}</h3>
                  <p className={`mt-2 text-sm ${bodyClass}`}>{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={`${panelClass} gap-6 lg:flex lg:items-center lg:justify-between`}>
            <div className="max-w-3xl">
              <p className={eyebrowClass}>Alternatywny sposób płatności</p>
              <h2 className={`mt-2 ${headingClass}`}>Wolisz zapłacić jednorazowo?</h2>
              <p className={`mt-3 ${bodyClass}`}>
                Wybierz Najem Solo i skorzystaj z tego samego zakresu usług oraz tych samych korzyści, rozliczając prowizję w jednej płatności.
              </p>
            </div>
            <a href="/pl/najem-solo" className={`mt-5 shrink-0 lg:mt-0 ${secondaryCtaClass}`}>Poznaj Najem Solo</a>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Najczęstsze pytania</h2>
            <FaqAccordion items={faqItems} />
          </section>

          <section id="kontakt" className="scroll-mt-28 rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0A2530] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-10">
            <h2 className={headingClass}>Masz mieszkanie do wynajęcia?</h2>
            <p className={`mt-4 text-lg ${bodyClass}`}>Poznaj Najem Split i rozliczaj pośrednictwo na nowych zasadach.</p>
            <p className="mt-3 max-w-2xl font-semibold leading-relaxed text-amber-100">
              12 miesięcznych rat bez odsetek. 0 zł prowizji dla najemcy. Możliwość rabatu przy ponownym wynajmie.
            </p>
            <a href="/pl/landlord#contact" className={`mt-6 ${primaryCtaClass}`}>Chcę poznać Najem Split</a>
            <p className={`mt-3 text-sm ${bodyClass}`}>W wiadomości napisz „Najem Split”.</p>
            <p className={`mt-4 max-w-2xl border-t border-white/10 pt-4 text-sm ${bodyClass}`}>
              Najem Split jest obecnie na etapie pilotażowym. Zgłoszenie nie oznacza zawarcia umowy ani gwarancji przyjęcia zlecenia.
            </p>
          </section>
        </Container>
      </main>
      <SiteFooterPl />
    </div>
  );
}
