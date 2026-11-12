"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialFilterTabs from "./testimonials/TestimonialFilterTabs";
import TestimonialCard from "./testimonials/TestimonialCard";
import { testimonialsData } from "@/data/testimonials";

export function Testimonials() {
  const [activeFilter, setActiveFilter] = useState("Amazing Results");
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [stepWidth, setStepWidth] = useState(355);
  const firstCardRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const visibleTestimonials = testimonialsData.filter((item) =>
    item.filters.includes(activeFilter)
  );
  const cards = visibleTestimonials.length ? visibleTestimonials : testimonialsData;

  // Responsive step width measurement
  useEffect(() => {
    function updateStep() {
      if (firstCardRef.current) {
        const gap = window.innerWidth < 640 ? 16 : 20;
        setStepWidth(firstCardRef.current.offsetWidth + gap);
      }
    }
    updateStep();
    window.addEventListener("resize", updateStep);
    return () => window.removeEventListener("resize", updateStep);
  }, [cards]);

  // Filter change reset
  function selectFilter(filter) {
    setActiveFilter(filter);
    setActiveSlide(0);
  }

  // Next / Previous slide actions
  const totalSlides = cards.length;

  function showPrevious() {
    setActiveSlide((current) => (current === 0 ? totalSlides - 1 : current - 1));
  }

  function showNext() {
    setActiveSlide((current) => (current >= totalSlides - 1 ? 0 : current + 1));
  }

  // Touch swipe support
  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      showNext();
    } else if (diff < -45) {
      showPrevious();
    }
  }

  // Slowly auto-move testimonials every 4 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;

    const timer = setInterval(() => {
      setActiveSlide((current) => (current >= totalSlides - 1 ? 0 : current + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, totalSlides]);

  // Extended cards array for seamless wrapping without trailing whitespace across full width
  const displayCards = cards.length >= 3 ? [...cards, ...cards] : cards;

  return (
    <section id="testimonials" className="overflow-hidden bg-white py-14 sm:py-20 md:py-20 lg:py-24 text-[#101b32] w-full scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-6 lg:px-8 xl:px-0 text-center">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#101b32]">
          Our clients <span className="text-[#2d6ca5]">love</span> working with us.
        </h2>
        <p className="mt-3 sm:mt-4 text-xs sm:text-base text-slate-500">
          Filter by service or by what matters to you.
        </p>

        <TestimonialFilterTabs
          activeFilter={activeFilter}
          onSelectFilter={selectFilter}
        />
      </div>

      <div
        className="relative mt-8 sm:mt-12 w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
      >
        <div
          className="flex gap-4 sm:gap-5 px-4 sm:px-6 md:px-8 xl:px-12 transition-transform duration-700 ease-in-out w-max"
          style={{ transform: `translateX(-${activeSlide * stepWidth}px)` }}
        >
          {displayCards.map((testimonial, idx) => (
            <TestimonialCard
              cardRef={idx === 0 ? firstCardRef : null}
              key={`${testimonial.id || testimonial.name}-${idx}`}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-8 sm:mt-12 max-w-7xl px-4 sm:px-6 md:px-6 lg:px-8 xl:px-0 flex items-center justify-center">
        <div className="flex items-center justify-center gap-2">
          {cards.map((_, index) => (
            <button
              aria-label={`Go to testimonial slide ${index + 1}`}
              className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                index === activeSlide
                  ? "bg-[#ffb511] w-7"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              key={index}
              onClick={() => setActiveSlide(index)}
              type="button"
            />
          ))}
        </div>

        <div className="hidden sm:flex absolute right-4 sm:right-6 lg:right-8 xl:right-0 top-1/2 -translate-y-1/2 gap-2 sm:gap-3">
          <button
            aria-label="Previous testimonials"
            className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition-all hover:border-[#ffb511] hover:text-[#ffb511] hover:bg-amber-50/50 cursor-pointer active:scale-95 shadow-xs"
            onClick={showPrevious}
            type="button"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            aria-label="Next testimonials"
            className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition-all hover:border-[#ffb511] hover:text-[#ffb511] hover:bg-amber-50/50 cursor-pointer active:scale-95 shadow-xs"
            onClick={showNext}
            type="button"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex sm:hidden justify-center gap-3 mt-4">
        <button
          aria-label="Previous testimonials"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition-all hover:border-[#ffb511] hover:text-[#ffb511] active:scale-95 shadow-xs"
          onClick={showPrevious}
          type="button"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          aria-label="Next testimonials"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition-all hover:border-[#ffb511] hover:text-[#ffb511] active:scale-95 shadow-xs"
          onClick={showNext}
          type="button"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
