'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Plus, Minus } from 'lucide-react'
import GlassCard from './UI/GlassCard'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const sectionRef = useRef(null)
  const faqRef = useRef([])

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

    faqRef.current.forEach((faq) => {
      if (faq) observer.observe(faq)
    })

    return () => observer.disconnect()
  }, [])

  const faqs = [
    {
      question: "Is PlayDex free?",
      answer: "Core features are free. Premium features (advanced analytics, bulk course imports) will be optional."
    },
    {
      question: "Do I need to upload videos?",
      answer: "No — add videos from YouTube with the extension. We do not host videos."
    },
    {
      question: "How does the certificate work?",
      answer: "Complete 80% of a course to unlock a certificate you can download and share."
    },
    {
      question: "Is my data private?",
      answer: "Yes. We only track progress and opt-in profile data. No selling of personal data."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about PlayDex
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <GlassCard
              key={index}
              ref={(el) => (faqRef.current[index] = el)}
              className="overflow-hidden hover:scale-103 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-lg"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-white" />
                    )}
                  </div>
                </div>
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                aria-hidden={openIndex !== index}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
