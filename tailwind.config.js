/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      secondary: "Lato"
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px"
    },
    container: {
      padding: {
        DEFAULT: "10px"
        // lg: '0',
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px"
    },
    extend: {
      colors: {
        body: "#ffffff",
        dark: "#0a0909",
        grey: {
          DEFAULT: "#f2f4f7",
          100: "#e4e4e3",
          200: "#E8EEF3"
        },
        accent: {
          DEFAULT: "#665966",
          hover: "#F55304"
        }
      }
    }
  },
  plugins: [
    // ...
    require("tailwind-scrollbar")({ nocompatible: true })
  ]
}
