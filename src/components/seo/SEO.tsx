import { useEffect } from "react";

type JsonLd =
  | Record<string, unknown>
  | Array<Record<string, unknown>>;

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  robots?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  jsonLd?: JsonLd;
}

function upsertMetaByName(name: string, content: string) {
  let meta = document.head.querySelector(
    `meta[name="${name}"]`
  ) as HTMLMetaElement | null;

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", name);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}

function upsertMetaByProperty(property: string, content: string) {
  let meta = document.head.querySelector(
    `meta[property="${property}"]`
  ) as HTMLMetaElement | null;

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let link = document.head.querySelector(
    'link[rel="canonical"]'
  ) as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
}

function upsertJsonLd(jsonLd: JsonLd) {
  const existing = document.getElementById("seo-json-ld");
  if (existing) {
    existing.remove();
  }

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = "seo-json-ld";
  script.text = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}

export default function SEO({
  title,
  description,
  canonical,
  keywords,
  robots = "index, follow",
  ogTitle,
  ogDescription,
  ogType = "website",
  ogImage,
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    const currentUrl =
      canonical || `${window.location.origin}${window.location.pathname}`;

    document.title = title;

    upsertMetaByName("description", description);
    upsertMetaByName("robots", robots);
    upsertMetaByName("twitter:card", "summary_large_image");
    upsertMetaByName("twitter:title", ogTitle || title);
    upsertMetaByName("twitter:description", ogDescription || description);

    if (keywords) {
      upsertMetaByName("keywords", keywords);
    }

    upsertMetaByProperty("og:title", ogTitle || title);
    upsertMetaByProperty("og:description", ogDescription || description);
    upsertMetaByProperty("og:type", ogType);
    upsertMetaByProperty("og:url", currentUrl);
    upsertMetaByProperty("og:locale", "pt_BR");

    if (ogImage) {
      upsertMetaByProperty("og:image", ogImage);
      upsertMetaByName("twitter:image", ogImage);
    }

    upsertCanonical(currentUrl);

    if (jsonLd) {
      upsertJsonLd(jsonLd);
    }
  }, [
    title,
    description,
    canonical,
    keywords,
    robots,
    ogTitle,
    ogDescription,
    ogType,
    ogImage,
    jsonLd,
  ]);

  return null;
}