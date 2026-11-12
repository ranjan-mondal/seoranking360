import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function SliderControls({
  onPrevious,
  onNext,
  totalSlides = 0,
  activeIndex = 0,
  onSelectSlide,
  variant = "dark", // 'dark' | 'light'
  className = "",
  showDots = true,
  showArrows = true,
}) {
  const isDark = variant === "dark";

  const arrowClasses = isDark
    ? "flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition-colors hover:border-[#ffc329] hover:text-[#ffc329] cursor-pointer"
    : "rounded-full border border-slate-300 p-3 text-slate-600 transition-colors hover:border-[#ffb511] hover:text-[#ffb511] cursor-pointer";

  const dotActive = isDark ? "bg-[#ffc329]" : "bg-[#ffb511]";
  const dotInactive = isDark ? "bg-slate-600" : "bg-slate-300";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {showArrows && onPrevious && (
        <button
          aria-label="Previous slide"
          className={arrowClasses}
          onClick={onPrevious}
          type="button"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}

      {showDots && totalSlides > 0 && (
        <span className="flex items-center gap-2 px-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === index ? `${dotActive} scale-110` : dotInactive
              }`}
              key={index}
              onClick={() => onSelectSlide && onSelectSlide(index)}
              type="button"
            />
          ))}
        </span>
      )}

      {showArrows && onNext && (
        <button
          aria-label="Next slide"
          className={arrowClasses}
          onClick={onNext}
          type="button"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

export default SliderControls;

