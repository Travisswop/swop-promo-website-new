const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hardware-bg": "url('/assets/hardware/collection/blackBg.svg')",
        "hardware-bg-mobile": "url('/assets/hardware/collection/mobileBg.svg')",
      },
      // container: {
      //   center: true,
      //   padding: {
      //     DEFAULT: "1rem",
      //     md: "2rem",
      //     lg: "4rem",
      //     xl: "6rem",
      //     "2xl": "8rem",
      //   },
      // },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
