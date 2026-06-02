import type { Metadata } from "next";
import HomeContactForm from "../../components/common/HomeContactForm";
import { SiteFooter } from "../../components/layout/SiteFooter";
import { SiteHeader } from "../../components/layout/SiteHeader";

export const metadata: Metadata = {
  title: "Test RU | SERPAKOWSKI Nieruchomości",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
      noimageindex: true,
    },
  },
};

const valueCards = [
  {
    title: "Понятный маршрут",
    text: "Процесс разбит на этапы, чтобы собственник видел логику действий: от оценки квартиры до передачи ключей.",
  },
  {
    title: "Меньше случайных решений",
    text: "Коммуникация, показы и первичный отбор помогают снизить хаос и сфокусироваться на подходящих кандидатах.",
  },
  {
    title: "Аккуратная фиксация",
    text: "Договор, протокол, счётчики и ключи собираются в понятный финальный этап без лишней спешки.",
  },
];

const processCards = [
  {
    number: "01",
    title: "Оценка квартиры",
    text: "Анализируем рыночную цену, сравниваем с похожими предложениями и определяем сильные стороны объекта.",
  },
  {
    number: "02",
    title: "Подготовка предложения",
    text: "Помогаем подготовить квартиру к показам, фото, видео, описание и понятное объявление.",
  },
  {
    number: "03",
    title: "Публикация и коммуникация",
    text: "Размещаем объявление, отвечаем на вопросы, фильтруем случайные заявки и ведём первичную коммуникацию.",
  },
  {
    number: "04",
    title: "Показы и отбор",
    text: "Организуем показы, собираем информацию о кандидатах и представляем собственнику подходящие варианты.",
  },
  {
    number: "05",
    title: "Проверка арендатора",
    text: "Помогаем проверить кандидата через доступные инструменты, документы и базовую информацию.",
  },
  {
    number: "06",
    title: "Договор и najem okazjonalny",
    text: "Сопровождаем согласование условий, договор, najem okazjonalny и координацию нотариуса, если это нужно.",
  },
  {
    number: "07",
    title: "Передача квартиры",
    text: "Готовим протокол, фиксируем состояние квартиры, показания счётчиков, ключи и основные условия передачи.",
  },
  {
    number: "08",
    title: "Поддержка после сдачи",
    text: "Можно обсудить дальнейшую коммуникацию с арендатором, платежи, мелкий ремонт, отчёты и подготовку к окончанию договора.",
  },
];

const additionalServices = [
  "Клининг перед показами",
  "Фото и видео квартиры",
  "Home staging без перегруза",
  "Объявление и описание",
  "Коммуникация с кандидатами",
  "Протокол передачи",
  "Координация нотариуса",
  "Подготовка к продлению договора",
];

const controlPoints = [
  "короткие обновления после важных этапов;",
  "сравнение кандидатов без давления на быстрое решение;",
  "понятные договорённости по депозиту, платежам и срокам;",
  "финальная фиксация состояния квартиры перед передачей.",
];

const supportCards = [
  {
    title: "Коммуникация после заселения",
    text: "Если нужно, можно обсудить формат дальнейшего контакта с арендатором и реакцию на бытовые вопросы.",
  },
  {
    title: "Платежи и отчёты",
    text: "Можно поддержать контроль договорённостей по оплатам и подготовить спокойный формат обновлений для собственника.",
  },
  {
    title: "Завершение или продление",
    text: "К окончанию договора можно заранее подготовить следующий шаг: продление, повторную сдачу или обновление предложения.",
  },
];

