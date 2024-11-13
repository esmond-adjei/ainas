import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // extend: {
    //   colors: {
    //     background: "var(--background)",
    //     foreground: "var(--foreground)",
    //   },
    // },
    extend: {
      colors: {
        primary: '#3B7A57',   // Forest green for primary buttons and accents
        secondary: '#f5e1a4', // Earthy yellow for highlights
        accent: '#60a5fa',    // Soft blue for links and CTAs
        dark: '#1f2937',      // Darker background and text color
        light: '#f3f4f6',     // Light background for contrast
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
