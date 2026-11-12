
import React from "react";
import HeroContent from "./hero/HeroContent";
import HeroCarousel from "./hero/HeroCarousel";
import HeroAccolades from "./hero/HeroAccolades";

export function HeroSection() {
  return (
    <main className="overflow-hidden bg-[#031d2b] text-white">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-0 pt-8 sm:pt-12 md:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20">
        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-14">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

            <div className="relative z-10 lg:col-span-5 xl:col-span-5 w-full">
              <HeroContent />
            </div>

            <div className="relative z-0 lg:col-span-7 xl:col-span-7 w-full overflow-visible">
              <HeroCarousel />
            </div>

          </div>

          <HeroAccolades />

        </div>
      </section>
    </main>
  );
}

export default HeroSection;
