import { SiteFooter } from "../../components/layout/SiteFooter";
import { SiteHeader } from "../../components/layout/SiteHeader";

export const metadata = {
  title: "Сдать квартиру в Варшаве | SERPAKOWSKI Nieruchomości",
  description:
    "Профессиональное сопровождение сдачи квартиры в Варшаве: подготовка объекта, маркетинг, показы, проверка арендатора, договор и передача квартиры.",
};

const responsibilities = [
  "Анализ цены и спроса",
  "Подготовка объекта",
  "Маркетинг и объявления",
  "Показы и переговоры",
  "Проверка арендатора",
  "Договор и протокол передачи",
];

const valueCards = [
  {
    title: "Цена и позиционирование",
    text: "Определяем реалистичную рыночную цену, анализируем конкуренцию и помогаем подать объект так, чтобы привлечь подходящих арендаторов.",
  },
  {
    title: "Качество арендатора",
    text: "Помогаем отфильтровать случайные обращения, уточняем ситуацию клиента, сроки, документы и готовность к аренде.",
  },
  {
    title: "Безопасность сделки",
    text: "Сопровождаем договор, протокол передачи, кауцию, счётчики и ключевые условия аренды.",
  },
];

const steps = [
  {
    title: "Знакомство с объектом",
    text: "Собираем информацию о квартире, локации, состоянии, платежах и ожиданиях собственника.",
  },
  {
    title: "Анализ рынка",
    text: "Сравниваем похожие предложения и определяем стратегию цены.",
  },
  {
    title: "Подготовка объявления",
    text: "Помогаем с описанием, фото, преимуществами объекта и правильной подачей.",
  },
  {
    title: "Продвижение и показы",
    text: "Публикуем предложение, принимаем обращения, организуем показы и коммуникацию.",
  },
  {
    title: "Проверка кандидата",
    text: "Уточняем документы, источник дохода, состав проживающих, сроки и важные условия.",
  },
  {
    title: "Договор и передача квартиры",
    text: "Помогаем пройти подписание, оплату, кауцию, протокол, счётчики и передачу ключей.",
  },
];

const risks = [
  "Заниженная или завышенная цена",
  "Долгий простой квартиры",
  "Слабые или случайные кандидаты",
  "Непонятные условия договора",
  "Споры по кауции и повреждениям",
  "Неправильно оформленная передача квартиры",
  "Потеря времени на показы и переписки",
  "Непрозрачные платежи и ожидания",
];

const marketingBullets = [
  "описание без лишнего шума",
  "акцент на сильных сторонах объекта",
  "понятные условия для арендатора",
  "корректная коммуникация",
  "быстрый ответ на обращения",
];

const screeningBullets = [
  "кто будет проживать",
  "срок аренды",
  "источник дохода",
  "документы",
  "ожидания по договору",
  "готовность к кауции и оплатам",
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0C2D3A] text-neutral-100">
      <SiteHeader />
      <main className="mx-auto max-w-6xl space-y-20 px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0C2D3A] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,193,7,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_35%)]" />
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Сопровождение для собственников в Варшаве</p>
              <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
                Сдать квартиру <br />
                спокойно и <span className="text-amber-300">выгодно</span>
              </h1>
              <p className="max-w-2xl text-lg text-neutral-200/90">
                Помогаем собственникам подготовить объект, найти надёжного арендатора и пройти весь процесс аренды без хаоса и лишних рисков.
              </p>
              <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-amber-200 ring-1 ring-amber-200/30">
                Профессиональное сопровождение собственника на каждом этапе аренды.
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">Обсудить сдачу квартиры</a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10">Получить консультацию</a>
              </div>
            </div>
            <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-2xl font-semibold text-white">Что берём на себя</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {responsibilities.map((item) => (
                  <div key={item} className="rounded-xl bg-white/5 px-4 py-3 text-sm text-neutral-100 ring-1 ring-white/10">• {item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-[#0A2530] p-6 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8">
          <h2 className="font-serif text-3xl text-white">Главное — не просто сдать, а сдать правильно</h2>
          <p className="mt-4 max-w-4xl text-neutral-200/90">Правильная сдача квартиры начинается не с публикации объявления, а с оценки объекта, понимания рынка, подготовки условий, фильтрации кандидатов и безопасного оформления договора.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {valueCards.map((card) => (
              <article key={card.title} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-200/85">{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-white">Как проходит работа</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-300/20 text-sm font-semibold text-amber-100 ring-1 ring-amber-200/30">{index + 1}</div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-200/85">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-white">Какие риски мы помогаем снизить</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {risks.map((risk) => (
              <article key={risk} className="rounded-2xl bg-white/5 p-5 text-sm text-neutral-100 ring-1 ring-white/10">• {risk}</article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-[#0A2530] p-6 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8">
          <h2 className="font-serif text-3xl text-white">Квартира должна быть показана правильно</h2>
          <p className="mt-4 max-w-4xl text-neutral-200/90">Даже хороший объект можно сдать хуже рынка, если неверно подать цену, фотографии, описание или условия. Мы помогаем сделать предложение понятным, привлекательным и конкурентным.</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {marketingBullets.map((item) => (
              <li key={item} className="rounded-xl bg-white/5 px-4 py-3 text-sm text-neutral-100 ring-1 ring-white/10">• {item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8">
          <h2 className="font-serif text-3xl text-white">Надёжный арендатор — основа спокойной аренды</h2>
          <p className="mt-4 max-w-4xl text-neutral-200/90">Мы помогаем собственнику не просто получить много сообщений, а выбрать кандидата, с которым условия аренды будут понятны заранее.</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {screeningBullets.map((item) => (
              <li key={item} className="rounded-xl bg-[#0A2530] px-4 py-3 text-sm text-neutral-100 ring-1 ring-white/10">• {item}</li>
            ))}
          </ul>
        </section>

        <section id="contact" className="rounded-3xl bg-gradient-to-r from-[#0F3A4D] to-[#0C2D3A] p-8 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-10">
          <h2 className="font-serif text-3xl text-white">Хотите сдать квартиру без хаоса?</h2>
          <p className="mt-4 max-w-3xl text-neutral-200/90">Расскажите нам об объекте — мы оценим ситуацию и предложим понятный формат сотрудничества.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="mailto:kovlaks@gmail.com" className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">Оставить заявку</a>
            <a href="https://wa.me/48453053969" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10">Написать в WhatsApp</a>
          </div>
          <div className="mt-6 space-y-1 text-neutral-200/90">
            <p>kovlaks@gmail.com</p>
            <p>+48 453 053 969</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
