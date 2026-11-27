import type { Metadata } from "next";
import { Container } from "../../../components/layout/Container";
import { SiteFooterEn } from "../../../components/layout/SiteFooterEn";
import { SiteHeaderEn } from "../../../components/layout/SiteHeaderEn";
import { FaqAccordion } from "../../pl/landlord/FaqAccordion";

const title = "2D Floor Plans for Property Listings | SERPAKOWSKI";
const description =
  "Professional 2D floor plans for residential property sales and rental listings in Poland. Clear layouts for owners, agents and real estate agencies. Individual quotes available.";
const canonical = "https://www.serpakowski.pl/en/rzut-mieszkania";

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
  "Clear room layout.",
  "Better property presentation.",
  "Suitable for rental and sales listings.",
  "Available as a standalone service.",
];

const benefits = [
  {
    title: "Better Understanding of the Space",
    description: "Prospective tenants and buyers can see where the rooms are and how they connect.",
  },
  {
    title: "Clearer Property Listings",
    description: "A floor plan complements the listing photos and property description.",
  },
  {
    title: "Easier Property Assessment",
    description: "Prospective tenants and buyers can assess whether the layout suits their needs before a viewing.",
  },
  {
    title: "Professional Presentation",
    description: "Consistent visuals help you present the property clearly.",
  },
];

const planDetails = [
  "Room arrangement.",
  "Wall layout.",
  "Door and window positions.",
  "Room labels.",
  "Approximate furniture placement.",
  "Additional spatial details, where suitable information is available.",
];

const audiences = [
  {
    title: "Property Owners Renting Out Apartments",
    description: "You want to show prospective tenants the apartment layout before they come for a viewing.",
  },
  {
    title: "Property Owners Selling Their Homes",
    description: "You want to add a clear floor plan to your sales listing.",
  },
  {
    title: "Real Estate Agents",
    description: "You need additional visual materials to present the properties you represent.",
  },
  {
    title: "Real Estate Agencies",
    description: "You want to use consistent, easy-to-read floor plans across your listings.",
  },
];

const uses = [
  "Property portal listings.",
  "Websites.",
  "Client information materials.",
  "Property presentations.",
  "Communication with prospective tenants and buyers.",
];

const steps = [
  {
    title: "Initial Contact",
    description: "You share the basic details of your property.",
  },
  {
    title: "Defining the Scope",
    description: "We review the available source materials and agree on the information needed and the scope of the floor plan.",
  },
  {
    title: "Preparing the Floor Plan",
    description: "We use the agreed information to create a clear visual representation of the apartment layout.",
  },
  {
    title: "Delivering the Material",
    description: "You receive the finished floor plan with the details we agreed to include.",
  },
];

const faqItems = [
  {
    question: "Can I order just the floor plan?",
    answer: ["Yes. The 2D floor plan is available as a standalone service."],
  },
  {
    question: "Can I use the floor plan in a sales listing?",
    answer: ["Yes. A floor plan can complement both sales and rental listings."],
  },
  {
    question: "Do I need to use your brokerage services?",
    answer: ["No. You can order a floor plan separately from our brokerage services."],
  },
  {
    question: "What information do you need to prepare the floor plan?",
    answer: ["The information we need depends on the available materials and the property itself. We agree on what is needed for each project."],
  },
  {
    question: "How much does a floor plan cost?",
    answer: ["We quote individually based on the size of the property and the scope of work."],
  },
  {
    question: "How long does it take to prepare a floor plan?",
    answer: ["We agree on a timeframe for each project before work begins."],
  },
  {
    question: "Can the floor plan replace the property’s technical documentation?",
    answer: ["No. Its main purpose is to present the property."],
  },
  {
    question: "Do you work with other real estate agents and agencies?",
    answer: ["Yes. The service is also available to real estate agents and agencies. We agree on the terms individually."],
  },
];

const headingClass = "font-serif text-3xl leading-tight text-white sm:text-4xl";
const bodyClass = "leading-relaxed text-neutral-200/90";
const panelClass = "rounded-3xl bg-[#123746] p-6 ring-1 ring-white/10 sm:p-8";
const cardClass = "rounded-2xl bg-[#0A2530] p-5 ring-1 ring-white/10";
const primaryCtaClass = "inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-center text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]";
const secondaryCtaClass = "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-center text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10";

