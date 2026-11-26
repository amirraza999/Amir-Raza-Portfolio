import type { MetadataRoute } from "next";
import { projectThumbnail, projects } from "./data";

const siteUrl = "https://amirraza.me";
const lastModified = new Date("2026-11-23");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "weekly", priority: 1, images: [`${siteUrl}/images/amir-raza.webp`] },
    { url: `${siteUrl}/services`, lastModified, changeFrequency: "monthly", priority: 0.9, images: ["shopify", "woocommerce", "meta-ads", "google-ads", "tiktok-ads", "landing-page-cro", "ad-creatives", "ecommerce-strategy"].map((i) => `${siteUrl}/images/services/${i}.webp`) },
    { url: `${siteUrl}/portfolio`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/case-studies`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/results`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/reviews`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/cv`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/daraz-management`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = projects
    .filter((p) => p.caseStudy)
    .map((p) => ({
      url: `${siteUrl}/case-studies/${p.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
      images: [`${siteUrl}${projectThumbnail(p)}`],
    }));

  return [...staticRoutes, ...caseStudyRoutes];
}
