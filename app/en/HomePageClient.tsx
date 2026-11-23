"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import HomeContactForm from "../../components/common/HomeContactForm";
import { Button } from "../../components/layout/Button";
import { Container } from "../../components/layout/Container";
import { SiteFooterEn } from "../../components/layout/SiteFooterEn";
import { SiteHeaderEn } from "../../components/layout/SiteHeaderEn";

const highlightWords = [
  "opportunities",
  "perspectives",
  "solutions",
  "standards",
  "benefits",
];

const paymentOptions = [
  {
    title: "Najem Solo",
    accent: "1 payment",
    description: "A single commission payment for comprehensive letting services.",
    price: "100% of one month's base rent.",
    href: "/pl/najem-solo",
  },
  {
    title: "Najem Split",
    accent: "12 instalments",
    note: "Interest-free",
    description: "The same service and the same total commission, paid in 12 monthly instalments.",
    price: "100% of one month's base rent in total.",
    href: "/pl/najem-split",
  },
];

const advantages = [
  {
    accent: "12",
    title: "Interest-Free Instalments",
    description: "Spread your commission over 12 monthly payments with no additional interest.",
    href: "/pl/najem-split",
  },
  {
    accent: "Up to 100%",
    title: "Discount on Reletting",
    description: "The remaining portion of your previous commission may reduce the cost of finding your next tenant.",
    note: "Subject to the agreement terms.",
    href: "/pl/najem-solo",
  },
  {
    accent: "PLN 0",
    title: "Tenant Commission",
    description: "Under our landlord-focused brokerage model, the owner pays the agency commission.",
    href: "/pl/landlord",
  },
  {
    accent: "14 days",
    title: "Additional Support",
    description: "Assistance with urgent matters after the property has been handed over to the tenant.",
    href: "/pl/landlord",
  },
  {
    accent: "Tailored",
    title: "Lease Agreement",
    description: "A lease agreement drafted to reflect your property and rental terms.",
    href: "/pl/umowa-najmu",
  },
  {
    accent: "2D Floor Plan",
    title: "Property Layout",
    description: "A clear floor plan showing the property's layout for rental listings.",
    href: "/pl/rzut-mieszkania",
  },
];

const additionalServices = [
  {
    title: "Tailored Lease Agreement",
    description: "A lease agreement drafted for your specific property and rental conditions.",
    price: "Individual quote",
    href: "/pl/umowa-najmu",
  },
  {
    title: "Virtual 3D Tour",
    description: "An interactive presentation of an apartment or house.",
    price: "From PLN 500, VAT included",
    href: "/pl/spacer-3d",
  },
  {
    title: "Rental Assistant",
    description: "Additional support for landlords throughout the tenancy.",
    price: "5% per month",
    note: "Monthly subscription based on the base rent, VAT included.",
    href: "/pl/asystent-najmu",
  },
];

const polishDetailsLabel = "Full details (in Polish)";
const eyebrowClass = "text-sm font-semibold tracking-[0.14em] text-amber-300";
const headingClass = "font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl";
const panelClass = "rounded-2xl ring-1 ring-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.16)]";
const bodyClass = "leading-relaxed text-neutral-200/90";
const focusClass = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300";
const primaryCtaClass = `inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3.5 text-center text-sm font-semibold tracking-wide text-[#0C2D3A] shadow-md transition hover:bg-amber-300 ${focusClass}`;

type MessengerLinkProps = {
  label: string;
  href: string;
  gradient: string;
  icon: (className: string) => ReactNode;
};

