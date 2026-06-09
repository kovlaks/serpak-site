import type { Metadata } from "next";
import { hiddenChecklistRobots } from "../../../_checklist/metadata";
import { PlaceholderChecklistPage } from "../../../_checklist/PlaceholderChecklistPage";

export const metadata: Metadata = {
  title: "Чек-лист для покупателя",
  robots: hiddenChecklistRobots,
};

export default function RussianBuyerChecklistPage() {
  return <PlaceholderChecklistPage title="Чек-лист для покупателя" text="Страница в подготовке." />;
}
