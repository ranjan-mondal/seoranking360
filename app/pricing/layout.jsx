import React from "react";
import { pricingPlans } from "@/data/pricing";

export const metadata = {
  title: "SEO Pricing Plans & Packages | SEO Ranking360",
  description:
    "Flexible plans for every business. Transparent SEO pricing with no hidden fees and cancel anytime flexibility.",
  alternates: {
    canonical: "https://seoranking360.com/pricing",
  },
  openGraph: {
    title: "SEO Pricing Plans & Packages | SEO Ranking360",
    description:
      "Flexible plans for every business. Transparent SEO pricing with no hidden fees and cancel anytime flexibility.",
    url: "https://seoranking360.com/pricing",
  },
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "SEO Ranking360 Services",
  description: "Comprehensive SEO and digital marketing services.",
  offers: pricingPlans.map((plan) => ({
    "@type": "Offer",
    name: plan.name,
    description: plan.tagline,
    price: plan.isCustom ? "Custom" : String(plan.monthlyPrice),
    priceCurrency: "USD",
    url: "https://seoranking360.com/pricing",
  })),
};

export default function PricingLayout({ children }) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
        type="application/ld+json"
      />
      {children}
    </>
  );
}
