"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckSquare, Play } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { heroData } from "@/data/hero";
import { EASING, SPRING } from "@/components/motion/variants";

export function HeroContent() {
  const { badge, heading, description, cta } = heroData;
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: EASING },
    },
  };

  return (
    <motion.div
      animate="visible"
      className="relative z-10 w-full max-w-2xl"
      initial="hidden"
      variants={containerVariants}
    >
      <motion.div className="mb-4 sm:mb-6" variants={itemVariants}>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-white shadow-xs backdrop-blur-sm">
          <CheckSquare className="h-3.5 w-3.5 text-white/90" />
          <span>{badge.text}</span>
        </span>
      </motion.div>

      <motion.h1
        className="text-3xl xs:text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-bold leading-[1.08] tracking-tight text-white"
        variants={itemVariants}
      >
        <span className="block">{heading.line1}</span>
        <span className="block w-fit min-w-max">{heading.line2}</span>
        <span className="block text-[#ffc329] w-fit min-w-max">{heading.highlight}</span>
      </motion.h1>

      <motion.p
        className="mt-4 sm:mt-6 max-w-lg text-sm sm:text-base md:text-lg leading-relaxed text-slate-300"
        variants={itemVariants}
      >
        {description}
      </motion.p>

      <motion.div
        className="mt-7 sm:mt-8 flex flex-col md:flex-row items-stretch xs:items-center gap-3.5 sm:gap-6"
        variants={itemVariants}
      >
        <motion.div
          className="w-full xs:w-auto"
          transition={SPRING}
          whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
          whileTap={{ scale: shouldReduceMotion ? 1 : 0.98 }}
        >
          <Link
            className="group flex min-h-[48px] w-full xs:w-auto items-center justify-center gap-2.5 rounded-full bg-linear-to-r from-[#ffbe2a] to-[#ffa800] px-7 py-3.5 text-sm sm:text-base font-bold text-[#07192d] shadow-[0_10px_24px_rgba(255,190,42,0.3)] transition-all hover:shadow-[0_12px_28px_rgba(255,190,42,0.42)] active:scale-[0.98]"
            href={cta.primaryHref}
          >
            <span>{cta.primaryText}</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div
          className="w-full xs:w-auto"
          transition={SPRING}
          whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
          whileTap={{ scale: shouldReduceMotion ? 1 : 0.98 }}
        >
          <Link
            aria-label={cta.secondaryText}
            className="group flex min-h-[44px] w-full xs:w-auto items-center justify-center gap-3 text-sm sm:text-base font-medium text-white transition-colors hover:text-[#ffc329] py-1 xs:py-0"
            href={cta.secondaryHref}
          >
            <span className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all group-hover:border-[#ffc329] group-hover:bg-[#ffc329]/10">
              <Play className="ml-0.5 h-4 w-4 fill-white text-white group-hover:fill-[#ffc329] group-hover:text-[#ffc329] transition-colors" />
            </span>
            <span>{cta.secondaryText}</span>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;
