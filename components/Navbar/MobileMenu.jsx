"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, MoveRight, Phone } from "lucide-react";
import { headerNavItems } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition-colors hover:border-[#ffb511] hover:text-[#ffb511] cursor-pointer active:scale-95"
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-0 top-[60px] sm:top-[68px] z-40 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {isOpen && (
        <div className="fixed inset-x-0 top-[60px] sm:top-[68px] z-50 max-h-[calc(100dvh-68px)] overflow-y-auto overscroll-contain border-b border-white/10 bg-[#031d2b]/98 px-5 py-6 backdrop-blur-2xl shadow-2xl transition-all pb-10">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1.5">
            {headerNavItems.map((item) => (
              <Link
                className="flex min-h-[44px] items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-slate-200 transition-colors hover:bg-white/5 hover:text-[#ffb511] active:bg-white/10"
                href={item.href}
                key={item.label}
                onClick={() => setIsOpen(false)}
              >
                <span>{item.label}</span>
                {item.hasArrow && <MoveRight className="h-4 w-4 text-slate-400" />}
              </Link>
            ))}

            <div className="mt-5 border-t border-white/10 pt-5">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <SocialIcon href={siteConfig.social.whatsapp} type="whatsapp" />
                <SocialIcon href={siteConfig.social.telegram} type="telegram" />
                <a
                  className="flex min-h-[44px] items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white"
                  href={`tel:${siteConfig.phone}`}
                >
                  <Phone className="h-4 w-4 text-[#ffb511]" />
                  {siteConfig.phone}
                </a>
              </div>

              <Link
                className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#ffbd1a] to-[#ffa611] px-6 py-3.5 text-base font-bold text-[#071d2b] shadow-lg shadow-amber-500/20 active:scale-[0.98]"
                href="/contact"
                onClick={() => setIsOpen(false)}
              >
                Get a Free Proposal
                <MoveRight className="w-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
