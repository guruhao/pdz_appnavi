/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0f0ff',
          200: '#bae0ff',
          300: '#7cc5ff',
          400: '#36a4ff',
          500: '#0088ff',
          600: '#0066cc',
          700: '#0052a3',
          800: '#004080',
          900: '#003366',
        }
      }
    },
  },
  plugins: [],
};