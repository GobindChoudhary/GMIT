import React from "react";
import msmeLogo from "../assets/msmeLogo.png";

/**
 * About Section Component
 *
 * Features:
 * - Company information and mission
 * - Founder profile card with social links
 * - MSME certification badge
 * - Responsive two-column layout
 */
const About = () => {
  return (
    <section className="py-16 px-6 lg:px-12 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#003462] mb-12">
          About Us
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Content - Company Info */}
          <div className="flex-1 space-y-8">
            {/* About TagSkills */}
            <div>
              <h3 className="text-lg font-bold text-[#003462] mb-2">
                About TagSkills
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                At TagSkills, we are more than just an educational institution;
                we are your gateway to a future defined by success in the
                digital economy. Founded with the vision to empower
                professionals across the globe, TagSkills has quickly
                established itself as a beacon of excellence in online training.
                Our mission is to unlock the full potential of our students,
                equipping them with the cutting-edge skills required to excel in
                today's fast-paced business environment. TagSkills has been
                committed to providing quality education and knowledge to many
                aspirants, focusing on effective employability training and
                rewarding career. We recognize that different candidates have
                different training requirements, so we provide a variety of
                courses to a different set of candidates. Our training ensures
                IT professionals, business users, and decision-makers have the
                knowledge they need to drive an enterprise effectively.
                Established in 2020, TagSkills is recognized as the best Virtual
                Training center.
              </p>
            </div>

            {/* Commitment to Excellence */}
            <div>
              <h3 className="text-lg font-bold text-[#003462] mb-2">
                Commitment to Excellence
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                TagSkills is committed to fostering a learning environment that
                encourages growth, innovation, and excellence. We continuously
                update our course offerings to reflect the latest industry
                trends and ensure that our students are prepared to meet the
                challenges of tomorrow. By choosing TagSkills, you're not just
                enrolling in a course; you're investing in a future where you
                are an in-demand professional, equipped with the knowledge and
                skills to lead in the digital age.
              </p>
            </div>

            {/* Join Our Community */}
            <div>
              <h3 className="text-lg font-bold text-[#003462] mb-2">
                Join Our Community
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Become part of a thriving community of professionals who have
                transformed their careers with TagSkills. Whether you're looking
                to advance in your current role or pivot to a new field
                entirely, our courses provide the foundation you need to achieve
                your goals. Let TagSkills be the catalyst for your professional
                transformation. Start your journey with us today.
              </p>
            </div>

            {/* Accreditations */}

            <div className=" flex items-center gap-2 w-80 border border-slate-200 rounded-lg px-4 py-2 bg-slate-50">
              <img
                src={msmeLogo}
                alt="Government of India"
                className="w-8 h-10 object-contain"
              />
              <div className="text-xs text-slate-600">
                <p className="font-semibold text-[#003462]">MSME</p>
                <p>Ministry of MSME, Govt. of India</p>
              </div>
            </div>
          </div>

          {/* Right Content - Founder Card */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Gradient Background */}
              <div className="absolute -bottom-4 -right-4 w-64 h-80 bg-gradient-to-br from-[#0672ba] to-[#00d9a5] rounded-3xl"></div>

              {/* Founder Image */}
              <div className="relative z-10 w-64 h-80 rounded-3xl overflow-hidden border-4 border-[#0672ba]">
                <img
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Founder Info */}
            <div className="mt-8 text-center">
              <h4 className="text-xl font-bold text-[#003462]">
                Prashun Shetty
              </h4>
              <p className="text-slate-500 text-sm">Founder & CEO</p>

              {/* Social Links */}
              <div className="flex justify-center gap-3 mt-3">
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                >
                  <i className="ri-instagram-line"></i>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg bg-[#0077b5] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                >
                  <i className="ri-linkedin-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
