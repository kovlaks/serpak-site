import type { Metadata } from "next";
import { hiddenChecklistRobots } from "../../../_checklist/metadata";
import { PlaceholderChecklistPage } from "../../../_checklist/PlaceholderChecklistPage";

export const metadata: Metadata = {
  title: "Чек-лист для арендодателя",
  robots: hiddenChecklistRobots,
};

export default function RussianLandlordChecklistPage() {
  return <PlaceholderChecklistPage title="Чек-лист для арендодателя" text="Страница в подготовке." />;
}
