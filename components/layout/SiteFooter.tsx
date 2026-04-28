"use client";
import { usePathname } from 'next/navigation';
import { Container } from './Container';
import { Locale, defaultLocale, locales, nav, pathFor } from '../../lib/i18n';

export function SiteFooter(){
  const pathname = usePathname() || '/ru';
  const locale = ((pathname.split('/')[1] || defaultLocale) as Locale);
  const l = (locales as readonly string[]).includes(locale) ? locale : defaultLocale;
  const t = nav[l];
  return <footer className='py-12 bg-gradient-to-b from-transparent to-[#0A2530]'><Container><div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm text-neutral-200/80'><div><div className='font-serif text-white text-lg'>SERPAKOWSKI Nieruchomości</div></div><div><div className='text-white'>{t.footerNav}</div><ul className='mt-2 space-y-2'><li><a href={pathFor(l,'home')} className='hover:text-white'>Home</a></li><li><a href={pathFor(l,'rent')} className='hover:text-white'>{t.services}</a></li><li><a href={pathFor(l,'partnership')} className='hover:text-white'>{t.partnership}</a></li><li><a href={pathFor(l,'contact')} className='hover:text-white'>{t.contact}</a></li></ul></div></div></Container></footer>
}
