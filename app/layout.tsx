export const metadata = {
  title: "SERPAK Nieruchomości",
  description: "Agenctwo nieruchomości w Warszawie — wynajem premium i komfort.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
