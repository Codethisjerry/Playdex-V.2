'use client'

import { useState, useEffect } from 'react'

// Component imports
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Gamification from '../components/Gamification'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import TargetCursor from '../components/TargetCursor'

/**
 * Main Home Page Component
 * Renders the complete PlayDex landing page with loading state
 */
export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <main className="min-h-screen bg-black">
      <TargetCursor 
        targetSelector="button"
        spinDuration={4}
        hideDefaultCursor={true}
      />
      <Navbar />
      <Hero />
      <Features />
      <Gamification />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
