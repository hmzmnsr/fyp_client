/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include .tsx for TypeScript projects if needed
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#080836',
        'secondary-color': '#4456FF',
      },
    },
  },
  plugins: [],
};
