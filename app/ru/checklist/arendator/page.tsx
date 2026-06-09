import type { Metadata } from "next";
import { hiddenChecklistRobots } from "../../../_checklist/metadata";
import { PlaceholderChecklistPage } from "../../../_checklist/PlaceholderChecklistPage";

export const metadata: Metadata = {
  title: "Чек-лист для арендатора",
  robots: hiddenChecklistRobots,
};

export default function RussianTenantChecklistPage() {
  return <PlaceholderChecklistPage title="Чек-лист для арендатора" text="Страница в подготовке." />;
}
