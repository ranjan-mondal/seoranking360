"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { EASING } from "./variants";

export function MotionSection({
  children,
  className = "",
  delay = 0,
  y = 24,
  as = "section",
  viewportMargin = "-60px",
  viewportAmount,
  viewportOnce = true,
  viewport: customViewport,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.section;

  if (shouldReduceMotion) {
    const Tag = as;
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    );
  }

  const viewportConfig = customViewport || {
    once: viewportOnce,
    margin: viewportMargin,
    ...(viewportAmount !== undefined ? { amount: viewportAmount } : {}),
  };

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      transition={{ duration: 0.65, delay, ease: EASING }}
      viewport={viewportConfig}
      whileInView={{ opacity: 1, y: 0 }}
      {...props}
    >
      {children}
    </Component>
  );
}

export default MotionSection;
