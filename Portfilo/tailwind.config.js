/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropFilter: {
        'blur': 'blur(12px)',
      },
      colors: {
        'bgdark':'#171717',

        'main1' : '#14FFEC',  // ok
        'main2' : '#A7D129',  // ok
        'main3' : '#892CDC',  // ok
        'main4' : '#FFD700',  // ok
      }
    },
  },
  plugins: [],
}

// # 14FFEC
// # A7D129
// # 892CDC
// # FFD700

