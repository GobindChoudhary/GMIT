import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import CourseCard from "../Component/CourseCard";
import { allCourses, categories } from "../data/courses";

/**
 * Courses Page
 * 
 * Displays the full catalog of courses offered.
 * Features:
 * - Category filtering (All, Development, Data & AI, etc.)
 * - Smooth scrolling via Lenis
 * - Animated grid layout using Framer Motion
 * 
 * @returns {JSX.Element} The rendered courses page
 */
const CoursesPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.5, smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const filtered =
    activeCategory === "All"
      ? allCourses
      : allCourses.filter((c) => c.category === activeCategory);

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
        <div className="absolute top-1/3 left-1/2 w-125 h-125 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2.5 border border-white/30 bg-white/10 text-white font-bold tracking-[0.22em] text-[11px] uppercase px-5 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              EXPLORE PROGRAMS
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
              Our{" "}
              <span className="relative inline-block text-brand-accent">
                Courses
                <span className="absolute -bottom-1 left-0 w-full h-0.75 bg-brand-accent rounded-full" />
              </span>
            </h1>

            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Industry-ready programs designed by experts to transform your
              career. Pick a path and start learning today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───── Filter Bar ───── */}
      <section className="bg-slate-50 py-6 px-6 lg:px-12 border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                  ? "bg-brand-accent text-white shadow-lg shadow-brand-accent/20"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-brand-accent/40 hover:text-brand-accent"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ───── Course Grid ───── */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
            initial="hidden"
            animate="visible"
            key={activeCategory}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {filtered.map((course) => (
              <motion.div
                key={course.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
              >
                <CourseCard {...course} />
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-slate-400 text-lg mt-12">
              No courses found in this category.
            </p>
          )}
        </div>
      </section>

      {/* ───── Stats Bar ───── */}
      <section className="bg-brand-dark py-14 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "20+", label: "Courses", icon: "ri-book-open-line" },
            { value: "1M+", label: "Students", icon: "ri-group-line" },
            {
              value: "100+",
              label: "Hiring Partners",
              icon: "ri-building-2-line",
            },
            {
              value: "95%",
              label: "Placement Rate",
              icon: "ri-bar-chart-grouped-line",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-brand-accent/15 flex items-center justify-center mb-3">
                <i className={`${stat.icon} text-brand-accent text-2xl`} />
              </div>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-white/60 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
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
              Can't decide which course?
            </h3>
            <p className="text-white/80">
              Talk to our career counsellors and get personalized guidance for
              free.
            </p>
          </div>
          <button className="bg-white text-brand-accent px-8 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-colors shrink-0 flex items-center gap-2">
            Get Free Counselling <i className="ri-phone-line" />
          </button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default CoursesPage;
