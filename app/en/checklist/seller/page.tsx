import type { Metadata } from "next";
import { hiddenChecklistRobots } from "../../../_checklist/metadata";
import { PlaceholderChecklistPage } from "../../../_checklist/PlaceholderChecklistPage";

export const metadata: Metadata = {
  title: "Checklist for sellers",
  robots: hiddenChecklistRobots,
};

export default function EnglishSellerChecklistPage() {
  return <PlaceholderChecklistPage title="Checklist for sellers" text="Page in preparation." />;
}
