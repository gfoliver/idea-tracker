/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      background: '#423E37',
      'background-darker': '#2F2C27',
      'background-lighter': '#524E47',
      primary: '#E1AB29',
      'off-white': '#EDEBD7',
      white: '#FFFFFF',
      backdrop: 'rgba(0,0,0,0.6)',
      black: '#000000',
    }
  },
  plugins: [],
}
