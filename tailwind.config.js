/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/screens/*.tsx",
    "./src/components/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          500: "#15141F",
          
        },
        textPrimary: {
          100: "#FFFFFF",
        },
        textSecondary: {
          100: "#F00000",
        },
        border:{
          100: '#EDEDED'
        }
      },
    },
  },
  plugins: [],
}

