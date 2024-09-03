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
      }
    },
  },
  plugins: [],
}

