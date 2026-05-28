import { SiteFooter } from "../../../components/layout/SiteFooter";
import { SiteHeader } from "../../../components/layout/SiteHeader";
import { createSeoMetadata, seoAlternates } from "../../seo";

export const metadata = createSeoMetadata({
  title: "Сдать квартиру в Варшаве | SERPAKOWSKI Nieruchomości",
  description: "Помощь собственникам квартир в Варшаве: подготовка объявления, поиск и проверка арендатора, договор аренды, протокол передачи и сопровождение сдачи квартиры.",
  canonicalPath: "/ru/landlord",
  languages: seoAlternates.landlord,
  locale: "ru_RU",
});

const processSections = [
  {
    title: "Подготовим квартиру к сдаче",
    text: "Перед публикацией важно понять, как квартира выглядит на фоне рынка и что можно улучшить до выхода объявления.",
    points: [
      "оценить рыночную цену аренды;",
      "сравнить квартиру с похожими предложениями;",
      "подготовить рекомендации перед показами;",
      "определить, что может повысить привлекательность квартиры;",
      "подготовить фото- и видеоматериалы;",
      "составить понятное описание;",
      "подготовить объявление к публикации.",
    ],
    closing:
      "Также мы можем предложить решения, которые помогают повысить цену аренды — как при первой сдаче, так и при следующем сроке аренды, особенно если арендатор захочет продлить договор.",
  },
  {
    title: "Найдём и отберём подходящих кандидатов",
    text: "После публикации объявления собственник часто сталкивается с большим количеством сообщений, звонков и неподходящих заявок.",
    lead: "Мы можем взять это на себя:",
    points: [
      "разместить объявление;",
      "вести коммуникацию с кандидатами;",
      "отвечать на вопросы;",
      "организовывать показы;",
      "собирать базовую информацию о кандидатах;",
      "отсеивать неподходящие заявки;",
      "представлять собственнику только тех арендаторов, которые подходят под условия квартиры.",
    ],
    closing:
      "Наша задача — не просто найти человека, который хочет снять квартиру, а помочь выбрать арендатора, с которым аренда будет понятной и безопасной.",
  },
  {
    title: "Поможем проверить арендатора",
    text: "Первого впечатления недостаточно. Перед подписанием договора важно понять, кто будет жить в квартире и насколько кандидат соответствует условиям собственника.",
    points: [
      "проверкой арендатора через Simple.rent или другой доступный инструмент;",
      "анализом платёжеспособности кандидата;",
      "проверкой документов и базовой информации;",
      "уточнением условий аренды до подписания договора;",
      "коммуникацией с иностранными арендаторами, если это необходимо.",
    ],
    closing: "Это помогает снизить риск недопонимания, задержек с оплатой и проблем после заселения.",
  },
  {
    title: "Сопроводим договор и передачу квартиры",
    text: "Когда арендатор выбран, важно правильно оформить условия аренды и зафиксировать состояние квартиры.",
    points: [
      "подготовкой или согласованием договора аренды;",
      "помощью при najem okazjonalny;",
      "координацией нотариуса;",
      "подготовкой протокола передачи квартиры;",
      "фиксацией состояния квартиры;",
      "передачей ключей;",
      "согласованием условий по депозиту, платежам и коммунальным расходам.",
    ],
    closing: "Так собственник получает не просто арендатора, а понятный и аккуратно проведённый процесс сдачи квартиры.",
  },
  {
    title: "Подключим дополнительные услуги, если они нужны",
    text: "В зависимости от состояния квартиры и целей собственника мы можем помочь организовать дополнительные элементы подготовки.",
    points: [
      "клининг;",
      "мелкий ремонт;",
      "подготовку квартиры к фото и показам;",
      "страховку арендатора или квартиры;",
      "дополнительные материалы для объявления;",
      "консультацию по легализации дохода от аренды.",
    ],
    closing: "Эти услуги не всегда обязательны, но в отдельных случаях они помогают быстрее сдать квартиру, повысить её привлекательность или снизить риски.",
  },
  {
    title: "Держим собственника в курсе процесса",
    text: "Собственнику важно понимать, что происходит с квартирой, даже если он не участвует в каждой коммуникации.",
    lead: "Поэтому мы можем предоставлять короткие отчёты после ключевых этапов:",
    points: [
      "после подготовки квартиры;",
      "после публикации объявления;",
      "после первых заявок;",
      "после показов;",
      "после отбора кандидатов;",
      "после выбора арендатора;",
      "после подписания договора и передачи квартиры.",
    ],
    closing: "Это даёт больше контроля и меньше хаоса в процессе аренды.",
  },
];

