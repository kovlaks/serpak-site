type PlaceholderChecklistPageProps = {
  title: string;
  text: string;
};

export function PlaceholderChecklistPage({ title, text }: PlaceholderChecklistPageProps) {
  return (
    <main className="min-h-screen bg-[#0C2D3A] px-4 py-16 text-neutral-100 sm:px-6 lg:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-3xl items-center justify-center">
        <div className="w-full rounded-3xl bg-white/5 p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300/90">
            SERPAKOWSKI Nieruchomości
          </p>
          <h1 className="mt-5 font-serif text-3xl text-white sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-200/85 sm:text-lg">
            {text}
          </p>
        </div>
      </section>
    </main>
  );
}
