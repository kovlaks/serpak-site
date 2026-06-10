import type { Metadata } from "next";
import { hiddenChecklistRobots } from "../../../_checklist/metadata";

export const metadata: Metadata = {
  title: "Checklista właściciela przed wynajmem mieszkania w Warszawie",
  description:
    "Polska checklista dla właścicieli mieszkań w Warszawie: cena, przygotowanie lokalu, selekcja najemcy, dokumenty, kaucja, protokół i przekazanie mieszkania.",
  robots: hiddenChecklistRobots,
};

type ChecklistSection = {
  number: string;
  title: string;
  checks: string[];
  risk: string[];
  help: string[];
};

type ComparisonRow = {
  area: string;
  alone: string;
  withAgency: string;
};

const audienceItems = [
  "masz mieszkanie w Warszawie lub okolicach;",
  "chcesz wynająć je bez chaosu i przypadkowych decyzji;",
  "nie chcesz tracić czasu na dziesiątki wiadomości od nieodpowiednich kandydatów;",
  "zależy Ci na dobrym, stabilnym najemcy;",
  "chcesz zabezpieczyć mieszkanie, dokumenty, płatności i kaucję;",
  "mieszkasz poza Warszawą albo za granicą;",
  "chcesz wiedzieć, co może pójść nie tak, zanim przekażesz komuś klucze.",
];

