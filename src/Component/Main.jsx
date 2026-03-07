import React from "react";
import { motion } from "framer-motion";
import studentImg from "../assets/student2.png";
import { useNavigate } from "react-router-dom";

/**
 * Main Hero Section Component
 *
 * Features:
 * - Grid background with light gradient overlay
 * - Brand colors: #003563 (primary dark), #0097dc (primary light)
 * - Decorative blur elements for visual interest
 */
const Main = () => {
  const navigate = useNavigate();
  return (
    <section
      className="w-full min-h-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #ffffff 0%, #f0f9ff 100%)",
      }}
    >
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Top-left color blob */}
      <div
        className="absolute -top-32 -left-32 w-125 h-125 rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(0, 151, 220, 0.10)" }}
      />
      {/* Bottom-right color blob */}
      <div
        className="absolute -bottom-24 -right-24 w-100 h-100 rounded-full blur-[80px] pointer-events-none"
        style={{ background: "rgba(0, 53, 99, 0.08)" }}
      />

      {/* Bottom fade to white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.85) 60%, rgba(255,255,255,1) 100%)",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 w-full min-h-screen flex items-center px-6 lg:px-20 pt-6">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="flex items-center gap-2 mt-20 lg:mt-0 mb-7 "
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-1.5 sm:gap-2 bg-brand-dark/8 border border-brand-dark/15 text-brand-dark text-[10px] sm:text-xs font-bold tracking-[0.05em] sm:tracking-[0.1em] lg:tracking-[0.2em] uppercase px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex-wrap justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
                Training{" "}
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>{" "}
                Placement{" "}
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>{" "}
                Projects
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Master SAP &amp; Tech{" "}
              <span className="relative whitespace-nowrap">
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 300 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 6C60 2 120 1 150 1C180 1 240 2 298 6"
                    stroke="#0097dc"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-brand-accent">With Experts</span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-slate-500 text-base md:text-lg max-w-xl leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Join a growing community of students preparing for real-world tech
              careers at GMIT India's most trusted SAP training platform.
            </motion.p>

            {/* Avatars + Social Proof */}
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex -space-x-3">
                {[
                  "https://randomuser.me/api/portraits/men/32.jpg",
                  "https://randomuser.me/api/portraits/women/44.jpg",
                  "https://randomuser.me/api/portraits/men/86.jpg",
                  "https://randomuser.me/api/portraits/women/68.jpg",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Student"
                    className="w-9 h-9 rounded-full border-2 border-white shadow-sm"
                  />
                ))}
              </div>
              <div className="text-sm">
                <span className="text-brand-dark font-extrabold">10k+</span>
                <span className="text-slate-500"> students enrolled</span>
              </div>
            </motion.div>

            {/* Quick stats strip */}
            <motion.div
              className="flex flex-wrap gap-3 mb-9"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { icon: "ri-graduation-cap-line", text: "500+ Placed" },
                { icon: "ri-book-open-line", text: "6+ Programs" },
                { icon: "ri-shield-check-line", text: "100% Certified" },
              ].map(({ icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-full"
                >
                  <i className={`${icon} text-brand-accent`}></i>
                  {text}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                className="bg-brand-dark hover:bg-brand-accent text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-dark/25 flex items-center gap-2 text-base"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  window.dispatchEvent(new Event("open-login-modal"))
                }
              >
                Get Started
                <i className="ri-arrow-right-line"></i>
              </motion.button>
              <motion.button
                className="border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-base"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/courses")}
              >
                Browse Courses
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side” Student Image */}
          <motion.div
            className="flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-lg">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border border-dashed border-brand-accent/20 pointer-events-none" />
              <img
                src={studentImg}
                alt="Student learning"
                className="w-full h-auto object-cover relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Main;
