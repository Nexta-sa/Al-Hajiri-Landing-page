import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Base surfaces (extracted from Figma: #111118 bg, #1a1a24 card)
        background: "#0a0a0f",
        surface: {
          DEFAULT: "#111118",
          raised: "#16161f",
          card: "#1a1a24",
        },
        // Brand violet ramp (7c3aed -> a855f7)
        brand: {
          50: "#f5f3ff",
          400: "#a855f7",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
        },
        accent: {
          cyan: "#06b6d4",
        },
        // Neutral text ramp (zinc-based, matches #a1a1aa / #52525b)
        ink: {
          DEFAULT: "#ffffff",
          muted: "#a1a1aa",
          faint: "#71717a",
          dim: "#52525b",
        },
        traffic: {
          red: "#ff5f57",
          amber: "#febc2e",
          green: "#28c840",
        },
        success: "#34d399",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Figma type scale
        "display": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.04em" }],
        "h2": ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "eyebrow": ["0.6875rem", { lineHeight: "1.5", letterSpacing: "0.12em" }],
      },
      borderRadius: {
        card: "16px",
        xl2: "20px",
        "3xl": "24px",
        "4xl": "32px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(139,92,246,0.3), 0 0 40px rgba(139,92,246,0.12)",
        "glow-lg": "0 8px 32px rgba(0,0,0,0.4), 0 0 40px rgba(139,92,246,0.15)",
        nav: "0 8px 32px rgba(0,0,0,0.4)",
        "inset-hi": "inset 0 1px 0 0 rgba(255,255,255,0.08)",
        card: "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 20px 40px -20px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
        "brand-gradient-160": "linear-gradient(160deg, #7c3aed 0%, #a855f7 100%)",
        "heading-gradient":
          "linear-gradient(174deg, #ffffff 0%, #a855f7 60%, #7c3aed 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "grow-bar": {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "grow-bar": "grow-bar 0.8s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
