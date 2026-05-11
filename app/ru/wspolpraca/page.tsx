import { Button } from "../../../components/layout/Button";
import { Container } from "../../../components/layout/Container";
import { SiteFooter } from "../../../components/layout/SiteFooter";
import { SiteHeader } from "../../../components/layout/SiteHeader";
import { createSeoMetadata, seoAlternates } from "../../seo";

export const metadata = createSeoMetadata({
  title: "Сотрудничество в недвижимости | SERPAKOWSKI Nieruchomości",
  description: "Сотрудничество для агентств, частных агентов, инвесторов и партнёров рынка недвижимости в Варшаве. Выстраиваем партнёрства, которые приводят клиентов и сделки.",
  canonicalPath: "/ru/wspolpraca",
  languages: seoAlternates.partnership,
  locale: "ru_RU",
});

const operatorBenefits = [
  "Привлечение клиентов, заинтересованных в долгосрочной аренде",
  "Поддержка клиентов в спокойном прохождении процесса аренды",
  "Коммуникация на польском, русском, украинском и английском языках",
  "Дополнительные бенефиты для арендаторов благодаря сети партнёров",
  "Совместные контентные и образовательные активности вокруг аренды в Варшаве",
];

const ecosystemAreas = [
  "Интернет и телекоммуникационные услуги",
  "Переезд и транспорт",
  "Клининг квартир",
  "Страхование аренды и недвижимости",
  "Handyman, сборка мебели и мелкий ремонт",
  "Кофейни и локальные бенефиты",
  "Фитнес и активность",
  "Легализация пребывания и поддержка иностранцев",
  "Медицина и частная медицинская помощь",
  "Нотариусы",
  "Бухгалтерия и поддержка JDG",
  "Обустройство квартир",
  "Кейтеринг и готовое питание",
];

const partnerBenefits = [
  "Доступ к клиентам в момент реальной потребности",
  "Видимость на сайте SERPAKOWSKI Nieruchomości как партнёра, если сотрудничество будет согласовано",
  "Возможность подготовить промокод, ваучер, приоритет или специальный бенефит",
  "Совместные маркетинговые и контентные активности",
  "Возможность рекомендаций клиентов или партнёрских расчётов, если модель сотрудничества это позволяет",
  "Более качественный клиентский опыт",
];

const clientBenefits = [
  "Меньше хаоса после подписания договора",
  "Доступ к проверенным поставщикам услуг",
  "Возможные скидки, приоритет или специальные условия",
  "Более лёгкий старт в новой квартире",
  "Большее чувство безопасности",
  "Поддержка не только до подписания договора, но и после переезда",
];

const cooperationModels = [
  {
    title: "Рекомендации клиентов",
    text: "Передача контактов людей, которые действительно нуждаются в конкретной услуге или предложении аренды.",
  },
  {
    title: "Специальный бенефит для клиентов",
    text: "Скидка, ваучер, приоритет обслуживания, специальный пакет или другая форма добавленной ценности.",
  },
  {
    title: "Совместная видимость",
    text: "Презентация партнёра на сайте, в информационных материалах или в коммуникации с клиентом.",
  },
  {
    title: "Совместный контент",
    text: "Гайды, чек-листы, короткие образовательные материалы или контент о безопасной аренде, переезде и жизни в Варшаве.",
  },
  {
    title: "Поддержка международных клиентов",
    text: "Помощь людям, которые не знают хорошо польский язык и нуждаются в спокойной коммуникации в процессе аренды.",
  },
];

const serviceExamples = [
  "Интернет для новой квартиры",
  "Переезд и транспорт вещей",
  "Уборка до или после заселения",
  "Страхование аренды и недвижимости",
  "Сборка мебели и мелкий ремонт",
  "Легализация пребывания, бухгалтерия, нотариус",
  "Медицина, фитнес, кейтеринг и повседневные услуги, которые облегчают старт в Варшаве",
];

const agencyExamples = [
  "Совместные сделки",
  "Передача клиентов",
  "Поддержка русско-, украинско- и англоязычных клиентов",
  "Помощь при аренде, продаже или покупке",
  "Поддержка владельцев и инвесторов",
];

