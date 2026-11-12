import React from "react";
import {
  ServicesHero,
  WhatWeDeliver,
  ProcessSteps,
  AuditCtaSection,
} from "@/components/ServicesPage";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServicesHero />

      <WhatWeDeliver />

      <section className="py-10 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-6 lg:px-8 xl:px-0">
          <ProcessSteps />
          <AuditCtaSection />
        </div>
      </section>
    </div>
  );
}
