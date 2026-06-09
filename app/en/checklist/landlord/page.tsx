import type { Metadata } from "next";
import { hiddenChecklistRobots } from "../../../_checklist/metadata";
import { PlaceholderChecklistPage } from "../../../_checklist/PlaceholderChecklistPage";

export const metadata: Metadata = {
  title: "Checklist for landlords",
  robots: hiddenChecklistRobots,
};

export default function EnglishLandlordChecklistPage() {
  return <PlaceholderChecklistPage title="Checklist for landlords" text="Page in preparation." />;
}
