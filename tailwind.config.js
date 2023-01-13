/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'book': "url('/book.jpg')",
        'peakville': "url('/peakville.png')",
      },
      colors: {
        primary: 'black',
        secondary: '#00FF66',
        accent: 'green',
        white: '#D7D7D7'
      },
    },
  },
  plugins: [],
}
