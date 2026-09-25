import { useEffect } from "react";
import { SITE_URL } from "@/lib/seo";

// Lagan, bezbednosni SEO upravljač za SPA: postavlja title, meta description,
// canonical, OG tagove i ubacuje JSON-LD podatke po stranici. Ne izmišlja nikakve
// podatke — samo renderuje ono što mu proslediš. Uklanja prethodne JSON-LD oznake.
const JSONLD_MARK = "data-seo-jsonld";

function setMeta(key, content, attr = "name") {
  const sel = `meta[${attr}="${key}"]`;
  const existing = document.head.querySelector(sel);
  if (!content) {
    existing?.remove();
    return;
  }
  const el = existing || document.createElement("meta");
  el.setAttribute(attr, key);
  el.setAttribute("content", content);
  if (!existing) document.head.appendChild(el);
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function Seo({ title, description, path, jsonLd = [] }) {
  useEffect(() => {
    document.title = title;
    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("twitter:card", "summary_large_image");
    setLink("canonical", `${SITE_URL}${path || ""}`);

    document.head.querySelectorAll(`script[${JSONLD_MARK}]`).forEach((s) => s.remove());
    jsonLd.forEach((obj) => {
      if (!obj) return;
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute(JSONLD_MARK, "1");
      s.text = JSON.stringify(obj);
      document.head.appendChild(s);
    });

    return () => {
      document.head.querySelectorAll(`script[${JSONLD_MARK}]`).forEach((s) => s.remove());
    };
  }, [title, description, path, JSON.stringify(jsonLd)]);

  return null;
}