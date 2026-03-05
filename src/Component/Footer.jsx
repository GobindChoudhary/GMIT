import React from "react";
import logo from "../assets/logo.svg";

/**
 * Footer Component - Site footer with navigation and contact info
 *
 * Features:
 * - Company logo and description
 * - Course links, company links
 * - Newsletter subscription
 * - Social media links
 * - Contact information
 *
 * Design: Dark theme footer using brand color #003462
 */
const Footer = () => {
  // ERP course links
  const erpCourses = [
    { name: "S/4 HANA MM", href: "#" },
    { name: "S/4 HANA SD", href: "#" },
    { name: "S/4 HANA FICO", href: "#" },
    { name: "S/4 HANA EWM", href: "#" },
    { name: "S/4 HANA ABAP", href: "#" },
    { name: "S/4 HANA TM", href: "#" },
    { name: "ARIBA", href: "#" },
    { name: "SALESFORCE", href: "#" },
  ];

  // Company navigation links
  const companyLinks = [
    { name: "Success Story", href: "#" },
    { name: "Courses", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  // Social media links with icons
  const socialLinks = [
    { icon: "ri-facebook-fill", href: "#", color: "#1877f2" },
    { icon: "ri-instagram-line", href: "#", color: "#e4405f" },
    { icon: "ri-linkedin-fill", href: "#", color: "#0077b5" },
    { icon: "ri-youtube-fill", href: "#", color: "#ff0000" },
    { icon: "ri-whatsapp-line", href: "#", color: "#25d366" },
  ];

  return (
    <footer className="bg-[#003462] pt-16 pb-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-4">
              <span className="text-2xl font-bold text-white">
                {/* Tag<span className="text-[#0097dc]">Skills</span> */}
                <img className="w-40" src={logo} alt="" />
              </span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Your gateway to mastering ERP: Explore courses, gain expertise,
              and elevate your career in enterprise solutions
            </p>

            <p className="text-[#0672ba] text-sm font-medium">
              Copyright TagSkills
            </p>
          </div>

          {/* ERP Courses */}
          <div>
            <h3 className="text-[#0672ba] font-bold text-lg mb-6">
              ERP Courses
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {erpCourses.map((course, index) => (
                <a
                  key={index}
                  href={course.href}
                  className="text-slate-300 text-sm hover:text-[#0672ba] transition-colors duration-300"
                >
                  {course.name}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[#0672ba] font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-300 text-sm hover:text-[#0672ba] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-[#0672ba] font-bold text-lg mb-6">
              Join a Newsletter
            </h3>

            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full border-2 border-slate-500 flex items-center justify-center text-slate-300 hover:border-[#0672ba] hover:text-[#0672ba] transition-all duration-300"
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>

            {/* Newsletter Input */}
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-slate-500 rounded-l-lg px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#0672ba] transition-colors"
              />
              <button className="bg-[#0672ba] hover:bg-[#0672ba]/80 px-4 py-3 rounded-r-lg transition-colors duration-300">
                <i className="ri-send-plane-fill text-white"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-600/50 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-[#0672ba] hover:underline">
                Disclaimer
              </a>
              <a href="#" className="text-[#0672ba] hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="text-[#0672ba] hover:underline">
                Terms And Conditions
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row items-center gap-6 text-sm">
              {/* Address */}
              <div className="flex items-center gap-2 text-slate-300">
                <i className="ri-map-pin-line text-[#0672ba]"></i>
                <span>
                  No.412, C block, Amity Ramapriya Apartment, Hosakerehalli, BSK
                  3rd Stage, Bangalore-560085
                </span>
              </div>

              {/* Email */}
              <a
                href="mailto:support@tagskills.com"
                className="flex items-center gap-2 text-slate-300 hover:text-[#0672ba] transition-colors"
              >
                <i className="ri-mail-line text-[#0672ba]"></i>
                <span>support@gmit.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+916360959192"
                className="flex items-center gap-2 text-slate-300 hover:text-[#0672ba] transition-colors"
              >
                <i className="ri-phone-line text-[#0672ba]"></i>
                <span>+91 63609XXXXX</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center mt-8 pt-6 border-t border-slate-600/30">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} TagSkills. All rights reserved. Made
            with <span className="text-red-500">❤</span> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
