/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontWeight: {
        thin: 200,
      },
      colors: {
        lightGray: '#c1c1c1',

      },
    },
  },
  plugins: [],
}
