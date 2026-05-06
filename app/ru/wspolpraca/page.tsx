import { createSeoMetadata, seoAlternates } from "../../seo";
export { default } from "../../wspolpraca/page";

export const metadata = createSeoMetadata({
  title: "Сотрудничество в недвижимости | SERPAKOWSKI Nieruchomości",
  description: "Сотрудничество для агентств, частных агентов, инвесторов и партнёров рынка недвижимости в Варшаве. Выстраиваем партнёрства, которые приводят клиентов и сделки.",
  canonicalPath: "/ru/wspolpraca",
  languages: seoAlternates.partnership,
  locale: "ru_RU",
});
