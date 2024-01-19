import { defineConfig } from 'vite';
import tsconfigPaths from "vite-tsconfig-paths";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    federation({
      name: "merchant",
      filename: "remoteEntry.js",
      exposes: {
        "./CatalogMerchant": "./src/App",
        "./store": "./src/store"
      },
      shared: ["react", "react-dom", "jotai"],
    }),
  ],
  build: {
    outDir: 'merchant',
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
