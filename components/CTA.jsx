'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import NeonButton from './UI/NeonButton'

const CTA = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    // GSAP scroll reveal animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.set(entry.target, { opacity: 0, y: 40 })
          gsap.to(entry.target, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          })
        }
      })
    }, { threshold: 0.1 })

    if (contentRef.current) observer.observe(contentRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <div ref={contentRef} className="space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            Ready to Start Your Quest?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of learners who have transformed their study habits with PlayDex
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeonButton variant="primary" size="xl" className="text-lg">
              Join For Free
            </NeonButton>
            <NeonButton variant="secondary" size="xl" className="text-lg">
              Login
            </NeonButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
