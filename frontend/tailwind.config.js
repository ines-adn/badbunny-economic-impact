/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Vibrant tropical palette inspired by DTMF & PR imagery
        primary: '#f0393e',       // Bold red (depuertoricopalmundo.com)
        secondary: '#5BA3D4',     // Sky blue (from images)
        accent: '#F5ED4E',        // Bright yellow (Puerto Rico badge)
        teal: '#2A998B',          // Teal green (Puerto Rico text)
        coral: '#E8844A',         // Coral orange (frog character)
        success: '#27AE60',       // Success green
        text: '#281f1d',          // Dark brown (from website)
        'text-light': '#6B7280',  // Medium gray
        'bg-alt': '#eeede8',      // Cream (from website)
        'bg-blue': '#e8f4f8',     // Light blue tint
        border: '#D1D5DB',        // Neutral border
        navy: '#1e3a5f',          // Navy blue
        cream: '#eeede8',         // Cream background
      },
      fontFamily: {
        sans: ['"Inter"', 'Helvetica', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Outfit"', '"Inter"', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #5BA3D4 0%, #2A998B 100%)',
        'gradient-tropical': 'linear-gradient(180deg, #5BA3D4 0%, #e8f4f8 100%)',
      },
      boxShadow: {
        'bold': '4px 4px 0px 0px rgba(40, 31, 29, 1)',
        'bold-hover': '6px 6px 0px 0px rgba(40, 31, 29, 1)',
      },
    },
  },
  plugins: [],
}
