import type { Metadata } from "next";
import { hiddenChecklistRobots } from "../../../_checklist/metadata";
import { PlaceholderChecklistPage } from "../../../_checklist/PlaceholderChecklistPage";

export const metadata: Metadata = {
  title: "Checklista dla kupującego",
  robots: hiddenChecklistRobots,
};

export default function PolishBuyerChecklistPage() {
  return <PlaceholderChecklistPage title="Checklista dla kupującego" text="Strona w przygotowaniu." />;
}
