export const locales = ['ru','pl','en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ru';

export const slugs = {
  home: { ru: '', pl: '', en: '' },
  rent: { ru: 'rent', pl: 'najem', en: 'rent' },
  landlord: { ru: 'landlord', pl: 'wlasciciele', en: 'landlord' },
  partnership: { ru: 'partnership', pl: 'wspolpraca', en: 'partnership' },
  contact: { ru: 'contact', pl: 'kontakt', en: 'contact' },
  buy: { ru: 'buy', pl: 'kupno', en: 'buy' },
  sell: { ru: 'sell', pl: 'sprzedaz', en: 'sell' },
} as const;
export type RouteKey = keyof typeof slugs;
export function pathFor(locale: Locale, key: RouteKey) { const s = slugs[key][locale]; return s ? `/${locale}/${s}` : `/${locale}`; }
export function detectRoute(pathname: string): RouteKey { const [,loc='',slug='']=pathname.split('/'); const locale=(locales as readonly string[]).includes(loc)?(loc as Locale):defaultLocale; if(!slug) return 'home'; for(const key of Object.keys(slugs) as RouteKey[]){ if(slugs[key][locale]===slug) return key;} return 'home'; }
export function switchLocale(pathname: string,target: Locale){ const [clean,hash='']=pathname.split('#'); return `${pathFor(target,detectRoute(clean))}${hash?`#${hash}`:''}`; }
export const nav = { ru:{services:'Услуги',partnership:'Сотрудничество',contact:'Контакты',submit:'Оставить заявку',footerNav:'Навигация'}, pl:{services:'Usługi',partnership:'Współpraca',contact:'Kontakt',submit:'Zostaw zgłoszenie',footerNav:'Nawigacja'}, en:{services:'Services',partnership:'Partnership',contact:'Contact',submit:'Submit request',footerNav:'Navigation'} };
