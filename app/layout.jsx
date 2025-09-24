import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://playdex.com'),
  title: 'PlayDex — Level Up Your Learning',
  description: 'PlayDex turns scattered YouTube videos into structured, gamified courses. Track progress, earn XP, maintain streaks, and unlock certificates. Start your learning quest.',
  keywords: 'learning, gamification, courses, YouTube, education, progress tracking, certificates',
  authors: [{ name: 'PlayDex Team' }],
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

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/favicon.ico" />
      </head>
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}
