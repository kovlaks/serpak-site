import { createSeoMetadata, seoAlternates } from "../../seo";
import { Button } from "../../../components/layout/Button";
import { Container } from "../../../components/layout/Container";
import { SiteFooterEn } from "../../../components/layout/SiteFooterEn";
import { SiteHeaderEnPartnership } from "../../../components/layout/SiteHeaderEnPartnership";

export const metadata = createSeoMetadata({
  title: "Real estate partnerships in Warsaw | SERPAKOWSKI Nieruchomości",
  description:
    "Partnership opportunities for agencies, private agents, investors and real estate market partners in Warsaw. We build cooperation that brings clients and transactions.",
  canonicalPath: "/en/partnership",
  languages: seoAlternates.partnership,
  locale: "en_US",
});

const operatorBenefits = [
  "Reaching clients interested in long-term rental",
  "Supporting clients through the rental process",
  "Communication in Polish, Russian, Ukrainian and English",
  "Additional benefits for tenants through a partner network",
  "Joint content and educational activities around rental in Warsaw",
];

const ecosystemAreas = [
  "Internet and telecommunications",
  "Moving and transport",
  "Apartment cleaning",
  "Rental and property insurance",
  "Handyman, furniture assembly and minor repairs",
  "Coffee chains and local benefits",
  "Fitness and activity",
  "Legalization support and assistance for foreigners",
  "Healthcare and private medical services",
  "Notaries",
  "Accounting and JDG support",
  "Home furnishing",
  "Catering and ready meals",
];

const partnerBenefits = [
  "Access to clients at the moment of real need",
  "Visibility on the SERPAKOWSKI Nieruchomości website as a partner, if cooperation is agreed",
  "Opportunity to prepare a discount code, voucher, priority service or dedicated benefit",
  "Joint marketing and content activities",
  "Possibility of client referrals or partner settlement models, if the cooperation model allows it",
  "Better end-client experience",
];

const clientBenefits = [
  "Less chaos after signing the lease",
  "Access to verified service providers",
  "Possible discounts, priority or dedicated conditions",
  "Easier start in a new apartment",
  "Greater sense of security",
  "Support not only before signing the agreement, but also after moving in",
];

const cooperationModels = [
  {
    title: "Client referrals",
    text: "Sharing contacts with people who genuinely need a specific service or rental offer.",
  },
  {
    title: "Dedicated client benefit",
    text: "A discount, voucher, priority service, special package or another form of added value.",
  },
  {
    title: "Shared visibility",
    text: "Presenting the partner on the website, in informational materials or in communication with the client.",
  },
  {
    title: "Joint content",
    text: "Guides, checklists, short educational materials or content about safe rental, moving and life in Warsaw.",
  },
  {
    title: "International client support",
    text: "Support for people who do not speak Polish well and need calm communication during the rental process.",
  },
];

const serviceExamples = [
  "Internet for a new apartment",
  "Moving and transport of belongings",
  "Cleaning before or after move-in",
  "Rental and property insurance",
  "Furniture assembly and minor repairs",
  "Legalization support, accounting and notary services",
  "Healthcare, fitness, catering and everyday services that make starting life in Warsaw easier",
];

const agencyExamples = [
  "Joint transactions",
  "Client referrals",
  "Support for Russian-, Ukrainian- and English-speaking clients",
  "Assistance with rental, sale or purchase",
  "Support for owners and investors",
];

const cooperationSteps = [
  {
    title: "Short conversation",
    text: "We understand what the partner does and whether the service fits our clients’ needs.",
  },
  {
    title: "Choosing the model",
    text: "We define whether cooperation is based on referrals, client benefits, joint content, website visibility or another solution.",
  },
  {
    title: "Practical test",
    text: "We start with a simple model that is easy to verify.",
  },
  {
    title: "Cooperation development",
    text: "If the model works, we can expand the scope, visibility and joint activities.",
  },
];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-2xl bg-white/5 px-4 py-4 text-sm leading-relaxed text-neutral-100/95 ring-1 ring-white/10"
        >
          <span className="mr-2 text-amber-300">•</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function SectionIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {children ? (
        <div className="mt-4 space-y-4 text-neutral-200/85 leading-relaxed">
          {children}
        </div>
      ) : null}
    </div>
  );
}

