import type { Metadata } from "next";
import { hiddenChecklistRobots } from "../../_checklist/metadata";
import { PlaceholderChecklistPage } from "../../_checklist/PlaceholderChecklistPage";

export const metadata: Metadata = {
  title: "Checklisty nieruchomości",
  robots: hiddenChecklistRobots,
};

export default function PolishChecklistPage() {
  return <PlaceholderChecklistPage title="Checklisty nieruchomości" text="Strona w przygotowaniu." />;
}
