import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /**
       * @ref https://smart-swatch.netlify.app/#b271cf
       */
      colors: {
        "primary-50": "#f7eaff",
        "primary-100": "#dfc5ef",
        "primary-200": "#c9a0e0",
        "primary-300": "#b77ad2",
        "primary-400": "#9a54c4",
        "primary-500": "#793bab",
        "primary-600": "#582d85",
        "primary-700": "#3b1f60",
        "primary-800": "#20123b",
        "primary-900": "#0a0418",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "learner-theme": {
          extend: "light",
          colors: {
            background: "#f2f2f2",
            primary: {
              50: "#f7eaff",
              100: "#dfc5ef",
              200: "#c9a0e0",
              300: "#b77ad2",
              400: "#9a54c4",
              500: "#793bab",
              600: "#582d85",
              700: "#3b1f60",
              800: "#20123b",
              900: "#0a0418",
              DEFAULT: "#b77ad2",
              foreground: "#ffffff",
            },
            focus: "#BEF264",
          },
        },
      },
    }),
  ],
};
