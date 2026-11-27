# EN-15 - Final English Website Quality and SEO Audit

## A. Executive Summary

| Baseline | Result |
| --- | --- |
| Audit date | 27 November 2026 UTC |
| Audited `main` | `f904a3424bc31d08b5cc74ad36536d4333e62e16` |
| EN-14 | PR #102 merged into `main` at 10:49:27 UTC. The fetched first-parent history and seven-file diff confirm six English robots updates and the sitemap additions. [PR #102](https://github.com/kovlaks/serpak-site/pull/102) · [Merged commit](https://github.com/kovlaks/serpak-site/commit/f904a3424bc31d08b5cc74ad36536d4333e62e16) |
| Routes | 17 total, comprising 12 completed pages and five checklist placeholders. No other public English page routes were found in the source, build route table or rendered navigation. |
| Indexable English services | 6 of 6 eligible for crawling and indexing |
| Executed tests | 916 counted checks. 102 HTTP, 384 navigation, 120 calculator, 37 form and consent, 66 layout, 20 hero breakpoint, 172 FAQ, 13 performance and two keyboard-bypass and motion checks. Source reviews, additional reproductions and repository commands are outside this count. |
| Overall assessment | **NOT READY.** Published commission and support terms align and all completed routes are indexable. A quote-input defect and two consent defects block English readiness. |
| Critical blockers | CALC-01 · P0 incorrect commission for comma-decimal input. EN15-CONSENT-01 and EN15-CONSENT-03 · P1 analytics withdrawal and small-screen settings. |

The audit paired public responses from `https://www.serpakowski.pl` with an isolated Next.js 14.2.5 production build of the fetched commit. HTTP checks used live response headers and initial HTML, including requests for the six services with a Googlebot user agent. Chromium exercised navigation, keyboard controls and responsive layouts. Formspree requests were intercepted and fulfilled or failed locally with synthetic data. Business identity and contractual terms were checked for consistency against the stated requirements and published copy. External registry records, actual Formspree delivery, Search Console indexing and real-user performance data fall outside the verified results.

| Required repository command | Result |
| --- | --- |
| `npm run build` | Exit 0. Built all 59 static-generation tasks and emitted 17 English routes. |
| `npx tsc --noEmit --incremental false` | Exit 0 |
| `git diff --check` | Exit 0 |

## B. Route Inventory

The GitHub `main` commit is `f904a3424bc31d08b5cc74ad36536d4333e62e16`, the merge of PR #102, “EN-14 - Enable Indexing for English Service Pages.” The tracked `app/en` tree contains exactly 17 page entries and no additional English route handler. The table records initial public HTTPS GET responses on 2026-11-27 UTC. “Default” means there is no robots exclusion in the response. Canonical paths below represent absolute URLs at `https://www.serpakowski.pl`. [PR #102](https://github.com/kovlaks/serpak-site/pull/102) · [Audited commit](https://github.com/kovlaks/serpak-site/commit/f904a3424bc31d08b5cc74ad36536d4333e62e16)

| URL | HTTP Status | HTML Language | Indexing | Canonical | Result |
| --- | --- | --- | --- | --- | --- |
| `/en` | 200 | en | Indexable by default | `/en` | Pass, in sitemap |
| `/en/landlord` | 200 | en | Indexable by default | `/en/landlord` | Pass, in sitemap |
| `/en/rent` | 200 | en | Indexable by default | `/en/rent` | Pass, in sitemap |
| `/en/partnership` | 200 | en | Indexable by default | `/en/partnership` | Pass, in sitemap |
| `/en/najem-solo` | 200 | en | `index, follow` | `/en/najem-solo` | Pass, in sitemap |
| `/en/najem-split` | 200 | en | `index, follow` | `/en/najem-split` | Pass, in sitemap |
| `/en/umowa-najmu` | 200 | en | `index, follow` | `/en/umowa-najmu` | Pass, in sitemap |
| `/en/rzut-mieszkania` | 200 | en | `index, follow` | `/en/rzut-mieszkania` | Pass, in sitemap |
| `/en/spacer-3d` | 200 | en | `index, follow` | `/en/spacer-3d` | Pass, in sitemap |
| `/en/asystent-najmu` | 200 | en | `index, follow` | `/en/asystent-najmu` | Pass, in sitemap |
| `/en/privacy` | 200 | en | Indexable by default | `/en/privacy` | Pass, in sitemap |
| `/en/cookies` | 200 | en | Indexable by default | `/en/cookies` | Pass, in sitemap |
| `/en/checklist` | 200 | en | `noindex, nofollow` | None | Intentional placeholder, excluded |
| `/en/checklist/buyer` | 200 | en | `noindex, nofollow` | None | Intentional placeholder, excluded |
| `/en/checklist/landlord` | 200 | en | `noindex, nofollow` | None | Intentional placeholder, excluded |
| `/en/checklist/seller` | 200 | en | `noindex, nofollow` | None | Intentional placeholder, excluded |
| `/en/checklist/tenant` | 200 | en | `noindex, nofollow` | None | Intentional placeholder, excluded |

## C. Commercial Consistency

The brokerage pages agree on the standard gross commission, payer, service scope and limited post-handover support. A Split calculator input defect blocks readiness. The reported commercial conditions were checked against the site and the audit brief.

