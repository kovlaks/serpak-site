export const metadata = {
  title: "Хочу снять — SERPAKOWSKI Nieruchomości",
};

export default function Page() {
  return (
    <main className="animated-block mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-neutral-100">
      <h1 className="font-serif text-3xl text-white">Хочу снять</h1>
      <p className="mt-4 text-neutral-200/90">
        Здесь описано, как мы сопровождаем продажу жилья: анализ и подготовка квартиры,
              стратегия цены, маркетинг и показы, переговоры и юридическое оформление сделки.
              Внутри — поэтапный план, чек-лист продавца, рекомендации по безопасной продаже
              и работе с задатком/умовой, обзор вариантов страховой защиты и ответы на самые
              частые вопросы про сроки, стоимость и риски.
      </p>
      <div className="mt-8">
        <a href="/" className="text-amber-300 hover:text-amber-200">← На главную</a>
      </div>
    </main>
  );
}

