"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { pricingHeader, pricingPlans } from "@/data/pricing";
import {
  MotionSection,
  MotionFade,
  MotionStagger,
  MotionInteractive,
} from "@/components/motion";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly"); // "monthly" | "yearly"

  return (
    <main className="min-h-screen bg-[#031d2b] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,195,41,0.12),rgba(3,29,43,0))] py-12 sm:py-20 lg:py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-6 lg:px-8 xl:px-0">
        <MotionFade className="text-center" direction="up">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#ffbd12] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ffbd12]" />
            <span>{pricingHeader.badge}</span>
          </div>

          <h1 className="mt-5 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight break-words">
            {pricingHeader.titlePart1}
            <span className="text-[#ffc329]">{pricingHeader.titleHighlight}</span>
            {pricingHeader.titlePart2}
          </h1>

          <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-slate-300">
            {pricingHeader.description}
          </p>

          <div className="mt-8 inline-flex items-center rounded-full bg-[#062235] p-1 border border-white/10 shadow-inner max-w-full">
            <button
              className={`rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-linear-to-r from-[#ffc329] to-[#ff9f0b] text-[#07192d] shadow-md shadow-amber-500/25"
                  : "text-slate-300 hover:text-white"
              }`}
              onClick={() => setBillingCycle("monthly")}
              type="button"
            >
              Monthly
            </button>
            <button
              className={`rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
                billingCycle === "yearly"
                  ? "bg-linear-to-r from-[#ffc329] to-[#ff9f0b] text-[#07192d] shadow-md shadow-amber-500/25"
                  : "text-slate-300 hover:text-white"
              }`}
              onClick={() => setBillingCycle("yearly")}
              type="button"
            >
              <span>Yearly</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] sm:text-[11px] font-bold transition-colors whitespace-nowrap ${
                  billingCycle === "yearly"
                    ? "bg-[#07192d] text-[#ffc329]"
                    : "bg-emerald-500/20 border border-emerald-500/30 text-emerald-400"
                }`}
              >
                Save 20%
              </span>
            </button>
          </div>
        </MotionFade>

        <MotionStagger className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch" stagger={0.08}>
          {pricingPlans.map((plan) => {
            const isPopular = plan.popular;
            const isCustom = plan.isCustom;
            const price = billingCycle === "yearly" ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <div
                className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-200 ${
                  isPopular
                    ? "mt-4 md:mt-0 bg-[#062438] border-2 border-[#ffc329] shadow-[0_0_35px_rgba(255,195,41,0.22)]"
                    : "bg-[#062032]/85 border border-white/10 hover:border-amber-500/40 shadow-lg"
                }`}
                key={plan.id}
              >
                {isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-[#ffc329] to-[#ff9f0b] px-4 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#07192d] shadow-md shadow-amber-500/30 whitespace-nowrap">
                    {plan.badgeText || "MOST POPULAR"}
                  </span>
                )}

                <div>
                  <h2 className="text-xl font-bold text-white">{plan.name}</h2>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed min-h-[36px]">
                    {plan.tagline}
                  </p>

                  <div className="mt-6 flex items-baseline gap-1.5">
                    {isCustom ? (
                      <>
                        <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                          Custom
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-slate-400">
                          Pricing
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                          ${price}
                        </span>
                        <span className="text-xs text-slate-400">
                          /month
                        </span>
                      </>
                    )}
                  </div>

                  <p className="mt-8 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    INCLUDED IN PLAN:
                  </p>

                  <ul className="mt-4 space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-200" key={idx}>
                        <Check className="h-4 w-4 shrink-0 text-[#ffc329] mt-0.5 stroke-[2.5]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <MotionInteractive>
                    <Link
                      className={`flex min-h-[46px] w-full items-center justify-center rounded-full py-3 px-6 text-sm sm:text-base font-bold transition-all cursor-pointer text-center ${
                        isPopular
                          ? "bg-linear-to-r from-[#ffc329] to-[#ff9f0b] text-[#07192d] shadow-[0_10px_24px_rgba(255,195,41,0.3)] hover:brightness-105 active:scale-[0.98]"
                          : "border border-amber-400/35 bg-amber-400/[0.08] text-[#ffc329] hover:bg-linear-to-r hover:from-[#ffc329] hover:to-[#ff9f0b] hover:text-[#07192d] hover:border-transparent hover:shadow-[0_8px_20px_rgba(255,195,41,0.25)] active:scale-[0.98]"
                      }`}
                      href={plan.ctaHref}
                    >
                      {plan.ctaText}
                    </Link>
                  </MotionInteractive>
                </div>
              </div>
            );
          })}
        </MotionStagger>
      </div>
    </main>
  );
}
