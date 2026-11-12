import React, { forwardRef } from "react";

export const Container = forwardRef(function Container(
  { children, className = "", as: Component = "div", ...props },
  ref
) {
  return (
    <Component className={`mx-auto max-w-7xl px-4 sm:px-6 md:px-6 lg:px-8 xl:px-0 ${className}`} ref={ref} {...props}>
      {children}
    </Component>
  );
});

export default Container;
