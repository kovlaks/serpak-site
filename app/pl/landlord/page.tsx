import type { ReactNode } from "react";
import { createSeoMetadata, seoAlternates } from "../../seo";
import { SiteFooterPl } from "../../../components/layout/SiteFooterPl";
import HomeContactForm from "../../../components/common/HomeContactForm";
import { SiteHeaderPlLandlord } from "../../../components/layout/SiteHeaderPlLandlord";

export const metadata = createSeoMetadata({
  title: "Wynajem mieszkania właścicielom | SERPAKOWSKI Nieruchomości Warszawa",
  description: "Wsparcie dla właścicieli mieszkań w Warszawie: przygotowanie oferty, weryfikacja najemców, umowa najmu, protokół przekazania i bezpieczna obsługa wynajmu.",
  canonicalPath: "/pl/landlord",
  languages: seoAlternates.landlord,
  locale: "pl_PL",
});

const scopePoints = [
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
];

const valuationPoints = [
  "określić rynkową cenę najmu;",
  "porównać mieszkanie z podobnymi lokalami;",
  "zrozumieć mocne i słabsze strony mieszkania;",
  "przygotować rekomendacje przed prezentacjami;",
  "określić, co może zwiększyć cenę lub atrakcyjność oferty.",
];

const publicationPoints = [
  "materiały zdjęciowe i wideo;",
  "jasny opis mieszkania;",
  "akcenty na zaletach lokalu;",
  "rekomendacje dotyczące przygotowania mieszkania do prezentacji;",
  "ogłoszenie do publikacji.",
];

const candidatePoints = [
  "odpowiadamy na pytania kandydatów;",
  "organizujemy prezentacje;",
  "doprecyzowujemy podstawowe informacje;",
  "odrzucamy nieodpowiednie zgłoszenia;",
  "przedstawiamy właścicielowi kandydatów, którzy odpowiadają warunkom mieszkania.",
];

const verificationPoints = [
  "zebrać podstawowe informacje o kandydacie;",
  "sprawdzić dokumenty i podstawowe dane;",
  "przeanalizować zdolność płatniczą;",
  "skorzystać z Simple.rent lub innego narzędzia dostępnego w konkretnej sytuacji;",
  "doprecyzować warunki najmu przed podpisaniem umowy;",
  "przeprowadzić komunikację z najemcami zagranicznymi, jeśli jest to potrzebne.",
];

const contractPoints = [
  "przygotowaniu lub uzgodnieniu umowy najmu;",
  "warunkach dotyczących kaucji, płatności i opłat eksploatacyjnych;",
  "organizacji najmu okazjonalnego, jeśli taki format pasuje do sytuacji;",
  "koordynacji notariusza;",
  "przygotowaniu protokołu przekazania mieszkania;",
  "udokumentowaniu stanu mieszkania;",
  "przekazaniu kluczy.",
];

const reportPoints = [
  "po przygotowaniu mieszkania;",
  "po publikacji ogłoszenia;",
  "po pierwszych zgłoszeniach;",
  "po prezentacjach;",
  "po selekcji kandydatów;",
  "po wyborze najemcy;",
  "po podpisaniu umowy i przekazaniu mieszkania.",
];

const managementPoints = [
  "kontrolę wpływu płatności;",
  "komunikację z najemcą;",
  "koordynację drobnych napraw;",
  "okresowe przeglądy mieszkania;",
  "raporty dla właściciela;",
  "pomoc w sprawach bieżących;",
  "przypomnienia o ważnych terminach wynikających z umowy.",
];

const nextStepPoints = [
  "analizie sytuacji przed zakończeniem umowy;",
  "negocjacjach dotyczących przedłużenia;",
  "ponownym zawarciu umowy;",
  "przeglądzie ceny najmu;",
  "przygotowaniu mieszkania do kolejnego okresu;",
  "wcześniejszym poszukiwaniu nowego najemcy, jeśli obecny najemca nie przedłuża umowy.",
];

