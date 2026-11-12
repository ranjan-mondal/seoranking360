import React from "react";

export const metadata = {
  title: "About Us | Building Digital Solutions for a Smarter Tomorrow | SEO Ranking360",
  description:
    "At 2 Digit Innovations, we are more than just a tech company — we are a team of passionate thinkers, creators and problem solvers bridging the gap between ideas and technology.",
  alternates: {
    canonical: "https://seoranking360.com/about",
  },
  openGraph: {
    title: "About Us | Building Digital Solutions for a Smarter Tomorrow",
    description:
      "At 2 Digit Innovations, we are more than just a tech company — we are a team of passionate thinkers, creators and problem solvers bridging the gap between ideas and technology.",
    url: "https://seoranking360.com/about",
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About 2 Digit Innovations",
  description:
    "Building digital solutions for a smarter tomorrow. Over 370+ happy clients and 100+ projects delivered.",
  mainEntity: {
    "@type": "Organization",
    name: "2 Digit Innovations",
    url: "https://seoranking360.com",
    numberOfEmployees: "50-100",
    foundingDate: "2018",
  },
};

export default function AboutLayout({ children }) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
        type="application/ld+json"
      />
      {children}
    </>
  );
}

