"use client";

import React, { useEffect, useState } from "react";

export default function NavigationSimple() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const valuesSection = document.getElementById("values");
      const footerSection = document.getElementById("footer");

      if (!valuesSection || !footerSection) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const valuesTop = valuesSection.offsetTop;
      const valuesBottom = valuesSection.offsetTop + valuesSection.offsetHeight;
      const footerTop = footerSection.offsetTop;
      const footerBottom = footerSection.offsetTop + footerSection.offsetHeight;

      // Check if scroll position is within values section or footer
      const isInValues = scrollY + windowHeight * 0.1 >= valuesTop && scrollY <= valuesBottom;
      const isInFooter = scrollY + windowHeight * 0.1 >= footerTop && scrollY <= footerBottom;

      setIsHidden(isInValues || isInFooter);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 md:px-8 py-2 md:py-0 flex items-center justify-between bg-cream border-b-2 border-black min-h-[72px] md:min-h-[96px] transition-transform duration-300 ${isHidden ? "-translate-y-full" : ""}`}>
      {/* Sostienici - Left */}
      <button className="inline-flex items-center gap-2 px-3 md:px-4 py-0.5 md:py-1.5 border-2 border-black rounded-full bg-black text-green-500 font-bold font-brand uppercase text-sm sm:text-sm md:text-base shadow-[8px_8px_0px_0px_rgb(34,197,94)] hover:shadow-[4px_4px_0px_0px_rgb(34,197,94)] hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-green-500 hover:text-black transition-all duration-300">
        <svg
          className="w-4 h-4 md:w-5 md:h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        Sostienici
      </button>

      {/* Logo - Center */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img
          src="/logo/Logo.svg"
          alt="Ink Club Logo"
          className="h-24 md:h-28"
        />
      </div>

      {/* Contattaci - Right */}
      <button className="inline-flex items-center gap-2 px-3 md:px-4 py-0.5 md:py-1.5 border-2 border-black rounded-full bg-black text-purple-500 font-bold font-brand uppercase text-sm sm:text-sm md:text-base shadow-[8px_8px_0px_0px_rgb(168,85,247)] hover:shadow-[4px_4px_0px_0px_rgb(168,85,247)] hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-purple-500 hover:text-black transition-all duration-300">
        <svg
          className="w-4 h-4 md:w-5 md:h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
        Contattaci
      </button>
    </nav>
  );
}

