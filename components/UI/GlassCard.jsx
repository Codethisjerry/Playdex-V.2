'use client'

import { forwardRef } from 'react'

const GlassCard = forwardRef(({ children, className = '', hover = true, ...props }, ref) => {
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
