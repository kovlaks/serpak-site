import { createSeoMetadata, seoAlternates } from "../../seo";
export { default } from "../../privacy/page";

export const metadata = createSeoMetadata({
  title: "Политика конфиденциальности | SERPAKOWSKI Nieruchomości",
  description: "Политика конфиденциальности SERPAKOWSKI Nieruchomości: информация об администраторе данных, обработке персональных данных, контактных формах и правах пользователя.",
  canonicalPath: "/ru/privacy",
  languages: seoAlternates.privacy,
  locale: "ru_RU",
});
