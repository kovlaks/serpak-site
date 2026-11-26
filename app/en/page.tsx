import { createSeoMetadata, seoAlternates } from "../seo";
import HomePageClient from "./HomePageClient";

export const metadata = createSeoMetadata({
  title: "SERPAKOWSKI Nieruchomości | Real estate agency in Warsaw",
  description: "Comprehensive apartment letting services in Warsaw. Najem Solo and Najem Split, 12 interest-free instalments, no tenant commission under our landlord-focused model, and additional services for property owners.",
  canonicalPath: "/en",
  languages: seoAlternates.home,
  locale: "en_US",
});

export default function EnPage() {
  return <HomePageClient />;
}
