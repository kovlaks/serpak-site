import type { Metadata } from "next";
import { Container } from "../../../components/layout/Container";
import { SiteFooterEn } from "../../../components/layout/SiteFooterEn";
import { SiteHeaderEn } from "../../../components/layout/SiteHeaderEn";
import { FaqAccordion } from "../../pl/landlord/FaqAccordion";

const title = "Tailored Residential Lease Agreement | SERPAKOWSKI";
const description =
  "Individually tailored residential lease agreements in Poland. Available as a standalone service or included in Najem Solo and Najem Split brokerage.";
const canonical = "https://www.serpakowski.pl/en/umowa-najmu";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: "SERPAKOWSKI Nieruchomości",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary", title, description },
};

const heroBenefits = [
  "Tailored to your property.",
  "Individual rental terms.",
  "Clearly defined rights and responsibilities.",
  "Available as a standalone service.",
];

const templateConsiderations = [
  {
    title: "Every Property Is Different",
    description:
      "The furnishings and equipment, the property’s condition, how utilities are billed and the rules for using the property may all call for tailored clauses.",
  },
  {
    title: "Different Financial Arrangements",
    description:
      "The agreement should clearly set out the rent amount, payment dates, security deposit and any additional charges.",
  },
  {
    title: "Unexpected Situations",
    description:
      "It helps to agree in advance on what to do if something breaks down, damage occurs, payments are overdue or the tenancy ends.",
  },
  {
    title: "Clear Responsibilities",
    description:
      "Clear terms help reduce the risk of misunderstandings between the landlord and tenant.",
  },
];

const templatePoints = [
  "General-purpose wording.",
  "Standard clauses.",
  "Requires individual adaptation.",
  "Limited coverage of specific arrangements.",
];

const individualAgreementPoints = [
  "Prepared for the specific property.",
  "Reflects the agreed rental terms.",
  "Clear payment and property-use arrangements.",
  "Clearly defined responsibilities.",
];

const agreementTopics = [
  {
    title: "Financial Terms",
    points: [
      "Rent amount.",
      "Payment dates and methods.",
      "Administrative charges.",
      "Utility billing.",
      "Arrangements for outstanding payments.",
    ],
  },
  {
    title: "Security Deposit",
    points: [
      "Deposit amount.",
      "Payment deadline and method.",
      "Settlement arrangements.",
      "Return conditions.",
    ],
  },
  {
    title: "Tenancy Period",
    points: [
      "Duration of the agreement.",
      "Tenancy start date.",
      "Renewal arrangements.",
      "Termination provisions consistent with applicable law.",
    ],
  },
  {
    title: "Use of the Property",
    points: [
      "Rules for using the property.",
      "Number of occupants.",
      "Pets.",
      "Smoking.",
      "Subletting and allowing other people to use the property.",
    ],
  },
  {
    title: "Rights and Responsibilities",
    points: [
      "Landlord’s responsibilities.",
      "Tenant’s responsibilities.",
      "Reporting faults.",
      "Repair arrangements.",
      "Responsibility for damage.",
    ],
  },
  {
    title: "Property Handover and Return",
    points: [
      "Condition of the property.",
      "Inventory and equipment.",
      "Meter readings.",
      "Number of keys.",
      "Documentation of handover and return.",
    ],
  },
];

const tailoringFactors = [
  "Characteristics of the property.",
  "Specific financial terms.",
  "Arrangements for furnishings and equipment.",
  "Rules for using the property.",
  "The landlord’s expectations.",
  "Terms agreed with the tenant.",
];

const ownerProfiles = [
  {
    title: "Landlords Managing Their Own Rentals",
    description: "You already have a tenant and need a lease that reflects the terms of the tenancy.",
  },
  {
    title: "First-Time Landlords",
    description: "You want to set out how the tenancy will work before you hand over the property.",
  },
  {
    title: "Landlords Changing Tenants",
    description: "You need a new agreement that reflects the current rental terms.",
  },
  {
    title: "Owners of Multiple Properties",
    description: "You want consistent documentation that is tailored to each property.",
  },
];

const preparationSteps = [
  {
    title: "Initial Contact",
    description: "You tell us about your situation and share the basic details of the property.",
  },
  {
    title: "Agreeing the Terms",
    description: "We discuss the rental terms and the matters the agreement should cover.",
  },
  {
    title: "Preparing the Draft",
    description: "We prepare a tailored draft based on the information you provide and the agreed terms.",
  },
  {
    title: "Reviewing the Document",
    description: "We discuss the draft with you and identify any points that still need to be agreed before signing.",
  },
];

