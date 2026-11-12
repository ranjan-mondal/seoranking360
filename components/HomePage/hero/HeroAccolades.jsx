"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { EASING } from "@/components/motion/variants";

export function HeroAccolades() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.25,
        ease: EASING,
      },
    },
  };

  return (
    <motion.div
      animate="visible"
      className="w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-[#061e30]/80 backdrop-blur-md p-4 sm:p-5 lg:p-6 shadow-[0_12px_32px_rgba(0,0,0,0.25)]"
      initial="hidden"
      variants={containerVariants}
    >
            <div className="grid grid-cols-2 md:grid-cols-5 items-center gap-4 md:gap-0">
              <div className="flex items-center gap-3 md:border-r md:border-white/15 md:px-3 lg:px-5 md:first:pl-0">
                <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm sm:text-base font-bold text-slate-900 shadow-xs">
                  G
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-white text-xs sm:text-sm">
                    4.9 <span className="text-[#ffc329] tracking-tight">★★★★★</span>
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-400 truncate">
                    906 Google reviews
                  </p>
                </div>
              </div>

                <div className="flex items-center gap-2.5 md:border-r md:border-white/15 md:px-3 lg:px-5 pl-2 sm:pl-0">
                  <div className="leading-tight shrink-0">
                    <span className="block font-bold italic text-base sm:text-lg text-[#ffc329]">
                      Inc<span className="text-white">.</span>
                    </span>
                    <span className="block font-bold text-[11px] sm:text-xs text-white -mt-0.5">
                      5000
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] sm:text-xs text-slate-300 leading-snug">
                      Ten years on the
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-400 leading-snug">
                      Inc. 5000
                    </p>
                  </div>
                </div>

                    <div className="md:border-r md:border-white/15 md:px-3 lg:px-5">
                      <p className="font-serif text-sm sm:text-base lg:text-lg font-bold text-white leading-tight">
                        Forbes{" "}
                        <span className="font-sans text-[11px] sm:text-xs font-normal text-slate-300">
                          Advisor
                        </span>
                      </p>
                      <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                        #1 Best SEO Services
                      </p>
                    </div>

                          <div className="md:border-r md:border-white/15 md:px-3 lg:px-5 pl-2 sm:pl-0">
                            <div className="flex items-center gap-1.5">
                              <span className="inline-flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full border border-slate-600 text-[10px] sm:text-xs font-bold text-red-400 shrink-0">
                                C
                              </span>
                              <p className="font-semibold text-white text-xs sm:text-sm">
                                #1 of Top SEO
                              </p>
                            </div>
                            <p className="pl-5.5 sm:pl-6.5 text-[11px] sm:text-xs text-slate-400 mt-0.5">
                              Agencies in the US
                            </p>
                          </div>

                          <div className="col-span-2 md:col-span-1 md:px-3 lg:px-5 md:pr-0 pt-2 md:pt-0 border-t md:border-t-0 border-white/10">
                                <div className="flex items-center gap-1.5">
                                  <span className="inline-flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded bg-[#1368c8] text-[8px] sm:text-[9px] font-bold text-white shrink-0">
                                    GF
                                  </span>
                                  <p className="font-semibold text-white text-xs sm:text-sm">
                                    GoodFirms
                                  </p>
                                </div>
                                <p className="pl-5.5 sm:pl-6.5 text-[11px] sm:text-xs text-slate-400 mt-0.5">
                                  #1 SEO Company
                                </p>
                              </div>
                          </div>
                        </motion.div>
                        );
}

                        export default HeroAccolades;
