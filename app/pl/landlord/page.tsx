import { createSeoMetadata, seoAlternates } from "../../seo";
import { SiteFooterPl } from "../../../components/layout/SiteFooterPl";
import { SiteHeaderPlLandlord } from "../../../components/layout/SiteHeaderPlLandlord";

export const metadata = createSeoMetadata({
  title: "Wynajem mieszkania właścicielom | SERPAKOWSKI Nieruchomości Warszawa",
  description: "Wsparcie dla właścicieli mieszkań w Warszawie: przygotowanie oferty, weryfikacja najemców, umowa najmu, protokół przekazania i bezpieczna obsługa wynajmu.",
  canonicalPath: "/pl/landlord",
  languages: seoAlternates.landlord,
  locale: "pl_PL",
});

const processSections = [
  {
    title: "Przygotujemy mieszkanie do wynajmu",
    text: "Przed publikacją ogłoszenia warto zrozumieć, jak mieszkanie wygląda na tle rynku i co można poprawić przed rozpoczęciem promocji oferty.",
    intro: "Możemy pomóc:",
    points: [
      "ocenić rynkową cenę najmu;",
      "porównać mieszkanie z podobnymi ofertami;",
      "przygotować rekomendacje przed prezentacjami;",
      "określić, co może zwiększyć atrakcyjność mieszkania;",
      "przygotować materiały foto i wideo;",
      "stworzyć jasny opis oferty;",
      "przygotować ogłoszenie do publikacji.",
    ],
    closing:
      "Możemy również zaproponować rozwiązania, które pomagają podnieść cenę najmu — zarówno przy pierwszym wynajmie, jak i przy kolejnym okresie najmu, szczególnie jeśli najemca będzie chciał przedłużyć umowę.",
  },
  {
    title: "Znajdziemy i wybierzemy odpowiednich kandydatów",
    text: "Po publikacji ogłoszenia właściciel często mierzy się z dużą liczbą wiadomości, telefonów i nieodpowiednich zgłoszeń.",
    intro: "Możemy wziąć to na siebie:",
    points: [
      "opublikować ogłoszenie;",
      "prowadzić komunikację z kandydatami;",
      "odpowiadać na pytania;",
      "organizować prezentacje mieszkania;",
      "zbierać podstawowe informacje o kandydatach;",
      "odrzucać nieodpowiednie zgłoszenia;",
      "przedstawiać właścicielowi tylko tych najemców, którzy pasują do warunków mieszkania.",
    ],
    closing:
      "Naszym celem nie jest tylko znalezienie osoby, która chce wynająć mieszkanie, ale pomoc w wyborze najemcy, z którym najem będzie zrozumiały i bezpieczny.",
  },
  {
    title: "Pomożemy sprawdzić najemcę",
    text: "Pierwsze wrażenie nie wystarczy. Przed podpisaniem umowy warto zrozumieć, kto będzie mieszkał w lokalu i czy kandydat odpowiada warunkom właściciela.",
    points: [
      "sprawdzeniu najemcy przez Simple.rent lub inne dostępne narzędzie;",
      "analizie zdolności płatniczej kandydata;",
      "weryfikacji dokumentów i podstawowych informacji;",
      "doprecyzowaniu warunków najmu przed podpisaniem umowy;",
      "komunikacji z najemcami zagranicznymi, jeśli jest to potrzebne.",
    ],
    closing:
      "Pomaga to ograniczyć ryzyko nieporozumień, opóźnień w płatnościach i problemów po zamieszkaniu.",
  },
  {
    title: "Wesprzemy umowę i przekazanie mieszkania",
    text: "Kiedy najemca zostanie wybrany, ważne jest prawidłowe ustalenie warunków najmu i udokumentowanie stanu mieszkania.",
    points: [
      "przygotowaniu lub uzgodnieniu umowy najmu;",
      "wsparciu przy najmie okazjonalnym;",
      "koordynacji notariusza;",
      "przygotowaniu protokołu przekazania mieszkania;",
      "udokumentowaniu stanu mieszkania;",
      "przekazaniu kluczy;",
      "uzgodnieniu warunków dotyczących kaucji, płatności i opłat eksploatacyjnych.",
    ],
    closing:
      "Dzięki temu właściciel otrzymuje nie tylko najemcę, ale też jasny i starannie przeprowadzony proces wynajmu mieszkania.",
  },
  {
    title: "Podłączymy dodatkowe usługi, jeśli będą potrzebne",
    text: "W zależności od stanu mieszkania i celów właściciela możemy pomóc zorganizować dodatkowe elementy przygotowania.",
    points: [
      "sprzątanie;",
      "drobne naprawy;",
      "przygotowanie mieszkania do zdjęć i prezentacji;",
      "ubezpieczenie najemcy lub mieszkania;",
      "dodatkowe materiały do ogłoszenia;",
      "konsultację dotyczącą legalizacji dochodu z najmu.",
    ],
    closing:
      "Te usługi nie zawsze są konieczne, ale w niektórych przypadkach pomagają szybciej wynająć mieszkanie, zwiększyć jego atrakcyjność lub ograniczyć ryzyka.",
  },
  {
    title: "Informujemy właściciela o przebiegu procesu",
    text: "Dla właściciela ważne jest, aby wiedzieć, co dzieje się z mieszkaniem, nawet jeśli nie uczestniczy w każdej rozmowie.",
    intro: "Dlatego możemy przekazywać krótkie raporty po kluczowych etapach:",
    points: [
      "po przygotowaniu mieszkania;",
      "po publikacji ogłoszenia;",
      "po pierwszych zgłoszeniach;",
      "po prezentacjach;",
      "po selekcji kandydatów;",
      "po wyborze najemcy;",
      "po podpisaniu umowy i przekazaniu mieszkania.",
    ],
    closing: "Daje to większą kontrolę i mniej chaosu w procesie wynajmu.",
  },
];

