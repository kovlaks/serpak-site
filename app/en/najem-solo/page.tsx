import type { Metadata } from "next";
import { Container } from "../../../components/layout/Container";
import { SiteFooterEn } from "../../../components/layout/SiteFooterEn";
import { SiteHeaderEn } from "../../../components/layout/SiteHeaderEn";
import { FaqAccordion } from "../../pl/landlord/FaqAccordion";

const title = "Najem Solo - One-Time Letting Commission | SERPAKOWSKI";
const description =
  "Najem Solo offers comprehensive apartment letting services with a single commission payment, no tenant commission, 14 days of support and a conditional reletting discount.";
const canonical = "https://www.serpakowski.pl/en/najem-solo";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical,
    languages: {
      pl: "https://www.serpakowski.pl/pl/najem-solo",
      en: "https://www.serpakowski.pl/en/najem-solo",
    },
  },
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
  "Single commission payment.",
  "PLN 0 agency commission for the tenant.",
  "Up to 100% discount on reletting.",
  "14 days of additional support after handover.",
];

const benefits = [
  {
    title: "Comprehensive Brokerage Service",
    description: "From preparing the listing to drafting a tailored lease agreement and handing over the keys.",
  },
  {
    title: "No Agency Commission for the Tenant",
    description: "The property owner alone pays the agency commission.",
  },
  {
    title: "Up to 100% Discount on Reletting",
    description: "When you let the same property again, you may be able to reduce the new commission under the terms of the brokerage agreement.",
  },
  {
    title: "14 Days of Additional Support",
    description: "As-needed assistance with urgent matters at the start of the tenancy.",
  },
];

const paymentExample = [
  ["Base monthly rent", "PLN 3,600"],
  ["Najem Solo commission", "PLN 3,600 gross"],
  ["Number of payments", "1"],
];

const discountExample = [
  ["New standard commission", "PLN 3,600"],
  ["Discount", "PLN 900"],
  ["New commission after discount", "PLN 2,700"],
];

const discountConditions = [
  "Reletting the same property.",
  "Signing a separate brokerage agreement.",
  "No overdue obligations to the agency on the date the discount is determined.",
  "Actual handover of the property to the new tenant.",
  "Meeting the remaining terms of the brokerage agreement.",
];

const serviceScope: ({ title: string; points: string[] } | { title: string; paragraphs: string[] })[] = [
  {
    title: "Listing Preparation",
    points: [
      "Review of the letting terms.",
      "Advice on the rental price.",
      "Drafting the listing description.",
      "Taking photographs.",
      "Publishing the listing.",
    ],
  },
  {
    title: "Finding a Tenant",
    points: [
      "Handling enquiries.",
      "Arranging viewings.",
      "Preliminary screening of applicants.",
      "Making recommendations to the owner.",
      "Coordinating negotiations.",
    ],
  },
  {
    title: "Tailored Lease Agreement",
    paragraphs: [
      "We draft a lease tailored to your property, the specific letting terms and your interests as the owner.",
      "We help set out the terms for payments, the deposit, use of the property and each party’s responsibilities.",
    ],
  },
  {
    title: "Formal and Legal Assistance",
    paragraphs: [
      "We help you understand the formal and legal requirements, prepare the relevant documents and organise the letting process.",
    ],
  },
  {
    title: "Property Handover",
    points: [
      "Handover report.",
      "Inventory.",
      "Photographic documentation.",
      "Meter readings.",
      "Key handover.",
    ],
  },
];

const cooperationSteps = [
  {
    title: "Submit Your Property.",
    description: "Give us the basic details of the property you want to let.",
  },
  {
    title: "Agree on the Terms.",
    description: "We discuss the letting terms, the terms of our brokerage service and how the commission will be paid.",
  },
  {
    title: "Prepare the Listing and Find a Tenant.",
    description: "We prepare the listing, handle enquiries and arrange viewings.",
  },
  {
    title: "Choose Your Tenant.",
    description: "We make recommendations, and you make the final decision.",
  },
  {
    title: "Prepare Documents and Hand Over the Property.",
    description: "We draft a tailored lease and a handover report, then coordinate the handover of the keys.",
  },
  {
    title: "Pay the Commission Once.",
    description: "You pay the full commission in one payment, on the terms set out in the brokerage agreement.",
  },
];

