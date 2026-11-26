import type { Metadata } from "next";
import { Container } from "../../../components/layout/Container";
import { SiteFooterEn } from "../../../components/layout/SiteFooterEn";
import { SiteHeaderEn } from "../../../components/layout/SiteHeaderEn";
import { FaqAccordion } from "../../pl/landlord/FaqAccordion";

const title = "Virtual 3D Property Tours in Warsaw from PLN 500 | SERPAKOWSKI";
const description =
  "Interactive virtual 3D tours for apartments and houses in Warsaw, for sale and rental listings. Prices start from PLN 500, VAT included. Individual quotes available.";
const canonical = "https://www.serpakowski.pl/en/spacer-3d";

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

const heroBenefits = [
  "Interactive property presentation.",
  "Remote property viewing.",
  "Suitable for rental and sales listings.",
  "Available as a standalone service.",
];

const benefits = [
  {
    title: "Remote Property Viewing",
    description: "Prospective buyers and tenants can explore the interior without having to visit right away.",
  },
  {
    title: "Better Understanding of the Space",
    description: "A virtual tour helps people understand the layout and see how the rooms relate to one another.",
  },
  {
    title: "Modern Presentation",
    description: "An interactive presentation complements traditional property photos and the listing description.",
  },
  {
    title: "Convenience for Interested Clients",
    description: "Prospective clients can explore the property in more detail before arranging an in-person viewing.",
  },
  {
    title: "Support for Sales and Rentals",
    description: "A virtual tour can help showcase apartments and houses for sale or rent.",
  },
  {
    title: "Professional Marketing Materials",
    description: "Additional visual materials help you present the property in more detail.",
  },
];

const presentationTools = [
  {
    title: "Property Photos",
    description: "Photos show what the interior looks like, including its furnishings and key details.",
  },
  {
    title: "2D Floor Plan",
    description: "A floor plan shows where the rooms are in relation to each other and how the space is organised.",
    link: { href: "/en/rzut-mieszkania", label: "Explore 2D Floor Plans" },
  },
  {
    title: "Virtual 3D Tour",
    description: "A virtual tour lets people explore the property through an interactive presentation of its interior.",
  },
];

const audiences = [
  {
    title: "Owners Selling Apartments and Houses",
    description: "Show prospective buyers your property in a clear, modern format.",
  },
  {
    title: "Owners Renting Out Properties",
    description: "Help prospective tenants get to know the apartment before a viewing.",
  },
  {
    title: "Real Estate Agents",
    description: "Add an interactive property presentation to your listings.",
  },
  {
    title: "Real Estate Agencies",
    description: "Expand the range of marketing materials you use for the properties you represent.",
  },
];

const uses = [
  "Property sales listings.",
  "Rental listings.",
  "Websites.",
  "Marketing materials.",
  "Property presentations for clients.",
  "Remote communication with prospective buyers and tenants.",
];

const cooperationSteps = [
  {
    title: "Contact and Quote",
    description: "You share the basic details of your property. We agree on the scope of work and an individual quote.",
  },
  {
    title: "Scheduling",
    description: "We agree on when to prepare the materials and discuss the logistics for your property.",
  },
  {
    title: "Production",
    description: "We prepare the materials needed to create the virtual tour.",
  },
  {
    title: "Delivery",
    description: "You receive the finished presentation under the terms we agreed on.",
  },
];

const priceFactors = [
  "Property size.",
  "Number of rooms.",
  "Number of floors.",
  "Complexity of the property’s layout.",
  "Scope of the service.",
  "Agreed terms for making the presentation available.",
];

const faqItems = [
  {
    question: "What is a Virtual 3D Tour?",
    answer: ["A virtual 3D tour is an interactive property presentation that lets you explore the interior remotely and see how the rooms are arranged."],
  },
  {
    question: "How much does a virtual 3D tour cost?",
    answer: ["Prices start from PLN 500, VAT included. We quote individually based on the size of the property, the number of rooms and the scope of work."],
  },
  {
    question: "Do you create virtual tours for apartments and houses?",
    answer: ["Yes. We agree on the scope of work and quote individually for each property."],
  },
  {
    question: "Can I order a virtual tour separately from your brokerage services?",
    answer: ["Yes. The Virtual 3D Tour is available as a standalone service."],
  },
  {
    question: "Can I use the tour in a sales or rental listing?",
    answer: ["Yes, depending on the technical capabilities of the platform where you publish the listing."],
  },
  {
    question: "How long does it take to prepare a virtual tour?",
    answer: ["We agree on a timeframe for each project before we begin working together."],
  },
  {
    question: "How long will the virtual tour be available online?",
    answer: ["We agree individually on how long the presentation will be available and on the terms for making it available."],
  },
  {
    question: "Does a virtual tour replace an in-person viewing?",
    answer: ["No. It gives prospective buyers and tenants another way to get to know the property before an in-person viewing."],
  },
  {
    question: "Can I also order a 2D floor plan?",
    answer: ["Yes. The 2D floor plan is a standalone service that can complement the virtual tour."],
  },
  {
    question: "Do you work with other real estate agents and agencies?",
    answer: ["Yes. The service is also available to real estate agents and agencies. We agree on the terms individually."],
  },
];

