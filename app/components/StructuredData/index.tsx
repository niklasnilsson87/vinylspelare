export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Thorens Vinylspelare Restaurering",
    "description": "Professionell restaurering av Thorens vinylspelare. Specialiserad på TD 124 med totalrenoveringar och högkvalitativ hantverk.",
    "url": "https://y-sigma-sable.vercel.app/",
    "email": "info@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SE",
      "addressLocality": "Sverige"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Sweden"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vinylspelare Restaurering Tjänster",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Thorens TD 124 Totalrenovering",
            "description": "Komplett restaurering av Thorens TD 124 vinylspelare med ny plint i massivt trä"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Thorens Tonarm Reparering",
            "description": "Reparering och justering av Thorens tonarmar"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Träplint Tillverkning",
            "description": "Tillverkning av plintar/lådor i amerikansk valnöt, ek och bok"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
