import React from "react";
import { motion } from "framer-motion";
import msmeLogo from "../assets/msmeLogo.png";
import founderImg from "../assets/founder.png";
import { stats, pillars } from "../data/about";

/**
 * About Section Component (Homepage)
 * 
 * Displays a summarized "About Us" section intended for the homepage or landing pages.
 * Features animated statistics and core pillars using Framer Motion.
 * Data is populated from `src/data/about.js`.
 * 
 * @returns {JSX.Element} The rendered About section
 */
const About = () => {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-12 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-0 right-0 w-105 h-105 bg-brand-accent/6 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-dark/5 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2.5 border border-brand-accent/40 bg-brand-accent/8 text-brand-accent font-bold tracking-[0.22em] text-[11px] uppercase px-5 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
            OUR STORY
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark">
            About{" "}
            <span className="relative inline-block text-brand-accent">
              Us
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-accent rounded-full"></span>
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {stats.map(({ value, label }) => (
            <motion.div
              key={label}
              className="rounded-2xl py-6 text-center border border-brand-accent/15"
              style={{
                background:
                  "linear-gradient(135deg, #ffffff 0%, #e8f7fd 60%, #d0eefa 100%)",
              }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, ease: "easeOut" },
                },
              }}
            >
              <p className="text-3xl md:text-4xl font-black text-brand-dark leading-none mb-1">
                {value}
              </p>
              <p className="text-slate-500 text-sm">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row gap-14 items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <div className="flex-1 space-y-5">
            {pillars.map(({ icon, title, body }) => (
              <div
                key={title}
                className="flex gap-4 p-5 rounded-2xl border border-slate-100 hover:border-brand-accent/25 hover:shadow-md transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f0faff 100%)",
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <i className={`${icon} text-brand-accent text-lg`}></i>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-brand-dark mb-1">
                    {title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {body}
                  </p>
                </div>
              </div>
            ))}

            <div className="inline-flex items-center gap-3 border border-slate-200 rounded-xl px-4 py-3 bg-slate-50">
              <img
                src={msmeLogo}
                alt="MSME"
                className="w-8 h-10 object-contain"
              />
              <div className="text-xs text-slate-600">
                <p className="font-bold text-brand-dark">MSME Certified</p>
                <p>Ministry of MSME, Govt. of India</p>
              </div>
            </div>
          </div>

          <div className="shrink-0 flex flex-col items-center">
            <div className="relative mb-6">
              <div className="absolute -bottom-3 -right-3 w-64 h-80 bg-brand-dark rounded-3xl opacity-10"></div>
              <div className="absolute -bottom-3 -right-3 w-64 h-80 border-2 border-brand-accent/30 rounded-3xl"></div>
              <div className="relative z-10 w-64 h-80 rounded-3xl overflow-hidden border-2 border-brand-dark/20 shadow-xl">
                <img
                  src={founderImg}
                  alt="Founder"
                  className="w-full h-full object-cover object-top-left"
                />
                <div className="absolute bottom-0 inset-x-0 h-24 bg-linear-to-t from-brand-dark/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-lg leading-none">
                    Prashun Shetty
                  </p>
                  <p className="text-white/70 text-xs mt-1">
                    Founder &amp; CEO
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-linear-to-br from-pink-500 to-orange-400 flex items-center justify-center text-white hover:opacity-80 transition-opacity shadow-md"
              >
                <i className="ri-instagram-line text-sm"></i>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-[#0077b5] flex items-center justify-center text-white hover:opacity-80 transition-opacity shadow-md"
              >
                <i className="ri-linkedin-fill text-sm"></i>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
