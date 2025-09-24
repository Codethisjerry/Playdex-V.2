# PlayDex — Level Up Your Learning

Transform scattered YouTube videos into structured, gamified courses. Track progress, earn XP, complete levels, and unlock certificates.

## 🎮 What is PlayDex?

PlayDex converts scattered YouTube videos into structured, gamified courses (levels). Track progress (XP/streaks), award certificates, and make learning feel like a game.

## ✨ Features

- **Progress Tracking**: See your percentage, completed levels, and resume points at a glance
- **Add-to-Course Extension**: Add any YouTube video directly to your course while watching
- **Gamified Rewards**: Earn points and badges. Keep a streak to boost daily motivation
- **Curated Playlists**: Start instantly with pre-made courses curated from the best YouTube content
- **Shareable Certificates**: Show your achievement — certificates unlock after 80% course completion
- **Course Builder**: Create courses with title, thumbnail, description, and custom order

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd playdex
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript (no TypeScript)
- **Styling**: Tailwind CSS
- **Animations**: GSAP
- **Icons**: Lucide React
- **UI Components**: Custom components with glassmorphism design

## 📁 Project Structure

```
/
├── app/
│   ├── layout.jsx          # Root layout with metadata
│   ├── page.jsx            # Main landing page
│   └── globals.css         # Global styles and utilities
├── components/
│   ├── UI/                 # Reusable UI components
│   │   ├── GlassCard.jsx   # Glassmorphism card component
│   │   ├── NeonButton.jsx  # Neon-styled button component
│   │   └── Leaderboard.jsx # Gamification leaderboard
│   ├── Navbar.jsx          # Navigation component
│   ├── Hero.jsx            # Hero section
│   ├── Features.jsx        # Features showcase
│   ├── HowItWorks.jsx      # How it works section
│   ├── DemoGallery.jsx     # Demo videos showcase
│   ├── CoursesShowcase.jsx  # Featured courses
│   ├── Gamification.jsx    # XP, streaks, and rewards
│   ├── Testimonials.jsx    # User testimonials
│   ├── FAQ.jsx             # Frequently asked questions
│   ├── CTA.jsx             # Call-to-action section
│   └── Footer.jsx          # Footer component
├── public/
│   └── images/             # Placeholder images and assets
├── package.json
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── README.md
```

## 🎨 Design System

### Colors
- **Primary Neon Gradient**: `#FF2E98` → `#9D4EDD` → `#00F0FF`
- **Background**: Pure black (`#000000`)
- **Glass Elements**: `rgba(255, 255, 255, 0.05)` with backdrop blur

### Typography
- **Font**: Inter (system fallback)
- **Hero Title**: 3xl (mobile) → 5xl (tablet) → 7xl (desktop)
- **Responsive**: Mobile-first approach

### Animations
- **GSAP Timeline**: Hero entrance animations
- **Scroll Reveal**: Intersection Observer + GSAP
- **Hover Effects**: Scale and glow transitions
- **Floating Elements**: Infinite Y oscillation

## 📱 Responsive Design

- **Mobile** (≤640px): Single column, stacked layout
- **Tablet** (641-1024px): Two columns, smaller mockups
- **Desktop** (1025px+): Full layout with large mockups

## ♿ Accessibility

- Semantic HTML elements (`<header>`, `<main>`, `<section>`, `<footer>`)
- ARIA attributes on interactive elements
- Keyboard navigation support
- Focus management with visible focus rings
- Alt text for all images
- Screen reader friendly content structure

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 📝 License

© 2025 PlayDex. All rights reserved.

## 🤝 Contributing

This is a landing page project. For development questions or contributions, please contact the development team.

---

**PlayDex** — Gamify Your Learning 🎮
