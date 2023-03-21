/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem"
      }
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4caf50",
          50: "#f3faf3",
          100: "#e3f5e3",
          200: "#c8eac9",
          300: "#9dd89f",
          400: "#6bbd6e",
          500: "#4caf50",
          600: "#358438",
          700: "#2d6830",
          800: "#275429",
          900: "#224525"
        },
        ebony: {
          DEFAULT: "#0c151d",
          50: "#f4f7fb",
          100: "#e7eff7",
          200: "#cadded",
          300: "#9cc1dd",
          400: "#66a1ca",
          500: "#4385b4",
          600: "#326b97",
          700: "#29567b",
          800: "#254967",
          900: "#0c151d"
        },
        "athens-gray": {
          DEFAULT: "#F1F2F4",
          50: "#f7f8f8",
          100: "#f1f2f4",
          200: "#d7dbe0",
          300: "#b4bac5",
          400: "#8c97a4",
          500: "#6d798a",
          600: "#586271",
          700: "#48505c",
          800: "#3e444e",
          900: "#373c43"
        },
        neutrals: {
          DEFAULT: "#FFFFFF",
          20: "#F1F2F4",
          60: "#C3C7CB",
          80: "#A3ABB2",
          300: "#6D6D6D",
          500: "#555555",
          700: "#171F26",
          900: "#222222"
        }
      }
    }
  },
  plugins: []
};
