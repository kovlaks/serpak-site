"use client";

import { useState } from "react";

const sliderMin = 1000;
const sliderMax = 15000;
const installmentCount = 12;

function parseGrosze(value: string) {
  const parts = value.match(/^(\d*)(?:[.,](\d{1,2}))?$/);
  if (!parts || value === "") return null;

  const grosze = Number(parts[1] + (parts[2] ?? "").padEnd(2, "0"));
  return Number.isSafeInteger(grosze) ? grosze : null;
}

function formatCurrency(grosze: number) {
  const zlotys = String(Math.floor(grosze / 100)).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const remainder = grosze % 100;
  const fraction = String(remainder).padStart(2, "0");
  return `PLN ${zlotys}.${fraction}`;
}

function calculateInstallments(totalGrosze: number) {
  const firstInstallmentCount = installmentCount - 1;
  const installment = Math.min(
    Math.round(totalGrosze / installmentCount),
    Math.floor(totalGrosze / firstInstallmentCount),
  );
  return { installment, lastInstallment: totalGrosze - firstInstallmentCount * installment };
}

export default function CommissionCalculator() {
  const [rent, setRent] = useState("3600");
  const totalGrosze = parseGrosze(rent);
  const installments = totalGrosze === null ? null : calculateInstallments(totalGrosze);
  const sliderValue = Math.min(sliderMax, Math.max(sliderMin, Math.round((totalGrosze ?? 0) / 100)));

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="min-w-0 space-y-6 rounded-2xl bg-[#0A2530] p-5 ring-1 ring-white/10 sm:p-6">
          <div>
            <label htmlFor="en-najem-split-rent" className="block text-sm font-semibold text-white">
              Monthly Base Rent
            </label>
            <div className="mt-2 flex items-center gap-3">
              <input
                id="en-najem-split-rent"
                type="text"
                lang="en"
                inputMode="decimal"
                value={rent.replace(/[\r\n]/g, "⏎")}
                onChange={(event) => setRent(event.currentTarget.value)}
                onPaste={(event) => {
                  const text = event.clipboardData.getData("text/plain");
                  if (!/[\r\n]/.test(text)) return;

                  // Keep line breaks in state before the single-line input can drop them.
                  event.preventDefault();
                  const { selectionStart, selectionEnd } = event.currentTarget;
                  setRent(rent.slice(0, selectionStart ?? rent.length) + text + rent.slice(selectionEnd ?? rent.length));
                }}
                aria-invalid={totalGrosze === null}
                aria-describedby={totalGrosze === null ? "en-najem-split-rent-error" : undefined}
                className="min-w-0 w-full rounded-xl bg-white/5 px-4 py-3 text-white ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
              <span className="text-sm text-neutral-200">PLN</span>
            </div>
            {totalGrosze === null && (
              <p id="en-najem-split-rent-error" className="mt-2 text-sm text-amber-200">
                Enter a valid amount of at least PLN 0. Use a period or comma for decimals, with no more than two decimal places.
              </p>
            )}
          </div>

          <div>
            <label htmlFor="en-najem-split-rent-slider" className="sr-only">
              Monthly Base Rent (slider)
            </label>
            <input
              id="en-najem-split-rent-slider"
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
              You can enter an amount outside the slider range.
            </p>
          </div>
        </div>

        <dl className="grid min-w-0 gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 sm:grid-cols-2 sm:p-6" aria-live="polite">
          <div className="min-w-0 rounded-xl bg-[#0A2530] p-4 ring-1 ring-amber-200/30 sm:col-span-2">
            <dt className="text-sm text-neutral-200">Monthly Instalment</dt>
            <dd className="mt-1 break-words font-serif text-3xl text-amber-300">
              {installments ? formatCurrency(installments.installment) : "—"}
            </dd>
          </div>
          <div className="min-w-0">
            <dt className="text-sm text-neutral-200">Total Gross Commission</dt>
            <dd className="mt-1 break-words font-semibold text-white">
              {totalGrosze === null ? "—" : formatCurrency(totalGrosze)}
            </dd>
          </div>
          <div>
            <dt className="text-sm text-neutral-200">Interest for Instalment Payments</dt>
            <dd className="mt-1 font-semibold text-amber-200">{formatCurrency(0)}</dd>
          </div>
          <div className="min-w-0">
            <dt className="text-sm text-neutral-200">First 11 Instalments</dt>
            <dd className="mt-1 break-words font-semibold text-white">
              {installments ? `11 × ${formatCurrency(installments.installment)}` : "—"}
            </dd>
          </div>
          <div className="min-w-0">
            <dt className="text-sm text-neutral-200">Final Instalment</dt>
            <dd className="mt-1 break-words font-semibold text-white">
              {installments ? formatCurrency(installments.lastInstallment) : "—"}
            </dd>
          </div>
        </dl>
      </div>
      <p className="text-sm leading-relaxed text-neutral-200/90">
        This is an illustrative calculation based on a fixed monthly base rent, without a reletting discount.
        Administrative charges and utilities are excluded.
      </p>
    </div>
  );
}
