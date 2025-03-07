/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Scans all src files
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      spacing: {
        "screen-20": "20vw",
        "screen-20h": "20vh",
      },
      fontFamily: {
        inter: ['var(--font-inter)']
      },
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        accent: 'rgb(var(--accent))',
        muted: 'rgb(var(--muted))',
      },
      backgroundImage:{
        'firefly-radial': 'radial-gradient(50% 50% at 50% 50%, rgba(253, 255, 80, 0.5) 0%, rgba(217, 217, 217, 0) 100%)'
      },
      boxShadow: {
        'glass-inset': 'inset 0 17px 5px -9px rgba(254, 254, 91, 0.05)',
        'glass-sm': '5px 5px 20px 0 rgba(254, 254, 91, 0.03)'
      },
      keyframes: {
        'spin-reverse': {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(-360deg)'}
        }
      },
      animation: {
        'spin-slow': 'spin 50s linear infinite',
        'spin-slow-reverse': 'spin-reverse 50s linear infinite'
      },
      screens: {
        xs: '480px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
