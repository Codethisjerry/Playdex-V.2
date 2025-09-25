'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

/**
 * Custom Stairs Preloader Component
 * Creates a smooth stairs animation that reveals the website content
 * Features: 8 vertical bars (4 up, 4 down), white bars on black background
 * Animation: Bars grow from center, then slide out to reveal content
 */
const StairsPreloader = ({ onComplete }) => {
  const containerRef = useRef(null)
  const stairsRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || !stairsRef.current || !textRef.current) return

    // Create animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Call onComplete callback to hide preloader
        if (onComplete) {
          onComplete()
        }
      }
    })

    // Set initial states
    gsap.set(stairsRef.current.children, {
      height: 0,
      y: 0
    })
    
    gsap.set(textRef.current, {
      opacity: 0,
      scale: 0.8
    })

    // Show text first
    tl.to(textRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "power2.out"
    })
    // Hold text for a moment
    .to({}, { duration: 0.8 })
    // Fade out text
    .to(textRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.4,
      ease: "power2.in"
    })
    // Grow stairs from center (up and down simultaneously)
    .to(stairsRef.current.children, {
      height: "50vh",
      duration: 0.8,
      stagger: {
        amount: 0.3,
        from: "center"
      },
      ease: "power2.out"
    })
    // Hold for a moment
    .to({}, { duration: 0.4 })
    // Slide stairs out (up bars go up, down bars go down)
    .to(stairsRef.current.children, {
      y: (index) => index < 4 ? "-100vh" : "100vh",
      duration: 0.8,
      stagger: {
        amount: 0.2,
        from: "center"
      },
      ease: "power2.inOut"
    })
    // Fade out entire preloader
    .to(containerRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out"
    })

    // Cleanup function
    return () => {
      tl.kill()
    }
  }, [onComplete])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      aria-label="Loading PlayDex"
    >
      {/* Stairs Container */}
      <div 
        ref={stairsRef}
        className="absolute inset-0 flex flex-col"
      >
        {/* Top 4 bars (going up) */}
        <div className="stair h-0 w-1/4 bg-white"></div>
        <div className="stair h-0 w-1/4 bg-white"></div>
        <div className="stair h-0 w-1/4 bg-white"></div>
        <div className="stair h-0 w-1/4 bg-white"></div>
        
        {/* Bottom 4 bars (going down) */}
        <div className="stair h-0 w-1/4 bg-white"></div>
        <div className="stair h-0 w-1/4 bg-white"></div>
        <div className="stair h-0 w-1/4 bg-white"></div>
        <div className="stair h-0 w-1/4 bg-white"></div>
      </div>

      {/* Loading Text */}
      <div 
        ref={textRef}
        className="relative z-10 flex items-center justify-center"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wider">
          Gamify Learning
        </h1>
      </div>
    </div>
  )
}

export default StairsPreloader
