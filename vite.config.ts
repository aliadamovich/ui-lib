import { resolve } from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import { dependencies, devDependencies } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'joyfy-ui-kit',
      // the proper extensions will be added
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react/jsx-runtime',
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
      ],
    },
    target: 'esnext',
    sourcemap: true,
  },
})
