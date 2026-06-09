import type { Metadata } from "next";
import { hiddenChecklistRobots } from "../../../_checklist/metadata";
import { PlaceholderChecklistPage } from "../../../_checklist/PlaceholderChecklistPage";

export const metadata: Metadata = {
  title: "Checklista dla wynajmującego",
  robots: hiddenChecklistRobots,
};

export default function PolishLandlordChecklistPage() {
  return <PlaceholderChecklistPage title="Checklista dla wynajmującego" text="Strona w przygotowaniu." />;
}
