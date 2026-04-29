"use client";

import { FormEvent, useState } from "react";

type MessengerLink = {
  label: string;
  href: string;
  gradient: string;
  icon: string;
};

type RentContactSectionProps = {
  pageLanguage: "ru" | "pl" | "en";
  sourcePage: "/rent" | "/pl/rent" | "/en/rent";
  smallLabel: string;
  headline: string;
  description: string;
  messengerLabel: string;
  placeholders: { name: string; phone: string; message: string };
  submitLabel: string;
  privacyNote: string;
  statusMessages: { success: string; error: string; validation: string };
  messengerLinks: MessengerLink[];
};

export function RentContactSection(props: RentContactSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: null, message: "" });
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !phone) {
      setStatus({ type: "error", message: props.statusMessages.validation });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xwvyennd", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          message,
          page_language: props.pageLanguage,
          source_page: props.sourcePage,
          source: "SERPAKOWSKI website",
          form_type: "rent_page_request",
          submitted_at: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error("Formspree request failed");
      setStatus({ type: "success", message: props.statusMessages.success });
      form.reset();
    } catch {
      setStatus({ type: "error", message: props.statusMessages.error });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0A2530] p-8 ring-1 ring-white/10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(255,193,7,0.16),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.08),transparent_45%)]" />
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.16em] text-amber-200/80">{props.smallLabel}</p>
          <h2 className="font-serif text-3xl text-white">{props.headline}</h2>
          <p className="text-neutral-200/90 max-w-2xl">{props.description}</p>
          <div className="flex flex-wrap items-center gap-2 pt-3">
            <span className="text-xs uppercase tracking-[0.12em] text-neutral-200/75">{props.messengerLabel}</span>
            {props.messengerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("viber://") ? undefined : "_blank"}
                rel={link.href.startsWith("viber://") ? undefined : "noopener noreferrer"}
                className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${link.gradient} px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] ring-1 ring-white/15 transition hover:-translate-y-0.5`}
              >
                <span>{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-neutral-200/70">{props.privacyNote}</p>
        </div>
        <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
          <form className="grid gap-4" onSubmit={onSubmit}>
            <input
              name="name"
              placeholder={props.placeholders.name}
              className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-300/70 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
            <input
              name="phone"
              placeholder={props.placeholders.phone}
              className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-300/70 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
            <textarea
              name="message"
              rows={4}
              placeholder={props.placeholders.message}
              className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-300/70 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] disabled:opacity-70"
            >
              {props.submitLabel}
            </button>
            {status.type ? (
              <p className={`text-sm ${status.type === "success" ? "text-emerald-300" : "text-rose-300"}`}>{status.message}</p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
