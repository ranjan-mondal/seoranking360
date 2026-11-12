"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import BlogCard from "./blogs/BlogCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogPostsData, blogsSectionHeader } from "@/data/blogs";
import { EASING, SPRING } from "@/components/motion/variants";

export function BlogsSection() {
  const shouldReduceMotion = useReducedMotion();
  // Display only the first 3 blog posts on the Home Page
  const displayedPosts = blogPostsData.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: EASING },
    },
  };

  return (
    <section className="bg-[#031d2b] py-16 sm:py-20 md:py-20 lg:py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-0">
        <SectionHeading
          align="center"
          badge={blogsSectionHeader.badge}
          theme="dark"
          title={blogsSectionHeader.title}
          titleHighlight={blogsSectionHeader.titleHighlight}
        />

        <motion.div
          className="mt-10 sm:mt-12 grid gap-6 sm:gap-8 md:grid-cols-3 lg:gap-8"
          initial="hidden"
          variants={containerVariants}
          viewport={{ once: true, margin: "-50px" }}
          whileInView="visible"
        >
          {displayedPosts.map((post) => (
            <motion.div key={post.id} variants={cardVariants}>
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 sm:mt-14 text-center"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          transition={{ duration: 0.5, delay: 0.25, ease: EASING }}
          viewport={{ once: true, margin: "-40px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="inline-block"
            transition={SPRING}
            whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
            whileTap={{ scale: shouldReduceMotion ? 1 : 0.98 }}
          >
            <Link
              className="group inline-flex items-center gap-2.5 rounded-full bg-linear-to-r from-[#ffc329] to-[#ffad10] px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-[#071d2b] shadow-[0_10px_24px_rgba(255,174,17,0.22)] transition-all hover:shadow-[0_12px_28px_rgba(255,174,17,0.35)]"
              href="/blogs"
            >
              <span>View All Blogs</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default BlogsSection;
