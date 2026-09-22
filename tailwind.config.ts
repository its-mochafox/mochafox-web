import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      scale: {
        '-100': '-1',
      },
      colors: {
          foamWhite: '#ecddda',
          darkRoast: '#4d2c22',
          lightRoast: '#5f4132',
          foxOrange: '#df824e',
          mochaPurple: '#8c2f93',
          
      }
    },
  },
  plugins: [],
};
export default config;