const checklistSections: ChecklistSection[] = [
  {
    number: "01",
    title: "Cena i strategia najmu",
    checks: [
      "Czy znasz realną cenę rynkową mieszkania?",
      "Czy porównałeś swoje mieszkanie z podobnymi ofertami w okolicy?",
      "Czy wiesz, jaka cena może wydłużyć czas szukania najemcy?",
      "Czy wiesz, co można poprawić, żeby zwiększyć atrakcyjność mieszkania?",
      "Czy wiesz, ile kosztuje Cię każdy miesiąc pustostanu?",
    ],
    risk: [
      "Zbyt niska cena oznacza utracony dochód.",
      "Zbyt wysoka cena może sprawić, że mieszkanie będzie stało puste przez kilka tygodni.",
    ],
    help: [
      "Analizujemy rynek, porównujemy podobne mieszkania i rekomendujemy cenę, która ma sens nie tylko na papierze, ale też w realnym procesie wynajmu. Zwracamy uwagę na elementy, które mogą zwiększyć atrakcyjność mieszkania i pomóc uzyskać lepszy czynsz.",
    ],
  },
  {
    number: "02",
    title: "Profil odpowiedniego najemcy",
    checks: [
      "Kto będzie najlepszym najemcą dla tego mieszkania?",
      "Czy mieszkanie lepiej pasuje do jednej osoby, pary, rodziny, ekspata czy najemcy korporacyjnego?",
      "Czy potencjalny najemca pasuje do standardu mieszkania i zasad budynku?",
      "Czy zależy Ci bardziej na szybkim wynajmie, czy na spokojnym i stabilnym najmie?",
      "Czy nie wybierasz kandydata tylko dlatego, że chce szybko podpisać umowę?",
    ],
    risk: [
      "Nie każdy „dobry kandydat” jest dobrym kandydatem dla konkretnego mieszkania. Nietrafiony wybór może później oznaczać konflikty, opóźnienia w płatnościach albo problemy przy wyprowadzce.",
    ],
    help: [
      "Pomagamy określić, jaki profil najemcy będzie najbezpieczniejszy i najbardziej logiczny dla danego mieszkania. Nie skupiamy się wyłącznie na tym, kto zgłosił się pierwszy, ale na tym, kto realnie pasuje do lokalu, warunków i oczekiwań właściciela.",
    ],
  },
  {
    number: "03",
    title: "Przygotowanie mieszkania do wynajmu",
    checks: [
      "Czy mieszkanie jest gotowe do prezentacji?",
      "Czy usunięto wizualny chaos?",
      "Czy drobne usterki zostały naprawione przed pokazami?",
      "Czy światło, meble, tekstylia i układ wnętrza pomagają pokazać wartość mieszkania?",
      "Czy są małe zmiany, które mogą zwiększyć czynsz lub skrócić czas szukania najemcy?",
    ],
    risk: [
      "Mieszkanie może być dobre, ale źle przygotowane. Wtedy kandydaci widzą mniej wartości, mocniej negocjują cenę albo wybierają konkurencyjne oferty.",
    ],
    help: [
      "Wskazujemy, co warto uporządkować przed publikacją oferty. Pomagamy przygotować mieszkanie tak, żeby wyglądało atrakcyjnie, ale bez niepotrzebnych i kosztownych zmian.",
    ],
  },
  {
    number: "04",
    title: "Zdjęcia, wideo i prezentacja oferty",
    checks: [
      "Czy zdjęcia pokazują mieszkanie jasno i profesjonalnie?",
      "Czy oferta pokazuje najważniejsze atuty lokalu?",
      "Czy opis jest konkretny, przejrzysty i zrozumiały?",
      "Czy ogłoszenie wyróżnia się na tle podobnych ofert?",
      "Czy kandydat od razu rozumie, dla kogo jest to mieszkanie?",
    ],
    risk: [
      "Słaba prezentacja może obniżyć zainteresowanie, przyciągnąć przypadkowych kandydatów i utrudnić uzyskanie dobrej ceny.",
    ],
    help: [
      "Pomagamy przygotować ofertę, która pokazuje mieszkanie w uporządkowany i atrakcyjny sposób. Dbamy o zdjęcia, opis, strukturę ogłoszenia i komunikację wartości mieszkania.",
    ],
  },
  {
    number: "05",
    title: "Ogłoszenie i kontakt z kandydatami",
    checks: [
      "Gdzie najlepiej opublikować ofertę?",
      "Jak odpowiadać na wiadomości i pytania kandydatów?",
      "Jak odróżnić poważnego kandydata od przypadkowego kontaktu?",
      "Jak organizować prezentacje bez chaosu i strat czasu?",
      "Jak komunikować się z kandydatami, jeśli pojawia się bariera językowa?",
    ],
    risk: [
      "Wynajem często oznacza dziesiątki wiadomości, powtarzające się pytania, odwołane prezentacje, negocjacje i kontakt z osobami, które nie pasują do mieszkania.",
    ],
    help: [
      "Organizujemy komunikację z kandydatami, filtrujemy zgłoszenia i pomagamy prowadzić proces tak, żeby właściciel nie tracił czasu na przypadkowe rozmowy i niepotrzebne prezentacje.",
    ],
  },
  {
    number: "06",
    title: "Weryfikacja najemcy",
    checks: [
      "Czy dane najemcy są jasne i możliwe do wpisania do umowy?",
      "Czy najemca ma stabilne źródło dochodu?",
      "Czy wysokość czynszu jest bezpieczna w relacji do jego dochodów?",
      "Czy można sprawdzić historię najmu lub referencje?",
      "Czy najemca jest cudzoziemcem i czy jego dokumenty są uporządkowane?",
      "Czy kandydat rozumie warunki najmu i zasady mieszkania?",
    ],
    risk: [
      "Najemca może wyglądać dobrze podczas prezentacji, ale później mogą pojawić się opóźnienia w płatnościach, brak stabilności, niejasne dokumenty albo problemy z kontaktem.",
    ],
    help: [
      "Pomagamy zebrać i uporządkować podstawowe informacje o kandydacie. Zwracamy uwagę na dochód, dokumenty, stabilność i dopasowanie najemcy do mieszkania. Proces ma ograniczyć ryzyko przypadkowej decyzji.",
    ],
  },
  {
    number: "07",
    title: "Finanse, kaucja i podatki",
    checks: [
      "Jaka kaucja będzie odpowiednia dla tego mieszkania?",
      "Czy kaucja realnie wystarczy na potencjalne szkody?",
      "Jak będą rozliczane media i opłaty administracyjne?",
      "Kiedy dokładnie najemca ma płacić czynsz?",
      "Co dzieje się w przypadku opóźnień?",
      "Jak prawidłowo rozliczyć przychód z najmu?",
    ],
    risk: [
      "Zbyt niska kaucja, niejasne zasady płatności albo brak kontroli nad rozliczeniami mogą prowadzić do strat, sporów i problemów podatkowych.",
    ],
    help: [
      "Pomagamy uporządkować zasady płatności, kaucji i rozliczeń. Wskazujemy, które kwestie warto jasno ustalić przed podpisaniem umowy. W sprawach podatkowych możemy rekomendować konsultację z księgową lub doradcą podatkowym.",
    ],
  },
  {
    number: "08",
    title: "Umowa i zabezpieczenia prawne",
    checks: [
      "Czy umowa jasno określa prawa i obowiązki stron?",
      "Czy potrzebny jest najem okazjonalny?",
      "Czy dokumenty do najmu okazjonalnego są poprawnie przygotowane?",
      "Czy zasady wypowiedzenia są jasne?",
      "Czy umowa określa zasady zwrotu mieszkania?",
      "Czy opisano odpowiedzialność za szkody?",
      "Czy określono zasady dotyczące zwierząt, palenia, gości, podnajmu i hałasu?",
    ],
    risk: [
      "Niejasna umowa może utrudnić reakcję przy opóźnieniach, szkodach, konflikcie z najemcą albo problemach przy zakończeniu najmu.",
    ],
    help: [
      "Pomagamy uporządkować proces podpisania umowy i zwracamy uwagę na elementy, które mają znaczenie dla bezpieczeństwa właściciela. Koordynujemy również kwestie związane z najmem okazjonalnym i notariuszem, jeśli taki model jest wybrany.",
    ],
  },
  {
    number: "09",
    title: "Ochrona mieszkania przed szkodami",
    checks: [
      "Czy jest przygotowany szczegółowy protokół przekazania mieszkania?",
      "Czy wykonano zdjęcia stanu mieszkania przed przekazaniem kluczy?",
      "Czy udokumentowano meble, sprzęty, podłogi, ściany, drzwi, okna, łazienkę i kuchnię?",
      "Czy zapisano stan liczników?",
      "Czy kaucja odpowiada standardowi mieszkania?",
      "Czy umowa opisuje odpowiedzialność najemcy za szkody?",
      "Czy właściciel ma ubezpieczenie mieszkania lub domu?",
      "Czy ochrona obejmuje stałe elementy, wyposażenie i ruchomości domowe?",
      "Czy najemca ma ubezpieczenie odpowiedzialności cywilnej w życiu prywatnym?",
      "Czy przewidziano ryzyko zalania sąsiadów, pożaru, awarii, przepięcia lub poważnego uszkodzenia?",
      "Czy przewidziano szkody w szklanych, ceramicznych lub delikatnych elementach wyposażenia?",
      "Czy jest procedura działania, jeśli najemca nie uznaje szkody?",
      "Czy wiadomo, jak dokumentować szkodę i jakie informacje zebrać?",
      "Czy warto rozważyć pomoc assistance, np. hydraulika, elektryka lub ślusarza w razie awarii?",
      "Czy przewidziano ryzyko konfliktów z sąsiadami lub administracją budynku?",
    ],
    risk: [
      "Najemca może uszkodzić meble, sprzęt, podłogę, ściany albo instalacje. Może dojść do zalania sąsiadów, awarii, pożaru lub sporu o kaucję. Bez dokumentacji trudno później udowodnić, w jakim stanie mieszkanie zostało przekazane.",
    ],
    help: [
      "Pomagamy przygotować proces przekazania mieszkania, protokół i dokumentację zdjęciową. Zwracamy uwagę na zasady odpowiedzialności, kaucję oraz dodatkowe zabezpieczenia, które warto rozważyć przed przekazaniem kluczy.",
    ],
  },
  {
    number: "10",
    title: "Przekazanie mieszkania",
    checks: [
      "Czy wszystkie dokumenty są podpisane przed przekazaniem kluczy?",
      "Czy kaucja i pierwsza płatność zostały zaksięgowane?",
      "Czy podpisano protokół przekazania?",
      "Czy najemca otrzymał instrukcje dotyczące mieszkania, sprzętów, śmieci, parkingu i zasad budynku?",
      "Czy zapisano liczbę kompletów kluczy?",
      "Czy ustalono datę faktycznego przekazania lokalu?",
    ],
    risk: [
      "Przekazanie kluczy bez kompletu dokumentów, płatności i protokołu może później utrudnić dochodzenie roszczeń lub wyjaśnianie sporów.",
    ],
    help: [
      "Koordynujemy przekazanie mieszkania, pilnujemy kolejności działań i dbamy o to, żeby dokumenty, płatności, klucze i protokół były uporządkowane.",
    ],
  },
  {
    number: "11",
    title: "Wsparcie w trakcie najmu",
    checks: [
      "Kto będzie kontaktem dla najemcy po podpisaniu umowy?",
      "Kto będzie reagował na pytania, awarie, drobne problemy i zgłoszenia?",
      "Kto będzie kontrolował płatności i rozliczenia?",
      "Kto pomoże, jeśli pojawi się problem z sąsiadami lub administracją?",
      "Kto zorganizuje kontakt do hydraulika, elektryka, serwisu lub firmy sprzątającej?",
      "Czy właściciel chce zajmować się tym samodzielnie?",
    ],
    risk: [
      "Po podpisaniu umowy nadal mogą pojawiać się problemy: opóźnienia w płatnościach, awarie, pytania najemcy, zgłoszenia od sąsiadów, drobne naprawy, rozliczenia i nieporozumienia.",
    ],
    help: [
      "Możemy pełnić rolę koordynatora i punktu kontaktu. Nie wykonujemy napraw samodzielnie, ale możemy pomóc znaleźć odpowiedni serwis, skoordynować kontakt między właścicielem, najemcą i wykonawcą oraz dopilnować, żeby problem nie został bez reakcji.",
      "Wsparcie w trakcie najmu może być ustalone osobno: na pierwszy miesiąc po zasiedleniu, na cały okres najmu albo na ostatni miesiąc przed wyprowadzką najemcy.",
    ],
  },
  {
    number: "12",
    title: "Przygotowanie do zakończenia najmu",
    checks: [
      "Czy najemca chce przedłużyć umowę?",
      "Kiedy trzeba zacząć szukać kolejnego najemcy?",
      "Czy można organizować prezentacje jeszcze przed wyprowadzką obecnego najemcy?",
      "Czy ogłoszenie można przygotować wcześniej?",
      "Czy cena powinna zostać zaktualizowana?",
      "Czy można poprawić mieszkanie przed kolejnym cyklem wynajmu?",
    ],
    risk: [
      "Jeśli zaczniesz szukać nowego najemcy dopiero po wyprowadzce obecnego, mieszkanie może stać puste przez kilka tygodni. Przy czynszu 5000-8000 zł jeden miesiąc pustostanu oznacza realną stratę.",
    ],
    help: [
      "Pomagamy przygotować kolejny cykl najmu wcześniej: aktualizujemy ofertę, cenę i plan prezentacji, żeby ograniczyć ryzyko pustostanu.",
    ],
  },
  {
    number: "13",
    title: "Odbiór mieszkania i rozliczenie",
    checks: [
      "Czy ustalono datę wyprowadzki?",
      "Czy stan mieszkania zostanie porównany z protokołem przekazania?",
      "Czy wykonano zdjęcia przy odbiorze?",
      "Czy spisano końcowe stany liczników?",
      "Czy rozliczono media?",
      "Czy wiadomo, jakie kwoty można potrącić z kaucji?",
      "Czy zwrot kaucji będzie udokumentowany?",
    ],
    risk: [
      "Spór o stan mieszkania, media lub kaucję może pojawić się właśnie na końcu najmu. Jeśli początek najmu był słabo udokumentowany, końcowe rozliczenie staje się trudniejsze.",
    ],
    help: [
      "Pomagamy uporządkować odbiór mieszkania, porównać stan lokalu, zebrać dokumentację i przeprowadzić końcowe rozliczenie w sposób bardziej przejrzysty.",
    ],
  },
  {
    number: "14",
    title: "Reakcja na problemy",
    checks: [
      "Co zrobisz, jeśli najemca spóźnia się z płatnością?",
      "Co zrobisz, jeśli najemca uszkodzi mieszkanie?",
      "Co zrobisz, jeśli najemca zaleje sąsiada?",
      "Co zrobisz, jeśli najemca powoduje konflikty z sąsiadami?",
      "Co zrobisz, jeśli najemca nie chce się wyprowadzić?",
      "Co zrobisz, jeśli najemca nie oddaje kluczy?",
      "Co zrobisz, jeśli najemca znika i zostawia długi albo szkody?",
    ],
    risk: [
      "Największy problem pojawia się wtedy, gdy właściciel zaczyna szukać rozwiązania dopiero po wystąpieniu kryzysu. Wtedy często brakuje dokumentów, dowodów, jasnych zapisów i przygotowanej procedury.",
    ],
    help: [
      "Pomagamy ograniczać ryzyko jeszcze przed podpisaniem umowy. Dbamy o selekcję najemcy, dokumenty, protokół, zdjęcia, kaucję i jasny proces. Jeśli problem się pojawi, łatwiej reagować, gdy podstawy są przygotowane od początku.",
    ],
  },
  {
    number: "15",
    title: "Kolejny cykl najmu",
    checks: [
      "Co trzeba poprawić po poprzednim najemcy?",
      "Czy trzeba odświeżyć mieszkanie?",
      "Czy zdjęcia są nadal aktualne?",
      "Czy cena powinna zostać zmieniona?",
      "Czy można poprawić ofertę?",
      "Czy nowy najemca powinien mieć inny profil niż poprzedni?",
      "Czy dokumenty, umowa i protokół wymagają aktualizacji?",
    ],
    risk: [
      "Każdy kolejny najem to nowy proces. Jeśli właściciel działa za każdym razem od zera, traci czas i powtarza te same błędy.",
    ],
    help: [
      "Pomagamy przygotować mieszkanie do kolejnego wynajmu, zaktualizować ofertę, poprawić prezentację i przeprowadzić następny proces w bardziej uporządkowany sposób.",
    ],
  },
];

