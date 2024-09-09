/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        popOut: {
          '0%': { transform: 'scale(0.5)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        popOutReverse: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(0.5)', opacity: 0 },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
        blackout: {
          '0%': {transform: 'scale(1)', backgroundColor: 'transparent'},
          '100%': {transform: 'scale(10)', backgroundColor: 'black'},
        },
        hyper: {
          '0%': {opacity: '1',},
          '90%': {opacity: '1',},
          '100%': {opacity: '0', transform: 'translateZ(0vmin) rotateY(90deg) rotateX(var(--rx)) translateZ(var(--x)) scaleX(6)',},
        },
      },
      animation: {
        popOut: 'popOut 0.5s ease-out',
        popOutReverse: 'popOutReverse 0.5s ease-out',
        shake: 'shake 0.5s ease-in-out infinite',
        blackout: 'blackout 1s ease-in-out forwards',
        hyper: 'hyper 1s ease-in-out infinite',
      },
      colors: {
        'hsl-173-100-50': 'hsl(173, 100%, 50%)',
        'hsl-343-100-50': 'hsl(343, 100%, 50%)',
      },
    },
  },
  plugins: [],
}