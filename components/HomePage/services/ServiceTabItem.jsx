"use client";

import React from "react";
import { ArrowRight, Search, Sparkles, Code2, Mail, Share2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { SPRING } from "@/components/motion/variants";

const iconMap = {
  Search,
  Sparkles,
  Code2,
  Mail,
  Share2,
};

export function ServiceTabItem({ service, isActive, onSelect }) {
  const Icon = iconMap[service.iconName] || Search;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      className={`group flex min-h-[72px] sm:min-h-20 w-full items-center gap-3 sm:gap-4 rounded-2xl border px-3.5 sm:px-5 py-3 sm:py-4 text-left transition-colors cursor-pointer ${
        isActive
          ? "border-[#07192d] shadow-[0_8px_24px_rgba(7,25,45,0.08)] bg-white"
          : "border-slate-200 hover:border-slate-400 bg-transparent"
      }`}
      onClick={onSelect}
      transition={SPRING}
      type="button"
      whileHover={{ scale: shouldReduceMotion ? 1 : 1.015 }}
      whileTap={{ scale: shouldReduceMotion ? 1 : 0.985 }}
    >
      <span className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-[#062235] text-[#ffbd12]">
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm sm:text-base font-bold text-[#07192d]">{service.title}</span>
        <span className="mt-0.5 sm:mt-1 block truncate text-xs sm:text-sm text-slate-500">
          {service.description}
        </span>
      </span>
      <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-[#ffb914] text-[#07192d] transition-transform group-hover:translate-x-1">
        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </span>
    </motion.button>
  );
}

export default ServiceTabItem;
