import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        accent: {
          1: "rgb(var(--accent-1) / <alpha-value>)",
          2: "rgb(var(--accent-2) / <alpha-value>)",
          3: "rgb(var(--accent-3) / <alpha-value>)"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgb(var(--border) / 0.35), 0 20px 60px rgb(0 0 0 / 0.18)"
      }
    }
  },
  plugins: []
} satisfies Config;

