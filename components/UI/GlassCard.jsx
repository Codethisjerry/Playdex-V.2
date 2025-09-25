'use client'

import { forwardRef } from 'react'

/**
 * GlassCard Component
 * Reusable glassmorphism card component with hover effects
 * Features: Glassmorphism styling, hover animations, and customizable props
 * 
 * @param {React.ReactNode} children - Content to display inside the card
 * @param {string} className - Additional CSS classes
 * @param {boolean} hover - Whether to enable hover effects
 * @param {object} props - Additional props to pass to the div element
 */
const GlassCard = forwardRef(({ 
  children, 
  className = '', 
  hover = true, 
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={`
        glass-card
        ${hover ? 'hover:scale-103 hover:shadow-neon-sm transition-all duration-300' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
})

GlassCard.displayName = 'GlassCard'

export default GlassCard
