"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 4000);
  }

  return (
    <div>
      <h2 className="text-sm font-bold uppercase tracking-wide text-white">Newsletter</h2>
      <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
        Subscribe to get the latest updates, tips and insights on SEO &amp; digital marketing.
      </p>

      {isSubscribed ? (
        <div className="mt-4 flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-4 py-2.5 text-xs text-emerald-300">
          <Check className="h-4 w-4 shrink-0 text-emerald-400" />
          <span>Thank you for subscribing!</span>
        </div>
      ) : (
        <form
          className="mt-4 flex overflow-hidden rounded-full bg-slate-700/60 border border-white/10 focus-within:border-[#ffb511]"
          onSubmit={handleSubmit}
        >
          <input
            aria-label="Your email address"
            className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-white outline-none placeholder:text-slate-400"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            type="email"
            value={email}
          />
          <button
            aria-label="Subscribe to newsletter"
            className="flex h-10 w-12 shrink-0 items-center justify-center bg-[#ffb511] text-[#031d2b] transition-colors hover:bg-[#ffc83b] cursor-pointer active:scale-95"
            type="submit"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </form>
      )}
    </div>
  );
}

export default NewsletterForm;
