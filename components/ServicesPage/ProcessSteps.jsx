"use client";

import React from "react";
import { processStepsData } from "@/data/servicesPage";
import { MotionSection, MotionFade, MotionStagger } from "@/components/motion";

export function ProcessSteps() {
  const { badge, title, subtitle, steps } = processStepsData;

  return (
    <div className="py-6 sm:py-10">
      <MotionFade className="text-center max-w-2xl mx-auto" direction="up">
        <span className="text-xs font-bold uppercase tracking-wider text-[#df8a25]">
          {badge}
        </span>
        <h2 className="mt-2 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#07192d] tracking-tight">
          {title}
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
          {subtitle}
        </p>
      </MotionFade>

      <MotionStagger
        className="mt-10 sm:mt-14 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4"
        stagger={0.08}
      >
        {steps.map((item) => (
          <div className="rounded-xl p-2 sm:p-0" key={item.step}>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#df8a25] font-mono">
              {item.step}
            </p>
            <h3 className="mt-3 text-base sm:text-lg font-bold text-[#07192d]">
              {item.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
              {item.description}
            </p>
          </div>
        ))}
      </MotionStagger>
    </div>
  );
}

export default ProcessSteps;
