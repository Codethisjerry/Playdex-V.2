'use client'

import { useState } from 'react'
import { LogIn } from 'lucide-react'
import { motion } from 'framer-motion'
import { 
  Navbar as AceternityNavbar, 
  NavBody, 
  NavItems, 
  MobileNav, 
  MobileNavHeader, 
  MobileNavMenu, 
  MobileNavToggle
} from './ui/resizable-navbar'

/**
 * Navigation Bar Component
 * Responsive navigation with floating pill design and animated login button
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Navigation items configuration
  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'Features', link: '#features' },
    { name: 'Courses', link: '#courses' },
    { name: 'Rewards', link: '#rewards' },
    { name: 'FAQ', link: '#faq' }
  ]

  return (
    <AceternityNavbar className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-6">
      <NavBody className="bg-black/80 border border-gray-700/50 rounded-full backdrop-blur-md shadow-lg h-24 px-10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm">P</span>
          </div>
          <span className="text-white font-semibold text-lg">PlayDex</span>
        </div>

        {/* Desktop Navigation */}
        <NavItems 
          items={navItems}
          className="text-white"
        />

        {/* Desktop Login Button */}
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 bg-transparent border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
        >
          <LogIn size={18} />
          <span>Login</span>
        </motion.button>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav className="bg-black/80 border border-gray-700/50 rounded-full backdrop-blur-md shadow-lg h-24 px-10">
        <MobileNavHeader>
          {/* Mobile Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">P</span>
            </div>
            <span className="text-white font-semibold text-lg">PlayDex</span>
          </div>

          {/* Mobile Toggle */}
          <MobileNavToggle 
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
        </MobileNavHeader>

        {/* Mobile Menu */}
        <MobileNavMenu 
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          className="bg-black/90 border border-gray-700/50"
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-white hover:text-gray-300 block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-transparent border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 mt-4 mx-auto"
          >
            <LogIn size={18} />
            <span>Login</span>
          </motion.button>
        </MobileNavMenu>
      </MobileNav>
    </AceternityNavbar>
  )
}

export default Navbar
