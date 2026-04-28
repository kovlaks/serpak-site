import { notFound } from 'next/navigation';
import { Container } from '../../../components/layout/Container';
import { SiteFooter } from '../../../components/layout/SiteFooter';
import { SiteHeader } from '../../../components/layout/SiteHeader';
import { Locale, locales, slugs, pathFor } from '../../../lib/i18n';

const data = {
  ru: { h:'Искусство находить лучшее жильё в Варшаве', cta:'Связаться с нами', services:'Услуги', rent:'Хочу снять', landlord:'Хочу сдать', part:'Сотрудничество', contact:'Контакты' },
  pl: { h:'Sztuka znajdowania najlepszego mieszkania w Warszawie', cta:'Skontaktuj się z nami', services:'Usługi', rent:'Znaleźć mieszkanie', landlord:'Wynająć mieszkanie', part:'Współpraca', contact:'Kontakt' },
  en: { h:'The art of finding the right home in Warsaw', cta:'Contact us', services:'Services', rent:'Find a rental', landlord:'Rent out a property', part:'Partnership', contact:'Contact' },
};

function keyFromSlug(locale: Locale, slug?: string){ if(!slug) return 'home'; for(const k of Object.keys(slugs) as (keyof typeof slugs)[]){ if(slugs[k][locale]===slug) return k; } return null; }

export default function Page({params}:{params:{locale:Locale,slug?:string[]}}){
  const { locale } = params; if(!(locales as readonly string[]).includes(locale)) notFound();
  const key = keyFromSlug(locale, params.slug?.[0]); if(!key) notFound();
  const t = data[locale];
  if(key==='home') return <div className='min-h-screen bg-[#0C2D3A] text-neutral-100'><SiteHeader/><main className='pt-24'><section className='relative isolate'><div className='absolute inset-0 -z-10'><img src='/Depositphotos_455695662_XL.jpg' alt='Warsaw skyline' className='h-full w-full object-cover object-[center_50%]'/><div className='absolute inset-0 bg-gradient-to-b from-transparent via-[#0C2D3A]/25 to-[#0C2D3A]'/></div><Container><div className='pt-[50vh] pb-24'><h1 className='font-serif text-white leading-tight tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl'>{t.h}</h1><div className='mt-10'><a href={pathFor(locale,'contact')} className='text-sm text-neutral-200/90 hover:text-white'>{t.cta} →</a></div></div></Container></section><section id='services' className='py-20'><Container><h2 className='font-serif text-3xl text-white mb-8'>{t.services}</h2><div className='space-y-6'>{[['rent',t.rent],['landlord',t.landlord],['partnership',t.part],['contact',t.contact]].map(([k,v])=><article key={k} className='rounded-2xl bg-white/5 ring-1 ring-white/10 p-6'><div className='flex items-center justify-between gap-4'><h3 className='text-xl text-white'>{v}</h3><a href={pathFor(locale,k as any)} className='text-amber-300'>→</a></div></article>)}</div></Container></section></main><SiteFooter/></div>;
  return <div className='min-h-screen bg-[#0C2D3A] text-neutral-100'><SiteHeader/><main className='pt-28 pb-20'><Container><h1 className='font-serif text-4xl text-white'>{key==='rent'?t.rent:key==='landlord'?t.landlord:key==='partnership'?t.part:t.contact}</h1><p className='mt-4 text-neutral-200/90'>{locale==='ru'?'Профессиональное сопровождение недвижимости в Варшаве.':'Profesjonalne wsparcie nieruchomości w Warszawie.'}{locale==='en'?'Professional real estate support in Warsaw.':''}</p><div id='contact' className='mt-8'><a href='mailto:kovlaks@gmail.com' className='text-amber-300'>kovlaks@gmail.com</a></div></Container></main><SiteFooter/></div>
}

export function generateStaticParams(){ return locales.map((locale)=>({locale})); }
