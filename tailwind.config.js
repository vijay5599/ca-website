/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "fs-search-surface-bg": "#fafbfc",
        "fs-search-button-text": "#fff",
        "fs-search-primary": "#0076ce",
        darkgray: "#aeb0b4",
        silver: "#bfbfbf",
        dimgray: "#616161",
        black: "#000",
        gray: "rgba(255, 255, 255, 0)",
        "fs-search-red": "#ff6666",
        "fs-search-table-bg": "#f4f4f4",
        "fs-search-banner-blue": "#ddf3ff",
        "fs-search-banner-purple": "#efd9f9",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "open-sans": "'Open Sans'",
        poppins: "Poppins",
      },
      borderRadius: {
        "2xl": "21px",
        "3xs": "10px",
        xl: "20px",
        mini: "15px",
        "10xs": "3px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      xl: "20px",
      "46xl": "65px",
      mid: "17px",
      "5xl": "24px",
      "16xl": "35px",
      sm: "14px",
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
