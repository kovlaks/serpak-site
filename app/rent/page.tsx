import { SiteFooter } from "../../components/layout/SiteFooter";
import { SiteHeader } from "../../components/layout/SiteHeader";
import { RentContactSection } from "../../components/rent/RentContactSection";

export const metadata = {
  title: "Хочу снять — SERPAKOWSKI Nieruchomości",
};

const worryCards = [
  {
    title: "В море объявлений — ни одного нормального",
    description: "Мы фильтруем рынок и даём вам шорт-лист реальных, адекватных вариантов.",
  },
  {
    title: "Страшно ошибиться с договором и попасть на деньги",
    description: "Мы разбираем договор по пунктам, убираем «красные флаги», предлагаем правки.",
  },
  {
    title: "Не знаю, как проверить собственника",
    description: "Мы проверяем право собственности, полномочия и базовые риски по объекту.",
  },
  {
    title: "Не умею торговаться и защищать свои интересы",
    description: "Мы ведём переговоры за вас: цена, депозит, условия въезда и выезда.",
  },
  {
    title: "Боюсь упустить важные моменты при приёмке",
    description: "Проводим подробную приёмку с протоколом, фото/видео и показаниями счётчиков.",
  },
  {
    title: "Что делать, если после въезда что-то пойдёт не так?",
    description: "14 дней — мы с вами на горячей линии по бытовым и организационным вопросам.",
  },
];

const serviceList = [
  {
    title: "Подбор квартиры под ваш запрос",
    description: "Структурируем запрос, составляем лонг-лист и шорт-лист с комментариями.",
  },
  {
    title: "Организация просмотров и трансфер",
    description: "Планируем маршрут, согласуем время, при необходимости — организуем дорогу до квартиры.",
  },
  {
    title: "Полевой чек-лист квартиры",
    description: "Смотрим не только «красивые стены»: электрика, окна, влага, вентиляция, техника, шум, подъезд, парковка.",
  },
  {
    title: "Проверка собственника и квартиры",
    description: "Реестр, документы, полномочия, согласия совладельцев — базовый юридический фильтр.",
  },
  {
    title: "Договор и переговоры",
    description: "Переводим юридический текст на человеческий, убираем риски, предлагаем правки, ведём переговоры.",
  },
  {
    title: "Najem okazjonalny под ключ",
    description: "Шаблоны согласий, коммуникация, запись к нотариусу, сопровождение процесса.",
  },
  {
    title: "Подписание и приёмка",
    description: "Протокол, фото/видео, счётчики, ключи, фиксация дефектов — всё в порядке.",
  },
  {
    title: "Поддержка после заселения",
    description: "Вопросы по коммуналке, интернету, администрации, нюансам договора.",
  },
  {
    title: "Помощь при досрочном выезде",
    description: "Поиск замены (по согласованию с владельцем) и сопровождение выхода из договора.",
  },
];

const steps = [
  {
    title: "Заявка и бриф",
    details:
      "Вы заполняете короткую форму или созваниваетесь с нами. Мы задаём структурные вопросы: бюджет, районы, семья, статус в Польше, «must have».",
  },
  {
    title: "Подбор и рекомендации",
    details:
      "Мы анализируем рынок, отправляем вам шорт-лист квартир с плюсами и минусами, планируем просмотры.",
  },
  {
    title: "Просмотры, проверка, договор",
    details:
      "Ездим смотреть, проверяем квартиру и собственника, обсуждаем договор, ведём переговоры.",
  },
  {
    title: "Подписание, заселение, поддержка",
    details:
      "Присутствуем на приёмке, фиксируем состояние, сопровождаем первые недели жизни в новой квартире.",
  },
];

const faq = [
  {
    question: "Кто платит комиссию?",
    answer:
      "Формат обсуждаем заранее и фиксируем в договоре оказания услуг. Никаких сюрпризов «в последний момент».",
  },
  {
    question: "Можно всё сделать дистанционно?",
    answer:
      "Да. Видео-туры, электронные согласования, подписание по доверенности — подбираем формат под вашу ситуацию.",
  },
  {
    question: "Какую роль вы берёте в сделке?",
    answer: "Мы профессионально представляем интересы клиента и сопровождаем сделку на каждом этапе.",
  },
  {
    question: "Что, если собственник не согласится на наши правки?",
    answer:
      "Мы заранее проговариваем, где можно уступить, а где — лучше отказаться от квартиры. Решение всегда за вами, но вы принимаете его с полной информацией.",
  },
];

