// Centralni SEO config. Zamenite SITE_URL vašim pravim domenom kada objavite sajt.
export const SITE_URL = "https://folkloroprema.rs";

export const fullUrl = (path) => `${SITE_URL}${path || ""}`;

export function breadcrumbList(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: fullUrl(it.path),
    })),
  };
}

export function productSchema({ name, description, image, category }) {
  const s = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    brand: { "@type": "Brand", name: "Folklor Oprema" },
  };
  if (image) s.image = image;
  if (category) s.category = category;
  return s;
}

export function faqPage(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.pitanje,
      acceptedAnswer: { "@type": "Answer", text: q.odgovor },
    })),
  };
}