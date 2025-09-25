'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

/**
 * Stepped Geometric Preloader
 * Creates stepped geometric pattern with white and black sections
 * Features: Stepped shapes, smooth reveal animations, and hero page transition
 */
const Loading = () => {
  const containerRef = useRef(null)
  const whiteShapeRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    // Optimized animation timeline
    const tl = gsap.timeline()

    // Set initial states
    gsap.set([whiteShapeRef.current, textRef.current], { 
      scaleX: 0,
      opacity: 0, 
      y: 20,
      transformOrigin: "left center"
    })

    // Simplified animation sequence
    tl.to(whiteShapeRef.current, {
      scaleX: 1,
      duration: 1.2,
      ease: "power2.out"
    })
    .to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.3")
    .to(containerRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => {
        if (containerRef.current) {
          containerRef.current.style.display = 'none'
        }
      }
    }, 2.2)

    return () => tl.kill()
  }, [])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
    >
      {/* White Stepped Shape - Full Width to Remove Black Bar */}
      <div 
        ref={whiteShapeRef}
        className="absolute left-0 bottom-0 h-full w-full bg-white"
        style={{
          clipPath: 'polygon(0% 0%, 0% 100%, 20% 100%, 30% 80%, 40% 100%, 50% 80%, 60% 100%, 70% 80%, 80% 100%, 90% 80%, 100% 100%, 100% 0%)'
        }}
      />

      {/* Main Content - Responsive */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        {/* Loading Text - Responsive Sizing */}
        <div ref={textRef} className="opacity-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-2 tracking-wider">
            Gamify Learning
          </h1>
        </div>
      </div>

    </div>
  )
}

export default Loading