const afterRentSections = [
  {
    title: "Możemy omówić dalszą obsługę najmu",
    text: "Po podpisaniu umowy właściciel może potrzebować pomocy nie tylko w znalezieniu najemcy, ale również w bieżącej komunikacji.",
    intro: "W rozszerzonym formacie możemy omówić:",
    points: [
      "kontrolę wpływu płatności;",
      "komunikację z najemcą;",
      "koordynację drobnych napraw;",
      "okresowe przeglądy mieszkania;",
      "raporty dla właściciela;",
      "pomoc w sprawach bieżących;",
      "przypomnienia o ważnych terminach wynikających z umowy.",
    ],
    closing:
      "Jest to szczególnie przydatne dla właścicieli, którzy nie chcą samodzielnie zajmować się stałą komunikacją z najemcą.",
  },
  {
    title: "Pomożemy wcześniej przygotować się do zakończenia umowy",
    text: "Dobry najem nie kończy się ostatniego dnia umowy. Lepiej wcześniej wiedzieć, czy będzie przedłużenie, czy trzeba zmienić cenę i kiedy rozpocząć poszukiwanie kolejnego najemcy.",
    points: [
      "analizie sytuacji przed zakończeniem umowy;",
      "negocjacjach dotyczących przedłużenia;",
      "ponownym zawarciu umowy;",
      "przeglądzie ceny najmu;",
      "przygotowaniu mieszkania do kolejnego okresu;",
      "wcześniejszym poszukiwaniu nowego najemcy, jeśli obecny najemca nie przedłuża umowy.",
    ],
    closing:
      "Celem jest ograniczenie ryzyka przestoju mieszkania i wcześniejsze przygotowanie kolejnego kroku.",
  },
];

const valueCards = [
  {
    title: "Mniej chaosu",
    description: "Porządkujemy zgłoszenia, pytania i prezentacje, aby właściciel widział konkretny plan zamiast przypadkowych rozmów.",
  },
  {
    title: "Bezpieczniejszy wybór najemcy",
    description: "Pomagamy zebrać informacje, sprawdzić kandydata i spokojnie porównać zgłoszenia przed decyzją.",
  },
  {
    title: "Jasny proces od oferty do przekazania",
    description: "Każdy etap — od przygotowania ogłoszenia po protokół i klucze — ma swoje miejsce i kolejność.",
  },
];

