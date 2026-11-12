"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import ServiceTabItem from "./services/ServiceTabItem";
import ServiceCaseStudyCard from "./services/ServiceCaseStudyCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { servicesData, servicesSectionHeader } from "@/data/services";
import { EASING } from "@/components/motion/variants";

export function OurServices() {
  const [activeService, setActiveService] = useState(3);
  const currentService = servicesData[activeService] || servicesData[0];
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-16 sm:py-20 md:py-20 lg:py-24 text-[#07192d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-0">
        <SectionHeading
          badge={servicesSectionHeader.badge}
          description={servicesSectionHeader.description}
          highlightColor="text-[#2d5d88]"
          theme="light"
          title={servicesSectionHeader.title}
          titleHighlight={servicesSectionHeader.titleHighlight}
        />

        <div className="grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.08fr_0.72fr] items-stretch">
          <motion.div
            className="space-y-3 w-full"
            initial="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 },
              },
            }}
            viewport={{ once: true, margin: "-40px" }}
            whileInView="visible"
          >
            {servicesData.map((item, index) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45, ease: EASING },
                  },
                }}
              >
                <ServiceTabItem
                  isActive={index === activeService}
                  onSelect={() => setActiveService(index)}
                  service={item}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="h-full w-full"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASING }}
            viewport={{ once: true, margin: "-40px" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                animate={{ opacity: 1, scale: 1 }}
                className="h-full w-full"
                exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
                key={currentService.id}
                transition={{ duration: 0.35, ease: EASING }}
              >
                <ServiceCaseStudyCard service={currentService} />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
