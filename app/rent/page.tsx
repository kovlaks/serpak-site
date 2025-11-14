export const metadata = {
  title: "Хочу снять — SERPAKOWSKI Nieruchomości",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-neutral-100">
      <h1 className="font-serif text-3xl text-white">Хочу снять</h1>
      <p className="mt-4 text-neutral-200/90">
        Здесь будет подробный раздел: этапы работы, чек-лист арендатора, безопасность аренды,
        страхование и ответы на частые вопросы. (Черновик страницы.)
      </p>
      <div className="mt-8">
        <a href="/" className="text-amber-300 hover:text-amber-200">← На главную</a>
      </div>
    </main>
  );
}

