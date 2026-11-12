import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function FooterBottom() {
  return (
    <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
      <p>© {siteConfig.year || 2026} {siteConfig.name}. All rights reserved.</p>
      <div className="flex gap-7">
        <Link className="transition-colors hover:text-white" href="/privacy">
          Privacy Policy
        </Link>
        <Link className="transition-colors hover:text-white" href="/terms">
          Terms &amp; Conditions
        </Link>
      </div>
    </div>
  );
}

export default FooterBottom;
