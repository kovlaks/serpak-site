export const metadata = {
  title: "Хочу купить — SERPAKOWSKI Nieruchomości",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-neutral-100">
      <h1 className="font-serif text-3xl text-white">Хочу снять</h1>
      <p className="mt-4 text-neutral-200/90">
        Здесь мы разбираем, как купить квартиру или дом с понятными условиями и минимальными
        рисками: критерии, анализ рынка, проверки объекта и договора, формат оплаты или ипотеки.
        Вы найдёте этапы, чек-лист покупателя, блок о безопасной покупке, страхование и ответы
        на ключевые вопросы о цене и рисках.
      </p>
      <div className="mt-8">
        <a href="/" className="text-amber-300 hover:text-amber-200">← На главную</a>
      </div>
    </main>
  );
}

