import HomeContactForm from "../../../components/common/HomeContactForm";
import { SiteFooterPl } from "../../../components/layout/SiteFooterPl";
import { SiteHeaderPlLandlord } from "../../../components/layout/SiteHeaderPlLandlord";
import { createSeoMetadata, seoAlternates } from "../../seo";
import { FaqAccordion } from "./FaqAccordion";

export const metadata = createSeoMetadata({
  title: "Wynajem mieszkania właścicielom | SERPAKOWSKI Nieruchomości Warszawa",
  description: "Wsparcie dla właścicieli mieszkań w Warszawie: przygotowanie oferty, weryfikacja najemców, umowa najmu, protokół przekazania i bezpieczna obsługa wynajmu.",
  canonicalPath: "/pl/landlord",
  languages: seoAlternates.landlord,
  locale: "pl_PL",
});

type ContentSection = {
  eyebrow?: string;
  title: string;
  intro?: string;
  paragraphs?: string[];
  points?: string[];
  closing?: string;
  ctaIntro?: string;
  cta?: string;
  ctaHref?: string;
};

type FaqItem = {
  question: string;
  answer: string[];
};

const serviceSections: ContentSection[] = [
  {
    eyebrow: "Proces bez chaosu",
    title: "Wynajem mieszkania to nie tylko publikacja ogłoszenia",
    paragraphs: [
      "Na pierwszy rzut oka wynajem wygląda prosto: zrobić zdjęcia, wystawić ogłoszenie i wybrać najemcę. W praktyce właściciel często mierzy się z chaosem: dziesiątkami wiadomości, przekładaniem prezentacji, nieodpowiednimi kandydatami, negocjacjami, pytaniami o dokumenty i ryzykiem podjęcia decyzji zbyt szybko.",
      "Naszym zadaniem jest przeprowadzić proces spokojnie i etapami: od oceny mieszkania po podpisanie umowy i przekazanie kluczy.",
    ],
  },
  {
    eyebrow: "Organizacja wynajmu",
    title: "Co bierzemy na siebie",
    intro: "Organizujemy cały proces wynajmu mieszkania.",
    points: [
      "oceniamy rynkową cenę najmu;",
      "porównujemy mieszkanie z podobnymi ofertami;",
      "przygotowujemy rekomendacje przed publikacją;",
      "pomagamy zwiększyć atrakcyjność mieszkania;",
      "przygotowujemy zdjęcia, wideo i opis;",
      "publikujemy ogłoszenie;",
      "prowadzimy komunikację z kandydatami;",
      "organizujemy prezentacje;",
      "zbieramy podstawowe informacje o najemcach;",
      "pomagamy sprawdzić kandydata;",
      "uzgadniamy umowę, kaucję i opłaty eksploatacyjne;",
      "przygotowujemy przekazanie mieszkania i protokół.",
    ],
    closing: "Właściciel zachowuje kontrolę i podejmuje ostateczną decyzję, ale nie zajmuje się wszystkimi szczegółami ręcznie.",
    cta: "Otrzymaj plan wynajmu mieszkania",
    ctaHref: "#contact",
  },
  {
    eyebrow: "Cena najmu",
    title: "Ocenimy mieszkanie i pomożemy nie wynająć poniżej rynku",
    paragraphs: [
      "Przed publikacją warto zrozumieć, jak mieszkanie wygląda na tle innych ofert w Warszawie: jaka cena jest realistyczna, co może utrudniać wynajem i jakie ulepszenia mogą zwiększyć zainteresowanie najemców.",
      "Możemy również zaproponować rozwiązania, które pomagają podnieść cenę najmu — zarówno przy pierwszym wynajmie, jak i przy kolejnym okresie najmu, szczególnie jeśli najemca będzie chciał przedłużyć umowę. Możliwość takiej zmiany zależy od mieszkania, konkurencji i aktualnej sytuacji na rynku.",
    ],
    points: [
      "określić rynkową cenę najmu;",
      "porównać mieszkanie z podobnymi lokalami;",
      "zrozumieć mocne i słabsze strony mieszkania;",
      "przygotować rekomendacje przed prezentacjami;",
      "określić, co może zwiększyć cenę lub atrakcyjność oferty.",
    ],
    cta: "Oceń mieszkanie",
    ctaHref: "#contact",
  },
  {
    eyebrow: "Publikacja",
    title: "Przygotujemy mieszkanie i ogłoszenie do publikacji",
    intro: "Dobre ogłoszenie powinno nie tylko pokazać mieszkanie, ale również właściwie wyjaśnić jego wartość dla najemcy.",
    points: [
      "materiały zdjęciowe i wideo;",
      "jasny opis mieszkania;",
      "akcenty na zaletach lokalu;",
      "rekomendacje dotyczące przygotowania mieszkania do prezentacji;",
      "ogłoszenie do publikacji.",
    ],
    closing: "Jeśli będzie to potrzebne, możemy dodatkowo zorganizować sprzątanie, drobne naprawy lub przygotowanie mieszkania do zdjęć i prezentacji.",
    ctaIntro: "Możesz również zamówić wirtualny spacer 3D jako dodatkową usługę prezentacji nieruchomości.",
    cta: "Poznaj wirtualne spacery 3D",
    ctaHref: "/pl/spacer-3d",
  },
  {
    eyebrow: "Kandydaci",
    title: "Znajdziemy i wybierzemy odpowiednich kandydatów",
    paragraphs: [
      "Po publikacji ogłoszenia właściciel często otrzymuje wiele wiadomości, ale nie każde zgłoszenie pasuje do warunków mieszkania.",
      "Naszym celem nie jest tylko znalezienie osoby, która chce wynająć mieszkanie, ale pomoc w wyborze najemcy, z którym najem będzie zrozumiały i bezpieczny.",
    ],
    intro: "Bierzemy na siebie pierwszą komunikację:",
    points: [
      "odpowiadamy na pytania kandydatów;",
      "organizujemy prezentacje;",
      "doprecyzowujemy podstawowe informacje;",
      "odrzucamy nieodpowiednie zgłoszenia;",
      "przedstawiamy właścicielowi kandydatów, którzy odpowiadają warunkom mieszkania.",
    ],
  },
  {
    eyebrow: "Weryfikacja najemcy",
    title: "Pomożemy sprawdzić najemcę przed umową",
    paragraphs: [
      "Pierwsze wrażenie nie wystarczy. Przed podpisaniem umowy warto zrozumieć, kto będzie mieszkał w lokalu, czy kandydat odpowiada warunkom właściciela i czy jest gotowy do realizacji zobowiązań finansowych.",
      "Takie podejście zmniejsza ryzyko nieporozumień, opóźnień w płatnościach i problemów po zamieszkaniu.",
    ],
    intro: "Pomagamy:",
    points: [
      "zebrać podstawowe informacje o kandydacie;",
      "sprawdzić dokumenty i podstawowe dane;",
      "przeanalizować zdolność płatniczą;",
      "skorzystać z Simple.rent lub innego narzędzia dostępnego w konkretnej sytuacji;",
      "doprecyzować warunki najmu przed podpisaniem umowy;",
      "przeprowadzić komunikację z najemcami zagranicznymi, jeśli jest to potrzebne.",
    ],
    cta: "Porozmawiajmy o bezpiecznym wynajmie",
    ctaHref: "#contact",
  },
  {
    eyebrow: "Umowa i przekazanie",
    title: "Wesprzemy umowę, najem okazjonalny i przekazanie mieszkania",
    paragraphs: [
      "Kiedy najemca zostanie wybrany, ważne jest prawidłowe ustalenie warunków najmu i udokumentowanie stanu mieszkania.",
      "Właściciel otrzymuje nie tylko najemcę, ale też starannie przeprowadzony proces wynajmu mieszkania z jasnymi warunkami i udokumentowanymi ustaleniami.",
    ],
    intro: "Pomagamy przy:",
    points: [
      "przygotowaniu lub uzgodnieniu umowy najmu;",
      "warunkach dotyczących kaucji, płatności i opłat eksploatacyjnych;",
      "organizacji najmu okazjonalnego, jeśli taki format pasuje do sytuacji;",
      "koordynacji notariusza;",
      "przygotowaniu protokołu przekazania mieszkania;",
      "udokumentowaniu stanu mieszkania;",
      "przekazaniu kluczy.",
    ],
  },
  {
    eyebrow: "Kontrola procesu",
    title: "Zachowujesz kontrolę na każdym etapie",
    paragraphs: [
      "Nawet jeśli właściciel nie uczestniczy w każdej rozmowie, ważne jest, aby wiedział, co dzieje się z mieszkaniem.",
      "Widzisz, jak przebiega proces, jacy kandydaci się pojawiają, jakie pytania powstają i dlaczego rekomendujemy konkretny kolejny krok.",
    ],
    intro: "Możemy przekazywać krótkie informacje po kluczowych etapach:",
    points: [
      "po przygotowaniu mieszkania;",
      "po publikacji ogłoszenia;",
      "po pierwszych zgłoszeniach;",
      "po prezentacjach;",
      "po selekcji kandydatów;",
      "po wyborze najemcy;",
      "po podpisaniu umowy i przekazaniu mieszkania.",
    ],
  },
];

