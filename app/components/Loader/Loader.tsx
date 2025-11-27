"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { createLoaderAnimation } from "./anim";
import Image from "next/image";

interface LoaderProps {
  onLoadingComplete?: () => void;
}


export default function Loader({ onLoadingComplete }: LoaderProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const claimRef = useRef<HTMLHeadingElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useGSAP(() => {
    if (!isMounted) return;
    createLoaderAnimation(
      logoRef,
      claimRef,
      progressBarRef,
      progressFillRef,
      containerRef,
      setProgress,
      setIsVisible,
      onLoadingComplete
    );
  }, { scope: containerRef, dependencies: [onLoadingComplete, isMounted] });

  if (!isMounted || !isVisible) return null;

  return (
    <div
      ref={containerRef}
      id="loaderContainer"
      data-loader="true"
      className="fixed h-dvh inset-0 bg-black z-50 flex items-center justify-center"
    >
      <div className="relative w-full h-full">
        {/* Logo - Centered */}
        <div 
          ref={logoRef}
          id="loaderLogo"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Image 
            src="/logo/Logo_w.svg" 
            alt="Ink Club Logo" 
            width={500}
            height={500}
            className="w-auto h-56 md:h-80 lg:h-96"
            priority
          />
        </div>

        {/* Claim Text - Far Left */}
        <h2 
          ref={claimRef}
          id="loaderClaim"
          className="absolute bottom-8 left-8 text-white font-bold font-brand text-lg md:text-2xl neobrutalist-text uppercase leading-none"
        >
          Il tuo circolo
          <br />
          a Bergamo
        </h2>

        {/* Progress Bar - Far Right */}
        <div 
          ref={progressBarRef}
          className="absolute bottom-8 right-8 flex flex-col items-end gap-2"
        >
          <div 
            id="progressBar"
            className="md:w-64 w-48 h-8 bg-white border-4 border-cream p-0 overflow-hidden"
            style={{ boxShadow: "8px 8px 0px 0px var(--cream)" }}
          >
            <div
              ref={progressFillRef}
              id="progressFill"
              className="h-full bg-black"
              style={{ width: "0%" }}
            >
            </div>
          </div>
          <div className="text-white font-bold font-brand text-sm md:text-base">
            {Math.round(progress)}%
          </div>
        </div>
      </div>
    </div>
  );
}
