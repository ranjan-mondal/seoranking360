import React from "react";

export function RatingStars({
  count = 5,
  color = "text-[#ffb511]",
  className = "",
  size = "text-sm",
}) {
  return (
    <div
      aria-label={`${count} out of 5 stars`}
      className={`tracking-[0.14em] select-none ${color} ${size} ${className}`}
    >
      {"★".repeat(Math.min(5, Math.max(1, count)))}
    </div>
  );
}

export default RatingStars;

