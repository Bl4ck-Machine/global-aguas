import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Ignora erros de build
    tolerateSingleBuildFailure: true,
  },
  optimizeDeps : { ignoreBuildErrors: true, 
  },
})
