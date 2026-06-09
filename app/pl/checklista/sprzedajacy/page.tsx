import type { Metadata } from "next";
import { hiddenChecklistRobots } from "../../../_checklist/metadata";
import { PlaceholderChecklistPage } from "../../../_checklist/PlaceholderChecklistPage";

export const metadata: Metadata = {
  title: "Checklista dla sprzedającego",
  robots: hiddenChecklistRobots,
};

export default function PolishSellerChecklistPage() {
  return <PlaceholderChecklistPage title="Checklista dla sprzedającego" text="Strona w przygotowaniu." />;
}
