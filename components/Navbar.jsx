'use client'

import { useState } from 'react'
import { LogIn, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  Navbar as AceternityNavbar, 
  NavBody, 
  NavItems, 
  MobileNav, 
  MobileNavHeader, 
  MobileNavMenu, 
  MobileNavToggle
} from './UI/resizable-navbar'

/**
 * Navigation Bar Component
 * Responsive navigation with floating pill design and animated login button
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Navigation items configuration
  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'FAQs', link: '#faq' },
    { name: 'Contribute', link: 'https://github.com/Codethisjerry/PlayDex', icon: Github }
  ]

  return (
    <AceternityNavbar className="w-full">
      <NavBody className="bg-black/80 border border-gray-700/50 rounded-full backdrop-blur-md shadow-lg h-16 md:h-20 lg:h-24 px-4 md:px-6 lg:px-10">
        {/* Logo and Text */}
        <div className="flex items-center gap-2 md:gap-3">
          <Image 
            src="/images/PlayDex.png" 
            alt="PlayDex Logo" 
            width={100}
            height={100}
            className="w-16 h-16 object-cover rounded-lg hover:scale-110 transition-transform duration-300"
            priority
          />
          <span className="text-white font-bold text-lg md:text-xl hover:text-gray-200 transition-colors duration-300">
            PlayDex
          </span>
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
          transition={{ duration: 0.1, ease: "easeOut" }}
          className="flex items-center gap-2 px-3 md:px-4 lg:px-6 py-2 md:py-3 bg-transparent border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-100 text-sm md:text-base"
        >
          <LogIn size={16} className="md:w-[18px] md:h-[18px]" />
          <span className="hidden sm:inline">Login</span>
        </motion.button>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav className="bg-black/80 border border-gray-700/50 rounded-full backdrop-blur-md shadow-lg h-16 md:h-20 px-4 md:px-6">
        <MobileNavHeader className="flex w-full items-center justify-between">
          {/* Mobile Logo and Text */}
          <div className="flex items-center gap-2 md:gap-3">
            <Image 
              src="/images/PlayDex.png" 
              alt="PlayDex Logo" 
              width={65}
              height={65}
              className="w-16 h-16 object-cover rounded-lg hover:scale-110 transition-transform duration-300"
              priority
            />
            <span className="text-white font-bold text-lg md:text-xl hover:text-gray-200 transition-colors duration-300">
              PlayDex
            </span>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center">
            <MobileNavToggle 
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </MobileNavHeader>

        {/* Mobile Menu */}
        <MobileNavMenu 
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          className="bg-black/90 backdrop-blur-lg border border-gray-700/50"
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-white hover:text-gray-300 block px-4 py-3 rounded-lg text-sm md:text-base font-medium transition-colors duration-100 flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              {item.icon && <item.icon className="w-4 h-4" />}
              {item.name}
            </a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            className="flex items-center gap-2 px-4 md:px-6 py-3 bg-transparent border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-100 mt-4 mx-auto text-sm md:text-base"
          >
            <LogIn size={16} className="md:w-[18px] md:h-[18px]" />
            <span>Login</span>
          </motion.button>
        </MobileNavMenu>
      </MobileNav>
    </AceternityNavbar>
  )
}

export default Navbar
