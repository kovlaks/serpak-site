import { SiteFooterEn } from "../../../components/layout/SiteFooterEn";
import { SiteHeaderEn } from "../../../components/layout/SiteHeaderEn";

export const metadata = {
  title: "Cookie Policy | SERPAKOWSKI Nieruchomości",
  description:
    "Cookie Policy of SERPAKOWSKI Nieruchomości: information about cookies, cookie categories, consent and privacy settings.",
};

export default function CookiesPageEn() {
  return (
    <div className="min-h-screen bg-[#0C2D3A] text-neutral-100">
      <SiteHeaderEn />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <section className="rounded-3xl bg-white/5 p-7 sm:p-10 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <h1 className="font-serif text-3xl sm:text-4xl text-white">Cookie Policy</h1>
          <p className="mt-3 text-sm text-neutral-300">Last updated: 05.05.2026</p>
          <p className="mt-6 text-neutral-200/90 leading-relaxed">
            This Cookie Policy explains how the SERPAKOWSKI Nieruchomości website may use cookies and similar technologies.
          </p>

          <div className="mt-10 space-y-9 text-neutral-200/90">
            <section><h2 className="font-serif text-2xl text-white mb-3">1. What cookies are</h2><p>Cookies are small text files or similar technologies stored on a user&apos;s device while using a website. Cookies may be used to ensure website operation, remember preferences, provide statistics, and support marketing activities.</p></section>
            <section><h2 className="font-serif text-2xl text-white mb-3">2. Who uses cookies</h2><p>The website administrator is Serhii Kovlak, conducting business under the brand SERPAKOWSKI Nieruchomości, correspondence address: Złota 75A/7, 00-819 Warsaw, Poland, NIP: 1133184502, REGON: 543202915.</p><p className="mt-3">Contact:</p><ul className="mt-2 list-disc pl-6 space-y-1"><li>e-mail: kontakt@serpakowski.pl</li><li>phone: +48 453 053 969</li></ul></section>
            <section><h2 className="font-serif text-2xl text-white mb-3">3. Cookie categories</h2><p>The website may use the following categories of cookies:</p><h3 className="font-serif text-xl text-white mt-6 mb-2">Necessary cookies</h3><p>These are required for proper website operation, security, core functionality, and content display. These cookies may be used without separate user consent.</p><h3 className="font-serif text-xl text-white mt-6 mb-2">Preference cookies</h3><p>These may be used to remember user settings, such as the selected language or display preferences.</p><h3 className="font-serif text-xl text-white mt-6 mb-2">Analytics cookies</h3><p>These may be used to analyze website usage, number of visits, traffic sources, and user behavior. These cookies are used only after obtaining the required user consent.</p><h3 className="font-serif text-xl text-white mt-6 mb-2">Marketing cookies</h3><p>These may be used for advertising activities, remarketing, measuring ad effectiveness, and tailoring marketing communication. These cookies are used only after obtaining the required user consent.</p></section>
            <section><h2 className="font-serif text-2xl text-white mb-3">4. Tools that may be used</h2><p>In the future, the website may use tools such as:</p><ul className="mt-2 list-disc pl-6 space-y-1"><li>Google Analytics,</li><li>Google Ads,</li><li>Meta Pixel,</li><li>other similar analytics or marketing tools.</li></ul><p className="mt-3">Such tools should not be activated before obtaining required user consent, where consent is required by law.</p></section>
            <section><h2 className="font-serif text-2xl text-white mb-3">5. Managing consent</h2><p>The user may accept all optional cookies, reject optional cookies, or choose specific cookie categories in cookie settings.</p><p className="mt-3">Consent may be changed or withdrawn at any time via cookie settings available on the website.</p></section>
            <section><h2 className="font-serif text-2xl text-white mb-3">6. Necessary and optional cookies</h2><p>Necessary cookies are required for proper website operation and cannot be disabled in the website&apos;s cookie settings.</p><p className="mt-3">Preference, analytics, and marketing cookies are optional and will be used only in accordance with the user&apos;s choice and applicable law.</p></section>
            <section><h2 className="font-serif text-2xl text-white mb-3">7. Browser settings</h2><p>The user can also manage cookies through their web browser settings. Limiting or disabling cookies in the browser may affect the operation of some website features.</p></section>
            <section><h2 className="font-serif text-2xl text-white mb-3">8. Changes to this Cookie Policy</h2><p>This Cookie Policy may be updated, in particular in the event of implementation of new analytics or marketing tools, or changes in legal regulations.</p><p className="mt-3">The current version of this Cookie Policy is always available on the website.</p></section>
            <section><h2 className="font-serif text-2xl text-white mb-3">9. Contact</h2><p>For matters related to cookies and personal data protection, you can contact the administrator:</p><p className="mt-4 leading-relaxed">SERPAKOWSKI Nieruchomości<br />Serhii Kovlak<br />E-mail: kontakt@serpakowski.pl<br />Phone: +48 453 053 969<br />Correspondence address: Złota 75A/7, 00-819 Warsaw, Poland<br />Area of operation: Warsaw, Poland</p></section>
          </div>
        </section>
      </main>
      <SiteFooterEn />
    </div>
  );
}