const faqItems = [
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
      "Koszt usługi wynosi 100% miesięcznego czynszu najmu.",
      "W tej kwocie mieści się organizacja procesu wynajmu mieszkania: ocena, przygotowanie oferty, publikacja ogłoszenia, komunikacja z kandydatami, prezentacje, wybór najemcy, pomoc przy weryfikacji, umowie i przekazaniu mieszkania.",
    ],
  },
  {
    question: "Kto płaci prowizję — właściciel czy najemca?",
    answer: [
      "Rekomendowany przez nas model to płatność za usługę po stronie właściciela. Wtedy mieszkanie może być oferowane najemcom bez osobnej prowizji agencyjnej.",
      "Taki format zwykle sprawia, że oferta jest bardziej atrakcyjna: najemca od początku widzi jasne warunki zamieszkania i nie mierzy się z dodatkową dużą płatnością przy podpisaniu umowy.",
    ],
  },
  {
    question: "Czy można podzielić prowizję 50/50?",
    answer: [
      "Tak, taki model jest możliwy. Prowizja może zostać podzielona między właściciela i najemcę.",
      "Warto jednak pamiętać, że nawet częściowa prowizja po stronie najemcy może wpłynąć na zainteresowanie mieszkaniem, szczególnie jeśli obok są podobne oferty bez prowizji agencyjnej po stronie najemcy.",
      "Dlatego wcześniej wyjaśniamy plusy i minusy takiego modelu i pomagamy wybrać wariant, który najlepiej pasuje do konkretnego mieszkania i sytuacji na rynku.",
    ],
  },
  {
    question: "Czy można zrobić tak, aby prowizję w całości zapłacił najemca?",
    answer: [
      "Tak, taki wariant jest możliwy, ale nie uważamy go za optymalny w każdej sytuacji.",
      "Jeśli najemca ma zapłacić osobną prowizję agencji, oferta może stać się mniej atrakcyjna w porównaniu z podobnymi mieszkaniami bez takiej opłaty. Może to zmniejszyć liczbę zgłoszeń albo wydłużyć czas poszukiwania najemcy.",
      "Dlatego rekomendujemy najpierw ocenić mieszkanie, konkurencję i popyt, a dopiero potem wybrać model płatności.",
    ],
  },
  {
    question: "Czy można odzyskać koszt prowizji przez czynsz?",
    answer: [
      "Tak, w niektórych przypadkach koszt usługi można uwzględnić w stawce najmu.",
      "Na przykład, jeśli prowizja wynosi równowartość jednego miesiąca najmu, można ją stopniowo odzyskać poprzez niewielkie podwyższenie ceny o około 8–8,5% w ciągu 12 miesięcy.",
      "Przed tym oceniamy mieszkanie i rynek, aby zrozumieć, jaką cenę można realnie zastosować bez ryzyka wydłużenia procesu wynajmu.",
    ],
  },
  {
    question: "Co dzieje się przy przedłużeniu umowy?",
    answer: [
      "Jeśli najemca przedłuży umowę, a cena zostanie utrzymana, dla najemcy nic się nie zmienia: nadal płaci ten sam czynsz.",
      "Dla właściciela oznacza to, że po pierwszym roku nadwyżka, która pomagała odzyskać koszt usługi, może stać się dodatkowym dochodem.",
    ],
  },
  {
    question: "Czy można podłączyć obsługę po wynajęciu mieszkania?",
    answer: [
      "Tak. Po podpisaniu umowy można omówić rozszerzoną obsługę: komunikację z najemcą, kontrolę płatności, drobne naprawy, raporty i przypomnienia dotyczące umowy.",
    ],
  },
];

function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
      {children}
    </a>
  );
}

function SecondaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="inline-flex min-h-12 items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10">
      {children}
    </a>
  );
}

