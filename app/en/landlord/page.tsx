import HomeContactForm from "../../../components/common/HomeContactForm";
import { SiteFooterEn } from "../../../components/layout/SiteFooterEn";
import { SiteHeaderEnLandlord } from "../../../components/layout/SiteHeaderEnLandlord";
import { FaqAccordion } from "../../pl/landlord/FaqAccordion";
import { createSeoMetadata, seoAlternates } from "../../seo";

export const metadata = createSeoMetadata({
  title: "Rent Out Your Apartment in Warsaw | SERPAKOWSKI Nieruchomości",
  description: "Comprehensive apartment letting services in Warsaw. Najem Solo and Najem Split: one month’s base rent as the total gross commission, one payment or 12 interest-free instalments, and no agency commission for the tenant.",
  canonicalPath: "/en/landlord",
  languages: seoAlternates.landlord,
  locale: "en_US",
});

type ContentSection = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  paragraphs?: string[];
  points?: string[];
  closing?: string;
  ctaIntro?: string;
  cta?: string;
  ctaHref?: string;
  relatedService?: { label: string; href: string };
};

type FaqItem = {
  question: string;
  answer: string[];
};

const serviceSections: ContentSection[] = [
  {
    eyebrow: "A Clear Process",
    title: "Renting Out a Property Is More Than Publishing a Listing",
    paragraphs: [
      "At first, letting an apartment may seem straightforward. Take photos, publish a listing and choose a tenant. In practice, you may face dozens of enquiries, rescheduled viewings, unsuitable applicants, negotiations and questions about documents, all while trying to avoid a rushed decision.",
      "We organise the process step by step, from assessing the apartment to signing the lease and handing over the keys.",
    ],
  },
  {
    eyebrow: "Letting Brokerage",
    title: "What We Take Care Of",
    intro: "We organise the entire apartment letting process.",
    points: [
      "Assess the market rental value.",
      "Compare the apartment with similar listings.",
      "Make recommendations before publication.",
      "Help prepare the apartment and improve its appeal.",
      "Prepare photographs, video and a listing description.",
      "Publish the listing.",
      "Handle enquiries from prospective tenants.",
      "Arrange viewings.",
      "Collect basic information about applicants.",
      "Help with preliminary tenant screening.",
      "Agree the lease, deposit and running costs.",
      "Coordinate the property handover and prepare the handover report.",
    ],
    closing: "You stay in control and make the final decision. We handle the day-to-day details.",
    cta: "Get a Letting Plan",
    ctaHref: "#contact",
  },
  {
    id: "valuation",
    eyebrow: "Market Rent",
    title: "Rental Price Assessment",
    paragraphs: [
      "Before publishing the listing, we look at how your apartment compares with similar properties in Warsaw. We assess what rent is realistic, what could make the apartment harder to let and which improvements could attract more interest.",
      "We may suggest changes that could support a higher rent for the first or a later tenancy period, especially if the tenant wants to renew. What is achievable depends on the apartment, competing listings and current market conditions.",
    ],
    points: [
      "Assess a realistic market rent.",
      "Compare the apartment with similar properties.",
      "Identify the apartment’s strengths and drawbacks.",
      "Recommend changes before viewings.",
      "Identify what could support a higher rent or make the listing more appealing.",
    ],
    cta: "Request a Rental Price Assessment",
    ctaHref: "#contact",
  },
  {
    eyebrow: "Listing and Publication",
    title: "Preparing the Property and Listing",
    intro: "A good listing shows prospective tenants what the apartment looks like and why it may suit them.",
    points: [
      "Photographs and video.",
      "A clear description of the apartment.",
      "An emphasis on the property’s strengths.",
      "Recommendations for preparing the apartment for viewings.",
      "Preparation and publication of the listing.",
    ],
    closing: "If needed, we can separately agree on arranging cleaning, minor repairs or additional preparation for photos and viewings.",
    ctaIntro: "You can also order a Virtual 3D Tour as an additional way to present the property.",
    cta: "Explore Virtual 3D Tours",
    ctaHref: "/en/spacer-3d",
  },
  {
    eyebrow: "Prospective Tenants",
    title: "Finding Suitable Applicants",
    paragraphs: [
      "A listing can generate many enquiries, and only some applicants will meet the letting terms.",
      "We help you choose a tenant who meets your requirements and agree on clear terms that reduce the risks of letting.",
    ],
    intro: "We handle the first contact with applicants.",
    points: [
      "Answer applicants’ questions.",
      "Arrange viewings.",
      "Clarify basic information.",
      "Filter out unsuitable enquiries.",
      "Recommend applicants who meet the property’s letting terms.",
    ],
  },
  {
    eyebrow: "Before Signing",
    title: "Tenant Screening",
    paragraphs: [
      "Screening gives you more to go on than a first impression. Before signing the lease, it helps to know who will live in the apartment, whether the applicant meets your requirements and whether they appear able to meet their financial obligations.",
      "Screening helps reduce the risk of misunderstandings, late payments and problems after move-in.",
    ],
    intro: "We help with the following checks and arrangements.",
    points: [
      "Collect basic information about the applicant.",
      "Check documents and key details.",
      "Assess the applicant’s ability to pay.",
      "Use Simple.rent or another screening tool where appropriate and available.",
      "Clarify the letting terms before signing the lease.",
      "Communicate with applicants from abroad when needed.",
    ],
    cta: "Discuss Letting Your Property Safely",
    ctaHref: "#contact",
  },
  {
    eyebrow: "Documents and Keys",
    title: "Lease Agreement and Property Handover",
    paragraphs: [
      "Once you have chosen a tenant, we help agree the letting terms and document the condition of the apartment.",
      "You get a coordinated handover, with clear terms and a record of what was agreed.",
    ],
    intro: "We help with the following steps.",
    points: [
      "Prepare and agree on the lease.",
      "Agree terms for the deposit, rent payments and running costs.",
      "Arrange najem okazjonalny where appropriate. This Polish residential lease arrangement requires a notarised declaration from the tenant.",
      "Coordinate arrangements with a notary.",
      "Prepare the property handover report.",
      "Document the apartment’s condition with photographs.",
      "Hand over the keys.",
    ],
  },
  {
    eyebrow: "Progress Updates",
    title: "Keeping the Owner in Control",
    paragraphs: [
      "We keep you informed about what is happening with your apartment, even when we handle conversations on your behalf.",
      "You can see how the process is progressing, who has applied, what questions have come up and why we recommend a particular next step.",
    ],
    intro: "We can share brief updates at each of these stages.",
    points: [
      "After preparing the apartment.",
      "After publishing the listing.",
      "After receiving the first enquiries.",
      "After viewings.",
      "After shortlisting applicants.",
      "After you choose the tenant.",
      "After signing the lease and handing over the property.",
    ],
  },
];

