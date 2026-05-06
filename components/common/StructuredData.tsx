const realEstateAgentSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": "https://www.serpakowski.pl/#realestateagent",
  name: "SERPAKOWSKI Nieruchomości",
  url: "https://www.serpakowski.pl",
  telephone: "+48 453 053 969",
  email: "kontakt@serpakowski.pl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Złota 75A/7",
    postalCode: "00-819",
    addressLocality: "Warszawa",
    addressCountry: "PL",
  },
  areaServed: {
    "@type": "City",
    name: "Warszawa",
  },
  founder: {
    "@type": "Person",
    name: "Serhii Kovlak",
  },
  identifier: [
    {
      "@type": "PropertyValue",
      propertyID: "NIP",
      value: "1133184502",
    },
    {
      "@type": "PropertyValue",
      propertyID: "REGON",
      value: "543202915",
    },
  ],
  knowsLanguage: ["pl", "ru", "uk", "en"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.serpakowski.pl/#website",
  url: "https://www.serpakowski.pl",
  name: "SERPAKOWSKI Nieruchomości",
  inLanguage: ["pl", "ru", "en"],
};

export function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
