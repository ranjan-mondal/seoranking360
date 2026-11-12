export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: "https://seoranking360.com/sitemap.xml",
    host: "https://seoranking360.com",
  };
}