const afterRentalSections: ContentSection[] = [
  {
    eyebrow: "During the Tenancy",
    title: "Ongoing Support After Letting",
    paragraphs: [
      "Once the tenant moves in, you can arrange ongoing help with communication and other day-to-day matters through Rental Assistant.",
      "Rental Assistant is especially useful if you prefer help handling regular contact with the tenant. It is a separate service outside the standard brokerage commission, with a scope we agree with you individually.",
    ],
    intro: "Depending on what we agree, ongoing support can include the following.",
    points: [
      "Monitoring information about rent payments.",
      "Communicating with the tenant.",
      "Coordinating minor repairs.",
      "Arranging periodic checks of the apartment’s condition.",
      "Reporting to the property owner.",
      "Organisational help with day-to-day matters.",
      "Reminders about important lease deadlines.",
    ],
    cta: "Ask About Rental Assistant",
    ctaHref: "#contact",
    relatedService: { label: "Explore Rental Assistant", href: "/en/asystent-najmu" },
  },
  {
    eyebrow: "Before the Lease Ends",
    title: "Preparing for Renewal or a New Tenant",
    paragraphs: [
      "Plan ahead for the end of the lease so you know whether the tenant intends to renew, whether to review the rent and when to start looking for a new tenant.",
      "Preparing early can help reduce the risk of the apartment sitting vacant.",
    ],
    intro: "We can help with the following steps.",
    points: [
      "Review the situation before the lease ends.",
      "Negotiate a renewal.",
      "Prepare a new lease.",
      "Review the rent.",
      "Prepare the apartment for the next tenancy.",
      "Start looking for a new tenant in advance if the current tenant does not renew.",
    ],
  },
];

const paymentModels = [
  {
    name: "Najem Solo",
    eyebrow: "Standard Payment",
    amount: "100%",
    frequency: "One-Time Payment",
    description: "Comprehensive apartment letting brokerage with a single commission payment.",
    paymentBenefit: "100% of one month’s base rent, VAT included.",
    href: "/en/najem-solo",
  },
  {
    name: "Najem Split",
    eyebrow: "Flexible Payment",
    amount: "8.33%*",
    frequency: "Monthly for 12 Months",
    description: "The same brokerage service and the same total standard commission, divided into 12 interest-free monthly instalments.",
    paymentBenefit: "12 interest-free instalments.",
    href: "/en/najem-split",
  },
];

const sharedPaymentBenefits = [
  "PLN 0 agency commission for the tenant.",
  "Up to 100% conditional discount on reletting.",
  "Comprehensive brokerage services.",
  "14 days of additional support after property handover.",
];

