import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f7f7",
          100: "#b3e6e6",
          200: "#80d4d4",
          300: "#4dc3c3",
          400: "#1ab1b1",
          500: "#0d9999",
          600: "#0a7777",
          700: "#075555",
          800: "#043333",
          900: "#011111",
        },
        accent: {
          50: "#e6f9ff",
          100: "#b3eaff",
          200: "#80dcff",
          300: "#4dcdff",
          400: "#1abfff",
          500: "#00a6e6",
          600: "#0081b3",
          700: "#005c80",
          800: "#00374d",
          900: "#00121a",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        heading: ["Poppins", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
