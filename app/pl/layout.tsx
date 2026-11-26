import type { ReactNode } from "react";
import { bodyClassName, SiteLayoutContent, siteMetadata } from "../_site-layout";

export const metadata = siteMetadata;

export default function PolishRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body className={bodyClassName}>
        <SiteLayoutContent>{children}</SiteLayoutContent>
      </body>
    </html>
  );
}
