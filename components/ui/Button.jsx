import React, { forwardRef } from "react";
import Link from "next/link";

const variantStyles = {
  primary:
    "bg-linear-to-r from-[#ffc329] to-[#ff9f0b] text-[#071d2b] font-bold shadow-[0_12px_24px_rgba(255,174,17,0.22)] hover:scale-[1.02] active:scale-[0.98]",
  navbar:
    "bg-linear-to-r from-[#ffbd1a] to-[#ffa611] text-[#071d2b] font-semibold shadow-[0_5px_8px_rgba(255,173,16,0.2)] hover:scale-[1.02] active:scale-[0.98]",
  accent:
    "bg-linear-to-r from-[#ffc329] to-[#ffad10] text-[#071d2b] font-bold shadow-[0_10px_20px_rgba(255,174,17,0.2)] hover:scale-[1.02] active:scale-[0.98]",
  solid:
    "bg-[#ffb511] text-[#031d2b] font-bold hover:bg-[#ffc329] active:scale-[0.98]",
  cta:
    "bg-[#df8a25] text-white font-bold shadow-[0_8px_16px_rgba(223,138,37,0.22)] hover:bg-[#c97618] active:scale-[0.98]",
  outline:
    "border border-white/15 bg-white/5 text-slate-200 hover:border-[#ffc329] hover:text-[#ffc329]",
  outlineLight:
    "border border-slate-300 text-slate-600 hover:border-[#ffb511] hover:text-[#101b32]",
  ghost:
    "text-slate-200 hover:text-[#ffc329]",
  icon:
    "flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 hover:border-[#ffc329] hover:text-[#ffc329]",
};

const sizeStyles = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
  icon: "p-2.5",
};

export const Button = forwardRef(function Button(
  {
    children,
    variant = "primary",
    size = "md",
    href,
    className = "",
    type = "button",
    icon: Icon,
    iconPosition = "right",
    ...props
  },
  ref
) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2.5 rounded-full transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none";
  const combinedClasses = `${baseClasses} ${variantStyles[variant] || variantStyles.primary} ${
    variant === "icon" ? sizeStyles.icon : sizeStyles[size] || sizeStyles.md
  } ${className}`;

  if (href) {
    return (
      <Link className={combinedClasses} href={href} ref={ref} {...props}>
        {Icon && iconPosition === "left" && <Icon className="h-4 w-4 shrink-0" />}
        {children}
        {Icon && iconPosition === "right" && (
          <Icon className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
        )}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} ref={ref} type={type} {...props}>
      {Icon && iconPosition === "left" && <Icon className="h-4 w-4 shrink-0" />}
      {children}
      {Icon && iconPosition === "right" && (
        <Icon className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
      )}
    </button>
  );
});

export default Button;
