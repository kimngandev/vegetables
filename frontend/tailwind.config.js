/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
                main1: '#E6DEC4',
                main2: '#796E48'
            },
      padding:{
               pdform: {
                 'form': '50px',
                
               }
      }
    },
  },
  plugins: [],
}