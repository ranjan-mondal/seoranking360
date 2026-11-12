"use client";

import React, { useState } from "react";
import { Globe, CheckCircle2, Star } from "lucide-react";
import { auditCtaData } from "@/data/servicesPage";
import { MotionFade, MotionInteractive } from "@/components/motion";

export function AuditCtaSection() {
  const [storeUrl, setStoreUrl] = useState("");
  const [urlError, setUrlError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    badge,
    title,
    subtitle,
    inputPlaceholder,
    buttonText,
    successMessage,
    trustRatings,
  } = auditCtaData;

  function validateUrl(url) {
    if (!url || !url.trim()) {
      return "Please enter your website or store URL";
    }
    // Match valid domain formats like yourstore.com, https://shop.com, store.myshopify.com
    const domainRegex =
      /^(https?:\/\/)?([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}(\/.*)?$/;
    if (!domainRegex.test(url.trim())) {
      return "Please enter a valid website URL (e.g. yourstore.com or https://store.com)";
    }
    return "";
  }

  function handleAuditSubmit(e) {
    e.preventDefault();
    const errorMsg = validateUrl(storeUrl);
    if (errorMsg) {
      setUrlError(errorMsg);
      return;
    }

    setUrlError("");
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setStoreUrl("");
    }, 600);
  }

  return (
    <MotionFade
      className="mt-14 sm:mt-20 rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] bg-[#071c2c] p-6 sm:p-12 lg:p-16 text-center text-white shadow-2xl scroll-mt-24"
      direction="up"
      id="audit"
    >
      <span className="inline-flex rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#ffbd12]">
        {badge}
      </span>

      <h2 className="mt-5 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto break-words">
        {title}
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-slate-300">
        {subtitle}
      </p>

      {isSubmitted && (
        <div className="mt-6 max-w-xl mx-auto rounded-xl bg-emerald-500/20 border border-emerald-500/30 p-4 text-emerald-300 text-xs sm:text-sm flex items-center justify-center gap-2 animate-in fade-in">
          <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
          <span>{successMessage}</span>
        </div>
      )}

      <form className="mt-8 max-w-2xl mx-auto" noValidate onSubmit={handleAuditSubmit}>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Globe className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              aria-label="Enter your website or store URL"
              className={`min-h-[48px] h-12 sm:h-13 w-full rounded-xl bg-white pl-12 pr-4 text-base sm:text-sm text-slate-800 outline-none placeholder:text-slate-400 transition-colors ${
                urlError
                  ? "border-2 border-red-400 ring-2 ring-red-400/30"
                  : "border border-slate-200 focus:border-[#df8a25] focus:ring-2 focus:ring-[#df8a25]/20"
              }`}
              onChange={(e) => {
                setStoreUrl(e.target.value);
                if (urlError) setUrlError("");
              }}
              placeholder={inputPlaceholder}
              type="url"
              value={storeUrl}
            />
          </div>

          <MotionInteractive className="w-full sm:w-auto">
            <button
              className="min-h-[48px] h-12 sm:h-13 w-full sm:w-auto shrink-0 rounded-xl bg-[#df8a25] px-8 text-sm sm:text-base font-bold text-white shadow-lg shadow-[#df8a25]/20 transition-all hover:bg-[#c97618] active:scale-[0.98] cursor-pointer disabled:opacity-50"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "Submitting..." : buttonText}
            </button>
          </MotionInteractive>
        </div>

        {urlError && (
          <p className="mt-2 text-left text-xs sm:text-sm font-medium text-red-400">
            {urlError}
          </p>
        )}
      </form>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-400">
        <span className="flex items-center gap-1.5 text-slate-300">
          <Star className="h-3.5 w-3.5 fill-[#ffbd12] text-[#ffbd12]" />
          <strong className="text-white">4.9/5 Rating</strong> (1,000+ Reviews)
        </span>
        <span className="hidden sm:inline text-slate-600">•</span>
        <span>Klaviyo Elite Master Partner</span>
        <span className="hidden sm:inline text-slate-600">•</span>
        <span>Mailchimp Certified Partner</span>
      </div>
    </MotionFade>
  );
}

export default AuditCtaSection;
