import type { Metadata } from "next";
import { Container } from "../../../components/layout/Container";
import { SiteFooterEn } from "../../../components/layout/SiteFooterEn";
import { SiteHeaderEn } from "../../../components/layout/SiteHeaderEn";
import { FaqAccordion } from "../../pl/landlord/FaqAccordion";
import CommissionCalculator from "./CommissionCalculator";

const title = "Najem Split - 12 Interest-Free Instalments | SERPAKOWSKI";
const description =
  "Najem Split offers apartment letting brokerage with a commission in 12 interest-free instalments, PLN 0 tenant commission and a conditional reletting discount.";
const canonical = "https://www.serpakowski.pl/en/najem-split";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  robots: { index: false, follow: false },
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

const benefits = [
  {
    figure: "12",
    title: "Interest-Free Instalments",
    description: "One commission spread over 12 monthly payments.",
  },
  {
    figure: "PLN 0",
    title: "Tenant Commission",
    description: "We charge the tenant no agency commission for letting your property.",
  },
  {
    figure: "Up to 100%",
    title: "Reletting Discount",
    description: "You may qualify for a discount on the new commission when you let the property again, under the terms of the brokerage agreement.",
  },
  {
    figure: "14 Days",
    title: "of Additional Support",
    description: "As-needed assistance with urgent matters at the start of the tenancy.",
  },
];

const heroBenefits = [
  "PLN 0 agency commission for the tenant.",
  "Conditional discount on reletting.",
  "14 days of support after handover.",
];

const exampleAmounts = [
  ["New standard commission", "PLN 3,600"],
  ["Discount", "PLN 900"],
  ["New commission after discount", "PLN 2,700"],
];

