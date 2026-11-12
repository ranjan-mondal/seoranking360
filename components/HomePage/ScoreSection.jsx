"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import ScoreComparison from "./score/ScoreComparison";
import ScoreMetricsBar from "./score/ScoreMetricsBar";
import { scoreSectionHeader } from "@/data/score";
import { EASING } from "@/components/motion/variants";

export function ScoreSection() {
  const shouldReduceMotion = useReducedMotion();

  const headerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASING },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, delay: 0.15, ease: EASING },
    },
  };

  return (
    <section className="bg-[#031d2b] py-16 sm:py-20 md:py-20 lg:py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-0">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial="hidden"
            variants={headerVariants}
            viewport={{ once: true, margin: "-50px" }}
            whileInView="visible"
          >
            <h2 className="text-3xl font-bold leading-tight tracking-[-1.2px] sm:text-4xl text-white">
              {scoreSectionHeader.headingLine1}
              <br />
              {scoreSectionHeader.headingLine2}
            </h2>
            <h3 className="mt-4 text-3xl font-bold leading-tight tracking-[-1.2px] text-[#ffbd12] sm:text-4xl">
              {scoreSectionHeader.highlightLine1}
              <br />
              {scoreSectionHeader.highlightLine2}
            </h3>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-300">
              {scoreSectionHeader.description}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            variants={cardVariants}
            viewport={{ once: true, margin: "-50px" }}
            whileInView="visible"
          >
            <ScoreComparison />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
          >
            <ScoreMetricsBar />
          </motion.div>
        </div>
    </section>
  );
}

export default ScoreSection;
