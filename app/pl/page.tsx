import { createSeoMetadata, seoAlternates } from "../seo";
import HomePageClient from "./HomePageClient";

export const metadata = createSeoMetadata({
  title: "SERPAKOWSKI Nieruchomości | Agencja nieruchomości w Warszawie",
  description: "SERPAKOWSKI Nieruchomości pomaga w wynajmie, zakupie, sprzedaży i obsłudze nieruchomości w Warszawie. Bezpieczne procesy, jasna komunikacja i wsparcie krok po kroku.",
  canonicalPath: "/pl",
  languages: seoAlternates.home,
  locale: "pl_PL",
});

export default function PlPage() {
  return <HomePageClient />;
}
