import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Peach: "#E7816B",
        Black: "#1D1C1E",
        White: "#FFFFFF",
        LightPeach: "#FFAD9B",
        DarkGrey: "#333136",
        LightGrey: "#F1F3F5",
      },
      fontFamily: {
        jost: ["var(--font-jost)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
