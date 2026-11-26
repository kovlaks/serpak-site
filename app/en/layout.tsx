import type { ReactNode } from "react";
import { bodyClassName, SiteLayoutContent, siteMetadata } from "../_site-layout";

export const metadata = siteMetadata;

export default function EnglishRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={bodyClassName}>
        <SiteLayoutContent>{children}</SiteLayoutContent>
      </body>
    </html>
  );
}
