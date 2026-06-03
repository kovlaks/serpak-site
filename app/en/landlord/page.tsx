import { createSeoMetadata, seoAlternates } from "../../seo";
import HomeContactForm from "../../../components/common/HomeContactForm";
import { SiteFooterEn } from "../../../components/layout/SiteFooterEn";
import { SiteHeaderEnLandlord } from "../../../components/layout/SiteHeaderEnLandlord";

export const metadata = createSeoMetadata({
  title: "Rent out your apartment in Warsaw | SERPAKOWSKI Nieruchomości",
  description: "Support for landlords in Warsaw: listing preparation, tenant screening, lease agreement, handover protocol and secure rental management assistance.",
  canonicalPath: "/en/landlord",
  languages: seoAlternates.landlord,
  locale: "en_US",
});

const rentalProcess = [
  "we evaluate the market rental price",
  "we compare the apartment with similar offers",
  "we prepare recommendations before publication",
  "we help increase the apartment’s attractiveness",
  "we prepare photos, video and description",
  "we publish the listing",
  "we communicate with candidates",
  "we organize viewings",
  "we collect basic information about potential tenants",
  "we help verify the candidate",
  "we agree the lease, deposit and utility payment terms",
  "we prepare the apartment handover and handover protocol",
];

const valuationItems = [
  "determine the market rental price",
  "compare the apartment with similar properties",
  "understand the apartment’s strengths and weaker points",
  "prepare recommendations before viewings",
  "identify what may increase the price or attractiveness of the offer",
];

const listingItems = [
  "photo and video materials",
  "a clear apartment description",
  "emphasis on the property’s advantages",
  "recommendations for preparing the apartment for viewings",
  "the listing for publication",
];

const candidateItems = [
  "we answer candidates’ questions",
  "we organize viewings",
  "we clarify basic information",
  "we filter out unsuitable inquiries",
  "we present the owner with candidates who meet the apartment’s conditions",
];

const verificationItems = [
  "collect basic information about the candidate",
  "check documents and basic data",
  "analyze payment capacity",
  "use Simple.rent or another tool available in the specific situation",
  "clarify rental conditions before signing the agreement",
  "communicate with foreign tenants if necessary",
];

const leaseItems = [
  "preparing or agreeing the lease agreement",
  "deposit, payment and utility cost terms",
  "organizing najem okazjonalny if this format fits the situation",
  "coordinating the notary",
  "preparing the apartment handover protocol",
  "documenting the apartment’s condition",
  "handing over the keys",
];

const updateItems = [
  "after apartment preparation",
  "after publishing the listing",
  "after the first inquiries",
  "after viewings",
  "after candidate selection",
  "after choosing the tenant",
  "after signing the agreement and handing over the apartment",
];

const supportItems = [
  "monitoring payment inflows",
  "communication with the tenant",
  "coordinating minor repairs",
  "periodic apartment inspections",
  "reports for the owner",
  "assistance with everyday matters",
  "reminders about important dates under the agreement",
];

const nextStepItems = [
  "analyzing the situation before the agreement ends",
  "negotiating an extension",
  "renewing the agreement",
  "reviewing the rental price",
  "preparing the apartment for the next rental period",
  "searching for a new tenant in advance if the current tenant does not extend the agreement",
];

