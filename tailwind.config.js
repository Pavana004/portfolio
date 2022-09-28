/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "sm":"480px"
      },
      fontFamily: {
        Oswald:['Oswald', 'sans-serif'],
        Poppins:['Poppins','sans-serif'],
        Roboto:['Roboto', "sans-serif"],
       },
    },
  },
  plugins: [],
}
