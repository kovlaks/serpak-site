import { SiteFooter } from "../../../components/layout/SiteFooter";
import { SiteHeader } from "../../../components/layout/SiteHeader";

export const metadata = {
  title: "Политика cookies | SERPAKOWSKI Nieruchomości",
  description:
    "Политика cookies SERPAKOWSKI Nieruchomości: информация о файлах cookies, категориях cookies, согласиях и настройках конфиденциальности.",
};

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0C2D3A] text-neutral-100">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <section className="rounded-3xl bg-white/5 p-7 sm:p-10 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <h1 className="font-serif text-3xl sm:text-4xl text-white">Политика cookies</h1>
          <p className="mt-3 text-sm text-neutral-300">Последнее обновление: 05.05.2026</p>
          <p className="mt-6 text-neutral-200/90 leading-relaxed">
            Настоящая политика cookies объясняет, каким образом сайт SERPAKOWSKI Nieruchomości может использовать файлы cookies и аналогичные технологии.
          </p>

          <div className="mt-10 space-y-9 text-neutral-200/90">
            <section>
              <h2 className="font-serif text-2xl text-white mb-3">1. Что такое cookies</h2>
              <p>
                Cookies — это небольшие текстовые файлы или аналогичные технологии, которые сохраняются на устройстве пользователя при использовании сайта. Cookies могут использоваться для обеспечения работы сайта, запоминания предпочтений, ведения статистики и маркетинговых действий.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-white mb-3">2. Кто использует cookies</h2>
              <p>
                Администратором сайта является Serhii Kovlak, ведущий деятельность под брендом SERPAKOWSKI Nieruchomości, адрес для корреспонденции: Złota 75A/7, 00-819 Warszawa, Polska, NIP: 1133184502, REGON: 543202915.
              </p>
              <p className="mt-3">Контакт:</p>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>e-mail: kontakt@serpakowski.pl</li>
                <li>телефон: +48 453 053 969</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-white mb-3">3. Категории cookies</h2>
              <p>Сайт может использовать следующие категории cookies:</p>

              <h3 className="font-serif text-xl text-white mt-6 mb-2">Необходимые cookies</h3>
              <p>
                Они нужны для корректной работы сайта, безопасности, поддержки базовых функций и отображения контента. Такие cookies могут использоваться без отдельного согласия пользователя.
              </p>

              <h3 className="font-serif text-xl text-white mt-6 mb-2">Предпочтительные cookies</h3>
              <p>
                Они могут использоваться для запоминания настроек пользователя, например выбранного языка или предпочтений отображения сайта.
              </p>

              <h3 className="font-serif text-xl text-white mt-6 mb-2">Аналитические cookies</h3>
              <p>
                Они могут использоваться для анализа способов использования сайта, количества посещений, источников трафика и поведения пользователей. Такие cookies применяются исключительно после получения требуемого согласия пользователя.
              </p>

              <h3 className="font-serif text-xl text-white mt-6 mb-2">Маркетинговые cookies</h3>
              <p>
                Они могут использоваться для рекламных действий, ремаркетинга, оценки эффективности рекламы и персонализации маркетинговых сообщений. Такие cookies применяются исключительно после получения требуемого согласия пользователя.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-white mb-3">4. Инструменты, которые могут использоваться</h2>
              <p>В будущем на сайте могут использоваться такие инструменты, как:</p>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>Google Analytics,</li>
                <li>Google Ads,</li>
                <li>Meta Pixel,</li>
                <li>другие аналогичные аналитические или маркетинговые инструменты.</li>
              </ul>
              <p className="mt-3">
                Такие инструменты не должны запускаться до получения требуемого согласия пользователя, если такое согласие требуется законодательством.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-white mb-3">5. Управление согласиями</h2>
              <p>
                Пользователь может согласиться на все необязательные cookies, отклонить необязательные cookies или выбрать конкретные категории cookies в настройках cookies.
              </p>
              <p className="mt-3">
                Согласие можно изменить или отозвать в любой момент через настройки cookies, доступные на сайте.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-white mb-3">6. Необходимые и необязательные cookies</h2>
              <p>
                Необходимые cookies требуются для корректной работы сайта и не могут быть отключены в настройках cookies сайта.
              </p>
              <p className="mt-3">
                Предпочтительные, аналитические и маркетинговые cookies являются необязательными и используются исключительно в соответствии с выбором пользователя и действующим законодательством.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-white mb-3">7. Настройки браузера</h2>
              <p>
                Пользователь также может управлять cookies через настройки своего интернет-браузера. Ограничение или отключение cookies в браузере может повлиять на работу некоторых функций сайта.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-white mb-3">8. Изменения политики cookies</h2>
              <p>
                Политика cookies может обновляться, в частности при внедрении новых аналитических или маркетинговых инструментов либо при изменениях законодательства.
              </p>
              <p className="mt-3">Актуальная версия политики cookies всегда доступна на сайте.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-white mb-3">9. Контакт</h2>
              <p>
                По вопросам, связанным с cookies и защитой персональных данных, можно связаться с администратором:
              </p>
              <p className="mt-4 leading-relaxed">
                SERPAKOWSKI Nieruchomości
                <br />
                Serhii Kovlak
                <br />
                E-mail: kontakt@serpakowski.pl
                <br />
                Телефон: +48 453 053 969
                <br />
                Адрес для корреспонденции: Złota 75A/7, 00-819 Warszawa, Polska
                <br />
                Сфера деятельности: Warsaw, Poland / Варшава, Польша
              </p>
            </section>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
