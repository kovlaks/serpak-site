import type { Metadata } from "next";
import { hiddenChecklistRobots } from "../../_checklist/metadata";
import { PlaceholderChecklistPage } from "../../_checklist/PlaceholderChecklistPage";

export const metadata: Metadata = {
  title: "Чек-листы по недвижимости",
  robots: hiddenChecklistRobots,
};

export default function RussianChecklistPage() {
  return <PlaceholderChecklistPage title="Чек-листы по недвижимости" text="Страница в подготовке." />;
}
