import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal.jsx";
import logo from "../assets/logo.svg";
import { navMenu as NavMenu } from "../data/navigation";

/**
 * NavBar Component - Main navigation header
 *
 * Features:
 * - Sticky header with clean transclucent background
 * - Responsive: Desktop centered nav, Mobile slide-out hamburger menu
 * - Intelligent scrolling: Hides on scroll down to save space, shows on scroll up
 * 
 * @returns {JSX.Element} The rendered navigation bar
 */
const NavBar = () => {
  const navigate = useNavigate();

  // --- Component State ---
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu drawer state
  const [isVisible, setIsVisible] = useState(true);    // Controls hiding/showing nav on scroll
  const [lastScrollY, setLastScrollY] = useState(0);   // Tracks previous scroll position
  const [isScrolled, setIsScrolled] = useState(false); // Tracks if user has scrolled past top
  const [showLogin, setShowLogin] = useState(false);   // Login Modal visibility state

  const openSideMenu = () => setIsMenuOpen(true);
  const closeSideMenu = () => setIsMenuOpen(false);

  // Listen for custom event to open login modal from anywhere
  useEffect(() => {
    const handler = () => setShowLogin(true);
    window.addEventListener("open-login-modal", handler);
    return () => window.removeEventListener("open-login-modal", handler);
  }, []);

  // Handle scroll to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scrolled state for background
      setIsScrolled(currentScrollY > 10);

      if (currentScrollY < 10) {
        // Always show navbar at the top
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${isScrolled ? "shadow-md" : ""
        }`}
      style={{
        background: isScrolled
          ? "linear-gradient(135deg, rgba(0, 151, 220, 0.05) 0%, rgba(0, 53, 99, 0.08) 100%), rgba(255, 255, 255, 0.9)"
          : "transparent",
        borderBottom: isScrolled ? "1px solid rgba(0, 151, 220, 0.15)" : "none",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -80, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <nav className="w-full py-3 pt-5 text-brand-dark flex items-center justify-between px-6 lg:px-12 relative">
        {/* Logo */}
        <motion.div
          className="logo w-24 lg:w-28"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link to="/">
            <img src={logo} alt="Logo" className="w-full" />
          </Link>
        </motion.div>

        {/* Desktop Navigation - Centered */}
        <ul className="hidden md:flex gap-8 items-center absolute left-1/2 -translate-x-1/2 border border-brand-accent/30 bg-white/80 backdrop-blur-sm rounded-full px-8 py-2 shadow-lg shadow-brand-accent/10">
          {NavMenu.map((nav, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
            >
              <Link
                to={nav.path}
                className="relative font-semibold text-sm text-brand-dark hover:text-brand-accent transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-brand-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {nav.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Desktop Login Button */}
        <motion.button
          className="hidden md:block bg-brand-dark text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-brand-accent hover:shadow-md transition-all duration-300"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowLogin(true)}
        >
          Log in
        </motion.button>

        {/* Mobile Hamburger */}
        <button
          onClick={openSideMenu}
          className={`md:hidden text-2xl p-2 rounded-lg transition-colors ${isScrolled ? "text-white hover:bg-brand-accent/20" : "text-brand-dark hover:bg-slate-100"}`}
          aria-label="Open menu"
        >
          <i className="ri-menu-line"></i>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeSideMenu}
            />
          )}
        </AnimatePresence>

        {/* Mobile Side Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed top-0 right-0 h-screen w-72 bg-brand-dark z-50 md:hidden shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
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
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.07 }}
                  >
                    <Link
                      to={nav.path}
                      onClick={closeSideMenu}
                      className="text-2xl font-semibold text-white hover:text-brand-accent transition-colors duration-300"
                    >
                      {nav.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile Login Button */}
              <div className="absolute bottom-12 left-0 right-0 flex justify-center">
                <motion.button
                  className="bg-white text-brand-dark px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowLogin(true)}
                >
                  Log in
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <LoginModal open={showLogin} onClose={() => setShowLogin(false)} />
    </motion.header>
  );
};

export default NavBar;