const standaloneServices = [
  {
    title: "Tailored Lease Agreement",
    description: "A draft lease tailored to your property, circumstances and letting terms.",
  },
  {
    title: "2D Floor Plan",
    description: "A clear property floor plan for use in rental or sales listings.",
  },
];

const faqItems = [
  {
    question: "How much is the Najem Solo commission?",
    answer: [
      "The standard commission is 100% of one month’s base rent, paid in a single payment. We calculate it solely on the base rent, excluding administrative charges, utilities and any other additional fees. If the rent varies, we use the average specified in the agreement.",
    ],
  },
  {
    question: "Does the commission include VAT?",
    answer: ["Yes. The quoted commission is the final gross amount and includes VAT."],
  },
  {
    question: "Who pays the commission?",
    answer: ["The property owner alone pays the agency commission."],
  },
  {
    question: "Does the tenant pay a commission?",
    answer: ["The tenant’s agency commission is PLN 0."],
  },
  {
    question: "What does Najem Solo include?",
    answer: [
      "It includes preparing and publishing the listing, finding and conducting preliminary screening of prospective tenants, drafting a tailored lease agreement, providing formal and legal assistance, coordinating the property handover and providing 14 days of additional support after handover.",
    ],
  },
  {
    question: "Do you draft a tailored lease agreement?",
    answer: [
      "Yes. We draft a lease tailored to the property, the letting terms and the owner’s interests.",
    ],
  },
  {
    question: "Do I choose the tenant myself?",
    answer: ["Yes. We make recommendations, and you make the final decision on the tenant and the terms of the lease."],
  },
  {
    question: "Can I get a discount when reletting?",
    answer: [
      "Yes. The discount applies when you let the same property again under a separate brokerage agreement. On the date the property is actually handed over to the new tenant, we verify that there are no overdue obligations to the agency and determine the discount under the terms of the agreement.",
    ],
  },
  {
    question: "How is the Najem Solo discount calculated?",
    answer: [
      "We divide the one-time commission payment into 12 notional monthly portions solely to calculate the discount. On the date the property is actually handed over to the new tenant, we add up the value of the future portions from all applicable previous schedules for that property.",
    ],
  },
  {
    question: "Does the time spent finding a new tenant affect the discount?",
    answer: [
      "Yes. The accounting period continues during the search, so there may be fewer future portions left to count towards the discount on the day the property is handed over.",
    ],
  },
  {
    question: "Can the discount reach 100%?",
    answer: [
      "Yes. If the calculated discount equals or exceeds the new commission, the new commission is PLN 0. Any unused amount is neither paid out nor carried forward as a separate balance for future services.",
    ],
  },
  {
    question: "Can I pay in instalments?",
    answer: ["Yes. With Najem Split, you can pay the commission in 12 interest-free monthly instalments."],
  },
  {
    question: "What is the difference between Najem Solo and Najem Split?",
    answer: [
      "The only difference is how you pay. The scope of services, standard of service, total standard commission and additional benefits are the same under both options.",
    ],
  },
  {
    question: "Is the brokerage agreement exclusive?",
    answer: [
      "Yes. The initial exclusivity period lasts 30 calendar days, subject to your statutory rights. The agreement then continues for an indefinite period and can be terminated without notice.",
      "After the brokerage arrangement ends, the agreement provides for a 60-day period covering applicants the agency previously assisted. The agreement sets out the detailed terms.",
    ],
  },
  {
    question: "Will I receive support after the property handover?",
    answer: [
      "Yes. For 14 days after handover, we provide as-needed help with urgent matters involving the start of the tenancy, the property handover and the documents we prepared.",
    ],
  },
  {
    question: "Does the commission include ongoing property management?",
    answer: [
      "The commission covers brokerage and 14 days of as-needed support after handover. Additional assistance during the tenancy can be agreed and paid for separately.",
    ],
  },
  {
    question: "Are there any additional costs?",
    answer: [
      "Costs for third-party services, paid promotions, translations, notarial services or specialist documentation must be agreed in advance. Statutory late-payment interest may apply to overdue payments.",
    ],
  },
  {
    question: "Do you guarantee that you will find a tenant?",
    answer: ["We cannot guarantee that the property will be let within a specified time or that the tenant will fulfil their obligations in the future."],
  },
];

