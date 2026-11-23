import type { Metadata } from "next";
import { projects } from "../data";
import { JsonLd, PageSchema, pageMeta } from "../seo";

export const metadata: Metadata = pageMeta({
  title: "Shopify Portfolio: 28 Ecommerce Store Projects | Amir Raza",
  description: "28 Shopify and ecommerce store projects by Amir Raza across beauty, fashion, electronics, home and general retail in Pakistan, the UAE and worldwide.",
  path: "/portfolio",
  keywords: ["Shopify portfolio Pakistan", "Shopify store examples", "ecommerce website designer Karachi", "Amir Raza portfolio"],
});

const list = { "@context": "https://schema.org", "@type": "ItemList", "@id": "https://amirraza.me/portfolio#projects", name: "Shopify and ecommerce store projects", numberOfItems: projects.length,
  itemListElement: projects.map((p, i) => ({ "@type": "ListItem", position: i + 1, item: { "@type": "CreativeWork", name: `${p.name} ecommerce store`, about: p.industry, creator: { "@id": "https://amirraza.me/#person" }, url: p.caseStudy ? `https://amirraza.me/case-studies/${p.slug}` : `https://${p.domain}`, image: `https://amirraza.me/images/scroll/${p.slug}-desktop.webp` } })) };

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>
    <PageSchema type="CollectionPage" path="/portfolio" name="Shopify portfolio by Amir Raza" description="28 Shopify and ecommerce storefront projects across industries." crumbs={[["Portfolio", "/portfolio"]]} speakable={[".page-hero h1", ".page-hero p"]} extra={{ mainEntity: { "@id": "https://amirraza.me/portfolio#projects" } }} />
    <JsonLd data={list} />
    {children}
  </>;
}
