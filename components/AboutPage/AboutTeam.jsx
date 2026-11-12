"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, ArrowRight } from "lucide-react";
import { aboutTeamData } from "@/data/about";
import {
  MotionSection,
  MotionFade,
  MotionInteractive,
} from "@/components/motion";

export function AboutTeam() {
  return (
    <MotionSection className="bg-[#031d2b] py-12 sm:py-20 lg:py-24 text-white border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-6 lg:px-8 xl:px-0">
        <div className="grid gap-10 lg:grid-cols-2 items-center lg:gap-16">
          <MotionFade className="relative" direction="up">
            <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full max-w-[560px] overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 shadow-2xl">
              <Image
                alt="2 Digit Innovations design and engineering specialists"
                className="object-cover object-center"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                src={aboutTeamData.image}
              />
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-white text-[#2d6ca5] shadow-lg">
                <Users className="h-5 w-5" />
              </div>
            </div>
          </MotionFade>

          <MotionFade className="space-y-6" delay={0.15} direction="up">
            <span className="inline-flex rounded-full bg-[#fff8ea]/15 border border-[#ffbd12]/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#ffbd12]">
              {aboutTeamData.badge}
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight break-words">
              {aboutTeamData.titlePart1}
              <span className="text-[#ffbd12]">{aboutTeamData.titleHighlight}</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-300 max-w-xl">
              {aboutTeamData.description}
            </p>
            <div className="pt-2">
              <MotionInteractive>
                <Link
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#ffc329] to-[#ff9f0b] px-7 py-3.5 text-sm sm:text-base font-bold text-[#07192d] shadow-lg shadow-amber-500/20 min-h-[48px] text-center"
                  href={aboutTeamData.ctaHref}
                >
                  {aboutTeamData.ctaText}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </MotionInteractive>
            </div>
          </MotionFade>
        </div>
      </div>
    </MotionSection>
  );
}

export default AboutTeam;
