"use client";

import { FormEvent, useState } from "react";
import { Button } from "../layout/Button";

type Language = "ru" | "pl" | "en";

type HomeContactFormProps = {
  language: Language;
  sourcePage: "/" | "/pl" | "/en";
  namePlaceholder: string;
  phonePlaceholder: string;
  messagePlaceholder: string;
  submitLabel: string;
};

const FORM_ENDPOINT = "https://formspree.io/f/xwvyennd";

const statusMessages: Record<Language, { success: string; error: string; validation: string }> = {
  ru: {
    success: "Спасибо. Мы получили заявку и свяжемся с вами как можно скорее.",
    error: "Не удалось отправить заявку. Попробуйте ещё раз или свяжитесь с нами напрямую.",
    validation: "Пожалуйста, укажите имя и телефон.",
  },
  pl: {
    success: "Dziękujemy. Otrzymaliśmy zgłoszenie i skontaktujemy się z Tobą tak szybko, jak to możliwe.",
    error: "Nie udało się wysłać zgłoszenia. Spróbuj ponownie lub skontaktuj się z nami bezpośrednio.",
    validation: "Proszę podać imię i telefon.",
  },
  en: {
    success: "Thank you. We received your request and will contact you as soon as possible.",
    error: "Could not send your request. Please try again or contact us directly.",
    validation: "Please enter your name and phone number.",
  },
};

export default function HomeContactForm({ language, sourcePage, namePlaceholder, phonePlaceholder, messagePlaceholder, submitLabel }: HomeContactFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | "validation"; text: string } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !phone.trim()) {
      setStatus({ type: "validation", text: statusMessages[language].validation });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          message: message.trim(),
          page_language: language,
          source_page: sourcePage,
          source: "SERPAKOWSKI website",
          submitted_at: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus({ type: "success", text: statusMessages[language].success });
      setName("");
      setPhone("");
      setMessage("");
    } catch {
      setStatus({ type: "error", text: statusMessages[language].error });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
      <input
        name="name"
        placeholder={namePlaceholder}
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-300/70 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300"
      />
      <input
        name="phone"
        placeholder={phonePlaceholder}
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-300/70 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300"
      />
      <textarea
        name="message"
        placeholder={messagePlaceholder}
        rows={4}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-300/70 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300"
      />
      {status ? (
        <p className={`text-xs ${status.type === "success" ? "text-emerald-300" : "text-rose-300"}`}>{status.text}</p>
      ) : null}
      <Button disabled={isSubmitting}>{submitLabel}</Button>
    </form>
  );
}
