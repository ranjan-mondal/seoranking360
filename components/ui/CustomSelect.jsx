"use client";

import React, { useState, useRef, useEffect } from "react";
import { Check, ChevronDown } from "lucide-react";

export function CustomSelect({
  options = [],
  value = "",
  onChange,
  placeholder = "I'm Interested In...",
  hasError = false,
  error = false,
  className = "",
  name = "interest",
}) {
  const isErrorState = Boolean(hasError || error);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  function handleSelect(option) {
    if (onChange) {
      onChange(option);
    }
    setIsOpen(false);
  }

  const selectedOption = options.find((opt) => opt === value || opt.value === value);
  const displayLabel = selectedOption
    ? typeof selectedOption === "string"
      ? selectedOption
      : selectedOption.label
    : null;

  return (
    <div className={`relative w-full text-left ${className}`} ref={containerRef}>
      <button
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={`min-h-[48px] h-12 w-full rounded-xl border bg-white px-4 text-sm outline-none transition-all flex items-center justify-between cursor-pointer ${
          isErrorState
            ? "border-red-400 text-red-700 ring-1 ring-red-400"
            : isOpen
            ? "border-[#df8a25] ring-1 ring-[#df8a25]"
            : "border-slate-200 hover:border-slate-300"
        }`}
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
      >
        <span className={`truncate text-left ${displayLabel ? "text-slate-800 font-medium" : "text-slate-400"}`}>
          {displayLabel || placeholder}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ml-2 ${
            isOpen ? "rotate-180 text-[#df8a25]" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1.5 max-h-[50vh] sm:max-h-60 overflow-y-auto overscroll-contain rounded-xl border border-slate-200 bg-white p-1.5 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
          <ul aria-label={placeholder} role="listbox">
            {options.map((option) => {
              const optValue = typeof option === "string" ? option : option.value;
              const optLabel = typeof option === "string" ? option : option.label;
              const isSelected = optValue === value;

              return (
                <li
                  aria-selected={isSelected}
                  className={`flex min-h-[44px] items-center justify-between rounded-lg px-3.5 py-3 text-xs sm:text-sm font-medium transition-colors cursor-pointer select-none ${
                    isSelected
                      ? "bg-[#fff8ea] text-[#a75c15] font-semibold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#07192d]"
                  }`}
                  key={optValue}
                  onClick={() => handleSelect(optValue)}
                  role="option"
                >
                  <span className="truncate">{optLabel}</span>
                  {isSelected && <Check className="h-4 w-4 text-[#df8a25] shrink-0 ml-2" />}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CustomSelect;
