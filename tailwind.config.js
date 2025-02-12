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
      fontFamily: {
        inter: ['var(--font-inter)']
      },
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        accent: 'rgb(var(--accent))',
        muted: 'rgb(var(--muted))',
      },
      boxShadow: {
        'glass-inset': 'inset 0 17px 5px -9px rgba(254, 254, 91, 0.05)',
        'glass-sm': '5px 5px 20px 0 rgba(254, 254, 91, 0.03)'
      }
    },
  },
  plugins: [],
};
