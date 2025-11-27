import React from "react";

interface ImageBoxProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function ImageBox({ src, alt = "", className = "" }: ImageBoxProps) {
  return (
    <div className={`border-4 border-black rounded-3xl overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

