import React from "react";

/**
 * WhyChoose Section Component
 *
 * Features:
 * - Four feature cards highlighting key benefits
 * - Color-coded icons for visual distinction
 * - Responsive grid layout
 */
const WhyChoose = () => {
  // Feature data with associated colors
  const features = [
    {
      icon: "ri-file-text-line",
      color: "#0672ba",
      bgColor: "bg-[#0672ba]",
      title: "ERP APPLICATION + BUSINESS PROCESS KNOWLEDGE",
      description:
        "Cost effective guidance on ERP Application knowledge sharing with detailed business process demonstration by highly skilled and recommended ERP consultants",
    },
    {
      icon: "ri-calendar-schedule-line",
      color: "#00b894",
      bgColor: "bg-[#00b894]",
      title: "REAL TIME PROJECT",
      description:
        "We provide real-time project work to gain practical hands-on experience using ERP",
    },
    {
      icon: "ri-file-list-3-line",
      color: "#f59e0b",
      bgColor: "bg-[#f59e0b]",
      title: "CONSULTATIVE APPROACH",
      description:
        "Our Consultants are highly experienced and excellent in knowledge who work in close coordination with aspirants throughout the process",
    },
    {
      icon: "ri-team-line",
      color: "#22d3ee",
      bgColor: "bg-[#22d3ee]",
      title: "PLACEMENT SUPPORT",
      description:
        "We provide post training placement support, career advisory services and knowledge upgradation through regular industry interaction.",
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-12 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#003462] mb-6">
          Why Choose TagSkills for Your Professional Training?
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 text-center max-w-5xl mx-auto mb-12 leading-relaxed">
          At TagSkills, you're not just learning the theory; you're immersing
          yourself in practical, hands-on experience that translates directly to
          real-world applications. Our courses are taught by industry veterans
          with years of experience in their respective fields, ensuring you
          receive top-tier education grounded in the latest industry standards
          and practices.
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 pt-12 relative border border-slate-200 hover:border-[#0672ba]/50 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon Badge */}
              <div
                className={`absolute -top-6 left-6 w-14 h-14 ${feature.bgColor} rounded-full flex items-center justify-center shadow-lg`}
              >
                <i className={`${feature.icon} text-white text-2xl`}></i>
              </div>

              {/* Title */}
              <h3
                className="font-bold text-sm mb-3 leading-tight"
                style={{ color: feature.color }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
