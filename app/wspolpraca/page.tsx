import { Button } from "../../components/layout/Button";
import { Container } from "../../components/layout/Container";
import { SiteFooter } from "../../components/layout/SiteFooter";
import { SiteHeader } from "../../components/layout/SiteHeader";

export const metadata = {
  title: "Сотрудничество | SERPAKOWSKI Nieruchomości",
};

const trustItems = [
  "Фокус: Варшава",
  "Языки: RU / UA / PL / EN",
  "Скорость ответа",
  "Современный подход",
  "Работа на результат",
];

const segments = [
  {
    title: "Для агентств недвижимости",
    text: "Совместные сделки, обмен клиентами, сопровождение клиентов в Варшаве, co-broker формат, работа с иностранными клиентами.",
    cta: "Стать партнёром",
  },
  {
    title: "Для частных агентов и брокеров",
    text: "Если вашему клиенту нужен рынок Варшавы — подключаемся быстро, прозрачно и профессионально.",
    cta: "Обсудить условия",
  },
  {
    title: "Для компаний и институций",
    text: "Работаем с компаниями, coliving/PRS проектами, арендными операторами, HR и relocation-партнёрами.",
    cta: "Запросить сотрудничество",
  },
  {
    title: "Для владельцев и инвесторов",
    text: "Поиск арендаторов, стратегия сдачи, локальная экспертиза рынка Варшавы, сопровождение покупки и продажи.",
    cta: "Связаться",
  },
];

const steps = ["Обсуждаем формат", "Запускаем поток клиентов", "Масштабируем результат"];

export default function WspolpracaPage() {
  return (
    <div className="min-h-screen bg-[#0C2D3A] text-neutral-100">
      <SiteHeader />

      <main>
        <section className="relative isolate overflow-hidden pt-24">
          <div className="absolute inset-0 -z-10">
            <img src="/Depositphotos_455695662_XL.jpg" alt="Warsaw skyline" className="h-full w-full object-cover object-[center_38%]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#061923]/50 via-[#0C2D3A]/55 to-[#0C2D3A]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,210,120,0.18),transparent_36%),radial-gradient(circle_at_82%_8%,rgba(255,255,255,0.16),transparent_34%)]" />
          </div>

          <Container>
            <div className="pt-[42vh] sm:pt-[46vh] md:pt-[50vh] pb-24 sm:pb-28 md:pb-32">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200/85">B2B направление · Варшава</p>
              <h1 className="mt-5 font-serif leading-tight tracking-tight text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
                Сотрудничество,<br />
                которое приводит <span className="text-amber-300">клиентов</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-neutral-200/90">
                Создаём партнёрства, которые приносят клиентов, сделки и долгосрочную ценность в Варшаве.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
                >
                  Обсудить партнёрство
                </a>
                <Button href="#contact">Связаться</Button>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-8 sm:py-10">
          <Container>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm px-4 py-4 text-sm text-neutral-100/95 shadow-[0_8px_26px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-amber-200/35"
                >
                  {item}
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <div className="max-w-3xl">
              <h2 className="font-serif text-3xl sm:text-4xl text-white">Форматы сотрудничества</h2>
              <p className="mt-3 text-neutral-200/85">
                Открыты к гибким моделям B2B-взаимодействия под ваш сегмент и бизнес-цели.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {segments.map((card) => (
                <article
                  key={card.title}
                  className="group rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm p-6 md:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-amber-200/30"
                >
                  <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-neutral-200/85 leading-relaxed">{card.text}</p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center text-sm font-semibold text-amber-200 transition group-hover:text-amber-100"
                  >
                    {card.cta} <span className="ml-2 transition group-hover:translate-x-1">→</span>
                  </a>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-4 sm:py-8">
          <Container>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#12465B] via-[#0E384A] to-[#0A2A38] p-8 sm:p-10 lg:p-12 ring-1 ring-amber-200/30 shadow-[0_24px_70px_rgba(0,0,0,0.38)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(255,210,120,0.18),transparent_34%)]" />
              <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Для B2B rental-сегмента</p>
                  <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-white leading-tight">
                    Для арендных комплексов и rental-проектов
                  </h2>
                  <p className="mt-4 text-neutral-100/90 leading-relaxed max-w-2xl">
                    Можем стать внешним каналом привлечения арендаторов, особенно среди иностранных клиентов и арендаторов, которым важен быстрый и понятный сервис.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
                    >
                      Обсудить B2B формат
                    </a>
                  </div>
                </div>

                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {[
                    "Привлечение новых арендаторов",
                    "Предварительная квалификация клиентов",
                    "RU/UA/PL/EN сопровождение",
                    "Быстрый поток обращений",
                    "Performance-based модель сотрудничества",
                  ].map((point) => (
                    <li key={point} className="rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/20 text-neutral-100/95">
                      • {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">Как это работает</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {steps.map((step, index) => (
                <article
                  key={step}
                  className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm p-6 shadow-[0_10px_28px_rgba(0,0,0,0.2)]"
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-amber-200/80">Шаг {index + 1}</div>
                  <h3 className="mt-3 text-xl font-semibold text-white">{step}</h3>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="contact" className="relative isolate py-20">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(46,107,127,0.2),transparent_60%)]" />
          <Container>
            <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm p-8 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <h2 className="font-serif text-3xl sm:text-4xl text-white max-w-3xl leading-tight">
                Долгосрочные партнёрства начинаются с первого сообщения
              </h2>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="mailto:kontakt@serpakowski.pl"
                  className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-[#0C2D3A] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
                >
                  Написать сейчас
                </a>
                <Button href="tel:+48453053969">Позвонить</Button>
              </div>
              <div className="mt-8 grid gap-3 text-neutral-200/90 sm:grid-cols-2">
                <a href="mailto:kontakt@serpakowski.pl" className="rounded-2xl bg-white/5 px-4 py-4 ring-1 ring-white/10 hover:bg-white/10 transition">
                  kontakt@serpakowski.pl
                </a>
                <a href="tel:+48453053969" className="rounded-2xl bg-white/5 px-4 py-4 ring-1 ring-white/10 hover:bg-white/10 transition">
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