const afterRentalSections: ContentSection[] = [
  {
    eyebrow: "Po wynajęciu mieszkania",
    title: "Można podłączyć dalszą obsługę najmu",
    paragraphs: [
      "Po podpisaniu umowy właściciel może potrzebować pomocy nie tylko w znalezieniu najemcy, ale również w bieżącej komunikacji.",
      "Jest to szczególnie przydatne dla właścicieli, którzy nie chcą samodzielnie zajmować się stałą komunikacją z najemcą. Taki format omawiamy osobno jako rozszerzoną obsługę i nie jest on automatycznie wliczony w podstawową usługę.",
    ],
    intro: "W rozszerzonym formacie można omówić:",
    points: [
      "kontrolę wpływu płatności;",
      "komunikację z najemcą;",
      "koordynację drobnych napraw;",
      "okresowe przeglądy mieszkania;",
      "raporty dla właściciela;",
      "pomoc w sprawach bieżących;",
      "przypomnienia o ważnych terminach wynikających z umowy.",
    ],
    cta: "Zapytaj o obsługę najmu",
    ctaHref: "#contact",
  },
  {
    eyebrow: "Przedłużenie lub nowy najemca",
    title: "Przygotujemy kolejny krok przed zakończeniem umowy",
    paragraphs: [
      "Dobry najem nie powinien kończyć się nagle w ostatnim dniu umowy. Lepiej wcześniej wiedzieć, czy będzie przedłużenie, czy trzeba zmienić cenę i kiedy zacząć szukać kolejnego najemcy.",
      "Celem jest ograniczenie ryzyka przestoju mieszkania i wcześniejsze przygotowanie kolejnego kroku.",
    ],
    intro: "Możemy pomóc przy:",
    points: [
      "analizie sytuacji przed zakończeniem umowy;",
      "negocjacjach dotyczących przedłużenia;",
      "ponownym zawarciu umowy;",
      "przeglądzie ceny najmu;",
      "przygotowaniu mieszkania do kolejnego okresu;",
      "wcześniejszym poszukiwaniu nowego najemcy, jeśli obecny najemca nie przedłuża umowy.",
    ],
  },
];

