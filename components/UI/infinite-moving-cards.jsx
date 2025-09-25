"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}>
        {items.map((item, idx) => (
          <li
            className="relative w-[350px] h-[350px] max-w-full shrink-0 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center text-center overflow-hidden"
            key={item.name}>
            <blockquote className="flex flex-col items-center justify-center h-full p-6">
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"></div>
              
              {/* Step Number - Top Right */}
              <div className="absolute top-4 right-4 text-2xl font-bold text-white/30">
                {item.step || item.name}
              </div>
              
              {/* Icon - Center Top */}
              {item.icon && (
                <div className="relative z-20 mb-6 w-20 h-20 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl flex items-center justify-center shadow-lg border border-white/10">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
              )}
              
              {/* Title */}
              <h3 className="relative z-20 text-xl font-bold text-white mb-4 text-center leading-tight">
                {item.title}
              </h3>
              
              {/* Quote */}
              <p className="relative z-20 text-sm leading-relaxed font-normal text-gray-300 text-center">
                {item.quote}
              </p>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