const riskCostItems = [
  "jeden miesiąc pustostanu przy czynszu 6000 zł to 6000 zł utraconego przychodu;",
  "źle dobrany najemca może oznaczać opóźnienia w płatnościach;",
  "słaby protokół może utrudnić rozliczenie szkód;",
  "zbyt niska kaucja może nie pokryć strat;",
  "brak przygotowania do zakończenia umowy może zablokować kolejny wynajem;",
  "konflikt z najemcą może kosztować czas, nerwy i pieniądze.",
];

const comparisonRows: ComparisonRow[] = [
  { area: "Cena", alone: "Samodzielnie porównujesz oferty", withAgency: "Pomagamy ustalić realną cenę" },
  { area: "Przygotowanie", alone: "Sam oceniasz, co poprawić", withAgency: "Wskazujemy, co zwiększa atrakcyjność" },
  { area: "Ogłoszenie", alone: "Sam tworzysz opis i publikację", withAgency: "Pomagamy przygotować ofertę" },
  { area: "Kandydaci", alone: "Sam odbierasz wiadomości", withAgency: "Pomagamy filtrować zgłoszenia" },
  { area: "Prezentacje", alone: "Sam organizujesz terminy", withAgency: "Koordynujemy proces" },
  { area: "Najemca", alone: "Sam oceniasz ryzyko", withAgency: "Pomagamy sprawdzić dokumenty i profil" },
  { area: "Umowa", alone: "Sam pilnujesz zapisów", withAgency: "Pomagamy uporządkować proces" },
  { area: "Protokół", alone: "Sam dokumentujesz mieszkanie", withAgency: "Pomagamy przygotować przekazanie" },
  { area: "Szkody", alone: "Sam reagujesz po fakcie", withAgency: "Pomagamy przygotować zabezpieczenia wcześniej" },
  { area: "Najem", alone: "Sam rozwiązujesz bieżące problemy", withAgency: "Możemy koordynować kontakt i rozwiązania" },
  { area: "Koniec najmu", alone: "Sam rozliczasz lokal", withAgency: "Pomagamy przy odbiorze i kolejnym cyklu" },
];

