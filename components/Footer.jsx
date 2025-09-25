'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import { Github, MessageCircle, Linkedin, Mail, Twitter, ArrowUp, Heart, Star, Zap } from 'lucide-react'
import Image from 'next/image'

/**
 * Footer Component
 * Site footer with navigation links, social media, and scroll-to-top functionality
 * Features: Animated entrance, scroll-to-top button, social links, and comprehensive navigation
 */
const Footer = () => {
  // Refs and state
  const footerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  // Scroll to top functionality
  const toggleVisibility = useCallback(() => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [])

  useEffect(() => {
    // GSAP animation for footer entrance
    if (footerRef.current) {
      // Set initial state
      gsap.set(footerRef.current, { opacity: 0, y: 50 })
      
      // Animate in with delay
      const tl = gsap.timeline({ delay: 0.5 })
      tl.to(footerRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
      })
    }

    // Add scroll listener for scroll-to-top button
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [toggleVisibility])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Footer navigation sections
  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'How It Works', href: '#how-to-use' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Pricing', href: '#pricing' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#help' },
        { name: 'Documentation', href: '#docs' },
        { name: 'Community', href: '#community' },
        { name: 'Status', href: '#status' }
      ]
    }
  ]

  // Social media links
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Codethisjerry/PlayDex', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: Twitter, href: 'https://x.com/ignvaibhav812', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Mail, href: 'mailto:mikeyhunt1069@gmail.com', label: 'Email', color: 'hover:text-red-400' }
  ]

  return (
    <>
      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
        </button>
      )}

      <footer ref={footerRef} className="bg-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-12">
            {/* Brand Section */}
            <div className="text-center lg:text-left lg:flex-1">
              {/* Logo and Brand */}
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <Image 
                  src="/images/PlayDex.png" 
                  alt="PlayDex Logo" 
                  width={40}
                  height={40}
                  className="w-10 h-10 object-cover rounded-lg hover:scale-110 transition-transform duration-300"
                  priority
                />
                <h3 className="text-3xl font-bold text-white">
                  PlayDex
                </h3>
              </div>
              
              {/* Brand Description */}
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
                Level up your skills with the ultimate learning platform.
              </p>

              {/* Social Media Links */}
              <div className="flex gap-4 justify-center lg:justify-start">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className={`w-5 h-5 text-white ${social.color} transition-colors duration-300`} />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Navigation Links */}
            {footerSections.map((section, index) => (
              <div key={section.title} className="space-y-4 text-center lg:text-left">
                <h4 className="text-lg font-semibold text-white mb-6">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 transform inline-block text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-gray-400">
                <span>© 2025 PlayDex. Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>for learners worldwide.</span>
              </div>
              
              {/* Feature Tags */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-gray-400">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Gamified Learning</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Zap className="w-4 h-4 text-blue-500" />
                  <span>YouTube Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
