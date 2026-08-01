import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const updatedAt = new Date();

  return [
    {
      url: siteConfig.siteUrl,
      lastModified: updatedAt,
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
