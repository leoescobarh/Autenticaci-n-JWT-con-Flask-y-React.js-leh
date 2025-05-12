import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        host: true,  // Permite accesos externos
        strictPort: true // Evita que cambie de puerto si 3000 está ocupado
    },
    build: {
        outDir: 'dist'
    }
})
