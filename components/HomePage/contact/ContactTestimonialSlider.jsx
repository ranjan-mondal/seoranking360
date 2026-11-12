"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { contactData } from "@/data/contact";

export function ContactTestimonialSlider() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = contactData.testimonials;
  const testimonial = testimonials[activeTestimonial];

  function showPreviousTestimonial() {
    setActiveTestimonial((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  }

  function showNextTestimonial() {
    setActiveTestimonial((current) => (current + 1) % testimonials.length);
  }

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#132f4b] p-6 sm:p-8 lg:p-9 text-white">
      <h2 className="text-xl sm:text-2xl font-bold">Clients love working with us.</h2>
      <div className="mt-6 sm:mt-7 grid gap-4 sm:gap-6 sm:grid-cols-[140px_1fr] lg:grid-cols-[176px_1fr] items-center">
        <div className="relative aspect-square overflow-hidden rounded-xl w-full max-w-[140px] lg:max-w-[176px] mx-auto sm:mx-0">
          <Image
            alt={testimonial.name}
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 176px, 140px"
            src={testimonial.image}
          />
        </div>
        <div>
          <p className="text-sm tracking-[0.18em] text-[#ffbd12]">★★★★★</p>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-6 text-slate-200">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <p className="mt-3 sm:mt-4 text-sm font-bold">{testimonial.name}</p>
          <p className="mt-0.5 sm:mt-1 text-xs text-slate-400">{testimonial.company}</p>
        </div>
      </div>

      <div className="mt-6 sm:mt-7 flex items-center justify-between border-t border-white/10 pt-5">
        <div className="flex gap-1.5">
          {testimonials.map((item, index) => (
            <button
              aria-label={`Show testimonial ${index + 1}`}
              className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                index === activeTestimonial ? "bg-[#ffbd12] w-4" : "bg-slate-600 w-1.5"
              }`}
              key={item.name}
              onClick={() => setActiveTestimonial(index)}
              type="button"
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            aria-label="Previous testimonial"
            className="rounded-full border border-white/15 p-2 text-slate-300 transition-colors hover:border-[#ffbd12] hover:text-[#ffbd12] cursor-pointer"
            onClick={showPreviousTestimonial}
            type="button"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            aria-label="Next testimonial"
            className="rounded-full border border-white/15 p-2 text-slate-300 transition-colors hover:border-[#ffbd12] hover:text-[#ffbd12] cursor-pointer"
            onClick={showNextTestimonial}
            type="button"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactTestimonialSlider;
