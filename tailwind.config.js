/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jilt",
  theme: {
    extend: {
      screens: {
        'xsm': '360px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      colors: {
        primary: "#FFFFFF",
        secondary: '#D24836',
        tertiary: '#FF1D1D',
        'menu-focus': '#FFFFFF29'
      },
      fontFamily: {
        // sans: ['Lelawadee'],
        leelawadee: ['Leelawadee', 'sans-serif']
      }
    }, 
    boxShadow: {

    },
    backgroundImage: {
      "hero":"url('/src/assets/img/slide3.jpg')",
      "details":"url('/src/assets/img/MLCS-135.jpg')",
      "success":"url('/src/assets/img/MLCS-30.jpg')",
      "admin": "url('/src/assets/img/admin.jpg')"
    }
  },
  plugins: [],
}

