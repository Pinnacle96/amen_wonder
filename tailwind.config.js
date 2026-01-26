/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'soft-pink': '#FADADD', // Lighter, more modern pink
        'wine': '#722F37',
        'deep-wine': '#5A232B',
        'silver': '#E5E4E2', // Platinum/Silver
        'gold': '#D4AF37', // Metallic Gold
        'cream': '#FAFAF5',
        'surface': '#FFFFFF',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'], // Changed to Montserrat for modern feel
      },
      backgroundImage: {
        'hero-pattern': "url('../public/images/hero-bg.avif')",
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      },
      animation: {
        'fade-up': 'fadeUp 1s ease-out forwards',
        'slide-in': 'slideIn 1s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        }
      }
    },
  },
  plugins: [],
}
