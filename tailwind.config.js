/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          from: '#FFFFFF',
          via: '#FFFFFF',
          to: '#FFFFFF',
        },
        glass: {
          bg: 'rgba(255, 255, 255, 0.05)',
          border: 'rgba(255, 255, 255, 0.1)',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
      boxShadow: {
        'neon': '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.2)',
        'neon-sm': '0 0 10px rgba(255, 255, 255, 0.4)',
      }
    },
  },
  plugins: [],
  safelist: [
    'bg-gradient-to-r',
    'from-neon-from',
    'via-neon-via',
    'to-neon-to',
    'text-neon-from',
    'text-neon-via',
    'text-neon-to',
    'border-neon-from',
    'border-neon-via',
    'border-neon-to',
  ]
}