const faqItems = [
  {
    question: "Can I request a tailored agreement without using your brokerage service?",
    answer: [
      "Yes. We can draft a tailored lease agreement as a standalone service.",
    ],
  },
  {
    question: "Do I need to have chosen a tenant already?",
    answer: [
      "No. We can start by establishing the rental terms. The final draft should include both parties’ details and the terms they have agreed.",
    ],
  },
  {
    question: "How does a tailored agreement differ from a standard template?",
    answer: [
      "We draft the agreement for the specific property, taking into account the owner’s circumstances and the terms agreed for the tenancy.",
    ],
  },
  {
    question: "Can the agreement reflect my specific requirements?",
    answer: ["Yes, as long as those requirements are consistent with applicable law and the terms agreed by both parties."],
  },
  {
    question: "Is a tailored lease agreement included in Najem Solo and Najem Split?",
    answer: ["Yes. Drafting a tailored lease agreement is part of both comprehensive brokerage options."],
  },
  {
    question: "How much does the service cost?",
    answer: ["We quote individually after reviewing your circumstances and the scope of the service you need."],
  },
  {
    question: "How long does it take to prepare the agreement?",
    answer: ["We agree on a timeframe with you based on the scope of the document and the availability of the information we need."],
  },
  {
    question: "Can the agreement eliminate all risks associated with letting?",
    answer: [
      "No. A well-drafted agreement sets out the terms of the tenancy and helps reduce the risk of misunderstandings. It cannot guarantee a dispute-free tenancy or full compliance by either party.",
    ],
  },
];

const headingClass = "font-serif text-3xl leading-tight text-white sm:text-4xl";
const bodyClass = "leading-relaxed text-neutral-200/90";
const eyebrowClass = "text-xs uppercase tracking-[0.18em] text-amber-200/80";
const panelClass = "rounded-3xl bg-[#123746] p-6 ring-1 ring-white/10 sm:p-8";
const cardClass = "rounded-2xl bg-[#0A2530] p-5 ring-1 ring-white/10";
const bulletListClass = `mt-3 list-disc space-y-1 pl-5 marker:text-amber-300 ${bodyClass}`;
const primaryCtaClass = "inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-center text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]";
const secondaryCtaClass = "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-center text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10";

