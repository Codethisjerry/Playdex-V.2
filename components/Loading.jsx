'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

/**
 * Simple, Non-Disruptive Preloader
 * Clean preloader that doesn't interfere with website functionality
 */
const Loading = () => {
  const containerRef = useRef(null)
  const shapeRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || !shapeRef.current || !textRef.current) return

    // Create animation timeline
    const tl = gsap.timeline()

    // Initial state - everything hidden
    gsap.set([shapeRef.current, textRef.current], {
      opacity: 0,
      scale: 0.8
    })

    // Animate shape reveal
    tl.to(shapeRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power2.out"
    })
    // Animate text reveal
    .to(textRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")
    // Hold for a moment
    .to({}, { duration: 1 })
    // Fade out entire preloader
    .to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        if (containerRef.current) {
          containerRef.current.style.display = 'none'
        }
      }
    })

    // Cleanup function
    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      aria-label="Loading PlayDex"
    >
      {/* Simple Geometric Shape */}
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
        <div 
          ref={shapeRef}
          className="absolute inset-0 bg-white rounded-lg"
        />
        
        {/* Loading Text */}
        <div 
          ref={textRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black tracking-wider">
            PlayDex
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Loading
