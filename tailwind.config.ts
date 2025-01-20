import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_lals: {
          100: "#16191C",
          200: "#1F2225",
          300: "#262A2E",
          400: "#303438",
          1000: "#777A80"
        },
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