const discountConditions = [
  "The discount applies when you relet the same property.",
  "Each new instruction requires a separate brokerage agreement.",
  "We calculate the discount on the date the property is actually handed over to the new tenant.",
  "We count the future portions of all applicable previous schedules for that property, including future instalments paid early.",
  "There must be no overdue obligations to the agency on the date the property is actually handed over to the new tenant.",
  "The discount can cover up to 100% of the new commission.",
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
      "As part of the brokerage service, we help you understand the formal and legal matters involved in letting and prepare the relevant documents.",
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
    title: "Prepare the Documents and Hand Over the Property.",
    description: "We draft a tailored lease and a handover report, then coordinate the handover of the keys.",
  },
  {
    title: "Pay the Commission in 12 Monthly Instalments.",
    description: "You pay the interest-free instalments according to the schedule set out in the brokerage agreement.",
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
    question: "How much is the commission?",
    answer: [
      "The total standard gross commission equals one month’s base rent and is spread over 12 interest-free monthly instalments.",
    ],
  },
  {
    question: "What does 8.33% represent?",
    answer: ["Approximately 8.33% of the monthly base rent represents one of 12 instalments. The final instalment may differ due to rounding."],
  },
  {
    question: "Does the commission include VAT?",
    answer: ["Yes. The quoted commission is the final gross amount and includes VAT."],
  },
  {
    question: "Do administrative charges and utilities count towards the commission?",
    answer: [
      "We calculate the commission solely on the base rent, excluding administrative charges, utilities and other additional costs. If the base rent varies, we use the average specified in the brokerage agreement.",
    ],
  },
  {
    question: "When do I pay the first instalment?",
    answer: ["For the initial brokerage engagement, the first instalment is due within 7 days of actual handover to the tenant. Later commissions follow the sequential payment schedules set out in the brokerage agreement."],
  },
  {
    question: "Do I pay a commission if the property is never let?",
    answer: [
      "The agency earns the commission for successful brokerage once the lease has been concluded on the terms set out in the brokerage agreement and the property has actually been handed over to the tenant. Additional costs agreed in advance and any amounts payable under applicable law may be settled separately.",
    ],
  },
  {
    question: "Does the tenant pay a commission?",
    answer: ["The tenant’s agency commission is PLN 0. The property owner alone pays the agency commission."],
  },
  {
    question: "What happens if the tenant moves out early?",
    answer: [
      "If the tenancy ends early, the previous commission remains payable and its payment schedule continues. We calculate the discount on the next commission on the date the property is actually handed over to the new tenant. The time spent finding a new tenant counts towards the accounting period.",
    ],
  },
  {
    question: "Can the discount reach 100%?",
    answer: [
      "Yes. If the calculated discount equals or exceeds the new commission, the commission for the new service is PLN 0. Any unused discount is neither paid out nor carried forward as a separate balance for future services. Previous obligations remain payable and any commission already paid is non-refundable.",
    ],
  },
  {
    question: "Can I pay off the commission early?",
    answer: [
      "Yes. Future instalments paid early can still count towards the discount. Early repayment does not bring forward the new payment schedule.",
    ],
  },
  {
    question: "Is the brokerage agreement exclusive?",
    answer: [
      "Yes. The initial exclusivity period lasts 30 calendar days, subject to your statutory rights. The agreement then continues for an indefinite period and can be terminated without notice.",
    ],
  },
  {
    question: "Can commission terms still apply after the brokerage agreement ends?",
    answer: [
      "Yes. The agreement provides for a 60-day period covering applicants the agency previously assisted. The agreement sets out the detailed terms.",
    ],
  },
  {
    question: "Do I choose the tenant myself?",
    answer: ["Yes. The property owner makes the final decision."],
  },
  {
    question: "Do you draft a tailored lease agreement?",
    answer: ["Yes. Drafting a tailored lease is part of the brokerage service."],
  },
  {
    question: "Do you manage the property for the full 12 months?",
    answer: [
      "The service covers brokerage and 14 days of support after handover. The 12 months refer to the payment schedule. You can arrange longer-term support separately.",
    ],
  },
  {
    question: "Are there any additional costs?",
    answer: [
      "Paying in instalments does not increase the commission. Costs for third-party services, paid promotions, translations, notarial services or specialist documentation must be agreed in advance. Statutory late-payment interest may apply to overdue payments.",
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

export default function NajemSplitPage() {
  return (
    <div lang="en" className="flex min-h-screen flex-col bg-[#0C2D3A] text-neutral-100">
      <SiteHeaderEn />
      <main className="mx-auto w-full max-w-6xl flex-1">
        <Container className="space-y-14 pb-20 pt-28 sm:space-y-20">
          <section className="rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0C2D3A] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-12">
            <div className="grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
              <div className="space-y-3">
                <p className={eyebrowClass}>SERPAKOWSKI NIERUCHOMOŚCI</p>
                <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl">Najem Split</h1>
                <p className="font-serif text-2xl text-white sm:text-3xl">Split the Commission. Not the Quality.</p>
              </div>
              <p className="self-center rounded-3xl bg-[#0A2530] p-5 text-lg font-semibold text-white ring-1 ring-amber-200/25 sm:p-6 lg:row-span-2">
                <strong className="block font-serif text-5xl font-normal leading-none text-amber-300 sm:text-7xl">8.33%</strong>
                <span className="mt-3 block">of the monthly base rent per instalment*</span>
              </p>
              <div className="space-y-5">
                <p className={`text-lg ${bodyClass}`}>
                  Rent out your property with professional brokerage support. Instead of paying the entire commission upfront, spread it over 12 interest-free monthly instalments.
                </p>
                <ul className="space-y-2 text-sm font-semibold text-amber-100">
                  {heroBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="text-amber-300" aria-hidden="true">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a href="#calculator" className={primaryCtaClass}>Calculate Your Instalment</a>
                  <a href="#contact" className={secondaryCtaClass}>List Your Property</a>
                </div>
              </div>
            </div>
            <p className="mt-6 border-t border-white/10 pt-4 text-sm leading-relaxed text-neutral-200/90">
              *Approximately 8.33% of the monthly base rent represents one of 12 instalments. The total standard gross commission equals one month’s base rent. Instalments remain payable even if the tenancy ends early.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>What Najem Split Offers</h2>
            <p className={`max-w-3xl ${bodyClass}`}>
              Najem Solo and Najem Split offer the same scope of services, total standard commission and additional benefits. The only difference is how you pay.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map(({ figure, title, description }) => (
                <article key={figure} className={panelClass}>
                  <h3 className="font-semibold text-white">
                    <span className="mb-2 block font-serif text-3xl font-normal leading-tight text-amber-300">{figure}</span>{" "}
                    {title}
                  </h3>
                  <p className={`mt-3 text-sm ${bodyClass}`}>{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={panelClass}>
            <h2 className={headingClass}>One Commission. <span className="text-amber-300">12 Instalments.</span> 0% Interest.</h2>
            <div className={`mt-5 max-w-3xl space-y-3 ${bodyClass}`}>
              <p>With a traditional payment model, the agency commission is often due in one payment.</p>
              <p>The standard commission is 100% of one month’s base rent. With Najem Split, the owner can spread that cost over 12 months with no interest for paying in instalments.</p>
              <p>We calculate the commission using only the base rent payable to the owner, excluding administrative charges, utilities and other additional costs. If the base rent varies, we use the average specified in the brokerage agreement.</p>
              <p>All quoted commission amounts are final gross amounts, including VAT.</p>
              <p>The agency earns the commission for successful brokerage once the lease has been concluded and the property has actually been handed over to the tenant, under the terms of the brokerage agreement.</p>
              <p>For the initial brokerage engagement, the first instalment is due within 7 days of actual handover to the tenant.</p>
            </div>
            <p className={`mt-6 ${bodyClass}`}>With a monthly base rent of <strong className="text-white">PLN 3,600</strong>, the standard commission is <strong className="text-white">PLN 3,600 gross</strong>.</p>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className={cardClass}>
                <dt className="text-sm text-neutral-200/90">Najem Solo · One Payment</dt>
                <dd className="mt-2 font-serif text-2xl text-white sm:text-3xl">PLN 3,600</dd>
              </div>
              <div className="rounded-2xl bg-amber-300/10 p-5 ring-1 ring-amber-200/30">
                <dt className="text-sm font-semibold text-amber-100">Najem Split</dt>
                <dd className="mt-2 font-serif text-2xl text-amber-300 sm:text-3xl">12 instalments of PLN 300</dd>
              </div>
            </dl>
            <p className={`mt-4 text-sm ${bodyClass}`}>Interest for instalment payments in this example is PLN 0. Both options cost the same.</p>
          </section>

          <section id="calculator" className="scroll-mt-28 space-y-5">
            <h2 className={headingClass}>Calculate Your Monthly Instalment</h2>
            <p className={bodyClass}>See how much the standard Najem Split commission would be based on your monthly base rent.</p>
            <CommissionCalculator />
          </section>

          <section className="grid gap-5 rounded-3xl bg-[#0A2530] p-6 ring-1 ring-white/10 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-8">
            <div>
              <h2 className={headingClass}><span className="text-amber-300">PLN 0</span> Agency Commission for the Tenant</h2>
              <div className={`mt-4 space-y-3 ${bodyClass}`}>
                <p>The first month’s rent, the deposit and moving costs are already significant expenses for someone looking for a home.</p>
                <p>With Najem Split, the tenant pays our agency no commission for letting your property.</p>
                <p>This can make your listing more attractive to prospective tenants.</p>
                <p>The property owner alone pays the brokerage commission in 12 monthly instalments.</p>
              </div>
            </div>
            <p className="rounded-2xl bg-[#123746] p-5 font-serif text-2xl leading-snug text-amber-100 ring-1 ring-amber-200/20 sm:p-6">
              Lower upfront costs for tenants can help your listing appeal to more applicants.
            </p>
          </section>

          <section className="space-y-6">
            <div className="max-w-3xl">
              <h2 className={headingClass}>Has Your Tenant Moved Out Early?</h2>
              <p className="mt-4 text-lg font-semibold text-amber-100">You may qualify for a reduced commission when you let the property again.</p>
              <div className={`mt-4 space-y-3 ${bodyClass}`}>
                <p>A tenant may change jobs, move to another city or end the tenancy earlier than expected.</p>
                <p>Under either payment option, you may qualify for a discount on the new commission when you relet the same property. We add up the value of the future portions from all applicable previous schedules as of the date the property is actually handed over to the new tenant. We use the handover date even if the new lease was signed earlier.</p>
                <p>We base the discount on a 12-month schedule for each commission. For Najem Split, we use the instalment schedule. For Najem Solo, we divide the one-time commission into 12 notional monthly portions solely to calculate the discount.</p>
                <p>The accounting period and existing payment schedules continue even if the tenancy ends early, the property is vacant, a tenant search is under way or the new lease is being prepared. The time spent finding the next tenant counts towards the accounting period.</p>
                <p>The discount reduces the new commission only. Previous obligations remain in force and any commission already paid is non-refundable.</p>
              </div>
            </div>
            <div className={panelClass}>
              <h3 className="font-serif text-2xl text-white">Reletting Example</h3>
              <div className={`mt-3 space-y-2 ${bodyClass}`}>
                <p>The monthly base rent is <strong className="text-white">PLN 3,600</strong>.</p>
                <p>The original commission of <strong className="text-white">PLN 3,600</strong> is split into <strong className="text-white">12 instalments of PLN 300</strong>.</p>
                <p>The tenant moves out after 8 months. Finding the next tenant takes another month. On the date the property is actually handed over to the new tenant, 3 future instalments of PLN 300 remain, giving a discount of PLN 900.</p>
              </div>
              <figure className={`my-6 ${cardClass}`}>
                <div aria-hidden="true" className="grid grid-cols-6 gap-1 sm:grid-cols-12 sm:gap-2">
                  {Array.from({ length: 12 }, (_, index) => (
                    <span
                      key={index}
                      className={`flex h-9 items-center justify-center rounded text-[10px] font-semibold sm:h-11 sm:rounded-lg sm:text-sm ${
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
                  <span className="text-neutral-100">Months 1–8 · Previous Tenancy</span>
                  <span className="text-amber-100">Month 9 · Tenant Search</span>
                  <span className="text-amber-300">Months 10–12 · Three Future Instalments</span>
                </figcaption>
              </figure>
              <dl className="grid gap-3 sm:grid-cols-3">
                {exampleAmounts.map(([label, amount]) => (
                  <div key={label} className={cardClass}>
                    <dt className="text-sm text-neutral-200/90">{label}</dt>
                    <dd className="mt-2 font-serif text-2xl text-white">{amount}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 font-serif text-2xl text-amber-300">Najem Split · 12 new instalments of PLN 225</p>
              <p className="mt-2 font-serif text-xl text-white">Najem Solo · One payment of PLN 2,700</p>
              <p className={`mt-3 text-sm ${bodyClass}`}>
                This example assumes that the base rent stays the same, there are no overdue payments, and you sign a separate brokerage agreement and meet its terms. Previous instalments remain due according to their schedule. The new agreement sets the due dates for the new instalments.
              </p>
            </div>
          </section>

          <section className={panelClass}>
            <h2 className={headingClass}>Up to a <span className="text-amber-300">100% Discount</span> on the New Commission</h2>
            <p className={`mt-4 max-w-3xl ${bodyClass}`}>Future portions from several previous schedules can cover the entire new commission. When we calculate another discount, we also count portions that were used for an earlier discount if their dates under the original schedules are still in the future.</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {discountConditions.map((condition) => (
                <li key={condition} className={`flex items-start gap-3 ${cardClass} ${bodyClass}`}>
                  <span aria-hidden="true" className="text-amber-300">✓</span>
                  {condition}
                </li>
              ))}
            </ul>
            <p className={`mt-5 max-w-3xl ${bodyClass}`}>
              If the calculated discount equals or exceeds the new commission, the new commission is PLN 0. We neither pay out unused discounts nor carry them forward as a separate balance for future services. You and the agency must agree to the new instruction, and you must meet the remaining terms of the brokerage agreement to qualify for the discount.
            </p>
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className={headingClass}>Sequential Payment Schedules for Subsequent Commissions</h2>
            <div className={`space-y-3 ${bodyClass}`}>
              <p>Payment schedules for successive commissions on the same property do not overlap.</p>
              <p>You begin paying the new commission under the terms of the brokerage agreement after all applicable previous payment schedules have ended.</p>
              <p>Paying a previous commission early does not bring forward the due dates for later instalments.</p>
              <p>Previous payment schedules continue when a tenant moves out and while the property is vacant.</p>
              <p>If all previous schedules ended before the property was handed over to the new tenant, the first new instalment is due within 7 days of handover.</p>
            </div>
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
            <h2 className={headingClass}>How Does Najem Split Work?</h2>
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
              <h2 className="font-serif text-3xl leading-tight text-white">Our Support Continues After Handover</h2>
              <p className="mt-4 font-serif text-2xl text-white"><strong className="font-normal text-amber-300">14 Days</strong> of Additional Support</p>
              <div className={`mt-4 space-y-3 ${bodyClass}`}>
                <p>For 14 days from handover, we provide as-needed assistance with urgent practical matters involving the start of the tenancy, the property handover and the documents we prepared.</p>
                <p>This support is part of the brokerage service under either payment option.</p>
                <p>This support excludes ongoing property management and round-the-clock emergency service. The support period ends after 14 days, regardless of the remaining instalments.</p>
              </div>
            </section>
            <section className="self-start rounded-3xl bg-[#0A2530] p-6 ring-1 ring-white/10 sm:p-8">
              <p className={eyebrowClass}>Optional Service</p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-white">Rental Assistant</h2>
              <div className={`mt-4 space-y-3 ${bodyClass}`}>
                <p className="font-semibold text-white">Need support during the tenancy too?</p>
                <p>You can arrange additional help with day-to-day matters while the property is let.</p>
                <p>We agree the scope of support with you individually.</p>
                <p>We charge separately for this service, outside the Najem Split commission.</p>
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

          <section className={`${panelClass} gap-6 lg:flex lg:items-center lg:justify-between`}>
            <div className="max-w-3xl">
              <p className={eyebrowClass}>Alternative Payment Option</p>
              <h2 className={`mt-2 ${headingClass}`}>Prefer to Pay Once?</h2>
              <p className={`mt-3 ${bodyClass}`}>
                Najem Solo offers the same scope of services and additional benefits for the same standard commission. You pay it in one payment.
              </p>
            </div>
            <a href="/en/najem-solo" className={`mt-5 shrink-0 lg:mt-0 ${secondaryCtaClass}`}>Explore Najem Solo</a>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Frequently Asked Questions</h2>
            <FaqAccordion items={faqItems} />
          </section>

          <section id="contact" className="scroll-mt-28 rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0A2530] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-10">
            <h2 className={headingClass}>Have a Property to Rent Out?</h2>
            <p className={`mt-4 text-lg ${bodyClass}`}>Ask us how Najem Split could work for your property.</p>
            <p className="mt-3 max-w-2xl font-semibold leading-relaxed text-amber-100">
              12 interest-free monthly instalments. PLN 0 agency commission for the tenant. A conditional discount on reletting.
            </p>
            <a href="/en#contact" className={`mt-6 ${primaryCtaClass}`}>Ask About Najem Split</a>
            <p className={`mt-3 text-sm ${bodyClass}`}>Please mention “Najem Split” in your message.</p>
            <p className={`mt-4 max-w-2xl border-t border-white/10 pt-4 text-sm ${bodyClass}`}>
              Najem Split is currently offered as a pilot service. Submitting an enquiry does not create an agreement or guarantee that we will accept the instruction.
            </p>
          </section>
        </Container>
      </main>
      <SiteFooterEn />
    </div>
  );
}