const advantages = [
  {
    title: "Нет походов в офис",
    description: "Поиск жилья и формирование запроса онлайн.",
    icon: "🧭",
  },
  {
    title: "0 злотых предоплаты",
    description: "Оплата за услуги риелтора только после подписания договора аренды.",
    icon: "💵",
  },
  {
    title: "Полное сопровождение",
    description:
      "Согласование просмотров, проверка собственника, анализ договора и приём квартиры — это наша ответственность.",
    icon: "⚖️",
  },
  {
    title: "Поддержка после заселения",
    description: "Мы на связи для помощи в экстренных ситуациях.",
    icon: "🧡",
  },
];

const messengerLinks = [
  {
    label: "Telegram",
    href: "https://t.me/+48453053969",
    gradient: "from-[#229ED9] to-[#1c94cb]",
    icon: "✉️",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/48453053969",
    gradient: "from-[#25D366] to-[#1fb95a]",
    icon: "💬",
  },
  {
    label: "Viber",
    href: "viber://chat?number=%2B380679762988",
    gradient: "from-[#7360F2] to-[#5f47ec]",
    icon: "📞",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0C2D3A] text-neutral-100">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 space-y-20">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0C2D3A] p-8 sm:p-12 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,193,7,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_35%)]" />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Сопровождение аренды в Варшаве</p>
            <h1 className="font-serif text-4xl sm:text-5xl text-white leading-tight">
              Все, чтобы путь к новому дому вдохновлял.
            </h1>
            <p className="text-lg text-neutral-200/90 max-w-2xl">
              Безопасная аренда квартиры в Варшаве под ключ: от первых объявлений до передачи ключей и поддержки после заселения.
            </p>
            <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-amber-200 ring-1 ring-amber-200/30">
              Персональное сопровождение аренды: безопасно, прозрачно и с вниманием к деталям.
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/ru#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
              >
                Найти квартиру с нами
              </a>
              <a
                href="/ru#contact"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10"
              >
                Получить консультацию
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-2 pt-3">
              <span className="text-xs uppercase tracking-[0.12em] text-neutral-200/75">Связаться в мессенджере</span>
              {messengerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${link.gradient} px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] ring-1 ring-white/15 transition hover:-translate-y-0.5`}
                >
                  <span>{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-amber-300 to-amber-500 text-[#0C2D3A] flex items-center justify-center text-xl font-bold">
                  ✓
                </div>
                <div>
                  <div className="text-sm uppercase tracking-[0.12em] text-neutral-200/70">Поддержка 14 дней</div>
                  <div className="text-lg font-semibold text-white">После заселения — мы рядом</div>
                </div>
              </div>
              <div className="rounded-2xl bg-[#0A2530] p-5 ring-1 ring-white/5">
                <div className="text-sm text-neutral-200/80">Коротко о процессе</div>
                <p className="mt-2 text-base text-white/90 leading-relaxed">
                  От брифа и подбора до проверки договора, торга, протокола приёмки и связи после въезда. Вы не тратите время на шум, риски и переговоры.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm text-neutral-200/90">
                <div className="rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">Шорт-лист — за 24–48 часов</div>
                <div className="rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">Юридический фильтр без сложных терминов</div>
                <div className="rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">Полевой чек-лист квартиры</div>
                <div className="rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">Все договорённости — письменно</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества для арендаторов */}
      <section className="rounded-3xl bg-[#0A2530] p-6 sm:p-8 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.16em] text-amber-200/80">Главное</p>
            <h2 className="font-serif text-3xl text-white">Почему арендовать с нами удобно</h2>
          </div>
          <span className="text-sm text-neutral-200/80"></span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl bg-white/5 px-4 py-5 text-left ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-300/20 text-base font-semibold text-amber-100 ring-1 ring-amber-200/30">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-neutral-200/85 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Для кого */}
      <section className="grid gap-8 rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.16em] text-amber-200/80">Для кого</p>
          <h2 className="font-serif text-3xl text-white">Для тех, кто хочет не просто «снять», а жить спокойно</h2>
          <p className="text-neutral-200/90 max-w-2xl">
            Мы берём на себя поиск, проверки и переговоры, чтобы вы заехали в квартиру без стресса и неприятных сюрпризов.
          </p>
        </div>
        <ul className="space-y-3 text-neutral-100/90">
          {[
            "Если вы переезжаете в Варшаву и не знаете, с чего начать поиск.",
            "Если нет времени разбираться в сотнях объявлений и юридических нюансах.",
            "Если вы уже обжигались на аренде и не хотите повторения.",
            "Если вы хотите профессиональное сопровождение переговоров и условий сделки.",
          ].map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-2xl bg-[#0A2530] px-4 py-3 text-base ring-1 ring-white/5"
            >
              <span className="text-amber-300">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Процесс */}
      <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-8">
        <div className="space-y-4 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.16em] text-amber-200/80">Процесс</p>
          <h2 className="font-serif text-3xl text-white">Мы превращаем хаотичный поиск квартиры в понятный и безопасный процесс</h2>
          <p className="text-neutral-200/90">
            Вы рассказываете, как хотите жить. Мы переводим это в чёткое ТЗ, отсекаем мусор, проверяем собственника и договор, ведём переговоры, сопровождаем приёмку квартиры и остаёмся на связи после заселения. Вы не тратите нервы на то, в чём не обязаны разбираться.
          </p>
          <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-amber-200 ring-1 ring-amber-200/30">
            Меньше риска. Меньше стресса. Больше контроля и прозрачности.
          </div>
        </div>
      </section>

      {/* Что перестанет беспокоить */}
      <section className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-amber-200/80">Ответы на страхи</p>
            <h2 className="font-serif text-3xl text-white">Что перестанет вас беспокоить</h2>
          </div>
          <a href="/ru#contact" className="text-sm text-amber-200 hover:text-amber-100">Связаться →</a>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {worryCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-[#0A2530] p-5 ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-amber-200/30"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-amber-300">✦</span>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="text-neutral-200/80 text-sm leading-relaxed">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Услуги */}
      <section className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.16em] text-amber-200/80">Что делаем</p>
          <h2 className="font-serif text-3xl text-white">Что именно мы берём на себя</h2>
          <p className="text-neutral-200/90 max-w-3xl">
            Полный цикл работы с арендой: от сбора требований и логистики просмотров до договора, приёмки и сопровождения после заезда.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {serviceList.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-2xl bg-[#0C2D3A] px-5 py-4 ring-1 ring-white/10"
            >
              <span className="mt-1 text-amber-300">➜</span>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-neutral-200/85 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Как это происходит */}
      <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#0A2530] to-transparent p-8">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.16em] text-amber-200/80">Путь арендатора</p>
          <h2 className="font-serif text-3xl text-white">Как всё происходит, если коротко</h2>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {steps.map((step, index) => (
            <div key={step.title} className="relative overflow-hidden rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="absolute -right-6 -top-6 h-20 w-20 rotate-12 rounded-full bg-amber-300/10" />
              <div className="relative flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-300/90 text-[#0C2D3A] font-semibold">
                  {index + 1}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="text-sm text-neutral-200/85 leading-relaxed">{step.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Почему мы */}
      <section className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.16em] text-amber-200/80">Почему именно мы</p>
          <h2 className="font-serif text-3xl text-white">Плюсы работы с нами</h2>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {["Представляем интересы клиентов профессионально и корректно", "Глубокое понимание рынка Варшавы", "Юридический фильтр без перегруза терминами", "Чек-лист осмотра, который помогает избежать рисков", "Поддержка после заселения, а не «подписали и забыли»", "Сеть партнёров под переезд и быт"].map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-2xl bg-[#0C2D3A] px-5 py-4 ring-1 ring-white/10">
              <span className="mt-1 text-amber-300">★</span>
              <p className="text-base text-neutral-100">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.16em] text-amber-200/80">FAQ</p>
          <h2 className="font-serif text-3xl text-white">Частые вопросы</h2>
        </div>
        <div className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10">
          {faq.map((item) => (
            <div key={item.question} className="bg-white/5 p-5">
              <h3 className="text-lg font-semibold text-white">{item.question}</h3>
              <p className="mt-2 text-neutral-200/85 text-sm leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA + форма */}
      <RentContactSection
        pageLanguage="ru"
        sourcePage="/rent"
        smallLabel="Оставьте свои конакты"
        headline="Готовы начать?"
        description="Мы свяжемся с вами, зададим несколько вопросов и покажем, как можем помочь."
        messengerLabel="Или просто напишите в удобном для вас мессендежере чат"
        placeholders={{
          name: "Имя",
          phone: "Телефон",
          message: "Опишите задачу: районы, бюджет, сроки заселения, формат договора",
        }}
        submitLabel="Перезвоните мне"
        privacyNote={
          <>
            Отправляя форму, вы подтверждаете, что ознакомились с{" "}
            <a href="/ru/privacy" className="underline underline-offset-2 hover:text-white">
              политикой конфиденциальности
            </a>
            .
          </>
        }
        statusMessages={{
          success: "Спасибо. Мы получили заявку и свяжемся с вами как можно скорее.",
          error: "Не удалось отправить заявку. Попробуйте ещё раз или свяжитесь с нами напрямую.",
          validation: "Пожалуйста, укажите имя и телефон.",
        }}
        messengerLinks={messengerLinks}
      />
      </main>
      <SiteFooter />
    </div>
  );
}
