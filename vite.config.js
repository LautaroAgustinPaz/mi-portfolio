import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // Solo el plugin de React, sin configuraciones adicionales
  base: "/"
});