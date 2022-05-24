module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        Dashboard: {
          primary: "#174491",

          secondary: "#656BF1",

          accent: "#253CA7",

          neutral: "#1E283D",

          "base-100": "#f5f5f5",

          info: "#4AA8BF",

          success: "#1FB2A6",
          warning: "#EF8234",
          error: "#EA4034",
        },
      },
    ],
  },

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
