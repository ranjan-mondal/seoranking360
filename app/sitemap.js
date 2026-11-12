import { blogPostsData } from "@/data/blogs";

export default function sitemap() {
  const baseUrl = "https://seoranking360.com";

  // Core static pages
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  // Dynamic blog post articles
  const blogRoutes = blogPostsData.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date("2026-03-01"),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes];
}

