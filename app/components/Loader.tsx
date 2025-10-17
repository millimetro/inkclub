"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

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
    if (!progressFillRef.current) return;

    // Create GSAP timeline for smooth animations
    const tl = gsap.timeline();

    // Initial state - elements start hidden/scaled down
    gsap.set([textRef.current, progressBarRef.current], {
      opacity: 0,
      y: 20,
      scale: 0.9
    });

    // Animate elements in
    tl.to([textRef.current, progressBarRef.current], {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2
    });

    // Animate progress bar fill
    tl.to(progressFillRef.current, {
      width: "100%",
      duration: 1.5,
      ease: "power2.inOut",
      onUpdate: function() {
        const progressValue = Math.round(this.progress() * 100);
        setProgress(progressValue);
      }
    }, "-=1");

    // Fade out and hide loader
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        setIsVisible(false);
        onLoadingComplete?.();
      }
    });

    // Cleanup is handled automatically by useGSAP
  }, { scope: containerRef, dependencies: [onLoadingComplete] });

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed h-dvh inset-0 bg-background z-50 flex items-center justify-center"
    >
      <div className="flex flex-col items-center space-y-8">
        {/* Loading Text */}
        <h3 
          ref={textRef}
          className="text-foreground text-sm md:text-lg font-medium"
        >
          Loading Creative Excellence ...
        </h3>

        {/* Progress Bar */}
        <div 
          ref={progressBarRef}
          className="md:w-64 w-48 h-6 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden border border-gray-300 dark:border-gray-600"
        >
          <div
            ref={progressFillRef}
            className="h-full bg-foreground rounded-full"
            style={{ width: "0%" }}
          >
          </div>
        </div>
        
        {/* Progress Percentage */}
        <div className="text-foreground text-xs font-medium">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
}
