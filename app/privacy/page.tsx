export const metadata = {
  title: "Политика конфиденциальности — SERPAKOWSKI Nieruchomości",
  description: "Политика обработки персональных данных (RODO/GDPR) — SERPAKOWSKI Nieruchomości",
};

export default function PrivacyPage() {
  return (
    <main className="animated-block mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-neutral-100">
      <h1 className="font-serif text-3xl mb-6 text-white">
        Политика конфиденциальности (RODO/GDPR)
      </h1>

      <p className="mb-4 text-neutral-200/90">
        Настоящая Политика описывает, как мы обрабатываем ваши персональные данные в связи с
        использованием сайта и оказанием услуг агентства недвижимости.
      </p>

      <h2 className="font-serif text-2xl mt-10 mb-3 text-white">1. Администратор данных</h2>
      <div className="space-y-1 text-neutral-200/90">
        <p><strong>Администратор (ADO):</strong> Serhii Kovlak (JDG)</p>
        <p><strong>Нazwa handlowa:</strong> SERPAKOWSKI Nieruchomości</p>
        <p><strong>NIP:</strong> 1133184502 &nbsp;•&nbsp; <strong>REGON:</strong> 543202915</p>
        <p><strong>Адрес для корреспонденции:</strong> Złota 75A/7, 00-819 Warszawa</p>
        <p>
          <strong>Контакт:</strong>{" "}
          <a className="underline hover:no-underline" href="mailto:kovlaks@gmail.com">
            kovlaks@gmail.com
          </a>{" "}
          / <a className="underline hover:no-underline" href="tel:+48453053969">+48 453 053 969</a>
        </p>
      </div>
      <p className="mt-3 text-xs text-neutral-300/80">
        Замените email/телефон на ваши актуальные данные.
      </p>

      <h2 className="font-serif text-2xl mt-10 mb-3 text-white">2. Цели и правовые основания обработки</h2>
      <ul className="list-disc ml-6 space-y-2 text-neutral-200/90">
        <li>
          Обработка запросов через форму/почту/телефон (ответ на обращение, подготовка предложений) —{" "}
          <strong>ст. 6(1)(b) GDPR</strong> и <strong>ст. 6(1)(f) GDPR</strong>.
        </li>
        <li>Заключение и исполнение договоров — <strong>ст. 6(1)(b) GDPR</strong>.</li>
        <li>Бухгалтерский и налоговый учёт — <strong>ст. 6(1)(c) GDPR</strong> + польские законы.</li>
        <li>Маркетинг собственных услуг — <strong>ст. 6(1)(f) GDPR</strong>; рассылки — <strong>ст. 6(1)(a) GDPR</strong>.</li>
        <li>Защита прав — <strong>ст. 6(1)(f) GDPR</strong>.</li>
        <li>Cookie/аналитика — <strong>ст. 6(1)(a)</strong> и/или <strong>ст. 6(1)(f)</strong> GDPR.</li>
      </ul>

      <h2 className="font-serif text-2xl mt-10 mb-3 text-white">3. Категории данных</h2>
      <p className="text-neutral-200/90">
        Имя, телефон, e-mail, параметры запроса (район, бюджет, сроки), договорные/расчётные данные,
        метаданные (IP, заголовки), cookie/аналитика. Спецкатегории (ст. 9 GDPR) обрабатывать не планируем.
      </p>

      <h2 className="font-serif text-2xl mt-10 mb-3 text-white">4. Источники данных</h2>
      <p className="text-neutral-200/90">От вас напрямую или от законных партнёров (собственников и т.п.).</p>

      <h2 className="font-serif text-2xl mt-10 mb-3 text-white">5. Получатели данных</h2>
      <p className="text-neutral-200/90">
        Обработчики по поручению ADO (Vercel, GitHub, Formspree, почтовые/телеком-провайдеры, бухгалтерия,
        юр/ИТ-подрядчики). Государственные органы — по закону. При передаче вне ЕЭЗ — СDP/SSC и иные механизмы GDPR.
      </p>

      <h2 className="font-serif text-2xl mt-10 mb-3 text-white">6. Сроки хранения</h2>
      <ul className="list-disc ml-6 space-y-2 text-neutral-200/90">
        <li>Запросы — до 12 мес. (или до возражения), если не перешли в договор.</li>
        <li>Договорные/учётные данные — по польскому праву (обычно 5 лет podatkowo-księgowo).</li>
        <li>Маркетинг — до отзыва согласия/возражения.</li>
        <li>Cookie — согласно срокам конкретных инструментов.</li>
      </ul>

      <h2 className="font-serif text-2xl mt-10 mb-3 text-white">7. Права субъекта данных</h2>
      <ul className="list-disc ml-6 space-y-2 text-neutral-200/90">
        <li>доступ, исправление, удаление, ограничение, переносимость;</li>
        <li>возражение против обработки (законный интерес);</li>
        <li>отзыв согласия (если основой было согласие);</li>
        <li>жалоба: <strong>PUODO</strong>, ul. Stawki 2, 00-193 Warszawa.</li>
      </ul>
      <p className="mt-2 text-neutral-200/90">
        Для реализации прав: <a className="underline hover:no-underline" href="mailto:kovlaks@gmail.com">kovlaks@gmail.com</a>
      </p>

      <h2 className="font-serif text-2xl mt-10 mb-3 text-white">8. Cookie и аналитика</h2>
      <p className="text-neutral-200/90">
        Используем необходимые и, при согласии, аналитические/маркетинговые cookie. Настройка — через баннер/браузер.
      </p>

      <h2 className="font-serif text-2xl mt-10 mb-3 text-white">9. Соцсети и внешние ссылки</h2>
      <p className="text-neutral-200/90">Переход по ссылкам регулируется политиками соответствующих провайдеров.</p>

      <h2 className="font-serif text-2xl mt-10 mb-3 text-white">10. Безопасность</h2>
      <p className="text-neutral-200/90">Применяем соразмерные организационные и технические меры.</p>

      <h2 className="font-serif text-2xl mt-10 mb-3 text-white">11. Несовершеннолетние</h2>
      <p className="text-neutral-200/90">Услуги не адресованы лицам младше 16 лет.</p>

      <h2 className="font-serif text-2xl mt-10 mb-3 text-white">12. Автоматизированные решения</h2>
      <p className="text-neutral-200/90">Не принимаем решений с юридическими последствиями на основе исключительно автоматизированной обработки.</p>

      <h2 className="font-serif text-2xl mt-10 mb-3 text-white">13. Обновления Политики</h2>
      <p className="text-neutral-200/90">
        Актуальная версия доступна по этому адресу. Дата последнего обновления:{" "}
        {new Date().toLocaleDateString("ru-RU")}.
      </p>

      <div className="mt-10 text-sm text-neutral-300/80">
        Примечание: текст подготовлен с учётом GDPR/RODO и польского права в общем виде и не является юр. консультацией.
      </div>
    </main>
  );
}
