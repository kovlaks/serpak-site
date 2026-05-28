import type { Metadata } from "next";
import RussianLandlordPage from "../ru/landlord/page";

export const metadata: Metadata = {
  title: "Test RU | SERPAKOWSKI Nieruchomości",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
      noimageindex: true,
    },
  },
};

export default RussianLandlordPage;
