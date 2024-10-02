/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'my-color': '#9ABCFF',
      },
      fontFamily: {
        gmarketmedium: ['GmarketSansMedium', 'sans-serif'],
        gmarketbold: ['GmarketSansBold', 'sans-serif'],
      },
      keyframes: {
        fadein: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-5px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        fadeout: {
          '0%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: 0,
            transform: 'translateY(-5px)',
          },
        },
        typingCursor: {
          '0%': {
            borderRight: '2px solid white',
          },
          '50%': {
            borderRight: '2px solid transparent',
          },
          '100%': {
            borderRight: '2px solid white',
          },
        },
        slidein: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        expand: {
          '0%': { maxHeight: '0' },
          '100%': { maxHeight: '500px' },
        },
        collapse: {
          '0%': { maxHeight: '500px' },
          '100%': { maxHeight: '0' },
        },
        bounce: {
          '0%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        swingandscale: {
          '0%': {
            transform: 'rotate(0deg) scale(1)',
          },
          '50%': {
            transform: 'rotate(90deg) scale(1.1)',
          },
          '100%': {
            transform: 'rotate(-90deg) scale(0.9)',
          },
        },
      },
      animation: {
        fadein: 'fadein 2s ease-in-out',
        fadeinDelay1: 'fadein 2s ease-in-out 1s forwards',
        fadeinDelay2: 'fadein 2s ease-in-out 1.5s forwards',
        typingCursor: 'typingCursor 1s step-end infinite',
        fadeout: 'fadeout 0.5s ease',
        slidein: 'slidein 1s forwards',
        bounce: 'bounce 1.5s infinite',
        expand: 'expand 0.3s ease-in-out',
        collapse: 'collapse 0.3s ease-in-out',
        swingandscale: 'swingandscale 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
