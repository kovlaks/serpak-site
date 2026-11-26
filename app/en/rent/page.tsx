import { createSeoMetadata, seoAlternates } from "../../seo";
import { SiteFooterEn } from "../../../components/layout/SiteFooterEn";
import { SiteHeaderEn } from "../../../components/layout/SiteHeaderEn";
import { RentContactSection } from "../../../components/rent/RentContactSection";

export const metadata = createSeoMetadata({
  title: "Rent an Apartment in Warsaw | SERPAKOWSKI Nieruchomości",
  description:
    "Explore apartment rentals in Warsaw with SERPAKOWSKI Nieruchomości. No agency commission for tenants on landlord-represented properties. Independent search assistance available on individually agreed terms.",
  canonicalPath: "/en/rent",
  languages: seoAlternates.rent,
  locale: "en_US",
});

const worryCards = [
  {
    title: "Too many listings, too few suitable options",
    description: "We can help compare listings against your budget, preferred areas and move-in date.",
  },
  {
    title: "Unclear lease terms or costs",
    description: "We can walk through the proposed terms in plain English and help you raise questions before signing.",
  },
  {
    title: "Questions about the landlord or property",
    description: "We can help check the available documents and information about the property and who is authorised to let it.",
  },
  {
    title: "Agreeing the rent and deposit",
    description: "We can help clarify the proposed rent, deposit and running costs, and coordinate discussions about the terms.",
  },
  {
    title: "What to check during handover",
    description: "We can help record the property's condition, meter readings and keys in the handover report, with photos where appropriate.",
  },
  {
    title: "Questions after move-in",
    description: "Depending on the service arranged, we can help coordinate practical matters such as utilities or contact with the building administration.",
  },
];

const serviceList = [
  {
    title: "Understanding Your Requirements",
    description: "Define your budget, preferred neighbourhoods, move-in date and priorities for the property.",
  },
  {
    title: "Property Selection",
    description: "Identify and compare available listings against the agreed search criteria.",
  },
  {
    title: "Viewing Coordination",
    description: "Arrange appointments and help plan the logistics of attending viewings.",
  },
  {
    title: "Property Condition Checklist",
    description: "Use a practical checklist during viewings to look at features such as windows, ventilation, appliances and signs of damp.",
  },
  {
    title: "Landlord and Property Information",
    description: "Help check available information and documents about the owner, the property and the authority to let it.",
  },
  {
    title: "Lease Terms and Negotiations",
    description: "Explain practical lease terms and help coordinate discussions about rent, the deposit and other proposed conditions.",
  },
  {
    title: "Najem Okazjonalny Coordination",
    description: "Where this Polish lease arrangement applies, help organise the required documents and coordinate an appointment with a notary.",
  },
  {
    title: "Signing and Property Handover",
    description: "Coordinate signing and prepare the handover report, including the condition of the property, meter readings, keys and photos where appropriate.",
  },
  {
    title: "Post-Handover and Early Termination Assistance",
    description: "Within the agreed scope, help coordinate practical questions after move-in or discuss an early end to the tenancy with the landlord.",
  },
];

const steps = [
  {
    title: "Initial Enquiry and Requirements",
    details:
      "Tell us about the listing you are interested in or share your budget, preferred areas and move-in date. For an independent search, we discuss the scope and terms before work starts.",
  },
  {
    title: "Property Options and Arrangements",
    details:
      "We confirm availability and arrange viewings. If you have commissioned a search, we help compare suitable options within the agreed brief and discuss timing with you.",
  },
  {
    title: "Viewings, Documentation and Agreed Terms",
    details:
      "We help coordinate viewings, review available documents and discuss proposed terms. The owner makes the final decision about letting the property, and you decide whether to rent it.",
  },
  {
    title: "Lease Signing and Property Handover",
    details:
      "If both parties agree to proceed, we can coordinate signing, prepare the handover report and arrange the exchange of keys.",
  },
];