const paymentModels = [
  {
    name: "Najem Solo",
    eyebrow: "Standardowa płatność",
    amount: "100%",
    frequency: "Jednorazowo",
    description: "Kompleksowe pośrednictwo w wynajmie mieszkania z jednorazową płatnością prowizji.",
    paymentBenefit: "Jedna płatność.",
    href: "/pl/najem-solo",
  },
  {
    name: "Najem Split",
    eyebrow: "Elastyczna płatność",
    amount: "8,33%*",
    frequency: "Miesięcznie przez 12 miesięcy",
    description: "Ten sam zakres usług i ta sama łączna prowizja, rozłożona na 12 miesięcznych rat bez odsetek.",
    paymentBenefit: "12 rat bez odsetek.",
    href: "/pl/najem-split",
  },
];

const sharedPaymentBenefits = [
  "0 zł prowizji dla najemcy.",
  "Do 100% rabatu przy ponownym wynajmie.",
  "Pełny zakres usług.",
  "14 dni dodatkowego wsparcia.",
];

const faqItems: FaqItem[] = [
  {
    question: "Po co mi agencja, jeśli mogę wynająć mieszkanie samodzielnie?",
    answer: [
      "Samodzielny wynajem mieszkania jest możliwy. Wtedy właściciel sam zajmuje się oceną ceny, publikacją ogłoszenia, wiadomościami, prezentacjami, selekcją kandydatów, sprawdzaniem dokumentów, umową i przekazaniem mieszkania.",
      "My bierzemy na siebie organizację procesu i pomagamy ograniczyć ryzyko przypadkowych decyzji.",
    ],
  },
  {
    question: "Kto wybiera najemcę?",
    answer: [
      "Ostateczna decyzja pozostaje po stronie właściciela. Zbieramy informacje, sprawdzamy kandydatów dostępnymi narzędziami i przekazujemy rekomendacje, ale wybór najemcy jest uzgadniany z właścicielem mieszkania.",
    ],
  },
  {
    question: "Jak sprawdzacie najemców?",
    answer: [
      "Zbieramy podstawowe informacje, sprawdzamy dokumenty, analizujemy zdolność płatniczą i możemy użyć Simple.rent lub innego narzędzia dostępnego w konkretnej sytuacji.",
      "Dodatkowo wcześniej doprecyzowujemy ważne warunki najmu, aby ograniczyć ryzyko nieporozumień po podpisaniu umowy.",
    ],
  },
  {
    question: "Czy pomagacie przy najmie okazjonalnym?",
    answer: [
      "Tak, możemy pomóc zorganizować proces najmu okazjonalnego, jeśli ten format pasuje do sytuacji: ustalić kroki, przygotować strony i skoordynować notariusza.",
    ],
  },
  {
    question: "Co obejmuje koszt usługi?",
    answer: [
      "W tej kwocie mieści się organizacja procesu wynajmu mieszkania: ocena, przygotowanie oferty, publikacja ogłoszenia, komunikacja z kandydatami, prezentacje, wybór najemcy, pomoc przy weryfikacji, umowie i przekazaniu mieszkania.",
    ],
  },
  {
    question: "Kto płaci prowizję?",
    answer: [
      "Prowizję za pośrednictwo w wynajmie mieszkania pokrywa wyłącznie właściciel. Najemca nie płaci prowizji agencyjnej.",
    ],
  },
  {
    question: "Ile wynosi prowizja?",
    answer: [
      "Standardowa prowizja brutto odpowiada jednomiesięcznemu bazowemu czynszowi najmu. Można ją rozliczyć jednorazowo w modelu Najem Solo lub w 12 miesięcznych ratach bez odsetek w modelu Najem Split.",
    ],
  },
  {
    question: "Czym różni się Najem Solo od Najem Split?",
    answer: [
      "Obie propozycje obejmują ten sam zakres usług i te same dodatkowe korzyści. Różnią się wyłącznie sposobem płatności.",
    ],
  },
  {
    question: "Czy mogę otrzymać rabat przy ponownym wynajmie mieszkania?",
    answer: [
      "Tak. System rabatowy jest dostępny w obu modelach. Wysokość rabatu zależy od przyszłych części wcześniejszych rozliczeń na dzień faktycznego przekazania mieszkania nowemu najemcy oraz warunków umowy pośrednictwa.",
    ],
  },
  {
    question: "Czy można podłączyć obsługę po wynajęciu mieszkania?",
    answer: [
      "Tak. Po podpisaniu umowy można omówić rozszerzoną obsługę: komunikację z najemcą, kontrolę płatności, drobne naprawy, raporty i przypomnienia dotyczące umowy.",
    ],
  },
];

