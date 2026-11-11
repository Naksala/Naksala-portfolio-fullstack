import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// During development, any request to /api is forwarded to the Express server,
// so the React code never needs to know the backend's port.
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: { "/api": "http://localhost:5000" },
  },
});
