import { SiteFooterEn } from "../../../components/layout/SiteFooterEn";
import { SiteHeaderEnLandlord } from "../../../components/layout/SiteHeaderEnLandlord";

export const metadata = {
  title: "Rent Out a Property in Warsaw | SERPAKOWSKI Nieruchomości",
  description:
    "Professional support for owners renting out property in Warsaw: preparation, marketing, viewings, tenant screening, lease agreement and handover.",
};

const responsibilities = [
  "Price and demand analysis",
  "Property preparation",
  "Marketing and listing",
  "Viewings and negotiations",
  "Tenant screening",
  "Lease agreement and handover protocol",
];

const valueCards = [
  {
    title: "Pricing and positioning",
    text: "We define a realistic market price, analyze competing listings, and help present the property to attract suitable tenants.",
  },
  {
    title: "Tenant quality",
    text: "We help filter random inquiries, clarify each candidate's situation, timeline, documents, and rental readiness.",
  },
  {
    title: "Transaction security",
    text: "We support the lease agreement, handover protocol, security deposit, meter readings, and key rental terms.",
  },
];

const steps = [
  { title: "Property onboarding", text: "We gather details about the apartment, location, condition, utilities, and owner expectations." },
  { title: "Market analysis", text: "We compare similar offers and define a clear pricing strategy." },
  { title: "Listing preparation", text: "We help with the description, photos, property strengths, and clear presentation." },
  { title: "Promotion and viewings", text: "We publish the offer, handle inquiries, organize viewings, and support communication." },
  { title: "Candidate screening", text: "We review documents, source of income, who will live in the property, rental term, and key conditions." },
  { title: "Lease agreement and handover", text: "We help guide signing, payment, security deposit, protocol, meter readings, and key handover." },
];

const risks = ["Undervalued or overpriced rent", "Long vacancy periods", "Weak or random candidates", "Unclear lease terms", "Disputes over deposit and damages", "Improperly documented handover", "Time loss on viewings and messaging", "Unclear payments and expectations"];

const marketingBullets = ["clear listing copy without unnecessary noise", "focus on the property's strongest points", "transparent terms for tenants", "professional communication", "fast response to inquiries"];

const screeningBullets = ["who will live in the property", "rental term", "source of income", "documents", "lease expectations", "readiness for deposit and payments"];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0C2D3A] text-neutral-100">
      <SiteHeaderEnLandlord />
      <main className="mx-auto max-w-6xl space-y-20 px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0C2D3A] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,193,7,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_35%)]" />
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Owner support in Warsaw</p>
              <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl">Rent out a property <br />calmly and <span className="text-amber-300">effectively</span></h1>
              <p className="max-w-2xl text-lg text-neutral-200/90">We help owners prepare the property, select suitable tenants, and complete the entire rental process without chaos or unnecessary risk.</p>
              <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-amber-200 ring-1 ring-amber-200/30">Professional owner support at every stage of renting out a property.</div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">Discuss renting out your property</a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10">Get a consultation</a>
              </div>
            </div>
            <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10"><h2 className="text-2xl font-semibold text-white">What we handle</h2><div className="mt-5 grid gap-3 sm:grid-cols-2">{responsibilities.map((item) => (<div key={item} className="rounded-xl bg-white/5 px-4 py-3 text-sm text-neutral-100 ring-1 ring-white/10">• {item}</div>))}</div></div>
          </div>
        </section>
        <section className="rounded-3xl bg-[#0A2530] p-6 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8"><h2 className="font-serif text-3xl text-white">The key is not just to rent out, but to rent out correctly</h2><p className="mt-4 max-w-4xl text-neutral-200/90">A well-managed rental starts not with posting a listing, but with property assessment, market understanding, condition planning, candidate screening, and careful lease documentation.</p><div className="mt-8 grid gap-4 md:grid-cols-3">{valueCards.map((card) => (<article key={card.title} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"><h3 className="text-lg font-semibold text-white">{card.title}</h3><p className="mt-3 text-sm leading-relaxed text-neutral-200/85">{card.text}</p></article>))}</div></section>
        <section><h2 className="font-serif text-3xl text-white">How the process works</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{steps.map((step, index) => (<article key={step.title} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"><div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-300/20 text-sm font-semibold text-amber-100 ring-1 ring-amber-200/30">{index + 1}</div><h3 className="text-lg font-semibold text-white">{step.title}</h3><p className="mt-2 text-sm leading-relaxed text-neutral-200/85">{step.text}</p></article>))}</div></section>
        <section><h2 className="font-serif text-3xl text-white">Risks we help reduce</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{risks.map((risk) => (<article key={risk} className="rounded-2xl bg-white/5 p-5 text-sm text-neutral-100 ring-1 ring-white/10">• {risk}</article>))}</div></section>
        <section className="rounded-3xl bg-[#0A2530] p-6 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8"><h2 className="font-serif text-3xl text-white">A property must be presented properly</h2><p className="mt-4 max-w-4xl text-neutral-200/90">Even a strong property can underperform the market if pricing, photos, listing text, or terms are presented poorly. We help prepare an offer that is clear, attractive, and competitive.</p><ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{marketingBullets.map((item) => (<li key={item} className="rounded-xl bg-white/5 px-4 py-3 text-sm text-neutral-100 ring-1 ring-white/10">• {item}</li>))}</ul></section>
        <section className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8"><h2 className="font-serif text-3xl text-white">A reliable tenant is the foundation of a stable rental</h2><p className="mt-4 max-w-4xl text-neutral-200/90">We help owners not just collect many messages, but choose a candidate whose rental terms are clear in advance.</p><ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{screeningBullets.map((item) => (<li key={item} className="rounded-xl bg-[#0A2530] px-4 py-3 text-sm text-neutral-100 ring-1 ring-white/10">• {item}</li>))}</ul></section>
        <section id="contact" className="rounded-3xl bg-gradient-to-r from-[#0F3A4D] to-[#0C2D3A] p-8 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-10"><h2 className="font-serif text-3xl text-white">Want to rent out your property without chaos?</h2><p className="mt-4 max-w-3xl text-neutral-200/90">Tell us about your property — we will assess the situation and suggest a clear cooperation format.</p><div className="mt-7 flex flex-wrap gap-3"><a href="mailto:kontakt@serpakowski.pl" className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">Submit request</a><a href="https://wa.me/48453053969" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10">Message on WhatsApp</a></div><div className="mt-6 space-y-1 text-neutral-200/90"><p>kontakt@serpakowski.pl</p><p>+48 453 053 969</p></div></section>
      </main>
      <SiteFooterEn />
    </div>
  );
}