const headingClass = "font-serif text-3xl leading-tight text-white sm:text-4xl";
const bodyClass = "leading-relaxed text-neutral-200/90";
const cardClass = "rounded-2xl bg-[#0A2530] p-5 ring-1 ring-white/10";
const panelClass = "rounded-3xl bg-[#123746] p-6 ring-1 ring-white/10 sm:p-8";
const primaryCtaClass = "inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-center text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]";
const secondaryCtaClass = "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-center text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10";

function TourIllustration() {
  return (
    <figure className="min-w-0 rounded-3xl bg-gradient-to-br from-[#123746] to-[#0A2530] p-3 ring-1 ring-white/10 sm:p-5">
      <svg
        viewBox="0 0 680 378"
        role="img"
        aria-labelledby="en-tour-illustration-title en-tour-illustration-description"
        className="block h-auto w-full"
      >
        <title id="en-tour-illustration-title">Path Between Rooms</title>
        <desc id="en-tour-illustration-description">
          Illustrative interior layout showing a route from the living room through the hallway to the bedroom.
        </desc>
        <path d="M250 63 646 198 412 365 16 230Z" fill="#0A2530" />
        <g transform="matrix(.88 .30 -.65 .43 250 50)">
          <path d="M0 0H450V360H0Z" fill="#0F3A4D" stroke="white" strokeOpacity=".28" strokeWidth="2" />
          <path d="M0 0H165V360H0ZM280 0H450V360H280Z" fill="#123746" />
          <path d="M0 90H450M0 180H450M0 270H450M82 0V360M355 0V360" stroke="white" strokeOpacity=".14" strokeWidth="2" />
          <rect x="26" y="134" width="116" height="180" rx="14" fill="#0A2530" stroke="white" strokeOpacity=".28" strokeWidth="2" />
        </g>
        <path d="M16 205 250 50 646 185V150L250 15 16 170Z" fill="#123746" />
        <path d="M250 15 16 170V205L250 50Z" fill="#0F3A4D" />
        <path d="M16 170 250 15 646 150M250 15V50" fill="none" stroke="white" strokeOpacity=".35" strokeWidth="2" />
        <path d="M276 41 365 71M497 116 601 151" stroke="white" strokeOpacity=".45" strokeWidth="4" strokeLinecap="round" />
        <g transform="matrix(.88 .30 -.65 .43 250 50)">
          <g transform="translate(0 10)" fill="#0A2530">
            <rect x="23" y="147" width="45" height="151" rx="10" />
            <rect x="87" y="152" width="45" height="57" rx="12" />
            <rect x="320" y="153" width="105" height="160" rx="10" />
          </g>
          <rect x="23" y="147" width="45" height="151" rx="10" fill="white" fillOpacity=".43" />
          <path d="M34 160V284M35 204H63M35 244H63" fill="none" stroke="#123746" strokeWidth="3" />
          <rect x="87" y="152" width="45" height="57" rx="12" fill="#0F3A4D" />
          <rect x="320" y="153" width="105" height="160" rx="10" fill="white" fillOpacity=".43" />
          <path d="M323 210H422V302Q422 310 414 310H331Q323 310 323 302Z" fill="#0F3A4D" />
          <rect x="329" y="163" width="38" height="35" rx="6" fill="white" fillOpacity=".58" />
          <rect x="378" y="163" width="38" height="35" rx="6" fill="white" fillOpacity=".58" />
        </g>
        <g fill="#0F3A4D" stroke="white" strokeOpacity=".35" strokeWidth="1.5" strokeLinejoin="round">
          <path d="M395.2 99.5 266.5 184.6V163.6L395.2 78.5ZM215.8 218.1 161.2 254.3V233.3L215.8 197.1Z" />
          <path d="M496.4 134 451.6 163.7V142.7L496.4 113ZM405.4 194.2 262.4 288.8V267.8L405.4 173.2Z" />
        </g>
        <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-amber-300">
          <path d="M167 185 280.5 224 372 163 500 207" strokeDasharray="4 8" />
          <path d="m226 200 10 9-13 1m197-32 10 9-13 1" />
        </g>
        <g fill="#0A2530" stroke="currentColor" strokeWidth="3" className="text-amber-300">
          <circle cx="167" cy="185" r="9" />
          <circle cx="329" cy="192" r="9" />
          <circle cx="500" cy="207" r="9" />
        </g>
        <g fill="currentColor" className="text-amber-300">
          <circle cx="167" cy="185" r="3" />
          <circle cx="329" cy="192" r="3" />
          <circle cx="500" cy="207" r="3" />
        </g>
      </svg>
      <figcaption className="px-2 pb-2 text-center text-sm text-neutral-200/90">Illustrative Visualisation.</figcaption>
    </figure>
  );
}

