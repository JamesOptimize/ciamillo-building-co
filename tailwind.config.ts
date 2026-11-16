import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0E0F11", 900: "#111316", 800: "#121417", 700: "#15171A", 600: "#17191C" },
        rule: { DEFAULT: "#24272B", 2: "#2A2D31", 3: "#3A3E43", 4: "#33373C", soft: "#1F2226" },
        bone: { DEFAULT: "#EDEBE6", 2: "#E4E1DA", 3: "#C9C6BE" },
        steel: { DEFAULT: "#9A9EA3", 2: "#8A8F95" },
        fog: { DEFAULT: "#C9CBCE", 2: "#A9ADB2" },
        slate: { DEFAULT: "#4A4E54", 2: "#2B2E33" },
        survey: { DEFAULT: "var(--accent)", dark: "#A8360A" },
      },
      fontFamily: {
        display: ["Archivo", "sans-serif"],
        sans: ["'Inter Tight'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      maxWidth: { site: "1360px" },
    },
  },
  plugins: [],
} satisfies Config;
