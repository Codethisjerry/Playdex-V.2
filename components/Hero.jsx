'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Spotlight } from './ui/spotlight-new'

/**
 * Hero Section Component
 * Main landing section with animated content and spotlight effect
 */
const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)

  // GSAP animation setup for hero entrance
  useEffect(() => {
    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], { 
      opacity: 0, 
      y: 20 
    })
    
    // Create entrance timeline with delay
    const tl = gsap.timeline({ delay: 0.5 })
    
    // Animate title
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    })
    
    // Animate subtitle with stagger
    tl.to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")
    
    // Animate CTA buttons
    tl.to(ctaRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.3")

    // Add hover micro-interactions for buttons
    const buttons = ctaRef.current?.querySelectorAll('button')
    buttons?.forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, { scale: 1.05, duration: 0.3 })
      })
      button.addEventListener('mouseleave', () => {
        gsap.to(button, { scale: 1, duration: 0.3 })
      })
    })
  }, [])

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Spotlight Effect */}
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
      
      {/* Main Content */}
      <div className="text-center max-w-4xl mx-auto px-6 relative z-10">
        {/* Main Headline */}
        <h1 
          ref={titleRef}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
        >
          Level Up Your Learning
        </h1>
        
        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Transform scattered YouTube lectures into structured learning quests. Track progress, earn XP, complete levels, and unlock certificates.
        </p>
        
        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
            Start Your Quest
          </button>
          <button className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105">
            Watch Demo
          </button>
        </div>
        
        {/* Micro caption */}
        <p className="text-sm text-gray-400 mt-8">
          Create a course, add videos in one click, and start learning like a game.
        </p>
      </div>
    </section>
  )
}

export default Hero
