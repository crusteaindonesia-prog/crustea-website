/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.css",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: ["Ubuntu", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Cabin: ["Cabin", "sans-serif"],
        DMSans: ["DM Sans", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        main: "#08556B",
        crustea: {
          green: "#ACCB37",
        },
        black: {
          500: "#4F5665",
          600: "#0B132A",
        },
        orange: {
          100: "#FFECEC",
          500: "#F53855",
        },
        green: "#ACCB37",
        white: {
          300: "#ffffff",
          500: "#ffffff",
        },
        gray: {
          100: "#EEEFF2",
          400: "#AFB5C0",
          500: "#DDDDDD",
        },
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        t: "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        orange: "0px 20px 20px -15px rgba(245, 56, 56, 0.81)",
        "orange-md": "0px 20px 40px -15px rgba(245, 56, 56, 0.81)",
        none: "none",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out",
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marqueeReverse 40s linear infinite",

        // 🔥 tambahan baru
        "bg-shift": "bgShift 8s ease infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },

        // 🔥 tambahan baru
        bgShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover", "active"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
