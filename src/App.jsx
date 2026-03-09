import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import ScrollToTop from "./Component/ScrollToTop.jsx";
import { courseDetail as CourseDetail } from "./pages/courseDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";
import CoursesPage from "./pages/CoursesPage.jsx";
import SuccessPage from "./pages/SuccessPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

const App = () => {
  return (
    <div className="w-screen min-h-screen bg-white text-slate-800">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/course-detail" element={<CourseDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
