"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Rocket, Star, Globe } from "lucide-react";
import { aboutHeroData, aboutStatsData } from "@/data/about";
import {
  MotionSection,
  MotionFade,
  MotionInteractive,
} from "@/components/motion";

export function AboutHero() {
  return (
    <MotionSection className="bg-[#031d2b] py-12 sm:py-20 lg:py-24 text-white border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-6 lg:px-8 xl:px-0">
        <div className="grid gap-10 lg:grid-cols-2 items-center lg:gap-16">
          <MotionFade direction="up">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>{aboutHeroData.badge}</span>
            </div>

            <h1 className="mt-5 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] break-words">
              {aboutHeroData.titlePart1}
              <span className="text-[#ffb511]">{aboutHeroData.titleHighlight}</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-slate-300">
              {aboutHeroData.description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <MotionInteractive>
                <Link
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#ffc329] to-[#ff9f0b] px-7 py-3.5 text-sm sm:text-base font-bold text-[#07192d] shadow-lg shadow-amber-500/20 min-h-[48px] text-center"
                  href={aboutHeroData.primaryCtaHref}
                >
                  {aboutHeroData.primaryCtaText}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </MotionInteractive>
              <MotionInteractive>
                <a
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-white/10 min-h-[48px] text-center"
                  href={aboutHeroData.secondaryCtaHref}
                >
                  {aboutHeroData.secondaryCtaText}
                </a>
              </MotionInteractive>
            </div>
          </MotionFade>

          <MotionFade className="relative" delay={0.15} direction="up">
            <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <Image
                alt="2 Digit Innovations team collaborating in office"
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                src={aboutHeroData.heroImage}
              />
              <div className="absolute top-4 right-4 h-24 w-32 sm:h-28 sm:w-36 overflow-hidden rounded-2xl border-2 border-white/20 shadow-xl hidden sm:block">
                <Image
                  alt="Team celebrating collaboration"
                  className="object-cover"
                  fill
                  sizes="144px"
                  src={aboutHeroData.insetImage}
                />
              </div>
            </div>
          </MotionFade>
        </div>

        <MotionFade
          className="mt-12 sm:mt-16 rounded-2xl bg-[#052236]/80 border border-white/10 p-5 sm:p-8 backdrop-blur-sm shadow-xl"
          delay={0.2}
          direction="up"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center md:divide-x divide-white/10">
            <div className="p-2 sm:p-0">
              <Users className="mx-auto h-5 w-5 text-[#ffbd12]" />
              <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {aboutStatsData[0].value}
              </p>
              <p className="mt-1 text-xs text-slate-400">{aboutStatsData[0].label}</p>
            </div>
            <div className="p-2 sm:p-0">
              <Rocket className="mx-auto h-5 w-5 text-[#ffbd12]" />
              <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {aboutStatsData[1].value}
              </p>
              <p className="mt-1 text-xs text-slate-400">{aboutStatsData[1].label}</p>
            </div>
            <div className="p-2 sm:p-0">
              <Star className="mx-auto h-5 w-5 text-[#ffbd12] fill-[#ffbd12]" />
              <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {aboutStatsData[2].value}
              </p>
              <p className="mt-1 text-xs text-slate-400">{aboutStatsData[2].label}</p>
            </div>
            <div className="p-2 sm:p-0">
              <Globe className="mx-auto h-5 w-5 text-[#ffbd12]" />
              <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {aboutStatsData[3].value}
              </p>
              <p className="mt-1 text-xs text-slate-400">{aboutStatsData[3].label}</p>
            </div>
          </div>
        </MotionFade>
      </div>
    </MotionSection>
  );
}

export default AboutHero;
