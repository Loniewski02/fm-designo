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
      screens: {
        xs: "375px",
      },
      fontSize: {
        14: ["14px", "14px"],
      },
      keyframes: {
        hide: {
          "0%": { top: "0" },
          "100%": { top: "-122px" },
        },
        show: {
          "0%": { top: "-122px" },
          "100%": { top: "0" },
        },
        hideNavItems: {
          "0%": { top: "100px", oapcity: "0" },
          "100%": { top: "-100%", opacity: "1" },
        },
        showNavItems: {
          "0%": { top: "-100%", opacity: "0" },
          "100%": { top: "100px", opacity: "1" },
        },
      },
      animation: {
        hide: "hide .3s ease-in-out forwards",
        show: "show .3s ease-in-out forwards",
        hideNavItems: "hideNavItems .3s ease-in-out forwards",
        showNavItems: "showNavItems .3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
