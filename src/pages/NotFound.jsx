import NotFoundImg from "../assets/404.jpg";

import React from "react";

const NotFound = () => (
  <div
    className="flex flex-col items-center justify-center min-h-screen w-full py-16 px-4 text-slate-800"
    style={{
      background: "linear-gradient(135deg, #f5fcff 0%, #e0f7fa 100%)",
    }}
  >
    <img
      src={NotFoundImg}
      alt="404 Not Found"
      className="w-80 md:w-[420px] mb-10 rounded-2xl shadow-2xl object-contain border-4 border-white"
      style={{ maxHeight: "380px" }}
    />
    <h1 className="text-4xl md:text-5xl font-bold text-[#0097dc] mb-4 drop-shadow-lg">
      404 - Page Not Found
    </h1>
    <p className="text-lg md:text-xl text-[#003462] mb-8 drop-shadow">
      Sorry, the page you are looking for does not exist.
    </p>
    <a
      href="/"
      className="inline-block px-8 py-3 rounded-full border-2 border-[#0097dc] bg-[#0097dc] text-white hover:bg-white hover:text-[#0097dc] hover:border-[#0097dc] transition-colors duration-200 font-semibold shadow-lg text-lg"
    >
      Go to Home
    </a>
  </div>
);

export default NotFound;
