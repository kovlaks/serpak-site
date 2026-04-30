import { SiteFooterEn } from "../../../components/layout/SiteFooterEn";
import { SiteHeaderEn } from "../../../components/layout/SiteHeaderEn";
import { RentContactSection } from "../../../components/rent/RentContactSection";

export const metadata = {
  title: "Find a Rental in Warsaw | SERPAKOWSKI Nieruchomości",
  description: "We help you rent safely in Warsaw: property search, verification, lease review, occasional lease support and handover.",
};

const worryCards = [
  {
    title: "Too many listings, too few good options",
    description: "We filter the market and provide a shortlist of realistic, high-quality properties.",
  },
  {
    title: "Worried about lease mistakes and hidden costs",
    description: "We review every lease clause, flag risks, and propose clear amendments.",
  },
  {
    title: "Not sure how to verify the owner",
    description: "We verify ownership, legal authority, and key property risks.",
  },
  {
    title: "Negotiation feels difficult",
    description: "We negotiate on your behalf: price, security deposit, move-in and move-out terms.",
  },
  {
    title: "Afraid of missing issues during handover",
    description: "We conduct a full handover with protocol, photos/videos, and meter readings.",
  },
  {
    title: "What if problems appear after move-in?",
    description: "For 14 days, we stay available for practical and organizational support.",
  },
];

const serviceList = [
  {
    title: "Property search tailored to your criteria",
    description: "We structure your brief and prepare a longlist and shortlist with comments.",
  },
  {
    title: "Viewings and logistics coordination",
    description: "We plan routes, schedule appointments, and organize transport when needed.",
  },
  {
    title: "On-site property checklist",
    description: "We inspect more than “nice walls”: electricals, windows, dampness, ventilation, appliances, noise, common areas, and parking.",
  },
  {
    title: "Owner and property verification",
    description: "Registry, documentation, authority, co-owner consents — a practical legal filter.",
  },
  {
    title: "Lease agreement and negotiation",
    description: "We turn legal language into clear terms, reduce risk, propose edits, and negotiate.",
  },
  {
    title: "Occasional lease support",
    description: "Consent templates, communication, notary scheduling, and full process coordination.",
  },
  {
    title: "Signing and handover",
    description: "Handover protocol, photos/videos, meter readings, keys, and defect records — everything documented properly.",
  },
  {
    title: "Post move-in support",
    description: "Guidance on utilities, internet setup, building administration, and lease-related details.",
  },
  {
    title: "Support for early move-out",
    description: "Replacement tenant search (with owner approval) and support for a clean contract exit.",
  },
];

const steps = [
  {
    title: "Request and brief",
    details:
      "You complete a short form or have a call with us. We ask structured questions: budget, districts, family needs, legal status in Poland, and must-haves.",
  },
  {
    title: "Selection and recommendations",
    details:
      "We analyze the market, send a shortlist with clear pros and cons, and plan viewings.",
  },
  {
    title: "Viewings, verification, lease",
    details:
      "We attend viewings, verify the property and owner, discuss lease terms, and handle negotiations.",
  },
  {
    title: "Signing, move-in, support",
    details:
      "We are present at handover, document the condition of the property, and support you through the first weeks in your new home.",
  },
];

const faq = [
  {
    question: "Who pays the commission?",
    answer:
      "The fee model is agreed in advance and fixed in the service agreement. No last-minute surprises.",
  },
  {
    question: "Can the whole process be handled remotely?",
    answer:
      "Yes. Video tours, remote approvals, and signing via power of attorney are all possible depending on your situation.",
  },
  {
    question: "What role do you take in the deal?",
    answer: "We represent the tenant’s interests professionally and support the transaction at every stage.",
  },
  {
    question: "What if the owner rejects our amendments?",
    answer:
      "We define in advance where compromise is acceptable and where it is better to walk away. The final decision is always yours — with full information.",
  },
];

