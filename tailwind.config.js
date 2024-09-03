module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "animate-bounce":"0.5s"
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
    FontFace: ["g"],
  },
  plugins: [],
};
