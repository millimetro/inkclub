"use client";

import React from "react";

export default function NavigationSimple() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-2 md:py-0 flex items-center justify-between bg-cream border-b-2 border-black min-h-[64px] md:min-h-[88px]">
      {/* Sostienici - Left */}
      <button className="font-brand font-extrabold uppercase text-black text-base px-4 py-1 border-2 border-black shadow-[8px_8px_0px_0px_rgb(22,22,22)] hover:shadow-[4px_4px_0px_0px_rgb(22,22,22)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all bg-green-500">
        SOSTIENICI
      </button>

      {/* Logo - Center */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img
          src="/logo/Logo.svg"
          alt="Ink Club Logo"
          className="h-16 md:h-20"
        />
      </div>

      {/* Contattaci - Right */}
      <button className="font-brand font-extrabold uppercase text-black text-base px-4 py-1 border-2 border-black shadow-[8px_8px_0px_0px_rgb(22,22,22)] hover:shadow-[4px_4px_0px_0px_rgb(22,22,22)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all bg-purple-500">
        CONTATTACI
      </button>
    </nav>
  );
}

