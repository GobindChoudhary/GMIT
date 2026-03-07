import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import Lenis from "lenis";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import { defaultCourse, courseExtras, defaultExtras } from "../data/courses";

/**
 * Course Detail Page
 * 
 * Displays comprehensive information about a specific course, including:
 * - Hero section with course overview and enrollment CTA
 * - Detailed curriculum (What you'll learn)
 * - Key highlights (Duration, Level, format)
 * - Included resources (Video hours, certificates)
 * - Frequently Asked Questions accordion
 * 
 * Uses `framer-motion` for page transition animations and UI interactions.
 * Expects course data to be passed via React Router navigation state,
 * otherwise falls back to `defaultCourse`.
 * 
 * @returns {JSX.Element} The rendered course detail page
 */
export const courseDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Retrieve course data from navigation state, or fallback to default
  const course = location.state || defaultCourse;
  const extras = courseExtras[course.title] || defaultExtras;
  
  // State for FAQ accordion toggle (-1 means all closed)
  const [openFaq, setOpenFaq] = useState(-1);

  // Force scroll to top immediately on mount (before Lenis takes over)
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.key]);

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.5, smooth: true });
    // After Lenis initializes, also tell it to go to top
    requestAnimationFrame(() => {
      lenis.scrollTo(0, { immediate: true });
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, [location.key]);

  return (
    <>

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

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-center">
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {course.months && (
                  <span className="inline-block bg-brand-accent/15 text-brand-accent text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-5">
                    {course.months} months of Content
                  </span>
                )}

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                  {course.title}
                </h1>

                <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl">
                  {course.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-brand-accent w-full sm:w-auto hover:bg-brand-accent/85 text-white px-8 py-3.5 rounded-xl font-semibold transition-colors shadow-lg shadow-brand-accent/20 flex justify-center items-center gap-2">
                    Enroll Now <i className="ri-arrow-right-line" />
                  </button>
                  <a
                    href="/GMIT-logo-final.pdf"
                    download
                    className="border border-slate-500 w-full sm:w-auto hover:border-white text-white px-8 py-3.5 rounded-xl font-semibold transition-colors flex justify-center items-center gap-2 cursor-pointer"
                  >
                    Download Brochure <i className="ri-file-download-line" />
                  </a>
                </div>
              </motion.div>

              {/* Right - Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-72 lg:h-80 object-cover"
                  />
                </div>
                {/* Floating stats */}
                <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-xl shadow-lg p-4 grid grid-cols-3 gap-4">
                  {[
                    { icon: "ri-time-line", val: course.months, lbl: "months" },
                    {
                      icon: "ri-award-line",
                      val: course.certified,
                      lbl: "Certified",
                    },
                    {
                      icon: "ri-headphone-line",
                      val: course.mentorSupport,
                      lbl: "Support",
                    },
                  ].map((s, i) => (
                    <div key={i} className="text-center">
                      <i className={`${s.icon} text-brand-accent text-xl`} />
                      <p className="text-sm font-bold text-slate-900 mt-1">
                        {s.val}
                      </p>
                      <p className="text-[11px] text-slate-500">{s.lbl}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ───── Highlights Bar ───── */}
        <section className="bg-slate-50 py-10 px-6 lg:px-12 border-b border-slate-200">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {extras.highlights.map((h, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                  <i className={`${h.icon} text-brand-accent text-xl`} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">{h.label}</p>
                  <p className="text-xs text-slate-500">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ───── What You'll Learn ───── */}
        <section className="py-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What you'll <span className="text-brand-accent">learn</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-5">
              {extras.whatYouLearn.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 bg-slate-50 rounded-xl p-5 border border-slate-100"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="ri-check-line text-brand-accent font-bold" />
                  </div>
                  <p className="text-slate-700 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── This Course Includes ───── */}
        <section className="bg-brand-dark py-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              This course includes
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {extras.includes.map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-brand-accent/15 flex items-center justify-center mb-4">
                    <i className={`${item.icon} text-brand-accent text-2xl`} />
                  </div>
                  <p className="text-white font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── FAQ ───── */}
        <section className="py-16 px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Frequently Asked Questions
            </motion.h2>

            {[
              {
                q: "Do I need prior experience?",
                a: "No, this course is designed for beginners. Basic computer literacy is all you need to get started.",
              },
              {
                q: "How long do I have access?",
                a: "You get lifetime access to all course materials, including future updates and bonus content.",
              },
              {
                q: "Is there mentor support?",
                a: `Yes, you get ${course.mentorSupport || "dedicated"} mentor support throughout the course along with weekly live workshops.`,
              },
              {
                q: "Will I get a certificate?",
                a: "Yes, upon successful completion you will receive an industry-recognized certificate from GMIT.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                className="border border-slate-200 rounded-xl mb-3 overflow-hidden"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-slate-900">{faq.q}</span>
                  <motion.i
                    className="ri-arrow-down-s-line text-brand-accent text-xl"
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-slate-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
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
                Ready to start learning?
              </h3>
              <p className="text-white/80">
                Join thousands of students already building their careers with
                GMIT.
              </p>
            </div>
            <button className="bg-white text-brand-accent px-8 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-colors shrink-0 flex items-center gap-2">
              Enroll Now <i className="ri-arrow-right-line" />
            </button>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
};
