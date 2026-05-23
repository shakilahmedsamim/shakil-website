/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#070707',
        obsidian: '#050506',
        linen: '#f3f6fa',
        paper: '#f7fbff',
        mint: '#2ee58f',
        gold: '#f7c948',
        cobalt: '#2f6df6',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(8, 18, 38, 0.12)',
        dark: '0 24px 80px rgba(0, 0, 0, 0.42)',
      },
    },
  },
  plugins: [],
};