const faqs = [
  {
    question: "Why do I need an agency if I can rent out the apartment myself?",
    answer:
      "Renting out an apartment independently is possible. In that case, the owner handles the price evaluation, listing publication, messages, viewings, candidate selection, document checks, agreement and handover. We take care of organizing the process and help reduce the risk of random decisions.",
  },
  {
    question: "Who chooses the tenant?",
    answer:
      "The final decision remains with the owner. We collect information, check candidates using available tools and provide recommendations, but the tenant choice is agreed with the apartment owner.",
  },
  {
    question: "How do you verify tenants?",
    answer:
      "We collect basic information, check documents, analyze payment capacity and can use Simple.rent or another tool available in the specific situation. We also clarify important rental conditions in advance to reduce the risk of misunderstandings after signing the agreement.",
  },
  {
    question: "Do you help with najem okazjonalny?",
    answer:
      "Yes, we can help organize the najem okazjonalny process if this format fits the situation: agree the steps, prepare the parties and coordinate the notary.",
  },
  {
    question: "What is included in the service fee?",
    answer:
      "The service fee is 100% of one month’s rent. This includes organizing the apartment rental process: evaluation, offer preparation, listing publication, communication with candidates, viewings, tenant selection, support with verification, agreement and apartment handover.",
  },
  {
    question: "Who pays the commission — the owner or the tenant?",
    answer:
      "Our recommended model is that the service is paid by the owner. Then the apartment can be offered to tenants without a separate agency commission. This format usually makes the offer more attractive: the tenant sees clear move-in terms from the beginning and does not face a large additional payment when signing the agreement.",
  },
  {
    question: "Can the commission be split 50/50?",
    answer:
      "Yes, this model is possible. The commission can be split between the owner and the tenant. However, it is important to remember that even a partial commission on the tenant’s side may affect interest in the apartment, especially if there are similar offers nearby without an agency commission paid by the tenant. That is why we explain the pros and cons of this model in advance and help choose the option that best fits the specific apartment and market situation.",
  },
  {
    question: "Can the tenant pay the full commission?",
    answer:
      "Yes, this option is possible, but we do not consider it optimal in every situation. If the tenant has to pay a separate agency commission, the offer may become less attractive compared with similar apartments without such a fee. This may reduce the number of inquiries or extend the time needed to find a tenant. That is why we recommend evaluating the apartment, competition and demand first, and only then choosing the payment model.",
  },
  {
    question: "Can the commission cost be recovered through rent?",
    answer:
      "Yes, in some cases the service cost can be included in the rental rate. For example, if the commission equals one month’s rent, it can be gradually recovered through a small price increase of approximately 8–8.5% over 12 months. Before doing this, we evaluate the apartment and the market to understand what price can realistically be used without risking a longer rental process.",
  },
  {
    question: "What happens when the agreement is extended?",
    answer:
      "If the tenant extends the agreement and the price remains unchanged, nothing changes for the tenant: they continue paying the same rent. For the owner, this means that after the first year, the surplus that helped recover the service cost may become additional income.",
  },
  {
    question: "Can ongoing support be added after the apartment is rented out?",
    answer:
      "Yes. After signing the agreement, extended support can be discussed: communication with the tenant, payment monitoring, minor repairs, reports and reminders related to the agreement.",
  },
];

