/** @type {import('tailwindcss').Config} */ 
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      fontFamily: {
        quick: ['Quicksand', 'sans-serif'],
        reem: ['Reem Kufi', 'sans-serif'],
      },
      extend: {
        scale: {
          '101': '1.01',
        },
        height: {
          '120': '1920px'
        },
        spacing: {
          '67.5': '1080px'
        },
        colors: {
          'bluebg': '#4640BE'
        },
        borderRadius: {
          'img' : '40px',
          'img2' : '60px'
        }
          },
        plugins: [],
        }
      }