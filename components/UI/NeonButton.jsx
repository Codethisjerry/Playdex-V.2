'use client'

import { forwardRef } from 'react'

const NeonButton = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}, ref) => {
  const baseClasses = 'font-semibold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white'
  
  const variants = {
    primary: 'bg-white text-black hover:shadow-neon hover:scale-105',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-black hover:shadow-neon-sm',
    ghost: 'text-white hover:text-white hover:shadow-neon-sm'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  }
  
  return (
    <button
      ref={ref}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
})

NeonButton.displayName = 'NeonButton'

export default NeonButton
