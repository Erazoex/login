/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      white: '#fafafa',
      darkSlate: '#0f172a',
      slate: '#1e293b',
      darkGray: '#27272a',
      lightGray: '#f9fafb',
      black: '#18181b',
      stone: {
        100: "#f5f5f5",
        600: "#525252",
        700: "#404040",
        800: "#292524",
        900: "#171717"
      },
      transparent: "transparent",
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