function ExampleFloorPlan() {
  return (
    <figure className="-mx-2 min-w-0 rounded-2xl bg-[#0A2530] ring-1 ring-white/10 sm:mx-auto sm:w-full sm:max-w-lg sm:p-4">
      <svg
        className="block h-auto w-full rounded-2xl bg-neutral-100"
        viewBox="8 8 424 336"
        role="img"
        aria-labelledby="en-floor-plan-svg-title"
        aria-describedby="en-floor-plan-svg-description"
      >
        <title id="en-floor-plan-svg-title">Illustrative apartment layout with a balcony</title>
        <desc id="en-floor-plan-svg-description">
          The apartment entrance opens into a hallway that connects the living room, bedroom, kitchen and bathroom.
          Sliding doors in the living room lead to the balcony.
        </desc>

        {/* Rooms */}
        <path className="fill-neutral-200" d="M18 18h195v60H18z M298 227h124v107H298z" />
        <path className="fill-amber-50" d="M18 78h195v149H18z" />
        <path className="fill-amber-100" d="M213 78h209v149H213z M18 227h129v107H18z" />
        <path className="fill-neutral-50" d="M147 227h151v107H147z" />

        <g className="fill-neutral-50" stroke="#123746" strokeWidth="1.5" strokeLinejoin="round">
          {/* Balcony */}
          <circle cx="174" cy="46" r="9" />
          <rect x="169" y="59" width="10" height="9" rx="2" />
          <rect x="189" y="40" width="10" height="12" rx="2" />

          {/* Living room */}
          <rect x="76" y="102" width="54" height="57" rx="5" className="fill-amber-100" stroke="none" />
          <rect x="31" y="108" width="35" height="72" rx="5" />
          <path d="M40 109v70m0-47h25m-25 22h25" fill="none" />
          <rect x="87" y="117" width="27" height="27" rx="5" />
          <rect x="177" y="102" width="21" height="57" rx="2" />
          <path d="M189 113v35" fill="none" strokeWidth="2.5" />
          <rect x="108" y="194" width="26" height="8" rx="3" />
          <rect x="108" y="215" width="26" height="8" rx="3" />
          <rect x="99" y="200" width="44" height="17" rx="4" />

          {/* Bedroom */}
          <rect x="222" y="90" width="50" height="22" rx="2" />
          <path d="M247 90v22" fill="none" />
          <rect x="284" y="97" width="15" height="18" rx="2" />
          <rect x="380" y="97" width="15" height="18" rx="2" />
          <rect x="306" y="94" width="67" height="79" rx="4" />
          <rect x="311" y="100" width="26" height="17" rx="3" />
          <rect x="342" y="100" width="26" height="17" rx="3" />
          <rect x="306" y="123" width="67" height="50" rx="3" className="fill-amber-50" />

          {/* Kitchen */}
          <path d="M28 236h109v22H49v34H28z" />
          <rect x="34" y="241" width="25" height="12" rx="3" fill="none" />
          <path d="M46 240v6m28-10v22m49-22v22" fill="none" />
          <circle cx="98" cy="243" r="2.3" />
          <circle cx="110" cy="243" r="2.3" />
          <circle cx="98" cy="251" r="2.3" />
          <circle cx="110" cy="251" r="2.3" />

          {/* Hallway */}
          <rect x="157" y="237" width="22" height="14" rx="2" />
          <rect x="267" y="303" width="20" height="23" rx="2" />
          <path d="M277 303v23" fill="none" />

          {/* Bathroom */}
          <rect x="340" y="235" width="72" height="22" rx="5" />
          <rect x="346" y="239" width="60" height="14" rx="6" fill="none" />
          <rect x="305" y="235" width="25" height="17" rx="3" />
          <ellipse cx="317.5" cy="244" rx="7" ry="4" fill="none" />
          <rect x="386" y="264" width="22" height="7" rx="2" />
          <path d="M389 271h16v7a8 8 0 0 1-16 0z" />
        </g>

        {/* Walls and balcony railing */}
        <path
          d="M18 78V18h195v60m-189-5V24h183v49"
          fill="none"
          stroke="#123746"
          strokeWidth="1.5"
        />
        <g fill="none" stroke="#0C2D3A" strokeLinecap="square" strokeWidth="5.5">
          <path d="M18 103V78h42m78 0h139m83 0h62v256H247m-40 0H18v-35m0-26V158" />
          <path d="M18 227h145m42 0h40m42 0h135M213 78v149" />
          <path d="M147 227v31m0 33v43M298 227v34m0 33v40" />
        </g>

        {/* Windows, balcony doors and door swings */}
        <g fill="none" stroke="#0F3A4D" strokeWidth="1.5">
          <path d="M277 75h83v6h-83zm0 3h83" />
          <path d="M15 103h6v55h-6zm3 0v55M15 273h6v26h-6zm3 0v26" />
          <path d="M60 75h78m-78 2h43v3H60zm35 3h43v3H95z" />
          <path d="M205 227v-42a42 42 0 0 0-42 42m82 0v-42a42 42 0 0 1 42 42" />
          <path d="M147 291h-33a33 33 0 0 1 33-33M298 261h33a33 33 0 0 1-33 33" />
          <path d="M247 334v-40a40 40 0 0 0-40 40" />
        </g>

        <g className="fill-[#0C2D3A] font-sans font-semibold" textAnchor="middle" fontSize="25">
          <text x="102" y="56">Balcony</text>
          <text x="140" y="182" fontSize="20">Living Room</text>
          <text x="346" y="207">Bedroom</text>
          <text x="82.5" y="321">Kitchen</text>
          <text x="222.5" y="280">Hallway</text>
          <text x="360" y="321" fontSize="22">Bathroom</text>
        </g>
      </svg>
      <figcaption className="px-3 py-3 text-center text-sm text-amber-100 sm:px-0 sm:pb-0">
        Illustrative Apartment Floor Plan.
      </figcaption>
    </figure>
  );
}

