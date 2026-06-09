import type { Metadata } from "next";
import { hiddenChecklistRobots } from "../../../_checklist/metadata";
import { PlaceholderChecklistPage } from "../../../_checklist/PlaceholderChecklistPage";

export const metadata: Metadata = {
  title: "Чек-лист для продавца",
  robots: hiddenChecklistRobots,
};

export default function RussianSellerChecklistPage() {
  return <PlaceholderChecklistPage title="Чек-лист для продавца" text="Страница в подготовке." />;
}
