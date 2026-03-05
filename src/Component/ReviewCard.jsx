import React from "react";

/**
 * ReviewCard Component - Individual testimonial card
 *
 * Props:
 * - name: Reviewer's name
 * - company: Reviewer's company
 * - experience: Years of experience
 * - rating: Numeric rating (1-5)
 * - review: Review text content
 * - linkedin: Whether to show LinkedIn badge
 */
const ReviewCard = ({
  name,
  company,
  experience,
  rating,
  review,
  linkedin,
}) => {
  /**
   * Renders star rating icons
   * @param {number} rating - Rating value (can include half stars)
   * @returns {JSX.Element[]} Array of star icons
   */
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<i key={i} className="ri-star-fill text-yellow-400"></i>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <i key={i} className="ri-star-half-fill text-yellow-400"></i>,
        );
      } else {
        stars.push(<i key={i} className="ri-star-fill text-slate-300"></i>);
      }
    }
    return stars;
  };

  // Get initials from name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="max-w-md bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Header - Avatar and Info */}
      <div className="flex items-center gap-4 mb-4">
        {/* Avatar - Show initials if no image */}
        <div className="w-14 h-14 rounded-full border-2 border-[#0672ba]/30 flex items-center justify-center bg-gradient-to-br from-[#003462] to-[#0672ba] text-white font-bold text-lg">
          {getInitials(name)}
        </div>
        {/* Name and Company */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="text-[#003462] font-semibold text-lg">{name}</h4>
            {linkedin && (
              <i className="ri-linkedin-box-fill text-[#0077b5] text-lg"></i>
            )}
          </div>
          <p className="text-[#0672ba] text-sm">{company}</p>
          <p className="text-slate-500 text-xs">{experience}</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-slate-200 mb-4" />

      {/* Rating */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-slate-500 text-sm">{rating}</span>
        <div className="flex gap-0.5">{renderStars(rating)}</div>
      </div>

      {/* Review Text */}
      <p className="text-slate-600 text-sm leading-relaxed">{review}</p>
    </div>
  );
};

export default ReviewCard;
