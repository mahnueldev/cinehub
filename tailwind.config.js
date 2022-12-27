/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/images/avatar.png')",
        
      }
    },
    
    colors: {
      'red': '#EA1F23',
      'gray': '#303230',
      'gray-light': '#d3dce6',
      'white': '#fff'
    },
    fontFamily: {
      sans: ['Asap'],
      serif: ['Britannic Bold'],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '6.052rem',
    },
  },
  plugins: [],
}
