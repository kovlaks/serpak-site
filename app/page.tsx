"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChatButton } from "../components/common/ChatButton";
import { Button } from "../components/layout/Button";
import { Container } from "../components/layout/Container";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";

const highlightWords = [
  "лучшее",
  "безопасное",
  "комфортное",
  "подходящее",
  "идеальное",
  "уникальное",
];

function PropertyCard({
  title,
  location,
  price,
  imageUrl,
}: {
  title: string;
  location: string;
  price: string;
  imageUrl: string;
}) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="p-5">
        <div className="text-neutral-200 text-lg font-medium">{title}</div>
        <div className="text-neutral-300/80 text-sm mt-1">{location}</div>
        <div className="mt-3 text-amber-300 font-semibold">{price}</div>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-semibold text-white">{value}</div>
      <div className="mt-1 text-sm text-neutral-200/70">{label}</div>
    </div>
  );
}

export default function Page() {
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const fadeTimeoutRef = useRef<number | null>(null);

  // 👉 тут укажи имя файла из папки /public
  // если позже переименуешь картинку в hero.webp — просто поменяй строку ниже
  const heroImageUrl = "/Depositphotos_455695662_XL.jpg";

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setIsFading(true);
      fadeTimeoutRef.current = window.setTimeout(() => {
        setHighlightIndex((prev) => (prev + 1) % highlightWords.length);
        setIsFading(false);
      }, 350);
    }, 2500);

    return () => {
      window.clearInterval(intervalId);
      if (fadeTimeoutRef.current) {
        window.clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0C2D3A] text-neutral-100">
      <SiteHeader />

      {/* HERO — большой верхний блок с картинкой */}
      <section className="relative isolate pt-24">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImageUrl}
            alt="Warsaw skyline"
            className="h-full w-full object-cover object-[center_50%]"  // ← «поднимаем» кадр (можно 30%, 25% если надо ещё ближе)
          />
          {/* Прозрачный сверху → синий снизу */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0C2D3A]/25 to-[#0C2D3A]" />
        </div>

        <Container>
          {/* просто опускаем блок с текстом ниже, ничего не удаляем */}
          <div className="pt-[50vh] sm:pt-[54vh] md:pt-[58vh] pb-24 sm:pb-28 md:pb-32 lg:-ml-8 xl:-ml-12">
            <h1 className="font-serif text-white leading-tight tracking-tight
               text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
  <span className="block">Искусство</span>
  <span className="block">
    находить{" "}
    <strong
      className={`text-amber-300 inline-block transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      {highlightWords[highlightIndex]}
    </strong>
  </span>
</h1>

            <p className="mt-6 text-lg text-neutral-200/90 max-w-2xl">
              Заполняйте анкету и находите жилье в кратчайшие сроки
            </p>



            <div className="mt-10">
              <a href="#contact" className="text-sm text-neutral-200/90 hover:text-white">Связаться с нами →</a>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0C2D3A] hidden">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat value="150+" label="активных объявлений" />
            <Stat value="24ч" label="срок подбора под клиента" />
            <Stat value="9.6/10" label="оценка сервиса" />
            <Stat value="3 языка" label="PL / RU / EN" />
          </div>
        </Container>
      </section>

      {/* Featured Properties */}
      <section id="communities" className="py-20 hidden">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-serif text-3xl text-white">
  Оставьте ваши контакты для консультации
</h2>
<p className="mt-2 text-neutral-200/90 max-w-md">
  Мы постараемся с вами связаться как можно скорее.
</p>

            </div>
            <a href="#" className="text-sm text-neutral-200/90 hover:text-white">Смотреть все</a>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <PropertyCard title="Скансен в Мокотове" location="Мокотов, Варшава" price="6 500 PLN / мес" imageUrl="https://images.unsplash.com/photo-1505691723518-36a5ac3b2b8f?q=80&w=2069&auto=format&fit=crop" />
            <PropertyCard title="Видовая на Вислу" location="Повисяле, Варшава" price="8 900 PLN / мес" imageUrl="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2069&auto=format&fit=crop" />
            <PropertyCard title="Лофт у метро Рондо ONZ" location="Śródmieście, Варшава" price="7 400 PLN / мес" imageUrl="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2069&auto=format&fit=crop" />
          </div>
        </Container>
      </section>

      {/* About */}
      <section id="about" className="py-20 hidden">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl text-white">Качество. Честность. Детали.</h2>
              <p className="text-neutral-200/90">Мы работаем на уровне международных стандартов сервиса: тщательная проверка объявлений, прозрачные условия, сопровождаем каждый шаг сделки.</p>
              <ul className="space-y-3 text-neutral-200/90">
                <li>• Отдельные подходы для премиального и комфорт-класса</li>
                <li>• Фото и видео 4K, планы квартир, 3D-тур</li>
                <li>• Юридическое сопровождение и безопасные депозиты</li>
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden ring-1 ring-white/10">
              <img src="https://images.unsplash.com/photo-1501183007986-d0d080b147f9?q=80&w=2069&auto=format&fit=crop" alt="Warsaw skyline" className="w-full h-full object-cover" />
            </div>
          </div>
        </Container>
      </section>

      {/* Услуги */}
<section id="services" className="py-20">
  <Container>
    <h2 className="font-serif text-3xl text-white mb-8">Услуги</h2>

    <div className="space-y-6">
      {/* Хочу снять */}
      <article className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm p-6 md:p-8 transition-shadow shadow-[0_6px_18px_rgba(0,0,0,0.18)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.28)]">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="max-w-3xl">
            <h3 className="text-white font-semibold text-xl md:text-2xl">Хочу снять</h3>
            <p className="mt-3 text-neutral-200/90">
              В разделе подробно показано, как мы сопровождаем аренду: от формулировки запроса и подбора
        вариантов до проверок, договора, <em>najem okazjonalny</em> и приёмки квартиры по протоколу.
        Внутри — этапы работы, чек-лист арендатора, как арендовать безопасно, страхование и ответы
        на частые вопросы.
            </p>
          </div>
          <div className="shrink-0">
            <Button href="/rent">Подробнее</Button>
          </div>
        </div>
      </article>

      {/* Хочу сдать */}
      <article className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm p-6 md:p-8 transition-shadow shadow-[0_6px_18px_rgba(0,0,0,0.18)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.28)]">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="max-w-3xl">
            <h3 className="text-white font-semibold text-xl md:text-2xl">Хочу сдать</h3>
            <p className="mt-3 text-neutral-200/90">
              В разделе — полный путь продажи жилья: цена, подготовка, маркетинг, показы, переговоры
        и юридическое сопровождение сделки. Внутри вас ждут этапы, чек-лист продавца,
        рекомендации по безопасной продаже и работе с задатком, варианты страховой защиты и
        ответы на типовые вопросы.
            </p>
          </div>
          <div className="shrink-0">
            <Button href="/landlord">Подробнее</Button>
          </div>
        </div>
      </article>

      {/* Хочу продать */}
      <article className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm p-6 md:p-8 transition-shadow shadow-[0_6px_18px_rgba(0,0,0,0.18)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.28)]">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="max-w-3xl">
            <h3 className="text-white font-semibold text-xl md:text-2xl">Хочу продать</h3>
            <p className="mt-3 text-neutral-200/90">
              Здесь мы разбираем, как купить квартиру или дом с понятными условиями и минимальными
        рисками: критерии, анализ рынка, проверки объекта и договора, формат оплаты или ипотеки.
        Вы найдёте этапы, чек-лист покупателя, блок о безопасной покупке, страхование и ответы
        на ключевые вопросы о цене и рисках.
            </p>
          </div>
          <div className="shrink-0">
            <Button href="/sell">Подробнее</Button>
          </div>
        </div>
      </article>

      {/* Хочу купить */}
      <article className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm p-6 md:p-8 transition-shadow shadow-[0_6px_18px_rgba(0,0,0,0.18)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.28)]">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="max-w-3xl">
            <h3 className="text-white font-semibold text-xl md:text-2xl">Хочу купить</h3>
            <p className="mt-3 text-neutral-200/90">
              В этом разделе показано, как мы помогаем купить квартиру или дом с понятными
              условиями и минимальными рисками: от формулирования ваших критериев и анализа
              рынка до проверок объекта, договора, формы финансирования и финального подписания.
              Вы найдёте пошаговые этапы, чек-лист покупателя, блок о безопасной покупке
              (в т.ч. при ипотеке), варианты страхования и ответы на ключевые вопросы о цене,
              скрытых проблемах и защите ваших интересов.
            </p>
          </div>
          <div className="shrink-0">
            <Button href="/buy">Подробнее</Button>
          </div>
        </div>
      </article>
    </div>
  </Container>
</section>


      {/* Messengers CTA */}
      <section className="relative isolate py-16">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0C2D3A] via-[#0C2D3A]/80 to-[#0C2D3A]" />
        <div className="absolute inset-y-0 right-0 -z-10 w-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_65%)]" />
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-amber-200/90 ring-1 ring-white/10">
                На связи 24/7
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-white">Напишите нам в удобном мессенджере</h2>
              <p className="text-neutral-200/85 text-base leading-relaxed">
                Напишите нам в удобном для вас мессенджере или позвоните по телефону. Наша служба ответит на ваш запрос максимально быстро.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-6 sm:p-8 ring-1 ring-white/10 shadow-[0_16px_60px_rgba(0,0,0,0.25)]">
              <div className="grid gap-4 sm:grid-cols-2">
                <ChatButton
                  label="Telegram"
                  href="https://t.me/"
                  gradient="from-[#229ED9] via-[#1c94cb] to-[#178abf]"
                  icon={(className) => (
                    <svg className={className} viewBox="0 0 24 24" aria-hidden>
                      <path
                        fill="currentColor"
                        d="M21.944 3.042c-.278-.24-.667-.273-1.02-.162-.35.11-15.7 5.46-17.62 6.1-.2.065-.98.32-1.122.998-.133.62.405.97.9 1.188.73.324 11.74 4.824 11.74 4.824s2.74 5.56 2.94 5.97c.2.41.57.89 1.18.89.61 0 .99-.59.99-.59s3.81-15.75 4.03-17.56c.22-1.81.35-1.89-.03-2.35-.38-.46-.97-.31-.99-.31Z"
                      />
                    </svg>
                  )}
                />
                <ChatButton
                  label="Viber"
                  href="viber://chat?number=%2B48453053969"
                  gradient="from-[#7360F2] via-[#6a55ef] to-[#5f47ec]"
                  icon={(className) => (
                    <svg className={className} viewBox="0 0 24 24" aria-hidden>
                      <path
                        fill="currentColor"
                        d="M17.472 0H6.527C2.923 0 0 2.923 0 6.528v10.945C0 21.077 2.924 24 6.528 24h10.944C21.077 24 24 21.077 24 17.472V6.527C24 2.923 21.076 0 17.472 0m-.515 18.725c-.199.344-.583.533-.967.533-6.23-.14-10.623-4.499-10.76-10.76 0-.378.187-.752.53-.948l1.9-.86a.978.978 0 0 1 1.32.438l.9 1.73c.199.348.103.776-.223 1.02l-.939.707a8.111 8.111 0 0 0 3.978 3.972l.704-.939a1 1 0 0 1 1.02-.225l1.73.9c.39.214.55.708.333 1.12Z"
                      />
                    </svg>
                  )}
                />
                <ChatButton
                  label="WhatsApp"
                  href="https://wa.me/48453053969"
                  gradient="from-[#25D366] via-[#1fb95a] to-[#199f4f]"
                  icon={(className) => (
                    <svg className={className} viewBox="0 0 24 24" aria-hidden>
                      <path
                        fill="currentColor"
                        d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.62-5.945C.122 5.3 5.305.113 11.63.002c3.17-.058 6.155 1.177 8.413 3.4a11.92 11.92 0 0 1 3.485 8.421c-.059 6.325-5.246 11.51-11.57 11.51h-.006a11.86 11.86 0 0 1-5.923-1.616L.057 24Zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.593h.005c5.448 0 9.902-4.447 9.959-9.892.029-2.657-1.025-5.16-2.997-7.05a10.47 10.47 0 0 0-7.065-2.928c-5.47.001-9.94 4.428-9.99 9.885-.013 1.867.487 3.331 1.648 5.205l-.999 3.648 3.057-.461Zm9.37-5.56c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.966-.273-.099-.472-.149-.67.149-.198.297-.768.966-.941 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.477-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.134.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.67-.51l-.57-.01c-.198 0-.521.074-.793.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.695.248-1.29.173-1.413Z"
                      />
                    </svg>
                  )}
                />
                <a
                  href="tel:+48453053969"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white transition hover:border-amber-300/50 hover:bg-white/10 hover:text-amber-200"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/90 text-[#0C2D3A] ring-1 ring-white/20">📞</span>
                  <div className="text-left">
                    <div className="text-xs uppercase tracking-[0.1em] text-neutral-100/70">Позвонить</div>
                    <div className="text-base font-semibold">+48 453 053 969</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>


      {/* Contact */}
      <section id="contact" className="relative isolate py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(46,107,127,0.15),transparent_60%)]" />
        <Container>
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
             <h2 className="font-serif text-3xl text-white">
  Оставьте ваши контакты
</h2>
<p className="mt-2 text-neutral-200/90 max-w-md">
  Мы свяжемся с вами как можно скорее.
</p>

              <p className="mt-3 text-xs text-neutral-200/70">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.</p>
            </div>
            <div className="rounded-2xl p-6 ring-1 ring-white/10 bg-white/5">
              <form className="grid gap-4">
                <input placeholder="Имя" className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-300/70 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300" />
               <input
                  name="phone"
                  placeholder="Телефон"
                  required
                  className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-300/70 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
                <textarea
  name="message"
  placeholder="Кратко опишите задачу: аренда/сдача/покупка/продажа, район, бюджет, сроки"
  rows={4}
  className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-300/70 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300"
/>

                <Button>Отправить</Button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      <SiteFooter />
    </div>
  );
}
