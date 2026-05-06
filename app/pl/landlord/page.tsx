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

const responsibilities = [
  "Analiza ceny i popytu",
  "Przygotowanie nieruchomości",
  "Marketing i ogłoszenia",
  "Prezentacje i negocjacje",
  "Weryfikacja najemcy",
  "Umowa i protokół zdawczo-odbiorczy",
];

const valueCards = [
  {
    title: "Cena i pozycjonowanie",
    text: "Ustalamy realistyczną cenę rynkową, analizujemy konkurencję i pomagamy zaprezentować nieruchomość tak, aby przyciągnąć odpowiednich najemców.",
  },
  {
    title: "Jakość najemcy",
    text: "Pomagamy odfiltrować przypadkowe zapytania, doprecyzowujemy sytuację klienta, terminy, dokumenty i gotowość do najmu.",
  },
  {
    title: "Bezpieczeństwo transakcji",
    text: "Wspieramy przy umowie, protokole zdawczo-odbiorczym, kaucji, licznikach i kluczowych warunkach najmu.",
  },
];

const steps = [
  {
    title: "Poznanie nieruchomości",
    text: "Zbieramy informacje o mieszkaniu, lokalizacji, stanie, opłatach i oczekiwaniach właściciela.",
  },
  {
    title: "Analiza rynku",
    text: "Porównujemy podobne oferty i określamy strategię ceny.",
  },
  {
    title: "Przygotowanie ogłoszenia",
    text: "Pomagamy z opisem, zdjęciami, atutami nieruchomości i właściwą prezentacją.",
  },
  {
    title: "Promocja i prezentacje",
    text: "Publikujemy ofertę, obsługujemy zapytania, organizujemy prezentacje i komunikację.",
  },
  {
    title: "Weryfikacja kandydata",
    text: "Weryfikujemy dokumenty, źródło dochodu, skład osób zamieszkujących, czas najmu i ważne warunki.",
  },
  {
    title: "Umowa i przekazanie mieszkania",
    text: "Pomagamy przejść podpisanie, płatność, kaucję, protokół, liczniki i przekazanie kluczy.",
  },
];

const risks = [
  "Zaniżona lub zawyżona cena",
  "Długi przestój mieszkania",
  "Słabi lub przypadkowi kandydaci",
  "Niejasne warunki umowy",
  "Spory o kaucję i uszkodzenia",
  "Nieprawidłowo przygotowane przekazanie mieszkania",
  "Utrata czasu na prezentacje i korespondencję",
  "Nieprzejrzyste opłaty i oczekiwania",
];

const marketingBullets = [
  "opis bez zbędnego szumu",
  "akcent na mocnych stronach nieruchomości",
  "jasne warunki dla najemcy",
  "prawidłowa komunikacja",
  "szybka odpowiedź na zapytania",
];

const screeningBullets = [
  "kto będzie mieszkać",
  "okres najmu",
  "źródło dochodu",
  "dokumenty",
  "oczekiwania dotyczące umowy",
  "gotowość do kaucji i opłat",
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0C2D3A] text-neutral-100">
      <SiteHeaderPlLandlord />
      <main className="mx-auto max-w-6xl space-y-20 px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0C2D3A] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,193,7,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_35%)]" />
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Wsparcie dla właścicieli w Warszawie</p>
              <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
                Wynająć mieszkanie <br />
                spokojnie i <span className="text-amber-300">korzystnie</span>
              </h1>
              <p className="max-w-2xl text-lg text-neutral-200/90">
                Wspieramy właścicieli w przygotowaniu nieruchomości, wyborze odpowiedniego najemcy i przejściu przez cały proces najmu bez chaosu i zbędnego ryzyka.
              </p>
              <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-amber-200 ring-1 ring-amber-200/30">
                Profesjonalne wsparcie właściciela na każdym etapie najmu.
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">Omówić wynajem mieszkania</a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10">Uzyskaj konsultację</a>
              </div>
            </div>
            <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-2xl font-semibold text-white">Co bierzemy na siebie</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {responsibilities.map((item) => (
                  <div key={item} className="rounded-xl bg-white/5 px-4 py-3 text-sm text-neutral-100 ring-1 ring-white/10">• {item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-[#0A2530] p-6 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8">
          <h2 className="font-serif text-3xl text-white">Najważniejsze: wynająć nie tylko szybko, ale właściwie</h2>
          <p className="mt-4 max-w-4xl text-neutral-200/90">Prawidłowy wynajem mieszkania zaczyna się nie od publikacji ogłoszenia, ale od oceny nieruchomości, zrozumienia rynku, przygotowania warunków, selekcji kandydatów i bezpiecznego przygotowania umowy.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {valueCards.map((card) => (
              <article key={card.title} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-200/85">{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-white">Jak przebiega współpraca</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-300/20 text-sm font-semibold text-amber-100 ring-1 ring-amber-200/30">{index + 1}</div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-200/85">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-white">Jakie ryzyka pomagamy ograniczyć</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {risks.map((risk) => (
              <article key={risk} className="rounded-2xl bg-white/5 p-5 text-sm text-neutral-100 ring-1 ring-white/10">• {risk}</article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-[#0A2530] p-6 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8">
          <h2 className="font-serif text-3xl text-white">Mieszkanie trzeba zaprezentować właściwie</h2>
          <p className="mt-4 max-w-4xl text-neutral-200/90">Nawet dobra nieruchomość może zostać wynajęta poniżej potencjału rynku, jeśli cena, zdjęcia, opis lub warunki będą źle przedstawione. Pomagamy przygotować ofertę, która jest czytelna, atrakcyjna i konkurencyjna.</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {marketingBullets.map((item) => (
              <li key={item} className="rounded-xl bg-white/5 px-4 py-3 text-sm text-neutral-100 ring-1 ring-white/10">• {item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8">
          <h2 className="font-serif text-3xl text-white">Rzetelny najemca to podstawa spokojnego najmu</h2>
          <p className="mt-4 max-w-4xl text-neutral-200/90">Pomagamy właścicielowi nie tylko zebrać wiele wiadomości, ale wybrać kandydata, z którym warunki najmu będą jasno ustalone z wyprzedzeniem.</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {screeningBullets.map((item) => (
              <li key={item} className="rounded-xl bg-[#0A2530] px-4 py-3 text-sm text-neutral-100 ring-1 ring-white/10">• {item}</li>
            ))}
          </ul>
        </section>

        <section id="contact" className="rounded-3xl bg-gradient-to-r from-[#0F3A4D] to-[#0C2D3A] p-8 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-10">
          <h2 className="font-serif text-3xl text-white">Chcesz wynająć mieszkanie bez chaosu?</h2>
          <p className="mt-4 max-w-3xl text-neutral-200/90">Opowiedz nam o nieruchomości — ocenimy sytuację i zaproponujemy przejrzysty format współpracy.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="mailto:kontakt@serpakowski.pl" className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">Zostaw zgłoszenie</a>
            <a href="https://wa.me/48453053969" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10">Napisz na WhatsApp</a>
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
