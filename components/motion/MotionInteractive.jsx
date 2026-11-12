"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { SPRING } from "./variants";

export function MotionInteractive({
  children,
  className = "",
  hoverScale = 1.02,
  tapScale = 0.98,
  hoverY = 0,
  as = "div",
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className} {...props}>{children}</Tag>;
  }

  return (
    <Component
      className={className}
      transition={SPRING}
      whileHover={{ scale: hoverScale, ...(hoverY ? { y: hoverY } : {}) }}
      whileTap={{ scale: tapScale }}
      {...props}
    >
      {children}
    </Component>
  );
}

export default MotionInteractive;