function BulletGrid({ items, variant = "default" }: { items: string[]; variant?: "default" | "dark" }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item} className={`rounded-xl px-4 py-3 text-sm leading-relaxed text-neutral-100 ring-1 ring-white/10 ${variant === "dark" ? "bg-[#0A2530]" : "bg-white/5"}`}>
          • {item}
        </li>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0C2D3A] text-neutral-100">
      <SiteHeaderEnLandlord />
      <main className="mx-auto max-w-6xl space-y-16 px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0C2D3A] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,193,7,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_35%)]" />
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Owner support in Warsaw</p>
              <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
                Rent out your apartment in Warsaw safely, profitably and without unnecessary chaos
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-neutral-200/90">
                SERPAKOWSKI Nieruchomości helps property owners rent out apartments: evaluate the price, prepare the offer, find and verify a tenant, agree the lease terms and hand over the apartment properly.
              </p>
              <p className="max-w-2xl text-neutral-200/85">
                We organize the process so that you do not waste time on random inquiries, repeated questions, viewings, documents and risky decisions.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                  Find out how much you can rent your apartment for
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10">
                  Discuss renting out your apartment
                </a>
              </div>
            </div>
            <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-2xl font-semibold text-white">A managed rental process</h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-200/85">
                From apartment evaluation and offer preparation to tenant verification, lease terms and the documented handover of keys.
              </p>
              <div className="mt-6 grid gap-3">
                {["Evaluate", "Prepare", "Publish", "Verify", "Agree", "Hand over"].map((item) => (
                  <div key={item} className="rounded-xl bg-white/5 px-4 py-3 text-sm font-semibold text-amber-100 ring-1 ring-amber-200/20">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-[#0A2530] p-6 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8">
          <h2 className="font-serif text-3xl text-white">Renting out an apartment is not just publishing a listing</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-neutral-200/90">
            At first glance, renting out an apartment may look simple: take photos, publish a listing and choose a tenant. In practice, owners often face chaos: dozens of messages, rescheduled viewings, unsuitable candidates, negotiations, questions about documents and the risk of making a decision too quickly.
          </p>
          <p className="mt-4 max-w-4xl leading-relaxed text-neutral-200/90">
            Our task is to guide the process calmly and step by step: from apartment evaluation to signing the lease and handing over the keys.
          </p>
        </section>

        <section>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Scope of work</p>
              <h2 className="mt-2 font-serif text-3xl text-white">What we take care of</h2>
            </div>
            <a href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] transition hover:-translate-y-0.5">
              Get a rental plan
            </a>
          </div>
          <p className="mt-4 max-w-4xl leading-relaxed text-neutral-200/90">We organize the full apartment rental process:</p>
          <div className="mt-6">
            <BulletGrid items={rentalProcess} />
          </div>
          <p className="mt-6 max-w-4xl rounded-2xl bg-white/5 p-5 text-sm leading-relaxed text-neutral-200/85 ring-1 ring-white/10">
            The owner keeps control and makes the final decision, but does not have to manage every detail manually.
          </p>
        </section>

        <section id="valuation" className="scroll-mt-28 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Price evaluation</p>
              <h2 className="mt-2 font-serif text-3xl text-white">We evaluate the apartment and help you avoid renting below market level</h2>
              <p className="mt-4 leading-relaxed text-neutral-200/90">
                Before publication, it is important to understand how the apartment looks compared with other offers in Warsaw: what price is realistic, what may make renting more difficult and what improvements may increase tenant interest.
              </p>
              <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] transition hover:-translate-y-0.5">
                Evaluate the apartment
              </a>
            </div>
            <div>
              <BulletGrid items={valuationItems} variant="dark" />
              <p className="mt-5 rounded-2xl bg-[#0A2530] p-5 text-sm leading-relaxed text-neutral-200/85 ring-1 ring-white/10">
                We can also suggest solutions that may help increase the rental price — both for the first rental period and for the next rental term, especially if the tenant wants to extend the agreement. The result depends on the apartment and current market conditions.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-[#0A2530] p-6 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8">
          <h2 className="font-serif text-3xl text-white">We prepare the apartment and listing for publication</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-neutral-200/90">A good listing should not only show the apartment, but also clearly explain its value to the tenant.</p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-amber-200/80">We help prepare</p>
          <div className="mt-4">
            <BulletGrid items={listingItems} />
          </div>
          <p className="mt-6 max-w-4xl text-neutral-200/90">If needed, we can also organize cleaning, minor repairs or apartment preparation for photos and viewings.</p>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-white">We find and select suitable candidates</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-neutral-200/90">
            After publishing the listing, the owner often receives many messages, but not every inquiry matches the apartment’s conditions.
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-amber-200/80">We take care of the initial communication</p>
          <div className="mt-4">
            <BulletGrid items={candidateItems} />
          </div>
          <p className="mt-6 max-w-4xl rounded-2xl bg-white/5 p-5 leading-relaxed text-neutral-200/90 ring-1 ring-white/10">
            Our goal is not just to find someone who wants to rent the apartment, but to help choose a tenant with whom the rental process will be clear and safe.
          </p>
        </section>

        <section className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Tenant verification</p>
              <h2 className="mt-2 font-serif text-3xl text-white">We help verify the tenant before the agreement</h2>
              <p className="mt-4 leading-relaxed text-neutral-200/90">
                A first impression is not enough. Before signing the lease, it is important to understand who will live in the apartment, whether the candidate matches the owner’s conditions and whether they are ready to meet their financial obligations.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-neutral-200/80">
                This approach helps reduce the risk of misunderstandings, payment delays and problems after move-in.
              </p>
              <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] transition hover:-translate-y-0.5">
                Discuss safe apartment rental
              </a>
            </div>
            <BulletGrid items={verificationItems} variant="dark" />
          </div>
        </section>

        <section className="rounded-3xl bg-[#0A2530] p-6 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8">
          <h2 className="font-serif text-3xl text-white">We support the lease agreement, najem okazjonalny and apartment handover</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-neutral-200/90">
            When the tenant is selected, it is important to properly agree the rental terms and document the condition of the apartment.
          </p>
          <div className="mt-6">
            <BulletGrid items={leaseItems} />
          </div>
          <p className="mt-6 max-w-4xl rounded-2xl bg-white/5 p-5 text-sm leading-relaxed text-neutral-200/85 ring-1 ring-white/10">
            The owner receives not just a tenant, but a carefully managed apartment rental process with clear conditions and documented arrangements. This is support, coordination and agreement assistance, not legal advice.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-white">You keep control at every stage</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-neutral-200/90">
            Even if the owner does not participate in every conversation, it is important to understand what is happening with the apartment.
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-amber-200/80">We can provide short updates</p>
          <div className="mt-4">
            <BulletGrid items={updateItems} />
          </div>
          <p className="mt-6 max-w-4xl text-neutral-200/90">
            You see how the process is going, which candidates appear, what questions arise and why we recommend a particular next step.
          </p>
        </section>

        <section className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">After the apartment is rented out</p>
          <h2 className="mt-2 font-serif text-3xl text-white">Ongoing rental support can be added</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-neutral-200/90">
            After signing the agreement, the owner may need help not only with finding a tenant, but also with ongoing communication.
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-amber-200/80">In an extended format, we can discuss</p>
          <div className="mt-4">
            <BulletGrid items={supportItems} variant="dark" />
          </div>
          <p className="mt-6 max-w-4xl text-neutral-200/90">This is especially useful for owners who do not want to handle constant communication with the tenant themselves.</p>
          <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] transition hover:-translate-y-0.5">
            Ask about rental support
          </a>
        </section>

        <section className="rounded-3xl bg-[#0A2530] p-6 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8">
          <h2 className="font-serif text-3xl text-white">We prepare the next step before the agreement ends</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-neutral-200/90">
            A good rental should not end unexpectedly on the last day of the agreement. It is better to know in advance whether there will be an extension, whether the price should change and when to start looking for the next tenant.
          </p>
          <div className="mt-6">
            <BulletGrid items={nextStepItems} />
          </div>
          <p className="mt-6 max-w-4xl text-neutral-200/90">The goal is to reduce the risk of vacancy and prepare the next step in advance.</p>
        </section>

        <section id="cost" className="scroll-mt-28 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Cost and payment model</p>
              <h2 className="mt-2 font-serif text-3xl text-white">The service fee is 100% of one month’s rent</h2>
              <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] transition hover:-translate-y-0.5">
                Calculate the rental price
              </a>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-neutral-200/90">
              <p>
                Our recommended model is that the service is paid by the owner. In this case, the apartment can be offered to tenants without a separate agency commission, making the terms clearer and more attractive on the market.
              </p>
              <p>
                Other options are also possible: splitting the commission 50/50 between the owner and the tenant, or having the tenant pay the service fee. We discuss this individually and explain in advance how the selected model may affect interest in the apartment.
              </p>
              <p>
                To make the commission less of a direct loss for the owner, we can help include the service cost in the rental rate. If the apartment and the market allow it, a small price increase of approximately 8–8.5% may recover the service cost over 12 months.
              </p>
              <p>
                If the tenant extends the agreement and the price remains unchanged, nothing changes for the tenant: they continue paying the same rent. For the owner, this may become additional income after the first year of rental.
              </p>
            </div>
          </div>
        </section>

        <section>
          <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Questions from owners</p>
          <h2 className="mt-2 font-serif text-3xl text-white">Frequently asked questions</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-200/85">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="relative scroll-mt-28 overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0A2530] p-8 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-10">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(46,107,127,0.18),transparent_60%)]" />
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Leave a request</p>
              <h2 className="mt-2 font-serif text-3xl text-white sm:text-4xl">Do you want to rent out your apartment safely and without extra burden?</h2>
              <p className="mt-4 max-w-md leading-relaxed text-neutral-200/90">
                Leave a request — we will clarify the apartment details, evaluate the situation and propose a clear action plan.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] transition hover:-translate-y-0.5">
                  Leave a request
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10">
                  Discuss renting out your apartment
                </a>
              </div>
              <p className="mt-5 text-xs leading-relaxed text-neutral-200/70">
                By submitting the form, you confirm that you have read the{" "}
                <a href="/en/privacy" className="underline underline-offset-2 hover:text-white">
                  privacy policy
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
