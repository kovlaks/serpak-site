"use client";

import { useState } from "react";

const sliderMin = 1000;
const sliderMax = 15000;
const subscriptionRate = 5;

function parseGrosze(value: string) {
  const parts = value.match(/^(\d*)(?:[.,](\d{1,2}))?$/);
  if (!parts || value === "") return null;

  const grosze = Number(parts[1] + (parts[2] ?? "").padEnd(2, "0"));
  return Number.isSafeInteger(grosze) ? grosze : null;
}

function formatCurrency(grosze: number) {
  const zlotys = String(Math.floor(grosze / 100)).replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0");
  const remainder = grosze % 100;
  const fraction = remainder ? `,${String(remainder).padStart(2, "0")}` : "";
  return `${zlotys}${fraction}\u00a0zł`;
}

export default function SubscriptionCalculator() {
  const [rent, setRent] = useState("3000");
  const rentGrosze = parseGrosze(rent);
  const subscriptionGrosze = rentGrosze === null ? null : Math.round(rentGrosze / (100 / subscriptionRate));
  const sliderValue = Math.min(sliderMax, Math.max(sliderMin, Math.round((rentGrosze ?? 0) / 100)));
  const monthlyCost = subscriptionGrosze === null ? "—" : `${formatCurrency(subscriptionGrosze)} brutto`;

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="min-w-0 space-y-6 rounded-2xl bg-[#0A2530] p-5 ring-1 ring-white/10 sm:p-6">
          <div>
            <label htmlFor="asystent-najmu-rent" className="block text-sm font-semibold text-white">
              Miesięczny bazowy czynsz najmu
            </label>
            <div className="mt-2 flex items-center gap-3">
              <input
                id="asystent-najmu-rent"
                type="text"
                inputMode="decimal"
                value={rent}
                onChange={(event) => setRent(event.currentTarget.value)}
                aria-invalid={rentGrosze === null}
                aria-describedby={rentGrosze === null ? "asystent-najmu-rent-error" : undefined}
                className="min-w-0 w-full rounded-xl bg-white/5 px-4 py-3 text-white ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
              <span className="text-sm text-neutral-200">zł</span>
            </div>
            {rentGrosze === null && (
              <p id="asystent-najmu-rent-error" className="mt-2 text-sm text-amber-200">
                Podaj poprawną kwotę od 0 zł z dokładnością do pełnych groszy.
              </p>
            )}
          </div>

          <div>
            <label htmlFor="asystent-najmu-rent-slider" className="sr-only">
              Miesięczny bazowy czynsz najmu (suwak)
            </label>
            <input
              id="asystent-najmu-rent-slider"
              type="range"
              min={sliderMin}
              max={sliderMax}
              value={sliderValue}
              onChange={(event) => setRent(event.currentTarget.value)}
              aria-valuetext={formatCurrency(sliderValue * 100)}
              className="h-6 w-full cursor-pointer accent-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            />
            <div className="flex flex-wrap justify-between gap-x-3 text-sm text-neutral-200">
              <span>{formatCurrency(sliderMin * 100)}</span>
              <span>{formatCurrency(sliderMax * 100)}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-neutral-200/90">
              Możesz wpisać kwotę spoza zakresu suwaka.
            </p>
          </div>
        </div>

        <dl className="grid min-w-0 gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 sm:grid-cols-3 sm:p-6">
          <div aria-live="polite" aria-atomic="true" className="min-w-0 rounded-xl bg-[#0A2530] p-4 ring-1 ring-amber-200/30 sm:col-span-3">
            <dt className="text-sm text-neutral-200">Twój miesięczny abonament</dt>
            <dd className="mt-1 break-words font-serif text-3xl text-amber-300">{monthlyCost}</dd>
          </div>
          <div className="min-w-0">
            <dt className="text-sm text-neutral-200">Bazowy czynsz najmu</dt>
            <dd className="mt-1 break-words font-semibold text-white">
              {rentGrosze === null ? "—" : formatCurrency(rentGrosze)}
            </dd>
          </div>
          <div>
            <dt className="text-sm text-neutral-200">Stawka abonamentu</dt>
            <dd className="mt-1 font-semibold text-amber-200">{subscriptionRate}%</dd>
          </div>
          <div className="min-w-0">
            <dt className="text-sm text-neutral-200">Miesięczny koszt usługi</dt>
            <dd className="mt-1 break-words font-semibold text-white">{monthlyCost}</dd>
          </div>
        </dl>
      </div>
      <p className="text-sm leading-relaxed text-neutral-200/90">
        Kalkulacja orientacyjna. Podstawą abonamentu jest bazowy czynsz najmu, bez opłat administracyjnych i mediów.
      </p>
    </div>
  );
}
