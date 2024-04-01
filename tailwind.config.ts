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
            background: "#ffffff",
            foreground: "#000000",
            primary: {
              50: "#F2F0FF",
              100: "#E7E3FF",
              200: "#CDC5FF",
              300: "#B2A7FF",
              400: "#9989FF",
              500: "#7F6BFF",
              600: "#665CFF",
              700: "#4C4EFF",
              800: "#332FFF",
              900: "#1910FF",
              DEFAULT: "#7F6BFF",
              foreground: "#ffffff",
            },
            secondary: {
              50: "#F3F7F9",
              100: "#E7EFF3",
              200: "#C1D8E0",
              300: "#9AC1CD",
              400: "#4F95A7",
              500: "#045B81",
              600: "#044F73",
              700: "#033C5D",
              800: "#022A47",
              900: "#01172F",
              DEFAULT: "#045B81",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
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
              DEFAULT: "#045F59",
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
