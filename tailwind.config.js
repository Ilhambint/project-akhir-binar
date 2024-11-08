/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'mobile': { 'max': '420px' },

      'sm': '640px',

      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'register': "url('~/public/assets/ImgLgn.png')"
      },
      colors: {
        darkblue05: "#4B1979",
        darkblue04: "#7126B5",
        darkblue03: "#A06ECE",
        darkblue02: "#D0B7E6",
        darkblue01: "#E2D4F0",
        whitegrey: "#EEEEEE",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
