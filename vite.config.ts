 import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Utilise le plugin installé
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Si tu veux ajouter un plugin uniquement en dev
    // mode === "development" && monPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
