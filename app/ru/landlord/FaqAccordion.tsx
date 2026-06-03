"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string[];
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((current) =>
      current.includes(index) ? current.filter((itemIndex) => itemIndex !== index) : [...current, index],
    );
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openItems.includes(index);
        const buttonId = `ru-landlord-faq-button-${index}`;
        const panelId = `ru-landlord-faq-panel-${index}`;

        return (
          <article
            key={item.question}
            className="overflow-hidden rounded-2xl bg-[#123746]/90 ring-1 ring-white/10 transition hover:ring-amber-200/30 focus-within:ring-amber-200/50"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              >
                <span className="font-serif text-lg leading-snug text-white sm:text-xl">{item.question}</span>
                <span
                  aria-hidden="true"
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-300/15 text-2xl leading-none text-amber-100 ring-1 ring-amber-200/25 transition duration-200 ${
                    isOpen ? "rotate-45 bg-amber-300/25" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="space-y-3 px-5 pb-5 pt-0 text-sm leading-relaxed text-neutral-200/90 sm:px-6 sm:pb-6">
                  {item.answer.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
