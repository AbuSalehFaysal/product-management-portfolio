/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#3B82F6", // blue-500
          dark: "#60A5FA", // blue-400 (lighter in dark mode for contrast)
        },
      },
      backgroundColor: {
        "dark-surface": "#1F2937", // gray-800
        "light-surface": "#FFFFFF",
      },
      textColor: {
        "dark-primary": "#F3F4F6", // gray-100
        "light-primary": "#1F2937", // gray-800
      },
    },
  },
  plugins: [],
};
