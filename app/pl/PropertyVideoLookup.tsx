"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Container } from "../../components/layout/Container";
import { isYouTubeVideoId, normalizeOfferNumber } from "../../lib/property-video/validation";

const invalidOffer = "Wpisz poprawny numer oferty, np. 1A/2B/03.";
const unknownOffer = "Nie znaleziono oferty o podanym numerze.";
const lookupError = "Nie udało się pobrać wideo. Spróbuj ponownie.";
const focusClass = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300";

export default function PropertyVideoLookup() {
  const [offerNumber, setOfferNumber] = useState("");
  const [error, setError] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [videoId, setVideoId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Keep the form disabled until React can intercept native submission.
    setIsReady(true);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!videoId || !dialog) return;

    const input = inputRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      input?.focus({ preventScroll: true });
    };
  }, [videoId]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isPending) return;

    const normalized = normalizeOfferNumber(offerNumber);
    if (normalized === null) {
      setError(invalidOffer);
      inputRef.current?.focus();
      return;
    }

    setOfferNumber(normalized);
    setError("");
    setIsPending(true);

    try {
      const response = await fetch("/api/property-video", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ offerNumber: normalized }),
      });

      if (response.status === 400) {
        setError(invalidOffer);
      } else if (response.status === 404) {
        setError(unknownOffer);
      } else if (!response.ok) {
        setError(lookupError);
      } else {
        const result = await response.json();
        if (isYouTubeVideoId(result?.youtubeVideoId)) {
          setVideoId(result.youtubeVideoId);
        } else {
          setError(lookupError);
        }
      }
    } catch {
      setError(lookupError);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <section className="py-4 sm:py-5" aria-labelledby="property-video-heading">
      <Container>
        <div className="grid gap-4 rounded-2xl bg-[#123746] p-4 ring-1 ring-white/10 sm:p-6 md:grid-cols-[1fr_auto] md:items-center md:gap-6">
          <div>
            <h2 id="property-video-heading" className="font-serif text-2xl leading-tight text-white sm:text-3xl">
              Spacer wideo po nieruchomości
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-neutral-200/90">
              Wpisz numer oferty i zobacz nieruchomość od środka.
            </p>
          </div>

          <form noValidate onSubmit={handleSubmit}>
            <label htmlFor="property-video-offer" className="block text-sm font-semibold text-white">
              Numer oferty
            </label>
            <div className="mt-1.5 flex flex-col gap-2 min-[400px]:flex-row">
              <input
                ref={inputRef}
                id="property-video-offer"
                name="offerNumber"
                type="text"
                required
                autoComplete="off"
                autoCapitalize="characters"
                spellCheck={false}
                placeholder="Np. 1A/2B/03"
                value={offerNumber}
                disabled={!isReady}
                readOnly={isPending}
                aria-invalid={error === invalidOffer || undefined}
                aria-describedby={error ? "property-video-status" : undefined}
                onChange={(event) => {
                  setOfferNumber(event.target.value);
                  setError("");
                }}
                className={`min-w-0 flex-1 rounded-2xl border border-white/15 bg-[#0C2D3A] px-4 py-2.5 text-base text-white placeholder:text-neutral-300 md:w-44 ${focusClass}`}
              />
              <button
                type="submit"
                disabled={!isReady}
                aria-disabled={isPending || undefined}
                aria-busy={isPending}
                className={`shrink-0 rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold tracking-wide text-[#0C2D3A] transition hover:bg-amber-300 aria-disabled:cursor-wait aria-disabled:opacity-70 ${focusClass}`}
              >
                Zobacz wideo
              </button>
            </div>
            <p id="property-video-status" role="status" className="text-sm text-amber-200">
              {error && <span className="mt-2 block">{error}</span>}
            </p>
          </form>
        </div>
      </Container>

      {videoId && (
        <dialog
          ref={dialogRef}
          aria-labelledby="property-video-dialog-heading"
          aria-describedby="property-video-notice"
          onCancel={(event) => {
            event.preventDefault();
            setVideoId(null);
          }}
          className="m-auto max-h-[calc(100dvh-2rem)] w-11/12 max-w-3xl overflow-y-auto overscroll-contain rounded-2xl bg-[#123746] p-4 text-white shadow-xl ring-1 ring-white/10 backdrop:bg-black/75 sm:p-6"
        >
          <div className="flex items-start justify-between gap-3">
            <h2 id="property-video-dialog-heading" className="font-serif text-xl leading-tight sm:text-2xl">
              Spacer wideo po nieruchomości
            </h2>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setVideoId(null)}
              className={`shrink-0 rounded-2xl bg-white/10 px-3 py-2 text-sm font-semibold hover:bg-white/15 ${focusClass}`}
            >
              Zamknij
            </button>
          </div>
          <p id="property-video-notice" className="mt-2 text-sm text-neutral-200/90">
            Odtwarzacz wczytuje treści z serwisu YouTube.
          </p>
          <iframe
            className="mt-4 block aspect-video w-full rounded-xl border-0 bg-black"
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title="Spacer wideo po nieruchomości w serwisie YouTube"
            allowFullScreen
          />
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-4 inline-block text-sm font-semibold text-amber-200 underline underline-offset-4 ${focusClass}`}
          >
            Otwórz wideo w YouTube
          </a>
        </dialog>
      )}
    </section>
  );
}
