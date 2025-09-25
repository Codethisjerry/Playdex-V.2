'use client'

import { useEffect, useRef, useCallback, useState } from 'react'
import { gsap } from 'gsap'
import { Star, Zap, Trophy, Target } from 'lucide-react'
import GlassCard from './UI/GlassCard'
import Leaderboard from './UI/Leaderboard'
import CountUp from './CountUp'

/**
 * Gamification Section Component
 * Displays gamification features with animated stats cards and leaderboard
 * Features: XP system, streaks, badges, and leaderboard with scroll animations
 */
const Gamification = () => {
  // Refs for animation targets
  const sectionRef = useRef(null)
  const statsRef = useRef([])
  const [animationKey, setAnimationKey] = useState(0)

  // Scroll reveal animation handler
  const handleScrollReveal = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Trigger CountUp re-animation by updating key
        setAnimationKey(prev => prev + 1)
        
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

  useEffect(() => {
    // GSAP scroll reveal animation
    const observer = new IntersectionObserver(handleScrollReveal, { threshold: 0.1 })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    statsRef.current.forEach((stat) => {
      if (stat) observer.observe(stat)
    })

    return () => observer.disconnect()
  }, [handleScrollReveal])

  // Gamification stats data
  const stats = [
    {
      icon: Star,
      label: 'XP Earned',
      value: 2840,
      suffix: '',
      color: 'bg-white'
    },
    {
      icon: Zap,
      label: 'Current Streak',
      value: 12,
      suffix: ' days',
      color: 'bg-white'
    },
    {
      icon: Trophy,
      label: 'Badges Earned',
      value: 8,
      suffix: '',
      color: 'bg-white'
    },
    {
      icon: Target,
      label: 'Courses Completed',
      value: 3,
      suffix: '',
      color: 'bg-white'
    }
  ]

  // Floating animation for stats cards
  useEffect(() => {
    statsRef.current.forEach((card, index) => {
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

  return (
    <section id="rewards" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            Play. Progress. Prove.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Earn XP for completed levels. Keep daily streaks. Complete 80% to unlock a certificate you can share.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <GlassCard
                key={index}
                ref={(el) => (statsRef.current[index] = el)}
                className="p-6 text-center hover:scale-103 hover:shadow-neon-sm hover:border-white/30 transition-all duration-300"
                style={{ 
                  transformStyle: 'preserve-3d',
                  willChange: 'transform, box-shadow',
                  boxShadow: '0 10px 30px rgba(255, 255, 255, 0.1)'
                }}
              >
                {/* Stat Icon */}
                <div className={`w-12 h-12 mx-auto mb-4 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-black" />
                </div>
                
                {/* Stat Value */}
                <div className="text-2xl font-bold text-white mb-1">
                  <CountUp 
                    key={`${stat.label}-${animationKey}`}
                    to={stat.value} 
                    duration={2} 
                    delay={index * 0.2}
                    separator=","
                  />
                  {stat.suffix}
                </div>
                
                {/* Stat Label */}
                <div className="text-sm text-gray-300">
                  {stat.label}
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Leaderboard Section */}
          <div>
            <Leaderboard />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gamification
