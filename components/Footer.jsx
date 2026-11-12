import React from "react";
import FooterBrand from "./Footer/FooterBrand";
import FooterLinksColumn from "./Footer/FooterLinksColumn";
import NewsletterForm from "./Footer/NewsletterForm";
import FooterBottom from "./Footer/FooterBottom";
import { footerQuickLinks, footerServices } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-[#031d2b] pb-7 pt-14 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-6 lg:px-8 xl:px-0">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-[1.65fr_0.85fr_0.95fr_1fr] lg:gap-16">
          <FooterBrand />
          <FooterLinksColumn links={footerQuickLinks} title="Quick Links" />
          <FooterLinksColumn links={footerServices} title="Our Services" />
          <NewsletterForm />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}

export default Footer;
