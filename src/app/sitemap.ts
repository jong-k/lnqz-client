import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      changeFrequency: "monthly",
      lastModified: new Date("2025-11-03"),
      priority: 1,
      url: "https://lnqz.site",
    },
  ];
}
