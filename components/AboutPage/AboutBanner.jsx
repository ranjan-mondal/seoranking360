"use client";

import React from "react";
import Link from "next/link";
import { Send, ArrowRight } from "lucide-react";
import { aboutBannerData } from "@/data/about";

export function AboutBanner() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-6 lg:px-8 xl:px-0 pb-16 sm:pb-24">
      <div className="rounded-3xl bg-[#062438] border border-white/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="flex items-center gap-4 text-left">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/20 text-[#ffbd12] border border-amber-500/30">
            <Send className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {aboutBannerData.title}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">
              {aboutBannerData.subtitle}
            </p>
          </div>
        </div>
        <Link
          className="shrink-0 rounded-full bg-linear-to-r from-[#ffc329] to-[#ff9f0b] px-7 py-3.5 text-sm sm:text-base font-bold text-[#07192d] shadow-lg shadow-amber-500/25 transition-transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 whitespace-nowrap"
          href={aboutBannerData.ctaHref}
        >
          {aboutBannerData.ctaText}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export default AboutBanner;

