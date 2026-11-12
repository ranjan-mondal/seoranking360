"use client";

import React from "react";
import { RotateCcw, MessageSquare, PieChart, ShieldCheck } from "lucide-react";
import { whatWeDeliverData } from "@/data/servicesPage";
import { MotionSection, MotionFade, MotionStagger } from "@/components/motion";

const iconMap = {
  RotateCcw,
  MessageSquare,
  PieChart,
  ShieldCheck,
};

export function WhatWeDeliver() {
  const { badge, title, subtitle, cards } = whatWeDeliverData;

  return (
    <MotionSection className="py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-6 lg:px-8 xl:px-0">
        <div className="rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] bg-[#eaf0f7] p-5 sm:p-10 lg:p-16">
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
            className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
            stagger={0.08}
          >
            {cards.map((card) => {
              const IconComp = iconMap[card.icon] || RotateCcw;

              return (
                <div
                  className="flex flex-col justify-between rounded-2xl bg-white p-5 sm:p-7 shadow-sm border border-slate-200/60 transition-transform hover:-translate-y-1"
                  key={card.id}
                >
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-[#df8a25]">
                      <IconComp className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-base sm:text-lg font-bold text-[#07192d]">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {card.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs">
                    <span className="text-slate-500 font-medium">{card.footerLeft}</span>
                    <span className="font-bold text-[#df8a25]">{card.footerRight}</span>
                  </div>
                </div>
              );
            })}
          </MotionStagger>
        </div>
      </div>
    </MotionSection>
  );
}

export default WhatWeDeliver;
