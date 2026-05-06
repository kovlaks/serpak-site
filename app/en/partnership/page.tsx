import { createSeoMetadata, seoAlternates } from "../../seo";
import { Button } from "../../../components/layout/Button";
import { Container } from "../../../components/layout/Container";
import { SiteFooterEn } from "../../../components/layout/SiteFooterEn";
import { SiteHeaderEnPartnership } from "../../../components/layout/SiteHeaderEnPartnership";

export const metadata = createSeoMetadata({
  title: "Real estate partnerships in Warsaw | SERPAKOWSKI Nieruchomości",
  description: "Partnership opportunities for agencies, private agents, investors and real estate market partners in Warsaw. We build cooperation that brings clients and transactions.",
  canonicalPath: "/en/partnership",
  languages: seoAlternates.partnership,
  locale: "en_US",
});

const trustItems = ["Focus: Warsaw", "Languages: RU / UA / PL / EN", "Fast response", "Modern approach", "Results-oriented"];

const segments = [
  {
    title: "For real estate agencies",
    text: "Joint transactions, client referral, client support in Warsaw, co-broker model, and cooperation for international clients.",
    cta: "Become a partner",
  },
  {
    title: "For independent agents and brokers",
    text: "If your client needs support in the Warsaw market, we can join quickly with transparent and professional execution.",
    cta: "Discuss terms",
  },
  {
    title: "For companies and institutions",
    text: "We cooperate with companies, coliving/PRS projects, rental operators, HR teams, and relocation partners.",
    cta: "Request partnership",
  },
  {
    title: "For owners and investors",
    text: "Tenant acquisition, rental strategy, local Warsaw market expertise, and support for purchase and sale transactions.",
    cta: "Contact us",
  },
];

const steps = ["Define the cooperation model", "Launch client flow", "Scale results"];

export default function PartnershipPageEn() { return <div className="min-h-screen bg-[#0C2D3A] text-neutral-100"><SiteHeaderEnPartnership /><main><section className="relative isolate overflow-hidden pt-24"><div className="absolute inset-0 -z-10"><img src="/Depositphotos_455695662_XL.jpg" alt="Warsaw skyline" className="h-full w-full object-cover object-[center_38%]" /><div className="absolute inset-0 bg-gradient-to-b from-[#061923]/50 via-[#0C2D3A]/55 to-[#0C2D3A]" /><div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,210,120,0.18),transparent_36%),radial-gradient(circle_at_82%_8%,rgba(255,255,255,0.16),transparent_34%)]" /></div><Container><div className="pt-[42vh] sm:pt-[46vh] md:pt-[50vh] pb-24 sm:pb-28 md:pb-32"><p className="text-xs uppercase tracking-[0.2em] text-amber-200/85">B2B Direction · Warsaw</p><h1 className="mt-5 font-serif leading-tight tracking-tight text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">Partnership,<br />that brings <span className="text-amber-300">clients</span></h1><p className="mt-6 max-w-2xl text-lg text-neutral-200/90">We create partnerships that generate clients, transactions, and long-term value in Warsaw.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">Discuss partnership</a><Button href="#contact">Contact us</Button></div></div></Container></section><section className="py-8 sm:py-10"><Container><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{trustItems.map((item) => (<div key={item} className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm px-4 py-4 text-sm text-neutral-100/95 shadow-[0_8px_26px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-amber-200/35">{item}</div>))}</div></Container></section><section className="py-16 sm:py-20"><Container><div className="max-w-3xl"><h2 className="font-serif text-3xl sm:text-4xl text-white">Partnership formats</h2><p className="mt-3 text-neutral-200/85">We are open to flexible B2B cooperation models aligned with your segment and business goals.</p></div><div className="mt-8 grid gap-6 md:grid-cols-2">{segments.map((card) => (<article key={card.title} className="group rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm p-6 md:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-amber-200/30"><h3 className="text-xl font-semibold text-white">{card.title}</h3><p className="mt-3 text-neutral-200/85 leading-relaxed">{card.text}</p><a href="#contact" className="mt-6 inline-flex items-center text-sm font-semibold text-amber-200 transition group-hover:text-amber-100">{card.cta} <span className="ml-2 transition group-hover:translate-x-1">→</span></a></article>))}</div></Container></section><section className="py-4 sm:py-8"><Container><div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#12465B] via-[#0E384A] to-[#0A2A38] p-8 sm:p-10 lg:p-12 ring-1 ring-amber-200/30 shadow-[0_24px_70px_rgba(0,0,0,0.38)]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(255,210,120,0.18),transparent_34%)]" /><div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"><div><p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">For the B2B rental segment</p><h2 className="mt-3 font-serif text-3xl sm:text-4xl text-white leading-tight">For rental complexes and rental projects</h2><p className="mt-4 text-neutral-100/90 leading-relaxed max-w-2xl">We can operate as an external client acquisition channel, especially for international clients and tenants who value fast, transparent service.</p><div className="mt-6"><a href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">Discuss B2B model</a></div></div><ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">{["Attraction of new tenants", "Pre-qualification of clients", "RU/UA/PL/EN client support", "Fast lead flow", "Performance-based cooperation model"].map((point) => (<li key={point} className="rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/20 text-neutral-100/95">• {point}</li>))}</ul></div></div></Container></section><section className="py-16 sm:py-20"><Container><h2 className="font-serif text-3xl sm:text-4xl text-white">How it works</h2><div className="mt-8 grid gap-6 md:grid-cols-3">{steps.map((step, index) => (<article key={step} className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm p-6 shadow-[0_10px_28px_rgba(0,0,0,0.2)]"><div className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Step {index + 1}</div><h3 className="mt-3 text-xl font-semibold text-white">{step}</h3></article>))}</div></Container></section><section id="contact" className="relative isolate py-20"><div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(46,107,127,0.2),transparent_60%)]" /><Container><div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm p-8 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"><h2 className="font-serif text-3xl sm:text-4xl text-white max-w-3xl leading-tight">Long-term partnerships start with the first message</h2><div className="mt-7 flex flex-wrap gap-3"><a href="mailto:kontakt@serpakowski.pl" className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">Write now</a><Button href="tel:+48453053969">Call</Button></div><div className="mt-8 grid gap-3 text-neutral-200/90 sm:grid-cols-2"><a href="mailto:kontakt@serpakowski.pl" className="rounded-2xl bg-white/5 px-4 py-4 ring-1 ring-white/10 hover:bg-white/10 transition">kontakt@serpakowski.pl</a><a href="tel:+48453053969" className="rounded-2xl bg-white/5 px-4 py-4 ring-1 ring-white/10 hover:bg-white/10 transition">+48 453 053 969</a></div></div></Container></section></main><SiteFooterEn /></div>; }
