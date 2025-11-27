import { gsap } from "gsap";

// GSAP DevTools - solo in development
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  gsap.config({
    nullTargetWarn: false,
    trialWarn: false,
  });
}

export const createLoaderAnimation = (
  logoRef,
  claimRef,
  progressBarRef,
  progressFillRef,
  containerRef,
  setProgress,
  setIsVisible,
  onLoadingComplete
) => {
  if (!logoRef.current || !progressFillRef.current) return;

  const tl = gsap.timeline({
    id: "loader-timeline"
  });

  // Initial state - elements start hidden/scaled down
  gsap.set([logoRef.current, claimRef.current, progressBarRef.current], {
    opacity: 0,
    y: 30,
    scale: 0.8
  });

  // Phase 1: Animate logo in with bounce
  tl.to(logoRef.current, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.6,
    ease: "back.out(1.7)"
  }, "phase1");

  // Phase 2: Animate claim text in
  tl.to(claimRef.current, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.6,
    ease: "back.out(1.4)"
  }, "phase1+=0.2");

  // Phase 3: Animate progress bar in
  tl.to(progressBarRef.current, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.5,
    ease: "power2.out"
  }, "phase1+=0.4");

  // Phase 4: Animate progress bar fill from 0 to 100%
  tl.to(progressFillRef.current, {
    width: "100%",
    duration: 1.5,
    ease: "power2.inOut",
    onUpdate: function() {
      const progressValue = Math.round(this.progress() * 100);
      setProgress(progressValue);
    }
  }, "phase1+=0.6");

  // Phase 5: Fade out and hide loader
  tl.to(containerRef.current, {
    opacity: 0,
    duration: 0.5,
    ease: "power2.inOut",
    onComplete: () => {
      setIsVisible(false);
      onLoadingComplete?.();
    }
  }, "phase1+=2.1");

  // Expose timeline globally for development debugging
  if (process.env.NODE_ENV === "development") {
    (window).loaderTimeline = tl;
  }
};
