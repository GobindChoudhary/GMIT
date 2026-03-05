import React from "react";

/**
 * Main Hero Section Component
 *
 * Features:
 * - Clean white/light gradient background
 * - Brand colors: #003462 (primary dark), #0672ba (primary light)
 * - Decorative blur elements for visual interest
 */
const Main = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Decorative gradient circles */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#0672ba]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#003462]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-6 pt-24 pb-20">
        {/* Tagline */}
        <p className="text-[#0672ba] font-semibold tracking-[0.3em] text-center text-sm md:text-base mb-8">
          TRAINING. PLACEMENT. PROJECTS.
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#003462] text-center leading-tight mb-6 max-w-4xl">
          Become The Software Engineer
          <br />
          That{" "}
          <span className="border-2 border-[#0672ba] px-4 py-1 inline-block text-[#0672ba]">
            Companies
          </span>{" "}
          Want To Hire!
        </h1>

        {/* Subtitle */}
        <p className="text-slate-600 text-center text-lg md:text-xl max-w-2xl mb-10">
          Join a growing community of students preparing for real-world tech
          careers at TagSkills.
        </p>

        {/* Stats with Avatars */}
        <div className="flex items-center gap-4 mb-10">
          {/* Stacked Avatars */}
          <div className="flex -space-x-3">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Student"
              className="w-10 h-10 rounded-full border-2 border-white shadow-md"
            />
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Student"
              className="w-10 h-10 rounded-full border-2 border-white shadow-md"
            />
            <img
              src="https://randomuser.me/api/portraits/men/86.jpg"
              alt="Student"
              className="w-10 h-10 rounded-full border-2 border-white shadow-md"
            />
          </div>
          {/* Stats Text */}
          <div className="text-sm">
            <span className="text-[#0672ba] font-bold">1 Million+</span>
            <span className="text-slate-600">
              {" "}
              Students learning in our mastery programs
            </span>
          </div>
        </div>

        {/* CTA Button - Primary brand color */}
        <button className="bg-[#003462] hover:bg-[#0672ba] text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#003462]/30 flex items-center gap-2 text-lg">
          Start Journey
          <i className="ri-arrow-right-line"></i>
        </button>
      </div>
    </section>
  );
};

export default Main;