function ProcessCard({
  title,
  text,
  intro,
  points,
  closing,
  index,
}: {
  title: string;
  text: string;
  intro?: string;
  points: string[];
  closing: string;
  index: number;
}) {
  return (
    <article className="group relative overflow-hidden rounded-3xl bg-white/[0.055] p-6 ring-1 ring-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:ring-amber-200/30 sm:p-7">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/50 to-transparent opacity-70" />
      <div className="flex flex-col gap-5 md:flex-row md:items-start">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-300/15 text-sm font-semibold text-amber-100 ring-1 ring-amber-200/30">
          {String(index + 1).padStart(2, "0")}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs uppercase tracking-[0.18em] text-amber-200/75">Etap {index + 1}</p>
          <h3 className="mt-2 font-serif text-2xl leading-tight text-white sm:text-3xl">{title}</h3>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-200/90 sm:text-base">{text}</p>
          {intro && <p className="mt-5 text-sm font-semibold text-amber-100">{intro}</p>}
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex gap-3 rounded-2xl bg-[#0A2530]/90 px-4 py-3 text-sm leading-relaxed text-neutral-100 ring-1 ring-white/10">
                <span className="mt-1 text-amber-300">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-neutral-200/85 sm:text-base">{closing}</p>
        </div>
      </div>
    </article>
  );
}

function SupportCard({
  title,
  text,
  intro,
  points,
  closing,
}: {
  title: string;
  text: string;
  intro?: string;
  points: string[];
  closing: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-3xl bg-[#0A2530] p-6 ring-1 ring-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.24)] sm:p-7">
      <div className="mb-5 inline-flex w-fit rounded-full bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-100 ring-1 ring-amber-200/20">
        Opcjonalnie
      </div>
      <h3 className="font-serif text-2xl leading-tight text-white sm:text-3xl">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-neutral-200/90 sm:text-base">{text}</p>
      {intro && <p className="mt-5 text-sm font-semibold text-amber-100">{intro}</p>}
      <ul className="mt-4 space-y-3">
        {points.map((point) => (
          <li key={point} className="flex gap-3 text-sm leading-relaxed text-neutral-100/95">
            <span className="mt-1 text-amber-300">✓</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <p className="mt-5 border-t border-white/10 pt-5 text-sm leading-relaxed text-neutral-200/85">{closing}</p>
    </article>
  );
}

export default function Page() {
  const additionalServices = processSections[4];
  const ownerUpdates = processSections[5];
  const coreProcessSections = processSections.slice(0, 4);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0C2D3A] text-neutral-100">
      <SiteHeaderPlLandlord />
      <main className="mx-auto max-w-6xl space-y-16 px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#123F51] via-[#0C2D3A] to-[#061B24] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.38)] ring-1 ring-white/10 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.17),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.09),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="max-w-4xl space-y-6">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200/80">Wsparcie dla właścicieli w Warszawie</p>
              <h1 className="font-serif text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                Wynajmij mieszkanie <span className="text-amber-300">bezpiecznie</span> i bez zbędnego chaosu
              </h1>
              <div className="max-w-3xl space-y-4 text-neutral-200/90">
                <p className="text-lg leading-relaxed">
                  SERPAKOWSKI Nieruchomości pomaga właścicielom w Warszawie przejść przez cały proces wynajmu: od wyceny mieszkania i przygotowania oferty po wybór najemcy, umowę i przekazanie kluczy.
                </p>
                <p className="text-base leading-relaxed text-neutral-200/85">
                  Bierzemy na siebie nie tylko publikację ogłoszenia, ale również organizację całego procesu — tak, aby właściciel nie tracił czasu na przypadkowe zgłoszenia, powtarzające się pytania i ryzykowne decyzje.
                </p>
              </div>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                <a href="#contact" className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                  Zostaw zgłoszenie
                </a>
                <a href="#process" className="inline-flex min-h-12 items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10">
                  Zobacz etapy pracy
                </a>
              </div>
            </div>

            <div className="relative rounded-3xl bg-white/[0.055] p-5 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.28)] sm:p-6">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-300/10 blur-2xl" />
              <p className="text-xs uppercase tracking-[0.18em] text-amber-200/75">Kontrola procesu</p>
              <div className="mt-6 space-y-4">
                {["Oferta", "Selekcja", "Umowa", "Przekazanie"].map((item, index) => (
                  <div key={item} className="flex items-center gap-4 rounded-2xl bg-[#0A2530]/85 px-4 py-4 ring-1 ring-white/10">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-300/15 text-xs font-semibold text-amber-100 ring-1 ring-amber-200/25">
                      {index + 1}
                    </span>
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Najważniejsze korzyści" className="grid gap-4 md:grid-cols-3">
          {valueCards.map((card) => (
            <article key={card.title} className="rounded-3xl bg-white/[0.055] p-5 ring-1 ring-white/10 shadow-[0_14px_42px_rgba(0,0,0,0.22)]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-300/15 text-amber-200 ring-1 ring-amber-200/25">✦</div>
              <h2 className="text-xl font-semibold text-white">{card.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-200/80">{card.description}</p>
            </article>
          ))}
        </section>

        <section id="process" className="scroll-mt-28 space-y-8">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Etapy pracy</p>
            <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl">Proces wynajmu krok po kroku</h2>
          </div>

          <div className="space-y-5">
            {coreProcessSections.map((section, index) => (
              <ProcessCard key={section.title} {...section} index={index} />
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] bg-white/[0.045] p-6 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300/15 text-sm font-semibold text-amber-100 ring-1 ring-amber-200/30">05</div>
              <p className="text-xs uppercase tracking-[0.18em] text-amber-200/75">Etap 5</p>
              <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl">{additionalServices.title}</h2>
              <p className="text-sm leading-relaxed text-neutral-200/90 sm:text-base">{additionalServices.text}</p>
              <p className="text-sm leading-relaxed text-neutral-200/80">{additionalServices.closing}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {additionalServices.points.map((point) => (
                <span key={point} className="rounded-full bg-[#0A2530] px-4 py-2 text-sm leading-relaxed text-neutral-100 ring-1 ring-white/10">
                  {point}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[2rem] bg-[#071F2A] p-6 ring-1 ring-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.32)] sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(251,191,36,0.13),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.07),transparent_45%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300/15 text-sm font-semibold text-amber-100 ring-1 ring-amber-200/30">06</div>
              <p className="text-xs uppercase tracking-[0.18em] text-amber-200/75">Etap 6 · raportowanie</p>
              <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl">{ownerUpdates.title}</h2>
              <p className="text-sm leading-relaxed text-neutral-200/90 sm:text-base">{ownerUpdates.text}</p>
              {ownerUpdates.intro && <p className="text-sm font-semibold text-amber-100">{ownerUpdates.intro}</p>}
              <p className="text-sm leading-relaxed text-neutral-200/80">{ownerUpdates.closing}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {ownerUpdates.points.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl bg-white/[0.055] px-4 py-3 text-sm leading-relaxed text-neutral-100 ring-1 ring-white/10">
                  <span className="mt-1 text-amber-300">✓</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-7">
          <div className="rounded-[2rem] bg-gradient-to-r from-[#0A2530] to-[#102F3D] p-6 text-center ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.28)] sm:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Dalsze wsparcie · usługa rozszerzona</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-white sm:text-5xl">Po wynajęciu mieszkania</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {afterRentSections.map((section) => (
              <SupportCard key={section.title} {...section} />
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#123F51] via-[#0C2D3A] to-[#061B24] p-6 ring-1 ring-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.36)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Kontakt</p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl">Chcesz bezpiecznie wynająć mieszkanie?</h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-200/90">
                Zostaw zgłoszenie — doprecyzujemy szczegóły mieszkania, ocenimy sytuację i zaproponujemy jasny plan działania.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href="mailto:kontakt@serpakowski.pl" className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                Zostaw zgłoszenie
              </a>
              <a href="https://wa.me/48453053969" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10">
                Napisz na WhatsApp
              </a>
            </div>
          </div>
          <div className="mt-8 grid gap-3 border-t border-white/10 pt-6 text-sm text-neutral-200/90 sm:grid-cols-2">
            <p>kontakt@serpakowski.pl</p>
            <p>+48 453 053 969</p>
          </div>
        </section>
      </main>
      <SiteFooterPl />
    </div>
  );
}
