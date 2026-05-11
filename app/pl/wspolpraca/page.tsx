import { createSeoMetadata, seoAlternates } from "../../seo";
import { Button } from "../../../components/layout/Button";
import { Container } from "../../../components/layout/Container";
import { SiteFooterPl } from "../../../components/layout/SiteFooterPl";
import { SiteHeaderPlWspolpraca } from "../../../components/layout/SiteHeaderPlWspolpraca";

export const metadata = createSeoMetadata({
  title: "Współpraca B2B w nieruchomościach | SERPAKOWSKI Nieruchomości",
  description:
    "Współpraca dla agencji, pośredników, inwestorów i partnerów z rynku nieruchomości w Warszawie. Tworzymy relacje, które przynoszą klientów i transakcje.",
  canonicalPath: "/pl/wspolpraca",
  languages: seoAlternates.partnership,
  locale: "pl_PL",
});

const operatorBenefits = [
  "Pozyskiwanie klientów zainteresowanych najmem długoterminowym",
  "Wsparcie klientów w spokojnym przejściu przez proces najmu",
  "Komunikacja w języku polskim, rosyjskim, ukraińskim i angielskim",
  "Dodatkowe benefity dla najemców dzięki sieci partnerów",
  "Wspólne działania contentowe i edukacyjne wokół najmu w Warszawie",
];

const ecosystemAreas = [
  "Internet i usługi telekomunikacyjne",
  "Przeprowadzki i transport",
  "Sprzątanie mieszkań",
  "Ubezpieczenia najmu i nieruchomości",
  "Handyman, montaż i drobne naprawy",
  "Kawiarnie i lokalne benefity",
  "Fitness i aktywność",
  "Legalizacja pobytu i wsparcie dla cudzoziemców",
  "Medycyna i prywatna opieka zdrowotna",
  "Notariusze",
  "Księgowość i wsparcie JDG",
  "Wyposażenie mieszkań",
  "Catering i gotowe posiłki",
];

const partnerBenefits = [
  "Dostęp do klientów w momencie realnej potrzeby",
  "Widoczność na stronie SERPAKOWSKI Nieruchomości jako partner, jeśli współpraca zostanie ustalona",
  "Możliwość przygotowania kodu rabatowego, vouchera, priorytetu lub dedykowanego benefitu",
  "Wspólne działania marketingowe i contentowe",
  "Możliwość poleceń klientów lub rozliczeń partnerskich, jeśli model współpracy na to pozwala",
  "Lepsze doświadczenie klienta końcowego",
];

const clientBenefits = [
  "Mniej chaosu po podpisaniu umowy",
  "Dostęp do sprawdzonych usługodawców",
  "Możliwe rabaty, priorytet lub dedykowane warunki",
  "Łatwiejszy start w nowym mieszkaniu",
  "Większe poczucie bezpieczeństwa",
  "Wsparcie nie tylko przed podpisaniem umowy, ale również po przeprowadzce",
];

const cooperationModels = [
  {
    title: "Polecenia klientów",
    text: "Przekazywanie kontaktów do osób, które realnie potrzebują danej usługi lub oferty najmu.",
  },
  {
    title: "Dedykowany benefit dla klientów",
    text: "Rabat, voucher, priorytet obsługi, specjalny pakiet lub inna forma wartości dodanej.",
  },
  {
    title: "Wspólna widoczność",
    text: "Prezentacja partnera na stronie, w materiałach informacyjnych lub w komunikacji z klientem.",
  },
  {
    title: "Wspólny content",
    text: "Poradniki, checklisty, krótkie materiały edukacyjne lub treści promujące bezpieczny najem, przeprowadzkę i życie w Warszawie.",
  },
  {
    title: "Obsługa klientów międzynarodowych",
    text: "Wsparcie osób, które nie znają dobrze języka polskiego i potrzebują spokojnej komunikacji w procesie najmu.",
  },
];

const serviceExamples = [
  "Internet dla nowego mieszkania",
  "Przeprowadzka i transport rzeczy",
  "Sprzątanie przed lub po wprowadzeniu",
  "Ubezpieczenie najmu i nieruchomości",
  "Montaż mebli i drobne naprawy",
  "Legalizacja pobytu, księgowość, notariusz",
  "Medycyna, fitness, catering i codzienne usługi ułatwiające start w Warszawie",
];

const agencyExamples = [
  "Wspólne transakcje",
  "Przekazywanie klientów",
  "Wsparcie klientów rosyjsko-, ukraińsko- i anglojęzycznych",
  "Pomoc przy najmie, sprzedaży lub zakupie",
  "Wsparcie właścicieli i inwestorów",
];