export default function VirtualTourPage() {
  return (
    <div lang="en" className="flex min-h-screen flex-col bg-[#0C2D3A] text-neutral-100">
      <SiteHeaderEn />
      <main className="mx-auto w-full max-w-6xl flex-1">
        <Container className="space-y-14 pb-20 pt-28 sm:space-y-20">
          <section className="rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0C2D3A] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-12">
            <div className="grid items-start gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-x-12">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">SERPAKOWSKI NIERUCHOMOŚCI</p>
                <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl">Virtual 3D Tour</h1>
                <p className="font-serif text-2xl text-white sm:text-3xl">Show Your Property As If Your Client Were There.</p>
              </div>
              <div className={`space-y-3 ${bodyClass}`}>
                <p>A virtual tour allows prospective buyers and tenants to explore a property remotely, view individual rooms and better understand how the interior is arranged.</p>
                <p>It is a modern way to present apartments and houses, complementing traditional photographs and property descriptions.</p>
              </div>
              <div className="rounded-3xl bg-[#0A2530] p-5 ring-1 ring-amber-200/25 sm:p-6 lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:self-center">
                <p className="font-serif text-4xl leading-tight text-amber-300 sm:text-5xl">From PLN 500</p>
                <p className={`mt-3 text-sm ${bodyClass}`}>
                  VAT included. Final pricing depends on the property’s size and the scope of the service.
                </p>
                <ul className="mt-5 space-y-2 border-t border-white/10 pt-5 text-sm font-semibold text-amber-100">
                  {heroBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span aria-hidden="true" className="text-amber-300">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a href="#contact" className={primaryCtaClass}>Request a Virtual 3D Tour</a>
                <a href="#details" className={secondaryCtaClass}>Explore Details</a>
              </div>
            </div>
          </section>

          <section className="grid items-center gap-6 lg:grid-cols-[2fr_3fr] lg:gap-10">
            <div className="space-y-4">
              <h2 className={headingClass}>See More Than Traditional Photos Can Show.</h2>
              <p className={bodyClass}>
                A virtual tour lets you move from room to room in an apartment or house and get a feel for the interior. The diagram traces a route from the living room through the hallway to the bedroom to illustrate how the rooms connect.
              </p>
            </div>
            <TourIllustration />
          </section>

          <section id="details" className="scroll-mt-28 space-y-6">
            <h2 className={`max-w-3xl ${headingClass}`}>Let Clients Explore Your Property From Anywhere.</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map(({ title, description }) => (
                <article key={title} className={cardClass}>
                  <h3 className="font-serif text-xl text-white">{title}</h3>
                  <p className={`mt-2 ${bodyClass}`}>{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={`space-y-6 ${panelClass}`}>
            <h2 className={headingClass}>Photos, 2D Floor Plan or Virtual 3D Tour?</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {presentationTools.map(({ title, description, link }) => (
                <article key={title} className={`flex flex-col items-start gap-3 ${cardClass}`}>
                  <h3 className="font-serif text-xl text-white">{title}</h3>
                  <p className={`grow ${bodyClass}`}>{description}</p>
                  {link ? <a href={link.href} className={secondaryCtaClass}>{link.label}</a> : null}
                </article>
              ))}
            </div>
            <p className="max-w-3xl font-semibold leading-relaxed text-amber-100">
              Each tool serves a different purpose. Together, they can give prospective buyers and tenants a fuller picture of the property.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Who Is the Virtual 3D Tour For?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {audiences.map(({ title, description }) => (
                <article key={title} className={cardClass}>
                  <h3 className="font-serif text-xl text-white">{title}</h3>
                  <p className={`mt-2 ${bodyClass}`}>{description}</p>
                </article>
              ))}
            </div>
            <p className="font-semibold leading-relaxed text-amber-100">
              We create virtual tours of apartments and houses in Warsaw. You can order a Virtual 3D Tour as a standalone service, separately from our comprehensive brokerage service.
            </p>
          </section>

          <section className={`space-y-5 ${panelClass}`}>
            <h2 className={headingClass}>One Presentation. Multiple Uses.</h2>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {uses.map((use) => (
                <li key={use} className={`flex items-start gap-3 ${cardClass}`}>
                  <span aria-hidden="true" className="text-amber-300">✓</span>
                  {use}
                </li>
              ))}
            </ul>
            <p className={`max-w-3xl ${bodyClass}`}>
              Whether a virtual tour can be embedded or linked in a listing depends on the technical requirements of the external property platform.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>How Is a Virtual 3D Tour Created?</h2>
            <ol role="list" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cooperationSteps.map(({ title, description }, index) => (
                <li key={title} className={cardClass}>
                  <span aria-hidden="true" className="font-serif text-2xl text-amber-300">0{index + 1}.</span>
                  <h3 className="mt-2 font-serif text-xl text-white">{title}</h3>
                  <p className={`mt-2 ${bodyClass}`}>{description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="grid items-center gap-6 rounded-3xl bg-gradient-to-r from-[#123746] to-[#0A2530] p-6 ring-1 ring-amber-200/25 sm:p-10 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h2 className={headingClass}>How Much Does a Virtual 3D Tour Cost?</h2>
              <p className="font-serif text-4xl leading-tight text-amber-300 sm:text-5xl">From PLN 500, VAT Included</p>
              <p className={bodyClass}>The price depends on the property’s characteristics and the scope of the work.</p>
              <p className="font-semibold leading-relaxed text-white">The final quote is agreed individually before work begins.</p>
              <a href="#contact" className={primaryCtaClass}>Request a Quote</a>
            </div>
            <div className={cardClass}>
              <h3 className="font-serif text-xl text-white">What Affects the Quote?</h3>
              <ul className={`mt-3 list-disc space-y-2 pl-5 marker:text-amber-300 ${bodyClass}`}>
                {priceFactors.map((factor) => <li key={factor}>{factor}</li>)}
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>A Complete Presentation of Your Property.</h2>
            <div className="grid gap-4 lg:grid-cols-2">
              <article className={panelClass}>
                <h3 className="font-serif text-2xl text-white">2D Floor Plan</h3>
                <p className={`mt-3 ${bodyClass}`}>A clear property floor plan that complements photographs and the virtual tour.</p>
                <a href="/en/rzut-mieszkania" className={`mt-5 ${secondaryCtaClass}`}>Explore This Service</a>
              </article>
              <article className={panelClass}>
                <h3 className="font-serif text-2xl text-white">Need Help Renting Out Your Property?</h3>
                <p className={`mt-3 ${bodyClass}`}>We offer comprehensive brokerage services to help you let your property.</p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a href="/en/najem-solo" className={secondaryCtaClass}>Explore Najem Solo</a>
                  <a href="/en/najem-split" className={secondaryCtaClass}>Explore Najem Split</a>
                </div>
              </article>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className={headingClass}>Frequently Asked Questions</h2>
            <FaqAccordion items={faqItems} />
          </section>

          <section id="contact" className="scroll-mt-28 rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0A2530] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-10">
            <h2 className={headingClass}>Present Your Property in a Modern Way.</h2>
            <p className={`mt-4 max-w-2xl text-lg ${bodyClass}`}>
              Tell us about your property. We will prepare an individual quote for a virtual 3D tour and discuss the details of the service.
            </p>
            <a href="/en#contact" className={`mt-6 ${primaryCtaClass}`}>Request a Virtual 3D Tour</a>
            <p className={`mt-3 text-sm ${bodyClass}`}>Please mention “Virtual 3D Tour” and provide the approximate property size in your message.</p>
          </section>
        </Container>
      </main>
      <SiteFooterEn />
    </div>
  );
}
