import { ChatButton } from "./ChatButton";
import HomeContactForm from "./HomeContactForm";

type Language = "ru" | "pl" | "en";
type LandlordSourcePage = "/ru/landlord" | "/pl/landlord" | "/en/landlord";

type LandlordContactSectionsProps = {
  language: Language;
  sourcePage: LandlordSourcePage;
  messengerTitle: string;
  messengerText: string;
  smallLabel: string;
  phoneLabel: string;
  formTitle: string;
  formText: string;
  privacyText: string;
  privacyHref: string;
  privacyLinkLabel: string;
  namePlaceholder: string;
  phonePlaceholder: string;
  messagePlaceholder: string;
  submitLabel: string;
};

function TelegramIcon(className: string) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M21.944 3.042c-.278-.24-.667-.273-1.02-.162-.35.11-15.7 5.46-17.62 6.1-.2.065-.98.32-1.122.998-.133.62.405.97.9 1.188.73.324 11.74 4.824 11.74 4.824s2.74 5.56 2.94 5.97c.2.41.57.89 1.18.89.61 0 .99-.59.99-.59s3.81-15.75 4.03-17.56c.22-1.81.35-1.89-.03-2.35-.38-.46-.97-.31-.99-.31Z"
      />
    </svg>
  );
}

function ViberIcon(className: string) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M17.472 0H6.527C2.923 0 0 2.923 0 6.528v10.945C0 21.077 2.924 24 6.528 24h10.944C21.077 24 24 21.077 24 17.472V6.527C24 2.923 21.076 0 17.472 0m-.515 18.725c-.199.344-.583.533-.967.533-6.23-.14-10.623-4.499-10.76-10.76 0-.378.187-.752.53-.948l1.9-.86a.978.978 0 0 1 1.32.438l.9 1.73c.199.348.103.776-.223 1.02l-.939.707a8.111 8.111 0 0 0 3.978 3.972l.704-.939a1 1 0 0 1 1.02-.225l1.73.9c.39.214.55.708.333 1.12Z"
      />
    </svg>
  );
}

function WhatsAppIcon(className: string) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.62-5.945C.122 5.3 5.305.113 11.63.002c3.17-.058 6.155 1.177 8.413 3.4a11.92 11.92 0 0 1 3.485 8.421c-.059 6.325-5.246 11.51-11.57 11.51h-.006a11.86 11.86 0 0 1-5.923-1.616L.057 24Zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.593h.005c5.448 0 9.902-4.447 9.959-9.892.029-2.657-1.025-5.16-2.997-7.05a10.47 10.47 0 0 0-7.065-2.928c-5.47.001-9.94 4.428-9.99 9.885-.013 1.867.487 3.331 1.648 5.205l-.999 3.648 3.057-.461Zm9.37-5.56c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.966-.273-.099-.472-.149-.67.149-.198.297-.768.966-.941 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.477-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.134.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.67-.51l-.57-.01c-.198 0-.521.074-.793.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.695.248-1.29.173-1.413Z"
      />
    </svg>
  );
}

export function LandlordContactSections({
  language,
  sourcePage,
  messengerTitle,
  messengerText,
  smallLabel,
  phoneLabel,
  formTitle,
  formText,
  privacyText,
  privacyHref,
  privacyLinkLabel,
  namePlaceholder,
  phonePlaceholder,
  messagePlaceholder,
  submitLabel,
}: LandlordContactSectionsProps) {
  return (
    <>
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0A2530] p-8 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(255,193,7,0.16),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.08),transparent_45%)]" />
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-amber-200/90 ring-1 ring-white/10">
              {smallLabel}
            </div>
            <h2 className="font-serif text-3xl text-white sm:text-4xl">{messengerTitle}</h2>
            <p className="max-w-2xl text-base leading-relaxed text-neutral-200/85">{messengerText}</p>
          </div>

          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 shadow-[0_16px_60px_rgba(0,0,0,0.25)] sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <ChatButton label="Telegram" href="https://t.me/+48453053969" gradient="from-[#229ED9] via-[#1c94cb] to-[#178abf]" icon={TelegramIcon} />
              <ChatButton label="Viber" href="viber://chat?number=%2B380679762988" gradient="from-[#7360F2] via-[#6a55ef] to-[#5f47ec]" icon={ViberIcon} />
              <ChatButton label="WhatsApp" href="https://wa.me/48453053969" gradient="from-[#25D366] via-[#1fb95a] to-[#199f4f]" icon={WhatsAppIcon} />
              <a
                href="tel:+48453053969"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white transition hover:border-amber-300/50 hover:bg-white/10 hover:text-amber-200"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/90 text-[#0C2D3A] ring-1 ring-white/20">📞</span>
                <div className="text-left">
                  <div className="text-xs uppercase tracking-[0.1em] text-neutral-100/70">{phoneLabel}</div>
                  <div className="text-base font-semibold">+48 453 053 969</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative scroll-mt-28 overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0A2530] p-8 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(46,107,127,0.18),transparent_60%)]" />
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-serif text-3xl text-white sm:text-4xl">{formTitle}</h2>
            <p className="mt-3 max-w-md text-neutral-200/90">{formText}</p>
            <p className="mt-4 text-xs leading-relaxed text-neutral-200/70">
              {privacyText}{" "}
              <a href={privacyHref} className="underline underline-offset-2 hover:text-white">
                {privacyLinkLabel}
              </a>
              .
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <HomeContactForm
              language={language}
              sourcePage={sourcePage}
              namePlaceholder={namePlaceholder}
              phonePlaceholder={phonePlaceholder}
              messagePlaceholder={messagePlaceholder}
              submitLabel={submitLabel}
            />
          </div>
        </div>
      </section>
    </>
  );
}
