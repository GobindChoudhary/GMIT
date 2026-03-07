import React from "react";
import { motion } from "framer-motion";
import ReviewCard from "./ReviewCard";
import { reviewsData } from "../data/reviews";

/**
 * Reviews Section Component
 *
 * Features:
 * - Two rows of testimonials with opposite scroll directions
 * - Auto-scrolling animation with pause on hover
 * - Light theme with subtle background
 */
const Reviews = () => {

  // Split reviews into two rows for animation
  const reviewsRow1 = reviewsData.slice(0, 7);
  const reviewsRow2 = reviewsData.slice(7);

  return (
    <section className="py-20 md:py-24 bg-brand-dark overflow-hidden">
      {/* Section Header */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2.5 border border-white/30 bg-white/10 text-white font-bold tracking-[0.22em] text-[11px] uppercase px-5 py-2 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
          HEAR FROM OUR STUDENTS
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          We Help <span className="text-brand-accent">Learners</span> Become
          Industry-
          <br />
          Ready Developers.
        </h2>
      </motion.div>

      {/* Row 1 - Moving Left */}
      <div className="relative mb-5">
        <div className="flex animate-scroll-left">
          {[...reviewsRow1, ...reviewsRow1].map((review, index) => (
            <div key={index} className="shrink-0 w-80 mx-2">
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Moving Right */}
      <div className="relative">
        <div className="flex animate-scroll-right">
          {[...reviewsRow2, ...reviewsRow2].map((review, index) => (
            <div key={index} className="shrink-0 w-80 mx-2">
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 15s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 15s linear infinite;
        }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Reviews;
