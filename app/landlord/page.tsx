export const metadata = {
  title: "Хочу сдать — SERPAKOWSKI Nieruchomości",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-neutral-100">
      <h1 className="font-serif text-3xl text-white">Хочу снять</h1>
      <p className="mt-4 text-neutral-200/90">
        В этом разделе мы подробно разбираем, как безопасно и без лишних нервов сдавать
              свою квартиру: от подготовки объекта и отбора арендаторов до формата договора,
              протокола приёмки и взаимодействия с наймодателем/агентом. Вы получите понятные
              этапы, чек-лист для владельца, блок о снижении рисков и страховке, а также ответы
              на частые вопросы о комиссии, налогах и проблемных арендаторах.
      </p>
      <div className="mt-8">
        <a href="/" className="text-amber-300 hover:text-amber-200">← На главную</a>
      </div>
    </main>
  );
}

