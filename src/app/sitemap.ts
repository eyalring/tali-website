import type { MetadataRoute } from "next";
import { posts } from "./blog/posts";

const baseUrl = "https://drtalisufrinringwald.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const blogEntries = posts
    .filter((post) => post.description.trim().length > 0)
    .map((post) => ({
      url: `${baseUrl}/blog/${post.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...staticEntries, ...blogEntries];
}

