"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { EASING } from "./variants";

export function MotionStagger({
  children,
  className = "",
  stagger = 0.08,
  staggerDelay,
  delayChildren = 0,
  as = "div",
  viewport = true,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;
  const effectiveStagger = staggerDelay !== undefined ? staggerDelay : stagger;

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className} {...props}>{children}</Tag>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: effectiveStagger,
        delayChildren,
      },
    },
  };

  const motionProps = viewport
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-40px" },
      }
    : {
        initial: "hidden",
        animate: "visible",
      };

  return (
    <Component
      className={className}
      variants={containerVariants}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
}

export function MotionItem({
  children,
  className = "",
  y = 16,
  duration = 0.5,
  as = "div",
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className} {...props}>{children}</Tag>;
  }

  const itemVariants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: EASING },
    },
  };

  return (
    <Component className={className} variants={itemVariants} {...props}>
      {children}
    </Component>
  );
}

export default MotionStagger;