const primaryCtaClass = "inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]";
const secondaryCtaClass = "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10";

function SectionCard({ section, index }: { section: ContentSection; index: number }) {
  return (
    <article className="rounded-3xl bg-[#123746] p-6 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:p-8">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-300/20 text-sm font-semibold text-amber-100 ring-1 ring-amber-200/30">
          {index + 1}
        </div>
        {section.eyebrow ? <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">{section.eyebrow}</p> : null}
      </div>
      <h2 className="font-serif text-3xl text-white">{section.title}</h2>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="mt-4 leading-relaxed text-neutral-200/90">
          {paragraph}
        </p>
      ))}
      {section.intro ? <p className="mt-5 font-semibold text-amber-100">{section.intro}</p> : null}
      {section.points ? (
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {section.points.map((point) => (
            <li key={point} className="rounded-xl bg-[#0A2530] px-4 py-3 text-sm leading-relaxed text-neutral-100 ring-1 ring-white/10">
              • {point}
            </li>
          ))}
        </ul>
      ) : null}
      {section.closing ? <p className="mt-5 leading-relaxed text-neutral-200/90">{section.closing}</p> : null}
      {section.cta && section.ctaHref ? (
        <div className="mt-6">
          {section.ctaIntro ? <p className="mb-3 leading-relaxed text-neutral-200/90">{section.ctaIntro}</p> : null}
          <a href={section.ctaHref} className={secondaryCtaClass}>
            {section.cta}
          </a>
        </div>
      ) : null}
    </article>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0C2D3A] text-neutral-100">
      <SiteHeaderPlLandlord />
      <main className="mx-auto max-w-6xl space-y-20 px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0C2D3A] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,193,7,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_35%)]" />
          <div className="max-w-4xl space-y-6">
            <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Obsługa właścicieli w Warszawie</p>
            <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
              Wynajmij mieszkanie w Warszawie bezpiecznie, korzystnie i bez zbędnego chaosu
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-neutral-200/90">
              SERPAKOWSKI Nieruchomości pomaga właścicielom wynająć mieszkanie: ocenić cenę, przygotować ofertę, znaleźć i sprawdzić najemcę, uzgodnić umowę i spokojnie przekazać lokal.
            </p>
            <p className="max-w-3xl leading-relaxed text-neutral-200/85">
              Bierzemy na siebie organizację procesu, aby właściciel nie tracił czasu na przypadkowe zgłoszenia, powtarzające się pytania, prezentacje, dokumenty i ryzykowne decyzje.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#contact" className={primaryCtaClass}>
                Dowiedz się, za ile można wynająć mieszkanie
              </a>
              <a href="#contact" className={secondaryCtaClass}>
                Porozmawiajmy o wynajmie mieszkania
              </a>
            </div>
          </div>
        </section>

        <section id="process" className="space-y-6 scroll-mt-24">
          {serviceSections.map((section, index) => (
            <SectionCard key={section.title} section={section} index={index} />
          ))}
        </section>

        <section className="rounded-3xl bg-[#0A2530] p-8 text-center ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Kolejny etap</p>
          <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">Po wynajęciu mieszkania</h2>
        </section>

        <section className="space-y-6">
          {afterRentalSections.map((section, index) => (
            <SectionCard key={section.title} section={section} index={index + serviceSections.length} />
          ))}
        </section>

        <section id="pricing" className="scroll-mt-24 rounded-3xl bg-[#123746] p-6 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Model współpracy</p>
          <h2 className="mt-4 font-serif text-3xl text-white">Jedna usługa. Dwa sposoby płatności.</h2>
          <div className="mt-5 max-w-3xl space-y-4 leading-relaxed text-neutral-200/90">
            <p>W SERPAKOWSKI Nieruchomości oferujemy kompleksowe pośrednictwo w wynajmie mieszkania w dwóch modelach rozliczenia.</p>
            <p>Niezależnie od wybranego modelu otrzymujesz ten sam zakres usług, te same korzyści i ten sam standard obsługi.</p>
            <p>Prowizję pokrywa wyłącznie właściciel. Najemca nie płaci prowizji agencyjnej.</p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {paymentModels.map((model) => (
              <article key={model.name} className="flex flex-col rounded-2xl bg-[#0A2530] p-5 ring-1 ring-white/10 sm:p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">{model.eyebrow}</p>
                <h3 className="mt-3 font-serif text-2xl text-white">{model.name}</h3>
                <p className="mt-4 text-4xl font-semibold text-amber-200 sm:text-5xl">{model.amount}</p>
                <p className="mt-1 text-sm font-semibold text-amber-100">{model.frequency}</p>
                <p className="mt-4 leading-relaxed text-neutral-200/90">{model.description}</p>
                <ul className="mb-6 mt-4 space-y-2 text-sm leading-relaxed text-neutral-100">
                  {[model.paymentBenefit, ...sharedPaymentBenefits].map((benefit) => (
                    <li key={benefit} className="flex gap-2">
                      <span aria-hidden="true" className="text-amber-200">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a href={model.href} className={`mt-auto self-start ${primaryCtaClass}`}>
                  Poznaj {model.name}
                </a>
              </article>
            ))}
          </div>
          <div className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-neutral-200/90">
            <p>Standardowa łączna prowizja w obu modelach wynosi równowartość jednomiesięcznego bazowego czynszu najmu brutto i obejmuje VAT.</p>
            <p>* Około 8,33% bazowego miesięcznego czynszu najmu stanowi jedną z 12 rat.</p>
            <p>W obu modelach możesz skorzystać z rabatu przy ponownym wynajmie tego samego mieszkania. Szczegółowe warunki określa umowa pośrednictwa.</p>
          </div>
        </section>

        <section className="space-y-6">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">FAQ</p>
            <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">Najczęstsze pytania</h2>
          </div>
          <FaqAccordion items={faqItems} />
        </section>

        <section id="contact" className="relative scroll-mt-28 overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0A2530] p-8 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-10">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(46,107,127,0.18),transparent_60%)]" />
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Następny krok</p>
              <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">Chcesz wynająć mieszkanie bezpiecznie i bez dodatkowego obciążenia?</h2>
              <p className="mt-4 max-w-md leading-relaxed text-neutral-200/90">
                Zostaw zgłoszenie — doprecyzujemy szczegóły mieszkania, ocenimy sytuację i zaproponujemy jasny plan działania.
              </p>
              <p className="mt-5 text-xs leading-relaxed text-neutral-200/70">
                Wysyłając formularz, potwierdzasz, że zapoznałeś(-aś) się z{" "}
                <a href="/pl/polityka-prywatnosci" className="underline underline-offset-2 hover:text-white">
                  polityką prywatności
                </a>
                .
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <HomeContactForm
                language="pl"
                sourcePage="/pl/landlord"
                namePlaceholder="Imię"
                phonePlaceholder="Telefon"
                messagePlaceholder="Krótko opisz zadanie: wynajem mieszkania, dzielnica, termin"
                submitLabel="Wyślij"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooterPl />
    </div>
  );
}
