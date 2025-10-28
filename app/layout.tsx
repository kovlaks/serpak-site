import './globals.css';

export const metadata = {
  title: 'SERPAK Nieruchomości — Warszawa',
  description: 'Agencja nieruchomości w Warszawie. Wynajem premium i komfort.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
}
