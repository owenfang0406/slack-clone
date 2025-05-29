/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'slack-purple': '#611f69',
        'slack-green': '#2eb67d',
        'slack-blue': '#36c5f0',
        'slack-yellow': '#ecb22e',
        'slack-red': '#e01e5a',
      },
    },
  },
  plugins: [],
} 