const afterRentalSections = [
  {
    title: "Можем обсудить дальнейшее сопровождение аренды",
    text: "После подписания договора собственнику может понадобиться помощь не только в поиске арендатора, но и в текущей коммуникации.",
    lead: "В расширенном формате мы можем обсудить:",
    points: [
      "контроль поступления платежей;",
      "коммуникацию с арендатором;",
      "координацию мелкого ремонта;",
      "периодические осмотры квартиры;",
      "отчёты собственнику;",
      "помощь в бытовых вопросах;",
      "напоминания о важных датах по договору.",
    ],
    closing: "Это особенно полезно для собственников, которые не хотят самостоятельно заниматься постоянной коммуникацией с арендатором.",
  },
  {
    title: "Поможем заранее подготовиться к окончанию договора",
    text: "Хорошая аренда не заканчивается в последний день договора. Лучше заранее понимать, будет ли продление, нужно ли менять цену и когда начинать поиск следующего арендатора.",
    points: [
      "анализом ситуации перед окончанием договора;",
      "переговорами о продлении;",
      "перезаключением договора;",
      "пересмотром цены аренды;",
      "подготовкой квартиры к следующему сроку;",
      "поиском нового арендатора заранее, если текущий арендатор не продлевает договор.",
    ],
    closing: "Цель — снизить риск простоя квартиры и заранее подготовить следующий шаг.",
  },
];

function ServiceCard({
  section,
  index,
}: {
  section: {
    title: string;
    text: string;
    lead?: string;
    points: string[];
    closing: string;
  };
  index: number;
}) {
  return (
    <article className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.24)] sm:p-8">
      <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-300/20 text-sm font-semibold text-amber-100 ring-1 ring-amber-200/30">
        {index + 1}
      </div>
      <h2 className="font-serif text-3xl text-white">{section.title}</h2>
      <p className="mt-4 leading-relaxed text-neutral-200/90">{section.text}</p>
      {section.lead ? <p className="mt-5 font-semibold text-amber-100">{section.lead}</p> : null}
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {section.points.map((point) => (
          <li key={point} className="rounded-xl bg-[#0A2530] px-4 py-3 text-sm leading-relaxed text-neutral-100 ring-1 ring-white/10">
            • {point}
          </li>
        ))}
      </ul>
      <p className="mt-5 leading-relaxed text-neutral-200/90">{section.closing}</p>
    </article>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0C2D3A] text-neutral-100">
      <SiteHeader />
      <main className="mx-auto max-w-6xl space-y-20 px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F3A4D] via-[#0C2D3A] to-[#0C2D3A] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:p-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,193,7,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_35%)]" />
          <div className="max-w-4xl space-y-6">
            <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Сопровождение собственников в Варшаве</p>
            <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
              Сдайте квартиру безопасно и без лишнего хаоса
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-neutral-200/90">
              SERPAKOWSKI Nieruchomości помогает собственникам в Варшаве пройти весь процесс аренды: от оценки квартиры и подготовки предложения до выбора арендатора, договора и передачи ключей.
            </p>
            <p className="max-w-3xl leading-relaxed text-neutral-200/85">
              Мы берём на себя не только публикацию объявления, но и организацию всего процесса — чтобы собственник не тратил время на случайные заявки, повторяющиеся вопросы и рискованные решения.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                Оставить заявку
              </a>
              <a href="#process" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10">
                Посмотреть этапы работы
              </a>
            </div>
          </div>
        </section>

        <section id="process" className="space-y-6 scroll-mt-24">
          {processSections.map((section, index) => (
            <ServiceCard key={section.title} section={section} index={index} />
          ))}
        </section>

        <section className="rounded-3xl bg-[#0A2530] p-8 text-center ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Следующий этап</p>
          <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">После сдачи квартиры</h2>
        </section>

        <section className="space-y-6">
          {afterRentalSections.map((section, index) => (
            <ServiceCard key={section.title} section={section} index={index + processSections.length} />
          ))}
        </section>

        <section id="contact" className="scroll-mt-24 rounded-3xl bg-gradient-to-r from-[#0F3A4D] to-[#0C2D3A] p-8 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-10">
          <h2 className="font-serif text-3xl text-white">Хотите сдать квартиру безопасно?</h2>
          <p className="mt-4 max-w-3xl text-neutral-200/90">
            Оставьте заявку — мы уточним детали квартиры, оценим ситуацию и предложим понятный план действий.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="mailto:kontakt@serpakowski.pl" className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
              Оставить заявку
            </a>
            <a href="https://wa.me/48453053969" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10">
              Написать в WhatsApp
            </a>
          </div>
          <div className="mt-6 space-y-1 text-neutral-200/90">
            <p>kontakt@serpakowski.pl</p>
            <p>+48 453 053 969</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
