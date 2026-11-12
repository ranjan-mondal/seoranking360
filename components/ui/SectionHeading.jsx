"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import Badge from "./Badge";
import { EASING } from "@/components/motion/variants";

export function SectionHeading({
  badge,
  badgeVariant = "amber",
  title,
  titleHighlight,
  highlightColor = "text-[#ffbd12]",
  description,
  align = "left", // 'left' | 'center'
  theme = "dark", // 'dark' | 'light'
  className = "",
}) {
  const isCenter = align === "center";
  const isDark = theme === "dark";
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
      className={`mb-10 ${isCenter ? "text-center mx-auto max-w-3xl" : "max-w-2xl"} ${className}`}
      initial="hidden"
      variants={containerVariants}
      viewport={{ once: true, margin: "-50px" }}
      whileInView="visible"
    >
      {badge && (
        <motion.div variants={itemVariants}>
          <Badge variant={badgeVariant}>{badge}</Badge>
        </motion.div>
      )}

      {(title || titleHighlight) && (
        <motion.h2
          className={`mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-[-1.2px] sm:tracking-[-1.8px] ${
            isDark ? "text-white" : "text-[#07192d]"
          }`}
          variants={itemVariants}
        >
          {title}{" "}
          {titleHighlight && (
            <span className={highlightColor}>{titleHighlight}</span>
          )}
        </motion.h2>
      )}

      {description && (
        <motion.p
          className={`mt-4 text-base sm:text-lg ${
            isDark ? "text-slate-300" : "text-slate-500"
          } ${isCenter ? "mx-auto max-w-xl" : ""}`}
          variants={itemVariants}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

export default SectionHeading;
