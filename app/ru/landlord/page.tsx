import { createSeoMetadata, seoAlternates } from "../../seo";
export { default } from "../../landlord/page";

export const metadata = createSeoMetadata({
  title: "Сдать квартиру в Варшаве | SERPAKOWSKI Nieruchomości",
  description: "Помощь собственникам квартир в Варшаве: подготовка объявления, поиск и проверка арендатора, договор аренды, протокол передачи и сопровождение сдачи квартиры.",
  canonicalPath: "/ru/landlord",
  languages: seoAlternates.landlord,
  locale: "ru_RU",
});
