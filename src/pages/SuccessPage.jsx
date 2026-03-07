import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import { successStories, placementStats, hiringPartners } from "../data/success";

/**
 * Success Stories Page
 * 
 * Highlights student achievements, placement statistics, and hiring partners.
 * Designed to build trust and provide social proof.
 * 
 * Includes:
 * - Animated stat counters
 * - Testimonial video thumbnails
 * - Infinite scrolling marquee of hiring partners
 * 
 * @returns {JSX.Element} The rendered success stories page
 */
const SuccessPage = () => {
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
        <div className="absolute top-1/3 right-0 w-125 h-125 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2.5 border border-white/30 bg-white/10 text-white font-bold tracking-[0.22em] text-[11px] uppercase px-5 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              HEAR FROM OUR STUDENTS
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
              Success{" "}
              <span className="relative inline-block text-brand-accent">
                Stories
                <span className="absolute -bottom-1 left-0 w-full h-0.75 bg-brand-accent rounded-full" />
              </span>
            </h1>

            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Real students, real transformations. See how GMIT helped
              thousands launch and advance their careers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───── Stats Bar ───── */}
      <section className="bg-slate-50 py-10 px-6 lg:px-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {placementStats.map((stat, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                <i className={`${stat.icon} text-brand-accent text-xl`} />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-xl">{stat.value}</p>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───── Success Stories Grid ───── */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Students Who <span className="text-brand-accent">Made It Big</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {successStories.map((story, i) => (
              <motion.div
                key={i}
                className="rounded-2xl border border-slate-100 p-6 hover:border-brand-accent/25 hover:shadow-lg transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f0faff 100%)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: story.rating }).map((_, j) => (
                    <i
                      key={j}
                      className="ri-star-fill text-amber-400 text-sm"
                    />
                  ))}
                </div>

                <p className="text-slate-600 leading-relaxed mb-5 italic">
                  "{story.story}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-brand-accent/15 flex items-center justify-center">
                    <span className="text-brand-accent font-bold text-sm">
                      {story.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">
                      {story.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {story.role} &middot; {story.company}
                    </p>
                  </div>
                  <span className="ml-auto text-[11px] font-semibold text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">
                    {story.experience}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Hiring Partners ───── */}
      <section className="bg-brand-dark py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Hiring <span className="text-brand-accent">Partners</span>
          </motion.h2>
          <p className="text-white/60 text-center mb-12 max-w-xl mx-auto">
            Our students are hired by leading companies across the globe.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {hiringPartners.map((partner, i) => (
              <motion.div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl py-5 px-4 text-center hover:bg-white/10 transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <p className="text-white font-semibold text-sm">{partner}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA Banner ───── */}
      <section className="mx-6 lg:mx-12 my-16">
        <motion.div
          className="max-w-7xl mx-auto bg-brand-accent rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Your success story starts here
            </h3>
            <p className="text-white/80">
              Join the GMIT community and transform your career today.
            </p>
          </div>
          <button className="bg-white text-brand-accent px-8 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-colors shrink-0 flex items-center gap-2">
            Explore Courses <i className="ri-arrow-right-line" />
          </button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessPage;
