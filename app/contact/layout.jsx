import React from "react";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Contact Us for a Free SEO Proposal | SEO Ranking360",
  description:
    "Get a complimentary SEO ranking audit and custom revenue growth proposal within one business day from the team behind $3.4B+ in client revenue.",
  alternates: {
    canonical: "https://seoranking360.com/contact",
  },
  openGraph: {
    title: "Contact Us for a Free SEO Proposal | SEO Ranking360",
    description:
      "Get a complimentary SEO ranking audit and custom revenue growth proposal within one business day from the team behind $3.4B+ in client revenue.",
    url: "https://seoranking360.com/contact",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact SEO Ranking360",
  description: "Get in touch with our SEO specialists for a customized organic growth roadmap.",
  mainEntity: {
    "@type": "ProfessionalService",
    name: "SEO Ranking360",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: "https://seoranking360.com",
    openingHours: "Mo-Fr 09:00-18:00",
  },
};

export default function ContactLayout({ children }) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
        type="application/ld+json"
      />
      {children}
    </>
  );
}

