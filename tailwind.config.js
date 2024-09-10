/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/components/**/*.{html,js,jsx,ts,tsx}',
    './src/pages/**/*.{html,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'lilac': 'rgb(167,73,255)',
        'light-gray': 'rgb(247,247,247)',
        'dark-gray' : 'rgb(155,155,156)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      height: {
        '800' : '800px'
      },
      screens: {
        'sm': {'min': '320px', 'max': '767px'},
        // => @media (min-width: 320px and max-width: 767px) { ... }
  
        'md': {'min': '768px', 'max': '1023px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
      },
      keyframes: {
        'l20-1': {
          '0%': { 'clip-path': 'polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%)' },
          '12.5%': { 'clip-path': 'polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%)' },
          '25%': { 'clip-path': 'polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%)' },
          '50%': { 'clip-path': 'polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)' },
          '62.5%': { 'clip-path': 'polygon(50% 50%, 100% 0, 100% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)' },
          '75%': { 'clip-path': 'polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0% 100%)' },
          '100%': { 'clip-path': 'polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0% 100%)' },
        },
        'l20-2': {
          '0%': { 'transform': 'scaleY(1) rotate(0deg)' },
          '49.99%': { 'transform': 'scaleY(1) rotate(135deg)' },
          '50%': { 'transform': 'scaleY(-1) rotate(0deg)' },
          '100%': { 'transform': 'scaleY(-1) rotate(-135deg)' },
        },
      },
      animation: {
        'l20-1': 'l20-1 0.8s infinite linear alternate',
        'l20-2': 'l20-2 1.6s infinite linear',
      },

    },
  },
  plugins: [],
}

