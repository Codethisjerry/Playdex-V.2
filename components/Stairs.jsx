'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { usePathname } from 'next/navigation' // replaces useLocation

/**
 * Stairs Animation Component - Exact Match to Original
 * Uses the exact same structure and animation logic as the provided code
 */
const Stairs = ({ children }) => {
  const currentPath = usePathname() // current route in Next.js

  const stairParentRef = useRef(null)
  const pageRef = useRef(null)

  useGSAP(
    () => {
      // Set initial states
      gsap.set(stairParentRef.current, { display: 'block' })
      gsap.set('.stair', { height: 0 })
      gsap.set(pageRef.current, { opacity: 0, scale: 1.2 })

      const tl = gsap.timeline()

      // Grow stairs from 0 height
      tl.to('.stair', {
        height: '100%',
        duration: 0.8,
        stagger: {
          amount: -0.2,
        },
        ease: "power2.out"
      })
      // Slide stairs down
      tl.to('.stair', {
        y: '100%',
        duration: 0.8,
        stagger: {
          amount: -0.25,
        },
        ease: "power2.inOut"
      })
      // Show page content
      tl.to(pageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4")
      // Hide stairs
      tl.to(stairParentRef.current, {
        display: 'none',
        duration: 0.1
      })
      // Reset stairs
      tl.set('.stair', { y: '0%' })
    },
    [currentPath] // re-run animation when path changes
  )

  return (
    <div>
      {/* overlay stairs */}
      <div
        ref={stairParentRef}
        className="h-screen w-full fixed z-20 top-0"
      >
        <div className="h-full w-full flex">
          <div className="stair h-0 w-1/5 bg-white"></div>
          <div className="stair h-0 w-1/5 bg-white"></div>
          <div className="stair h-0 w-1/5 bg-white"></div>
          <div className="stair h-0 w-1/5 bg-white"></div>
          <div className="stair h-0 w-1/5 bg-white"></div>
        </div>
      </div>

      {/* actual page content */}
      <div ref={pageRef}>{children}</div> 
    </div>
  )
}

export default Stairs