export default function FloorPlanPage() {
  return (
    <div lang="en" className="flex min-h-screen flex-col bg-[#0C2D3A] text-neutral-100">
      <SiteHeaderEn />
      <main className="mx-auto w-full max-w-6xl flex-1">
        <Container className="space-y-14 pb-20 pt-28 sm:space-y-20">
          <section className="grid items-center gap-8 rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0C2D3A] px-4 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-12 lg:grid-cols-2 lg:gap-10">
            <div className="min-w-0 space-y-5">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">SERPAKOWSKI NIERUCHOMOŚCI</p>
                <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl">2D Floor Plan</h1>
                <p className="font-serif text-2xl text-white sm:text-3xl">Show the Space. Not Just the Photos.</p>
              </div>
              <div className={`space-y-3 ${bodyClass}`}>
                <p>A clear floor plan helps prospective tenants and buyers understand how rooms are arranged before scheduling a viewing.</p>
                <p>We prepare 2D floor plans for use in property rental and sales listings.</p>
              </div>
              <ul className="space-y-2 text-sm font-semibold text-amber-100">
                {heroBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span aria-hidden="true" className="text-amber-300">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={primaryCtaClass}>Request a Floor Plan</a>
            </div>
            <ExampleFloorPlan />
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Photos Show the Interior. A Floor Plan Shows the Layout.</h2>
            <div className={`max-w-3xl space-y-3 ${bodyClass}`}>
              <p>Photos show what the apartment looks like. A floor plan makes it easier to see how the rooms connect.</p>
              <p>A 2D floor plan adds context to the listing by showing how the space is organized and how it can be used.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map(({ title, description }) => (
                <article key={title} className={cardClass}>
                  <h3 className="font-serif text-xl text-white">{title}</h3>
                  <p className={`mt-2 ${bodyClass}`}>{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={panelClass}>
            <h2 className={headingClass}>What Can a 2D Floor Plan Show?</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {planDetails.map((detail) => (
                <li key={detail} className={`flex items-start gap-3 ${cardClass}`}>
                  <span aria-hidden="true" className="text-amber-300">✓</span>
                  <span className={bodyClass}>{detail}</span>
                </li>
              ))}
            </ul>
            <p className={`mt-5 ${bodyClass}`}>The scope of information included in each floor plan is agreed individually.</p>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Who Is This Service For?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {audiences.map(({ title, description }) => (
                <article key={title} className={panelClass}>
                  <h3 className="font-serif text-2xl text-white">{title}</h3>
                  <p className={`mt-3 ${bodyClass}`}>{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 rounded-3xl bg-[#0A2530] p-6 ring-1 ring-white/10 sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-10">
            <h2 className={headingClass}>One Floor Plan. Multiple Uses.</h2>
            <ul className={`list-disc space-y-2 pl-5 marker:text-amber-300 ${bodyClass}`}>
              {uses.map((use) => <li key={use}>{use}</li>)}
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>How Is a 2D Floor Plan Prepared?</h2>
            <ol role="list" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(({ title, description }, index) => (
                <li key={title} className={cardClass}>
                  <span aria-hidden="true" className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-300/20 text-sm font-semibold text-amber-100 ring-1 ring-amber-200/30">
                    0{index + 1}
                  </span>
                  <h3 className="font-serif text-xl text-white">{title}</h3>
                  <p className={`mt-2 ${bodyClass}`}>{description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className={panelClass}>
            <h2 className={headingClass}>How Much Does a 2D Floor Plan Cost?</h2>
            <div className={`mt-4 max-w-3xl space-y-3 ${bodyClass}`}>
              <p>Individual Quote</p>
              <p>We base your quote on the size of the property, the available source materials and the scope of work.</p>
              <p>We agree on the terms with you before work begins.</p>
            </div>
            <a href="#contact" className={`mt-6 ${primaryCtaClass}`}>Request a Quote</a>
          </section>

          <section className="space-y-5">
            <h2 className={headingClass}>You Don’t Need a Full Brokerage Service.</h2>
            <p className={`max-w-3xl ${bodyClass}`}>
              You can order a 2D floor plan as a standalone service, including when you rent out or sell your property yourself.
            </p>
            <div className="rounded-3xl bg-[#0A2530] p-6 ring-1 ring-white/10 sm:p-8">
              <h3 className="font-serif text-2xl text-white">Do You Need Full Brokerage Support to Rent Out Your Apartment?</h3>
              <p className={`mt-2 ${bodyClass}`}>Explore the two ways to pay for our brokerage services.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="/en/najem-solo" className={secondaryCtaClass}>Explore Najem Solo</a>
                <a href="/en/najem-split" className={secondaryCtaClass}>Explore Najem Split</a>
              </div>
            </div>
          </section>

          <section className={panelClass}>
            <h2 className="font-serif text-2xl text-white">Want to Show More Than the Floor Plan?</h2>
            <p className={`mt-2 max-w-3xl ${bodyClass}`}>
              Explore our Virtual 3D Tour service and let prospective tenants or buyers experience the property remotely.
            </p>
            <a href="/en/spacer-3d" className={`mt-5 ${secondaryCtaClass}`}>Explore Virtual 3D Tour</a>
          </section>

          <section className={panelClass}>
            <h2 className="font-serif text-2xl text-white">Nature of the Floor Plan</h2>
            <div className={`mt-3 max-w-3xl space-y-2 ${bodyClass}`}>
              <p>A 2D floor plan is intended primarily to present the property’s layout for informational and marketing purposes.</p>
              <p>It cannot replace architectural documentation, construction plans or professional technical measurements.</p>
              <p>It has no status as an official technical document.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Frequently Asked Questions</h2>
            <FaqAccordion items={faqItems} />
          </section>

          <section id="contact" className="scroll-mt-28 rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0A2530] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-10">
            <h2 className={headingClass}>Show Your Property’s Layout.</h2>
            <p className={`mt-4 max-w-2xl text-lg ${bodyClass}`}>
              Tell us about your property. We will discuss the scope of the floor plan and the terms of our cooperation.
            </p>
            <a href="/en#contact" className={`mt-6 ${primaryCtaClass}`}>Request a 2D Floor Plan</a>
            <p className={`mt-3 text-sm ${bodyClass}`}>Please mention “2D Floor Plan” in your message.</p>
          </section>
        </Container>
      </main>
      <SiteFooterEn />
    </div>
  );
}
