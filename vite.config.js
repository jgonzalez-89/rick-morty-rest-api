import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import replace from '@rollup/plugin-replace';


export default defineConfig({
  plugins: [
    react(),
    replace({
      preventAssignment: true,
      'process.env.BACKEND_URL': JSON.stringify(process.env.BACKEND_URL),
    }),
  ],
});


