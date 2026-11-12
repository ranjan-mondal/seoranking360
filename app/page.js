import React from "react";
import HeroSection from "@/components/HomePage/HeroSection";
import OurServices from "@/components/HomePage/OurServices";
import ScoreSection from "@/components/HomePage/ScoreSection";
import AboutusSection from "@/components/HomePage/AboutusSection";
import BlogsSection from "@/components/HomePage/BlogsSection";
import Testimonials from "@/components/HomePage/Testimonials";
import ContactCTA from "@/components/HomePage/ContactCTA";

export const metadata = {
  title: "Expert SEO Marketing Services for Higher Rankings | SEO Ranking360",
  description:
    "Data-driven SEO strategies that deliver results. Get found, get more customers, and track real closed pipeline revenue with our Revenue Hub.",
  alternates: {
    canonical: "https://seoranking360.com",
  },
  openGraph: {
    title: "Expert SEO Marketing Services for Higher Rankings | SEO Ranking360",
    description:
      "Data-driven SEO strategies that deliver results. Get found, get more customers, and track real closed pipeline revenue with our Revenue Hub.",
    url: "https://seoranking360.com",
  },
};

const homePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SEO Ranking360",
  image: "https://seoranking360.com/images/SEOReport.png",
  url: "https://seoranking360.com",
  telephone: "+917814042409",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2100",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }}
        type="application/ld+json"
      />
      <div>
        <HeroSection />
        <OurServices />
        <ScoreSection />
        <AboutusSection />
        <BlogsSection />
        <Testimonials />
        <ContactCTA />
      </div>
    </>
  );
}
