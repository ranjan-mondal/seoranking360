"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { EASING } from "./variants";

export function MotionFade({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up", // "up" | "down" | "left" | "right" | "none"
  as = "div",
  viewport = true,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className} {...props}>{children}</Tag>;
  }

  const initialOffset = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
    none: {},
  }[direction] || { y: 20 };

  const motionProps = viewport
    ? {
        initial: { opacity: 0, ...initialOffset },
        whileInView: { opacity: 1, x: 0, y: 0 },
        viewport: { once: true, margin: "-40px" },
      }
    : {
        initial: { opacity: 0, ...initialOffset },
        animate: { opacity: 1, x: 0, y: 0 },
      };

  return (
    <Component
      className={className}
      transition={{ duration, delay, ease: EASING }}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
}

export default MotionFade;

