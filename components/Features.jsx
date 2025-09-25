'use client'

import { useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { AnimatedTooltip } from './UI/animated-tooltip'
import { GlowingEffect } from './UI/glowing-effect'
import { TextGenerateEffect } from './UI/text-generate-effect'
import { 
  PlusCircle, 
  Wrench, 
  BarChart3, 
  Award,
  Target
} from 'lucide-react'

/**
 * Features Section Component
 * Displays PlayDex core features using animated glassmorphism cards
 * Features: Scroll reveal animations, floating effects, glowing borders, and team tooltip
 */
const Features = () => {
  // Refs for animation targets
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  // Scroll reveal animation handler
  const handleScrollReveal = useCallback((entries) => {
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
  }, [])

  // GSAP scroll reveal animation setup
  useEffect(() => {
    const observer = new IntersectionObserver(handleScrollReveal, { threshold: 0.1 })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [handleScrollReveal])

  // Floating animation for cards
  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.to(card, {
          y: -10,
          duration: 2 + (index * 0.2),
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.3
        })
      }
    })
  }, [])

  // Feature cards data
  const features = [
    {
      title: 'Add-to-Course Extension',
      description: 'Spotted a useful YouTube video? Pop it right into your course with a single click, with our trusty browser extension!',
      label: 'Extension',
      icon: PlusCircle,
      benefits: ['Just one click', 'Add videos on the fly', 'Intuitive design']
    },
    {
      title: 'Personalized Quests',
      description: 'You decide what you learn. Stay on track with content relevant to you!',
      label: 'Quests',
      icon: Target,
      benefits: ['Personalized Curation', 'Paths that lead to your goals', 'Learns and adapts with you']
    },
    {
      title: 'Course Builder',
      description: 'Come up with a banger course? Great! Share your treasure trove with others',
      label: 'Builder',
      icon: Wrench,
      benefits: ['Community sharing', 'Interact with other learners', 'Grow together']
    },
    {
      title: 'Progress Tracking',
      description: 'See exactly how far you\'ve come! Keep an eye on your progress with cool stats, completion percentages, and smart reminders of where you left off.',
      label: 'Tracking',
      icon: BarChart3,
      benefits: ['All the nerdy details', 'See your progress grow', 'Jump back in easily']
    },
    {
      title: 'Shareable Certificates',
      description: 'You did the work, now get the credit! Earn fun certificates to prove your skills and show off your achievements to the world.',
      label: 'Certificates',
      icon: Award,
      benefits: ['Legit proof of your skills', 'Easy to share and show off', 'Race to completion with your friends']
    }
  ]

  // Team members data for tooltip
  const tooltipPeople = [
    {
      id: 1,
      name: "Siddharth",
      designation: "CEO & Founder",
      image: "/images/Siddharth.png"
    },
    {
      id: 2,
      name: "Vishnu",
      designation: "Backend Developer & Co-Founder",
      image: "/images/Vishnu.jpg"
    },
    {
      id: 3,
      name: "Vaibhav",
      designation: "Frontend Developer & Co-Founder",
      image: "/images/Vaibhav.jpg"
    }
  ]

  return (
    <section id="features" ref={sectionRef} className="py-40 bg-black">
      <div className="max-w-[95vw] mx-auto px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-32">
          <h2 className="text-6xl sm:text-7xl font-bold text-white mb-12">
            Features
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feature, index) => {
            // Custom positioning for specific cards in the grid
            let customClasses = ""
            
            if (index === 0) { // Extension - top left
              customClasses = "lg:col-start-1 lg:row-start-1"
            } else if (index === 1) { // Quests - top right
              customClasses = "lg:col-start-3 lg:row-start-1"
            } else if (index === 2) { // Course Builder - center of all four cards
              customClasses = "lg:col-start-2 lg:row-start-2"
            } else if (index === 3) { // Progress Tracking - bottom left
              customClasses = "lg:col-start-1 lg:row-start-2"
            } else if (index === 4) { // Certificates - bottom right
              customClasses = "lg:col-start-3 lg:row-start-2"
            }
            
            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`glass-card relative p-10 min-h-[350px] flex flex-col hover:shadow-neon-sm hover:border-white/30 transition-all duration-300 ${customClasses}`}
                style={{ 
                  transformStyle: 'preserve-3d',
                  willChange: 'transform, box-shadow',
                  boxShadow: '0 10px 30px rgba(255, 255, 255, 0.1)'
                }}
              >
                {/* Glowing border effect */}
                <GlowingEffect
                  variant="white"
                  glow={true}
                  disabled={false}
                  blur={0}
                  spread={15}
                  proximity={100}
                  borderWidth={1}
                  movementDuration={2}
                  inactiveZone={0.5}
                  className="rounded-3xl"
                />
                
                {/* Card Content */}
                <div className="relative z-10">
                  {/* Feature Label and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-semibold text-white/80 bg-white/10 px-4 py-2 rounded-full">
                      {feature.label}
                    </span>
                    <feature.icon className="w-8 h-8 text-white/60" />
                  </div>
                  
                  {/* Feature Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 flex-grow">
                    {feature.title}
                  </h3>
                  
                  {/* Feature Description */}
                  <div className="text-base text-gray-300 leading-relaxed mb-6">
                    <TextGenerateEffect 
                      words={feature.description}
                      className="text-base text-gray-300 leading-relaxed"
                      duration={1.2}
                    />
                  </div>
                  
                  {/* Feature Benefits */}
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                        <span className="text-sm text-gray-400">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
          
          {/* Team Tooltip Section */}
          <div className="lg:col-start-2 lg:row-start-1 flex items-center justify-center">
            <div className="text-center">
              <h4 className="text-3xl font-bold text-white mb-8">Our Team</h4>
              <div className="scale-150">
                <AnimatedTooltip items={tooltipPeople} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
