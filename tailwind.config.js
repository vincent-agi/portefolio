/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,html}"],
  theme: {
    extend: {
      colors: {
        // Core palette – "Encre & Signal"
        ink: {
          950: "#080c14",
          900: "#0d1220",
          800: "#111827",
          700: "#1a2233",
          600: "#243044",
        },
        // Signal accent – electric blue-cyan
        signal: {
          DEFAULT: "#00c8ff",
          50:  "#e0faff",
          100: "#b3f2ff",
          200: "#66e5ff",
          300: "#1ad8ff",
          400: "#00c8ff",
          500: "#00aad9",
          600: "#0089b3",
          700: "#00678c",
          800: "#004a66",
          900: "#002d3d",
        },
        // Warm accent – for tags & highlights
        ember: {
          DEFAULT: "#ff6b35",
          400: "#ff8c5a",
          500: "#ff6b35",
          600: "#e5541e",
        },
        // Neutral surface
        slate: {
          850: "#161e2e",
        },
      },
      fontFamily: {
        display: ["'Inter'", "system-ui", "sans-serif"],
        mono:    ["'JetBrains Mono'", "'Fira Code'", "monospace"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
      },
      animation: {
        "fade-up":      "fadeUp 0.6s ease both",
        "fade-in":      "fadeIn 0.5s ease both",
        "slide-right":  "slideRight 0.5s ease both",
        "pulse-slow":   "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow":         "glow 2s ease-in-out infinite alternate",
        "gradient-x":   "gradientX 8s ease infinite",
        "scan":         "scan 4s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%":   { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        glow: {
          "0%":   { textShadow: "0 0 8px rgba(0,200,255,0.4)" },
          "100%": { textShadow: "0 0 24px rgba(0,200,255,0.9), 0 0 48px rgba(0,200,255,0.4)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" },
        },
        scan: {
          "0%":   { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
      boxShadow: {
        "signal":    "0 0 20px rgba(0,200,255,0.25), 0 0 60px rgba(0,200,255,0.1)",
        "signal-sm": "0 0 10px rgba(0,200,255,0.2)",
        "card":      "0 4px 24px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.05) inset",
        "card-hover":"0 8px 40px rgba(0,0,0,0.5), 0 0 20px rgba(0,200,255,0.15)",
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
