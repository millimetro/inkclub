"use client";

import { useState } from "react";
import { gsap } from "gsap";
import { GSAPTimelineViewerProps, TimelinePosition } from "../types";
import { useTimeline } from "../hooks/useTimeline";
import { TimelineControls } from "./TimelineControls";
import { EasingCurveVisualization } from "./EasingCurveVisualization";
import { generateEasingCurve, getHexColor } from "../utils";

export default function GSAPTimelineViewer({
  timelineId = "loader-timeline",
  className = "",
  position = "top-right",
  phases: customPhases,
  animatedElements: customElements,
  title = "Timeline",
  autoAnalyze = true,
}: GSAPTimelineViewerProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isScrubbing, setIsScrubbing] = useState(false);
  const [isElementsTimelineCollapsed, setIsElementsTimelineCollapsed] = useState(true);
  const [isEasingCurvesCollapsed, setIsEasingCurvesCollapsed] = useState(true);
  
  const { timeline, isPlaying, progress, duration, analyzedData } = useTimeline(timelineId, autoAnalyze);
  
  const phases = customPhases || analyzedData?.phases || [];
  const animatedElements = customElements || analyzedData?.elements || [];

  // Position classes helper
  const getPositionClasses = (position: TimelinePosition): string => {
    switch (position) {
      case 'top-right':
        return 'fixed top-4 right-4 z-50';
      case 'top-left':
        return 'fixed top-4 left-4 z-50';
      case 'top':
        return 'fixed top-4 left-1/2 transform -translate-x-1/2 z-50';
      case 'bottom-right':
        return 'fixed bottom-4 right-4 z-50';
      case 'bottom-left':
        return 'fixed bottom-4 left-4 z-50';
      case 'bottom':
        return 'fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50';
      default:
        return 'fixed top-4 right-4 z-50';
    }
  };

  const handlePlay = () => {
    if (timeline) {
      timeline.play();
    }
  };

  const handlePause = () => {
    if (timeline) {
      timeline.pause();
    }
  };

  const handleRestart = () => {
    if (timeline) {
      timeline.restart();
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timeline) {
      const seekProgress = parseFloat(e.target.value);
      timeline.progress(seekProgress);
    }
  };

  const handleScrubStart = () => {
    if (timeline) {
      setIsScrubbing(true);
      timeline.pause();
    }
  };

  const handleScrubEnd = () => {
    setIsScrubbing(false);
  };

  const handleScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timeline && isScrubbing) {
      const seekProgress = parseFloat(e.target.value);
      timeline.progress(seekProgress);
    }
  };

  if (!timeline) {
    return (
      <div
        className={`p-4 bg-gray-100 dark:bg-gray-800 rounded-lg ${className}`}
      >
        <div className="text-sm text-gray-600 dark:text-gray-400">
          🎬 Timeline "{timelineId}" non trovata. Assicurati che il componente sia
          stato caricato e che la timeline sia stata creata.
        </div>
      </div>
    );
  }

  const currentTime = progress * duration;

  // Se è collassato, mostra solo il bottoncino
  if (isCollapsed) {
    return (
      <div className={`${getPositionClasses(position)} ${className}`}>
        <button
          onClick={() => setIsCollapsed(false)}
          className="relative px-2 py-1 bg-black/90 backdrop-blur-sm border border-gray-700/50 rounded shadow-xl hover:bg-black/95 transition-all duration-200"
          title="Expand Timeline Viewer"
        >
          <span className="text-xs font-mono text-gray-300">{title}</span>

          {/* Play indicator */}
          {isPlaying && (
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          )}
        </button>
      </div>
    );
  }

  return (
    <>
      <style jsx>{`
        .gsap-timeline-viewer::-webkit-scrollbar {
          width: 6px;
        }

        .gsap-timeline-viewer::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 3px;
        }

        .gsap-timeline-viewer::-webkit-scrollbar-thumb {
          background: #4b5563;
          border-radius: 3px;
        }

        .gsap-timeline-viewer::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>
      <div
        className={`${getPositionClasses(position)} bg-black/90 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-xl max-h-[95dvh] overflow-x-auto overflow-y-auto w-sm gsap-timeline-viewer ${className}`}
      >
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-700/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="px-1.5 py-0.5 bg-blue-900/30 text-blue-300 text-[10px] font-mono rounded border border-blue-700/30">
              {title}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  isScrubbing
                    ? "bg-yellow-400 animate-pulse"
                    : isPlaying
                    ? "bg-green-400"
                    : "bg-gray-500"
                }`}
              ></div>
              <span className="text-xs text-gray-400">
                {isScrubbing ? "scrubbing" : isPlaying ? "playing" : "paused"}
              </span>
            </div>
            <button
              onClick={() => setIsCollapsed(true)}
              className="flex items-center justify-center w-6 h-6 rounded bg-gray-800 hover:bg-gray-700 transition-colors"
              title="Collapse Timeline Viewer"
            >
              <svg
                className="w-3 h-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="p-4">
        {/* Timeline generale bianca */}
        <div className="relative mb-3">
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            {/* Progress indicator principale */}
            <div
              className="absolute top-0 h-full w-0.5 bg-white shadow-lg z-10"
              style={{ left: `${progress * 100}%` }}
            />
          </div>

          {/* Time labels */}
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>0s</span>
            <span>{duration.toFixed(1)}s</span>
          </div>
        </div>

        {/* Timeline individuali degli elementi */}
        <div className="space-y-1">
          {animatedElements.map((element, index) => {
            const elementStartPercent = (element.startTime / duration) * 100;
            const elementWidthPercent = (element.duration / duration) * 100;
            const isActive =
              currentTime >= element.startTime &&
              currentTime <= element.startTime + element.duration;
            const progressInElement = Math.max(
              0,
              Math.min(1, (currentTime - element.startTime) / element.duration)
            );

            return (
              <div key={index} className="relative">
                {/* Timeline individuale */}
                <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`absolute h-full ${element.color} ${
                      isActive ? "opacity-100" : "opacity-60"
                    } transition-opacity duration-200`}
                    style={{
                      left: `${elementStartPercent}%`,
                      width: `${elementWidthPercent}%`,
                    }}
                  />

                  {/* Progress indicator individuale */}
                  {isActive && (
                    <div
                      className="absolute top-0 h-full bg-white opacity-50"
                      style={{
                        left: `${elementStartPercent}%`,
                        width: `${elementWidthPercent * progressInElement}%`,
                      }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <TimelineControls
          isPlaying={isPlaying}
          isScrubbing={isScrubbing}
          progress={progress}
          onPlay={handlePlay}
          onPause={handlePause}
          onRestart={handleRestart}
          onSeek={handleSeek}
          onScrubStart={handleScrubStart}
          onScrubEnd={handleScrubEnd}
          onScrub={handleScrub}
        />

        {/* Phase indicators */}
        <div className="flex justify-between text-xs">
          {phases.map((phase, index) => {
            const isActive =
              currentTime >= phase.start &&
              currentTime <= phase.start + phase.duration;

            return (
              <div
                key={index}
                className={`flex items-center space-x-1 ${
                  isActive ? "text-white" : "text-gray-400"
                } transition-colors`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full ${phase.color
                    .replace("bg-", "bg-")
                    .replace("-500", "-400")}`}
                ></div>
                <span className="font-medium">{phase.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Elements Timeline */}
      <div className={`border-t border-gray-700/50 ${isElementsTimelineCollapsed ? 'py-2 px-4' : 'p-4'}`}>
        <div className={`flex items-center justify-between ${isElementsTimelineCollapsed ? 'mb-0' : 'mb-3'}`}>
          <span className="px-1.5 py-0.5 bg-indigo-900/30 text-indigo-300 text-[10px] font-mono rounded border border-indigo-700/30">
            Elements Timeline
          </span>
          <button
            onClick={() => setIsElementsTimelineCollapsed(!isElementsTimelineCollapsed)}
            className="flex items-center justify-center w-5 h-5 rounded bg-gray-800 hover:bg-gray-700 transition-colors"
            title={isElementsTimelineCollapsed ? "Expand Elements Timeline" : "Collapse Elements Timeline"}
          >
            <svg
              className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${
                isElementsTimelineCollapsed ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {!isElementsTimelineCollapsed && (
          <div className="space-y-2">
            {animatedElements.map((element, index) => {
            const elementStartPercent = (element.startTime / duration) * 100;
            const elementWidthPercent = (element.duration / duration) * 100;
            const isActive =
              currentTime >= element.startTime &&
              currentTime <= element.startTime + element.duration;
            const progressInElement = Math.max(
              0,
              Math.min(1, (currentTime - element.startTime) / element.duration)
            );

            return (
              <div key={index} className="group">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center space-x-2">
                    <div
                      className={`w-2 h-2 rounded-full ${element.color} ${
                        isActive ? "ring-1 ring-white" : ""
                      } transition-all`}
                    ></div>
                    <span
                      className={`text-xs font-medium transition-colors ${
                        isActive ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {element.name}
                    </span>
                    {isActive && (
                      <span
                        className={`text-xs font-medium ${
                          element.color === "bg-blue-400"
                            ? "text-blue-300"
                            : element.color === "bg-purple-400"
                            ? "text-purple-300"
                            : element.color === "bg-green-400"
                            ? "text-green-300"
                            : element.color === "bg-orange-400"
                            ? "text-orange-300"
                            : "text-amber-400"
                        }`}
                      >
                        {(progressInElement * 100).toFixed(0)}%
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 flex-wrap gap-1 min-w-0 flex-shrink-0">
                    <span className="text-xs text-gray-500 font-mono whitespace-nowrap">
                      {element.startTime.toFixed(1)}s -{" "}
                      {(element.startTime + element.duration).toFixed(1)}s
                    </span>
                    {element.delay && element.delay > 0 && (
                      <span className="text-[10px] px-1 py-0.5 bg-orange-900/30 text-orange-300 rounded font-mono border border-orange-700/30">
                        +{element.delay.toFixed(1)}s
                      </span>
                    )}
                    {element.easing && (
                      <span className="text-[10px] px-1 py-0.5 bg-indigo-900/30 text-indigo-300 rounded font-mono border border-indigo-700/30">
                        {element.easing}
                      </span>
                    )}
                  </div>
                </div>

                {/* Element timeline bar */}
                <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`absolute h-full ${element.color} ${
                      isActive ? "opacity-100" : "opacity-60"
                    } transition-opacity duration-200`}
                    style={{
                      left: `${elementStartPercent}%`,
                      width: `${elementWidthPercent}%`,
                    }}
                  />

                  {/* Progress within element */}
                  {isActive && (
                    <div
                      className="absolute h-full bg-white opacity-50"
                      style={{
                        left: `${elementStartPercent}%`,
                        width: `${elementWidthPercent * progressInElement}%`,
                      }}
                    />
                  )}
                </div>

                {/* Properties and Easing */}
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center space-x-1 flex-wrap gap-1 min-w-0 flex-1">
                    {element.properties.map((prop, propIndex) => {
                      // Calcola i valori reali basati sul progresso dell'elemento
                      const elementProgress = Math.max(
                        0,
                        Math.min(
                          1,
                          (currentTime - element.startTime) / element.duration
                        )
                      );
                      let currentValue = "";

                      // Calcola i valori usando GSAP easing
                      let easedProgress = elementProgress;
                      if (element.easing) {
                        try {
                          const easingFunc = gsap.parseEase(element.easing);
                          if (typeof easingFunc === 'function') {
                            easedProgress = easingFunc(elementProgress);
                          }
                        } catch (error) {
                          easedProgress = elementProgress;
                        }
                      }

                      // Simula i valori basati sulla proprietà
                      switch (prop) {
                        case "opacity":
                          currentValue = `opacity:${(easedProgress * 100).toFixed(0)}%`;
                          break;
                        case "y":
                          currentValue = `y:${Math.round(20 - easedProgress * 20)}px`;
                          break;
                        case "scale":
                          currentValue = `scale:${(0.9 + easedProgress * 0.1).toFixed(2)}`;
                          break;
                        case "width":
                          currentValue = `width:${(easedProgress * 100).toFixed(0)}%`;
                          break;
                        default:
                          currentValue = `${prop}:${easedProgress.toFixed(2)}`;
                      }

                      const isActive =
                        currentTime >= element.startTime &&
                        currentTime <= element.startTime + element.duration;

                      return (
                        <span
                          key={propIndex}
                          className={`text-[10px] px-1 py-0.5 rounded font-mono ${
                            isActive
                              ? element.color === "bg-blue-400"
                                ? "bg-blue-900/30 text-blue-300 border border-blue-700/30"
                                : element.color === "bg-purple-400"
                                ? "bg-purple-900/30 text-purple-300 border border-purple-700/30"
                                : element.color === "bg-green-400"
                                ? "bg-green-900/30 text-green-300 border border-green-700/30"
                                : element.color === "bg-orange-400"
                                ? "bg-orange-900/30 text-orange-300 border border-orange-700/30"
                                : "bg-cyan-900/30 text-cyan-300 border border-cyan-700/30"
                              : "bg-gray-800 text-gray-400"
                          }`}
                        >
                          {currentValue}
                        </span>
                      );
                    })}
                  </div>

                  {element.easing && (
                    <>
                      {/* Easing curve chart */}
                      <div className="w-16 h-12 bg-gray-900 border border-gray-700 rounded overflow-hidden">
                        <svg
                          width="64"
                          height="48"
                          viewBox="0 0 64 48"
                          className="w-full h-full"
                        >
                          {/* Grid lines */}
                          <defs>
                            <pattern
                              id="grid"
                              width="8"
                              height="8"
                              patternUnits="userSpaceOnUse"
                            >
                              <path
                                d="M 8 0 L 0 0 0 8"
                                fill="none"
                                stroke="#374151"
                                strokeWidth="0.5"
                              />
                            </pattern>
                          </defs>
                          <rect width="64" height="48" fill="url(#grid)" />

                          {/* Axes */}
                          <line
                            x1="4"
                            y1="44"
                            x2="60"
                            y2="44"
                            stroke="#6b7280"
                            strokeWidth="1"
                          />
                          <line
                            x1="4"
                            y1="4"
                            x2="4"
                            y2="44"
                            stroke="#6b7280"
                            strokeWidth="1"
                          />

                          {/* Axis labels */}
                          <text
                            x="32"
                            y="47"
                            textAnchor="middle"
                            className="text-[8px] fill-gray-500 font-mono"
                          >
                            time
                          </text>
                          <text
                            x="2"
                            y="24"
                            textAnchor="middle"
                            className="text-[8px] fill-gray-500 font-mono"
                            transform="rotate(-90 2 24)"
                          >
                            progress
                          </text>

                          {/* Easing curve */}
                          <polyline
                            points={generateEasingCurve(element.easing, 56, 40)}
                            fill="none"
                            stroke={getHexColor(element.color)}
                            strokeWidth="2"
                            transform="translate(4, 4)"
                          />

                          {/* Real-time position indicator */}
                          {isActive &&
                            (() => {
                              const elementProgress = Math.max(
                                0,
                                Math.min(
                                  1,
                                  (currentTime - element.startTime) /
                                    element.duration
                                )
                              );
                              let easedProgress = elementProgress;

                              // Calcola la posizione eased usando GSAP
                              if (element.easing) {
                                try {
                                  const easingFunc = gsap.parseEase(element.easing);
                                  if (typeof easingFunc === 'function') {
                                    easedProgress = easingFunc(elementProgress);
                                  }
                                } catch (error) {
                                  easedProgress = elementProgress;
                                }
                              }

                              const x = 4 + elementProgress * 56;
                              const y = 44 - easedProgress * 40;

                              return (
                                <g>
                                  <circle
                                    cx={x}
                                    cy={y}
                                    r="2"
                                    fill="white"
                                    stroke={getHexColor(element.color)}
                                    strokeWidth="1"
                                  />
                                  <circle
                                    cx={x}
                                    cy={y}
                                    r="1"
                                    fill={getHexColor(element.color)}
                                  />
                                </g>
                              );
                            })()}

                          {/* Start and end points */}
                          <circle
                            cx="4"
                            cy="44"
                            r="1.5"
                            fill={getHexColor(element.color)}
                          />
                          <circle
                            cx="60"
                            cy="4"
                            r="1.5"
                            fill={getHexColor(element.color)}
                          />
                        </svg>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
          </div>
        )}
      </div>

      {/* Easing Curves Comparison */}
      <EasingCurveVisualization 
        animatedElements={animatedElements} 
        currentTime={currentTime}
        isCollapsed={isEasingCurvesCollapsed}
        onToggleCollapse={() => setIsEasingCurvesCollapsed(!isEasingCurvesCollapsed)}
      />
    </div>
    </>
  );
}
