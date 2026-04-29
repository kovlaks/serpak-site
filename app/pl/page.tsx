import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "SERPAKOWSKI Nieruchomości | Nieruchomości w Warszawie",
  description: "Wsparcie przy najmie, zakupie, sprzedaży i wynajmie nieruchomości w Warszawie.",
};

export default function PlPage() {
  return <HomePageClient />;
}