| Topic | Result and source evidence |
|---|---|
| Najem Solo | One payment of 100% of one month’s base rent, VAT included, paid by the property owner. “The tenant’s agency commission is PLN 0” applies within Solo brokerage. The basis excludes administrative charges, utilities, and other additional fees. [Home comparison](../../app/en/HomePageClient.tsx#L18-L33) · [Landlord pricing](../../app/en/landlord/page.tsx#L400-L433) · [Solo pricing](../../app/en/najem-solo/page.tsx#L303-L309) |
| Najem Split | The same standard gross commission and service scope as Solo. The owner pays in 12 monthly instalments. “Paying in instalments does not increase the commission.” The FAQ distinguishes statutory late-payment interest and separately agreed third-party expenses from the interest-free schedule. The landlord comparison notes the final instalment may differ due to rounding. Split’s pilot qualification appears at the final CTA. See COPY-01. [Split scope and pricing](../../app/en/najem-split/page.tsx#L291-L335) · [Split additional costs](../../app/en/najem-split/page.tsx#L230-L244) · [Split pilot wording](../../app/en/najem-split/page.tsx#L533-L543) |
| Reletting discount | Subject to contract, capped at 100% of the **new** commission for reletting the same property. Applicable future portions are summed at actual handover to the new tenant. Solo uses 12 notional portions and Split uses the actual schedule. A separate agreement and no overdue obligations are stated conditions. The original obligations survive and past fees are non-refundable. Both examples agree. PLN 3,600 ÷ 12 = PLN 300 per portion. Three remaining portions = PLN 900 off the new standard commission of PLN 3,600, giving PLN 2,700 gross, or 12 × PLN 225 for Split. [Home summary](../../app/en/HomePageClient.tsx#L43-L48) · [Solo conditions](../../app/en/najem-solo/page.tsx#L60-L72) · [Solo example](../../app/en/najem-solo/page.tsx#L343-L409) · [Split conditions](../../app/en/najem-split/page.tsx#L64-L71) · [Split example](../../app/en/najem-split/page.tsx#L360-L429) |
| Tenant commission | “Tenants pay no agency commission for properties handled under our landlord-focused brokerage model.” The tenant page distinguishes independently requested searches and help, with possible fees discussed in advance, from owner-instructed lettings. It lists rent, deposit, administrative charges and utilities separately from agency commission. [Home wording](../../app/en/HomePageClient.tsx#L295-L310) · [Tenant terms](../../app/en/rent/page.tsx#L261-L278) · [Tenant FAQ](../../app/en/rent/page.tsx#L104-L129) |
| Included support and Rental Assistant | Included support begins at actual handover and is limited to 14 days of as-needed help for urgent move-in, handover and document matters. Solo expressly excludes ongoing management and round-the-clock emergency service. Rental Assistant starts only by separate agreement, can be requested independently, and costs 5% monthly of base rent, VAT included, excluding administrative charges/utilities. Repairs, materials and third-party costs are agreed separately. The FAQ expressly excludes payment guarantees. [Landlord FAQ](../../app/en/landlord/page.tsx#L269-L303) · [Solo support](../../app/en/najem-solo/page.tsx#L452-L468) · [Split support](../../app/en/najem-split/page.tsx#L482-L500) · [Tenant support](../../app/en/rent/page.tsx#L154-L158) · [Assistant billing](../../app/en/asystent-najmu/page.tsx#L36-L49) · [Assistant scope](../../app/en/asystent-najmu/page.tsx#L155-L195) · [Separate agreement](../../app/en/asystent-najmu/page.tsx#L349-L371) |
| Additional services | Tailored Lease Agreement and 2D Floor Plan use individual quotes. Virtual 3D Tour starts from PLN 500, VAT included. Each service agrees timing or scope per project. The lease service describes drafting and refers specialist advice to a qualified Polish lawyer. No fixed delivery deadlines or guaranteed commercial results were found on these service pages. [Lease price and scope](../../app/en/umowa-najmu/page.tsx#L359-L386) · [Floor plan price](../../app/en/rzut-mieszkania/page.tsx#L355-L375) · [Floor plan timing](../../app/en/rzut-mieszkania/page.tsx#L123-L132) · [3D price and timing](../../app/en/spacer-3d/page.tsx#L139-L161) |

## D. Functional Tests

### Visitor journey, header, language navigation and footer

Chromium 156.0.8078.79 tested the public origin and a production build of the audited commit. The language matrix includes 72 rendered link destinations and 24 language-state checks per origin at 1440 px desktop and 390 px mobile. The 29 distinct destinations all returned HTTP 200 and rendered the expected document language at each origin. A further 67 assertions per origin covered 21 journey checks, 4 partnership checks, 14 internal footer and settings checks, 3 contact-link targets, 1 desktop tab order, and 24 mobile menu checks at 390 × 844. The 384 assertions include both origins and exclude repeat runs. A few automated clicks timed out while Chromium was committing a navigation or moving the target into view. Each affected link reached the expected destination in the complementary run, and each route returned HTTP 200. The desktop order was brand, Services, Partnership, Contact, PL, RU, EN, and Submit request.

The following paths start at the English homepage.

| Visitor task | Observed path |
|---|---|
| Compare Solo and Split | Header **Services** opens `/en#services`. The payment cards state “One service. Two payment options.” and show **1 payment** and **12 instalments**. Their **Explore Najem Solo** and **Explore Najem Split** links point to the corresponding English pages. The service pages also link to each other. |
| Locate the commission calculator | **Explore Najem Split** → **Calculate Your Instalment** → `/en/najem-split#calculator`. |
| Discover Tailored Lease Agreement, Virtual 3D Tour and Rental Assistant | The three **Additional Services** cards point to their respective English routes. Each “Full details” link has a service-specific accessible name. |
| Discover 2D Floor Plan | **What Sets Us Apart?** card “2D Floor Plan / Property Layout” points to `/en/rzut-mieszkania`. It is also in the footer and linked from the 3D Tour page. |
| Locate the monthly subscription calculator | **Rental Assistant** → **Calculate Your Subscription** → `/en/asystent-najmu#calculator`. |
| Reach landlord and tenant pages | **Explore Our Landlord Services** and footer **For Landlords** point to `/en/landlord`. Footer **For Tenants** points to `/en/rent`. The main homepage tenant card’s **Ask About Rentals** link intentionally opens the homepage form. |
| Reach partnership and contact | Header **Partnership** reaches `/en/partnership`. Header **Contact** and **Submit request** link to `/en#contact` from the English pages. Service CTAs with a local `#contact` first show service context and then link to the homepage form. These are intentional cross-page links. |
| Read legal policies and open settings | Footer **Privacy Policy** and **Cookie Policy** point to `/en/privacy` and `/en/cookies`. **Cookie settings** opens the English settings overlay. |

The language switcher uses these destinations.

| English page | Polish | Russian | English |
|---|---|---|---|
| `/en` | `/pl` | `/ru` | `/en` |
| `/en/landlord` | `/pl/landlord` | `/ru/landlord` | `/en/landlord` |
| `/en/rent` | `/pl/rent` | `/ru/rent` | `/en/rent` |
| `/en/partnership` | `/pl/wspolpraca` | `/ru/wspolpraca` | `/en/partnership` |
| `/en/privacy` | `/pl/polityka-prywatnosci` | `/ru/privacy` | `/en/privacy` |
| `/en/cookies` | `/pl/polityka-cookies` | `/ru/cookies` | `/en/cookies` |
| `/en/najem-solo` | `/pl/najem-solo` | `/ru` (homepage) | `/en/najem-solo` |
| `/en/najem-split` | `/pl/najem-split` | `/ru` (homepage) | `/en/najem-split` |
| `/en/umowa-najmu` | `/pl/umowa-najmu` | `/ru` (homepage) | `/en/umowa-najmu` |
| `/en/rzut-mieszkania` | `/pl/rzut-mieszkania` | `/ru` (homepage) | `/en/rzut-mieszkania` |
| `/en/spacer-3d` | `/pl/spacer-3d` | `/ru` (homepage) | `/en/spacer-3d` |
| `/en/asystent-najmu` | `/pl/asystent-najmu` | `/ru` (homepage) | `/en/asystent-najmu` |

The six Russian homepage links expose the accessible name and title “Russian homepage - this service page is not yet available in Russian.” The English link identifies the current language with `aria-current="true"`. Source: `components/layout/SiteHeaderEn.tsx:10–33,69–82,111–123` plus the landlord and partnership header variants.

The shared English footer publishes SERPAKOWSKI Nieruchomości, Warsaw, Poland, `kontakt@serpakowski.pl`, `+48 453 053 969`, NIP `1133184502`, REGON `543202915`, and “Mailing address: Złota 75A/7, 00-819 Warsaw.” Chromium validated all 16 rendered link targets and activated the 13 internal destinations. These details correspond to the English policy details, and the partnership contact email and phone match. The Telegram URL `https://t.me/+48453053969` returned HTTP 200. Mail, dialer, account ownership and reply handling were outside the tests. Source: `components/layout/SiteFooterEn.tsx:15–57`, `app/en/privacy/page.tsx:25`, `app/en/cookies/page.tsx:27`, `app/en/partnership/page.tsx:425–459`.

Partnership distinguishes rental operators and institutional landlords, service companies, agents, agencies and investors. Possible models include referrals, client benefits, shared visibility, joint content and international support. Hero links lead to `#ecosystem` and `#contact`. The contact section provides email and telephone, and the shared header links to the homepage form. The title “Real estate partnerships in Warsaw | SERPAKOWSKI Nieruchomości” is descriptive. There are no named partners, numerical promises or claimed completed transactions in the audited copy. The exact operative scope of “Communication in Polish, Russian, Ukrainian and English,” “Additional benefits for tenants through a partner network,” and “Access to verified service providers” needs owner confirmation. The metadata line “We build cooperation that brings clients and transactions.” and heading “Partnership that attracts clients” imply outcomes more strongly than the conditional cooperation models. Source: `app/en/partnership/page.tsx:7–21,49–55,181–198,330–357`.

The mobile trigger is a named button with a 44 × 44 px target and an amber keyboard focus outline. Enter and Space open it. Its links follow the displayed reading order, and activating Contact closes the menu and reaches the homepage form. Escape closes it and returns focus to the trigger while a header control has focus. After tabbing into the main content, Escape leaves the disclosure open (NAV-02).

### Calculator tests

Chromium 156 and Playwright exercised actual controls on the production build of the audited commit. The 117 local cases comprised 82 manual-entry cases on English and Polish routes, 28 keyboard/focus cases, two decimal-comma cases, two discount examples, one decimal-point control case, and two narrow-viewport pointer cases. There were 115 passes and two failures for the same commission input defect in English and Polish. Results for matching inputs were checked in integer grosze. The P0 Split finding was corroborated in live Chromium. The standard Split estimate explicitly excludes the separately documented reletting discount. The Solo and Split discount examples were checked independently. The workspace evidence files `en15-split-decimal-point.png` and `en15-split-typed-comma.png` show the two input outcomes.

| Check | Browser evidence |
|---|---|
| Split standard commission and VAT | PLN 3,600 → PLN 3,600.00 gross, 11 × PLN 300.00 plus final PLN 300.00 and PLN 0.00 interest. The page explains that gross includes VAT and charges/utilities are excluded. |
| Split decimal/final adjustment | PLN 3,600.01 → 11 × PLN 300.00 and final PLN 300.01. PLN 3,600.06 → 11 × PLN 300.01 and final PLN 299.95. The 12 amounts sum to the gross total. |
| Split zero and small values | PLN 0 returns zero. PLN 0.01 returns 11 × PLN 0.00 plus PLN 0.01. PLN 0.19 returns 11 × PLN 0.01 plus PLN 0.08. The clamp prevents the first 11 rounded amounts from overshooting a tiny total. |
| Split validation and separator | Empty, negative, exponent notation and more than two decimal places clear the variable results and set the invalid state. Typing unsupported letters into an empty field leaves it empty and invalid. **Typing `3600,50` silently produces an incorrect estimate.** See CALC-01. |
| Assistant rate and gross amounts | PLN 2,000 / 3,000 / 4,000 / 5,000 / 6,000 → PLN 100 / 150 / 200 / 250 / 300 gross. Both `2345.67` and `2345,67` → PLN 117.28 gross. PLN 3,000.09 → PLN 150 gross and PLN 3,000.10 → PLN 150.01 gross. |
| Assistant manual limits and validation | Empty, negative, letters, exponent notation and excess precision show a linked error and an em dash. PLN 25,000 entered manually → PLN 1,250 gross. Both calculators accept manual amounts outside their slider limits and reject amounts beyond the safe integer range in grosze. |
| Sliders | Tab reaches each named slider with a visible outline. Arrow Left/Right change rent by PLN 1. Home/End select PLN 1,000/15,000, and arrow presses at the limits stay within them. Slider changes update the input and the result. Pointer checks also exercised both English sliders at 390 px. |
| Polish parity | The English and Polish implementations match on the tested valid amounts, invalid states and keyboard operations. The silent comma defect also reproduces on `/pl/najem-split`. |

[English Split component](../../app/en/najem-split/CommissionCalculator.tsx#L5-L37) · [Polish Split component](../../app/pl/najem-split/CommissionCalculator.tsx#L5-L37) · [English Assistant component](../../app/en/asystent-najmu/SubscriptionCalculator.tsx#L5-L29) · [Polish Assistant component](../../app/pl/asystent-najmu/SubscriptionCalculator.tsx#L5-L29)

### FAQ

The six service pages and the landlord page supply their own English questions and answers to the shared accordion. The reviewed answers agree with the commercial terms above. The site explains “najem okazjonalny” and Polish legal terminology in English.

Each expandable question below was tested at 390×844 and 1440×900 in Chromium. Alternating Enter and Space opened and closed every item with focus on its question button. `aria-expanded` and the matching panel's `aria-hidden` changed together, each controlled panel was a labelled `region`, and questions were `h3` elements under the FAQ section's `h2`. Keyboard focus styling was present. The tenant FAQ has six always-visible English question/answer pairs checked at both widths.

| Route | Distinct items | Presentation |
|---|---:|---|
| `/en/landlord` | 10 | Accordion |
| `/en/rent` | 6 | Static question/answer list |
| `/en/najem-solo` | 18 | Accordion |
| `/en/najem-split` | 17 | Accordion |
| `/en/umowa-najmu` | 8 | Accordion |
| `/en/rzut-mieszkania` | 8 | Accordion |
| `/en/spacer-3d` | 10 | Accordion |
| `/en/asystent-najmu` | 9 | Accordion |

80 accordion items received 160 item/viewport checks and the tenant list received 12 static item/viewport checks. The shared accordion renders the supplied English text. The accessible names come from the English question text. [Shared accordion](../../app/pl/landlord/FaqAccordion.tsx#L22), [tenant FAQ](../../app/en/rent/page.tsx#L448)

### Contact forms and privacy

The three English HTML forms are on the homepage, landlord page and tenant page. The homepage and landlord page use `HomeContactForm`, configured in `app/en/HomePageClient.tsx:396–409` and `app/en/landlord/page.tsx:445–470`. The tenant page uses `RentContactSection`, configured in `app/en/rent/page.tsx:465–492`. Service and partnership CTAs link to contact routes or direct channels. The English terms “Name,” “Phone,” “Send” (home/landlord), “Contact Me” (tenant) and the tailored message prompts were present. All three near-form Privacy Policy links target `/en/privacy`.

Chromium 156 at 390×844 against the local production build executed seven scenarios per route (21 total). Empty and whitespace-only required values displayed the English validation message and produced zero POSTs. While an intercepted response was held, the submit button disabled on all three and its label remained unchanged. A mocked HTTP 503 showed the English error, retained all field values and re-enabled submission. A mocked HTTP 200 showed the English success, cleared all three fields and re-enabled submission. Each allowed the invalid nonempty phone fixture `not-a-phone`. Neither success nor error had a status/alert role or live region, and Chromium's active element was the document body after submission.

The application validates trimmed name and phone and keeps the message optional. The JSON payload includes `page_language: "en"`, the corresponding `source_page` (`/en`, `/en/landlord` or `/en/rent`), source and ISO submission time. The tenant request separately includes `form_type: "rent_page_request"`. The purpose of the Formspree endpoint was confirmed in shared source. All test POSTs were intercepted in Chromium and used synthetic fixtures. Email or forwarding receipt was outside the test.

Both English policies list Serhii Kovlak, `kontakt@serpakowski.pl`, `+48 453 053 969`, Złota 75A/7, 00-819 Warsaw, NIP 1133184502 and REGON 543202915, consistent with the visible footer and the relevant JSON-LD fields. The business owner should confirm the correspondence and registry details, the source of the published update dates (30 April and 5 May 2026), the 12-month retention claim, processors and notifications, provider agreements and EEA safeguards. The Formspree disclosure and language/source/submission-date description correspond to the implemented form payload. The source cannot establish forwarding via Telegram, retention or processor agreements.

### Consent, privacy and mobile settings

Fresh live Chromium at 1280×800 observed no optional analytics requests or cookies by the initial homepage check. Accept all requested the deployed GA4 configuration's `www.googletagmanager.com/gtag/js`. With the public Google script supplied to Playwright as an intercepted response, the live page produced no optional requests before consent and attempted GA page views after acceptance. The first scroll after withdrawal still attempted GA collection. All collection requests were intercepted and aborted. Local desktop tests used the default production build without a GA ID to verify English banner, both legal links and continued English across navigation, Reject optional and reload persistence, independently saving Preference on, Accept all and withdrawal. The site stores consent and update time in two origin-scoped localStorage keys. Opening settings by pressing Enter left focus on the footer button. Tab entered the overlay at Close, Shift+Tab returned to the underlying footer and Escape left the overlay open. All four checkboxes appeared without names in the accessibility tree. Necessary was checked and disabled as intended. Footer Cookie settings reopens the English controls. The banner's English Privacy Policy and Cookie Policy links point to `/en/privacy` and `/en/cookies`. The current implementation manages GA4 consent when the public environment config is set. The audit found no Google Ads or Meta Pixel integration in the audited source.

The settings overlay measured 820 px tall at 320×568 and 760 px tall at 375×667. At 320×568, Close, Save settings and Reject optional were fully clipped vertically. At 375×667, Close and Reject optional were partially clipped. The defect reproduced on both `/en` and `/en/cookies` at 320×568. The same panel fit at 390×844 and 414×736. Reproduction evidence was captured at the two shorter sizes. This workstream executed 33 local Chromium scenarios and four distinct live GA states, for 37 browser scenarios.

## E. SEO and Indexing

### Response, metadata and server HTML

SEO testing executed 57 HTTP probes. This counts 17 English pages, six English services with a Googlebot user-agent string, 18 Polish and Russian comparison routes, two crawler files, one missing-page probe, nine redirect probes and four Russian homepage image probes. A further 45 requests to the local production build matched the corresponding live status, examined metadata, headings, internal route destinations and crawler files, apart from the expected sitemap timestamp value. This gives 102 SEO request cases. The simulated Googlebot responses repeated the normal status, language, canonical and directives. Every completed English route served an English title and unique description, one absolute self-canonical, aligned Open Graph title/description/URL/site name/type/`en_US` and Twitter title/description/`summary`, with no conflicting `X-Robots-Tag`, internal anchor failures or index exclusions. The second `<title>` seen in the raw documents on Floor Plan and 3D Tour belongs to an inline SVG, outside the head. Share images are absent across completed routes (SEO-03). The initial HTML contained the primary content, one main landmark and one H1 per completed route, with no downward heading-level skips in source order. [Core metadata factory](../../app/seo.ts) · [English root layout](../../app/en/layout.tsx)

| Route | Document title | Server-rendered H1 |
| --- | --- | --- |
| `/en` | SERPAKOWSKI Nieruchomości \| Real estate agency in Warsaw | Clear terms. New opportunities. |
| `/en/landlord` | Rent Out Your Apartment in Warsaw \| SERPAKOWSKI Nieruchomości | Rent Out Your Apartment in Warsaw Safely and With Less Hassle |
| `/en/rent` | Rent an Apartment in Warsaw \| SERPAKOWSKI Nieruchomości | Find Your New Home in Warsaw With Confidence |
| `/en/partnership` | Real estate partnerships in Warsaw \| SERPAKOWSKI Nieruchomości | Partnership that attracts clients |
| `/en/najem-solo` | Najem Solo - One-Time Letting Commission \| SERPAKOWSKI | Najem Solo |
| `/en/najem-split` | Najem Split - 12 Interest-Free Instalments \| SERPAKOWSKI | Najem Split |
| `/en/umowa-najmu` | Tailored Residential Lease Agreement \| SERPAKOWSKI | Tailored Lease Agreement |
| `/en/rzut-mieszkania` | 2D Floor Plans for Property Listings \| SERPAKOWSKI | 2D Floor Plan |
| `/en/spacer-3d` | Virtual 3D Property Tours in Warsaw from PLN 500 \| SERPAKOWSKI | Virtual 3D Tour |
| `/en/asystent-najmu` | Rental Assistant - 5% Monthly Subscription \| SERPAKOWSKI | Rental Assistant |
| `/en/privacy` | Privacy Policy \| SERPAKOWSKI Nieruchomości | Privacy Policy |
| `/en/cookies` | Cookie Policy \| SERPAKOWSKI Nieruchomości | Cookie Policy |

The five placeholders emitted `noindex, nofollow, noarchive, nocache` plus a Googlebot directive with `noimageindex`. No completed English page linked to them in initial HTML or literal source, and they were absent from the sitemap. The Polish description and share defaults inherited by these placeholders can be replaced when the checklists are completed. Crawling is allowed so crawlers can receive the noindex directives. [Checklist metadata](../../app/_checklist/metadata.ts) · [Shared defaults](../../app/_site-layout.tsx)

`/en/` returned 308 to `/en`, HTTP www returned 308 to HTTPS www, and HTTPS apex returned 307 to HTTPS www for `/en`. `/` returned 308 to `/pl` and legacy `/rent`, `/landlord`, `/wspolpraca`, `/partnership` and `/privacy` each returned a 308 to the configured Russian core route. Locale-prefixed English canonical URLs returned HTTP 200 directly. [Configured redirects](../../next.config.js)

### Sitemap, robots and hreflang

The live sitemap was valid XML with **25 distinct absolute HTTPS URLs**. Each returned 200 directly and matched its one canonical, with no noindex meta or header. It includes every completed English route and excludes the five placeholders, Russian service paths that have no page and the tested redirecting paths. The redirect targets are separate, canonical locale pages and legitimately appear in the sitemap. Live `robots.txt` returned 200 with `User-Agent: *`, `Allow: /` and the correct HTTPS www sitemap line. Nineteen entries shared the observed `lastmod` value `2026-11-27T10:49:52.895Z`. Six English service entries emitted no date. The 19 timestamps come from `new Date()` in the generator (SEO-01). [Sitemap](https://www.serpakowski.pl/sitemap.xml) · [Robots text](https://www.serpakowski.pl/robots.txt) · [Sitemap source](../../app/sitemap.ts) · [Robots source](../../app/robots.ts)

The home, landlord, tenant, partnership, privacy and cookies clusters each had identical reciprocal `en`, `pl`, `ru` and `x-default` declarations on all three canonical URLs. Each `x-default` points to the Polish equivalent. No service-level hreflang currently appears. Once their Polish counterparts are eligible and verified, pair each English service with its Polish counterpart and use reciprocal self and counterpart references. Add Russian equivalents only once corresponding pages exist and are eligible. The switcher’s Russian homepage fallback serves navigation. [Hreflang mappings](../../app/seo.ts)

### Structured data and business details

Exactly two JSON-LD scripts parsed per English route, one `RealEstateAgent` and one `WebSite`, each with a stable unique ID per document. `RealEstateAgent` identifies SERPAKOWSKI Nieruchomości, founder Serhii Kovlak, Warsaw area served, `+48 453 053 969`, `kontakt@serpakowski.pl`, Złota 75A/7, 00-819 Warszawa, PL, NIP 1133184502 and REGON 543202915. The brand, contact details and identifiers agree with the footer and English legal pages. Both schema URLs identify the HTTPS www site root, which redirects to the Polish canonical homepage. `WebSite.inLanguage` lists `pl`, `ru` and `en`. The agent’s `knowsLanguage` also includes Ukrainian, consistent with the partnership page’s communication claim. No unsupported offers, reviews or ratings were emitted. Source and JSON validation establish technical consistency. The mailing address is labelled as such in the footer and policies, while the schema presents it as the agent’s postal address. Confirm business records, contact channels, language coverage and any distinction between correspondence and a public office before changing structured data or legal pages (BUS-01). [Structured data source](../../components/common/StructuredData.tsx) · [English footer](../../components/layout/SiteFooterEn.tsx) · [Privacy source](../../app/en/privacy/page.tsx)

### Known framework and multilingual observations

`/en/en15-404-probe` returned HTTP 404 with `noindex` and the default Next.js “This page could not be found” message. Its raw `<html>` had no language attribute, site stylesheet or page-level navigation. A visitor following a broken URL has no in-page recovery link, and assistive technology lacks a language declaration. Search handling is correct (SEO-02). [English root layout](../../app/en/layout.tsx)

The Russian homepage still uses four Unsplash sources. Three returned 200. The first listing photo URL returned HTTP 404 on a direct GET. Keep that broken image in the multilingual backlog, separate from English readiness. [Russian homepage re-export](../../app/ru/page.tsx) · [Listing image source](../../app/(legacy)/page.tsx#L160) · [Failing image](https://images.unsplash.com/photo-1505691723518-36a5ac3b2b8f?q=80&w=2069&auto=format&fit=crop)

### Reproduction

```sh
curl -sS -D /tmp/en-service.headers -o /tmp/en-service.html https://www.serpakowski.pl/en/najem-split
curl -sS -A Googlebot -D /tmp/en-bot.headers -o /tmp/en-bot.html https://www.serpakowski.pl/en/najem-split
curl -sS -i https://www.serpakowski.pl/en/checklist/tenant
curl -sS -i https://www.serpakowski.pl/en/en15-404-probe
curl -sS https://www.serpakowski.pl/robots.txt
curl -sS https://www.serpakowski.pl/sitemap.xml
git ls-tree -r --name-only HEAD -- app/en
```

## F. Responsive and Accessibility Findings

Chromium 156.0.8078.79 automated with the installed Playwright runtime against the production build of the audited commit. Each of the 12 completed routes was loaded at 390×844 and 1440×900. The homepage, landlord, tenant, partnership, Najem Split, Virtual 3D Tour and Rental Assistant were also checked at 320, 375, 414, 768, 1024 and 1280 CSS px (66 route/viewport cases total). Heights were 844 below 768 CSS px and 900 otherwise. Optional cookies were rejected before the layout suite, which checked document width, above-fold screenshots, rendered heading/CTA geometry, labels and clipped text. The browser audit included keyboard input and accessible state checks. No axe or Lighthouse bundle was available. This is a practical assessment, without a formal conformance determination.

- The root scroll width equalled the viewport width across the 66 cases. The homepage still clips leading hero text at 1280 CSS px, which a scroll-width-only check misses. The heading, description and “Contact us →” link started at x = −16 at 1280. The heading started at x = −8 at 1296, −0.5 at 1311, 0 at 1312 and 64 at 1440. The same measurements reproduced on the public site and the local build. At 1024 and 1279 the hero text began at x = 0. Other audited page text, calculators and card-based comparisons showed no measured horizontal clipping within the tested widths. Calculator slider labels clipped to one CSS pixel intentionally through the screen-reader-only utility. [Home hero](../../app/en/HomePageClient.tsx#L162), [shared container](../../components/layout/Container.tsx#L3)
- Each completed page had document language `en`, one `main`, one main `h1`, and no downward heading-level jumps greater than one. The inspected focusable links and buttons had names. The skyline and logo images supplied alternative text. The floor-plan and 3D-tour SVGs exposed English accessible names through `aria-labelledby`, and both supply an illustration description. [Floor-plan SVG](../../app/en/rzut-mieszkania/page.tsx#L154), [tour SVG](../../app/en/spacer-3d/page.tsx#L187)
- Both calculators give the numeric inputs and sliders programmatic labels, use `aria-valuetext` to expose formatted slider amounts, and include polite live regions for results. The number-input invalid state associates the explanatory message with `aria-describedby`. The calculator panel-specific checks are in section D. The three contact forms depend on placeholder text for their visible field labels. See the form accessibility finding. [Split calculator](../../app/en/najem-split/CommissionCalculator.tsx#L44), [Rental Assistant calculator](../../app/en/asystent-najmu/SubscriptionCalculator.tsx#L35)
- Sampled normal-text contrast at 1440×900 and scroll 0 on the homepage. The 14 px Services, Partnership and Contact links ranged from 2.78:1 to 3.13:1 against the Warsaw skyline, and the 12 px PL and RU controls ranged from 3.38:1 to 3.68:1. The normal-text threshold is 4.5:1. Contrast was calculated from CSS foreground colour and opacity composited with Chromium screenshot pixels sampled under the text. The partnership Services link measured 4.86:1 to 5.37:1 over its darker hero, the home footer Services link measured 8.01:1 to 8.10:1, and the sampled calculator input labels measured 15.91:1. Screenshot evidence for the homepage header is in `EN-15-Home-Navigation-Contrast-local-1440.png`. [English header](../../components/layout/SiteHeaderEn.tsx#L38)
- Screenshot evidence for the clipping was saved outside the repository as `EN-15-Home-Hero-Clipping-live-1280.png` and `EN-15-Home-Hero-Clipping-local-1280.png` in the workspace shared downloads folder. Reproduction on the live site requires a 1280×900 viewport at CSS pixel scale and dismissal of the cookie banner to see the hero contact link. In the console, `document.querySelector("main h1").getBoundingClientRect().left` returns `-16`.

### Keyboard bypass and reduced motion

In local production Chromium, the first eight Tab stops at 1440 × 900 were all in the shared header. The ninth reached the first main-content link. The homepage offered no skip link. At 390 × 844 with reduced motion emulated, `matchMedia("(prefers-reduced-motion: reduce)").matches` returned `true`, the document still computed `scroll-behavior: smooth`, the rotating H1 word still had a 0.5 s opacity transition, and the heading changed over a 2.8 s observation. See A11Y-01 and A11Y-02.

## G. Performance Findings

Lab-only measurements on a production build with Chromium 156 and fresh browser contexts. A Pixel 7 device profile used 390×844 CSS pixels. For the throttled sample, Chromium network emulation set 10 Mb/s down, 5 Mb/s up and 100 ms latency, with cache disabled and 4× CPU slowdown. Each row gives a single navigation observed through 1.5 seconds after `load`. Layout shift is the accumulated observed shift without recent input. The first-visit consent banner was left unanswered.

The unthrottled loopback samples used 1440×900 desktop and 390×844 emulated mobile contexts, with zero observed shift in the recorded window.

| Route | Desktop LCP | Desktop load event | Mobile LCP | Mobile load event |
|---|---:|---:|---:|---:|
| `/en` | 1,720 ms | 698 ms | 2,060 ms | 1,102 ms |
| `/en/partnership` | 1,628 ms | 921 ms | 1,356 ms | 756 ms |
| `/en/najem-split` | 912 ms | 711 ms | 668 ms | 775 ms |
| `/en/spacer-3d` | 480 ms | 467 ms | 588 ms | 606 ms |
| `/en/asystent-najmu` | 804 ms | 838 ms | 1,148 ms | 1,471 ms |

The ten unthrottled navigations transferred 112.3–119.2 kB of JavaScript per first-page sample, counting JavaScript resources Chromium recorded in that window. Coverage of unused code across user flows was outside this measurement. The three slower-load samples below use the throttled mobile profile.

| Route | Throttled mobile LCP | Throttled mobile layout shift | Load event |
|---|---:|---:|---:|
| `/en` | 7,064 ms (cookie banner text) | 0.0042 | 11,758 ms |
| `/en/partnership` | 4,308 ms (hero description) | 0 | 12,106 ms |
| `/en/najem-split` | 5,276 ms (page text) | 0 | 8,400 ms |

The homepage and partnership each loaded the same 10,895,215-byte skyline JPEG at mobile and desktop dimensions. It is 5,568 px wide and neither hero supplies a responsive source. The first visit also downloaded the shared 1,418,573-byte logo PNG, whose 1,024 px source renders at 40–48 CSS px. The local build had no downloadable font assets in the observed network traces. No optional third-party requests, console warnings/errors or failed requests were observed across the 13 lab cases. See the consent tests for the production and simulated analytics behavior. Lighthouse and real-user performance data were unavailable. The measurements come from a shared Cloud runner with one cold sample per row and profile. [Homepage image](../../app/en/HomePageClient.tsx#L139), [partnership image](../../app/en/partnership/page.tsx#L169), [header logo](../../components/layout/SiteHeaderEn.tsx#L64)

## H. Issue Register

Every P0 or P1 below blocks the readiness verdict.

### Commercial and calculators

| ID | Priority | Affected route and component | Reproduction, expected and actual | Suggested correction | Blocks readiness |
|---|---|---|---|---|---|
| CALC-01 | P0 | `/en/najem-split` · [Parser](../../app/en/najem-split/CommissionCalculator.tsx#L9-L15) · [Numeric input](../../app/en/najem-split/CommissionCalculator.tsx#L43-L67) | In Chromium 156, open “Calculate Your Monthly Instalment,” clear “Monthly Base Rent,” then type `3600,50` one character at a time. Expect PLN 3,600.50 gross (first 11 × PLN 300.04, final PLN 300.06) or a visible validation message. Chromium drops the comma, `input.value` becomes `360050`, and `aria-invalid` is false. The output is PLN 360,050.00 gross (first 11 × PLN 30,004.17, final PLN 30,004.13). This is 100 times the intended commission for a common input format for PLN. The period entry works. The defect reproduces on the Polish Split component and the live English route. | Preserve the raw typed value, explicitly handle dot and comma as decimal separators or show a validation error, and cover typing and paste. Keep integer-grosz calculations and existing instalment terms. | Yes |
| COPY-01 | P2 | `/en`, `/en/landlord`, `/en/najem-solo`, `/en/najem-split`, `/en/umowa-najmu` · [Landlord FAQ](../../app/en/landlord/page.tsx#L288-L292) · [Solo FAQ](../../app/en/najem-solo/page.tsx#L218-L225) · [Lease comparison](../../app/en/umowa-najmu/page.tsx#L368-L378) · [Split CTA](../../app/en/najem-split/page.tsx#L533-L543) | Compare the homepage cards and comparison FAQs with the final Split CTA. The comparisons say “The only difference is how you pay” and offer both options side by side. Split’s final CTA says “Najem Split is currently offered as a pilot service. Submitting an enquiry does not create an agreement or guarantee that we will accept the instruction.” The pricing and service scope agree. The availability caveat comes late for owners deciding which option to ask about. | Confirm the pilot status and surface any current availability condition alongside the Split comparison and CTA. | No |

### Contact forms, consent and privacy

- **EN15-CONSENT-01 · P1 · Blocks readiness.** **Routes and source** shared site layout, reproduced on `/en`, `components/common/ConsentBasedTracking.tsx:53–111`, `components/common/CookieConsentManager.tsx:169–183`. **Reproduce** open a clean Chromium context, intercept analytics, open `/en`, select Accept all, then invoke the footer Cookie settings button's click handler without first scrolling, choose Reject optional, and scroll to the bottom. **Expected** withdrawal takes effect in the current document and handles analytics storage already set. **Actual and evidence** the saved analytics flag becomes false, but the existing Google tag, globals and analytics cookies remain. With the public tag script served as an intercepted response, the first scroll from y=0 to y=3,613 took place after withdrawal. Chromium attempted `scroll` events to `www.google-analytics.com/g/collect` and `www.google.com/g/collect`. Both were blocked before transmission. The listener simply exits on denied consent. Reloading or opening the next document omitted the tag while leaving the existing cookies. **Impact** navigation and interaction in the current document can still generate analytics after withdrawal. **Correction** explicitly disable the loaded tag on withdrawal, clear applicable first-party analytics cookies, and test denial, re-consent and navigation in an intercepted Chromium session.
- **EN15-CONSENT-02 · P2 · Does not block readiness.** **Routes and source** sitewide, `components/common/CookieConsentManager.tsx:206–249`. **Reproduce** focus the footer Cookie settings button, press Enter and use Tab, Shift+Tab and Escape. Inspect each checkbox in Chromium's accessibility tree. **Expected** a named dialog receives focus, contains its tab sequence, closes on Escape, and returns focus to the opener. Every category has an accessible name and associated description. **Actual and evidence** the overlay consists of generic `div` elements and the checkbox labels are adjacent text without an association. Focus stays on the opener and Escape leaves the overlay open. **Impact** keyboard and assistive-technology users can miss the dialog or be unable to distinguish consent categories. **Correction** add accessible dialog and label semantics and implement focus, Escape and focus return with existing UI patterns.
- **EN15-FORM-01 · P2 · Does not block readiness.** **Routes and source** `/en`, `/en/landlord`, `/en/rent`, `components/common/HomeContactForm.tsx:44–116` and `components/rent/RentContactSection.tsx:30–115`. **Reproduce** fill both fields and trigger intercepted failure/success using the keyboard. Inspect controls and notices. **Expected** persistent field labels, required state, a telephone input, accessible pending feedback and announced success/error. **Actual and evidence** Chromium can derive textbox names from placeholders, but the inputs have no `label` associations, programmatic required state or autocomplete. The text-type phone field accepts arbitrary strings. Feedback appears in plain paragraphs without a live region, error association or focus movement. The only pending signal is the disabled button. **Impact** required fields, submission progress and outcome are harder to understand, especially on mobile keyboards and with assistive technology. A non-phone value can prevent follow-up. **Correction** add visible associated labels and required semantics, appropriate `tel` and autocomplete attributes, tolerant phone validation and an announced status. Preserve the existing payload and privacy links.
- **EN15-PRIVACY-01 · P2 · Does not block readiness.** **Routes and source** `/en/privacy` and `/en/cookies`, `app/en/privacy/page.tsx:20–39` and `app/en/cookies/page.tsx:20–34`. **Reproduce** compare Privacy Policy sections 8 and 9 and Cookie Policy section 4 with the live Accept all action. **Expected** present integrations and consent storage are explained accurately and the existing English Cookie Policy is linked. **Actual and evidence** the Privacy Policy says detailed cookie information “may be described in a separate cookie policy in the future.” The Cookie Policy already exists. Both policies frame Google Analytics as a future possibility, but live consent enables it. The cookie text covers “similar technologies” generically without identifying localStorage consent records. **Impact** visitors cannot readily match disclosures to the deployed implementation. **Correction** have the business owner and policy reviewer confirm current processors, consent storage, dates, retention and company records, then describe the verified configuration and link the Cookie Policy.
- **EN15-CONSENT-03 · P1 · Blocks readiness.** **Routes and source** sitewide, reproduced on `/en/cookies`, `components/common/CookieConsentManager.tsx:206–249`. **Reproduce** use a 320×568 Chromium viewport and tap Settings on the English banner or Cookie settings in the footer. Try reaching Close, Save settings and Reject optional. **Expected** the full settings flow is operable at narrow heights, using an internal scroll area if needed. **Actual and evidence** the fixed, vertically centered dialog has no scroll container. On `/en/cookies`, Close occupies y=−105 to −71, Save settings y=585 to 623 and Reject optional y=635 to 673. Each is entirely outside the 568 px viewport. Screenshots `cookie-settings-320x568.png` and `cookie-settings-375x667.png`. **Impact** the interface traps a touch user in settings and the main consent actions cannot be used after entering it. **Correction** bound the dialog to available viewport height, allow internal scrolling, and make dismissal and action controls reachable, including at 320×568.

### Navigation and partnership

| Issue | Priority | Route/file | Reproduce | Expected | Actual and impact | Evidence | Suggested correction | Blocks completion? |
|---|---|---|---|---|---|---|---|---|
| NAV-01 | P2 | `/en` · `app/en/HomePageClient.tsx:290–313`, `components/layout/SiteFooterEn.tsx:19–26` | Open the homepage’s “Find Your New Home” tenant block. Follow its only CTA. | Tenants can discover the detailed tenant service from the main tenant section. | “Ask About Rentals” correctly goes to `/en#contact`. The route `/en/rent` is linked only in the shared footer, so visitors can miss how standalone searches differ from landlord-model lettings. | Main contains no anchor to `/en/rent`. Footer “For Tenants” reaches the page. | Keep the form CTA and add an explicit tenant-service link in the same block. | No |
| NAV-02 | P2 | `/en`, `/en/landlord`, `/en/partnership` and shared-header routes · `components/layout/SiteHeaderEn.tsx:50–60`, `SiteHeaderEnLandlord.tsx:27–35`, `SiteHeaderEnPartnership.tsx:26–34` | At 390 px, Tab to **Open navigation menu** and press Enter. Tab past **Submit request** to the first page link and press Escape. | The open menu dismisses, or it already closed when focus left the header. | The panel remains open, and keyboard focus is past its controls. Users must navigate back to the menu toggle or choose a link to dismiss it. | Chromium active-focus and visibility checks show `aria-expanded="true"` after Escape outside the header. Screenshot `en15-mobile-menu-escape-local-consent-dismissed.png` captured at 390 × 844 with the banner dismissed. The same state was reproduced on the public site. | Close the disclosure when keyboard focus leaves the header, or handle Escape while it remains open. Retain focus return for Escape from inside the menu. | No |
| PART-01 | P3 | `/en/partnership` · `app/en/partnership/page.tsx:7–21,49–55,181–198` | Read the page heading, search description and operator/client benefits. | Outcome language and service capabilities match the current partnership programme. | “Partnership that attracts clients” and “We build cooperation that brings clients and transactions” imply results, while partner benefits and service-provider verification lack independently verified operational evidence. Potential partners may read these as existing capabilities. | Exact search description, H1 and benefit strings above. | Confirm languages, network benefits and verification criteria with the owner and describe outcomes as prospective where appropriate. | No |

### Layout, accessibility and performance

| Issue ID | Priority | Route and source | Reproduction and evidence | Expected result | Observed result and impact | Suggested correction | Blocks completion |
|---|---|---|---|---|---|---|---|
| UX-01 | P2 | `/en` · `app/en/HomePageClient.tsx:173`, `components/layout/Container.tsx:10` | Open the live or local page at 1280×900, dismiss consent and inspect the hero. Heading, description and link text start at x = −16. Screenshot and measurements above. | Hero and contact CTA text remain fully within the viewport. | The first letters of the main message and the contact link are clipped at 1280–1311 CSS px. The header contact CTA remains usable. | Keep a positive inset as the container reaches its maximum width. Verify the 1279–1328 breakpoint range. | No |
| A11Y-NAV-01 | P2 | `/en` · `components/layout/SiteHeaderEn.tsx:38–45,69–79` | Load at 1440×900 at scroll 0 and inspect desktop Services, Partnership, Contact and the language controls against the skyline. See measured contrast and screenshot above. | Normal navigation text offers at least 4.5:1 foreground-to-background contrast. | Services, Partnership and Contact stay below 3.14:1 across their measured text bounds, and PL and RU stay below 3.69:1. Visitors with low vision can have difficulty reading navigation and identifying language options. | Set a stable, sufficiently dark header backing over the hero before scrolling. Recheck the text contrast throughout the desktop breakpoint. | No |
| PERF-01 | P2 | `/en`, `/en/partnership`, shared English headers · `app/en/HomePageClient.tsx:139,165`, `app/en/partnership/page.tsx:169`, `components/layout/SiteHeaderEn.tsx:65` | Use a fresh Chrome context at 390 CSS px. Read the Network panel for the hero and logo after loading the homepage and partnership page. | Mobile and desktop load images sized for their viewport and rendered dimensions. | Both routes request the 5,568 px, 10,895,215-byte skyline asset at mobile and desktop widths. Headers request the 1,024 px, 1,418,573-byte logo at a rendered width of 40–48 CSS px. This increases first-visit data use and loading time. | Encode appropriate responsive sizes and modern formats for the skyline, supply explicit responsive source selection and use a suitably sized logo. Compare cold mobile transfer and load timing after the change. | No |

### A11Y-01 · P2 · No keyboard bypass

- **Routes and source** — Shared English layout, reproduced on `/en`. `components/layout/SiteHeaderEn.tsx` and `app/en/HomePageClient.tsx:159–164`.
- **Reproduce and evidence** — Open the homepage at 1440 × 900 with a fresh context and press Tab from the top. Brand, Services, Partnership, Contact, PL, RU, EN and Submit request receive focus before the first main-content link. There is no skip link.
- **Expected and actual** — A keyboard user can bypass the repeated navigation at the first Tab stop. The current flow requires tabbing through the shared header or using a landmark shortcut in assistive technology.
- **Impact and correction** — Adds repeated navigation work on each page. Add a focus-visible skip link and a consistent main target. **Blocks completion** — No.

### A11Y-02 · P2 · Homepage animation ignores reduced motion

- **Routes and source** — `/en`, `app/en/HomePageClient.tsx:135–156,175–185` and `app/globals.css:5–8`.
- **Reproduce and evidence** — Emulate reduced motion in Chromium, load the homepage at 390 × 844 and observe the H1 for three seconds. The word changes, the fade remains enabled and the document computes smooth scrolling.
- **Expected and actual** — Reduced motion should keep the headline stable and disable smooth scrolling. The animation continues on a timer and the document retains smooth scrolling.
- **Impact and correction** — Recurring motion and scrolling can make the page harder to use for motion-sensitive visitors. Respect the media preference for the headline and scrolling and provide a pause mechanism if rotation remains. **Blocks completion** — No.

### Technical SEO and business record confirmation

| ID | Priority | Route | Source | Reproduce | Expected | Actual, evidence and impact | Suggested correction | Blocks completion |
|---|---|---|---|---|---|---|---|---|
| SEO-01 | P2 | `/sitemap.xml` | `app/sitemap.ts:7–120` | Fetch and group the `lastmod` values. Compare the generator for the original 19 URLs. | A date indicates the last significant content change. | All 19 older URLs shared `2026-11-27T10:49:52.895Z` in the live response. The generator uses `new Date()`, so rebuilds can signal a change to untouched pages. | Set dates from reviewed content updates, CMS publication history or a maintained route-level source. Omit dates without a reliable source. | No |
| SEO-02 | P3 | Unknown English URL | `app/en/layout.tsx` and Next.js framework fallback | GET `/en/en15-404-probe` and inspect raw HTML. | Keep 404/noindex and provide an English recovery page with language, site context and a home link. | HTTP 404 and `noindex` were correct. The default message rendered with unlabelled document language, no site styles and no recovery links, which can strand a visitor or hinder language selection by assistive technology. | Add a narrowly scoped branded fallback that preserves HTTP 404 and crawler exclusion in each locale. | No |
| SEO-03 | P3 | 12 completed English routes | `app/seo.ts:61–73` and the six page metadata blocks | Fetch the route HTML and inspect `og:image` and `twitter:image`. | For richer sharing, return a representative image alongside existing share text. | Neither image property is present. Social previews may be text-only. Canonicals and robots behavior passed. | If desired, add one approved brand/share image and route-specific images where valuable. | No |
| BUS-01 | P3, confirmation | English footer, privacy, cookies and structured data | `components/layout/SiteFooterEn.tsx:42–57`, `components/common/StructuredData.tsx:5–36`, `app/en/privacy/page.tsx:25`, `app/en/cookies/page.tsx:27` | Compare the published details and check business-owner records. | Footer, policies, schema and public profiles reflect confirmed business identity and address type. | Published names and contacts agree. The website labels Złota 75A/7 a mailing/correspondence address, and schema lists it as postal address. Its current status and any public office use were unverified. | Confirm entity name, NIP, REGON, ownership of phone, email, Telegram, WhatsApp and the separate Viber number (+380 67 976 29 88) and the current correspondence and public office arrangements before updating channels. | No |

## I. Recommended Remediation PRs

1. **P0 · Najem Split decimal input.** Prevent silent separator loss before calculation. Accept and normalize a single decimal comma or period, or show explicit invalid-input feedback before displaying a quote. Keep the existing gross commission, instalment count and final-grosz rules. Retest typing and paste, plus the corresponding Polish calculator behavior.
2. **P1 · Analytics withdrawal and policy review.** Make an analytics opt-out take effect in the current document and document how existing analytics storage is handled. Verify post-withdrawal behavior with intercepted requests. Have the business owner confirm active providers and align the English policy descriptions with deployed behavior.
3. **P1 · Cookie settings layout and accessibility.** Keep Close, Save settings and Reject optional reachable at 320 × 568 and 375 × 667. Add accessible dialog and checkbox semantics, keyboard dismissal and focus return.
4. **English form accessibility.** Add labels, input semantics, pending and outcome announcements, and phone validation while preserving the existing submission contract.
5. **English navigation and layout.** Restore unclipped hero content and readable header contrast, add a tenant-page link in the homepage journey, and address the keyboard and motion issues.
6. **Commercial copy.** Confirm the Split pilot status and the partnership capabilities, then update the relevant comparison and partnership copy.
7. **Image delivery and SEO maintenance.** Serve appropriately sized hero and logo files. Handle sitemap dates and service hreflang in the Polish technical SEO work. Track the generic 404 and Russian listing photo as separate small multilingual follow-ups.

## J. Polish SEO Handover

1. **Review Polish index eligibility.** The five Polish service routes still declaring `noindex, nofollow` are `/pl/najem-solo`, `/pl/najem-split`, `/pl/umowa-najmu`, `/pl/rzut-mieszkania` and `/pl/asystent-najmu`. `/pl/spacer-3d` already declares `index, follow`. Verify published content, canonicals and crawl eligibility before adding eligible URLs to the sitemap. Keep checklist placeholders out.
2. **Align the Polish tenant commission explanation.** `app/pl/rent/page.tsx:60–69` answers “Kto płaci prowizję?” with “Model rozliczenia ustalamy z góry i zapisujemy w umowie o współpracy. Bez niespodzianek na końcu procesu.” It also highlights “0 zł przedpłaty,” which concerns timing rather than commission. Explain separately the owner-paid brokerage with PLN 0 tenant agency commission and the independently commissioned search with individually agreed fees.
3. **Correct sitemap `lastmod`.** Replace build-date timestamps with dates tied to significant changes to content or metadata. Use maintainable per-page editorial dates or a source history process that accounts for shared data, and omit the field when a meaningful date cannot be established.
4. **Add reciprocal service hreflang after the Polish rollout.** Pair each eligible English service with its canonical Polish equivalent using reciprocal `en` and `pl` annotations. Add a Russian alternate only after a corresponding service exists, and use an `x-default` destination only where it represents an appropriate fallback for that service.
5. **Establish measurement.** Confirm ownership of the canonical site in Google Search Console, check the submitted sitemap and inspect representative Polish and English canonical URLs. Review the Google Business Profile with the owner for eligibility, category, service area, website link and agreed public contact details. Keep the correspondence address distinct from any customer-facing location and verify the legal name, NIP, REGON, telephone and email against current business records.
6. **Map Warsaw search intent to pages.** Research Polish landlord and tenant queries, Warsaw-specific service searches and the terms used for lease drafting, floor plans, virtual tours and rental assistance. Preserve a clear payment-timing distinction between Najem Solo and Najem Split, and test whether the additional services are discoverable from high-intent pages. Record Search Console data before making ranking or traffic claims.
7. **Research AI-search visibility.** Sample Polish-language Warsaw real-estate questions, record the prompts, dates, responses and cited sources, and review whether the business and its services are represented accurately.

## Final Verdict

**NOT READY.** CALC-01 silently quotes a 100-fold commission for the reproduced decimal-comma entry. EN15-CONSENT-01 allows the loaded GA4 tag to attempt collection after opt-out. EN15-CONSENT-03 hides essential consent settings controls at 320 × 568. The six English service pages remain eligible for indexing. Actual Google indexing was outside the verified results.
