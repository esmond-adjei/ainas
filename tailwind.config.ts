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
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        primaryBright: 'var(--primary-color-bright)',
        primaryDark: 'var(--primary-color-dark)',
        primaryLight: 'var(--primary-color-light)',
        accent: '#60a5fa',    
        dark: '#1f2937',    
        light: '#f3f4f6',     
        borderColor: '#dddddd',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-crimson)', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: 'var(--primary-color)',
              '&:hover': {
                color: 'var(--primary-color-dark)',
              },
            },
            // h1: {
            //   fontFamily: 'var(--font-crimson), serif',
            // },
            // h2: {
            //   fontFamily: 'var(--font-crimson), serif',
            // },
            // h3: {
            //   fontFamily: 'var(--font-crimson), serif',
            // },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;

// npm install gray-matter remark remark-html