export default function PartnershipPageEn() {
  return (
    <div className="min-h-screen bg-[#0C2D3A] text-neutral-100">
      <SiteHeaderEnPartnership />
      <main>
        <section className="relative isolate overflow-hidden pt-24">
          <div className="absolute inset-0 -z-10">
            <img
              src="/Depositphotos_455695662_XL.jpg"
              alt="Warsaw skyline"
              className="h-full w-full object-cover object-[center_38%]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#061923]/50 via-[#0C2D3A]/55 to-[#0C2D3A]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,210,120,0.18),transparent_36%),radial-gradient(circle_at_82%_8%,rgba(255,255,255,0.16),transparent_34%)]" />
          </div>
          <Container>
            <div className="pb-24 pt-[42vh] sm:pb-28 sm:pt-[46vh] md:pb-32 md:pt-[50vh]">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200/85">
                B2B · rental · relocation · Warsaw
              </p>
              <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Partnership that attracts {" "}
                <span className="text-amber-300">clients</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-200/90">
                We are building a cooperation ecosystem around rental and real
                estate in Warsaw — for clients, property owners, agents, rental
                operators and service companies.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
                >
                  Discuss partnership
                </a>
                <Button href="#ecosystem">See cooperation areas</Button>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <SectionIntro
                eyebrow="Operators and PRS"
                title="For rental operators and institutional landlords"
              >
                <p>
                  We help rental operators, apartment portfolio owners and PRS
                  projects reach clients who are actively looking for housing in
                  Warsaw.
                </p>
                <p>
                  SERPAKOWSKI Nieruchomości can support partners in tenant
                  acquisition, offer presentation, communication with
                  international clients and building additional value around the
                  rental process.
                </p>
              </SectionIntro>
              <CheckList items={operatorBenefits} />
            </div>
          </Container>
        </section>

        <section className="py-6 sm:py-10">
          <Container>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#12465B] via-[#0E384A] to-[#0A2A38] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.38)] ring-1 ring-amber-200/30 sm:p-10 lg:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(255,210,120,0.18),transparent_34%)]" />
              <div className="relative max-w-4xl">
                <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">
                  Transparency and loyalty
                </p>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl">
                  Cooperation based on clear rules
                </h2>
                <div className="mt-5 space-y-4 text-lg leading-relaxed text-neutral-100/90">
                  <p>
                    In partner relationships, we focus on transparency, loyalty
                    and avoiding conflicts of interest. If a client comes to us
                    within a specific cooperation model, we respect the agreed
                    direction of action and do not build relationships at the
                    partner’s expense.
                  </p>
                  <p>
                    Good cooperation should strengthen both sides — not replace
                    one with the other.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="ecosystem" className="py-16 sm:py-20">
          <Container>
            <SectionIntro
              eyebrow="Ecosystem areas"
              title="Service ecosystem around rental"
            >
              <p>
                Apartment rental does not end with signing a lease. Clients
                often need internet, moving services, cleaning, insurance,
                technical help, legalization support, accounting, notary
                services, healthcare, fitness, home furnishing or catering.
              </p>
              <p>
                That is why we are developing a network of partners who can make
                it easier for clients to settle into a new place while
                increasing the value of the offer for rental operators, property
                owners and companies cooperating with SERPAKOWSKI Nieruchomości.
              </p>
              <p>
                We are interested in partnerships in areas such as:
              </p>
            </SectionIntro>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ecosystemAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-2xl bg-white/5 px-4 py-4 text-sm text-neutral-100/95 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/10 hover:ring-amber-200/30"
                >
                  {area}
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-8 sm:py-12">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <SectionIntro title="What can a partner gain?">
                  <p>
                    Cooperation with SERPAKOWSKI Nieruchomości gives partners
                    the opportunity to reach clients at a very specific moment:
                    when they are looking for housing, signing a lease, moving
                    or starting life in a new location.
                  </p>
                  <p>
                    This is the moment when the need for services is real,
                    urgent and natural.
                  </p>
                </SectionIntro>
                <div className="mt-7">
                  <CheckList items={partnerBenefits} />
                </div>
              </div>
              <div>
                <SectionIntro title="What does the client gain?">
                  <p>
                    Our goal is that after finding an apartment, the client is
                    not left alone with the next practical tasks. Well-matched
                    partners can help clients organize moving, internet,
                    cleaning, insurance, home furnishing and other practical
                    matters faster and more calmly.
                  </p>
                </SectionIntro>
                <div className="mt-7">
                  <CheckList items={clientBenefits} />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <SectionIntro
              eyebrow="Flexible models"
              title="Possible cooperation models"
            >
              <p>
                Cooperation can be flexible depending on partner category,
                client needs and the practical value we can create together.
              </p>
            </SectionIntro>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {cooperationModels.map((model) => (
                <article
                  key={model.title}
                  className="rounded-2xl bg-white/5 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.2)] ring-1 ring-white/10 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10 hover:ring-amber-200/30"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {model.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-200/85">
                    {model.text}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-8 sm:py-12">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <SectionIntro
                eyebrow="Service partners"
                title="For service companies"
              >
                <p>
                  We are interested in partnerships with companies that can
                  genuinely help clients before, during or after moving. This is
                  not about random advertising, but about a service appearing
                  exactly when the client needs it.
                </p>
              </SectionIntro>
              <CheckList items={serviceExamples} />
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <SectionIntro
                eyebrow="Real estate market"
                title="For agencies, agents and investors"
              >
                <p>
                  We are open to cooperation with real estate agencies,
                  independent agents, investors and property owners who value
                  transparent rules, good communication and practical results.
                </p>
                <p>
                  Cooperation may include joint transactions, client referrals,
                  support for international clients, property search,
                  communication with owners or organizing the rental process.
                </p>
              </SectionIntro>
              <CheckList items={agencyExamples} />
            </div>
          </Container>
        </section>

        <section className="py-8 sm:py-12">
          <Container>
            <SectionIntro title="How do we start?" />
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {cooperationSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-2xl bg-white/5 p-6 shadow-[0_10px_28px_rgba(0,0,0,0.2)] ring-1 ring-white/10 backdrop-blur-sm"
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-amber-200/80">
                    Step {index + 1}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-200/85">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="contact" className="relative isolate py-20">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(46,107,127,0.2),transparent_60%)]" />
          <Container>
            <div className="rounded-3xl bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 backdrop-blur-sm sm:p-10 lg:p-12">
              <h2 className="max-w-3xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Let’s discuss cooperation
              </h2>
              <p className="mt-5 max-w-3xl text-neutral-200/90 leading-relaxed">
                If you represent a rental operator, agency, service company,
                investor or project connected with the real estate market in
                Warsaw, contact us. We will be happy to check whether we can
                create a clear, transparent and practical cooperation model.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="mailto:kontakt@serpakowski.pl"
                  className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
                >
                  Contact us about partnership
                </a>
                <Button href="tel:+48453053969">Call</Button>
              </div>
              <div className="mt-8 grid gap-3 text-neutral-200/90 sm:grid-cols-2">
                <a
                  href="mailto:kontakt@serpakowski.pl"
                  className="rounded-2xl bg-white/5 px-4 py-4 ring-1 ring-white/10 transition hover:bg-white/10"
                >
                  kontakt@serpakowski.pl
                </a>
                <a
                  href="tel:+48453053969"
                  className="rounded-2xl bg-white/5 px-4 py-4 ring-1 ring-white/10 transition hover:bg-white/10"
                >
                  +48 453 053 969
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooterEn />
    </div>
  );
}
