/* ============================================
   CENTRALIZED COURSE DATA
   Single source of truth for all course information.
   Import from here in any component that needs course data.
   ============================================ */

// ─── All Courses ───
export const allCourses = [
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
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800",
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
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
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
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
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

// ─── Filter Categories ───
export const categories = ["All", "Development", "Data & AI", "ERP", "Security"];

// ─── Fallback course data if navigated directly to course detail ───
export const defaultCourse = {
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  title: "Data Science & Analytics with Gen AI",
  description:
    "Gain hands-on experience in data analysis, visualization, and AI integration.",
  months: "115+",
  certified: "Yes",
  mentorSupport: "24/7",
  price: "6999",
  originalPrice: "14891",
};

// ─── Extended details per course (keyed by title) ───
export const courseExtras = {
  "Data Science & Analytics with Gen AI": {
    whatYouLearn: [
      "Python for data analysis and automation",
      "Statistical methods and hypothesis testing",
      "Data visualization with Matplotlib & Seaborn",
      "Machine Learning with scikit-learn",
      "Deep Learning fundamentals with TensorFlow",
      "Generative AI concepts and prompt engineering",
      "Real-world data cleaning and preprocessing",
      "Building end-to-end ML pipelines",
    ],
    includes: [
      { icon: "ri-play-circle-line", text: "115+ hours on-demand video" },
      { icon: "ri-download-line", text: "45 downloadable resources" },
      { icon: "ri-global-line", text: "Access on website & app" },
      { icon: "ri-medal-line", text: "Certificate of completion" },
    ],
    highlights: [
      { icon: "ri-bar-chart-2-line", label: "Beginner", desc: "Level" },
      { icon: "ri-calendar-line", label: "20 Weeks", desc: "Duration" },
      { icon: "ri-live-line", label: "Live", desc: "Workshops" },
      { icon: "ri-user-heart-line", label: "1 on 1", desc: "Mentorship" },
    ],
  },
  "Full Stack Web Development (MERN)": {
    whatYouLearn: [
      "HTML, CSS, and modern JavaScript (ES6+)",
      "React.js with hooks and state management",
      "Node.js and Express.js server development",
      "MongoDB database design and CRUD operations",
      "RESTful API design and authentication",
      "Deployment with cloud platforms",
      "Git version control and collaboration",
      "Building complete full-stack projects",
    ],
    includes: [
      { icon: "ri-play-circle-line", text: "120+ hours on-demand video" },
      { icon: "ri-download-line", text: "50 downloadable resources" },
      { icon: "ri-global-line", text: "Access on website & app" },
      { icon: "ri-medal-line", text: "Certificate of completion" },
    ],
    highlights: [
      { icon: "ri-bar-chart-2-line", label: "Beginner", desc: "Level" },
      { icon: "ri-calendar-line", label: "24 Weeks", desc: "Duration" },
      { icon: "ri-live-line", label: "Live", desc: "Workshops" },
      { icon: "ri-user-heart-line", label: "1 on 1", desc: "Mentorship" },
    ],
  },
};

// ─── Fallback extras for courses without specific extended details ───
export const defaultExtras = {
  whatYouLearn: [
    "Core concepts and foundational theory",
    "Hands-on projects with real-world scenarios",
    "Industry best practices and workflows",
    "Tools and frameworks used by professionals",
    "Problem-solving and debugging techniques",
    "Portfolio-ready capstone project",
  ],
  includes: [
    { icon: "ri-play-circle-line", text: "100+ hours on-demand video" },
    { icon: "ri-download-line", text: "30+ downloadable resources" },
    { icon: "ri-global-line", text: "Access on website & app" },
    { icon: "ri-medal-line", text: "Certificate of completion" },
  ],
  highlights: [
    { icon: "ri-bar-chart-2-line", label: "Beginner", desc: "Level" },
    { icon: "ri-calendar-line", label: "16 Weeks", desc: "Duration" },
    { icon: "ri-live-line", label: "Live", desc: "Workshops" },
    { icon: "ri-user-heart-line", label: "1 on 1", desc: "Mentorship" },
  ],
};
