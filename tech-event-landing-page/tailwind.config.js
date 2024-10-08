/** @type {import('tailwindcss').Config} */
module.exports = {
  // color variables
  // colors: {
  //   background:'#F9FAFB',
  //   primary: '#1F2937',
  //   secondary: '#4B5563',
  //   buttons:'#3B82F6',
  //   links: '#3B82F6',
  //   outline:'#E5E7EB',
  //   divBG:'#ffffff'
    
  // },


  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}

