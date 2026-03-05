import React from "react";
import CourseCard from "./CourseCard";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

/**
 * Courses Section Component
 *
 * Displays available courses with scroll-based stacking animation
 * Uses ScrollStack for smooth card stacking effect on scroll
 */
const Courses = () => {
  // Course data array - each object represents a course card
  const coursesData = [
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      title: "Data Science & Analytics with Gen AI",
      description:
        "Gain hands-on experience in data analysis, visualization, and AI integration.",
      hours: "115+",
      certified: "Yes",
      mentorSupport: "24/7",
      price: "6999",
      originalPrice: "14891",
    },
    {
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
      title: "Full Stack Web Development (MERN)",
      description:
        "Learn MongoDB, Express, React, and Node.js to build modern full-stack applications.",
      hours: "120+",
      certified: "Yes",
      mentorSupport: "24/7",
      price: "5999",
      originalPrice: "12999",
    },
    {
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
      title: "Frontend Development with React",
      description:
        "Master HTML, CSS, JavaScript, and React to build responsive web applications.",
      hours: "90+",
      certified: "Yes",
      mentorSupport: "24/7",
      price: "4999",
      originalPrice: "9999",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
      title: "AI & Machine Learning Bootcamp",
      description:
        "Build intelligent systems using Python, ML algorithms, and deep learning.",
      hours: "110+",
      certified: "Yes",
      mentorSupport: "24/7",
      price: "7999",
      originalPrice: "15999",
    },
    {
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
      title: "Cyber Security & Ethical Hacking",
      description:
        "Learn network security, penetration testing, and ethical hacking techniques.",
      hours: "100+",
      certified: "Yes",
      mentorSupport: "24/7",
      price: "6499",
      originalPrice: "13999",
    },
    {
      image:
        "https://images.unsplash.com/photo-1526378722484-cc5c510c1a8f?w=800",
      title: "Python Programming Masterclass",
      description:
        "Start from basics and build real-world applications using Python.",
      hours: "80+",
      certified: "Yes",
      mentorSupport: "24/7",
      price: "3999",
      originalPrice: "8999",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28 px-6 lg:px-12 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <span className="inline-block px-4 py-2 bg-[#0672ba]/10 text-[#0672ba] text-sm font-semibold tracking-wider rounded-full mb-4">
            EXPLORE PROGRAMS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003462] mb-4">
            Our Courses
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Explore our industry-ready programs designed to transform your
            career
          </p>
        </div>

        {/* Main Content - Sidebar + Cards Layout */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Course Info Sidebar - Top on mobile, Left on md+ */}
          <div className="w-full md:w-80 lg:w-96 flex-shrink-0 md:sticky md:top-24 md:self-start">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#5b4bce] via-[#6366f1] to-[#3b82f6] p-8">
              {/* Background image overlay */}
              <div
                className="absolute inset-0 opacity-20 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800')",
                }}
              />

              <div className="relative z-10 flex flex-col">
                {/* SAP Courses Section */}
                <div className="mb-8">
                  <h3 className="text-white font-bold text-lg mb-4 tracking-wide">
                    SAP COURSES
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-white text-sm">
                      <i className="ri-checkbox-fill text-lg"></i>
                      <span className="tracking-wide">
                        DURATION :45-75HOURS
                      </span>
                    </li>
                    <li className="flex items-center gap-3 text-white text-sm">
                      <i className="ri-checkbox-fill text-lg"></i>
                      <span className="tracking-wide">ERP APPLICATION</span>
                    </li>
                    <li className="flex items-center gap-3 text-white text-sm">
                      <i className="ri-checkbox-fill text-lg"></i>
                      <span className="tracking-wide">
                        BUSINESS PROCESS KNOWLEDGE
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Data Analytics Section */}
                <div className="mb-8">
                  <h3 className="text-white font-bold text-lg mb-4 tracking-wide">
                    DATA ANALYTICS/DATA SCIENCE
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-white text-sm">
                      <i className="ri-checkbox-fill text-lg"></i>
                      <span className="tracking-wide">
                        DURATION : 75-130 HOURS
                      </span>
                    </li>
                    <li className="flex items-center gap-3 text-white text-sm">
                      <i className="ri-checkbox-fill text-lg"></i>
                      <span className="tracking-wide">
                        REAL-WORLD APPLICATIONS
                      </span>
                    </li>
                    <li className="flex items-center gap-3 text-white text-sm">
                      <i className="ri-checkbox-fill text-lg"></i>
                      <span className="tracking-wide">PROGRAMMING SKILLS</span>
                    </li>
                  </ul>
                </div>

                {/* Additional Features */}
                <div className="mb-8">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-white/90 text-sm">
                      <i className="ri-checkbox-line text-lg"></i>
                      <span className="tracking-wide">REAL TIME PROJECT</span>
                    </li>
                    <li className="flex items-center gap-3 text-white/90 text-sm">
                      <i className="ri-checkbox-line text-lg"></i>
                      <span className="tracking-wide">
                        CONSULTATIVE APPROACH
                      </span>
                    </li>
                    <li className="flex items-center gap-3 text-white text-sm">
                      <i className="ri-checkbox-fill text-lg"></i>
                      <span className="tracking-wide">PLACEMENT SUPPORT</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <button className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold py-4 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                    Book Your Free Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Course Cards */}
          <div className="flex-1">
            <ScrollStack
              useWindowScroll={true}
              itemDistance={60}
              itemStackDistance={20}
              stackPosition="25%"
              baseScale={0.92}
              itemScale={0.02}
            >
              {coursesData.map((course, index) => (
                <ScrollStackItem key={index} className="w-full">
                  {/* Vertical cards on mobile */}
                  <div className="md:hidden">
                    <CourseCard {...course} variant="vertical" />
                  </div>
                  {/* Horizontal cards on tablet & desktop */}
                  <div className="hidden md:block">
                    <CourseCard {...course} variant="horizontal" />
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
