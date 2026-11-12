import React, { forwardRef } from "react";

export const Input = forwardRef(function Input({ className = "", ...props }, ref) {
  return (
    <input
      className={`h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-[#df8a25] focus:ring-1 focus:ring-[#df8a25] ${className}`}
      ref={ref}
      {...props}
    />
  );
});

export const Select = forwardRef(function Select({ children, className = "", ...props }, ref) {
  return (
    <select
      className={`h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition-colors focus:border-[#df8a25] focus:ring-1 focus:ring-[#df8a25] ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </select>
  );
});
