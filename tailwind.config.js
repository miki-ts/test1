/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonGreen: {
          DEFAULT: '#39FF14',
          dim: '#2bcf0d',
          glow: '#00FF66',
          dark: '#0f240f',
        },
        darkBg: '#080c08',
        darkCard: '#111611',
        darkBorder: '#1c261c',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'neon-sm': '0 0 10px rgba(57, 255, 20, 0.25)',
        'neon-md': '0 0 20px rgba(57, 255, 20, 0.4)',
        'neon-lg': '0 0 35px rgba(57, 255, 20, 0.65)',
      }
    },
  },
  plugins: [],
}