const faq = [
  {
    question: "Do Tenants Pay an Agency Commission?",
    answer:
      "For a property we let on behalf of its owner, the owner pays the agency commission and the tenant pays PLN 0 in agency commission. If you request an independent property search or additional assistance, we discuss any applicable service fees separately before work begins.",
  },
  {
    question: "Is an Independent Property Search Free?",
    answer:
      "We agree the scope and terms individually and discuss any applicable fees with you before starting an independent search.",
  },
  {
    question: "Can the Rental Process Be Handled Remotely?",
    answer:
      "Some steps, such as video viewings and discussions about lease terms, can be handled remotely. What can be done online depends on your circumstances, the available documents and the formalities required.",
  },
  {
    question: "What Is Your Role in the Transaction?",
    answer:
      "Our role depends on who instructs us. In landlord-focused brokerage, we organise the letting process on the owner's behalf and coordinate communication with prospective tenants. If you commission a separate service, the help we provide is defined by the scope we agree with you.",
  },
  {
    question: "Can You Help Explain Lease Terms?",
    answer:
      "We can explain practical lease terms in plain English, such as what the deposit covers and how running costs are paid, and help you discuss questions with the landlord.",
  },
  {
    question: "What If the Landlord Does Not Accept the Proposed Terms?",
    answer:
      "We can help discuss alternatives if both sides are open to them. The landlord decides whether to offer the property on the proposed terms, and you decide whether to accept them.",
  },
];

const advantages = [
  {
    title: "Convenient Communication",
    description: "Ask questions, share details and arrange next steps online or through your preferred messenger.",
    icon: "🧭",
  },
  {
    title: "Transparent Agency Fees",
    description: "Tenants pay PLN 0 in agency commission for properties we let on behalf of owners. We agree terms and any applicable fees for separately requested services in advance.",
    icon: "💵",
  },
  {
    title: "Support Throughout the Rental Process",
    description:
      "Depending on the service arranged, we can help you review listings, arrange viewings, prepare documents and coordinate handover.",
    icon: "⚖️",
  },
  {
    title: "Support After Handover",
    description:
      "Landlord brokerage under Najem Solo or Najem Split includes 14 days of as-needed help with urgent matters related to move-in, handover or documents we prepared. Support for a separate tenant service follows the terms agreed for that service.",
    icon: "🧡",
  },
];

const messengerLinks = [
  {
    label: "Telegram",
    href: "https://t.me/+48453053969",
    gradient: "from-[#229ED9] to-[#1c94cb]",
    icon: "✉️",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/48453053969",
    gradient: "from-[#25D366] to-[#1fb95a]",
    icon: "💬",
  },
  {
    label: "Viber",
    href: "viber://chat?number=%2B380679762988",
    gradient: "from-[#7360F2] to-[#5f47ec]",
    icon: "📞",
  },
];

