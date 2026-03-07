import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import { contactInfo, socials } from "../data/contact";

/**
 * Contact Us Page
 * 
 * Provides a contact form for users to send inquiries and displays
 * company contact information, office hours, and social media links.
 * 
 * Features:
 * - Controlled React form state (`formData`)
 * - Simulated form submission success state
 * - Smooth scrolling initialization via Lenis
 * - Animated entrance sequences via Framer Motion
 * 
 * @returns {JSX.Element} The rendered contact page
 */
const ContactPage = () => {
  // Controlled form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  // Tracks if the form has been successfully submitted to show success message
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.5, smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
        <div className="absolute top-1/2 left-0 w-125 h-125 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2.5 border border-white/30 bg-white/10 text-white font-bold tracking-[0.22em] text-[11px] uppercase px-5 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              GET IN TOUCH
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
              Contact{" "}
              <span className="relative inline-block text-brand-accent">
                Us
                <span className="absolute -bottom-1 left-0 w-full h-0.75 bg-brand-accent rounded-full" />
              </span>
            </h1>

            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Have a question, need help choosing a course, or want to partner
              with us? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───── Contact Info Cards ───── */}
      <section className="bg-slate-50 py-10 px-6 lg:px-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {contactInfo.map((info, i) => (
            <motion.div
              key={i}
              className="flex gap-4 p-6 rounded-2xl border border-slate-100"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f0faff 100%)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                <i className={`${info.icon} text-brand-accent text-xl`} />
              </div>
              <div>
                <h3 className="font-bold text-brand-dark mb-1">{info.title}</h3>
                {info.lines.map((line, j) => (
                  <p key={j} className="text-slate-500 text-sm leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───── Form + Sidebar ───── */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.18] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-[1fr_380px] gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Send us a <span className="text-brand-accent">Message</span>
            </h2>
            <p className="text-slate-500 mb-8">
              Fill out the form and our team will get back to you within 24
              hours.
            </p>

            {submitted ? (
              <motion.div
                className="rounded-2xl border border-green-200 bg-green-50 p-10 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <i className="ri-check-line text-green-600 text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-slate-500">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      subject: "",
                      message: "",
                    });
                  }}
                  className="mt-6 text-brand-accent font-semibold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-accent transition-colors bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-accent transition-colors bg-white"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-accent transition-colors bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-accent transition-colors bg-white"
                    >
                      <option value="">Select a topic</option>
                      <option value="Course Enquiry">Course Enquiry</option>
                      <option value="Placement Support">
                        Placement Support
                      </option>
                      <option value="Corporate Training">
                        Corporate Training
                      </option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-accent transition-colors bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-brand-accent hover:bg-brand-accent/85 text-white px-8 py-3.5 rounded-xl font-semibold transition-colors shadow-lg shadow-brand-accent/20 flex items-center gap-2"
                >
                  Send Message <i className="ri-send-plane-line" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Quick Help */}
            <div
              className="rounded-2xl border border-slate-100 p-6"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f0faff 100%)",
              }}
            >
              <h3 className="font-bold text-brand-dark mb-4 flex items-center gap-2">
                <i className="ri-question-line text-brand-accent" /> Quick Help
              </h3>
              <ul className="space-y-3">
                {[
                  "How do I enroll in a course?",
                  "What payment methods do you accept?",
                  "Do you offer EMI options?",
                  "Can I get a refund?",
                ].map((q, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <i className="ri-arrow-right-s-line text-brand-accent mt-0.5 shrink-0" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>

            {/* Office Hours */}
            <div
              className="rounded-2xl border border-slate-100 p-6"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f0faff 100%)",
              }}
            >
              <h3 className="font-bold text-brand-dark mb-4 flex items-center gap-2">
                <i className="ri-time-line text-brand-accent" /> Office Hours
              </h3>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="font-semibold text-slate-800">
                    9 AM – 7 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold text-slate-800">
                    10 AM – 4 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold text-slate-800">Closed</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div
              className="rounded-2xl border border-slate-100 p-6"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f0faff 100%)",
              }}
            >
              <h3 className="font-bold text-brand-dark mb-4 flex items-center gap-2">
                <i className="ri-share-line text-brand-accent" /> Follow Us
              </h3>
              <div className="flex flex-wrap gap-3">
                {socials.map((s, i) => (
                  <span
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-500 hover:border-brand-accent hover:text-brand-accent transition-all duration-300 cursor-pointer"
                  >
                    <i className={`${s.icon} text-lg`} />
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── Map / CTA ───── */}
      <section className="bg-brand-dark py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prefer a <span className="text-brand-accent">quick chat?</span>
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Our career counsellors are available to help you pick the right
              course and answer all your questions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:+916360959192"
                className="bg-brand-accent hover:bg-brand-accent/85 text-white px-8 py-3.5 rounded-xl font-semibold transition-colors flex items-center gap-2"
              >
                <i className="ri-phone-line" /> Call Now
              </a>
              <a
                href="mailto:support@gmit.com"
                className="border border-white/30 hover:border-white text-white px-8 py-3.5 rounded-xl font-semibold transition-colors flex items-center gap-2"
              >
                <i className="ri-mail-line" /> Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
