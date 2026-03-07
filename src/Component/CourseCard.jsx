import { useNavigate } from "react-router-dom";

const CourseCard = ({
  image,
  title,
  description,
  months,
  certified,
  mentorSupport,
  price,
  originalPrice,
}) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-sm bg-[#e8f7fd] rounded-2xl shadow-lg overflow-hidden  hover:shadow-xl transition-shadow duration-300">
      {/* Course Image */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm mb-4">{description}</p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {/* months */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center">
              <i className="ri-time-line text-brand-accent"></i>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{months}</p>
              <p className="text-xs text-gray-500">months</p>
            </div>
          </div>

          {/* Certified */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center">
              <i className="ri-award-line text-brand-accent"></i>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{certified}</p>
              <p className="text-xs text-gray-500">Certified</p>
            </div>
          </div>

          {/* Mentor Support */}
          <div className="flex items-center gap-2 col-span-2">
            <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center">
              <i className="ri-phone-line text-brand-accent"></i>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {mentorSupport}
              </p>
              <p className="text-xs text-gray-500">Mentor Support</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-brand-accent/20 mb-4 mt-2" />

        {/* CTA Button */}
        <button
          onClick={() =>
            navigate("/course-detail", {
              state: {
                image,
                title,
                description,
                months,
                certified,
                mentorSupport,
                price,
                originalPrice,
              },
            })
          }
          className="w-full bg-brand-accent text-white py-3 px-6 rounded-lg font-semibold hover:bg-brand-dark transition-colors duration-300 flex items-center justify-center gap-2"
        >
          Check Course
          <i className="ri-arrow-right-line"></i>
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
