'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { 
  PlusCircle, 
  Play, 
  BarChart3, 
  Award,
  Download,
  Share
} from 'lucide-react'

/**
 * How To Use Section Component
 * Explains the step-by-step process of using PlayDex
 */
const HowToUse = () => {
  const sectionRef = useRef(null)

  // GSAP scroll reveal animation setup for section
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.set(entry.target, { opacity: 0, y: 60, scale: 0.8 })
          gsap.to(entry.target, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "back.out(1.7)",
            delay: 0.1
          })
        }
      })
    }, { threshold: 0.1 })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      name: "Step 01",
      step: "01",
      title: "Install Extension",
      quote: "Get the PlayDex extension in your browser - it's like adding a superpower to your learning! One-click magic, works everywhere, zero setup hassle.",
      icon: Download
    },
    {
      name: "Step 02", 
      step: "02",
      title: "Spot & Add Videos",
      quote: "Found a gem of a video? Just click our button and boom - it's in your course! Instant adding, any video works, no interruptions.",
      icon: PlusCircle
    },
    {
      name: "Step 03",
      step: "03",
      title: "Watch Courses",
      quote: "Dive into your organized learning quests and watch your progress grow with each video. Structured fun, track everything, stay engaged.",
      icon: Play
    },
    {
      name: "Step 04",
      step: "04",
      title: "Track Your Journey",
      quote: "See exactly how far you've come with cool stats, completion rates, and smart reminders. All the details, watch progress grow, never lose your place.",
      icon: BarChart3
    },
    {
      name: "Step 05",
      step: "05",
      title: "Unlock Certificates",
      quote: "Hit 80% completion and earn legit certificates that prove you're the real deal! Real proof, easy sharing, show off skills.",
      icon: Award
    },
    {
      name: "Step 06",
      step: "06",
      title: "Share Your Wins",
      quote: "Post your certificates and achievements to let the world know you're leveling up! Social flex, build reputation, inspire others.",
      icon: Share
    }
  ]

  return (
    <section id="how-to-use" ref={sectionRef} className="py-40 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <h2 className="text-6xl sm:text-7xl font-bold text-white mb-12">
            How To Use
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to turn your learning into a game? Follow these 6 steps and watch your scattered YouTube videos become an epic learning quest!
          </p>
        </div>

        <div className="relative flex justify-center">
          <div className="w-full max-w-6xl">
            <InfiniteMovingCards
              items={steps}
              direction="left"
              speed="normal"
              pauseOnHover={true}
              className="mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToUse
