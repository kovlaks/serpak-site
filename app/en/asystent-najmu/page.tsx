import type { Metadata } from "next";
import { Container } from "../../../components/layout/Container";
import { SiteFooterEn } from "../../../components/layout/SiteFooterEn";
import { SiteHeaderEn } from "../../../components/layout/SiteHeaderEn";
import { FaqAccordion } from "../../pl/landlord/FaqAccordion";
import SubscriptionCalculator from "./SubscriptionCalculator";

const title = "Rental Assistant - 5% Monthly Subscription | SERPAKOWSKI";
const description =
  "Rental Assistant provides individually agreed support for landlords during an ongoing tenancy. Monthly subscription: 5% of base rent, VAT included. Available separately from brokerage.";
const canonical = "https://www.serpakowski.pl/en/asystent-najmu";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical,
    languages: {
      pl: "https://www.serpakowski.pl/pl/asystent-najmu",
      en: "https://www.serpakowski.pl/en/asystent-najmu",
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
  "Support throughout the tenancy.",
  "Transparent monthly subscription.",
  "Assistance with ongoing rental matters.",
  "Individually agreed scope of service.",
];

const billingTerms = [
  "The monthly subscription rate is 5%.",
  "The quoted subscription amounts are gross and include VAT.",
  "The calculation excludes administrative charges, utilities and any other charges outside the base rent.",
  "The subscription is billed separately from the Najem Solo and Najem Split brokerage commission.",
];

const billingExamples = [
  ["PLN 2,000", "PLN 100"],
  ["PLN 3,000", "PLN 150"],
  ["PLN 4,000", "PLN 200"],
  ["PLN 5,000", "PLN 250"],
  ["PLN 6,000", "PLN 300"],
];

const supportAreas = [
  {
    title: "Tenant Communication",
    description: "Assistance with ongoing communication and arrangements relating to the tenancy.",
  },
  {
    title: "Payment Monitoring",
    description: "Help monitoring payment deadlines and information relating to rental settlements.",
  },
  {
    title: "Coordination of Minor Repairs",
    description: "Organisational assistance when faults occur or minor repairs are needed.",
  },
  {
    title: "Property Condition Checks",
    description: "The possibility of arranging periodic property inspections.",
  },
  {
    title: "Reports for the Property Owner",
    description: "Providing updates on matters relating to the ongoing tenancy.",
  },
  {
    title: "Important Dates",
    description: "Reminders about important deadlines arising from the lease agreement.",
  },
  {
    title: "Day-to-Day Matters",
    description: "Organisational assistance with other agreed matters relating to the rented property.",
  },
];

const ownerProfiles = [
  {
    title: "Owners Living Abroad",
    description: "Support with day-to-day matters relating to your let property.",
  },
  {
    title: "Owners Living in Another City",
    description: "Help organising rental matters when you cannot attend to them in person.",
  },
  {
    title: "Busy Property Owners",
    description: "A way to spend less time organising day-to-day rental matters.",
  },
  {
    title: "Owners of Multiple Properties",
    description: "Additional help organising day-to-day matters across several let properties.",
  },
];

const brokerageServices = [
  {
    title: "Najem Solo",
    paragraphs: [
      "Comprehensive letting brokerage.",
      "Standard gross commission of 100% of one month’s base rent.",
      "One-time payment.",
    ],
    href: "/en/najem-solo",
  },
  {
    title: "Najem Split",
    paragraphs: [
      "The same brokerage service.",
      "The same total standard gross commission.",
      "12 interest-free monthly instalments.",
    ],
    href: "/en/najem-split",
  },
];

const initialSupport = [
  "Included in Najem Solo and Najem Split.",
  "Help with urgent matters at the start of the tenancy.",
  "Available for 14 days after property handover.",
  "No separate charge within the agreed brokerage scope.",
];