const faqItems: FaqItem[] = [
  {
    question: "Why use an agency if I can let the apartment myself?",
    answer: [
      "You can let the apartment yourself. You would handle the rental price assessment, publishing the listing, enquiries, viewings, shortlisting applicants, checking documents, preparing the lease and handing over the apartment.",
      "We organise those steps and help you make informed decisions throughout the process.",
    ],
  },
  {
    question: "Who chooses the tenant?",
    answer: [
      "You make the final decision. We collect information, screen applicants using available tools and share our recommendations.",
    ],
  },
  {
    question: "How do you screen applicants?",
    answer: [
      "We collect basic information, check documents and assess the applicant’s ability to pay. We may use Simple.rent or another tool available in the circumstances.",
      "We also clarify key letting terms in advance to help reduce the risk of misunderstandings after the lease is signed.",
    ],
  },
  {
    question: "Do you help with najem okazjonalny?",
    answer: [
      "Yes. Where this Polish residential lease arrangement is appropriate, we can agree on the steps, help both parties prepare and coordinate arrangements with a notary.",
    ],
  },
  {
    question: "What is included in the brokerage fee?",
    answer: [
      "The fee covers assessing the rental price, preparing and publishing the listing, communicating with applicants, arranging viewings, and helping with tenant selection, screening, the lease and property handover.",
      "It also includes 14 days of as-needed support after handover with urgent matters relating to the start of the tenancy, the handover and the documents we prepared.",
    ],
  },
  {
    question: "Who pays the commission?",
    answer: [
      "The property owner alone pays the agency commission. The tenant pays no agency commission.",
    ],
  },
  {
    question: "What is the total commission?",
    answer: [
      "The total standard commission is 100% of one month’s base rent, VAT included. The calculation uses the base rent payable to the owner and excludes administrative charges, utilities and other additional fees.",
      "You can pay it in one payment with Najem Solo or in 12 interest-free monthly instalments with Najem Split.",
    ],
  },
  {
    question: "What is the difference between Najem Solo and Najem Split?",
    answer: [
      "Both options offer the same service, benefits, standard of support and total standard commission. The only difference is how you pay.",
    ],
  },
  {
    question: "Can I get a discount when reletting the apartment?",
    answer: [
      "With either option, you may qualify for a discount of up to 100% on the new commission when you relet the same apartment. The amount depends on the value of the future portions from all applicable previous schedules on the date the apartment is actually handed over to the new tenant and on the terms of the brokerage agreement.",
    ],
  },
  {
    question: "Can I arrange ongoing support after letting the apartment?",
    answer: [
      "Yes. After the lease is signed, you can discuss Rental Assistant separately. It can cover tenant communication, payment monitoring, coordination of minor repairs, reports and reminders about lease deadlines. The standard brokerage commission does not include Rental Assistant.",
    ],
  },
];

const primaryCtaClass = "inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]";
const secondaryCtaClass = "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10";

