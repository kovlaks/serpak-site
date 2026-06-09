import type { Metadata } from "next";
import { hiddenChecklistRobots } from "../../_checklist/metadata";
import { PlaceholderChecklistPage } from "../../_checklist/PlaceholderChecklistPage";

export const metadata: Metadata = {
  title: "Real estate checklists",
  robots: hiddenChecklistRobots,
};

export default function EnglishChecklistPage() {
  return <PlaceholderChecklistPage title="Real estate checklists" text="Page in preparation." />;
}
