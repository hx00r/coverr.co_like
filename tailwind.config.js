/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "primary-dark": "#171719",
        "primary-dark2": "#232324",
        "padge-color": "#CDF6B9",
        "ligh-dark-bg": "#24272B",
        // Join Us Button Colors Set
        "join-us-primary": "#0072BB",
        "join-us-hover": "#0058A0",
        // Hover Overlay Color
        overylay: "#0c0c0d80",
        "textbox-text": "#b4b6bb",
        "footer-bg": "#0C0C0D",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
