import React from "react";
import { menuItems } from "./data";

export default function Menu() {
  return (
    <nav className="fixed top-0 left-0 w-full h-screen bg-black z-50 font-apfel">
      <img
        src="/logo/Logo_w.svg"
        alt="Ink Club Logo"
        className="h-[12vh] mx-auto"
      />

      <ul className="flex justify-end gap-4">
        {menuItems.map((item) => (
          <li key={item.label}>
            <a href={item.href}>{item.label}</a>        
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black">
        <p className="text-white text-center">Copyright 2025 Ink Club</p>
      </div>
    </nav>
  );
}
