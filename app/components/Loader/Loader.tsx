"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { createLoaderAnimation } from "./anim";

interface LoaderProps {
  onLoadingComplete?: () => void;
}


export default function Loader({ onLoadingComplete }: LoaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    createLoaderAnimation(
      textRef,
      progressBarRef,
      progressFillRef,
      containerRef,
      setProgress,
      setIsVisible,
      onLoadingComplete
    );
  }, { scope: containerRef, dependencies: [onLoadingComplete] });

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      id="loaderContainer"
      data-loader="true"
      className="fixed h-dvh inset-0 bg-background z-50 flex items-center justify-center"
    >
      <div className="flex flex-col items-center space-y-8">
        {/* Loading Text */}
        <h3 
          ref={textRef}
          id="loaderText"
          className="text-foreground text-sm md:text-lg font-medium"
        >
          Loading Creative Excellence ...
        </h3>

        {/* Progress Bar */}
        <div 
          ref={progressBarRef}
          id="progressBar"
          className="md:w-64 w-48 h-6 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden border border-gray-300 dark:border-gray-600"
        >
          <div
            ref={progressFillRef}
            id="progressFill"
            className="h-full bg-foreground rounded-full"
            style={{ width: "0%" }}
          >
          </div>
        </div>
        
        {/* Progress Percentage */}
        <div id="progressPercentage" className="text-foreground text-xs font-medium">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
}
