import path from "path";
import tailwindcss from "@tailwindcss/vite";



import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const viteConfig = () => {


  return defineConfig({
    base: "/DestinyGuardianDashboard/",  // Configura la base para GitHub Pages
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  });
};

export default viteConfig;
