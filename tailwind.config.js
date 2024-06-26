// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f28d0d",
        secondary: "#0D72F2",
        subtle: "#F5A43D",
        light: {
          primary: '#3490dc',
          secondary: '#ffed4a',
          accent: '#e3342f',
          background: '#ffffff',
          text: '#000000',
        },
        dark: {
          primary: '#1d4ed8',
          secondary: '#fbbf24',
          accent: '#ef4444',
          background: '#1f2937',
          text: '#f9fafb',
        },
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}