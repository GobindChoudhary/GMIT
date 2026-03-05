import React, { useState } from "react";
import logo from "../assets/logo.svg";

/**
 * NavBar Component - Main navigation header
 *
 * Features:
 * - Sticky header with clean white background
 * - Responsive: Desktop centered nav, Mobile slide-out menu
 * - Brand colors: #003462 (dark), #0672ba (accent)
 */
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openSideMenu = () => setIsMenuOpen(true);
  const closeSideMenu = () => setIsMenuOpen(false);

  // Navigation menu items
  const NavMenu = ["Courses", "Success", "About Us", "Contact"];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="w-full py-4 text-[#003462] flex items-center justify-between px-6 lg:px-12 relative">
        {/* Logo */}
        <div className="logo w-28">
          <img src={logo} alt="Logo" className="w-full" />
        </div>

        {/* Desktop Navigation - Centered */}
        <ul className="hidden md:flex gap-8 items-center absolute left-1/2 -translate-x-1/2">
          {NavMenu.map((nav, i) => (
            <li key={i}>
              <a
                href={`#${nav.toLowerCase().replace(" ", "-")}`}
                className="relative font-medium text-[#003462] hover:text-[#0672ba] transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#0672ba] after:transition-all after:duration-300 hover:after:w-full"
              >
                {nav}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Login Button */}
        <button className="hidden md:block bg-[#003462] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0672ba] hover:shadow-md transition-all duration-300">
          Log in
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={openSideMenu}
          className="md:hidden text-2xl p-2 text-[#003462] hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <i className="ri-menu-line"></i>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={closeSideMenu}
        />

        {/* Mobile Side Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-72 bg-[#003462] z-50 md:hidden transition-transform duration-300 ease-out shadow-2xl ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="w-full flex justify-end py-6 px-6">
            <button
              onClick={closeSideMenu}
              className="text-2xl p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <i className="ri-close-large-line"></i>
            </button>
          </div>

          {/* Mobile Nav Links */}
          <ul className="flex flex-col items-center gap-6 mt-16">
            {NavMenu.map((nav, i) => (
              <li key={i}>
                <a
                  href={`#${nav.toLowerCase().replace(" ", "-")}`}
                  onClick={closeSideMenu}
                  className="text-2xl font-semibold text-white hover:text-[#0672ba] transition-colors duration-300"
                >
                  {nav}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Login Button */}
          <div className="absolute bottom-12 left-0 right-0 flex justify-center">
            <button className="bg-white text-[#003462] px-8 py-3 rounded-full font-semibold hover:bg-slate-100 hover:shadow-md transition-all duration-300">
              Log in
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
