import React from "react";
import BrandLogo from "./Navbar/BrandLogo";
import NavLinks from "./Navbar/NavLinks";
import NavActions from "./Navbar/NavActions";
import MobileMenu from "./Navbar/MobileMenu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#031d2b]/95 backdrop-blur-md text-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 md:px-6 lg:px-8 xl:px-0 py-3 sm:py-3.5"
      >
        <BrandLogo />
        <NavLinks className="hidden lg:flex" />
        <NavActions className="hidden md:flex" />
        <MobileMenu />
      </nav>
    </header>
  );
}

export default Navbar;
