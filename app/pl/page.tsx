import { createSeoMetadata, seoAlternates } from "../seo";
import HomePageClient from "./HomePageClient";

export const metadata = createSeoMetadata({
  title: "SERPAKOWSKI Nieruchomości | Agencja nieruchomości w Warszawie",
  description: "Kompleksowe pośrednictwo w wynajmie mieszkań w Warszawie. Najem Solo i Najem Split, 12 rat bez odsetek, 0 zł prowizji dla najemcy i dodatkowe usługi dla właścicieli.",
  canonicalPath: "/pl",
  languages: seoAlternates.home,
  locale: "pl_PL",
});

export default function PlPage() {
  return <HomePageClient />;
}