const cooperationSteps = [
  {
    title: "Короткий разговор",
    text: "Понимаем, чем занимается партнёр и подходит ли его услуга потребностям наших клиентов.",
  },
  {
    title: "Выбор модели",
    text: "Определяем, на чём будет строиться сотрудничество: рекомендации, бенефит для клиентов, совместный контент, видимость на сайте или другой формат.",
  },
  {
    title: "Тест на практике",
    text: "Начинаем с простой модели, которую легко проверить.",
  },
  {
    title: "Развитие сотрудничества",
    text: "Если модель работает, можно расширять охват, видимость и совместные действия.",
  },
];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-2xl bg-white/5 px-4 py-4 text-sm leading-relaxed text-neutral-100/95 ring-1 ring-white/10"
        >
          <span className="mr-2 text-amber-300">•</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function SectionIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {children ? (
        <div className="mt-4 space-y-4 text-neutral-200/85 leading-relaxed">
          {children}
        </div>
      ) : null}
    </div>
  );
}

export default function WspolpracaPageRu() {
  return (
    <div className="min-h-screen bg-[#0C2D3A] text-neutral-100">
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden pt-24">
          <div className="absolute inset-0 -z-10">
            <img
              src="/Depositphotos_455695662_XL.jpg"
              alt="Панорама Варшавы"
              className="h-full w-full object-cover object-[center_38%]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#061923]/50 via-[#0C2D3A]/55 to-[#0C2D3A]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,210,120,0.18),transparent_36%),radial-gradient(circle_at_82%_8%,rgba(255,255,255,0.16),transparent_34%)]" />
          </div>
          <Container>
            <div className="pb-24 pt-[42vh] sm:pb-28 sm:pt-[46vh] md:pb-32 md:pt-[50vh]">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200/85">
                B2B · аренда · релокация · Варшава
              </p>
              <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Сотрудничество, которое приводит {" "}
                <span className="text-amber-300">клиентов</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-200/90">
                Создаём экосистему сотрудничества вокруг аренды и недвижимости в Варшаве — для клиентов, собственников, агентов, операторов аренды и сервисных компаний.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
                >
                  Обсудить партнёрство
                </a>
                <Button href="#ecosystem">Посмотреть направления сотрудничества</Button>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <SectionIntro
                eyebrow="Операторы и PRS"
                title="Для операторов аренды и институциональных владельцев"
              >
                <p>
                  Мы помогаем операторам аренды, владельцам портфелей квартир и PRS-проектам выходить на клиентов, которые активно ищут жильё в Варшаве.
                </p>
                <p>
                  SERPAKOWSKI Nieruchomości может поддерживать партнёров в привлечении арендаторов, презентации предложений, коммуникации с международными клиентами и создании дополнительной ценности вокруг процесса аренды.
                </p>
              </SectionIntro>
              <CheckList items={operatorBenefits} />
            </div>
          </Container>
        </section>

        <section className="py-6 sm:py-10">
          <Container>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#12465B] via-[#0E384A] to-[#0A2A38] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.38)] ring-1 ring-amber-200/30 sm:p-10 lg:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(255,210,120,0.18),transparent_34%)]" />
              <div className="relative max-w-4xl">
                <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">
                  Прозрачность и лояльность
                </p>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl">
                  Сотрудничество на понятных правилах
                </h2>
                <div className="mt-5 space-y-4 text-lg leading-relaxed text-neutral-100/90">
                  <p>
                    В партнёрских отношениях мы делаем ставку на прозрачность, лояльность и отсутствие конфликта интересов. Если клиент приходит к нам в рамках конкретного сотрудничества, мы уважаем согласованное направление работы и не строим отношения за счёт партнёра.
                  </p>
                  <p>
                    Хорошее партнёрство должно усиливать обе стороны, а не заменять одну другой.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="ecosystem" className="py-16 sm:py-20">
          <Container>
            <SectionIntro
              eyebrow="Направления экосистемы"
              title="Экосистема услуг вокруг аренды"
            >
              <p>
                Аренда квартиры не заканчивается подписанием договора. Клиенту часто нужны интернет, переезд, уборка, страхование, техническая помощь, поддержка с легализацией пребывания, бухгалтерия, нотариальные услуги, медицина, фитнес, обустройство квартиры или кейтеринг.
              </p>
              <p>
                Поэтому мы развиваем сеть партнёров, которые могут упростить клиенту старт в новом месте и одновременно повысить ценность предложения для операторов аренды, владельцев и компаний, сотрудничающих с SERPAKOWSKI Nieruchomości.
              </p>
              <p>
                Нас интересуют партнёрства в таких направлениях, как:
              </p>
            </SectionIntro>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ecosystemAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-2xl bg-white/5 px-4 py-4 text-sm text-neutral-100/95 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/10 hover:ring-amber-200/30"
                >
                  {area}
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-8 sm:py-12">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <SectionIntro title="Что может получить партнёр?">
                  <p>
                    Сотрудничество с SERPAKOWSKI Nieruchomości даёт возможность выйти на клиента в очень конкретный момент: когда он ищет жильё, подписывает договор, переезжает или начинает жизнь в новой локации.
                  </p>
                  <p>
                    Это момент, когда потребность в услугах реальная, срочная и естественная.
                  </p>
                </SectionIntro>
                <div className="mt-7">
                  <CheckList items={partnerBenefits} />
                </div>
              </div>
              <div>
                <SectionIntro title="Что получает клиент?">
                  <p>
                    Наша цель — чтобы клиент после нахождения квартиры не оставался один на один со следующими задачами. Правильно подобранные партнёры могут помочь ему быстрее и спокойнее организовать переезд, интернет, уборку, страховку, обустройство квартиры или другие практические вопросы.
                  </p>
                </SectionIntro>
                <div className="mt-7">
                  <CheckList items={clientBenefits} />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <SectionIntro
              eyebrow="Гибкие форматы"
              title="Возможные модели сотрудничества"
            >
              <p>
                Модель сотрудничества подбираем под категорию партнёра, потребность клиента и реальную ценность, которую можем создать вместе.
              </p>
            </SectionIntro>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {cooperationModels.map((model) => (
                <article
                  key={model.title}
                  className="rounded-2xl bg-white/5 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.2)] ring-1 ring-white/10 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10 hover:ring-amber-200/30"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {model.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-200/85">
                    {model.text}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-8 sm:py-12">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <SectionIntro
                eyebrow="Сервисные партнёры"
                title="Для сервисных компаний"
              >
                <p>
                  Нас интересует сотрудничество с компаниями, которые могут реально помочь клиентам до, во время или после переезда. Речь не о случайной рекламе, а об услуге, которая появляется именно тогда, когда клиент в ней нуждается.
                </p>
              </SectionIntro>
              <CheckList items={serviceExamples} />
            </div>
          </Container>
        </section>

        <section className="py-8 sm:py-12">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <SectionIntro
                eyebrow="Недвижимость и инвестиции"
                title="Для агентств, агентов и инвесторов"
              >
                <p>
                  Мы открыты к сотрудничеству с агентствами недвижимости, независимыми посредниками, инвесторами и владельцами, которым важны прозрачные правила, хорошая коммуникация и практический результат.
                </p>
                <p>
                  Сотрудничество может касаться совместных сделок, передачи клиентов, поддержки международных клиентов, поиска предложений, коммуникации с владельцами или организации процесса аренды.
                </p>
              </SectionIntro>
              <CheckList items={agencyExamples} />
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <SectionIntro title="Как мы начинаем?" />
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {cooperationSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-2xl bg-white/5 p-6 shadow-[0_10px_28px_rgba(0,0,0,0.2)] ring-1 ring-white/10 backdrop-blur-sm"
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-amber-200/80">
                    Шаг {index + 1}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-200/85">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="contact" className="relative isolate py-20">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(46,107,127,0.2),transparent_60%)]" />
          <Container>
            <div className="rounded-3xl bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 backdrop-blur-sm sm:p-10 lg:p-12">
              <h2 className="max-w-3xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Обсудим сотрудничество
              </h2>
              <p className="mt-4 max-w-3xl text-neutral-200/85 leading-relaxed">
                Если вы представляете оператора аренды, агентство, сервисную компанию, инвестора или проект, связанный с рынком недвижимости в Варшаве, напишите нам. Мы готовы обсудить, можем ли создать понятную, прозрачную и практичную модель сотрудничества.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="mailto:kontakt@serpakowski.pl"
                  className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
                >
                  Написать по вопросу сотрудничества
                </a>
                <Button href="tel:+48453053969">Позвонить</Button>
              </div>
              <div className="mt-8 grid gap-3 text-neutral-200/90 sm:grid-cols-2">
                <a href="mailto:kontakt@serpakowski.pl" className="rounded-2xl bg-white/5 px-4 py-4 ring-1 ring-white/10 transition hover:bg-white/10">
                  kontakt@serpakowski.pl
                </a>
                <a href="tel:+48453053969" className="rounded-2xl bg-white/5 px-4 py-4 ring-1 ring-white/10 transition hover:bg-white/10">
                  +48 453 053 969
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
