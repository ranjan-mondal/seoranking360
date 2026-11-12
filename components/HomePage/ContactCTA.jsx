"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import ContactFormCard from "./contact/ContactFormCard";
import ContactTestimonialSlider from "./contact/ContactTestimonialSlider";
import { EASING } from "@/components/motion/variants";

export function ContactCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#0d2b46] py-16 sm:py-20 md:py-20 lg:py-24 text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-0">
          <div className="grid gap-10 md:grid-cols-2 md:gap-8 lg:gap-20 md:items-start">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              transition={{ duration: 0.6, ease: EASING }}
              viewport={{ once: true, margin: "-50px" }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <ContactFormCard />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.15, ease: EASING }}
              viewport={{ once: true, margin: "-50px" }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <ContactTestimonialSlider />
            </motion.div>
          </div>
        </div>
    </section>
  );
}

export default ContactCTA;
