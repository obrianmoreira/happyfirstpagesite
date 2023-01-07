/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {

      'sms': '280px',
      // Small Device Small => @media (min-width: 360px) { ... }

      'smm': '360px',
      // Small Device Medium => @media (min-width: 360px) { ... }

      'sml': '375px',
      // Small Device Large  => @media (min-width: 375px) { ... }

      'smxl': '414px',
      // Small Device XLarge => @media (min-width: 414px) { ... }

      'sm': '540px',
      // Small Device => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'mdl': '867px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

    },
    extend: {},
    fontSize: {
      xl: ['21px', '32px'],
    }
  },
  plugins: [],
}
