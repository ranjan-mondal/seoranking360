"use client";

import React from "react";
import Image from "next/image";
import { Rocket, Target, Eye } from "lucide-react";
import { aboutStoryData } from "@/data/about";
import {
  MotionSection,
  MotionFade,
  MotionStagger,
} from "@/components/motion";

export function AboutStory() {
  return (
    <MotionSection className="bg-white py-12 sm:py-20 lg:py-24" id="our-story">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-6 lg:px-8 xl:px-0">
        <div className="grid gap-10 lg:grid-cols-2 items-center lg:gap-16">
          <MotionFade className="relative" direction="up">
            <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full max-w-[560px] overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-300 shadow-xl">
              <Image
                alt="2 Digit Innovations corporate headquarters"
                className="object-cover object-center"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                src={aboutStoryData.image}
              />
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-[#031d2b] text-[#38bdf8] shadow-lg border border-white/10">
                <Rocket className="h-5 w-5" />
              </div>
            </div>
          </MotionFade>

          <MotionFade className="space-y-5" delay={0.15} direction="up">
            <span className="inline-flex rounded-full bg-[#fff8ea] border border-[#ffeed0] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#df8a25]">
              {aboutStoryData.badge}
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#07192d] leading-tight break-words">
              {aboutStoryData.titlePart1}
              <span className="text-[#1e40af]">{aboutStoryData.titleHighlight}</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              {aboutStoryData.p1Part1}
              <strong className="font-semibold text-slate-900">{aboutStoryData.p1Bold}</strong>
              {aboutStoryData.p1Part2}
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              {aboutStoryData.p2}
            </p>
          </MotionFade>
        </div>

        <MotionStagger className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6" stagger={0.1}>
          <div className="rounded-2xl bg-[#041d2e] p-5 sm:p-8 text-white shadow-lg border border-white/5 flex flex-col xs:flex-row items-start gap-4 sm:gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#07253d] border border-amber-400/20 text-[#ffbd12] shadow-inner">
              <Target className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {aboutStoryData.mission.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                To empower businesses with innovative and user-centric digital solutions that{" "}
                <strong className="font-semibold text-white">
                  {aboutStoryData.mission.highlightText}
                </strong>
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#041d2e] p-5 sm:p-8 text-white shadow-lg border border-white/5 flex flex-col xs:flex-row items-start gap-4 sm:gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#07253d] border border-amber-400/20 text-[#ffbd12] shadow-inner">
              <Eye className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {aboutStoryData.vision.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                {aboutStoryData.vision.description}
              </p>
            </div>
          </div>
        </MotionStagger>
      </div>
    </MotionSection>
  );
}

export default AboutStory;
