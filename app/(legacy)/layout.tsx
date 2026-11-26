import type { ReactNode } from "react";
import { bodyClassName, SiteLayoutContent, siteMetadata } from "../_site-layout";

export const metadata = siteMetadata;

export default function LegacyRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className={bodyClassName}>
        <SiteLayoutContent>{children}</SiteLayoutContent>
      </body>
    </html>
  );
}
