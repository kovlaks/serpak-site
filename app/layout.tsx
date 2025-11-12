import './globals.css';

export const metadata = {
  title: "SERPAKOWSKI Nieruchomości — Варшава",
  description: "Агентство недвижимости в Варшаве. Аренда и сопровождение сделок.",
  openGraph: { title: "SERPAKOWSKI Nieruchomości — Варшава", description: "Агентство недвижимости в Варшаве. Аренда и сопровождение сделок.", locale: "ru_RU" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="bg-[#0C2D3A] text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
}
