"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import AboutImageBadge from "./about/AboutImageBadge";
import AboutHighlightCard from "./about/AboutHighlightCard";
import { Badge } from "@/components/ui/Badge";
import { aboutData } from "@/data/about";
import { EASING, SPRING } from "@/components/motion/variants";

export function AboutusSection() {
  const { badge, heading, headingHighlight, headingSub, description, highlights, ctaText, ctaHref } = aboutData;
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="bg-white py-16 sm:py-20 md:py-20 lg:py-24 text-[#101b32] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-0">
          <div className="grid items-center gap-10 md:grid-cols-2 lg:grid-cols-[0.88fr_1.12fr] md:gap-8 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
              transition={{ duration: 0.65, ease: EASING }}
              viewport={{ once: true, margin: "-50px" }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <AboutImageBadge />
            </motion.div>

            <motion.div
              className="lg:pt-1"
              initial="hidden"
              variants={containerVariants}
              viewport={{ once: true, margin: "-50px" }}
              whileInView="visible"
            >
              <motion.div variants={itemVariants}>
                <Badge variant="amber">{badge}</Badge>
              </motion.div>

              <motion.h2
                className="mt-5 max-w-2xl text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-1.5px] sm:tracking-[-1.8px] text-[#101b32]"
                variants={itemVariants}
              >
                {heading} <span className="text-[#2d6ca5]">{headingHighlight}</span>
                <br />
                {headingSub}
              </motion.h2>

              <motion.p
                className="mt-5 sm:mt-7 max-w-2xl text-base sm:text-lg leading-7 text-slate-600"
                variants={itemVariants}
              >
                {description}
              </motion.p>

              <motion.div
                className="mt-8 sm:mt-10 grid gap-6 sm:grid-cols-3"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 },
                  },
                }}
              >
                {highlights.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={{
                      hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.45, ease: EASING },
                      },
                    }}
                  >
                    <AboutHighlightCard highlight={item} />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="mt-8 sm:mt-10 inline-block"
                transition={SPRING}
                variants={itemVariants}
                whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
                whileTap={{ scale: shouldReduceMotion ? 1 : 0.98 }}
              >
                <Link
                  className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-[#ffc329] to-[#ffad10] px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-[#071d2b] shadow-[0_10px_20px_rgba(255,174,17,0.2)]"
                  href={ctaHref}
                >
                  {ctaText}
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
    </section>
  );
}

export default AboutusSection;