export default function TailoredLeaseAgreementPage() {
  return (
    <div lang="en" className="flex min-h-screen flex-col bg-[#0C2D3A] text-neutral-100">
      <SiteHeaderEn />
      <main className="mx-auto w-full max-w-6xl flex-1">
        <Container className="space-y-14 pb-20 pt-28 sm:space-y-20">
          <section className="rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0C2D3A] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-12">
            <div className="space-y-3">
              <p className={eyebrowClass}>SERPAKOWSKI NIERUCHOMOŚCI</p>
              <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
                Tailored Lease Agreement
              </h1>
              <p className="font-serif text-2xl text-white sm:text-3xl">
                Your Property. Your Terms. A Tailored Agreement.
              </p>
            </div>
            <div className="mt-5 grid items-start gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
              <p className={`text-lg ${bodyClass}`}>
                Every property is different, and every tenancy has its own requirements. We prepare individually tailored residential lease agreements based on the property, the owner’s circumstances and the terms agreed with the tenant.
              </p>
              <ul role="list" className="space-y-2 rounded-2xl bg-[#0A2530] p-5 text-sm font-semibold text-amber-100 ring-1 ring-amber-200/25 sm:p-6">
                {heroBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span aria-hidden="true" className="text-amber-300">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <a href="#contact" className={`mt-6 ${primaryCtaClass}`}>Request a Tailored Agreement</a>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Why Might a Standard Lease Template Not Be Enough?</h2>
            <p className={`max-w-3xl ${bodyClass}`}>
              An online lease template can be a starting point. It may need adapting to reflect the landlord’s needs, the specifics of the property and the terms agreed with the tenant.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {templateConsiderations.map(({ title, description }) => (
                <article key={title} className={panelClass}>
                  <h3 className="font-serif text-xl leading-tight text-white">{title}</h3>
                  <p className={`mt-3 text-sm ${bodyClass}`}>{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={panelClass}>
            <h2 className={headingClass}>Standard Template or Tailored Agreement?</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <article className={cardClass}>
                <h3 className="font-serif text-2xl text-white">Standard Template</h3>
                <ul className={bulletListClass}>
                  {templatePoints.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
              <article className="rounded-2xl bg-amber-300/10 p-5 ring-1 ring-amber-200/30">
                <h3 className="font-serif text-2xl text-amber-200">Tailored Agreement</h3>
                <ul className={bulletListClass}>
                  {individualAgreementPoints.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>What Can Your Lease Agreement Cover?</h2>
            <p className={bodyClass}>We decide what to include in the draft based on the property and the terms of the tenancy.</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {agreementTopics.map(({ title, points }) => (
                <article key={title} className={panelClass}>
                  <h3 className="font-serif text-2xl leading-tight text-white">{title}</h3>
                  <ul className={bulletListClass}>
                    {points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 rounded-3xl bg-[#0A2530] p-6 ring-1 ring-white/10 sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-8">
            <div>
              <h2 className={headingClass}>An Agreement Prepared for Your Property</h2>
              <div className={`mt-4 space-y-3 ${bodyClass}`}>
                <p>Before we draft your lease, we learn about your property, what you have agreed with the tenant and the terms that will apply throughout the tenancy.</p>
                <p>We tailor the terms themselves to your tenancy, as well as recording both parties’ details.</p>
              </div>
            </div>
            <div className="rounded-2xl bg-[#123746] p-5 ring-1 ring-amber-200/20 sm:p-6">
              <p className="font-serif text-2xl leading-snug text-amber-100">
                A good lease should reflect how the tenancy will work in practice.
              </p>
              <ul className={bulletListClass}>
                {tailoringFactors.map((factor) => <li key={factor}>{factor}</li>)}
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Who Is This Service For?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {ownerProfiles.map(({ title, description }) => (
                <article key={title} className={panelClass}>
                  <h3 className="font-serif text-2xl leading-tight text-white">{title}</h3>
                  <p className={`mt-3 ${bodyClass}`}>{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>How Do We Prepare Your Agreement?</h2>
            <ol role="list" className="grid list-none gap-4 sm:grid-cols-2">
              {preparationSteps.map(({ title, description }, index) => (
                <li key={title} className={`flex items-start gap-4 ${cardClass}`}>
                  <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-300/20 text-sm font-semibold text-amber-100 ring-1 ring-amber-200/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className={`mt-2 text-sm ${bodyClass}`}>{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className={panelClass}>
            <h2 className={headingClass}>How Much Does a Tailored Lease Agreement Cost?</h2>
            <div className={`mt-4 max-w-3xl space-y-3 ${bodyClass}`}>
              <p>Individual Quote</p>
              <p>The scope and cost depend on your circumstances, the documentation needed and your requirements as the owner. Tell us what you need and we’ll review your request before providing a quote and discussing the terms of the service.</p>
            </div>
            <a href="#contact" className={`mt-6 ${primaryCtaClass}`}>Request a Quote</a>
          </section>

          <section className="rounded-3xl bg-[#0A2530] p-6 ring-1 ring-white/10 sm:p-8">
            <p className={eyebrowClass}>Najem Solo and Najem Split</p>
            <h2 className={`mt-3 ${headingClass}`}>Already Included in Comprehensive Brokerage</h2>
            <div className={`mt-4 max-w-3xl space-y-3 ${bodyClass}`}>
              <p>Both Najem Solo and Najem Split from SERPAKOWSKI Nieruchomości include drafting a tailored lease agreement as part of the comprehensive brokerage service.</p>
              <p>When drafting is part of your agreed brokerage scope, there is no need to order or pay for it separately.</p>
              <p className="font-semibold text-amber-100">Both options cover the same services. The only difference is how you pay the commission.</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/en/najem-solo" className={secondaryCtaClass}>Explore Najem Solo</a>
              <a href="/en/najem-split" className={secondaryCtaClass}>Explore Najem Split</a>
            </div>
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className={headingClass}>Scope of the Standalone Service</h2>
            <div className={`space-y-3 ${bodyClass}`}>
              <p>We prepare a tailored draft of an ordinary residential lease agreement based on the information you provide and the terms agreed by both parties.</p>
              <p>If you need specialist legal advice, you can consult a Polish advocate (adwokat) or attorney-at-law (radca prawny) about the draft.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Frequently Asked Questions</h2>
            <FaqAccordion items={faqItems} />
          </section>

          <section id="contact" className="scroll-mt-28 rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0A2530] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-10">
            <h2 className={headingClass}>Need a Lease Agreement Tailored to Your Property?</h2>
            <p className={`mt-4 max-w-3xl text-lg ${bodyClass}`}>
              Tell us about your property and the proposed rental terms. We will discuss the scope of the service and prepare an individual quote.
            </p>
            <a href="/en#contact" className={`mt-6 ${primaryCtaClass}`}>Request a Tailored Lease Agreement</a>
            <p className={`mt-3 text-sm ${bodyClass}`}>Please mention “Tailored Lease Agreement” in your message.</p>
          </section>
        </Container>
      </main>
      <SiteFooterEn />
    </div>
  );
}
