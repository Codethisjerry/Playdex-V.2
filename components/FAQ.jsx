'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { Plus, Minus, CheckCircle, Shield, Zap, Award } from 'lucide-react'

/**
 * FAQ Section Component
 * Interactive frequently asked questions with smooth animations
 * Features: Accordion-style questions, smooth animations, and accessibility support
 */
const FAQ = () => {
  // State for managing open/closed FAQ items
  const [openIndex, setOpenIndex] = useState(null)
  
  // Refs for animation targets
  const sectionRef = useRef(null)
  const faqRef = useRef([])

  // Scroll reveal animation handler
  const handleScrollReveal = useCallback((entries) => {
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
  }, [])

  useEffect(() => {
    // GSAP scroll reveal animation
    const observer = new IntersectionObserver(handleScrollReveal, { threshold: 0.1 })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    faqRef.current.forEach((faq) => {
      if (faq) observer.observe(faq)
    })

    return () => observer.disconnect()
  }, [handleScrollReveal])

  // FAQ data with icons and styling
  const faqs = [
    {
      question: "Is PlayDex free?",
      answer: "PlayDex is completely free to use.",
      icon: CheckCircle,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30"
    },
    {
      question: "Is playdex open source",
      answer: "Yes, PlayDex is open source and free to use. You can find the source code on our Github repository.",
      icon: Zap,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      question: "How does the certificate work?",
      answer: "Complete 80% of a course to unlock a certificate you can download and share.",
      icon: Award,
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30"
    },
    {
      question: "Can I save my courses offline?",
      answer: "No, since all videos are on YouTube, you cannot download them to your device. This is against YouTube's terms of service.",
      icon: Shield,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30"
    }
  ]

  // Toggle FAQ item open/closed state
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" ref={sectionRef} className="py-32 bg-black">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about PlayDex
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const Icon = faq.icon
            const isOpen = openIndex === index
            
            return (
              <div
                key={index}
                ref={(el) => (faqRef.current[index] = el)}
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:scale-[1.01] ${
                  isOpen 
                    ? `${faq.bgColor} ${faq.borderColor} border-2 shadow-2xl` 
                    : 'bg-black/50 border-white/10 hover:border-white/20'
                }`}
              >
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${faq.color} opacity-0 transition-opacity duration-300 ${
                  isOpen ? 'opacity-5' : 'group-hover:opacity-3'
                }`} />
                
                {/* FAQ Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-8 text-left focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-2xl relative z-10"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* FAQ Icon */}
                      <div className={`p-3 rounded-xl ${faq.bgColor} ${faq.borderColor} border transition-all duration-300 ${
                        isOpen ? 'scale-110' : 'group-hover:scale-105'
                      }`}>
                        <Icon className={`w-6 h-6 ${isOpen ? 'text-white' : 'text-gray-400 group-hover:text-white'} transition-colors duration-300`} />
                      </div>
                      
                      {/* FAQ Question */}
                      <h3 className="text-xl font-semibold text-white pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    
                    {/* Toggle Icon */}
                    <div className="flex-shrink-0">
                      <div className={`p-2 rounded-full transition-all duration-300 ${
                        isOpen ? 'bg-white/20 rotate-180' : 'bg-white/10 group-hover:bg-white/20'
                      }`}>
                        {isOpen ? (
                          <Minus className="w-5 h-5 text-white" />
                        ) : (
                          <Plus className="w-5 h-5 text-white" />
                        )}
                      </div>
                    </div>
                  </div>
                </button>
                
                {/* FAQ Answer */}
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  aria-hidden={!isOpen}
                >
                  <div className="px-8 pb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-1 h-8 bg-gradient-to-b from-white/60 to-transparent rounded-full mt-2" />
                      <div className="flex-1">
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {faq.answer}
                        </p>
                        {isOpen && (
                          <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                            <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse" />
                            <span>Learn more about this feature</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
