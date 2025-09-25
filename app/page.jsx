'use client'

import { lazy, Suspense } from 'react'

// Critical components (loaded immediately)
import Stairs from '../components/Stairs'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

// Lazy load non-critical components
const Features = lazy(() => import('../components/Features'))
const HowToUse = lazy(() => import('../components/HowToUse'))
const Gamification = lazy(() => import('../components/Gamification'))
const FAQ = lazy(() => import('../components/FAQ'))
const Footer = lazy(() => import('../components/Footer'))

/**
 * Main Home Page Component
 * Renders the complete PlayDex landing page with stairs animation
 * 
 * Features:
 * - Stairs reveal animation that wraps entire page content
 * - Responsive navigation with floating design
 * - Hero section with animated background lines and spotlight
 * - Features section with glassmorphism cards
 * - How-to-use section with step-by-step process
 * - Gamification section with stats and leaderboard
 * - FAQ section with accordion-style questions
 * - Call-to-action section
 * - Footer with navigation and social links
 */
export default function Home() {
  return (
    <Stairs>
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section with Background Lines and Spotlight */}
        <Hero />
        
        {/* Lazy-loaded sections with loading fallbacks */}
        <Suspense fallback={<div className="h-32 bg-black animate-pulse" />}>
          <Features />
        </Suspense>
        
        <Suspense fallback={<div className="h-32 bg-black animate-pulse" />}>
          <HowToUse />
        </Suspense>
        
        <Suspense fallback={<div className="h-32 bg-black animate-pulse" />}>
          <Gamification />
        </Suspense>
        
        <Suspense fallback={<div className="h-32 bg-black animate-pulse" />}>
          <FAQ />
        </Suspense>
        
        <Suspense fallback={<div className="h-32 bg-black animate-pulse" />}>
          <Footer />
        </Suspense>
      </main>
    </Stairs>
  )
}
