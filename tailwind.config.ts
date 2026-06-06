import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        jadeo: {
          black: "#050807",
          panel: "#0E1714",
          panel2: "#101C18",
          green: "#36F48B",
          green2: "#20E070",
          green3: "#00B76A",
          muted: "#8A9992",
          warning: "#F5B84B",
          risk: "#FF5A5F",
          line: "rgba(255,255,255,0.08)"
        }
      },
      boxShadow: {
        terminal: "0 0 38px rgba(32,224,112,0.08)",
        glow: "0 0 28px rgba(54,244,139,0.22)"
      }
    }
  },
  plugins: []
};

export default config;
