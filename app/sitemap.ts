import type { MetadataRoute } from "next";

const baseUrl = "https://www.serpakowski.pl";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/pl`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/pl/rent`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pl/landlord`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pl/wspolpraca`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pl/najem-solo`,
    },
    {
      url: `${baseUrl}/pl/najem-split`,
    },
    {
      url: `${baseUrl}/pl/umowa-najmu`,
    },
    {
      url: `${baseUrl}/pl/rzut-mieszkania`,
    },
    {
      url: `${baseUrl}/pl/asystent-najmu`,
    },
    {
      url: `${baseUrl}/pl/spacer-3d`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pl/polityka-prywatnosci`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/pl/polityka-cookies`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/ru`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/ru/rent`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ru/landlord`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ru/wspolpraca`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ru/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/ru/cookies`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/en`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/en/rent`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/landlord`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/partnership`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/en/cookies`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/en/najem-solo`,
    },
    {
      url: `${baseUrl}/en/najem-split`,
    },
    {
      url: `${baseUrl}/en/umowa-najmu`,
    },
    {
      url: `${baseUrl}/en/rzut-mieszkania`,
    },
    {
      url: `${baseUrl}/en/spacer-3d`,
    },
    {
      url: `${baseUrl}/en/asystent-najmu`,
    },
  ];
}
