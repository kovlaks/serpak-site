import type { Metadata } from "next";

const SITE_URL = "https://www.serpakowski.pl";
const SITE_NAME = "SERPAKOWSKI Nieruchomości";

type SeoLocale = "pl_PL" | "ru_RU" | "en_US";

type HreflangAlternates = {
  pl: string;
  ru: string;
  en: string;
  "x-default": string;
};

export const seoAlternates = {
  home: buildAlternates({ pl: "/pl", ru: "/ru", en: "/en", "x-default": "/pl" }),
  rent: buildAlternates({ pl: "/pl/rent", ru: "/ru/rent", en: "/en/rent", "x-default": "/pl/rent" }),
  landlord: buildAlternates({ pl: "/pl/landlord", ru: "/ru/landlord", en: "/en/landlord", "x-default": "/pl/landlord" }),
  partnership: buildAlternates({
    pl: "/pl/wspolpraca",
    ru: "/ru/wspolpraca",
    en: "/en/partnership",
    "x-default": "/pl/wspolpraca",
  }),
  privacy: buildAlternates({
    pl: "/pl/polityka-prywatnosci",
    ru: "/ru/privacy",
    en: "/en/privacy",
    "x-default": "/pl/polityka-prywatnosci",
  }),
  cookies: buildAlternates({
    pl: "/pl/polityka-cookies",
    ru: "/ru/cookies",
    en: "/en/cookies",
    "x-default": "/pl/polityka-cookies",
  }),
} satisfies Record<string, HreflangAlternates>;

export function createSeoMetadata({
  title,
  description,
  canonicalPath,
  languages,
  locale,
}: {
  title: string;
  description: string;
  canonicalPath: string;
  languages: HreflangAlternates;
  locale: SeoLocale;
}): Metadata {
  const canonical = absoluteUrl(canonicalPath);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      locale,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

function buildAlternates(paths: Record<keyof HreflangAlternates, string>): HreflangAlternates {
  return {
    pl: absoluteUrl(paths.pl),
    ru: absoluteUrl(paths.ru),
    en: absoluteUrl(paths.en),
    "x-default": absoluteUrl(paths["x-default"]),
  };
}

function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}
