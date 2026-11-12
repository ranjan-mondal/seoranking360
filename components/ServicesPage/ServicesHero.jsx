"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, Check } from "lucide-react";
import { servicesHeroData } from "@/data/servicesPage";
import { RetentionDashboardCard } from "./RetentionDashboardCard";
import {
  MotionSection,
  MotionFade,
  MotionInteractive,
} from "@/components/motion";

export function ServicesHero() {
  const {
    breadcrumbs,
    badge,
    titlePart1,
    titleHighlight,
    titlePart2,
    description,
    primaryCtaText,
    primaryCtaHref,
    phoneText,
    phoneHref,
    partnerBadges,
  } = servicesHeroData;

  return (
    <MotionSection className="bg-white py-10 sm:py-16 lg:py-20" viewportAmount={0.1}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-6 lg:px-8 xl:px-0">
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-slate-400 overflow-x-auto no-scrollbar whitespace-nowrap"
        >
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <React.Fragment key={crumb.label}>
                {crumb.href ? (
                  <Link className="transition-colors hover:text-[#07192d]" href={crumb.href}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-medium text-slate-600">{crumb.label}</span>
                )}
                {!isLast && <span>/</span>}
              </React.Fragment>
            );
          })}
        </nav>

        <div className="grid gap-10 lg:grid-cols-2 items-center lg:gap-16">
          <MotionFade className="space-y-6" direction="up">
            <span className="inline-flex rounded-full bg-[#fff8ea] border border-[#ffeed0] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#df8a25]">
              {badge}
            </span>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#07192d] leading-[1.1] break-words">
              {titlePart1}
              <span className="text-[#2d6ca5]">{titleHighlight}</span>
              {titlePart2}
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <MotionInteractive>
                <Link
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#ffc329] to-[#ff9f0b] px-6 py-3.5 text-sm sm:text-base font-bold text-[#071d2b] shadow-[0_12px_24px_rgba(255,174,17,0.22)] min-h-[48px] text-center"
                  href={primaryCtaHref}
                >
                  {primaryCtaText}
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>
              </MotionInteractive>

              <MotionInteractive>
                <a
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#f0f4f9] px-6 py-3.5 text-sm sm:text-base font-semibold text-[#071d2b] transition-colors hover:bg-[#e2e9f3] min-h-[48px] text-center"
                  href={phoneHref}
                >
                  <Phone className="h-4 w-4 text-slate-600 shrink-0" />
                  {phoneText}
                </a>
              </MotionInteractive>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 pt-4 text-xs font-bold text-slate-500 uppercase tracking-wide">
              {partnerBadges.map((partner) => (
                <span className="flex items-center gap-2" key={partner}>
                  <Check className="h-4 w-4 text-emerald-500 stroke-[3]" />
                  {partner}
                </span>
              ))}
            </div>
          </MotionFade>

          <MotionFade className="w-full" delay={0.15} direction="up">
            <RetentionDashboardCard />
          </MotionFade>
        </div>
      </div>
    </MotionSection>
  );
}

export default ServicesHero;