function ProcessCard({ card, index }: { card: (typeof processCards)[number]; index: number }) {
  const desktopLift = index % 4 === 1 || index % 4 === 2 ? "lg:translate-y-8" : "lg:translate-y-0";

  return (
    <article
      className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.34)] backdrop-blur transition duration-500 ease-out hover:-translate-y-2 hover:border-amber-200/35 hover:bg-white/[0.075] hover:shadow-[0_38px_95px_rgba(0,0,0,0.46)] motion-reduce:transition-none lg:[transform-style:preserve-3d] lg:hover:[transform:translateY(-0.5rem)_rotateX(2deg)_translateZ(18px)] ${desktopLift}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(251,191,36,0.18),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.12),transparent_42%)] opacity-80" />
      <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-amber-300/10 blur-2xl transition group-hover:bg-amber-300/20" />
      <div className="relative flex items-start justify-between gap-6">
        <span className="font-serif text-5xl leading-none text-amber-300 drop-shadow-[0_10px_24px_rgba(251,191,36,0.22)] lg:[transform:translateZ(34px)]">
          {card.number}
        </span>
        <span className="mt-2 h-px flex-1 bg-gradient-to-r from-amber-200/55 via-white/15 to-transparent" />
      </div>
      <div className="relative mt-8 lg:[transform:translateZ(26px)]">
        <h3 className="font-serif text-2xl leading-tight text-white">{card.title}</h3>
        <p className="mt-4 text-sm leading-7 text-neutral-200/88">{card.text}</p>
      </div>
      <div className="relative mt-7 h-2 rounded-full bg-[#061B24] ring-1 ring-white/10 lg:[transform:translateZ(18px)]">
        <div className="h-full rounded-full bg-gradient-to-r from-amber-400 via-amber-200 to-white/70" style={{ width: `${28 + index * 8}%` }} />
      </div>
    </article>
  );
}

