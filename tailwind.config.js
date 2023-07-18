/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      fontFamily: {
        base : "Poppins-Regular",
        bold : "Poppins-Bold",
        light : "Poppins-Light"
      },  
      backgroundImage: {
        "desktop": "url('./images/bg-boost-desktop.svg')",
        "mobile": "url('./images/bg-boost-mobile.svg')",
      }
    },
  },
  plugins: [],
}

