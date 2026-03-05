import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Lenis from "lenis";
import NavBar from "./Component/NavBar";
import Main from "./Component/Main";
import Courses from "./Component/Courses";
import Marquee from "./Component/Marquee";
import Reviews from "./Component/Reviews";
import About from "./Component/About";
import WhyChoose from "./Component/WhyChoose";
import Footer from "./Component/Footer";

/**
 * App Component - Main application container
 *
 * Theme: Light background with brand colors
 * - Primary Dark:  #003462 (navy blue)
 * - Primary Light: #0672ba (bright blue)
 *
 * Features:
 * - Lenis smooth scrolling for enhanced UX
 */
const App = () => {
  // Initialize Lenis smooth scrolling with optimized settings
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      wheelMultiplier: 1,
      lerp: 0.1,
      infinite: false,
    });

    // Animation frame loop for Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-screen min-h-screen bg-white text-slate-800">
      <NavBar />
      <Main />
      <Courses />
      <Marquee />
      <Reviews />
      <About />
      <WhyChoose />
      <Footer />
    </div>
  );
};

export default App;
