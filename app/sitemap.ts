import type { MetadataRoute } from "next";
import { projects } from "./data";

const siteUrl = "https://amirraza.me";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/portfolio`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/case-studies`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/results`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/daraz-management`, changeFrequency: "monthly", priority: 0.7 },
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = projects
    .filter((p) => p.caseStudy)
    .map((p) => ({
      url: `${siteUrl}/case-studies/${p.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [...staticRoutes, ...caseStudyRoutes];
}