function SectionCard({ section, index }: { section: ContentSection; index: number }) {
  return (
    <article id={section.id} className="scroll-mt-24 rounded-3xl bg-[#123746] p-6 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:p-8">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-300/20 text-sm font-semibold text-amber-100 ring-1 ring-amber-200/30">
          {index + 1}
        </div>
        {section.eyebrow ? <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">{section.eyebrow}</p> : null}
      </div>
      <h2 className="font-serif text-3xl text-white">{section.title}</h2>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="mt-4 leading-relaxed text-neutral-200/90">
          {paragraph}
        </p>
      ))}
      {section.intro ? <p className="mt-5 font-semibold text-amber-100">{section.intro}</p> : null}
      {section.points ? (
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {section.points.map((point) => (
            <li key={point} className="rounded-xl bg-[#0A2530] px-4 py-3 text-sm leading-relaxed text-neutral-100 ring-1 ring-white/10">
              • {point}
            </li>
          ))}
        </ul>
      ) : null}
      {section.closing ? <p className="mt-5 leading-relaxed text-neutral-200/90">{section.closing}</p> : null}
      {section.cta && section.ctaHref ? (
        <div className="mt-6">
          {section.ctaIntro ? <p className="mb-3 leading-relaxed text-neutral-200/90">{section.ctaIntro}</p> : null}
          <a href={section.ctaHref} className={secondaryCtaClass}>
            {section.cta}
          </a>
          {section.relatedService ? (
            <a href={section.relatedService.href} className="mt-4 block w-fit text-sm text-amber-100 underline underline-offset-2 hover:text-white">
              {section.relatedService.label}
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

export default function Page() {
  return (
    <div lang="en" className="min-h-screen bg-[#0C2D3A] text-neutral-100">
      <SiteHeaderEnLandlord />
      <main className="mx-auto max-w-6xl space-y-20 px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0C2D3A] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,193,7,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_35%)]" />
          <div className="max-w-4xl space-y-6">
            <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Landlord Services in Warsaw</p>
            <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
              Rent Out Your Apartment in Warsaw Safely and With Less Hassle
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-neutral-200/90">
              SERPAKOWSKI Nieruchomości helps property owners rent out their apartments: assess the rental price, prepare the listing, find and screen prospective tenants, agree the lease terms and arrange a properly documented property handover.
            </p>
            <p className="max-w-3xl leading-relaxed text-neutral-200/85">
              We organise the entire process so you can spend less time handling enquiries, viewings, documentation and difficult decisions.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#contact" className={primaryCtaClass}>
                Find Out Your Apartment’s Rental Value
              </a>
              <a href="#contact" className={secondaryCtaClass}>
                Discuss Renting Out Your Property
              </a>
            </div>
          </div>
        </section>

        <section id="process" className="space-y-6 scroll-mt-24">
          {serviceSections.map((section, index) => (
            <SectionCard key={section.title} section={section} index={index} />
          ))}
        </section>

        <section className="rounded-3xl bg-[#0A2530] p-8 text-center ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">The Next Stage</p>
          <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">After the Apartment Is Let</h2>
        </section>

        <section className="space-y-6">
          {afterRentalSections.map((section, index) => (
            <SectionCard key={section.title} section={section} index={index + serviceSections.length} />
          ))}
        </section>

        <section id="pricing" className="scroll-mt-24 rounded-3xl bg-[#123746] p-6 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:p-8">
          <p id="cost" className="scroll-mt-24 text-xs uppercase tracking-[0.18em] text-amber-200/80">Letting Commission</p>
          <h2 className="mt-4 font-serif text-3xl text-white">One Service. Two Payment Options.</h2>
          <div className="mt-5 max-w-3xl space-y-4 leading-relaxed text-neutral-200/90">
            <p>At SERPAKOWSKI Nieruchomości, we offer comprehensive apartment letting brokerage with two payment options.</p>
            <p>Both options provide the same service, benefits and standard of support.</p>
            <p>The property owner alone pays the agency commission. The tenant pays no agency commission.</p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {paymentModels.map((model) => (
              <article key={model.name} className="flex flex-col rounded-2xl bg-[#0A2530] p-5 ring-1 ring-white/10 sm:p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">{model.eyebrow}</p>
                <h3 className="mt-3 font-serif text-2xl text-white">{model.name}</h3>
                <p className="mt-4 text-4xl font-semibold text-amber-200 sm:text-5xl">{model.amount}</p>
                <p className="mt-1 text-sm font-semibold text-amber-100">{model.frequency}</p>
                <p className="mt-4 leading-relaxed text-neutral-200/90">{model.description}</p>
                <ul className="mb-6 mt-4 space-y-2 text-sm leading-relaxed text-neutral-100">
                  {[model.paymentBenefit, ...sharedPaymentBenefits].map((benefit) => (
                    <li key={benefit} className="flex gap-2">
                      <span aria-hidden="true" className="text-amber-200">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a href={model.href} className={`mt-auto self-start ${primaryCtaClass}`}>
                  Explore {model.name}
                </a>
              </article>
            ))}
          </div>
          <div className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-neutral-200/90">
            <p>The total standard gross commission is 100% of one month’s base rent, VAT included, under either option. We calculate it solely on the base rent payable to the property owner, excluding administrative charges, utilities and other additional fees.</p>
            <p>* Approximately 8.33% of the monthly base rent represents one of 12 instalments. It is not the total commission. The final instalment may differ due to rounding.</p>
            <p>Both options offer a conditional discount of up to 100% on the new commission when reletting the same apartment. The amount depends on the value of the future portions from all applicable previous schedules on the date the property is actually handed over to the new tenant and on the terms of the brokerage agreement.</p>
          </div>
        </section>

        <section className="space-y-6">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">FAQ</p>
            <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">Frequently Asked Questions</h2>
          </div>
          <FaqAccordion items={faqItems} />
        </section>

        <section id="contact" className="relative scroll-mt-28 overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0A2530] p-8 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-10">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(46,107,127,0.18),transparent_60%)]" />
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Get in Touch</p>
              <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">Want to Rent Out Your Apartment Without Unnecessary Hassle?</h2>
              <p className="mt-4 max-w-md leading-relaxed text-neutral-200/90">
                Tell us about your property. We will review the details and discuss a clear plan for renting it out.
              </p>
              <p className="mt-5 text-xs leading-relaxed text-neutral-200/70">
                By submitting the form, you confirm that you have read the{" "}
                <a href="/en/privacy" className="underline underline-offset-2 hover:text-white">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <HomeContactForm
                language="en"
                sourcePage="/en/landlord"
                namePlaceholder="Name"
                phonePlaceholder="Phone"
                messagePlaceholder="Details: district, apartment size, timeline"
                submitLabel="Send"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooterEn />
    </div>
  );
}
