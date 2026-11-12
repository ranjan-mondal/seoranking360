"use client";

import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { siteConfig } from "@/config/site";
import { SPRING } from "@/components/motion/variants";

export function NavActions({ className = "" }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`items-center gap-2 sm:gap-3 lg:gap-4 ${className}`}>
      <SocialIcon href={siteConfig.social.whatsapp} type="whatsapp" />
      <SocialIcon href={siteConfig.social.telegram} type="telegram" />
      <motion.div
        transition={SPRING}
        whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
        whileTap={{ scale: shouldReduceMotion ? 1 : 0.98 }}
      >
        <Link
          className="flex items-center gap-2 rounded-full bg-linear-to-r from-[#ffbd1a] to-[#ffa611] px-4 lg:px-6 py-2 text-sm lg:text-base font-semibold text-[#071d2b] shadow-[0_5px_8px_rgba(255,173,16,0.2)]"
          href="/contact"
        >
          Get a Free Proposal
          <MoveRight className="w-4" />
        </Link>
      </motion.div>
    </div>
  );
}

export default NavActions;
