"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerNavItems } from "@/data/navigation";

export function NavLinks({ className = "", onItemClick }) {
  const pathname = usePathname();

  return (
    <div className={`items-center gap-8 ${className}`}>
      {headerNavItems.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname?.startsWith(item.href);

        return (
          <Link
            className={`relative flex items-center gap-2 whitespace-nowrap text-sm font-medium transition-colors hover:text-[#ffb511] ${isActive
              ? "text-white after:absolute after:-bottom-3 after:left-0 after:h-0.5 after:w-full after:bg-white"
              : "text-slate-300"
              }`}
            href={item.href}
            key={item.label}
            onClick={onItemClick}
          >
            {item.label}

          </Link>
        );
      })}
    </div>
  );
}

export default NavLinks;

