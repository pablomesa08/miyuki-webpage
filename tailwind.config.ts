import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        productPage: "calc(100vh - 4rem - 10rem)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        "miyuki-light": {
          extend: "light",
          colors: {
            background: "#F8F7FF",
            foreground: "#000000",
            primary: {
              50: "#8E84E0",
              100: "#ACE672",
              200: "#40D9AF",
              300: "#99DBFE",

              400: "#9989FF",
              500: "#F8F7FF",
              600: "#665CFF",
              700: "#4C4EFF",
              800: "#332FFF",
              900: "#1910FF",
              DEFAULT: "#ACE672",
              foreground: "#000000",
            },
            secondary: {
              50: "#EFEEEF",
              100: "#D9D9D9",
              200: "#EEEEEE",
              300: "#9AC1CD",
              400: "#4F95A7",
              500: "#F8F7FF",

              600: "#044F73",
              700: "#033C5D",
              800: "#022A47",
              900: "#01172F",
              DEFAULT: "#EEEEEE",
              foreground: "#000000",
            },
            focus: "#4A4661",
            success: {
              50: "#F3F9F6",
              100: "#E7F3ED",
              200: "#C1E0D4",
              300: "#9ACCBB",
              400: "#4FA58A",
              500: "#045F59",
              600: "#045451",
              700: "#033A45",
              800: "#022E39",
              900: "#011D27",
              DEFAULT: "#4A4661",
              foreground: "#ffffff",
            },
          },

          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
};
export default config;
