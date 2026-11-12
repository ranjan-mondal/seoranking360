"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroData } from "@/data/hero";

export function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = heroData.slides || [];
  const total = slides.length;
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  function showPreviousSlide() {
    setActiveSlide((current) => (current === 0 ? total - 1 : current - 1));
  }

  function showNextSlide() {
    setActiveSlide((current) => (current + 1) % total);
  }

  // Handle touch swipe on mobile
  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      showNextSlide();
    } else if (diff < -45) {
      showPreviousSlide();
    }
  }

  // Auto-advance optionally or keyboard support
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "ArrowLeft") showPreviousSlide();
      if (e.key === "ArrowRight") showNextSlide();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!slides || total === 0) return null;

  return (
    <div className="relative w-full select-none">
      <div
        className="relative h-[260px] xs:h-[300px] sm:h-[360px] md:h-[400px] lg:h-[430px] xl:h-[470px] w-full overflow-hidden flex items-center justify-center"
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
      >
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28  bg-linear-to-r from-[#031d2b] via-[#031d2b]/85 to-transparent z-25" />

        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-linear-to-l from-[#031d2b]/60 to-transparent z-25" />

        <div className="relative w-full h-full flex items-center justify-center">
          {slides.map((slide, index) => {
            // Calculate relative offset: -1 (left), 0 (active), 1 (right)
            let diff = index - activeSlide;
            if (diff < -1) diff += total;
            if (diff > 1) diff -= total;

            const isActive = diff === 0;
            const isLeft = diff === -1;
            const isRight = diff === 1;

            // Positioning & styling per card
            let transformClass = "opacity-0 pointer-events-none scale-75";
            let zIndex = 0;

            if (isActive) {
              transformClass = "opacity-100 z-20 translate-x-0 scale-100 pointer-events-auto cursor-default";
              zIndex = 20;
            } else if (isLeft) {
              transformClass = "opacity-30 z-10 -translate-x-[72%] sm:-translate-x-[68%] scale-[0.88] hover:opacity-60 pointer-events-auto cursor-pointer";
              zIndex = 10;
            } else if (isRight) {
              transformClass = "opacity-40 z-10 translate-x-[72%] sm:translate-x-[68%] scale-[0.88] hover:opacity-60 pointer-events-auto cursor-pointer";
              zIndex = 10;
            }

            return (
              <div
                aria-hidden={!isActive}
                className={`absolute top-1/2 -translate-y-1/2 w-[90%] xs:w-[86%] sm:w-[82%] md:w-[78%] lg:w-[84%] xl:w-[82%] max-w-[620px] aspect-[16/11] transition-all duration-500 ease-out origin-center ${transformClass}`}
                key={slide.id || index}
                onClick={() => {
                  if (isLeft) showPreviousSlide();
                  if (isRight) showNextSlide();
                }}
                style={{ zIndex }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-[#0d2133] shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
                  <Image
                    alt={slide.alt || "Google Search Console SEO Performance Report"}
                    className="h-full w-full object-cover object-left-top"
                    fill
                    priority={isActive}
                    sizes="(min-width: 1280px) 620px, (min-width: 1024px) 520px, (min-width: 640px) 78vw, 90vw"
                    src={slide.image || slide}
                  />
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 sm:mt-6 flex items-center justify-center gap-3">
        <button
          aria-label="Previous hero slide"
          className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-300 transition-all hover:border-[#ffc329] hover:text-[#ffc329] hover:bg-[#ffc329]/10 hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
          onClick={showPreviousSlide}
          type="button"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        <div className="flex items-center gap-2 px-1">
          {slides.map((_, index) => (
            <button
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${activeSlide === index
                ? "w-2.5 bg-[#ffc329] shadow-[0_0_8px_rgba(255,195,41,0.6)]"
                : "w-2.5 bg-slate-600 hover:bg-slate-400"
                }`}
              key={`dot-${index}`}
              onClick={() => setActiveSlide(index)}
              type="button"
            />
          ))}
        </div>

        <button
          aria-label="Next hero slide"
          className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-300 transition-all hover:border-[#ffc329] hover:text-[#ffc329] hover:bg-[#ffc329]/10 hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
          onClick={showNextSlide}
          type="button"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </div>
  );
}

export default HeroCarousel;
