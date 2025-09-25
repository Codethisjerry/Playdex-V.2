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
      gsap.set(pageRef.current, { opacity: 0, scale: 1.1 })

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" }
      })

      // Grow stairs from 0 height with smooth stagger
      tl.to('.stair', {
        height: '100%',
        duration: 1.2,
        stagger: {
          amount: -0.3,
          from: "start"
        },
        ease: "power3.out"
      })
      // Slide stairs down to reveal content with smooth motion
      tl.to('.stair', {
        y: '100%',
        duration: 1.0,
        stagger: {
          amount: -0.4,
          from: "start"
        },
        ease: "power3.inOut"
      }, "-=0.2")
      // Animate page content entrance with smooth fade
      tl.to(pageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.0,
        ease: "power3.out"
      }, "-=0.6")
      // Hide stairs overlay after content is visible
      tl.to(stairParentRef.current, {
        display: 'none',
        duration: 0.1
      })
      // Reset stairs position for next animation
      tl.to('.stair', {
        y: '0%',
        duration: 0.1
      })
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
          <div className="stair h-0 w-1/5 bg-white transform-gpu will-change-transform"></div>
          <div className="stair h-0 w-1/5 bg-white transform-gpu will-change-transform"></div>
          <div className="stair h-0 w-1/5 bg-white transform-gpu will-change-transform"></div>
          <div className="stair h-0 w-1/5 bg-white transform-gpu will-change-transform"></div>
          <div className="stair h-0 w-1/5 bg-white transform-gpu will-change-transform"></div>
        </div>
      </div>

      {/* actual page content */}
      <div ref={pageRef}>{children}</div> 
    </div>
  )
}

export default Stairs
