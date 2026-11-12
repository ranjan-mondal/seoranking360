import React from "react";

export const metadata = {
  title: "Email & SMS Marketing Services | SEO Ranking360",
  description:
    "Turn subscribers into repeat buyers with automated retention. Custom Klaviyo & Mailchimp flows, high-converting SMS campaigns, and predictive segmentation.",
  alternates: {
    canonical: "https://seoranking360.com/services",
  },
  openGraph: {
    title: "Email & SMS Marketing Services | SEO Ranking360",
    description:
      "Turn subscribers into repeat buyers with automated retention. Custom Klaviyo & Mailchimp flows, high-converting SMS campaigns, and predictive segmentation.",
    url: "https://seoranking360.com/services",
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Email & SMS Marketing Services",
  provider: {
    "@type": "Organization",
    name: "SEO Ranking360",
    url: "https://seoranking360.com",
  },
  areaServed: "Worldwide",
  description:
    "Custom Klaviyo & Mailchimp flows, high-converting SMS campaigns, and predictive segmentation designed to maximize customer lifetime value.",
};

export default function ServicesLayout({ children }) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
        type="application/ld+json"
      />
      {children}
    </>
  );
}