export default function TestRuPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#071F2A] text-neutral-100">
      <SiteHeader />
      <main className="mx-auto max-w-7xl space-y-20 px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0C2D3A] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.4)] sm:p-10 lg:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(251,191,36,0.18),transparent_30%),radial-gradient(circle_at_78%_8%,rgba(255,255,255,0.12),transparent_25%),linear-gradient(135deg,#123F52_0%,#0C2D3A_46%,#061B24_100%)]" />
          <div className="absolute right-0 top-0 hidden h-full w-1/2 bg-[linear-gradient(115deg,transparent_0%,rgba(251,191,36,0.10)_42%,transparent_72%)] lg:block" />
          <div className="relative grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="max-w-3xl space-y-6">
              <p className="text-xs uppercase tracking-[0.22em] text-amber-200/80">Тестовая страница · визуальный эксперимент</p>
              <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                Сдайте квартиру <span className="text-amber-300">безопасно</span> и без лишнего хаоса
              </h1>
              <p className="text-lg leading-8 text-neutral-200/90">
                SERPAKOWSKI Nieruchomości помогает собственникам в Варшаве пройти процесс аренды спокойнее: оценить квартиру, подготовить предложение, отобрать кандидатов и аккуратно передать ключи.
              </p>
              <p className="max-w-2xl leading-7 text-neutral-200/82">
                Здесь тестируется более пространственная подача: меньше ощущения длинного списка и больше понятного маршрута с контролем на каждом этапе.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#08232E] shadow-[0_14px_34px_rgba(0,0,0,0.28)] transition hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-[0_22px_48px_rgba(0,0,0,0.36)]">
                  Оставить заявку
                </a>
                <a href="#process" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10">
                  Посмотреть 3D-маршрут
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md [perspective:1200px]">
              <div className="absolute inset-6 rounded-[2rem] bg-amber-300/10 blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/12 bg-white/[0.06] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.42)] backdrop-blur md:p-6 lg:[transform:rotateY(-10deg)_rotateX(5deg)] lg:[transform-style:preserve-3d]">
                <div className="rounded-[1.5rem] border border-amber-200/20 bg-[#061B24]/70 p-5 lg:[transform:translateZ(30px)]">
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-200/80">Apartment rental path</p>
                  <div className="mt-5 space-y-4">
                    {["Оценка", "Кандидаты", "Договор", "Передача"].map((item, index) => (
                      <div key={item} className="flex items-center gap-4 rounded-2xl bg-white/[0.055] p-3 ring-1 ring-white/10">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-300/20 text-sm font-semibold text-amber-100 ring-1 ring-amber-200/30">{index + 1}</span>
                        <span className="text-sm text-neutral-100">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {valueCards.map((card) => (
            <article key={card.title} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.24)]">
              <h2 className="font-serif text-2xl text-white">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-200/85">{card.text}</p>
            </article>
          ))}
        </section>

        <section id="process" className="relative scroll-mt-28 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A2530] px-4 py-10 shadow-[0_30px_90px_rgba(0,0,0,0.36)] sm:px-8 lg:px-10 lg:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_12%,rgba(251,191,36,0.13),transparent_28%),radial-gradient(circle_at_82%_56%,rgba(46,107,127,0.38),transparent_34%)]" />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-amber-200/80">Лёгкий CSS 3D-path</p>
            <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl lg:text-5xl">Путь сдачи квартиры — шаг за шагом</h2>
            <p className="mt-5 text-base leading-8 text-neutral-200/86 sm:text-lg">
              Показываем процесс не как хаотичный список задач, а как понятный маршрут: от оценки квартиры до передачи ключей и дальнейшего сопровождения.
            </p>
          </div>

          <div className="relative mt-12 [perspective:1400px]">
            <div className="pointer-events-none absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-amber-200/35 to-transparent lg:block" />
            <div className="grid gap-5 md:grid-cols-2 lg:gap-7 lg:[transform-style:preserve-3d]">
              {processCards.map((card, index) => (
                <ProcessCard key={card.number} card={card} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-[0_24px_72px_rgba(0,0,0,0.28)] sm:p-9">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-amber-200/80">Дополнительные элементы подготовки</p>
            <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">Можно подключить только то, что нужно квартире</h2>
            <p className="mt-4 leading-7 text-neutral-200/85">
              Дополнительные услуги не превращают процесс в тяжёлый проект: они помогают улучшить подготовку предложения и снизить количество организационных вопросов.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            {additionalServices.map((service) => (
              <span key={service} className="rounded-full border border-amber-200/18 bg-amber-200/10 px-4 py-2 text-sm text-amber-50 shadow-[0_12px_32px_rgba(0,0,0,0.2)]">
                {service}
              </span>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#123F52] to-[#08232E] p-7 shadow-[0_24px_72px_rgba(0,0,0,0.3)] sm:p-9">
            <p className="text-xs uppercase tracking-[0.22em] text-amber-200/80">Контроль собственника</p>
            <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">Владелец остаётся в процессе, но не в хаосе</h2>
            <p className="mt-4 leading-7 text-neutral-200/86">
              Мы можем поддерживать собственника информацией по ключевым этапам, чтобы решения принимались спокойно и на основе понятной картины.
            </p>
          </div>
          <ul className="space-y-3">
            {controlPoints.map((point) => (
              <li key={point} className="rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 text-sm leading-7 text-neutral-100 shadow-[0_14px_44px_rgba(0,0,0,0.22)]">
                <span className="mr-3 text-amber-300">•</span>{point}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-6">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-amber-200/80">После сдачи</p>
            <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">Поддержка после передачи ключей</h2>
            <p className="mt-4 leading-7 text-neutral-200/85">
              Если собственнику нужен не только поиск арендатора, можно обсудить дальнейшее сопровождение в лёгком и понятном формате.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {supportCards.map((card) => (
              <article key={card.title} className="rounded-3xl border border-white/10 bg-[#0A2530] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.26)]">
                <h3 className="font-serif text-2xl text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-200/85">{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="relative scroll-mt-28 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-[#123F52] via-[#0C2D3A] to-[#061B24] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.38)] sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_15%,rgba(251,191,36,0.12),transparent_32%),radial-gradient(ellipse_at_center,rgba(46,107,127,0.18),transparent_60%)]" />
          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-amber-200/80">Финальный шаг</p>
              <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">Оставьте ваши контакты</h2>
              <p className="mt-4 max-w-md leading-7 text-neutral-200/90">Мы свяжемся с вами как можно скорее и обсудим квартиру, сроки и формат поддержки.</p>
              <p className="mt-5 text-xs leading-relaxed text-neutral-200/70">
                Отправляя форму, вы подтверждаете, что ознакомились с{" "}
                <a href="/ru/privacy" className="underline underline-offset-2 hover:text-white">
                  политикой конфиденциальности
                </a>
                .
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.28)] backdrop-blur sm:p-6">
              <HomeContactForm
                language="ru"
                sourcePage="/ru/landlord"
                namePlaceholder="Имя"
                phonePlaceholder="Телефон"
                messagePlaceholder="Кратко опишите задачу: сдача квартиры, район, сроки"
                submitLabel="Отправить"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
