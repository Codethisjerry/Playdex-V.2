'use client'

import { useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { Spotlight } from './ui/spotlight-new'
import { LayoutTextFlip } from './ui/layout-text-flip'
import { BackgroundLines } from './ui/background-lines'
import { HoverBorderGradient } from './ui/hover-border-gradient'

/**
 * Hero Section Component
 * Main landing section with animated content, background lines, and spotlight effect
 * Features: Animated background lines, spotlight gradient, text flip animation, and interactive buttons
 */
const Hero = () => {
  // Refs for animation targets
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)

  // Button hover animation handler
  const handleButtonHover = useCallback((button, isEntering) => {
    if (!button) return
    
    gsap.to(button, { 
      scale: isEntering ? 1.05 : 1, 
      duration: 0.3,
      ease: "power2.out"
    })
  }, [])

  // Optimized GSAP animation setup for hero entrance
  useEffect(() => {
    // Check if refs are available
    if (!titleRef.current || !subtitleRef.current || !ctaRef.current) return

    // Simplified animation with reduced complexity
    const tl = gsap.timeline({ delay: 0.3 })
    
    // Single animation for all elements
    tl.fromTo([titleRef.current, subtitleRef.current, ctaRef.current], 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.1 }
    )

    // Add hover micro-interactions for buttons
    const buttons = ctaRef.current?.querySelectorAll('button')
    if (buttons) {
      buttons.forEach(button => {
        const handleMouseEnter = () => handleButtonHover(button, true)
        const handleMouseLeave = () => handleButtonHover(button, false)
        
        button.addEventListener('mouseenter', handleMouseEnter)
        button.addEventListener('mouseleave', handleMouseLeave)
        
        // Store handlers for cleanup
        button._hoverHandlers = { handleMouseEnter, handleMouseLeave }
      })
    }

    // Cleanup function
    return () => {
      if (buttons) {
        buttons.forEach(button => {
          if (button._hoverHandlers) {
            button.removeEventListener('mouseenter', button._hoverHandlers.handleMouseEnter)
            button.removeEventListener('mouseleave', button._hoverHandlers.handleMouseLeave)
            delete button._hoverHandlers
          }
        })
      }
    }
  }, [handleButtonHover])

  return (
    <section id="home" ref={heroRef} className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background Lines */}
      <BackgroundLines 
        className="min-h-screen bg-black"
        svgOptions={{
          duration: 8 // Animation duration for the flowing lines
        }}
      >
        {/* Spotlight Gradient Effect */}
        <div className="absolute inset-0 z-10">
          <Spotlight 
            gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 0%, 100%, .15) 0, hsla(0, 0%, 100%, .05) 50%, hsla(0, 0%, 100%, 0) 80%)"
            gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, .08) 0, hsla(0, 0%, 100%, .02) 80%, transparent 100%)"
            gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, .04) 0, hsla(0, 0%, 100%, .01) 80%, transparent 100%)"
            translateY={-350}
            width={560}
            height={1380}
            smallWidth={240}
            duration={7}
            xOffset={100}
          />
        </div>
        
        {/* Main Content Container */}
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 relative z-30 flex items-center justify-center min-h-screen py-16 sm:py-20">
          <div className="w-full max-w-5xl">
            {/* Main Headline with Text Flip Animation */}
            <div ref={titleRef} className="mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6">
                Learning is Broken
              </h1>
              <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap mb-2 sm:mb-4">
                <LayoutTextFlip 
                  text="We've"
                  words={["Fixed It", "Solved It", "Enhanced It"]}
                  duration={2000}
                />
              </div>
            </div>
            
            {/* Subtitle - Hidden on mobile for more space */}
            <p 
              ref={subtitleRef}
              className="text-base sm:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-6 lg:mb-8 max-w-xl sm:max-w-2xl mx-auto hidden sm:block"
            >
              By Gamify Your Learning Experience
            </p>
            
            {/* Description - Simplified for mobile */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-8 sm:mb-10 lg:mb-12 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto">
              <span className="hidden sm:inline">Transform scattered YouTube lectures into structured learning quests. Track progress, earn XP, complete levels, and unlock certificates.</span>
              <span className="sm:hidden">Turn YouTube videos into learning quests. Track progress, earn XP, unlock certificates.</span>
            </p>
            
            {/* Call-to-Action Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <button 
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none"
                aria-label="Start your learning journey with PlayDex"
                type="button"
              >
                Start Your Quest
              </button>
              <HoverBorderGradient
                onClick={() => {
                  const featuresElement = document.getElementById('features')
                  if (featuresElement) {
                    featuresElement.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                containerClassName="w-full sm:w-auto max-w-xs sm:max-w-none"
                className="px-6 sm:px-8 py-3 sm:py-4 text-white rounded-full font-semibold text-sm sm:text-base"
                duration={2}
                clockwise={true}
                aria-label="View PlayDex features"
              >
                Features
              </HoverBorderGradient>
            </div>
          </div>
        </div>
      </BackgroundLines>
    </section>
  )
}

export default Hero
