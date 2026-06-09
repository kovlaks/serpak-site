import type { Metadata } from "next";
import { hiddenChecklistRobots } from "../../../_checklist/metadata";
import { PlaceholderChecklistPage } from "../../../_checklist/PlaceholderChecklistPage";

export const metadata: Metadata = {
  title: "Checklista dla najemcy",
  robots: hiddenChecklistRobots,
};

export default function PolishTenantChecklistPage() {
  return <PlaceholderChecklistPage title="Checklista dla najemcy" text="Strona w przygotowaniu." />;
}
