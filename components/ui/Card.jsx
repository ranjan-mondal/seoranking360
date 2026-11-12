import React from "react";

export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`rounded-2xl border transition-all ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "", ...props }) {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = "", as: Component = "h3", ...props }) {
  return (
    <Component className={`text-xl font-bold ${className}`} {...props}>
      {children}
    </Component>
  );
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`px-6 pb-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

export default Card;

