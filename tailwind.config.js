/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts.tsx}"],
  mode: "jilt",
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF"
      }
    }, 

    boxShadow: {

    },
    screens: {},
    backgroundColor: {
      hero: "linear-gradient(180deg, #FF0000 0%, rgba(0, 0, 0, 0.89) 100%)"
    }
  },
  plugins: [],
}

