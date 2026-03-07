import React from "react";
import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import { Navigate, useNavigate } from "react-router-dom";

const Courses = () => {
  // Updated courses data as provided by the user
  const allCourses = [
    {
      image:
        "https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=1162&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Python Programming Masterclass",
      description:
        "Start from basics and build real-world applications using Python.",
      months: "6",
      certified: "Yes",
      mentorSupport: "24/7",
      price: "3999",
      originalPrice: "8999",
      category: "Development",
    },
    // SAP Courses
    {
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      title: "SAP S/4 HANA MM",
      description:
        "Master SAP Material Management module with real-time project experience.",
      months: "6",
      certified: "Yes",
      mentorSupport: "24/7",
      price: "8999",
      originalPrice: "17999",
      badge: "POPULAR",
      category: "ERP",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800",
      title: "SAP S/4 HANA FICO",
      description:
        "Learn financial accounting and controlling in SAP with hands-on projects.",
      months: "6",
      certified: "Yes",
      mentorSupport: "24/7",
      price: "8999",
      originalPrice: "17999",
      category: "ERP",
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
      title: "SAP S/4 HANA SD",
      description:
        "Become proficient in SAP Sales & Distribution with real business scenarios.",
      months: "6",
      certified: "Yes",
      mentorSupport: "24/7",
      price: "8999",
      originalPrice: "17999",
      category: "ERP",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800",
      title: "SAP ABAP Programming",
      description:
        "Learn SAP ABAP programming for custom development and integration.",
      months: "6",
      certified: "Yes",
      mentorSupport: "24/7",
      price: "8999",
      originalPrice: "17999",
      category: "ERP",
    },
    // Full Stack & BI
    {
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
      title: "Python Full Stack Development",
      description:
        "Comprehensive Python full stack course: Django, Flask, React, and more.",
      months: "6",
      certified: "Yes",
      mentorSupport: "24/7",
      price: "9999",
      originalPrice: "19999",
      badge: "NEW",
      category: "Development",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800",
      title: "Java Full Stack Development",
      description:
        "Become a Java full stack developer: Spring Boot, Angular, REST APIs, and more.",
      months: "6",
      certified: "Yes",
      mentorSupport: "24/7",
      price: "9999",
      originalPrice: "19999",
      category: "Development",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
      title: "Power BI for Business Analytics",
      description:
        "Master Power BI for data visualization, dashboards, and business intelligence.",
      months: "6",
      certified: "Yes",
      mentorSupport: "24/7",
      price: "7999",
      originalPrice: "15999",
      category: "Data & AI",
    },
    // Data Science 6 Months
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      title: "Data Science 6 Months (4+2)",
      description:
        "Intensive 6-month data science program: 4 months core + 2 months specialization.",
      months: "6",
      certified: "Yes",
      mentorSupport: "24/7",
      price: "14999",
      originalPrice: "29999",
      badge: "FLAGSHIP",
      category: "Data & AI",
    },
  ];
  const navigate = useNavigate();
  return (
    <section className="relative py-16 md:py-20 bg-brand-dark overflow-hidden rounded-4xl md:rounded-2xl mx-4 md:mx-6 my-10 border border-brand-accent/10 shadow-[0_4px_40px_-10px_rgba(0,151,220,0.15)]">
      {/* Decorative blur shapes */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-brand-accent/6 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-brand-dark/6 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2.5 border border-brand-accent/40 bg-brand-accent/8 text-brand-accent font-bold tracking-[0.22em] text-[11px] uppercase px-5 py-2 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
            EXPLORE PROGRAMS
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
            Our{" "}
            <span className="relative inline-block text-brand-accent">
              Courses
              <span className="absolute -bottom-1 left-0 w-full h-0.75 bg-brand-accent rounded-full"></span>
            </span>
          </h2>

          <p className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed mb-0">
            Explore our industry-ready programs designed to transform your
            career
          </p>
        </motion.div>

        {/* Course Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {allCourses.map((course) => (
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

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "instant" });
              navigate("/courses");
            }}
            className="bg-white hover:bg-brand-accent text-brand-dark hover:text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/30 inline-flex items-center gap-2 text-base"
          >
            View All Courses
            <i className="ri-arrow-right-line"></i>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
