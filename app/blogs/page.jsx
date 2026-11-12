"use client";

import React, { useState } from "react";
import BlogCard from "@/components/HomePage/blogs/BlogCard";
import { blogPostsData, blogCategories } from "@/data/blogs";

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter posts based on selected category
  const filteredPosts =
    activeCategory === "all"
      ? blogPostsData
      : blogPostsData.filter(
          (post) =>
            post.category.toLowerCase().replace(/\s+/g, "-") === activeCategory ||
            post.category.toLowerCase() === activeCategory.toLowerCase()
        );

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage));
  const displayedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  function handleCategoryChange(catId) {
    setActiveCategory(catId);
    setCurrentPage(1);
  }

  function handlePreviousPage() {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  }

  function handleNextPage() {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  }

  return (
    <div className="min-h-screen">
      <section className="bg-white py-12 sm:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-6 lg:px-8 xl:px-0 text-center">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[#df8a25]">
            • EXPLORE ALL POSTS
          </p>

          <h1 className="mt-4 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#07192d] break-words">
            All Insights &amp; <span className="text-[#2d6ca5]">SEO Tips</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-slate-500">
            Browse our complete collection of actionable SEO, marketing, and growth guides.
          </p>

          <div className="mt-8 flex flex-nowrap sm:flex-wrap overflow-x-auto no-scrollbar sm:justify-center gap-2.5 sm:gap-3 px-4 sm:px-0 py-2 -mx-4 sm:mx-0 touch-scroll">
            {blogCategories.map((category) => {
              const isActive = activeCategory === category.id;
              const displayName =
                category.id === "all"
                  ? `${category.name} (${blogPostsData.length})`
                  : category.name;

              return (
                <button
                  className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shrink-0 min-h-[44px] ${
                    isActive
                      ? "bg-[#ffb511] text-[#07192d] shadow-sm scale-105"
                      : "bg-[#062235] text-white hover:bg-[#0b2b47] hover:scale-102"
                  }`}
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  type="button"
                >
                  {displayName}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#031d2b] py-12 sm:py-20 lg:py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-6 lg:px-8 xl:px-0">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-[#fff1c8] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#a75c15]">
              OUR BLOGS
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-1.8px] text-white">
              Latest Insights <span className="text-[#ffbd12]">&amp; SEO Tips</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {displayedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {displayedPosts.length === 0 && (
            <div className="py-16 text-center text-slate-400">
              <p className="text-lg">No posts found in this category.</p>
              <button
                className="mt-4 inline-flex items-center rounded-full bg-[#ffb511] px-6 py-2.5 text-sm font-bold text-[#07192d]"
                onClick={() => handleCategoryChange("all")}
                type="button"
              >
                View All Posts
              </button>
            </div>
          )}

          {filteredPosts.length > 0 && (
            <div className="mt-16 flex items-center justify-center gap-2 sm:gap-3">
              <button
                className="rounded-lg bg-white px-4 py-2 text-xs sm:text-sm font-medium text-slate-800 transition-colors hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                disabled={currentPage === 1}
                onClick={handlePreviousPage}
                type="button"
              >
                &lt; Previous
              </button>

              {Array.from({ length: Math.min(3, totalPages) }).map((_, idx) => {
                const pageNum = idx + 1;
                const isCurrent = pageNum === currentPage;

                return (
                  <button
                    className={`h-9 w-9 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      isCurrent
                        ? "bg-[#ffb511] text-[#07192d] scale-110 shadow-sm"
                        : "text-slate-300 hover:text-white hover:bg-white/10"
                    }`}
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    type="button"
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                className="rounded-lg bg-white px-4 py-2 text-xs sm:text-sm font-medium text-slate-800 transition-colors hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                disabled={currentPage >= totalPages}
                onClick={handleNextPage}
                type="button"
              >
                Next &gt;
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
