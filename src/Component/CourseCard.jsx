/**
 * CourseCard Component - Premium course display card
 *
 * Props:
 * - image: Course thumbnail URL
 * - title: Course name
 * - description: Brief course description
 * - hours: Total course hours
 * - certified: Certification status
 * - mentorSupport: Support availability
 * - price: Current price
 * - originalPrice: Original price (strikethrough)
 * - variant: 'vertical' | 'horizontal' - Card layout style
 *
 * Design: Premium card with brand colors (#003462, #0672ba)
 * Responsive: Vertical on mobile/tablet, Horizontal on desktop
 */
const CourseCard = ({
  image,
  title,
  description,
  hours,
  certified,
  mentorSupport,
  price,
  originalPrice,
  variant = "vertical",
}) => {
  // Horizontal layout for tablet & desktop (premium design)
  if (variant === "horizontal") {
    return (
      <div className="w-full bg-white rounded-[2rem] shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out group border border-slate-200">
        <div className="flex flex-row">
          {/* Left: Course Image */}
          <div className="relative w-[40%] md:w-[45%] min-h-[320px] md:min-h-[400px] overflow-hidden">
            <div className="absolute inset-3 md:inset-4 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            {/* Decorative shadow beneath image */}
            <div className="absolute bottom-0 left-3 right-3 md:left-4 md:right-4 h-8 bg-gradient-to-t from-black/10 to-transparent rounded-b-2xl"></div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
            {/* Title */}
            <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold text-[#003462] mb-3 md:mb-4 leading-tight">
              {title}
            </h3>

            {/* Description */}
            <p className="text-slate-600 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              {description}
            </p>

            {/* Features Row */}
            <div className="flex flex-wrap items-center gap-4 md:gap-8 mb-6 md:mb-8">
              {/* Hours */}
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#0672ba]/10 flex items-center justify-center">
                  <i className="ri-time-line text-[#0672ba] text-lg md:text-xl"></i>
                </div>
                <div>
                  <p className="text-base md:text-lg font-bold text-[#003462]">
                    {hours}
                  </p>
                  <p className="text-xs md:text-sm text-slate-500">Hours</p>
                </div>
              </div>

              {/* Certified */}
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#0672ba]/10 flex items-center justify-center">
                  <i className="ri-award-line text-[#0672ba] text-lg md:text-xl"></i>
                </div>
                <div>
                  <p className="text-base md:text-lg font-bold text-[#003462]">
                    {certified}
                  </p>
                  <p className="text-xs md:text-sm text-slate-500">Certified</p>
                </div>
              </div>

              {/* Mentor Support */}
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#0672ba]/10 flex items-center justify-center">
                  <i className="ri-phone-line text-[#0672ba] text-lg md:text-xl"></i>
                </div>
                <div>
                  <p className="text-base md:text-lg font-bold text-[#003462]">
                    {mentorSupport}
                  </p>
                  <p className="text-xs md:text-sm text-slate-500">
                    Mentor Support
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="inline-flex items-center justify-center gap-2 bg-[#003462] text-white py-3 md:py-4 px-6 md:px-8 rounded-full font-semibold hover:bg-[#0672ba] transition-all duration-300 w-fit group-hover:shadow-xl">
              Check Course
              <i className="ri-arrow-right-line transform group-hover:translate-x-1 transition-transform duration-300"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Vertical layout for mobile/tablet
  return (
    <div className="w-full bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 ease-out group">
      {/* Course Image with overlay on hover */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 md:h-52 lg:h-56 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#003462]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Card Content */}
      <div className="p-5 md:p-6">
        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-[#003462] mb-2 leading-tight line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-500 text-sm md:text-base mb-4 line-clamp-2">
          {description}
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-2 md:gap-3 mb-4">
          {/* Hours */}
          <div className="flex flex-col items-center p-2 md:p-3 rounded-xl bg-slate-50 group-hover:bg-[#0672ba]/5 transition-colors duration-300">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#0672ba]/10 flex items-center justify-center mb-1">
              <i className="ri-time-line text-[#0672ba] text-sm md:text-base"></i>
            </div>
            <p className="text-xs md:text-sm font-semibold text-[#003462]">
              {hours}
            </p>
            <p className="text-[10px] md:text-xs text-slate-500">Hours</p>
          </div>

          {/* Certified */}
          <div className="flex flex-col items-center p-2 md:p-3 rounded-xl bg-slate-50 group-hover:bg-[#0672ba]/5 transition-colors duration-300">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#0672ba]/10 flex items-center justify-center mb-1">
              <i className="ri-award-line text-[#0672ba] text-sm md:text-base"></i>
            </div>
            <p className="text-xs md:text-sm font-semibold text-[#003462]">
              {certified}
            </p>
            <p className="text-[10px] md:text-xs text-slate-500">Certified</p>
          </div>

          {/* Mentor Support */}
          <div className="flex flex-col items-center p-2 md:p-3 rounded-xl bg-slate-50 group-hover:bg-[#0672ba]/5 transition-colors duration-300">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#0672ba]/10 flex items-center justify-center mb-1">
              <i className="ri-customer-service-2-line text-[#0672ba] text-sm md:text-base"></i>
            </div>
            <p className="text-xs md:text-sm font-semibold text-[#003462]">
              {mentorSupport}
            </p>
            <p className="text-[10px] md:text-xs text-slate-500">Support</p>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-[#003462] text-white py-3 md:py-3.5 px-6 rounded-full font-semibold hover:bg-[#0672ba] transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
          Check Course
          <i className="ri-arrow-right-line transform group-hover:translate-x-1 transition-transform duration-300"></i>
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
