'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Github, MessageCircle, Linkedin } from 'lucide-react'

const Footer = () => {
  const footerRef = useRef(null)

  useEffect(() => {
    // GSAP animation for footer entrance
    if (footerRef.current) {
      // Set initial state
      gsap.set(footerRef.current, { opacity: 0, y: 20 })
      
      // Animate in with delay
      const tl = gsap.timeline({ delay: 1.0 })
      tl.to(footerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      })
    }
  }, [])

  const footerLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Courses', href: '#courses' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Privacy', href: '#' },
    { name: 'Contact', href: '#' }
  ]

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ]

  return (
    <footer ref={footerRef} className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-2">
              PlayDex — Gamify Your Learning
            </h3>
            <p className="text-gray-400">
              Transform your learning journey with gamification
            </p>
          </div>

          {/* Center - Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right - Social */}
          <div className="flex justify-center md:justify-end space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 PlayDex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
