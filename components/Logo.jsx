'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

/**
 * Logo Component
 * Floating logo positioned in the top left corner with animations
 */
const Logo = () => {
  const logoRef = useRef(null)

  // Simplified floating animation for logo
  useEffect(() => {
    const logoElement = logoRef.current
    if (logoElement) {
      gsap.to(logoElement, {
        y: -2,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      })
    }

    return () => {
      if (logoElement) gsap.killTweensOf(logoElement)
    }
  }, [])

  return (
    <div className="fixed top-4 left-4 z-50">
      <Image 
        ref={logoRef}
        src="/images/PlayDex.png" 
        alt="PlayDex Logo" 
        width={96}
        height={96}
        className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg hover:scale-110 transition-transform duration-300 shadow-lg"
        priority
      />
    </div>
  )
}

export default Logo
