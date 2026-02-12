import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "MaterialGob",
      formats: ["es", "cjs"],
      fileName: (format) => `material-gob.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
})
