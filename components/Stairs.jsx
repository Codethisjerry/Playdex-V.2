'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Stairs Animation Component - Optimized for Performance
 * Simple, efficient stairs animation without complex GSAP setup
 */
const Stairs = ({ children }) => {
  const currentPath = usePathname()
  const containerRef = useRef(null)
  const pageRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const page = pageRef.current
    const stairs = container?.querySelectorAll('.stair')

    if (!container || !page || !stairs) return

    // Reset all elements
    container.style.display = 'block'
    page.style.opacity = '0'
    stairs.forEach(stair => {
      stair.style.height = '0'
      stair.style.transform = 'translateY(0)'
    })

    // Simple animation sequence
    const animate = () => {
      // Grow stairs
      stairs.forEach((stair, index) => {
        setTimeout(() => {
          stair.style.height = '100%'
        }, index * 50) // 50ms stagger
      })

      // Slide stairs down and show page
      setTimeout(() => {
        stairs.forEach((stair, index) => {
          setTimeout(() => {
            stair.style.transform = 'translateY(100%)'
          }, index * 30) // 30ms stagger
        })
        
        // Show page
        setTimeout(() => {
          page.style.opacity = '1'
          container.style.display = 'none'
        }, 200)
      }, 300)
    }

    // Start animation
    const timer = setTimeout(animate, 100)
    
    return () => clearTimeout(timer)
  }, [currentPath])

  return (
    <div>
      {/* overlay stairs */}
      <div
        ref={containerRef}
        className="h-screen w-full fixed z-50 top-0 left-0 bg-black"
        style={{ display: 'none' }}
      >
        <div className="h-full w-full flex">
          <div className="stair h-0 w-1/5 bg-white transition-all duration-300 ease-out"></div>
          <div className="stair h-0 w-1/5 bg-white transition-all duration-300 ease-out"></div>
          <div className="stair h-0 w-1/5 bg-white transition-all duration-300 ease-out"></div>
          <div className="stair h-0 w-1/5 bg-white transition-all duration-300 ease-out"></div>
          <div className="stair h-0 w-1/5 bg-white transition-all duration-300 ease-out"></div>
        </div>
      </div>

      {/* actual page content */}
      <div ref={pageRef} className="transition-opacity duration-500 ease-out">{children}</div> 
    </div>
  )
}

export default Stairs
