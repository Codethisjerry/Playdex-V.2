import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

/**
 * Root Layout Component
 * Defines the HTML structure and metadata for the entire application
 * 
 * Features:
 * - SEO optimization with comprehensive metadata
 * - Open Graph tags for social media sharing
 * - Twitter Card support
 * - Favicon configuration
 * - Dark theme with black background
 * - Responsive viewport settings
 */

// SEO and metadata configuration
export const metadata = {
  metadataBase: new URL('https://playdex.com'),
  title: 'PlayDex — Level Up Your Learning',
  description: 'PlayDex turns scattered YouTube videos into structured, gamified courses. Track progress, earn XP, maintain streaks, and unlock certificates. Start your learning quest.',
  keywords: 'learning, gamification, courses, YouTube, education, progress tracking, certificates',
  authors: [{ name: 'PlayDex Team' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/PlayDex.png', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/images/PlayDex.png',
  },
  openGraph: {
    title: 'PlayDex — Level Up Your Learning',
    description: 'PlayDex turns scattered YouTube videos into structured, gamified courses. Track progress, earn XP, maintain streaks, and unlock certificates.',
    url: 'https://playdex.com',
    siteName: 'PlayDex',
    images: [
      {
        url: '/images/hero-mockup.png',
        width: 1200,
        height: 630,
        alt: 'PlayDex - Gamify Your Learning',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PlayDex — Level Up Your Learning',
    description: 'PlayDex turns scattered YouTube videos into structured, gamified courses. Track progress, earn XP, maintain streaks, and unlock certificates.',
    images: ['/images/hero-mockup.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Viewport configuration for responsive design
export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

/**
 * Root Layout Component
 * Wraps all pages with common HTML structure and metadata
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon Configuration */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/PlayDex.png" />
        <link rel="icon" href="/images/PlayDex.png" type="image/png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="bg-black text-white antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
