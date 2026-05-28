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

function ServiceCard({
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
  index?: number;
}) {
  return (
    <article className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:p-8">
      {typeof index === "number" && (
        <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-300/20 text-sm font-semibold text-amber-100 ring-1 ring-amber-200/30">
          {index + 1}
        </div>
      )}
      <h2 className="font-serif text-3xl text-white">{title}</h2>
      <p className="mt-4 max-w-4xl text-neutral-200/90">{text}</p>
      {intro && <p className="mt-5 font-semibold text-amber-100">{intro}</p>}
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {points.map((point) => (
          <li key={point} className="rounded-xl bg-[#0A2530] px-4 py-3 text-sm leading-relaxed text-neutral-100 ring-1 ring-white/10">
            • {point}
          </li>
        ))}
      </ul>
      <p className="mt-6 max-w-4xl text-neutral-200/90">{closing}</p>
    </article>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0C2D3A] text-neutral-100">
      <SiteHeaderPlLandlord />
      <main className="mx-auto max-w-6xl space-y-16 px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0C2D3A] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,193,7,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_35%)]" />
          <div className="max-w-4xl space-y-6">
            <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Wsparcie dla właścicieli w Warszawie</p>
            <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
              Wynajmij mieszkanie bezpiecznie i bez zbędnego chaosu
            </h1>
            <p className="text-lg text-neutral-200/90">
              SERPAKOWSKI Nieruchomości pomaga właścicielom w Warszawie przejść przez cały proces wynajmu: od wyceny mieszkania i przygotowania oferty po wybór najemcy, umowę i przekazanie kluczy.
            </p>
            <p className="text-base leading-relaxed text-neutral-200/85">
              Bierzemy na siebie nie tylko publikację ogłoszenia, ale również organizację całego procesu — tak, aby właściciel nie tracił czasu na przypadkowe zgłoszenia, powtarzające się pytania i ryzykowne decyzje.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                Zostaw zgłoszenie
              </a>
              <a href="#process" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10">
                Zobacz etapy pracy
              </a>
            </div>
          </div>
        </section>

        <section id="process" className="space-y-6 scroll-mt-28">
          {processSections.map((section, index) => (
            <ServiceCard key={section.title} {...section} index={index} />
          ))}
        </section>

        <section className="rounded-3xl bg-[#0A2530] p-8 text-center ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Dalsze wsparcie</p>
          <h2 className="mt-3 font-serif text-4xl text-white">Po wynajęciu mieszkania</h2>
        </section>

        <section className="space-y-6">
          {afterRentSections.map((section) => (
            <ServiceCard key={section.title} {...section} />
          ))}
        </section>

        <section id="contact" className="scroll-mt-28 rounded-3xl bg-gradient-to-r from-[#0F3A4D] to-[#0C2D3A] p-8 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-10">
          <h2 className="font-serif text-3xl text-white">Chcesz bezpiecznie wynająć mieszkanie?</h2>
          <p className="mt-4 max-w-3xl text-neutral-200/90">
            Zostaw zgłoszenie — doprecyzujemy szczegóły mieszkania, ocenimy sytuację i zaproponujemy jasny plan działania.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="mailto:kontakt@serpakowski.pl" className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
              Zostaw zgłoszenie
            </a>
            <a href="https://wa.me/48453053969" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10">
              Napisz na WhatsApp
            </a>
          </div>
          <div className="mt-6 space-y-1 text-neutral-200/90">
            <p>kontakt@serpakowski.pl</p>
            <p>+48 453 053 969</p>
          </div>
        </section>
      </main>
      <SiteFooterPl />
    </div>
  );
}
