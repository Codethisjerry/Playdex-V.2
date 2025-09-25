'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { usePathname } from 'next/navigation' // replaces useLocation

/**
 * Stairs Animation Component
 * Creates a smooth stairs reveal animation that wraps page content
 * Features: 5 vertical bars that grow from 0 height, then slide out
 * Animation: Bars grow with stagger, then slide down to reveal content
 */
const Stairs = ({ children }) => {
  const currentPath = usePathname() // current route in Next.js

  const stairParentRef = useRef(null)
  const pageRef = useRef(null)

  useGSAP(
    () => {
      // Set initial states
      gsap.set(stairParentRef.current, { display: 'block' })
      gsap.set('.stair', { height: 0, y: 0 })
      gsap.set(pageRef.current, { opacity: 0 })

      const tl = gsap.timeline()

      // Grow stairs from 0 height with consistent stagger
      tl.to('.stair', {
        height: '100%',
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      })
      // Slide stairs down to reveal content
      tl.to('.stair', {
        y: '100%',
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.inOut"
      })
      // Animate page content entrance
      tl.to(pageRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      }, "-=0.3")
      // Hide stairs overlay
      tl.to(stairParentRef.current, {
        display: 'none',
        duration: 0.1
      })
      // Reset stairs position
      tl.set('.stair', { y: '0%' })
    },
    [currentPath] // re-run animation when path changes
  )

  return (
    <div>
      {/* overlay stairs */}
      <div
        ref={stairParentRef}
        className="h-screen w-full fixed z-50 top-0 left-0 bg-black"
        style={{ display: 'none' }}
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