const headingClass = "font-serif text-3xl leading-tight text-white sm:text-4xl";
const bodyClass = "leading-relaxed text-neutral-200/90";
const eyebrowClass = "text-xs uppercase tracking-[0.18em] text-amber-200/80";
const panelClass = "rounded-3xl bg-[#123746] p-6 ring-1 ring-white/10 sm:p-8";
const cardClass = "rounded-2xl bg-[#0A2530] p-5 ring-1 ring-white/10";
const primaryCtaClass = "inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-center text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]";
const secondaryCtaClass = "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-center text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10";

export default function NajemSoloPage() {
  return (
    <div lang="en" className="flex min-h-screen flex-col bg-[#0C2D3A] text-neutral-100">
      <SiteHeaderEn />
      <main className="mx-auto w-full max-w-6xl flex-1">
        <Container className="space-y-14 pb-20 pt-28 sm:space-y-20">
          <section className="rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0C2D3A] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-12">
            <div className="grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
              <div className="space-y-3">
                <p className={eyebrowClass}>SERPAKOWSKI NIERUCHOMOŚCI</p>
                <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl">Najem Solo</h1>
                <p className="font-serif text-2xl text-white sm:text-3xl">One Commission. One Payment.</p>
              </div>
              <p className="self-center rounded-3xl bg-[#0A2530] p-5 text-lg font-semibold text-white ring-1 ring-amber-200/25 sm:p-6 lg:row-span-2">
                <strong className="block font-serif text-5xl font-normal leading-none text-amber-300 sm:text-7xl">100%</strong>
                <span className="mt-3 block">One month’s base rent</span>
              </p>
              <div className="space-y-5">
                <p className={`text-lg ${bodyClass}`}>
                  Comprehensive apartment letting services with a single commission payment. Full brokerage support, individually tailored service and additional benefits when reletting the same property.
                </p>
                <ul className="space-y-2 text-sm font-semibold text-amber-100">
                  {heroBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="text-amber-300" aria-hidden="true">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={primaryCtaClass}>List Your Property</a>
              </div>
            </div>
            <p className="mt-6 border-t border-white/10 pt-4 text-sm leading-relaxed text-neutral-200/90">
              The standard gross commission equals one month’s base rent, excluding administrative charges, utilities and other additional fees.
            </p>
          </section>

          <section className={panelClass}>
            <h2 className={headingClass}>Simple, Transparent Pricing</h2>
            <div className={`mt-5 max-w-3xl space-y-3 ${bodyClass}`}>
              <p>The standard commission is 100% of one month’s base rent. This is the final gross amount, including VAT.</p>
              <p>The property owner pays the full commission in a single payment. The tenant’s agency commission is PLN 0.</p>
              <p>We calculate the commission using only the base rent payable to the owner, excluding administrative charges, utilities and other additional fees. If the base rent varies, we use the average specified in the brokerage agreement.</p>
              <p>The agency earns the commission for successful brokerage once the lease agreement has been concluded and the property has actually been handed over to the tenant, on the terms set out in the brokerage agreement.</p>
            </div>
            <dl className="mt-6 grid gap-3 sm:grid-cols-3">
              {paymentExample.map(([label, amount]) => (
                <div key={label} className={cardClass}>
                  <dt className="text-sm text-neutral-200/90">{label}</dt>
                  <dd className="mt-2 font-serif text-2xl text-white">{amount}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Everything You Need to Let Your Property</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map(({ title, description }) => (
                <article key={title} className={panelClass}>
                  <h3 className="font-serif text-2xl leading-tight text-amber-300">{title}</h3>
                  <p className={`mt-3 text-sm ${bodyClass}`}>{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-[#0A2530] p-6 ring-1 ring-white/10 sm:p-8">
            <h2 className={headingClass}><span className="text-amber-300">PLN 0</span> Agency Commission for the Tenant</h2>
            <div className={`mt-4 max-w-3xl space-y-3 ${bodyClass}`}>
              <p>The property owner pays the agency’s full fee. The tenant pays no agency commission.</p>
              <p>With no agency commission for tenants, the property may be more appealing to people comparing rental listings.</p>
            </div>
          </section>

          <section className="space-y-6">
            <div className="max-w-3xl">
              <h2 className={headingClass}>Has Your Tenant Moved Out Early? You May Qualify for a Reduced Commission on Reletting.</h2>
              <div className={`mt-4 space-y-3 ${bodyClass}`}>
                <p>We divide the one-time Najem Solo commission into 12 notional monthly portions solely to calculate the discount on reletting. The commission is still paid in one payment, and this calculation creates no new obligations or requirement to pay the commission again. With Najem Split, we use the actual instalment schedules.</p>
                <p>We calculate the discount on the date the property is actually handed over to the new tenant, even if the lease was signed earlier. The accounting period continues uninterrupted, even if the tenant moves out early, the lease ends or the property is vacant. It also includes the time spent finding the next tenant and preparing the new lease.</p>
                <p>The value of the remaining future portions reduces the new brokerage commission. Previous obligations remain in force, and any commission already paid is non-refundable. The discount leaves the rent unaffected.</p>
              </div>
            </div>

            <div className={panelClass}>
              <h3 className="font-serif text-2xl text-white">Example</h3>
              <div className={`mt-3 space-y-2 ${bodyClass}`}>
                <p>The base rent is <strong className="text-white">PLN 3,600</strong> and the original standard commission is <strong className="text-white">PLN 3,600 gross</strong>. Each of the 12 accounting portions is worth <strong className="text-white">PLN 300</strong>.</p>
                <p>The tenant moves out after 8 months. Finding the next tenant takes another month. On the day the property is handed over to the new tenant, 3 future portions remain.</p>
              </div>
              <figure className={`my-6 ${cardClass}`}>
                <div aria-hidden="true" className="grid grid-cols-6 gap-1 sm:grid-cols-12 sm:gap-2">
                  {Array.from({ length: 12 }, (_, index) => (
                    <span
                      key={index}
                      className={`flex h-9 items-center justify-center rounded text-xs font-semibold sm:h-11 sm:rounded-lg sm:text-sm ${
                        index < 8
                          ? "bg-white/10 text-white ring-1 ring-inset ring-white/15"
                          : index === 8
                            ? "bg-amber-300/20 text-amber-100 ring-1 ring-inset ring-amber-200/30"
                            : "bg-amber-300 text-[#0C2D3A]"
                      }`}
                    >
                      {index + 1}
                    </span>
                  ))}
                </div>
                <figcaption className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
                  <span className="text-neutral-100">Months 1–8 · Previous tenancy</span>
                  <span className="text-amber-100">Month 9 · Tenant search</span>
                  <span className="text-amber-300">Months 10–12 · Portions counted towards the discount</span>
                </figcaption>
              </figure>
              <dl className="grid gap-3 sm:grid-cols-3">
                {discountExample.map(([label, amount], index) => (
                  <div key={label} className={cardClass}>
                    <dt className="text-sm text-neutral-200/90">{label}</dt>
                    <dd className={`mt-2 font-serif text-2xl ${index === 0 ? "text-white" : "text-amber-300"}`}>{amount}</dd>
                  </div>
                ))}
              </dl>
              <p className={`mt-4 ${bodyClass}`}>The three remaining portions of PLN 300 each give a <strong className="text-amber-300">PLN 900 discount</strong>. This reduces the new commission from <strong className="text-amber-300">PLN 3,600 to PLN 2,700</strong>.</p>
              <p className="mt-3 font-serif text-xl text-white">Najem Solo · Single payment of PLN 2,700.</p>
              <p className="mt-1 font-serif text-xl text-white">Najem Split · 12 instalments of PLN 225, according to the payment schedule set out in the agreement.</p>
              <p className={`mt-4 text-sm ${bodyClass}`}>
                This example assumes that the base rent stays the same, there are no overdue payments and the terms of the brokerage agreement are met.
              </p>
            </div>
          </section>

          <section className={panelClass}>
            <h2 className={headingClass}>Up to a <span className="text-amber-300">100% Discount</span> on Your Next Brokerage Commission</h2>
            <div className={`mt-4 max-w-3xl space-y-3 ${bodyClass}`}>
              <p>On the date the property is actually handed over to the new tenant, we add up the value of the future portions from all applicable previous schedules for that property, regardless of the payment option. This includes portions paid early and portions counted towards a previous discount whose dates under the original schedule are still in the future.</p>
              <p>The discount can cover up to 100% of the new commission. If the future portions add up to at least the new commission, the new commission is PLN 0. Any unused discount is neither paid out in cash nor carried forward as a separate balance for future services.</p>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {discountConditions.map((condition) => (
                <li key={condition} className={`flex items-start gap-3 ${cardClass} ${bodyClass}`}>
                  <span aria-hidden="true" className="text-amber-300">✓</span>
                  {condition}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Comprehensive Apartment Letting Services</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {serviceScope.map((service) => (
                <article key={service.title} className={panelClass}>
                  <h3 className="font-serif text-2xl text-white">{service.title}</h3>
                  {"points" in service ? (
                    <ul className={`mt-3 list-disc space-y-1 pl-5 marker:text-amber-300 ${bodyClass}`}>
                      {service.points.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                  ) : (
                    <div className={`mt-3 space-y-2 ${bodyClass}`}>
                      {service.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                  )}
                </article>
              ))}
              <p className="self-center rounded-2xl bg-[#0A2530] p-6 font-semibold leading-relaxed text-amber-100 ring-1 ring-white/10 sm:p-8">
                The property owner always makes the final decision on the tenant and the terms of the lease.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>How Does Najem Solo Work?</h2>
            <ol role="list" className="grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cooperationSteps.map(({ title, description }, index) => (
                <li key={title} className={`flex items-start gap-4 ${cardClass}`}>
                  <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-300/20 text-sm font-semibold text-amber-100 ring-1 ring-amber-200/30">{index + 1}</span>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className={`mt-2 text-sm ${bodyClass}`}>{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <div className="grid gap-6 lg:grid-cols-2">
            <section className={panelClass}>
              <h2 className="font-serif text-3xl leading-tight text-white">Our Support Continues After Handover.</h2>
              <p className="mt-4 font-serif text-2xl text-white"><strong className="font-normal text-amber-300">14 days</strong> of additional support</p>
              <div className={`mt-4 space-y-3 ${bodyClass}`}>
                <p>For 14 days from the actual handover, we provide as-needed assistance with urgent matters involving the start of the tenancy, the property handover and the documents we prepared.</p>
                <p>This support is included in the Najem Solo commission.</p>
                <p>This support excludes ongoing property management and round-the-clock emergency service.</p>
              </div>
            </section>
            <section className="self-start rounded-3xl bg-[#0A2530] p-6 ring-1 ring-white/10 sm:p-8">
              <p className={eyebrowClass}>Optional Service</p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-white">Rental Assistant</h2>
              <div className={`mt-4 space-y-3 ${bodyClass}`}>
                <p className="font-semibold text-white">Need support during the tenancy too?</p>
                <p>You can arrange additional help with day-to-day matters while the property is let.</p>
                <p>We agree the scope of support with you individually.</p>
                <p>This service is charged separately from the Najem Solo commission.</p>
              </div>
            </section>
          </div>

          <section className="space-y-5">
            <h2 className={headingClass}>Letting Your Property Yourself?</h2>
            <p className={bodyClass}>You can order either of these services separately from our comprehensive brokerage service.</p>
            <div className="grid gap-4 md:grid-cols-3">
              {standaloneServices.map(({ title, description }) => (
                <article key={title} className={cardClass}>
                  <h3 className="font-serif text-xl text-white">{title}</h3>
                  <p className={`mt-2 text-sm ${bodyClass}`}>{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={panelClass}>
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className={eyebrowClass}>Alternative Payment Option</p>
                <h2 className={`mt-3 ${headingClass}`}>Prefer to Pay the Commission in Instalments?</h2>
                <p className={`mt-3 ${bodyClass}`}>With Najem Solo, you pay the commission once. With Najem Split, you pay it in 12 interest-free monthly instalments. The scope of services, total standard commission and additional benefits are the same.</p>
                <p className="mt-3 font-semibold text-amber-100">Same Service. Same Price. Different Payment Method.</p>
              </div>
              <a href="/en/najem-split" className={`self-start lg:shrink-0 lg:self-center ${secondaryCtaClass}`}>Explore Najem Split</a>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Frequently Asked Questions</h2>
            <FaqAccordion items={faqItems} />
          </section>

          <section id="contact" className="scroll-mt-28 rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0A2530] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-10">
            <h2 className={headingClass}>Have a Property to Rent Out?</h2>
            <p className={`mt-4 text-lg ${bodyClass}`}>Choose comprehensive letting services with a single commission payment.</p>
            <a href="/en#contact" className={`mt-6 ${primaryCtaClass}`}>Ask About Najem Solo</a>
            <p className={`mt-3 text-sm ${bodyClass}`}>Please mention “Najem Solo” in your message.</p>
          </section>
        </Container>
      </main>
      <SiteFooterEn />
    </div>
  );
}
