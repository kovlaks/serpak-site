import type { Metadata } from "next";
import { hiddenChecklistRobots } from "../../../_checklist/metadata";
import { PlaceholderChecklistPage } from "../../../_checklist/PlaceholderChecklistPage";

export const metadata: Metadata = {
  title: "Checklist for buyers",
  robots: hiddenChecklistRobots,
};

export default function EnglishBuyerChecklistPage() {
  return <PlaceholderChecklistPage title="Checklist for buyers" text="Page in preparation." />;
}
