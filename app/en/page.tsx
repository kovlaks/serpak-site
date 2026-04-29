import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "SERPAKOWSKI Nieruchomości | Real Estate in Warsaw",
  description: "Support with renting, buying, selling and letting property in Warsaw.",
};

export default function EnPage() {
  return <HomePageClient />;
}
