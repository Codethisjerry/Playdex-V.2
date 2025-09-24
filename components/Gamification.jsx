'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Star, Zap, Trophy, Target } from 'lucide-react'
import GlassCard from './UI/GlassCard'
import Leaderboard from './UI/Leaderboard'

const Gamification = () => {
  const sectionRef = useRef(null)
  const statsRef = useRef([])

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
            ease: "power2.out",
            stagger: 0.1
          })
        }
      })
    }, { threshold: 0.1 })

    statsRef.current.forEach((stat) => {
      if (stat) observer.observe(stat)
    })

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      icon: Star,
      label: 'XP Earned',
      value: '2,840',
      color: 'bg-white'
    },
    {
      icon: Zap,
      label: 'Current Streak',
      value: '12 days',
      color: 'bg-white'
    },
    {
      icon: Trophy,
      label: 'Badges Earned',
      value: '8',
      color: 'bg-white'
    },
    {
      icon: Target,
      label: 'Courses Completed',
      value: '3',
      color: 'bg-white'
    }
  ]

  return (
    <section id="rewards" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            Play. Progress. Prove.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Earn XP for completed levels. Keep daily streaks. Complete 80% to unlock a certificate you can share.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <GlassCard
                key={index}
                ref={(el) => (statsRef.current[index] = el)}
                className="p-6 text-center hover:scale-103 transition-all duration-300"
              >
                <div className={`w-12 h-12 mx-auto mb-4 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-black" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300">
                  {stat.label}
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Leaderboard */}
          <div>
            <Leaderboard />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gamification
