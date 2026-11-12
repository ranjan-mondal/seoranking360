import React from "react";

export const metadata = {
  title: "Latest SEO Insights, Strategy Guides & Tips | SEO Ranking360",
  description:
    "Explore actionable SEO guides, technical audit checklists, keyword research tactics, and conversion strategies from industry experts.",
  alternates: {
    canonical: "https://seoranking360.com/blogs",
  },
  openGraph: {
    title: "Latest SEO Insights, Strategy Guides & Tips | SEO Ranking360",
    description:
      "Explore actionable SEO guides, technical audit checklists, keyword research tactics, and conversion strategies from industry experts.",
    url: "https://seoranking360.com/blogs",
  },
};

const blogsHubJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "SEO Ranking360 Blog & Resource Hub",
  description: "Actionable SEO tactics, keyword research masterclasses, and digital marketing strategies.",
  url: "https://seoranking360.com/blogs",
};

export default function BlogsLayout({ children }) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogsHubJsonLd) }}
        type="application/ld+json"
      />
      {children}
    </>
  );
}