const cooperationSteps = [
  {
    title: "Krótka rozmowa",
    text: "Sprawdzamy, czym zajmuje się partner i czy jego usługa pasuje do potrzeb naszych klientów.",
  },
  {
    title: "Wybór modelu",
    text: "Określamy, czy współpraca ma opierać się na poleceniach, beneficie dla klientów, wspólnym contencie, widoczności na stronie czy innym rozwiązaniu.",
  },
  {
    title: "Test w praktyce",
    text: "Zaczynamy od prostego modelu, który można łatwo sprawdzić.",
  },
  {
    title: "Rozwój współpracy",
    text: "Jeśli model działa, możemy rozszerzać zakres, widoczność i wspólne działania.",
  },
];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-2xl bg-white/5 px-4 py-4 text-sm leading-relaxed text-neutral-100/95 ring-1 ring-white/10"
        >
          <span className="mr-2 text-amber-300">•</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function SectionIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {children ? (
        <div className="mt-4 space-y-4 text-neutral-200/85 leading-relaxed">
          {children}
        </div>
      ) : null}
    </div>
  );
}

export default function WspolpracaPagePl() {
  return (
    <div className="min-h-screen bg-[#0C2D3A] text-neutral-100">
      <SiteHeaderPlWspolpraca />
      <main>
        <section className="relative isolate overflow-hidden pt-24">
          <div className="absolute inset-0 -z-10">
            <img
              src="/Depositphotos_455695662_XL.jpg"
              alt="Panorama Warszawy"
              className="h-full w-full object-cover object-[center_38%]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#061923]/50 via-[#0C2D3A]/55 to-[#0C2D3A]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,210,120,0.18),transparent_36%),radial-gradient(circle_at_82%_8%,rgba(255,255,255,0.16),transparent_34%)]" />
          </div>
          <Container>
            <div className="pb-24 pt-[42vh] sm:pb-28 sm:pt-[46vh] md:pb-32 md:pt-[50vh]">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200/85">
                B2B · najem · relokacja · Warszawa
              </p>
              <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Współpraca, która przyciąga {" "}
                <span className="text-amber-300">klientów</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-200/90">
                Budujemy ekosystem współpracy wokół najmu i nieruchomości w Warszawie — dla klientów, właścicieli, agentów, operatorów najmu i firm usługowych.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
                >
                  Porozmawiajmy o współpracy
                </a>
                <Button href="#ecosystem">Zobacz obszary współpracy</Button>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <SectionIntro
                eyebrow="Operatorzy i PRS"
                title="Dla operatorów najmu i właścicieli instytucjonalnych"
              >
                <p>
                  Pomagamy operatorom najmu, właścicielom portfeli mieszkań i projektom PRS docierać do klientów, którzy aktywnie szukają mieszkania w Warszawie.
                </p>
                <p>
                  SERPAKOWSKI Nieruchomości może wspierać partnerów w pozyskiwaniu najemców, prezentacji ofert, komunikacji z klientami międzynarodowymi oraz budowaniu dodatkowej wartości wokół procesu najmu.
                </p>
              </SectionIntro>
              <CheckList items={operatorBenefits} />
            </div>
          </Container>
        </section>

        <section className="py-6 sm:py-10">
          <Container>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#12465B] via-[#0E384A] to-[#0A2A38] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.38)] ring-1 ring-amber-200/30 sm:p-10 lg:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(255,210,120,0.18),transparent_34%)]" />
              <div className="relative max-w-4xl">
                <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">
                  Przejrzystość i lojalność
                </p>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl">
                  Współpraca oparta na jasnych zasadach
                </h2>
                <div className="mt-5 space-y-4 text-lg leading-relaxed text-neutral-100/90">
                  <p>
                    W relacjach partnerskich stawiamy na przejrzystość, lojalność i brak konfliktu interesów. Jeśli klient trafia do nas w ramach konkretnej współpracy, respektujemy ustalony kierunek działania i nie budujemy relacji kosztem partnera.
                  </p>
                  <p>
                    Dobra współpraca powinna wzmacniać obie strony — nie zastępować jednej drugą.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="ecosystem" className="py-16 sm:py-20">
          <Container>
            <SectionIntro
              eyebrow="Obszary ekosystemu"
              title="Ekosystem usług wokół najmu"
            >
              <p>
                Najem mieszkania nie kończy się na podpisaniu umowy. Klient często potrzebuje internetu, przeprowadzki, sprzątania, ubezpieczenia, pomocy technicznej, wsparcia przy legalizacji pobytu, księgowości, usług notarialnych, opieki medycznej, fitnessu, wyposażenia mieszkania lub cateringu.
              </p>
              <p>
                Dlatego rozwijamy sieć partnerów, którzy mogą ułatwić klientom start w nowym miejscu, a jednocześnie zwiększyć wartość oferty dla operatorów najmu, właścicieli i firm współpracujących z SERPAKOWSKI Nieruchomości.
              </p>
              <p>
                Interesują nas partnerstwa w obszarach takich jak:
              </p>
            </SectionIntro>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ecosystemAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-2xl bg-white/5 px-4 py-4 text-sm text-neutral-100/95 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/10 hover:ring-amber-200/30"
                >
                  {area}
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-8 sm:py-12">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <SectionIntro title="Co może zyskać partner?">
                  <p>
                    Współpraca z SERPAKOWSKI Nieruchomości daje możliwość dotarcia do klienta w bardzo konkretnym momencie: kiedy szuka mieszkania, podpisuje umowę, przeprowadza się albo zaczyna życie w nowej lokalizacji.
                  </p>
                  <p>
                    To moment, w którym potrzeba usług jest realna, pilna i naturalna.
                  </p>
                </SectionIntro>
                <div className="mt-7">
                  <CheckList items={partnerBenefits} />
                </div>
              </div>
              <div>
                <SectionIntro title="Co zyskuje klient?">
                  <p>
                    Naszym celem jest to, aby klient po znalezieniu mieszkania nie zostawał sam z kolejnymi problemami. Dobrze dobrani partnerzy mogą pomóc mu szybciej i spokojniej zorganizować przeprowadzkę, internet, sprzątanie, ubezpieczenie, wyposażenie mieszkania lub inne praktyczne sprawy.
                  </p>
                </SectionIntro>
                <div className="mt-7">
                  <CheckList items={clientBenefits} />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <SectionIntro
              eyebrow="Elastyczne zasady"
              title="Możliwe modele współpracy"
            >
              <p>
                Model współpracy dobieramy do kategorii partnera, potrzeb klienta i realnej wartości, którą możemy wspólnie dostarczyć.
              </p>
            </SectionIntro>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {cooperationModels.map((model) => (
                <article
                  key={model.title}
                  className="rounded-2xl bg-white/5 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.2)] ring-1 ring-white/10 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10 hover:ring-amber-200/30"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {model.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-200/85">
                    {model.text}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-8 sm:py-12">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <SectionIntro
                eyebrow="Partnerzy usługowi"
                title="Dla firm usługowych"
              >
                <p>
                  Interesują nas partnerstwa z firmami, które mogą realnie pomóc klientom przed, w trakcie lub po przeprowadzce. Nie chodzi o przypadkową reklamę, ale o usługę pojawiającą się dokładnie wtedy, kiedy klient jej potrzebuje.
                </p>
              </SectionIntro>
              <CheckList items={serviceExamples} />
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <SectionIntro
                eyebrow="Rynek nieruchomości"
                title="Dla agencji, agentów i inwestorów"
              >
                <p>
                  Jesteśmy otwarci na współpracę z agencjami nieruchomości, niezależnymi pośrednikami, inwestorami i właścicielami, którym zależy na przejrzystych zasadach, dobrej komunikacji i praktycznym rezultacie.
                </p>
                <p>
                  Współpraca może dotyczyć wspólnych transakcji, przekazywania klientów, wsparcia klientów międzynarodowych, poszukiwania ofert, komunikacji z właścicielami lub organizacji procesu najmu.
                </p>
              </SectionIntro>
              <CheckList items={agencyExamples} />
            </div>
          </Container>
        </section>

        <section className="py-8 sm:py-12">
          <Container>
            <SectionIntro title="Jak zaczynamy?" />
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {cooperationSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-2xl bg-white/5 p-6 shadow-[0_10px_28px_rgba(0,0,0,0.2)] ring-1 ring-white/10 backdrop-blur-sm"
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-amber-200/80">
                    Krok {index + 1}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-200/85">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="contact" className="relative isolate py-20">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(46,107,127,0.2),transparent_60%)]" />
          <Container>
            <div className="rounded-3xl bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 backdrop-blur-sm sm:p-10 lg:p-12">
              <h2 className="max-w-3xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Porozmawiajmy o współpracy
              </h2>
              <p className="mt-5 max-w-3xl text-neutral-200/90 leading-relaxed">
                Jeśli reprezentujesz operatora najmu, agencję, firmę usługową, inwestora lub projekt związany z rynkiem nieruchomości w Warszawie, napisz do nas. Chętnie sprawdzimy, czy możemy stworzyć wspólny, przejrzysty i praktyczny model działania.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="mailto:kontakt@serpakowski.pl"
                  className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
                >
                  Napisz w sprawie współpracy
                </a>
                <Button href="tel:+48453053969">Zadzwoń</Button>
              </div>
              <div className="mt-8 grid gap-3 text-neutral-200/90 sm:grid-cols-2">
                <a
                  href="mailto:kontakt@serpakowski.pl"
                  className="rounded-2xl bg-white/5 px-4 py-4 ring-1 ring-white/10 transition hover:bg-white/10"
                >
                  kontakt@serpakowski.pl
                </a>
                <a
                  href="tel:+48453053969"
                  className="rounded-2xl bg-white/5 px-4 py-4 ring-1 ring-white/10 transition hover:bg-white/10"
                >
                  +48 453 053 969
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooterPl />
    </div>
  );
}
