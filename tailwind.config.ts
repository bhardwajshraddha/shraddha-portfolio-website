import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { fontFamily: { sans: ["var(--font-inter)", "Arial", "sans-serif"] }, colors: { ink: "#17211d", moss: "#355e4c", lime: "#c9f269", cream: "#f5f4ef" }, boxShadow: { soft: "0 16px 40px rgba(25, 45, 36, .10)" } } }, plugins: [] };
export default config;
