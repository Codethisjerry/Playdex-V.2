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
      const tl = gsap.timeline()

      tl.to(stairParentRef.current, {
        display: 'block',
      })
      tl.from('.stair', {
        height: 0,
        stagger: {
          amount: -0.2,
        },
      })
      tl.to('.stair', {
        y: '100%',
        stagger: {
          amount: -0.25,
        },
      })
      tl.to(stairParentRef.current, {
        display: 'none',
      })
      tl.to('.stair', {
        y: '0%',
      })

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
