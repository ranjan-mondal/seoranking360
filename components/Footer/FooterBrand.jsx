import React from "react";
import Link from "next/link";
import { BarChart3 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/data/navigation";

export function FooterBrand() {
  return (
    <div>
      <Link
        aria-label={`${siteConfig.name} home`}
        className="inline-flex items-center gap-3"
        href="/"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ffb511] text-[#031d2b]">
          <BarChart3 className="h-6 w-6" />
        </span>
        <span className="flex flex-col leading-none">
          <span className="text-[23px] font-bold tracking-[-1px]">
            <span className="text-white">SEO</span>
            <span className="text-[#ffb511]">Ranking360</span>
          </span>
          <span className="mt-1 text-[10px] font-medium tracking-[0.3px] text-white">
            {siteConfig.tagline}
          </span>
        </span>
      </Link>

      <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
        We help businesses rank higher on search engines, attract the right audience and turn clicks
        into customers with result-driven SEO strategies.
      </p>

      <div className="mt-7 flex gap-3">
        {socialLinks.map(({ label, href, icon }) => (
          <a
            aria-label={label}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1c344b] text-slate-200 transition-colors hover:bg-[#ffb511] hover:text-[#031d2b]"
            href={href}
            key={label}
            rel="noreferrer"
            target="_blank"
          >
            <span className="text-xs font-bold">{icon}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default FooterBrand;

