import type { Config } from "tailwindcss";

// Colors come from CSS variables in app/globals.css, so light and dark
// themes only need to swap the variables, not every class.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-alt": "var(--bg-alt)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        line: "var(--border)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        "accent-soft": "var(--accent-soft)",
      },
      fontFamily: {
        sans: ['"Manrope Variable"', "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
        mono: ['"Fira Code"', "ui-monospace", "Menlo", "Consolas", "monospace"],
      },
      // Type scale used across the site
      fontSize: {
        meta: ["0.8rem", { lineHeight: "1.4" }],
        small: ["0.95rem", { lineHeight: "1.6" }],
        lead: ["1.05rem", { lineHeight: "1.65" }],
        title: ["1.3rem", { lineHeight: "1.3" }],
        section: ["1.65rem", { lineHeight: "1.2" }],
        subhead: ["clamp(1.2rem, 3vw, 1.6rem)", { lineHeight: "1.3" }],
        display: ["clamp(2.2rem, 6vw, 3.6rem)", { lineHeight: "1.1" }],
        email: ["clamp(1rem, 3vw, 1.3rem)", { lineHeight: "1.4" }],
      },
      maxWidth: { page: "1040px", measure: "62ch" },
      aspectRatio: { "4/3": "4 / 3" },
      gridTemplateColumns: {
        project: "minmax(0, 1fr) minmax(0, 1.7fr)",
        timeline: "140px minmax(0, 1fr)",
      },
      transitionTimingFunction: { spring: "cubic-bezier(.5, 1.6, .4, 1)" },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "none" },
        },
        blink: { "50%": { opacity: "0" } },
      },
      animation: {
        rise: "rise .6s cubic-bezier(.2,.7,.2,1) both",
        blink: "blink 1s steps(1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
