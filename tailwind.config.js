/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7BA7D7", // より淡い青色
        accent: "#F5F8FC", // より淡いアクセントカラー
        background: "#FFFFFF",
        foreground: "#2C3E50", // より柔らかい文字色
      },
      maxWidth: {
        "6xl": "72rem",
      },
      borderRadius: {
        "2xl": "1rem",
      },
      boxShadow: {
        soft: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
      minWidth: {
        20: "5rem",
      },
      animation: {
        "fade-in-up": "fade-in-up 1s ease-out forwards",
        "ken-burns": "ken-burns 20s ease-out infinite alternate",
        bounce: "bounce 2s ease-in-out infinite",
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(2rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "ken-burns": {
          "0%": {
            transform: "scale(1) translate(0, 0)",
          },
          "100%": {
            transform: "scale(1.1) translate(-1%, -1%)",
          },
        },
      },
    },
  },
  plugins: [],
};
