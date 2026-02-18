/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // DTMF album-inspired palette
        primary: '#FF6B35',       // Vivid Orange
        secondary: '#004E89',     // Deep Blue
        accent: '#F7B801',        // Golden Yellow
        success: '#2A9D8F',       // Teal Green
        text: '#2C3E50',
        'text-light': '#7F8C8D',
        'bg-alt': '#F8F9FA',
        border: '#E9ECEF',
        // Keep some legacy for transition
        navy: '#004E89',
        cream: '#FAFAFA',
      },
      fontFamily: {
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #004E89 0%, #FF6B35 100%)',
      },
    },
  },
  plugins: [],
}
