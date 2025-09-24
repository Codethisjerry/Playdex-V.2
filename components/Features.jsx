'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Target, Zap, BookOpen, Award, Settings } from 'lucide-react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { GlowingEffect } from './ui/glowing-effect'

/**
 * Features Section Component
 * Displays PlayDex features in a Bento Grid layout with glowing effects
 */
const Features = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  // GSAP scroll reveal animation setup
  useEffect(() => {
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

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  // Feature data configuration
  const features = [
    {
      title: 'Add-to-Course Extension',
      description: 'Add any YouTube video directly to your course while watching.',
      className: "md:col-span-1 md:row-span-1",
      icon: Zap,
      header: (
        <div className="flex flex-1 w-full min-h-[6rem] rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
          <div className="w-8 h-8 bg-transparent border-2 border-white/30 rounded-lg flex items-center justify-center m-4">
            <Zap className="h-4 w-4 text-white/70" />
          </div>
        </div>
      ),
    },
    {
      title: 'Course Builder',
      description: 'Create courses with title, thumbnail, description, and custom order.',
      className: "md:col-span-1 md:row-span-2",
      icon: Settings,
      header: (
        <div className="flex flex-1 w-full min-h-[12rem] rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
          <div className="w-8 h-8 bg-transparent border-2 border-white/30 rounded-lg flex items-center justify-center m-4">
            <Settings className="h-4 w-4 text-white/70" />
          </div>
        </div>
      ),
    },
    {
      title: 'Curated Playlists',
      description: 'Start instantly with pre-made courses curated from the best YouTube content.',
      className: "md:col-span-1 md:row-span-1",
      icon: BookOpen,
      header: (
        <div className="flex flex-1 w-full min-h-[6rem] rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
          <div className="w-8 h-8 bg-transparent border-2 border-white/30 rounded-lg flex items-center justify-center m-4">
            <BookOpen className="h-4 w-4 text-white/70" />
          </div>
        </div>
      ),
    },
    {
      title: 'Progress Tracking',
      description: 'See your percentage, completed levels, and resume points at a glance.',
      className: "md:col-span-1 md:row-span-1",
      icon: Target,
      header: (
        <div className="flex flex-1 w-full min-h-[6rem] rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
          <div className="w-8 h-8 bg-transparent border-2 border-white/30 rounded-lg flex items-center justify-center m-4">
            <Target className="h-4 w-4 text-white/70" />
          </div>
        </div>
      ),
    },
    {
      title: 'Shareable Certificates',
      description: 'Show your achievement — certificates unlock after 80% course completion.',
      className: "md:col-span-1 md:row-span-1",
      icon: Award,
      header: (
        <div className="flex flex-1 w-full min-h-[6rem] rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
          <div className="w-8 h-8 bg-transparent border-2 border-white/30 rounded-lg flex items-center justify-center m-4">
            <Award className="h-4 w-4 text-white/70" />
          </div>
        </div>
      ),
    }
  ]

  return (
    <section id="features" ref={sectionRef} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Why PlayDex
          </h2>
        </div>

        <div className="relative">
          <GlowingEffect
            variant="white"
            glow={true}
            disabled={false}
            blur={0}
            spread={30}
            proximity={100}
            borderWidth={2}
            movementDuration={1.5}
            inactiveZone={0.3}
            className="rounded-2xl"
          />
          <BentoGrid className="max-w-4xl mx-auto relative z-10">
            {features.map((feature, index) => (
              <BentoGridItem
                key={index}
                title={feature.title}
                description={feature.description}
                header={feature.header}
                className={feature.className}
                icon={feature.icon}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  )
}

export default Features
