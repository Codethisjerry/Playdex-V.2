'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState, useEffect } from 'react'

const Stairs = ({ children }) => {
  const stairParentRef = useRef(null)
  const pageRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(true)

  useGSAP(
    () => {
      if (!stairParentRef.current || !pageRef.current) return

      // Set initial states
      gsap.set(stairParentRef.current, { display: 'block' })
      gsap.set(pageRef.current, { opacity: 0 })
      gsap.set('.stair', { height: 0, y: 0 })

      const tl = gsap.timeline({
        onComplete: () => {
          setIsAnimating(false)
        }
      })

      // Animate stairs growing from bottom
      tl.from('.stair', {
        height: 0,
        duration: 0.6,
        stagger: {
          amount: 0.3,
          from: 'end'
        },
        ease: 'power2.out'
      })
      // Animate stairs sliding down
      .to('.stair', {
        y: '100%',
        duration: 0.8,
        stagger: {
          amount: 0.2,
          from: 'start'
        },
        ease: 'power2.inOut'
      })
      // Hide stairs overlay
      .to(stairParentRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
      // Reveal page content
      .to(pageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.2')

    },
    { scope: stairParentRef }
  )

  return (
    <div className="relative">
      {/* overlay stairs */}
      <div
        ref={stairParentRef}
        className="h-screen w-full fixed z-50 top-0 left-0 bg-black"
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
      <div ref={pageRef} className="relative z-10">
        {children}
      </div> 
    </div>
  )
}

export default Stairs
