import { createSeoMetadata, seoAlternates } from "../../seo";
export { default } from "../../rent/page";

export const metadata = createSeoMetadata({
  title: "Аренда квартиры в Варшаве | SERPAKOWSKI Nieruchomości",
  description: "Помогаем найти и безопасно снять квартиру в Варшаве: анализ запроса, подбор вариантов, проверка собственника, договор аренды и передача квартиры.",
  canonicalPath: "/ru/rent",
  languages: seoAlternates.rent,
  locale: "ru_RU",
});
