import React, { forwardRef } from "react";

const badgeVariants = {
  amber: "bg-[#fff1c8] text-[#a75c15] font-bold uppercase tracking-wide",
  glass: "border border-white/15 bg-white/[0.07] text-slate-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)] font-medium",
  outline: "border border-slate-300 text-slate-600 font-medium",
  filterActive: "border border-[#ffb511] bg-[#ffb511] text-[#101b32] font-medium shadow-sm",
  filterInactive: "border border-slate-300 text-slate-600 hover:border-[#ffb511] font-medium",
};

const badgeSizes = {
  sm: "px-3 py-1 text-xs",
  md: "px-4 py-1.5 text-xs",
  lg: "px-5 py-2 text-sm",
};

export const Badge = forwardRef(function Badge(
  {
    children,
    variant = "amber",
    size = "md",
    className = "",
    icon,
    ...props
  },
  ref
) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full transition-colors ${
        badgeVariants[variant] || badgeVariants.amber
      } ${badgeSizes[size] || badgeSizes.md} ${className}`}
      ref={ref}
      {...props}
    >
      {icon && <span aria-hidden="true">{icon}</span>}
      {children}
    </span>
  );
});

export default Badge;
