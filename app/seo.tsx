import type { Metadata } from "next";

export const siteUrl = "https://amirraza.me";
export const siteName = "Amir Raza";
export const lastUpdated = "2026-11-23";
const defaultImage = { url: "/og/amir-raza-portfolio.jpg", width: 1200, height: 630, alt: "Amir Raza portfolio: Shopify stores and Meta Ads, 9,314 verified sales at 4.78X ROAS" };

type Img = { url: string; width?: number; height?: number; alt: string };

/** Full metadata for a page: canonical, Open Graph and Twitter all point at the same URL and title. */
export function pageMeta({ title, description, path, image, keywords, type = "website" }: { title: string; description: string; path: string; image?: Img; keywords?: string[]; type?: "website" | "article" | "profile" }): Metadata {
  const img = image ?? defaultImage;
  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: { type, url: path, siteName, locale: "en_US", title, description, images: [img] },
    twitter: { card: "summary_large_image", title, description, images: [img.url] },
  };
}

/** WebPage + BreadcrumbList + speakable (voice assistants read the selected text aloud). */
export function PageSchema({ path, name, description, crumbs, speakable, type = "WebPage", extra }: { path: string; name: string; description: string; crumbs: [string, string][]; speakable?: string[]; type?: string; extra?: Record<string, unknown> }) {
  const url = `${siteUrl}${path}`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: "en",
        dateModified: lastUpdated,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#business` },
        author: { "@id": `${siteUrl}/#person` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        primaryImageOfPage: { "@type": "ImageObject", url: `${siteUrl}/images/amir-raza.webp` },
        ...(speakable ? { speakable: { "@type": "SpeakableSpecification", cssSelector: speakable } } : {}),
        ...extra,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [["Home", "/"], ...crumbs].map(([n, p], i) => ({ "@type": "ListItem", position: i + 1, name: n, item: `${siteUrl}${p}` })),
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
