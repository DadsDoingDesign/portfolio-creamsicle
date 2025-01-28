import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Semantic color system
        surface: {
          hero: {
            DEFAULT: "var(--surface-hero-bg)",
            text: "var(--surface-hero-text)",
          },
          'case-study': {
            DEFAULT: "var(--surface-case-study-bg)",
            text: "var(--surface-case-study-text)",
          },
          preview: {
            DEFAULT: "var(--surface-preview-bg)",
            text: "var(--surface-preview-text)",
          },
          content: {
            DEFAULT: "var(--surface-content-bg)",
            text: "var(--surface-content-text)",
          },
          navigation: {
            DEFAULT: "var(--surface-navigation-bg)",
            text: "var(--surface-navigation-text)",
          },
          frame: {
            DEFAULT: "var(--surface-frame-bg)",
            text: "var(--surface-frame-text)",
          }
        },
        // Semantic accent colors
        accent: {
          primary: {
            DEFAULT: "var(--accent-primary)",
            hover: "var(--accent-primary-hover)",
          },
          secondary: {
            DEFAULT: "var(--accent-secondary)",
            hover: "var(--accent-secondary-hover)",
          }
        },
        // Legacy colors - to be migrated
        background: {
          primary: "#18181B",
          'inverse-primary': "#18181B",
          secondary: "#27272A",
        },
        content: {
          'inverse-primary': "#FFFFFF",
        },
        foreground: "var(--foreground)",
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 8s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%': {
            'background-size': '200% 200%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center bottom'
          },
          '100%': {
            'background-size': '200% 200%',
            'background-position': 'center top'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
