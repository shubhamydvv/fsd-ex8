/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Use jsdom for component testing
    globals: true, // Allow usage of test functions like `describe` and `it` without importing
    setupFiles: './src/setupTests.ts',
  },
})
