import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Swaastya-web-/", // <--- Ensure this line is present and correct
  plugins: [react()],
});
