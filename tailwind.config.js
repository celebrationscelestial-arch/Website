/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
        'dancing': ['Dancing Script', 'cursive'],
        'great-vibes': ['Great Vibes', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'divine-gold': '#D4AF37',
        'royal-gold': '#FFD700',
        'deep-black': '#0A0A0A',
        'charcoal': '#1A1A1A',
        'pearl': '#F8F6F0',
        'champagne': '#F7E7CE',
      },
      backgroundImage: {
        'divine-gradient': 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #2A2A2A 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #F4C430 100%)',
        'pearl-gradient': 'linear-gradient(135deg, #F8F6F0 0%, #F7E7CE 100%)',
      },
      boxShadow: {
        'divine': '0 25px 50px -12px rgba(212, 175, 55, 0.25)',
        'gold': '0 10px 25px -5px rgba(212, 175, 55, 0.3)',
        'elegant': '0 20px 40px -10px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-30vw, 20vh)' },
        },
        float2: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(25vw, -30vh)' },
          '50%': { transform: 'translate(-15vw, 10vh)' },
          '75%': { transform: 'translate(20vw, 25vh)' },
        },
        float3: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(-20vw, -25vh)' },
          '66%': { transform: 'translate(30vw, -10vh)' },
        },
      },
      animation: {
        float1: 'float1 25s ease-in-out infinite',
        float2: 'float2 30s ease-in-out infinite',
        float3: 'float3 35s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};