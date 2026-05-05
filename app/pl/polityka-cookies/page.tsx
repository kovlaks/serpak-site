import { SiteFooterPl } from "../../../components/layout/SiteFooterPl";
import { SiteHeaderPl } from "../../../components/layout/SiteHeaderPl";

export const metadata = {
  title: "Polityka cookies | SERPAKOWSKI Nieruchomości",
  description:
    "Polityka cookies SERPAKOWSKI Nieruchomości: informacje o plikach cookies, kategoriach cookies, zgodach oraz ustawieniach prywatności.",
};

export default function PolitykaCookiesPage() {
  return (
    <div className="min-h-screen bg-[#0C2D3A] text-neutral-100">
      <SiteHeaderPl />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <section className="rounded-3xl bg-white/5 p-7 sm:p-10 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <h1 className="font-serif text-3xl sm:text-4xl text-white">Polityka cookies</h1>
          <p className="mt-3 text-sm text-neutral-300">Ostatnia aktualizacja: 05.05.2026</p>
          <p className="mt-6 text-neutral-200/90 leading-relaxed">
            Niniejsza polityka cookies wyjaśnia, w jaki sposób strona SERPAKOWSKI Nieruchomości może korzystać z plików cookies oraz podobnych technologii.
          </p>
          <div className="mt-10 space-y-9 text-neutral-200/90">
            <section><h2 className="font-serif text-2xl text-white mb-3">1. Czym są cookies</h2><p>Pliki cookies to niewielkie pliki tekstowe lub podobne technologie zapisywane na urządzeniu użytkownika podczas korzystania ze strony internetowej. Cookies mogą być wykorzystywane do zapewnienia działania strony, zapamiętywania preferencji, prowadzenia statystyk oraz działań marketingowych.</p></section>
            <section><h2 className="font-serif text-2xl text-white mb-3">2. Kto korzysta z cookies</h2><p>Administratorem strony jest Serhii Kovlak, prowadzący działalność pod marką SERPAKOWSKI Nieruchomości, z adresem do korespondencji: Złota 75A/7, 00-819 Warszawa, Polska, NIP: 1133184502, REGON: 543202915.</p><p className="mt-3">Kontakt:</p><ul className="mt-2 list-disc pl-6 space-y-1"><li>e-mail: kontakt@serpakowski.pl</li><li>telefon: +48 453 053 969</li></ul></section>
            <section><h2 className="font-serif text-2xl text-white mb-3">3. Kategorie cookies</h2><p>Strona może korzystać z następujących kategorii cookies:</p><h3 className="font-serif text-xl text-white mt-6 mb-2">Cookies niezbędne</h3><p>Są potrzebne do prawidłowego działania strony, bezpieczeństwa, obsługi podstawowych funkcji oraz wyświetlania treści. Te cookies mogą działać bez osobnej zgody użytkownika.</p><h3 className="font-serif text-xl text-white mt-6 mb-2">Cookies preferencyjne</h3><p>Mogą służyć do zapamiętania ustawień użytkownika, takich jak wybrany język lub preferencje wyświetlania strony.</p><h3 className="font-serif text-xl text-white mt-6 mb-2">Cookies analityczne</h3><p>Mogą służyć do analizy sposobu korzystania ze strony, liczby odwiedzin, źródeł ruchu i zachowania użytkowników. Takie cookies będą stosowane wyłącznie po uzyskaniu wymaganej zgody użytkownika.</p><h3 className="font-serif text-xl text-white mt-6 mb-2">Cookies marketingowe</h3><p>Mogą służyć do prowadzenia działań reklamowych, remarketingu, mierzenia skuteczności reklam oraz dopasowywania komunikacji marketingowej. Takie cookies będą stosowane wyłącznie po uzyskaniu wymaganej zgody użytkownika.</p></section>
            <section><h2 className="font-serif text-2xl text-white mb-3">4. Narzędzia, które mogą być używane</h2><p>Strona może w przyszłości korzystać z narzędzi takich jak:</p><ul className="mt-2 list-disc pl-6 space-y-1"><li>Google Analytics,</li><li>Google Ads,</li><li>Meta Pixel,</li><li>inne podobne narzędzia analityczne lub marketingowe.</li></ul><p className="mt-3">Takie narzędzia nie powinny być uruchamiane przed uzyskaniem wymaganej zgody użytkownika, jeżeli zgoda jest wymagana przez przepisy.</p></section>
            <section><h2 className="font-serif text-2xl text-white mb-3">5. Zarządzanie zgodami</h2><p>Użytkownik może wyrazić zgodę na wszystkie opcjonalne cookies, odrzucić opcjonalne cookies lub wybrać konkretne kategorie cookies w ustawieniach cookies.</p><p className="mt-3">Zgoda może zostać zmieniona lub wycofana w dowolnym momencie poprzez ustawienia cookies dostępne na stronie.</p></section>
            <section><h2 className="font-serif text-2xl text-white mb-3">6. Cookies niezbędne a opcjonalne</h2><p>Cookies niezbędne są wymagane do prawidłowego działania strony i nie można ich wyłączyć z poziomu ustawień cookies strony.</p><p className="mt-3">Cookies preferencyjne, analityczne i marketingowe są opcjonalne i będą wykorzystywane wyłącznie zgodnie z wyborem użytkownika oraz obowiązującymi przepisami prawa.</p></section>
            <section><h2 className="font-serif text-2xl text-white mb-3">7. Ustawienia przeglądarki</h2><p>Użytkownik może również zarządzać cookies za pomocą ustawień swojej przeglądarki internetowej. Ograniczenie lub wyłączenie cookies w przeglądarce może wpłynąć na działanie niektórych funkcji strony.</p></section>
            <section><h2 className="font-serif text-2xl text-white mb-3">8. Zmiany polityki cookies</h2><p>Polityka cookies może być aktualizowana, w szczególności w przypadku wdrożenia nowych narzędzi analitycznych, marketingowych lub zmian przepisów prawa.</p><p className="mt-3">Aktualna wersja polityki cookies jest zawsze dostępna na stronie internetowej.</p></section>
            <section><h2 className="font-serif text-2xl text-white mb-3">9. Kontakt</h2><p>W sprawach dotyczących cookies oraz ochrony danych osobowych można skontaktować się z administratorem:</p><p className="mt-4 leading-relaxed">SERPAKOWSKI Nieruchomości<br />Serhii Kovlak<br />E-mail: kontakt@serpakowski.pl<br />Telefon: +48 453 053 969</p></section>
          </div>
        </section>
      </main>
      <SiteFooterPl />
    </div>
  );
}
