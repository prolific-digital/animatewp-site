import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.animatewp.com/",
      lastModified: new Date("2024-07-31T17:33:59Z"),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
