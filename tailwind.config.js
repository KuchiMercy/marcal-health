/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#fff",
        secondary: "#12E0C0",
        tetiary: "#E5FCF8",
        bg1:"#F1EAFF"
      }
    },
    fontFamily:{
      'acumen': ['Acumin Pro', 'sans-serif'],
      'helvetica': ['Helvetica Neue', 'sans-serif']
                                                
    }
  },
  plugins: [],
}