const serviceItems = [
  "ocena ceny najmu;",
  "analiza rynku;",
  "rekomendacje dotyczące przygotowania mieszkania;",
  "przygotowanie prezentacji oferty;",
  "zdjęcia, opis i publikacja ogłoszenia;",
  "komunikacja z kandydatami;",
  "organizacja prezentacji;",
  "selekcja najemcy;",
  "pomoc w weryfikacji dokumentów i dochodu;",
  "wsparcie przy umowie;",
  "koordynacja najmu okazjonalnego i notariusza;",
  "przygotowanie protokołu przekazania;",
  "dokumentacja zdjęciowa;",
  "przekazanie mieszkania;",
  "opcjonalne wsparcie w trakcie najmu;",
  "pomoc przy zakończeniu najmu i przygotowaniu kolejnego cyklu.",
];

function GoldLink({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold tracking-wide shadow-sm ring-1 transition ${
        variant === "primary"
          ? "bg-amber-300 text-[#0C2D3A] ring-amber-200/70 hover:bg-amber-200"
          : "bg-white/10 text-white ring-white/15 hover:bg-white/15"
      }`}
    >
      {children}
    </a>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-200/85 sm:text-[15px]">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TextBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10">
      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">{title}</h3>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-200/85 sm:text-[15px]">{children}</div>
    </div>
  );
}

export default function PolishLandlordChecklistPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0C2D3A] text-neutral-100">
      <section className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.18),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_28%)]" />
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300/90">SERPAKOWSKI Nieruchomości</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Checklista właściciela: zanim wynajmiesz mieszkanie w Warszawie
            </h1>
            <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-neutral-200/88 sm:text-lg">
              <p>Wynajem mieszkania to nie tylko ogłoszenie, kilka prezentacji i podpisanie umowy.</p>
              <p>
                Dobrze przeprowadzony wynajem wymaga odpowiedniej ceny, przygotowania mieszkania, selekcji najemcy,
                uporządkowanych dokumentów, zabezpieczenia lokalu, protokołu przekazania i planu działania na wypadek problemów.
              </p>
              <p>Poniższa checklista pomoże Ci sprawdzić, które etapy warto przygotować przed przekazaniem kluczy.</p>
              <p>Jeśli po jej przejściu uznasz, że nie chcesz zajmować się tym samodzielnie, możemy przeprowadzić Cię przez cały proces.</p>
              <p>
                SERPAKOWSKI Nieruchomości pomaga właścicielom wynająć mieszkanie w Warszawie bez chaosu, przypadkowych decyzji i
                niepotrzebnego ryzyka.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <GoldLink href="#contact">Chcę bezpiecznie wynająć mieszkanie</GoldLink>
              <GoldLink href="#checklista" variant="secondary">Sprawdź checklistę</GoldLink>
            </div>
          </div>

          <aside className="rounded-[2rem] bg-white/[0.06] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)] ring-1 ring-white/10 sm:p-8">
            <div className="rounded-3xl border border-amber-300/25 bg-[#0A2530]/70 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-amber-200">Przed przekazaniem kluczy</p>
              <p className="mt-4 font-serif text-3xl text-white">15 obszarów do sprawdzenia</p>
              <p className="mt-4 text-sm leading-relaxed text-neutral-200/80">
                Cena, kandydaci, dokumenty, kaucja, protokół, zabezpieczenia, bieżące problemy i kolejny cykl najmu — wszystko w jednym uporządkowanym procesie.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white/[0.05] p-6 ring-1 ring-white/10 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">Dla kogo</p>
            <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">Dla kogo jest ta checklista?</h2>
            <p className="mt-4 text-neutral-200/85">Ta strona jest dla Ciebie, jeśli:</p>
            <div className="mt-6">
              <List items={audienceItems} />
            </div>
          </div>

          <div className="rounded-3xl bg-white/[0.05] p-6 ring-1 ring-white/10 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">Dlaczego to ważne</p>
            <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">Dlaczego samo ogłoszenie nie wystarczy?</h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-neutral-200/85 sm:text-base">
              <p>Dobre ogłoszenie może przyciągnąć kandydatów.</p>
              <p>
                Ale bezpieczny wynajem zaczyna się dopiero później: przy selekcji najemcy, weryfikacji dokumentów, przygotowaniu umowy,
                ustaleniu kaucji, protokole przekazania, zabezpieczeniu mieszkania i reakcji na problemy w trakcie najmu.
              </p>
              <p>Jeden błąd może kosztować więcej niż profesjonalne wsparcie.</p>
              <p>
                Może to być miesiąc pustostanu, nietrafiony najemca, spór o kaucję, uszkodzenia w mieszkaniu, zaległości w płatnościach
                albo trudności przy zakończeniu umowy.
              </p>
              <p>Dlatego przed wynajmem warto przejść przez cały proces krok po kroku.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="checklista" className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">Proces krok po kroku</p>
            <h2 className="mt-3 font-serif text-3xl text-white sm:text-5xl">Checklista bezpiecznego wynajmu mieszkania</h2>
          </div>

          <div className="mt-10 space-y-6">
            {checklistSections.map((section) => (
              <article key={section.number} className="rounded-[2rem] bg-white/[0.05] p-5 ring-1 ring-white/10 sm:p-7 lg:p-8">
                <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">Etap {section.number}</p>
                    <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">{section.title}</h3>
                  </div>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-300/12 text-lg font-semibold text-amber-200 ring-1 ring-amber-300/25">
                    {section.number}
                  </div>
                </div>

                <div className="mt-6 grid gap-5 lg:grid-cols-3">
                  <TextBlock title="Co warto sprawdzić?">
                    <List items={section.checks} />
                  </TextBlock>
                  <TextBlock title="Co może pójść nie tak?">
                    {section.risk.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </TextBlock>
                  <TextBlock title="Jak pomagamy?">
                    {section.help.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </TextBlock>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#0A2530]/70 p-6 ring-1 ring-amber-300/20 sm:p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">Koszt ryzyka</p>
          <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">Ile może kosztować błąd przy wynajmie?</h2>
          <div className="mt-5 max-w-4xl space-y-4 text-neutral-200/85">
            <p>Koszt współpracy z agencją warto porównać nie tylko z prowizją.</p>
            <p>Warto porównać go również z tym, ile może kosztować błąd:</p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {riskCostItems.map((item) => (
              <div key={item} className="rounded-2xl bg-white/[0.05] p-4 text-sm leading-relaxed text-neutral-200/85 ring-1 ring-white/10">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-neutral-200/85 sm:text-base">
            Dobrze przygotowany proces nie gwarantuje, że nigdy nie pojawi się problem. Ale znacząco zmniejsza ryzyko przypadkowych decyzji i pomaga szybciej reagować, jeśli problem wystąpi.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">Porównanie</p>
          <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">Samodzielnie czy z agencją?</h2>

          <div className="mt-8 hidden overflow-hidden rounded-3xl ring-1 ring-white/10 md:block">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-white/[0.08] text-amber-200">
                <tr>
                  <th className="px-5 py-4 font-semibold">Obszar</th>
                  <th className="px-5 py-4 font-semibold">Samodzielnie</th>
                  <th className="px-5 py-4 font-semibold">Z SERPAKOWSKI Nieruchomości</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 bg-white/[0.035] text-neutral-200/85">
                {comparisonRows.map((row) => (
                  <tr key={row.area}>
                    <td className="px-5 py-4 font-semibold text-white">{row.area}</td>
                    <td className="px-5 py-4">{row.alone}</td>
                    <td className="px-5 py-4">{row.withAgency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-4 md:hidden">
            {comparisonRows.map((row) => (
              <div key={row.area} className="rounded-2xl bg-white/[0.05] p-5 ring-1 ring-white/10">
                <h3 className="font-semibold text-white">{row.area}</h3>
                <div className="mt-4 grid gap-3 text-sm leading-relaxed text-neutral-200/85">
                  <p><span className="text-amber-200">Samodzielnie:</span> {row.alone}</p>
                  <p><span className="text-amber-200">Z SERPAKOWSKI Nieruchomości:</span> {row.withAgency}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] bg-white/[0.05] p-6 ring-1 ring-white/10 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">Zakres wsparcia</p>
            <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">Co możemy zrobić dla właściciela?</h2>
            <p className="mt-5 text-sm leading-relaxed text-neutral-200/85 sm:text-base">
              W SERPAKOWSKI Nieruchomości możemy pomóc Ci przejść przez cały proces wynajmu:
            </p>
          </div>
          <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {serviceItems.map((item) => (
              <div key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-200/85">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#0A2530] p-6 text-center shadow-[0_24px_80px_rgba(0,0,0,0.32)] ring-1 ring-amber-300/20 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">Kontakt</p>
          <h2 className="mt-3 font-serif text-3xl text-white sm:text-5xl">Nie musisz przechodzić przez cały proces samodzielnie</h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-neutral-200/85 sm:text-base">
            <p>
              Jeśli chcesz wynająć mieszkanie bez chaosu, przypadkowych decyzji i niepotrzebnego ryzyka, możemy przeprowadzić Cię przez cały proces.
            </p>
            <p>
              Od oceny ceny i przygotowania mieszkania, przez znalezienie oraz sprawdzenie najemcy, aż po umowę, protokół i przekazanie kluczy.
            </p>
            <p>Porozmawiajmy o wynajmie Twojego mieszkania w Warszawie.</p>
          </div>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <GoldLink href="mailto:kontakt@serpakowski.pl?subject=Rozmowa%20o%20wynajmie%20mieszkania%20w%20Warszawie">Umów rozmowę</GoldLink>
            <GoldLink href="mailto:kontakt@serpakowski.pl?subject=Wycena%20najmu%20mieszkania%20w%20Warszawie" variant="secondary">
              Sprawdź, za ile możesz wynająć mieszkanie
            </GoldLink>
          </div>
          <p className="mt-6 text-sm text-neutral-200/75">
            Możesz też napisać bezpośrednio: <a href="mailto:kontakt@serpakowski.pl" className="text-amber-200 hover:text-amber-100">kontakt@serpakowski.pl</a>
          </p>
          <p className="mt-4 text-xs leading-relaxed text-neutral-300/70">
            Ta strona ma charakter informacyjny i nie stanowi porady prawnej ani podatkowej.
          </p>
        </div>
      </section>
    </main>
  );
}