function BulletList({ items, columns = true }: { items: string[]; columns?: boolean }) {
  return (
    <ul className={columns ? "mt-5 grid gap-3 sm:grid-cols-2" : "mt-5 space-y-3"}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 rounded-2xl bg-[#0A2530]/90 px-4 py-3 text-sm leading-relaxed text-neutral-100 ring-1 ring-white/10">
          <span className="mt-1 text-amber-300">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ContentSection({
  eyebrow,
  title,
  children,
  id,
  accent = false,
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  id?: string;
  accent?: boolean;
}) {
  return (
    <section id={id} className={`scroll-mt-28 rounded-[2rem] p-6 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:p-8 lg:p-10 ${accent ? "relative overflow-hidden bg-[#071F2A]" : "bg-white/[0.045]"}`}>
      {accent && <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(251,191,36,0.13),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.07),transparent_45%)]" />}
      <div className="relative">
        {eyebrow && <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">{eyebrow}</p>}
        <h2 className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl">{title}</h2>
        <div className="mt-5 space-y-4 text-sm leading-relaxed text-neutral-200/90 sm:text-base">{children}</div>
      </div>
    </section>
  );
}

export default function Page() {
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
                Wynajmij mieszkanie w Warszawie <span className="text-amber-300">bezpiecznie</span>, korzystnie i bez zbędnego chaosu
              </h1>
              <div className="max-w-3xl space-y-4 text-neutral-200/90">
                <p className="text-lg leading-relaxed">
                  SERPAKOWSKI Nieruchomości pomaga właścicielom wynająć mieszkanie: ocenić cenę, przygotować ofertę, znaleźć i sprawdzić najemcę, uzgodnić umowę i spokojnie przekazać lokal.
                </p>
                <p className="text-base leading-relaxed text-neutral-200/85">
                  Bierzemy na siebie organizację procesu, aby właściciel nie tracił czasu na przypadkowe zgłoszenia, powtarzające się pytania, prezentacje, dokumenty i ryzykowne decyzje.
                </p>
              </div>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                <PrimaryButton href="#wycena">Dowiedz się, za ile można wynająć mieszkanie</PrimaryButton>
                <SecondaryButton href="#contact">Porozmawiajmy o wynajmie mieszkania</SecondaryButton>
              </div>
            </div>

            <div className="relative rounded-3xl bg-white/[0.055] p-5 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.28)] sm:p-6">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-300/10 blur-2xl" />
              <p className="text-xs uppercase tracking-[0.18em] text-amber-200/75">Proces pod kontrolą</p>
              <div className="mt-6 space-y-4">
                {["Ocena ceny", "Oferta", "Selekcja", "Umowa", "Przekazanie"].map((item, index) => (
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

        <ContentSection eyebrow="Dlaczego proces ma znaczenie" title="Wynajem mieszkania to nie tylko publikacja ogłoszenia">
          <p>
            Na pierwszy rzut oka wynajem wygląda prosto: zrobić zdjęcia, wystawić ogłoszenie i wybrać najemcę. W praktyce właściciel często mierzy się z chaosem: dziesiątkami wiadomości, przekładaniem prezentacji, nieodpowiednimi kandydatami, negocjacjami, pytaniami o dokumenty i ryzykiem podjęcia decyzji zbyt szybko.
          </p>
          <p>
            Naszym zadaniem jest przeprowadzić proces spokojnie i etapami: od oceny mieszkania po podpisanie umowy i przekazanie kluczy.
          </p>
        </ContentSection>

        <ContentSection eyebrow="Zakres pracy" title="Co bierzemy na siebie" id="plan" accent>
          <p>Organizujemy cały proces wynajmu mieszkania:</p>
          <BulletList items={scopePoints} />
          <p>
            Właściciel zachowuje kontrolę i podejmuje ostateczną decyzję, ale nie zajmuje się wszystkimi szczegółami ręcznie.
          </p>
          <div className="pt-2">
            <PrimaryButton href="#contact">Otrzymaj plan wynajmu mieszkania</PrimaryButton>
          </div>
        </ContentSection>

        <ContentSection eyebrow="Wycena i rekomendacje" title="Ocenimy mieszkanie i pomożemy nie wynająć poniżej rynku" id="wycena">
          <p>
            Przed publikacją warto zrozumieć, jak mieszkanie wygląda na tle innych ofert w Warszawie: jaka cena jest realistyczna, co może utrudniać wynajem i jakie ulepszenia mogą zwiększyć zainteresowanie najemców.
          </p>
          <p>Pomagamy:</p>
          <BulletList items={valuationPoints} />
          <p>
            Możemy również zaproponować rozwiązania, które mogą pomóc podnieść cenę najmu — zarówno przy pierwszym wynajmie, jak i przy kolejnym okresie najmu, szczególnie jeśli najemca będzie chciał przedłużyć umowę. Zawsze zależy to od konkretnego mieszkania i aktualnej sytuacji rynkowej.
          </p>
          <div className="pt-2">
            <PrimaryButton href="#contact">Oceń mieszkanie</PrimaryButton>
          </div>
        </ContentSection>

        <div className="grid gap-5 lg:grid-cols-2">
          <ContentSection eyebrow="Oferta" title="Przygotujemy mieszkanie i ogłoszenie do publikacji">
            <p>Dobre ogłoszenie powinno nie tylko pokazać mieszkanie, ale również właściwie wyjaśnić jego wartość dla najemcy.</p>
            <p>Pomagamy przygotować:</p>
            <BulletList items={publicationPoints} columns={false} />
            <p>Jeśli będzie to potrzebne, możemy dodatkowo zorganizować sprzątanie, drobne naprawy lub przygotowanie mieszkania do zdjęć i prezentacji.</p>
          </ContentSection>

          <ContentSection eyebrow="Kandydaci" title="Znajdziemy i wybierzemy odpowiednich kandydatów">
            <p>Po publikacji ogłoszenia właściciel często otrzymuje wiele wiadomości, ale nie każde zgłoszenie pasuje do warunków mieszkania.</p>
            <p>Bierzemy na siebie wstępną komunikację:</p>
            <BulletList items={candidatePoints} columns={false} />
            <p>Naszym celem nie jest tylko znalezienie osoby, która chce wynająć mieszkanie, ale pomoc w wyborze najemcy, z którym najem będzie zrozumiały i bezpieczny.</p>
          </ContentSection>
        </div>

        <ContentSection eyebrow="Weryfikacja" title="Pomożemy sprawdzić najemcę przed umową" accent>
          <p>
            Pierwsze wrażenie nie wystarczy. Przed podpisaniem umowy warto zrozumieć, kto będzie mieszkał w lokalu, czy kandydat odpowiada warunkom właściciela i czy jest gotowy do realizacji zobowiązań finansowych.
          </p>
          <p>Pomagamy:</p>
          <BulletList items={verificationPoints} />
          <p>Takie podejście zmniejsza ryzyko nieporozumień, opóźnień w płatnościach i problemów po zamieszkaniu.</p>
          <div className="pt-2">
            <PrimaryButton href="#contact">Porozmawiajmy o bezpiecznym wynajmie</PrimaryButton>
          </div>
        </ContentSection>

        <ContentSection eyebrow="Umowa i przekazanie" title="Wesprzemy umowę, najem okazjonalny i przekazanie mieszkania">
          <p>Kiedy najemca zostanie wybrany, ważne jest prawidłowe ustalenie warunków najmu i udokumentowanie stanu mieszkania.</p>
          <p>Pomagamy przy:</p>
          <BulletList items={contractPoints} />
          <p>
            Właściciel otrzymuje nie tylko najemcę, ale też starannie przeprowadzony proces wynajmu mieszkania z jasnymi warunkami i udokumentowanymi ustaleniami.
          </p>
        </ContentSection>

        <ContentSection eyebrow="Raportowanie" title="Zachowujesz kontrolę na każdym etapie" accent>
          <p>Nawet jeśli właściciel nie uczestniczy w każdej rozmowie, ważne jest, aby wiedział, co dzieje się z mieszkaniem.</p>
          <p>Dlatego możemy przekazywać krótkie raporty po kluczowych etapach:</p>
          <BulletList items={reportPoints} />
          <p>
            Widzisz, jak przebiega proces, jacy kandydaci się pojawiają, jakie pytania powstają i dlaczego rekomendujemy konkretny kolejny krok.
          </p>
        </ContentSection>

        <section className="space-y-7">
          <div className="rounded-[2rem] bg-gradient-to-r from-[#0A2530] to-[#102F3D] p-6 text-center ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.28)] sm:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Po wynajęciu mieszkania</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-white sm:text-5xl">Można podłączyć dalszą obsługę najmu</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <article className="flex h-full flex-col rounded-3xl bg-[#0A2530] p-6 ring-1 ring-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.24)] sm:p-7">
              <div className="mb-5 inline-flex w-fit rounded-full bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-100 ring-1 ring-amber-200/20">
                Opcjonalna usługa rozszerzona
              </div>
              <h3 className="font-serif text-2xl leading-tight text-white sm:text-3xl">Dalsza obsługa po podpisaniu umowy</h3>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-neutral-200/90 sm:text-base">
                <p>Po podpisaniu umowy właściciel może potrzebować pomocy nie tylko w znalezieniu najemcy, ale również w bieżącej komunikacji.</p>
                <p>W rozszerzonym formacie można omówić:</p>
              </div>
              <BulletList items={managementPoints} columns={false} />
              <p className="mt-5 border-t border-white/10 pt-5 text-sm leading-relaxed text-neutral-200/85">
                Jest to szczególnie przydatne dla właścicieli, którzy nie chcą samodzielnie zajmować się stałą komunikacją z najemcą.
              </p>
              <div className="mt-5">
                <PrimaryButton href="#contact">Zapytaj o obsługę najmu</PrimaryButton>
              </div>
            </article>

            <article className="flex h-full flex-col rounded-3xl bg-white/[0.055] p-6 ring-1 ring-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.24)] sm:p-7">
              <div className="mb-5 inline-flex w-fit rounded-full bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-100 ring-1 ring-amber-200/20">
                Przed końcem umowy
              </div>
              <h3 className="font-serif text-2xl leading-tight text-white sm:text-3xl">Przygotujemy kolejny krok przed zakończeniem umowy</h3>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-neutral-200/90 sm:text-base">
                <p>Dobry najem nie powinien kończyć się nagle w ostatnim dniu umowy. Lepiej wcześniej wiedzieć, czy będzie przedłużenie, czy trzeba zmienić cenę i kiedy zacząć szukać kolejnego najemcy.</p>
                <p>Możemy pomóc w:</p>
              </div>
              <BulletList items={nextStepPoints} columns={false} />
              <p className="mt-5 border-t border-white/10 pt-5 text-sm leading-relaxed text-neutral-200/85">
                Celem jest ograniczenie ryzyka przestoju mieszkania i wcześniejsze przygotowanie kolejnego kroku.
              </p>
            </article>
          </div>
        </section>

        <ContentSection eyebrow="Koszt i model płatności" title="Koszt i model płatności" id="koszt" accent>
          <p className="text-lg font-semibold text-amber-100">Koszt usługi wynosi 100% miesięcznego czynszu najmu.</p>
          <p>
            Rekomendowany przez nas model to płatność za usługę po stronie właściciela. W takim przypadku mieszkanie może być oferowane najemcom bez osobnej prowizji agencyjnej, co sprawia, że warunki są bardziej zrozumiałe i atrakcyjne na rynku.
          </p>
          <p>
            Możliwe są również inne warianty: podział prowizji 50/50 między właściciela i najemcę albo płatność po stronie najemcy. Omawiamy to indywidualnie i z wyprzedzeniem wyjaśniamy, jak wybrany model może wpłynąć na zainteresowanie mieszkaniem.
          </p>
          <p>
            Aby prowizja nie była dla właściciela bezpośrednią stratą, możemy pomóc uwzględnić koszt usługi w stawce najmu. Jeśli mieszkanie i rynek na to pozwalają, niewielkie podwyższenie ceny o około 8–8,5% może zwrócić koszt usługi w ciągu 12 miesięcy.
          </p>
          <p>
            Jeśli najemca przedłuży umowę, a cena zostanie utrzymana, dla najemcy nic się nie zmienia: nadal płaci ten sam czynsz. Dla właściciela może to oznaczać dodatkowy dochód po pierwszym roku najmu.
          </p>
          <div className="pt-2">
            <PrimaryButton href="#contact">Oblicz cenę najmu</PrimaryButton>
          </div>
        </ContentSection>

        <section className="space-y-7">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Najczęstsze pytania</p>
            <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl">Najczęstsze pytania</h2>
          </div>
          <div className="grid gap-4">
            {faqItems.map((item) => (
              <article key={item.question} className="rounded-3xl bg-white/[0.055] p-6 ring-1 ring-white/10 shadow-[0_14px_42px_rgba(0,0,0,0.22)] sm:p-7">
                <h3 className="text-xl font-semibold text-white">{item.question}</h3>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-200/85 sm:text-base">
                  {item.answer.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#123F51] via-[#0C2D3A] to-[#061B24] p-6 text-center shadow-[0_24px_80px_rgba(0,0,0,0.38)] ring-1 ring-white/10 sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(251,191,36,0.14),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]" />
          <div className="relative mx-auto max-w-3xl space-y-5">
            <h2 className="font-serif text-3xl leading-tight text-white sm:text-5xl">Chcesz wynająć mieszkanie bezpiecznie i bez dodatkowego obciążenia?</h2>
            <p className="text-base leading-relaxed text-neutral-200/90 sm:text-lg">
              Zostaw zgłoszenie — doprecyzujemy szczegóły mieszkania, ocenimy sytuację i zaproponujemy jasny plan działania.
            </p>
            <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <PrimaryButton href="#contact">Zostaw zgłoszenie</PrimaryButton>
              <SecondaryButton href="#contact">Porozmawiajmy o wynajmie mieszkania</SecondaryButton>
            </div>
          </div>
        </section>

        <section id="contact" className="relative scroll-mt-28 overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0A2530] p-8 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-10">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(46,107,127,0.18),transparent_60%)]" />
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-serif text-3xl text-white sm:text-4xl">Zostaw swoje dane</h2>
              <p className="mt-3 max-w-md text-neutral-200/90">Skontaktujemy się z Tobą tak szybko, jak to możliwe.</p>
              <p className="mt-4 text-xs leading-relaxed text-neutral-200/70">
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
                messagePlaceholder="Krótko opisz sprawę: wynajem, dzielnica, budżet, termin"
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
