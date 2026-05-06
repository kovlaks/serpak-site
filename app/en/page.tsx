import { createSeoMetadata, seoAlternates } from "../seo";
import HomePageClient from "./HomePageClient";

export const metadata = createSeoMetadata({
  title: "SERPAKOWSKI Nieruchomości | Real estate agency in Warsaw",
  description: "SERPAKOWSKI Nieruchomości supports rental, purchase, sale and property services in Warsaw. Safe process, clear communication and step-by-step real estate assistance.",
  canonicalPath: "/en",
  languages: seoAlternates.home,
  locale: "en_US",
});

export default function EnPage() {
  return <HomePageClient />;
}
