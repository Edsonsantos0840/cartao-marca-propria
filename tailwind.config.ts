import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'blue': '#01295f',
        'indigo': '#00233f',
        'red': '#dc3545',
        'orange': '#fd7e14',
        'green': '#c3d933',
        'success': '#4d8b3b',
        'info': '#19a0ee1a',
        'warning': '#ffc107',
      },
    },
  },
  plugins: [],
};
export default config;
