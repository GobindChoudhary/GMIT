import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import { stats, aboutPagePillars as pillars, values, timeline } from "../data/about";

/**
 * About Us Page
 * 
 * Provides an in-depth look at the company, its mission, values, and history.
 * 
 * Sections:
 * - Hero banner
 * - Quick stats strip
 * - Core pillars defining the educational approach
 * - Foundational values grid
 * - Company timeline/history
 * 
 * @returns {JSX.Element} The rendered about page
 */
const AboutPage = () => {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.5, smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <NavBar />

      {/* ───── Hero ───── */}
      <section className="relative bg-brand-dark pt-28 pb-20 px-6 lg:px-12 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute bottom-0 left-1/4 w-125 h-125 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2.5 border border-white/30 bg-white/10 text-white font-bold tracking-[0.22em] text-[11px] uppercase px-5 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              OUR STORY
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
              About{" "}
              <span className="relative inline-block text-brand-accent">
                Us
                <span className="absolute -bottom-1 left-0 w-full h-0.75 bg-brand-accent rounded-full" />
              </span>
            </h1>

            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              We're on a mission to bridge the gap between education and
              industry, one learner at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───── Stats Bar ───── */}
      <section className="bg-slate-50 py-10 px-6 lg:px-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="rounded-2xl py-6 text-center border border-brand-accent/15"
              style={{
                background:
                  "linear-gradient(135deg, #ffffff 0%, #e8f7fd 60%, #d0eefa 100%)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-3xl md:text-4xl font-black text-brand-dark leading-none mb-1">
                {stat.value}
              </p>
              <p className="text-slate-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───── Mission & Pillars ───── */}
      <section className="py-16 px-6 lg:px-12 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-0 right-0 w-105 h-105 bg-brand-accent/6 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Drives <span className="text-brand-accent">Us</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-5">
            {pillars.map(({ icon, title, body }, i) => (
              <motion.div
                key={title}
                className="flex gap-4 p-6 rounded-2xl border border-slate-100 hover:border-brand-accent/25 hover:shadow-md transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f0faff 100%)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <i className={`${icon} text-brand-accent text-xl`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark mb-1">
                    {title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Our Values ───── */}
      <section className="bg-brand-dark py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Core <span className="text-brand-accent">Values</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((val, i) => (
              <motion.div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-brand-accent/15 flex items-center justify-center mb-4">
                  <i className={`${val.icon} text-brand-accent text-2xl`} />
                </div>
                <h3 className="text-white font-bold mb-2">{val.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Journey / Timeline ───── */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our <span className="text-brand-accent">Journey</span>
          </motion.h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-accent/20" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex gap-6 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-brand-accent/15 border-2 border-brand-accent flex items-center justify-center shrink-0 z-10">
                    <span className="text-brand-accent font-bold text-xs">
                      {item.year}
                    </span>
                  </div>
                  <div className="pb-2">
                    <h3 className="font-bold text-slate-900 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── CTA Banner ───── */}
      <section className="mx-6 lg:mx-12 mb-16">
        <motion.div
          className="max-w-7xl mx-auto bg-brand-accent rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Want to be part of our story?
            </h3>
            <p className="text-white/80">
              Join the GMIT community and start your transformation today.
            </p>
          </div>
          <button className="bg-white text-brand-accent px-8 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-colors shrink-0 flex items-center gap-2">
            Get Started <i className="ri-arrow-right-line" />
          </button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
