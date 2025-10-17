import { gsap } from "gsap";

// GSAP DevTools - solo in development
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  gsap.config({
    nullTargetWarn: false,
    trialWarn: false,
  });
}

export const createLoaderAnimation = (
  textRef,
  progressBarRef,
  progressFillRef,
  containerRef,
  setProgress,
  setIsVisible,
  onLoadingComplete
) => {
  if (!progressFillRef.current) return;

  const tl = gsap.timeline({
    id: "loader-timeline"
  });

  // Initial state - elements start hidden/scaled down
  gsap.set([textRef.current, progressBarRef.current], {
    opacity: 0,
    y: 20,
    scale: 0.9
  });

  // Phase 1: Animate elements in
  tl.to([textRef.current, progressBarRef.current], {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2
  }, "phase1");

  // Phase 2: Animate progress bar fill (overlaps with phase 1)
  tl.to(progressFillRef.current, {
    width: "100%",
    duration: 1.5,
    ease: "power2.inOut",
    onUpdate: function() {
      const progressValue = Math.round(this.progress() * 100);
      setProgress(progressValue);
    }
  }, "phase2-=1");

  // Phase 3: Fade out and hide loader
  tl.to(containerRef.current, {
    opacity: 0,
    duration: 0.5,
    ease: "power2.inOut",
    onComplete: () => {
      setIsVisible(false);
      onLoadingComplete?.();
    }
  }, "phase3");

  // Expose timeline globally for development debugging
  if (process.env.NODE_ENV === "development") {
    (window).loaderTimeline = tl;
  }
};
