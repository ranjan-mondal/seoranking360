"use client";

import React from "react";
import { Lightbulb, Handshake, ShieldCheck, BarChart3 } from "lucide-react";
import { aboutValuesData } from "@/data/about";
import {
  MotionSection,
  MotionFade,
  MotionStagger,
} from "@/components/motion";

const VALUE_ICONS = [
  <Lightbulb className="h-6 w-6" key="icon-0" />,
  <Handshake className="h-6 w-6" key="icon-1" />,
  <ShieldCheck className="h-6 w-6" key="icon-2" />,
  <BarChart3 className="h-6 w-6" key="icon-3" />,
];

export function AboutValues() {
  return (
    <MotionSection className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-6 lg:px-8 xl:px-0 text-center">
        <MotionFade direction="up">
          <span className="inline-flex rounded-full bg-[#fff8ea] border border-[#ffeed0] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#df8a25]">
            {aboutValuesData.badge}
          </span>
          <h2 className="mt-3 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#07192d]">
            {aboutValuesData.titlePart1}
            <span className="text-[#1e40af]">{aboutValuesData.titleHighlight}</span>
            {aboutValuesData.titlePart2}
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-slate-600">
            {aboutValuesData.subtitle}
          </p>
        </MotionFade>

        <MotionStagger
          className="mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
          stagger={0.08}
        >
          {aboutValuesData.items.map((item, idx) => (
            <div
              className="rounded-2xl bg-[#041d2e] p-4 sm:p-8 text-center text-white shadow-lg border border-white/5 flex flex-col items-center justify-center transition-transform hover:-translate-y-1"
              key={item.name}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#07253d] text-[#ffbd12] border border-amber-400/20 shadow-inner">
                {VALUE_ICONS[idx] || <Lightbulb className="h-6 w-6" />}
              </div>
              <h3 className="mt-4 text-sm sm:text-lg font-bold text-white">
                {item.name}
              </h3>
              <p className="mt-1 text-[11px] sm:text-xs text-slate-400">
                {item.caption}
              </p>
            </div>
          ))}
        </MotionStagger>
      </div>
    </MotionSection>
  );
}

export default AboutValues;
