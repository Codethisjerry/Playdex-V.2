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
      const tl = gsap.timeline()

      // Show the stairs overlay
      tl.to(stairParentRef.current, {
        display: 'block',
      })
      // Grow stairs from 0 height with stagger
      tl.from('.stair', {
        height: 0,
        stagger: {
          amount: -0.2,
        },
      })
      // Slide stairs down to reveal content
      tl.to('.stair', {
        y: '100%',
        stagger: {
          amount: -0.25,
        },
      })
      // Hide stairs overlay
      tl.to(stairParentRef.current, {
        display: 'none',
      })
      // Reset stairs position for next animation
      tl.to('.stair', {
        y: '0%',
      })

      // Animate page content entrance
      gsap.from(pageRef.current, {
        opacity: 0,
        delay: 1.3,
        scale: 1.2,
      })
    },
    [currentPath] // re-run animation when path changes
  )

  return (
    <div>
      {/* overlay stairs */}
      <div
        ref={stairParentRef}
        className="h-screen w-full fixed z-20 top-0"
        style={{ display: 'none' }}
      >
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5 bg-white"></div>
          <div className="stair h-full w-1/5 bg-white"></div>
          <div className="stair h-full w-1/5 bg-white"></div>
          <div className="stair h-full w-1/5 bg-white"></div>
          <div className="stair h-full w-1/5 bg-white"></div>
        </div>
      </div>

      {/* actual page content */}
      <div ref={pageRef}>{children}</div> 
    </div>
  )
}

export default Stairs
