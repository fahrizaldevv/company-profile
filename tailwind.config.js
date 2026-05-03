/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        "accent-green": "#22c55e",
        "accent-blue": "#3b82f6",
        "gray-50": "#f9fafb",
        "gray-900": "#111827",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      fontSize: {
        h1: "3.5rem",
        h2: "2.25rem",
        h3: "1.875rem",
        body: "1rem",
        small: "0.875rem",
      },
    },
  },
  plugins: [],
};
