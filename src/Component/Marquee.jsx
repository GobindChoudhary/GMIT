import React from "react";

/**
 * Marquee Component - Company logos/names scrolling banner
 *
 * Features:
 * - Infinite horizontal scroll animation
 * - Gradient fade effects on edges
 * - Pause on hover for better UX
 */
const Marquee = () => {
  // List of partner companies
  const companies = [
    "Amazon",
    "Walmart",
    "TCS",
    "Rapidops",
    "Microsoft",
    "Google",
    "Meta",
    "Apple",
    "Infosys",
    "Wipro",
  ];

  return (
    <section className="pt-24 pb-16 bg-white overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-10">
        <span className="inline-block px-4 py-2 border border-[#0672ba]/30 text-[#0672ba] text-sm tracking-wider mb-4 rounded-full">
          TRUSTED BY INDUSTRY LEADERS
        </span>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Our alumni's are working in{" "}
          <span className="text-[#003462] font-semibold">100+</span> best
          organisations
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden py-8">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Scrolling content - duplicated for seamless loop */}
        <div className="flex animate-marquee whitespace-nowrap">
          {companies.map((company, index) => (
            <div key={index} className="mx-12 flex items-center justify-center">
              <span className="text-slate-400 text-2xl md:text-3xl font-semibold hover:text-[#003462] transition-colors duration-300">
                {company}
              </span>
            </div>
          ))}
        </div>

        {/* Duplicate for seamless loop */}
        <div className="flex animate-marquee whitespace-nowrap">
          {companies.map((company, index) => (
            <div
              key={`dup-${index}`}
              className="mx-12 flex items-center justify-center"
            >
              <span className="text-slate-400 text-2xl md:text-3xl font-semibold hover:text-[#003462] transition-colors duration-300">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Marquee;