const subscriptionSupport = [
  "Separate subscription service.",
  "5% of monthly base rent.",
  "Support during the ongoing tenancy.",
  "Individually agreed scope of service.",
];

const cooperationSteps = [
  {
    title: "Initial Contact",
    description: "You tell us about your property and the current tenancy.",
  },
  {
    title: "Identifying Your Needs",
    description: "We discuss the matters you need help with.",
  },
  {
    title: "Service Agreement",
    description: "We agree on the scope of support and the detailed terms of the monthly subscription.",
  },
  {
    title: "Ongoing Support",
    description: "We carry out the agreed tasks throughout our engagement.",
  },
];

const faqItems = [
  {
    question: "How Much Does Rental Assistant Cost?",
    answer: ["The monthly subscription is 5% of the monthly base rent, VAT included."],
  },
  {
    question: "Does the Subscription Include VAT?",
    answer: ["Yes. The quoted subscription is the gross amount and includes VAT."],
  },
  {
    question: "Are Administrative Charges and Utilities Included in the Calculation?",
    answer: ["We calculate the subscription solely on the base rent payable to the property owner."],
  },
  {
    question: "Is Rental Assistant a Separate Service?",
    answer: ["Yes. Rental Assistant is a separate service billed as a monthly subscription."],
  },
  {
    question: "Can I Use the Service If I Found the Tenant Myself?",
    answer: ["Yes. We assess each request individually and agree on the scope of support with you."],
  },
  {
    question: "How Is Rental Assistant Different from Najem Solo and Najem Split?",
    answer: [
      "Najem Solo and Najem Split provide comprehensive letting brokerage. Rental Assistant provides additional support during an ongoing tenancy.",
    ],
  },
  {
    question: "Are Repair Costs Included in the Subscription?",
    answer: [
      "The subscription covers the agreed Rental Assistant activities. Costs for materials, repairs and third-party services must be agreed separately.",
    ],
  },
  {
    question: "Does Rental Assistant Guarantee the Tenant’s Payments?",
    answer: ["No. The service provides no guarantee that the tenant will pay on time or fulfil their other obligations."],
  },
  {
    question: "Can the Scope of Support Be Tailored?",
    answer: ["Yes. A separate agreement sets out the detailed scope of support."],
  },
];

const headingClass = "font-serif text-3xl leading-tight text-white sm:text-4xl";
const cardHeadingClass = "font-serif text-2xl leading-snug text-white";
const bodyClass = "leading-relaxed text-neutral-200/90";
const panelClass = "rounded-3xl bg-[#123746] p-6 ring-1 ring-white/10 sm:p-8";
const cardClass = "rounded-2xl bg-[#0A2530] p-5 ring-1 ring-white/10";
const highlightedCardClass = "rounded-2xl bg-amber-300/10 p-5 ring-1 ring-amber-200/30";
const bulletListClass = `list-disc space-y-2 pl-5 marker:text-amber-300 ${bodyClass}`;
const primaryCtaClass = "inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-center text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]";
const secondaryCtaClass = "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-center text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10";