const advantages = [
  {
    title: "No office visits",
    description: "Your housing search and requirement brief are handled online.",
    icon: "🧭",
  },
  {
    title: "0 PLN upfront",
    description: "You pay for realtor services only after the lease agreement is signed.",
    icon: "💵",
  },
  {
    title: "End-to-end support",
    description:
      "Viewing coordination, owner verification, lease review, and property handover — we take responsibility for the full process.",
    icon: "⚖️",
  },
  {
    title: "Post move-in support",
    description: "We stay available to help in urgent situations.",
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
    <div className="min-h-screen bg-[#0C2D3A] text-neutral-100">
      <SiteHeaderEn />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 space-y-20">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0C2D3A] p-8 sm:p-12 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,193,7,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_35%)]" />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Rental support in Warsaw</p>
            <h1 className="font-serif text-4xl sm:text-5xl text-white leading-tight">
              Everything to make your path to a new home smooth and inspiring.
            </h1>
            <p className="text-lg text-neutral-200/90 max-w-2xl">
              Safe turnkey renting in Warsaw: from first listings to key handover and move-in support.
            </p>
            <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-amber-200 ring-1 ring-amber-200/30">
              Personal rental support: safe, transparent, and detail-focused.
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
              >
                Find a rental with us
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10"
              >
                Get a consultation
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
          <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-amber-300 to-amber-500 text-[#0C2D3A] flex items-center justify-center text-xl font-bold">
                  ✓
                </div>
                <div>
                  <div className="text-sm uppercase tracking-[0.12em] text-neutral-200/70">14-day support</div>
                  <div className="text-lg font-semibold text-white">After move-in — we stay by your side</div>
                </div>
              </div>
              <div className="rounded-2xl bg-[#0A2530] p-5 ring-1 ring-white/5">
                <div className="text-sm text-neutral-200/80">Process in brief</div>
                <p className="mt-2 text-base text-white/90 leading-relaxed">
                  From briefing and selection to lease review, negotiation, handover protocol, and post-move support.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm text-neutral-200/90">
                <div className="rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">Shortlist in 24–48 hours</div>
                <div className="rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">Legal filter in plain language</div>
                <div className="rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">On-site property checklist</div>
                <div className="rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">All agreements in writing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tenant benefits */}
      <section className="rounded-3xl bg-[#0A2530] p-6 sm:p-8 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.16em] text-amber-200/80">Key benefits</p>
            <h2 className="font-serif text-3xl text-white">Why renting with us is easier</h2>
          </div>
          <span className="text-sm text-neutral-200/80"></span>
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
          <p className="text-xs uppercase tracking-[0.16em] text-amber-200/80">Who this is for</p>
          <h2 className="font-serif text-3xl text-white">For people who want more than just renting — they want peace of mind</h2>
          <p className="text-neutral-200/90 max-w-2xl">
            We handle search, verification, and negotiations so you can move in without stress.
          </p>
        </div>
        <ul className="space-y-3 text-neutral-100/90">
          {[
            "If you are relocating to Warsaw and are unsure where to start.",
            "If you don’t have time to navigate hundreds of listings and legal details.",
            "If you have had a bad rental experience before and don’t want to repeat it.",
            "If you want professional support in negotiations and deal terms.",
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
          <h2 className="font-serif text-3xl text-white">We turn chaotic apartment hunting into a clear and safe process</h2>
          <p className="text-neutral-200/90">
            You share your preferences, and we turn them into a clear brief, filter offers, verify owner and lease, negotiate, and support handover and move-in.
          </p>
          <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-amber-200 ring-1 ring-amber-200/30">
            Less risk. Less stress. More control and transparency.
          </div>
        </div>
      </section>

      {/* Concerns addressed */}
      <section className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-amber-200/80">Answers to concerns</p>
            <h2 className="font-serif text-3xl text-white">What will stop worrying you</h2>
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
          <h2 className="font-serif text-3xl text-white">What exactly we handle for you</h2>
          <p className="text-neutral-200/90 max-w-3xl">
            End-to-end rental support: requirements, viewings logistics, lease, handover, and move-in support.
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
          <h2 className="font-serif text-3xl text-white">How it works, briefly</h2>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {steps.map((step, index) => (
            <div key={step.title} className="relative overflow-hidden rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="absolute -right-6 -top-6 h-20 w-20 rotate-12 rounded-full bg-amber-300/10" />
              <div className="relative flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-300/90 text-[#0C2D3A] font-semibold">
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
          {["We represent tenants’ interests professionally and respectfully", "Deep understanding of the Warsaw rental market", "A practical legal filter without overwhelming jargon", "A viewing checklist that helps you avoid costly risks", "Post move-in support instead of “sign and disappear”", "A trusted partner network for relocation and everyday setup"].map((item) => (
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
        headline="Ready to start?"
        description="We will contact you, ask a few questions, and show you the best next steps."
        messengerLabel="OR MESSAGE US IN YOUR PREFERRED CHAT APP"
        placeholders={{
          name: "Name",
          phone: "Phone",
          message: "Describe your request: districts, budget, move-in timeline, lease format",
        }}
        submitLabel="Call me back"
        privacyNote="By submitting the form, you confirm that you have read the privacy policy."
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
