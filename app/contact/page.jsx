"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Clock, CalendarDays, CheckCircle2 } from "lucide-react";
import { contactPageData } from "@/data/contact";
import { siteConfig } from "@/config/site";
import { CustomSelect } from "@/components/ui/CustomSelect";
import {
  MotionSection,
  MotionFade,
  MotionInteractive,
} from "@/components/motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interest: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Phone input restrictions: prevent typing non-numeric characters
  function handlePhoneKeyDown(e) {
    // Allow navigation and editing keys
    if (
      [
        "Backspace",
        "Delete",
        "Tab",
        "Escape",
        "Enter",
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End",
      ].includes(e.key)
    ) {
      return;
    }
    // Allow Ctrl/Cmd + A, C, V, X
    if (e.ctrlKey || e.metaKey) {
      return;
    }
    // Block any key that is NOT a digit, +, -, or space
    if (!/[\d+\s-]/.test(e.key)) {
      e.preventDefault();
    }
  }

  function handlePhoneChange(e) {
    // Sanitize any pasted non-numeric characters
    const cleanValue = e.target.value.replace(/[^0-9+\s-]/g, "");
    setFormData((prev) => ({ ...prev, phone: cleanValue }));
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  }

  function validate() {
    const newErrors = {};

    // Full name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    const digitCount = formData.phone.replace(/\D/g, "").length;
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (digitCount < 7) {
      newErrors.phone = "Please enter a valid phone number (at least 7 digits)";
    }

    // Interest validation
    if (!formData.interest) {
      newErrors.interest = "Please select a service you're interested in";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsSuccess(true);
      setFormData({ fullName: "", email: "", phone: "", interest: "" });
      setErrors({});
    }, 600);
  }

  return (
    <main className="min-h-screen bg-[#031d2b] py-12 sm:py-20 lg:py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-6 lg:px-8 xl:px-0">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16">
          <MotionFade className="space-y-8 sm:space-y-10" direction="up">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight break-words">
              <span className="text-white">{contactPageData.headingPart1}</span>
              <span className="text-[#ffc329]">{contactPageData.headingHighlight}</span>
            </h1>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ffb511] text-[#031d2b] shadow-md">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">CALL</p>
                  <a
                    className="text-sm sm:text-base font-semibold text-white transition-colors hover:text-[#ffb511]"
                    href={`tel:${siteConfig.phone}`}
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ffb511] text-[#031d2b] shadow-md">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">EMAIL</p>
                  <a
                    className="text-sm sm:text-base font-semibold text-white transition-colors hover:text-[#ffb511]"
                    href={`mailto:${siteConfig.email}`}
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ffb511] text-[#031d2b] shadow-md">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">HOURS</p>
                  <p className="text-sm sm:text-base font-semibold text-white">
                    Mon-Fri 9am-6pm ET
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="inline-flex w-full sm:w-auto items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-xs sm:text-sm text-slate-300">
                <span className="font-bold text-white">4.9</span>
                <span className="text-[#ffc329] tracking-wider">★★★★★</span>
                <span className="text-slate-300">from 2,100+ client reviews</span>
              </div>

              <div className="flex w-full sm:w-auto items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-xs sm:text-sm text-slate-300">
                <span className="rounded bg-[#c62828] px-2 py-0.5 text-[10px] font-bold tracking-wider text-white">
                  Inc. 5000
                </span>
                <span className="text-slate-300">Ten years on the Inc. 5000</span>
              </div>
            </div>
          </MotionFade>

          <MotionFade delay={0.15} direction="up">
            <div
              className="relative mx-auto max-w-lg rounded-[2rem] bg-white p-6 sm:p-9 pt-12 sm:pt-14 text-center text-[#101b32] shadow-2xl scroll-mt-24"
              id="meeting"
            >
              <div className="absolute -top-7 sm:-top-8 left-1/2 flex -translate-x-1/2 -space-x-3">
                {contactPageData.card.teamAvatars.map((img, idx) => (
                  <span
                    className="relative h-13 w-13 sm:h-14 sm:w-14 overflow-hidden rounded-full border-2 border-white shadow-md"
                    key={idx}
                  >
                    <Image
                      alt="SEO expert specialist"
                      className="object-cover"
                      fill
                      sizes="56px"
                      src={img}
                    />
                  </span>
                ))}
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#101b32]">
                {contactPageData.card.heading}
              </h2>
              <p className="mx-auto mt-2 max-w-sm text-xs sm:text-sm text-slate-500">
                {contactPageData.card.subtitle}
              </p>

              {isSuccess && (
                <div className="mt-4 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-800 text-xs sm:text-sm flex items-center gap-2 text-left animate-in fade-in">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>
                    Thank you! Your request has been submitted successfully. Our strategists will reach out within one business day.
                  </span>
                </div>
              )}

              <form className="mt-6 space-y-3" noValidate onSubmit={handleSubmit}>
                <div className="grid gap-3 sm:grid-cols-2 text-left">
                  <div>
                    <input
                      aria-label="Full name"
                      className={`min-h-[48px] h-12 w-full rounded-xl border bg-white px-4 text-base sm:text-sm text-slate-800 outline-none placeholder:text-slate-400 transition-colors ${
                        errors.fullName
                          ? "border-red-400 ring-1 ring-red-400"
                          : "border-slate-200 focus:border-[#df8a25] focus:ring-1 focus:ring-[#df8a25]"
                      }`}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: "" });
                      }}
                      placeholder="Full Name*"
                      type="text"
                      value={formData.fullName}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-[11px] font-medium text-red-500">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <input
                      aria-label="Email address"
                      className={`min-h-[48px] h-12 w-full rounded-xl border bg-white px-4 text-base sm:text-sm text-slate-800 outline-none placeholder:text-slate-400 transition-colors ${
                        errors.email
                          ? "border-red-400 ring-1 ring-red-400"
                          : "border-slate-200 focus:border-[#df8a25] focus:ring-1 focus:ring-[#df8a25]"
                      }`}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      placeholder="Email Address*"
                      type="email"
                      value={formData.email}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] font-medium text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 text-left">
                  <div>
                    <input
                      aria-label="Phone number"
                      className={`min-h-[48px] h-12 w-full rounded-xl border bg-white px-4 text-base sm:text-sm text-slate-800 outline-none placeholder:text-slate-400 transition-colors ${
                        errors.phone
                          ? "border-red-400 ring-1 ring-red-400"
                          : "border-slate-200 focus:border-[#df8a25] focus:ring-1 focus:ring-[#df8a25]"
                      }`}
                      inputMode="tel"
                      onChange={handlePhoneChange}
                      onKeyDown={handlePhoneKeyDown}
                      placeholder="Phone Number*"
                      type="tel"
                      value={formData.phone}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-[11px] font-medium text-red-500">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <CustomSelect
                      hasError={Boolean(errors.interest)}
                      onChange={(selectedVal) => {
                        setFormData((prev) => ({ ...prev, interest: selectedVal }));
                        if (errors.interest) setErrors((prev) => ({ ...prev, interest: "" }));
                      }}
                      options={contactPageData.card.serviceOptions}
                      placeholder="I'm Interested In..."
                      value={formData.interest}
                    />
                    {errors.interest && (
                      <p className="mt-1 text-[11px] font-medium text-red-500">{errors.interest}</p>
                    )}
                  </div>
                </div>

                <MotionInteractive>
                  <button
                    className="mt-2 min-h-[48px] h-12 w-full rounded-xl bg-[#df8a25] text-base font-bold text-white shadow-[0_8px_16px_rgba(223,138,37,0.22)] transition-colors hover:bg-[#c97618] active:scale-[0.98] cursor-pointer disabled:opacity-50"
                    disabled={submitted}
                    type="submit"
                  >
                    {submitted ? "Submitting..." : contactPageData.card.buttonText}
                  </button>
                </MotionInteractive>
              </form>

              <p className="mt-4 text-xs text-slate-400">
                {contactPageData.card.subtext}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <MotionInteractive>
                <Link
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-200 transition-colors hover:border-white/30 hover:text-white"
                  href={`tel:${siteConfig.phone}`}
                >
                  <Phone className="h-3.5 w-3.5 text-[#ffb511]" />
                  {contactPageData.card.callButtonText}
                </Link>
              </MotionInteractive>
              <MotionInteractive>
                <Link
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-200 transition-colors hover:border-white/30 hover:text-white"
                  href="#meeting"
                >
                  <CalendarDays className="h-3.5 w-3.5 text-[#ffb511]" />
                  {contactPageData.card.meetingButtonText}
                </Link>
              </MotionInteractive>
            </div>
          </MotionFade>
        </div>
      </div>
    </main>
  );
}
