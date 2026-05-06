import { createSeoMetadata, seoAlternates } from "../seo";
export { default } from "../page";

export const metadata = createSeoMetadata({
  title: "SERPAKOWSKI Nieruchomości | Агентство недвижимости в Варшаве",
  description: "SERPAKOWSKI Nieruchomości помогает с арендой, покупкой, продажей и сопровождением недвижимости в Варшаве. Безопасный процесс, понятная коммуникация и поддержка на каждом этапе.",
  canonicalPath: "/ru",
  languages: seoAlternates.home,
  locale: "ru_RU",
});
