import type { Metadata } from "next";
import { hiddenChecklistRobots } from "../../../_checklist/metadata";
import { PlaceholderChecklistPage } from "../../../_checklist/PlaceholderChecklistPage";

export const metadata: Metadata = {
  title: "Checklist for tenants",
  robots: hiddenChecklistRobots,
};

export default function EnglishTenantChecklistPage() {
  return <PlaceholderChecklistPage title="Checklist for tenants" text="Page in preparation." />;
}
