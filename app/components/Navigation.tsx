import React from "react";

export default function Navigation() {
  const navItems = ["CLUB", "PUB", "RADIO", "CLAMORE", "ACADEMY"];

  const getItemClasses = (item: string) => {
    const baseClasses = "font-brand font-extrabold uppercase text-lg px-2 py-1 border-4 border-black shadow-[8px_8px_0px_0px_rgb(22,22,22)] hover:shadow-[4px_4px_0px_0px_rgb(22,22,22)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all text-black";
    
    switch (item) {
      case "CLUB":
        return `${baseClasses} hover:bg-black hover:text-cream`;
      case "PUB":
        return `${baseClasses} hover:bg-teal-700 hover:text-cream`;
      case "RADIO":
        return `${baseClasses} hover:bg-red-500 hover:text-black`;
      case "CLAMORE":
        return `${baseClasses} hover:bg-orange-600 hover:text-cream`;
      case "ACADEMY":
        return `${baseClasses} hover:bg-sky-600 hover:text-pink-300`;
      default:
        return baseClasses;
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-2 flex items-center justify-between bg-cream border-b-4 border-black">
      {/* Logo */}
      <div>
        <img
          src="/logo/Logo.svg"
          alt="Ink Club Logo"
          className="h-20"
        />
      </div>

      {/* Nav items */}
      <div className="flex items-center gap-4 mr-8">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={getItemClasses(item)}
          >
            {item}
          </a>
        ))}
        <button className="font-brand font-extrabold uppercase text-cream text-lg px-4 py-1 border-4 border-black shadow-[8px_8px_0px_0px_rgb(22,22,22)] hover:shadow-[4px_4px_0px_0px_rgb(22,22,22)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all bg-purple-500">
          CONTATTACI
        </button>
      </div>
    </nav>
  );
}

