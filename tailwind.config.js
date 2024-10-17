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
        "primary-50": "#6257C6",
        "primary-100": "#584EB3",
        "primary-200": "#4E459F",
        "primary-300": "#453B8C",
        "primary-400": "#453B8C",
        "primary-500": "#3B3279",
        "primary-600": "#312965",
        "primary-700": "#272052",
        "primary-800": "#1E163F",
        "primary-900": "#140D2B",
        "primary-950": "#0A0418",
        DEFAULT: "#6257C6",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "learner-theme-auth": {
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
              DEFAULT: "#793bab",
              foreground: "#ffffff",
            },
            default: {
              DEFAULT: "#ffffff",
              foreground: "#000000",
            },
            focus: "#BEF264",
          },
        },
        "learner-theme-protected": {
          extend: "dark",
          colors: {
            primary: {
              50: "#6257C6",
              100: "#584EB3",
              200: "#4E459F",
              300: "#453B8C",
              400: "#453B8C",
              500: "#3B3279",
              600: "#312965",
              700: "#272052",
              800: "#1E163F",
              900: "#140D2B",
              950: "#0A0418",
              DEFAULT: "#6257C6",
            },
          },
        },
      },
    }),
  ],
};