export default function Page() {
  return (
    <div lang="en" className="min-h-screen bg-[#0C2D3A] text-neutral-100">
      <SiteHeaderEn />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 space-y-20">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0C2D3A] p-8 sm:p-12 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,193,7,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_35%)]" />
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="min-w-0 space-y-6">
            <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Rental support in Warsaw</p>
            <h1 className="font-serif text-4xl sm:text-5xl text-white leading-tight">
              Find Your New Home in Warsaw With Confidence
            </h1>
            <p className="text-lg text-neutral-200/90 max-w-2xl">
              We help people navigate the Warsaw rental market, understand property offers, arrange viewings and prepare for the rental process.
            </p>
            <div className="inline-flex rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold text-amber-200 ring-1 ring-amber-200/30 sm:rounded-full">
              For properties offered through our landlord-focused brokerage model, tenants pay no agency commission. Individually requested search assistance is discussed separately.
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
              >
                Explore Rental Options
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10"
              >
                Get in Touch
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-2 pt-3">
              <span className="text-xs uppercase tracking-[0.12em] text-neutral-200/75">Contact us in a messenger</span>
              {messengerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${link.gradient} px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] ring-1 ring-white/15 transition hover:-translate-y-0.5`}
                >
                  <span>{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="min-w-0 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-amber-500 text-xl font-bold text-[#0C2D3A]">
                  ✓
                </div>
                <div>
                  <div className="text-sm uppercase tracking-[0.12em] text-neutral-200/70">Rental coordination</div>
                  <div className="text-lg font-semibold text-white">From viewing to handover</div>
                </div>
              </div>
              <div className="rounded-2xl bg-[#0A2530] p-5 ring-1 ring-white/5">
                <div className="text-sm text-neutral-200/80">Process in brief</div>
                <p className="mt-2 text-base text-white/90 leading-relaxed">
                  We can help compare property options, agree on viewing dates, check available property information and clarify lease terms before handover. Practical support after move-in depends on the service arranged.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3 text-sm text-neutral-200/90 min-[360px]:grid-cols-2">
                <div className="rounded-xl bg-white/5 px-3 py-3 ring-1 ring-white/10 sm:px-4">Property options</div>
                <div className="rounded-xl bg-white/5 px-3 py-3 ring-1 ring-white/10 sm:px-4">Viewing dates</div>
                <div className="rounded-xl bg-white/5 px-3 py-3 ring-1 ring-white/10 sm:px-4">Lease terms</div>
                <div className="rounded-xl bg-white/5 px-3 py-3 ring-1 ring-white/10 sm:px-4">Handover checklist</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="tenant-services-title" className="rounded-3xl bg-[#0A2530] p-6 ring-1 ring-white/10 sm:p-8">
        <h2 id="tenant-services-title" className="font-serif text-3xl text-white">How Our Services Work for Tenants</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 sm:p-6">
            <h3 className="text-lg font-semibold text-white">Properties Represented for Landlords</h3>
            <p className="mt-2 font-serif text-2xl leading-tight text-amber-300">PLN 0 Agency Commission for Tenants</p>
            <div className="mt-3 space-y-2 text-sm leading-relaxed text-neutral-200/90">
              <p>When a property is offered through our landlord-focused brokerage service, the property owner pays our agency commission. The tenant pays PLN 0 in agency commission for that letting.</p>
              <p>Rent and the deposit are separate obligations. Administrative charges and utilities may apply under the rental terms.</p>
            </div>
          </article>
          <article className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 sm:p-6">
            <h3 className="text-lg font-semibold text-white">Independent Property Search Assistance</h3>
            <p className="mt-2 font-serif text-2xl leading-tight text-amber-300">Terms Agreed Individually</p>
            <div className="mt-3 space-y-2 text-sm leading-relaxed text-neutral-200/90">
              <p>You can ask us to search for properties, compare listings or help with specific steps in the rental process.</p>
              <p>If you contact us for an independently commissioned property search or additional assistance, we will discuss the scope of service and any applicable fees with you in advance.</p>
            </div>
          </article>
        </div>
      </section>

      {/* Tenant benefits */}
      <section className="rounded-3xl bg-[#0A2530] p-6 sm:p-8 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.16em] text-amber-200/80">Key benefits</p>
            <h2 className="font-serif text-3xl text-white">Why renting with us is easier</h2>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl bg-white/5 px-4 py-5 text-left ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-300/20 text-base font-semibold text-amber-100 ring-1 ring-amber-200/30">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-neutral-200/85 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who this is for */}
      <section className="grid gap-8 rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-3">
          <h2 className="font-serif text-3xl text-white">Who Is This For?</h2>
          <p className="text-neutral-200/90 max-w-2xl">
            We help tenants compare their options and clarify rental terms early, when there is still time to ask questions and avoid misunderstandings.
          </p>
        </div>
        <ul className="space-y-3 text-neutral-100/90">
          {[
            "You are moving to Warsaw and want help getting started.",
            "You would like help comparing listings without sorting through them all yourself.",
            "You want to understand the lease terms before you decide.",
            "You need practical help arranging viewings or preparing for handover.",
          ].map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-2xl bg-[#0A2530] px-4 py-3 text-base ring-1 ring-white/5"
            >
              <span className="text-amber-300">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-8">
        <div className="space-y-4 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.16em] text-amber-200/80">Process</p>
          <h2 className="font-serif text-3xl text-white">What to Expect During the Rental Process</h2>
          <p className="text-neutral-200/90">
            When we act for a property owner, we coordinate enquiries, viewings, documents and handover on the owner's behalf. When you commission an independent search or other assistance, we agree what you need and which steps we will help with before we start.
          </p>
        </div>
      </section>

      {/* Concerns addressed */}
      <section className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-amber-200/80">Answers to concerns</p>
            <h2 className="font-serif text-3xl text-white">Common Rental Concerns</h2>
          </div>
          <a href="#contact" className="text-sm text-amber-200 hover:text-amber-100">Contact us →</a>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {worryCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-[#0A2530] p-5 ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-amber-200/30"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-amber-300">✦</span>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="text-neutral-200/80 text-sm leading-relaxed">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.16em] text-amber-200/80">What we do</p>
          <h2 className="font-serif text-3xl text-white">What We Can Help With</h2>
          <p className="text-neutral-200/90 max-w-3xl">
            The help available depends on whether we are coordinating a letting for the owner or providing a separate service within the scope we agree with you.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {serviceList.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-2xl bg-[#0C2D3A] px-5 py-4 ring-1 ring-white/10"
            >
              <span className="mt-1 text-amber-300">➜</span>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-neutral-200/85 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#0A2530] to-transparent p-8">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.16em] text-amber-200/80">Tenant journey</p>
          <h2 className="font-serif text-3xl text-white">How the Steps Fit Together</h2>
          <p className="text-neutral-200/90">
            For independent assistance, the steps we handle depend on the scope we agree with you.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {steps.map((step, index) => (
            <div key={step.title} className="relative overflow-hidden rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="absolute -right-6 -top-6 h-20 w-20 rotate-12 rounded-full bg-amber-300/10" />
              <div className="relative flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-300/90 text-[#0C2D3A] font-semibold">
                  {index + 1}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="text-sm text-neutral-200/85 leading-relaxed">{step.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.16em] text-amber-200/80">Why us</p>
          <h2 className="font-serif text-3xl text-white">Benefits of working with us</h2>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "Local knowledge of Warsaw neighbourhoods and the rental market",
            "Clear information about rent, deposits and running costs",
            "Practical explanations of rental documents in plain English",
            "A viewing checklist to help you assess the property's condition",
            "A documented handover with the details you need on move-in",
            "A point of contact for practical questions within the agreed scope",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-2xl bg-[#0C2D3A] px-5 py-4 ring-1 ring-white/10">
              <span className="mt-1 text-amber-300">★</span>
              <p className="text-base text-neutral-100">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.16em] text-amber-200/80">FAQ</p>
          <h2 className="font-serif text-3xl text-white">Frequently asked questions</h2>
        </div>
        <div className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10">
          {faq.map((item) => (
            <div key={item.question} className="bg-white/5 p-5">
              <h3 className="text-lg font-semibold text-white">{item.question}</h3>
              <p className="mt-2 text-neutral-200/85 text-sm leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA + form */}
      <RentContactSection
        pageLanguage="en"
        sourcePage="/en/rent"
        smallLabel="LEAVE YOUR CONTACT DETAILS"
        headline="Looking for a Rental in Warsaw?"
        description="Tell us what kind of property you are looking for and how we can help. We will discuss the available options and the terms of any individually requested assistance."
        messengerLabel="OR MESSAGE US IN YOUR PREFERRED CHAT APP"
        placeholders={{
          name: "Name",
          phone: "Phone",
          message: "Describe your request: districts, budget, move-in timeline, lease format",
        }}
        submitLabel="Contact Me"
        privacyNote={
          <>
            By submitting the form, you confirm that you have read the{" "}
            <a href="/en/privacy" className="underline underline-offset-2 hover:text-white">
              Privacy Policy
            </a>
            .
          </>
        }
        statusMessages={{
          success: "Thank you. We received your request and will contact you as soon as possible.",
          error: "Could not send your request. Please try again or contact us directly.",
          validation: "Please enter your name and phone number.",
        }}
        messengerLinks={messengerLinks}
      />
      </main>
      <SiteFooterEn />
    </div>
  );
}
