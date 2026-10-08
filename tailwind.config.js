/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: { 950: '#05050d', 900: '#0b0b1a', 800: '#12122a' },
        neon: {
          purple: '#a855f7',
          violet: '#8b5cf6',
          cyan: '#22d3ee',
          pink: '#ec4899',
        },
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(168, 85, 247, 0.65)',
        'glow-lg': '0 0 60px -6px rgba(168, 85, 247, 0.85), 0 0 30px -10px rgba(34, 211, 238, 0.6)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(30px, -40px) scale(1.08)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 14s ease-in-out infinite',
        'float-slow': 'float 20s ease-in-out infinite reverse',
        'gradient-x': 'gradient-x 6s ease infinite',
      },
    },
  },
  plugins: [],
};
