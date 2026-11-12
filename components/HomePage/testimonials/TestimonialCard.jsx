import React from "react";
import Image from "next/image";
import { RatingStars } from "@/components/ui/RatingStars";

export function TestimonialCard({ testimonial, cardRef }) {
  return (
    <article
      className="min-h-[260px] sm:min-h-[270px] w-[calc(100vw-36px)] xs:w-[340px] sm:w-[360px] md:w-[380px] lg:w-[400px] shrink-0 rounded-2xl bg-[#092238] border border-white/10 p-6 sm:p-7 text-left text-white shadow-[0_12px_28px_rgba(7,25,45,0.18)] flex flex-col justify-between select-none"
      ref={cardRef}
    >
      <div>
        <div className="flex items-center gap-3.5">
          <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/30 shrink-0 shadow-xs">
            <Image
              alt={testimonial.name}
              className="object-cover"
              fill
              sizes="44px"
              src={testimonial.image}
            />
          </div>
          <div className="min-w-0">
            <RatingStars count={testimonial.rating || 5} />
            <h3 className="mt-1 text-sm font-bold text-white truncate">{testimonial.name}</h3>
            <p className="text-xs text-slate-400 truncate">{testimonial.company}</p>
          </div>
        </div>

        <h4 className="mt-5 sm:mt-6 text-sm sm:text-base font-bold text-[#ffb511] leading-snug">
          {testimonial.result}
        </h4>
        <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>
    </article>
  );
}

export default TestimonialCard;