function MessengerLink({ label, href, gradient, icon }: MessengerLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-r ${gradient} px-5 py-4 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] ring-1 ring-white/20 transition hover:scale-[1.02] ${focusClass}`}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-white/20">
          {icon("h-5 w-5")}
        </span>
        <div className="text-left">
          <div className="text-xs uppercase tracking-[0.14em] text-white/80">Chat</div>
          <div className="text-base font-semibold">{label}</div>
        </div>
      </div>
      <span aria-hidden className="text-lg font-semibold transition group-hover:translate-x-1">→</span>
    </a>
  );
}

export default function HomePageClient() {
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const fadeTimeoutRef = useRef<number | null>(null);

  const heroImageUrl = "/Depositphotos_455695662_XL.jpg";

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setIsFading(true);
      fadeTimeoutRef.current = window.setTimeout(() => {
        setHighlightIndex((prev) => (prev + 1) % highlightWords.length);
        setIsFading(false);
      }, 350);
    }, 2500);

    return () => {
      window.clearInterval(intervalId);
      if (fadeTimeoutRef.current) {
        window.clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div lang="en" className="min-h-screen bg-[#0C2D3A] text-neutral-100">
      <SiteHeaderEn />

      <main>
        <section className="relative isolate pt-24">
          <div className="absolute inset-0 -z-10">
            <img
              src={heroImageUrl}
              alt="Warsaw skyline"
              className="h-full w-full object-cover object-[center_50%]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0C2D3A]/25 to-[#0C2D3A]" />
          </div>

          <Container>
            <div className="pt-[50vh] sm:pt-[54vh] md:pt-[58vh] pb-24 sm:pb-28 md:pb-32 lg:-ml-8 xl:-ml-12">
              <h1 className="font-serif text-white leading-tight tracking-tight text-4xl max-[340px]:text-[2.125rem]/[2.8125rem] sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">Clear terms.</span>{" "}
                <span className="block">
                  New{" "}
                  <strong
                    className={`text-amber-300 inline-block transition-opacity duration-500 ${
                      isFading ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {highlightWords[highlightIndex]}
                  </strong>.
                </span>
              </h1>

              <p className="mt-6 text-lg text-neutral-200/90 max-w-2xl">
                Professional support in Poland's real estate market.
              </p>

              <div className="mt-10">
                <a href="#contact" className={`text-sm text-neutral-200/90 hover:text-white ${focusClass}`}>Contact us →</a>
              </div>
            </div>
          </Container>
        </section>

        <section id="services" className="scroll-mt-16 py-10 sm:py-14" aria-labelledby="owners-title">
          <Container>
            <div id="for-owners" className="scroll-mt-24">
              <p className={eyebrowClass}>01 / FOR PROPERTY OWNERS</p>
              <h2 id="owners-title" className={`mt-3 ${headingClass}`}>Rent Out Your Property With Us</h2>
              <p className={`mt-4 max-w-2xl ${bodyClass}`}>
                Comprehensive apartment letting services. From preparing the listing and finding a tenant to the lease agreement and property handover.
              </p>
              <p className="mt-3 font-semibold text-amber-200">One service. Two payment options.</p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5">
              {paymentOptions.map(({ title, accent, note, description, price, href }) => (
                <article key={title} className={`flex min-w-0 flex-col bg-[#123746] p-5 sm:p-7 ${panelClass}`}>
                  <h3 className="font-serif text-2xl text-white sm:text-3xl">{title}</h3>
                  <p className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-serif text-4xl leading-tight text-amber-300 sm:text-5xl">{accent}</span>
                    {note && <span className="text-sm font-semibold text-amber-200">{note}</span>}
                  </p>
                  <p className={`mt-3 mb-5 ${bodyClass}`}>{description}</p>
                  <div className="mt-auto border-t border-white/10 pt-4">
                    <p className="font-semibold text-white">{price}</p>
                    <p className="mt-1 text-sm text-neutral-200/75">Total fee, VAT included.</p>
                    <Button href={href} className={`mt-4 text-center ${focusClass}`}>
                      Explore {title}<span className="sr-only"> (in Polish)</span>
                    </Button>
                    <p aria-hidden className="mt-2 text-sm text-neutral-200/75">{polishDetailsLabel}</p>
                  </div>
                </article>
              ))}
            </div>

            <section id="advantages" aria-labelledby="advantages-title" className="mt-10 sm:mt-14">
              <h3 id="advantages-title" className="font-serif text-3xl text-white sm:text-4xl">What Sets Us Apart?</h3>
              <ul className="mt-5 grid gap-3 min-[390px]:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                {advantages.map(({ title, accent, description, note, href }) => (
                  <li key={title} className="min-w-0">
                    <a
                      href={href}
                      hrefLang="pl"
                      className={`group block h-full bg-[#0A2530] p-4 transition hover:bg-[#123746] hover:ring-amber-300/40 sm:p-5 ${panelClass} ${focusClass}`}
                    >
                      <p className="font-serif text-2xl leading-tight text-amber-300 sm:text-4xl">{accent}</p>
                      <h4 className="mt-2 font-semibold leading-snug text-white underline decoration-amber-200/40 underline-offset-4 group-hover:decoration-amber-200">
                        {title}
                      </h4>
                      <p className={`mt-2 ${bodyClass}`}>{description}</p>
                      {note && <p className="mt-2 text-sm text-neutral-200/75">{note}</p>}
                      <p className="mt-2 text-sm text-neutral-200/75">{polishDetailsLabel}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section id="additional-services" aria-labelledby="additional-services-title" className="mt-10 sm:mt-14">
              <h3 id="additional-services-title" className="font-serif text-3xl text-white sm:text-4xl">Additional Services</h3>
              <p className={`mt-3 ${bodyClass}`}>
                Selected services are also available independently of comprehensive brokerage.
              </p>
              <ul className="mt-5 grid gap-3 sm:gap-4 md:grid-cols-3">
                {additionalServices.map(({ title, description, price, note, href }) => (
                  <li key={title} className={`flex min-w-0 flex-col bg-white/5 p-5 ${panelClass}`}>
                    <h4 className="font-serif text-xl text-white sm:text-2xl">{title}</h4>
                    <p className={`mt-2 mb-4 ${bodyClass}`}>{description}</p>
                    <div className="mt-auto">
                      <p className="font-semibold text-amber-300">{price}</p>
                      {note && <p className="mt-1 text-sm text-neutral-200/80">{note}</p>}
                    </div>
                    <a
                      href={href}
                      hrefLang="pl"
                      aria-label={`${polishDetailsLabel} for ${title}`}
                      className={`mt-4 w-fit text-sm font-semibold text-white underline decoration-amber-200/50 underline-offset-4 hover:text-amber-200 ${focusClass}`}
                    >
                      {polishDetailsLabel}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-7 text-center">
              <p className={bodyClass}>Discover the full scope of our services and brokerage terms.</p>
              <a
                href="/pl/landlord"
                hrefLang="pl"
                aria-describedby="landlord-details-language"
                className={`mt-3 w-full sm:w-auto sm:min-w-80 ${primaryCtaClass}`}
              >
                Explore Our Landlord Services
              </a>
              <p id="landlord-details-language" className="mt-2 text-sm text-neutral-200/75">{polishDetailsLabel}</p>
            </div>
          </Container>
        </section>

        <section
          id="for-tenants"
          className="scroll-mt-16 border-y border-white/10 bg-[#0A2530] py-10 sm:py-14"
          aria-labelledby="tenants-title"
        >
          <Container>
            <div className="grid items-center gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
              <div>
                <p className={eyebrowClass}>02 / FOR TENANTS</p>
                <h2 id="tenants-title" className={`mt-3 ${headingClass}`}>Find Your New Home</h2>
                <p className={`mt-4 max-w-xl ${bodyClass}`}>
                  We help you find a suitable apartment, understand the rental terms and navigate the letting process.
                </p>
              </div>
              <div className={`bg-[#0F3A4D] p-5 sm:p-7 ${panelClass}`}>
                <p className="font-serif text-3xl text-amber-300 sm:text-4xl">PLN 0 Commission</p>
                <p className={`mt-3 ${bodyClass}`}>
                  Tenants pay no agency commission for properties handled under our landlord-focused brokerage model.
                </p>
                <Button href="#contact" className={`mt-5 text-center ${focusClass}`}>
                  Ask About Rentals
                </Button>
              </div>
            </div>
          </Container>
        </section>

        <section id="partnership" className="py-10 sm:py-14" aria-labelledby="partnership-title">
          <Container>
            <div className={`flex flex-col items-start gap-5 bg-[#123746] p-5 sm:p-8 lg:flex-row lg:items-center lg:justify-between ${panelClass}`}>
              <div>
                <p className={eyebrowClass}>03 / PARTNERSHIPS</p>
                <h2 id="partnership-title" className={`mt-3 ${headingClass}`}>Become Our Partner</h2>
                <p className={`mt-4 max-w-2xl ${bodyClass}`}>
                  Interested in working together in the real estate market? Explore partnership opportunities with SERPAKOWSKI Nieruchomości.
                </p>
              </div>
              <Button href="/en/partnership" className={`text-center lg:shrink-0 ${focusClass}`}>
                Explore Partnership Opportunities
              </Button>
            </div>
          </Container>
        </section>

        <section id="contact" className="scroll-mt-16 border-y border-white/10 bg-[#0A2530] py-10 sm:py-14" aria-labelledby="contact-title">
          <Container>
            <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="min-w-0">
                <p className={eyebrowClass}>04 / CONTACT</p>
                <h2 id="contact-title" className={`mt-3 ${headingClass}`}>Let's Talk Real Estate</h2>
                <p className={`mt-4 max-w-xl ${bodyClass}`}>
                  Tell us what you need. We will get in touch to discuss how we can work together.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <MessengerLink
                    label="Telegram"
                    href="https://t.me/+48453053969"
                    gradient="from-[#229ED9] via-[#1c94cb] to-[#178abf]"
                    icon={(className) => (
                      <svg className={className} viewBox="0 0 24 24" aria-hidden>
                        <path
                          fill="currentColor"
                          d="M21.944 3.042c-.278-.24-.667-.273-1.02-.162-.35.11-15.7 5.46-17.62 6.1-.2.065-.98.32-1.122.998-.133.62.405.97.9 1.188.73.324 11.74 4.824 11.74 4.824s2.74 5.56 2.94 5.97c.2.41.57.89 1.18.89.61 0 .99-.59.99-.59s3.81-15.75 4.03-17.56c.22-1.81.35-1.89-.03-2.35-.38-.46-.97-.31-.99-.31Z"
                        />
                      </svg>
                    )}
                  />
                  <MessengerLink
                    label="Viber"
                    href="viber://chat?number=%2B380679762988"
                    gradient="from-[#7360F2] via-[#6a55ef] to-[#5f47ec]"
                    icon={(className) => (
                      <svg className={className} viewBox="0 0 24 24" aria-hidden>
                        <path
                          fill="currentColor"
                          d="M17.472 0H6.527C2.923 0 0 2.923 0 6.528v10.945C0 21.077 2.924 24 6.528 24h10.944C21.077 24 24 21.077 24 17.472V6.527C24 2.923 21.076 0 17.472 0m-.515 18.725c-.199.344-.583.533-.967.533-6.23-.14-10.623-4.499-10.76-10.76 0-.378.187-.752.53-.948l1.9-.86a.978.978 0 0 1 1.32.438l.9 1.73c.199.348.103.776-.223 1.02l-.939.707a8.111 8.111 0 0 0 3.978 3.972l.704-.939a1 1 0 0 1 1.02-.225l1.73.9c.39.214.55.708.333 1.12Z"
                        />
                      </svg>
                    )}
                  />
                  <MessengerLink
                    label="WhatsApp"
                    href="https://wa.me/48453053969"
                    gradient="from-[#25D366] via-[#1fb95a] to-[#199f4f]"
                    icon={(className) => (
                      <svg className={className} viewBox="0 0 24 24" aria-hidden>
                        <path
                          fill="currentColor"
                          d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.62-5.945C.122 5.3 5.305.113 11.63.002c3.17-.058 6.155 1.177 8.413 3.4a11.92 11.92 0 0 1 3.485 8.421c-.059 6.325-5.246 11.51-11.57 11.51h-.006a11.86 11.86 0 0 1-5.923-1.616L.057 24Zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.593h.005c5.448 0 9.902-4.447 9.959-9.892.029-2.657-1.025-5.16-2.997-7.05a10.47 10.47 0 0 0-7.065-2.928c-5.47.001-9.94 4.428-9.99 9.885-.013 1.867.487 3.331 1.648 5.205l-.999 3.648 3.057-.461Zm9.37-5.56c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.966-.273-.099-.472-.149-.67.149-.198.297-.768.966-.941 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.477-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.134.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.67-.51l-.57-.01c-.198 0-.521.074-.793.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.695.248-1.29.173-1.413Z"
                        />
                      </svg>
                    )}
                  />
                  <a
                    href="tel:+48453053969"
                    className={`flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white transition hover:border-amber-300/50 hover:bg-white/10 hover:text-amber-200 ${focusClass}`}
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400/90 text-[#0C2D3A] ring-1 ring-white/20">📞</span>
                    <div className="text-left">
                      <div className="text-xs uppercase tracking-[0.1em] text-neutral-100/70">Call</div>
                      <div className="text-base font-semibold">+48 453 053 969</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className={`bg-[#123746] p-5 sm:p-7 ${panelClass}`}>
                <HomeContactForm
                  language="en"
                  sourcePage="/en"
                  namePlaceholder="Name"
                  phonePlaceholder="Phone"
                  messagePlaceholder="Briefly describe your plans (renting, letting, buying or selling), area, budget and timeline"
                  submitLabel="Send"
                />
                <p className="mt-3 text-sm text-neutral-200/75">
                  By submitting the form, you confirm that you have read the{" "}
                  <a href="/en/privacy" className={`underline underline-offset-2 hover:text-white ${focusClass}`}>
                    privacy policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <SiteFooterEn />
    </div>
  );
}
