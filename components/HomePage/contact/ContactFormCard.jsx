"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Phone, CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { contactData } from "@/data/contact";
import { siteConfig } from "@/config/site";
import { CustomSelect } from "@/components/ui/CustomSelect";
import { SPRING } from "@/components/motion/variants";

export function ContactFormCard() {
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
    if (e.ctrlKey || e.metaKey) {
      return;
    }
    if (!/[\d+\s-]/.test(e.key)) {
      e.preventDefault();
    }
  }

  function handlePhoneChange(e) {
    const cleanValue = e.target.value.replace(/[^0-9+\s-]/g, "");
    setFormData((prev) => ({ ...prev, phone: cleanValue }));
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  }

  function validate() {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    const digitCount = formData.phone.replace(/\D/g, "").length;
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (digitCount < 7) {
      newErrors.phone = "Please enter a valid phone number (at least 7 digits)";
    }

    if (!formData.interest) {
      newErrors.interest = "Please select a service";
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
    <div>
      <div className="relative mx-auto max-w-xl rounded-[2rem] bg-white px-5 sm:px-8 pb-8 pt-12 sm:pt-14 text-center text-[#101b32] shadow-[0_20px_35px_rgba(0,0,0,0.12)]">
        <div className="absolute -top-7 sm:-top-8 left-1/2 flex -translate-x-1/2 -space-x-3">
          {contactData.teamAvatars.map((image, index) => (
            <span
              className="relative h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-full border-2 border-white shadow-md"
              key={index}
            >
              <Image alt="Team member" className="object-cover" fill sizes="56px" src={image} />
            </span>
          ))}
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-[-1px] text-[#101b32]">
          {contactData.heading}
        </h2>
        <p className="mx-auto mt-2 sm:mt-3 max-w-md text-xs sm:text-sm leading-5 text-slate-500">
          Get a free proposal from the team behind{" "}
          <strong className="text-[#101b32]">$2.1 billion+</strong> in client revenue.
        </p>

        {isSuccess && (
          <div className="mt-4 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-800 text-xs sm:text-sm flex items-center gap-2 text-left animate-in fade-in">
            <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
            <span>
              Thank you! Your request has been submitted successfully. We will reply within one business day.
            </span>
          </div>
        )}

        <form className="mt-6 sm:mt-7 space-y-3" noValidate onSubmit={handleSubmit}>
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 text-left">
            <div>
              <input
                aria-label="Full name"
                className={`h-11 sm:h-12 w-full rounded-lg border bg-white px-4 text-sm text-slate-800 outline-none placeholder:text-slate-400 transition-colors ${
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
                className={`h-11 sm:h-12 w-full rounded-lg border bg-white px-4 text-sm text-slate-800 outline-none placeholder:text-slate-400 transition-colors ${
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

          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 text-left">
            <div>
              <input
                aria-label="Phone number"
                className={`h-11 sm:h-12 w-full rounded-lg border bg-white px-4 text-sm text-slate-800 outline-none placeholder:text-slate-400 transition-colors ${
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
                onChange={(val) => {
                  setFormData((prev) => ({ ...prev, interest: val }));
                  if (errors.interest) setErrors((prev) => ({ ...prev, interest: "" }));
                }}
                options={contactData.serviceOptions}
                placeholder="I'm Interested In..."
                value={formData.interest}
              />
              {errors.interest && (
                <p className="mt-1 text-[11px] font-medium text-red-500">{errors.interest}</p>
              )}
            </div>
          </div>

          <motion.button
            className="mt-2 h-11 sm:h-12 w-full rounded-xl bg-[#df8a25] text-sm sm:text-base font-bold text-white shadow-[0_8px_16px_rgba(223,138,37,0.22)] transition-colors hover:bg-[#c97618] cursor-pointer disabled:opacity-50"
            disabled={submitted}
            transition={SPRING}
            type="submit"
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
          >
            {submitted ? "Submitting..." : "Get Started"}
          </motion.button>
        </form>

        <p className="mt-4 sm:mt-5 text-xs text-slate-400">We reply within one business day.</p>
      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <motion.div
          transition={SPRING}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-medium text-slate-200 hover:border-white/30"
            href={`tel:${siteConfig.phone}`}
          >
            <Phone className="h-3.5 w-3.5 text-[#ffb511]" /> Call {siteConfig.phone}
          </Link>
        </motion.div>
        <motion.div
          transition={SPRING}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-medium text-slate-200 hover:border-white/30"
            href="/contact"
          >
            <CalendarDays className="h-3.5 w-3.5 text-[#ffb511]" /> Book a Meeting
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactFormCard;