export default function RentalAssistantPage() {
  return (
    <div lang="en" className="flex min-h-screen flex-col bg-[#0C2D3A] text-neutral-100">
      <SiteHeaderEn />
      <main className="mx-auto w-full max-w-6xl flex-1">
        <Container className="space-y-14 pb-20 pt-28 sm:space-y-20">
          <section className="grid items-start gap-6 rounded-3xl bg-gradient-to-r from-[#0F3A4D] to-[#0C2D3A] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-x-10">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">SERPAKOWSKI NIERUCHOMOŚCI</p>
              <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl">Rental Assistant</h1>
              <p className="font-serif text-2xl text-white sm:text-3xl">Your Property. Our Support. Your Peace of Mind.</p>
            </div>
            <div className="self-center rounded-3xl bg-[#0A2530] p-5 ring-1 ring-amber-200/25 sm:p-8 lg:row-span-2">
              <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-serif text-2xl text-white sm:text-3xl">
                <strong className="text-6xl font-normal leading-none text-amber-300 sm:text-8xl">5%</strong>{" "}
                per month
              </p>
              <p className="mt-4 font-semibold text-white">Monthly subscription based on the property’s base rent.</p>
              <p className={`mt-4 border-t border-white/10 pt-4 text-sm ${bodyClass}`}>
                With a base monthly rent of PLN 3,000, the subscription costs PLN 150 per month, VAT included.
              </p>
            </div>
            <div className="space-y-5">
              <p className={`text-lg ${bodyClass}`}>
                Finding a tenant is only the beginning. Rental Assistant provides additional support to property owners with the day-to-day matters that arise during an ongoing tenancy.
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
                <a href="#calculator" className={primaryCtaClass}>Calculate Your Subscription</a>
                <a href="#scope" className={secondaryCtaClass}>Explore Our Support</a>
              </div>
            </div>
          </section>

          <section className={`grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-8 ${panelClass}`}>
            <div className="space-y-4">
              <h2 className={headingClass}>Ongoing Support. Simple Pricing.</h2>
              <p className={bodyClass}>
                Rental Assistant is billed as a monthly subscription. The fee is 5% of the monthly base rent payable to the property owner.
              </p>
              <ul className={bulletListClass}>
                {billingTerms.map((term) => <li key={term}>{term}</li>)}
              </ul>
            </div>
            <div className="min-w-0 rounded-2xl bg-[#0A2530] ring-1 ring-white/10">
              <table className="w-full table-fixed text-left text-sm">
                <thead className="border-b border-white/10 text-amber-100">
                  <tr>
                    <th scope="col" className="px-3 py-3 align-bottom sm:px-5">Base Monthly Rent</th>
                    <th scope="col" className="px-3 py-3 align-bottom sm:px-5">Monthly Subscription</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 tabular-nums">
                  {billingExamples.map(([rent, subscription]) => (
                    <tr key={rent}>
                      <td className="px-3 py-2 text-neutral-200 sm:px-5">{rent}</td>
                      <td className="px-3 py-2 font-semibold text-white sm:px-5">{subscription}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="calculator" className="scroll-mt-28 space-y-5">
            <h2 className={headingClass}>Calculate Your Monthly Subscription</h2>
            <SubscriptionCalculator />
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className={headingClass}>The Tenant Has Moved In. What Happens Next?</h2>
            <div className={`space-y-3 ${bodyClass}`}>
              <p>After handover, you are still responsible for many practical matters relating to the tenancy. You may have limited time or be unable to deal with every situation yourself.</p>
              <p>Rental Assistant helps you organise agreed day-to-day matters relating to the let property.</p>
              <p>With ongoing support, you can entrust us with the tasks set out in your individual agreement and spend less time organising the tenancy.</p>
            </div>
          </section>

          <section id="scope" className="scroll-mt-28 space-y-6">
            <h2 className={headingClass}>How Can Rental Assistant Help?</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {supportAreas.map(({ title, description }) => (
                <article key={title} className={panelClass}>
                  <h3 className={cardHeadingClass}>{title}</h3>
                  <p className={`mt-3 ${bodyClass}`}>{description}</p>
                </article>
              ))}
              <p className={`flex items-center lg:col-span-2 ${cardClass} font-semibold leading-relaxed text-amber-100`}>
                The detailed scope of support, frequency of activities and responsibilities are defined in a separate agreement.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Who Is Rental Assistant For?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {ownerProfiles.map(({ title, description }) => (
                <article key={title} className={cardClass}>
                  <h3 className={cardHeadingClass}>{title}</h3>
                  <p className={`mt-3 ${bodyClass}`}>{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className={`max-w-3xl ${headingClass}`}>Finding a Tenant Is One Thing. Supporting an Ongoing Tenancy Is Another.</h2>
            <p className={`max-w-3xl ${bodyClass}`}>
              Rental Assistant is a standalone support service for an ongoing tenancy. If you are still looking for a tenant and need comprehensive letting brokerage, choose Najem Solo or Najem Split.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {brokerageServices.map(({ title, paragraphs, href }) => (
                <article key={title} className={`flex flex-col ${cardClass}`}>
                  <h3 className={cardHeadingClass}>{title}</h3>
                  <div className={`mt-3 flex-1 space-y-2 ${bodyClass}`}>
                    {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  <a href={href} className={`mt-5 self-start ${secondaryCtaClass}`}>Explore {title}</a>
                </article>
              ))}
              <article className={`flex flex-col ${highlightedCardClass}`}>
                <h3 className={cardHeadingClass}>Rental Assistant</h3>
                <div className={`mt-3 flex-1 space-y-2 ${bodyClass}`}>
                  <p className="font-semibold text-amber-200">5% of monthly base rent.</p>
                  <p>Separate support service during the tenancy.</p>
                  <p>Monthly subscription.</p>
                  <p>Individually agreed scope.</p>
                </div>
                <a href="#contact" className={`mt-5 self-start ${primaryCtaClass}`}>Ask About Rental Assistant</a>
              </article>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>14 Days of Support or Ongoing Rental Assistant?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <article className={panelClass}>
                <h3 className={cardHeadingClass}>14 Days of Additional Support</h3>
                <ul className={`mt-4 ${bulletListClass}`}>
                  {initialSupport.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
              <article className={panelClass}>
                <h3 className={cardHeadingClass}>Rental Assistant</h3>
                <ul className={`mt-4 ${bulletListClass}`}>
                  {subscriptionSupport.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </div>
            <p className={bodyClass}>The monthly subscription starts only after the terms have been agreed individually and a separate agreement has been concluded.</p>
          </section>

          <section className={panelClass}>
            <h2 className={headingClass}>Already Have a Tenant? You Can Request Support Separately.</h2>
            <div className={`mt-4 max-w-3xl space-y-3 ${bodyClass}`}>
              <p>Rental Assistant is available independently of Najem Solo and Najem Split. If you found the tenant yourself, you can contact us to request support separately.</p>
              <p>We assess each request individually. A separate agreement sets out the scope of support.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>How Does Rental Assistant Work?</h2>
            <ol role="list" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cooperationSteps.map(({ title, description }, index) => (
                <li key={title} className={cardClass}>
                  <span aria-hidden="true" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-300/20 text-sm font-semibold text-amber-100 ring-1 ring-amber-200/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-semibold text-white">{title}</h3>
                  <p className={`mt-2 text-sm ${bodyClass}`}>{description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className={headingClass}>Clear Terms of Cooperation</h2>
            <p className={bodyClass}>
              A separate agreement sets out each party’s rights and duties, how often we carry out the agreed activities, and the terms and limits of liability. We agree on the scope of support with you before our work begins.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Frequently Asked Questions</h2>
            <FaqAccordion items={faqItems} />
          </section>

          <section id="contact" className="scroll-mt-28 rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0A2530] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-10">
            <h2 className={headingClass}>Get Additional Support During Your Tenancy.</h2>
            <p className="mt-4 font-serif text-3xl leading-snug text-amber-100">
              <strong className="font-normal text-amber-300">5%</strong> of Monthly Base Rent
            </p>
            <p className={`mt-4 max-w-2xl ${bodyClass}`}>
              Tell us about your property and the support you need. We will discuss the available options and agree on the scope of our cooperation.
            </p>
            <a href="/en#contact" className={`mt-6 ${primaryCtaClass}`}>Ask About Rental Assistant</a>
            <p className={`mt-3 text-sm ${bodyClass}`}>Please mention “Rental Assistant” in your message.</p>
          </section>
        </Container>
      </main>
      <SiteFooterEn />
    </div>
  );
}
