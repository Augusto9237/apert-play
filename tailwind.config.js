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
          100: "#15161C",
          500: "#0A070B",
        },
        textPrimary: {
          100: "#FFFFFF",
        },
        textSecondary: {
          100: "#F41B3B",
        },
        border:{
          100: '#EDEDED'
        }
      },
    },
  },
  plugins: [],
}

