import React from "react";
import Link from "next/link";
import { ChartNoAxesColumn } from "lucide-react";
import { siteConfig } from "@/config/site";

export function BrandLogo({ className = "" }) {
  return (
    <Link
      aria-label={`${siteConfig.name} home`}
      className={`flex shrink-0 items-center gap-2.5 sm:gap-3 ${className}`}
      href="/"
    >
      <span className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-[#ffb511] text-[#031d2b] shadow-sm">
        <ChartNoAxesColumn className="w-5 sm:w-6" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[18px] xs:text-[20px] sm:text-[23px] font-bold tracking-[-0.6px] sm:tracking-[-1px]">
          <span className="text-white">SEO</span>
          <span className="text-[#ffb511]">Ranking360</span>
        </span>
        <span className="mt-0.5 sm:mt-1 text-[9px] sm:text-[10px] font-medium tracking-[0.2px] text-slate-300">
          {siteConfig.tagline}
        </span>
      </span>
    </Link>
  );
}

export default BrandLogo;
