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
      gsap.set('.stair', { height: 0 })
      gsap.set(pageRef.current, { opacity: 0, scale: 1.2 })

      const tl = gsap.timeline()

      // Grow stairs from 0 height with stagger
      tl.to('.stair', {
        height: '100%',
        duration: 0.8,
        stagger: {
          amount: -0.2,
        },
        ease: "power2.out"
      })
      // Slide stairs down to reveal content
      tl.to('.stair', {
        y: '100%',
        duration: 0.8,
        stagger: {
          amount: -0.25,
        },
        ease: "power2.inOut"
      })
      // Hide stairs overlay
      tl.to(stairParentRef.current, {
        display: 'none',
        duration: 0.1
      })
      // Reset stairs position for next animation
      tl.to('.stair', {
        y: '0%',
        duration: 0.1
      })
      // Animate page content entrance
      tl.to(pageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4")
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
