import React from "react";
import { testimonialFilters } from "@/data/testimonials";

export function TestimonialFilterTabs({ activeFilter, onSelectFilter }) {
  return (
    <div className="mx-auto mt-7 flex w-full flex-wrap justify-center gap-2">
      {testimonialFilters.map((filter) => {
        const isActive = activeFilter === filter;

        return (
          <button
            className={`rounded-full border px-5 py-2 text-sm transition-colors cursor-pointer ${
              isActive
                ? "border-[#ffb511] bg-[#ffb511] text-[#101b32] font-semibold"
                : "border-slate-300 text-slate-600 hover:border-[#ffb511]"
            }`}
            key={filter}
            onClick={() => onSelectFilter(filter)}
            type="button"
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}

export default TestimonialFilterTabs;

