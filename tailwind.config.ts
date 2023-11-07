import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        primary: "#00040f", // Your primary background color
        secondary: "#00f6ff", // Your secondary accent color
        dimWhite: "rgba(255, 255, 255, 0.7)", // A dimmed white color
        dimBlue: "rgba(9, 151, 124, 0.1)", // A dimmed blue color
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Use the Poppins font family
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },

  // daisyui: {
  //   themes: [
  //     {
  //       lightTheme: {
  //         primary: "#f4aa3a",
  //         secondary: "#f4f4a1",
  //         accent: "#1be885",
  //         neutral: "#272136",
  //         "base-100": "#ffffff",
  //         info: "#778ad4",
  //         success: "#23b893",
  //         warning: "#f79926",
  //         error: "#ea535a",
  //         body: {
  //           "background-color": "#e3e6e6",
  //         },
  //       },
  //     },
  //   ],
  // },

  plugins: [
    require("daisyui")
  ],
}
export default config
