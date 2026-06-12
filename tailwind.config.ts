import type { Config } from "tailwindcss"

const config = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        fg: "hsl(var(--fg))",
        "fg-muted": "hsl(var(--fg-muted))",
        surface: "hsl(var(--surface))",
        accent: "hsl(var(--accent))",
        "accent-soft": "hsl(var(--accent-soft))",
        border: "hsl(var(--border))",
      },
      maxWidth: {
        content: "55rem",
        wide: "68rem",
      },
      keyframes: {
        "draw-line": {
          to: { "stroke-dashoffset": "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(1rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(2rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "draw-line": "draw-line 2s ease forwards",
        "fade-in": "fade-in 0.6s ease both",
        "fade-up": "fade-up 0.8s ease both",
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
