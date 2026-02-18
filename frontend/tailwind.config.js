/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Warm, modern palette
        primary: '#E85D3A',       // Warm coral/orange
        secondary: '#1B2A4A',     // Deep navy (softer than black)
        accent: '#F2C94C',        // Warm yellow
        success: '#27AE60',       // Success green
        text: '#1B2A4A',          // Deep navy for text
        'text-light': '#8896A5',  // Light gray
        'bg-alt': '#F0EDE8',      // Light warm gray
        border: '#E0DCD5',        // Subtle warm border
        navy: '#1B2A4A',
        cream: '#FAF8F5',         // Warm off-white
      },
      fontFamily: {
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #1B2A4A 0%, #E85D3A 50%, #F26B3A 100%)',
      },
    },
  },
  plugins: [],
}
