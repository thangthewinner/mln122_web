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
        // Ocean Blue Theme - Professional technology color palette
        ocean: {
          50: '#f0f7fb',   // Lighter than Cloud Light
          100: '#BDD8E9',  // Cloud Light - backgrounds, subtle elements
          200: '#9fc9df',  // Between Cloud and Azure
          300: '#7BBDE8',  // Azure Bright - CTAs, active states
          400: '#6EA2B3',  // Sky Blue - hover states
          500: '#4E8EA2',  // Teal Blue - primary color
          600: '#49769F',  // Steel Blue - interactive elements
          700: '#0A4174',  // Ocean Dark - headers, primary buttons
          800: '#07315a',  // Between Ocean and Navy
          900: '#001D39',  // Navy Deep - hero background, footer
          950: '#001429',  // Darker than Navy
        },
        danger: '#dc2626',
        success: '#059669',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'pulse-once': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) 1',
        'bounce-gentle': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
