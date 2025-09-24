'use client'

import { useEffect, useState } from 'react'
import { gsap } from 'gsap'

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simple loading animation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 seconds loading

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isLoading) {
      // GSAP loading animation
      gsap.fromTo('.loading-spinner', 
        { rotation: 0 },
        { 
          rotation: 360,
          duration: 1,
          repeat: -1,
          ease: "none"
        }
      )
      
      gsap.fromTo('.loading-text',
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.8,
          delay: 0.3
        }
      )
    }
  }, [isLoading])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Spinner */}
        <div className="loading-spinner w-16 h-16 border-4 border-white/20 border-t-white rounded-full mx-auto mb-6"></div>
        
        {/* Loading Text */}
        <div className="loading-text">
          <h2 className="text-2xl font-bold text-white mb-2">PlayDex</h2>
          <p className="text-gray-400">Level Up Your Learning</p>
        </div>
        
        {/* Progress Bar */}
        <div className="w-48 h-1 bg-white/20 rounded-full mx-auto mt-6 overflow-hidden">
          <div className="h-full bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default Loading
